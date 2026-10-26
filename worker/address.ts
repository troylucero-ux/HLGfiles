// Checks whether a typed street address exists. Two free public databases are used, no keys needed:
//
// 1. Los Angeles County's address-point database (CAMS, about 2.9 million individual addresses). It lists exact house
//    numbers, so it catches a made-up number on a real street such as "123 Main St, Los Angeles".
// 2. The US Census geocoder, which only knows street address RANGES. It is used for addresses outside Los Angeles County,
//    and as a fallback if the county service is down.
//
// Neither list is perfect (new buildings and some spellings such as "St Charles" vs "Saint Charles" can be missing), so
// "not found" is a warning for a person to review, never a reason to block a lead.

export type AddressCheck =
	| { status: 'verified'; matched: string; source: 'la-county' | 'census' }
	| { status: 'not_found' }
	| { status: 'unchecked' };

const CAMS_URL = 'https://public.gis.lacounty.gov/arcgis/rest/services/DRP/GISNET_Public/MapServer/402/query';
const CENSUS_URL = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress';

const DIRECTIONS = new Set(['N', 'S', 'E', 'W', 'NORTH', 'SOUTH', 'EAST', 'WEST']);

type Parsed = { numbers: string[]; streetKey: string; zip: string | null; upper: string };

function parseAddress(raw: string): Parsed | null {
	const upper = raw.toUpperCase().replace(/[.,#]/g, ' ').replace(/\s+/g, ' ').trim();
	const m = upper.match(/^(\d+)(?:\s*[-&]\s*(\d+))?\s+(.+)$/);
	if (!m) return null;
	const words = m[3].split(' ');
	while (words.length > 1 && DIRECTIONS.has(words[0])) words.shift();
	const zip = upper.match(/\b(9\d{4})\b/)?.[1] ?? null;
	return { numbers: [m[1], m[2]].filter((n): n is string => Boolean(n)), streetKey: words[0], zip, upper };
}

type CamsRecord = { Number?: string; StreetName?: string; ZipCode?: string; LegalComm?: string; PostComm1?: string; FullAddress?: string };

async function lookupCams(p: Parsed, timeoutMs: number): Promise<CamsRecord[]> {
	const keys = p.streetKey === 'ST' || p.streetKey === 'SAINT' ? ['SAINT', 'ST'] : [p.streetKey];
	const safe = (s: string) => s.replace(/'/g, "''");
	const where =
		`Number IN (${p.numbers.map((n) => `'${safe(n)}'`).join(',')}) AND (` +
		keys.map((k) => `UPPER(StreetName) LIKE '${safe(k)}%'`).join(' OR ') +
		')';
	const url = new URL(CAMS_URL);
	url.searchParams.set('where', where);
	url.searchParams.set('outFields', 'Number,StreetName,ZipCode,LegalComm,PostComm1,FullAddress');
	url.searchParams.set('resultRecordCount', '100');
	url.searchParams.set('returnGeometry', 'false');
	url.searchParams.set('f', 'json');
	const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
	if (!res.ok) throw new Error(`CAMS returned ${res.status}`);
	const data = (await res.json()) as { error?: unknown; features?: { attributes: CamsRecord }[] };
	if (data.error) throw new Error('CAMS query error');
	return (data.features ?? []).map((f) => f.attributes);
}

const containsWord = (haystack: string, needle: string) => new RegExp(`(^| )${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}( |$)`).test(haystack);

// Records whose full street name appears in what the visitor typed ("Main" matches, "Maine" does not).
function sameStreet(records: CamsRecord[], p: Parsed): CamsRecord[] {
	// The county writes "St Charles" where visitors type "Saint Charles", so compare both with "SAINT" shortened to "ST".
	const shortSaint = (text: string) => text.replace(/(^| )SAINT /g, '$1ST ');
	const typed = shortSaint(p.upper);
	return records.filter((r) => {
		const street = shortSaint((r.StreetName ?? '').toUpperCase().replace(/[.,]/g, '').trim());
		return street !== '' && containsWord(typed, street);
	});
}

type CensusMatch = { matchedAddress?: string };

async function lookupCensus(address: string, timeoutMs: number): Promise<CensusMatch[]> {
	const url = `${CENSUS_URL}?address=${encodeURIComponent(address)}&benchmark=Public_AR_Current&format=json`;
	const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
	if (!res.ok) throw new Error(`Census geocoder returned ${res.status}`);
	const data = (await res.json()) as { result?: { addressMatches?: CensusMatch[] } };
	return data.result?.addressMatches ?? [];
}

async function censusCheck(address: string, timeoutMs: number): Promise<string | null> {
	let matches = await lookupCensus(address, timeoutMs);
	// Visitors often leave off the state. Our market is California, so retry with it before giving up.
	if (!matches.length && !/\b(CA|California)\b/i.test(address)) matches = await lookupCensus(`${address}, CA`, timeoutMs);
	if (!matches.length) return null;
	// A bare "LA" can mean Louisiana. Prefer a California match when there is more than one.
	return (matches.find((m) => /,\s*CA,/.test(m.matchedAddress ?? '')) ?? matches[0]).matchedAddress ?? address;
}

// Zip codes that belong to Los Angeles County (90001-91899 and the Antelope Valley 935xx). The county database should
// list a real address there, so a missing address is suspicious. Outside the county we can only use the Census check.
const inLaCounty = (zip: string | null) => zip !== null && ((zip >= '90001' && zip <= '91899') || zip.startsWith('935'));

export async function checkAddress(raw: string, timeoutMs = 3500): Promise<AddressCheck> {
	const address = raw.replace(/\s+/g, ' ').trim().slice(0, 200);
	const parsed = parseAddress(address);
	// A house number and a street name are the minimum worth checking.
	if (!parsed || address.length < 6) return { status: 'not_found' };

	const [cams, census] = await Promise.allSettled([lookupCams(parsed, timeoutMs), censusCheck(address, timeoutMs)]);
	const censusMatched = census.status === 'fulfilled' ? census.value : undefined; // undefined = the service failed

	if (cams.status === 'fulfilled') {
		const candidates = sameStreet(cams.value, parsed);
		// Strong match: the typed zip or city agrees with a record, or the house number and street are unique in the county.
		const strong =
			candidates.find((r) => parsed.zip && r.ZipCode === parsed.zip) ??
			candidates.find((r) => [r.LegalComm, r.PostComm1].some((c) => c && containsWord(parsed.upper, c.toUpperCase()))) ??
			(candidates.length === 1 && !parsed.zip ? candidates[0] : undefined);
		if (strong) return { status: 'verified', matched: strong.FullAddress ?? address, source: 'la-county' };
		// The county has this house number on a street of that name, but not in the city or ZIP that was typed (or no city was
		// typed and the street name exists in several cities). Either way the visitor should check it.
		if (candidates.length > 0) return { status: 'not_found' };

		if (censusMatched === undefined) return { status: 'unchecked' };
		if (censusMatched === null) return { status: 'not_found' };
		// The Census knows the street, but the county has no such house number there. Inside the county that points to a
		// wrong number or a made-up address; outside the county the Census answer is the best we have.
		const censusZip = censusMatched.match(/\b(9\d{4})\b/)?.[1] ?? parsed.zip;
		if (inLaCounty(censusZip)) return { status: 'not_found' };
		return { status: 'verified', matched: censusMatched, source: 'census' };
	}

	// The county service is unavailable: fall back to the Census range check alone.
	if (censusMatched === undefined) return { status: 'unchecked' };
	if (censusMatched === null) return { status: 'not_found' };
	return { status: 'verified', matched: censusMatched, source: 'census' };
}

// One line for the Pipedrive note, so the team can see at a glance whether the address looked real.
export function describeAddressCheck(check: AddressCheck): string {
	if (check.status === 'verified') {
		const where = check.source === 'la-county' ? "Los Angeles County's address database" : 'the US Census address database';
		return `Address check: found in ${where} as ${check.matched}.`;
	}
	if (check.status === 'not_found') {
		return 'Address check: NOT FOUND (checked against Los Angeles County and US Census address data). It may be a typo, a new building, a missing city or ZIP, or a made-up address. Confirm it with the visitor before spending time on it.';
	}
	return 'Address check: could not be run (service unavailable).';
}
