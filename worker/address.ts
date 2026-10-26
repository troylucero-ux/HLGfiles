// Checks whether a typed street address exists, using the free US Census Bureau geocoder (no key needed).
// It matches the street name and house number against Census street address ranges, so it catches made-up streets,
// typos, and wrong cities. It cannot prove that one exact house number exists on a real street, and it can miss
// brand-new buildings, so a "not found" result is a warning for a person to review, never a reason to block a lead.

export type AddressCheck =
	| { status: 'verified'; matched: string }
	| { status: 'not_found' }
	| { status: 'unchecked' };

const CENSUS_URL = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress';

type CensusMatch = { matchedAddress?: string };

async function lookup(address: string, timeoutMs: number): Promise<CensusMatch[]> {
	const url = `${CENSUS_URL}?address=${encodeURIComponent(address)}&benchmark=Public_AR_Current&format=json`;
	const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
	if (!res.ok) throw new Error(`Census geocoder returned ${res.status}`);
	const data = (await res.json()) as { result?: { addressMatches?: CensusMatch[] } };
	return data.result?.addressMatches ?? [];
}

export async function checkAddress(raw: string, timeoutMs = 3500): Promise<AddressCheck> {
	const address = raw.replace(/\s+/g, ' ').trim().slice(0, 200);
	// A house number and a street name are the minimum worth checking.
	if (!/\d/.test(address) || address.length < 6) return { status: 'not_found' };

	try {
		let matches = await lookup(address, timeoutMs);
		// Visitors often leave off the state. Our market is California, so retry with it before giving up.
		if (!matches.length && !/\b(CA|California)\b/i.test(address)) {
			matches = await lookup(`${address}, CA`, timeoutMs);
		}
		if (!matches.length) return { status: 'not_found' };
		// A bare "LA" can mean Louisiana. Prefer a California match when there is more than one.
		const preferred = matches.find((m) => /,\s*CA,/.test(m.matchedAddress ?? '')) ?? matches[0];
		return { status: 'verified', matched: preferred.matchedAddress ?? address };
	} catch {
		// The Census service is down or slow. Say nothing to the visitor and let the lead through.
		return { status: 'unchecked' };
	}
}

// One line for the Pipedrive note, so the team can see at a glance whether the address looked real.
export function describeAddressCheck(check: AddressCheck): string {
	if (check.status === 'verified') return `Address check: found in the US Census address database as ${check.matched}.`;
	if (check.status === 'not_found') {
		return 'Address check: NOT FOUND in the US Census address database. It may be a typo, a new building, or a made-up address. Confirm it with the visitor before spending time on it.';
	}
	return 'Address check: could not be run (service unavailable).';
}
