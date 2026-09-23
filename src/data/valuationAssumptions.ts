// Sales statistics and valuation assumptions for the free property value calculator
// (/property-value/) and the "2026 Sales Data" section on each submarket page.
//
// Source: "LA County Sales 01.01.26 to 09.22.26.xlsx" (CoStar export supplied by the user),
// filtered to Sale Status = Sold and Property Type = Multifamily (1,321 comps).
//
// RSO buildings (built before 1978, under the LA Rent Stabilization Ordinance) trade differently
// than buildings built 1978 or later (AB 1482), so every figure is computed separately for each
// age group. Cap rate ranges are the 25th-75th percentile of comps with a recorded "Actual Cap
// Rate"; price per unit and price per SF are medians. A metric is only published for a submarket
// when it has at least 10 comps in that age group this year; otherwise it is null and callers fall
// back to the LA County figure for the same age group (see statFor below). No submarket has 10 or
// more post-1978 comps yet, so those all fall back to county-wide.
//
// Expense ratios are set by the brokers (RSO buildings run higher than newer ones): 37%-42% for
// RSO buildings and 32%-36% for 1978-or-later buildings. They are used as given rather than derived
// from the export, which only carries cap rate and GRM.
//
// This goes stale as comps age. Re-derive it from a fresh county sales export every quarter or
// two: send Claude the new file and ask it to rerun the analysis and update this file.

export const VALUATION_DATA_AS_OF = 'September 2026';
export const VALUATION_DATA_SOURCE = 'LA County sold multifamily transactions, January-September 2026';

export type AgeGroup = 'rso' | 'post1978';

export const AGE_GROUP_LABELS: Record<AgeGroup, { title: string; short: string }> = {
	rso: { title: 'Built Before 1978 (RSO)', short: 'built before 1978' },
	post1978: { title: 'Built 1978 or Later (AB 1482)', short: 'built 1978 or later' },
};

export interface GroupStats {
	pricePerUnit: { median: number; compCount: number } | null;
	pricePerSf: { median: number; compCount: number } | null;
	capRate: { low: number; high: number; compCount: number } | null; // decimals, e.g. 0.0586 = 5.86%
}

const NONE: GroupStats = { pricePerUnit: null, pricePerSf: null, capRate: null };

// Submarkets not listed here (or metrics that are null) fall back to the county-wide figure.
export const SALES_STATS: Record<string, Record<AgeGroup, GroupStats>> = {
	county: {
		rso: {
			pricePerUnit: { median: 220000, compCount: 1028 },
			pricePerSf: { median: 284, compCount: 1028 },
			capRate: { low: 0.0521, high: 0.0661, compCount: 719 },
		},
		post1978: {
			pricePerUnit: { median: 331250, compCount: 218 },
			pricePerSf: { median: 328, compCount: 218 },
			capRate: { low: 0.0497, high: 0.063, compCount: 154 },
		},
	},
	koreatown: {
		rso: {
			pricePerUnit: { median: 173684, compCount: 34 },
			pricePerSf: { median: 230, compCount: 34 },
			capRate: { low: 0.0586, high: 0.0734, compCount: 26 },
		},
		post1978: NONE,
	},
	'pico-union': {
		rso: {
			pricePerUnit: { median: 184000, compCount: 11 },
			pricePerSf: { median: 294, compCount: 11 },
			capRate: null,
		},
		post1978: NONE,
	},
	'east-hollywood': {
		rso: {
			pricePerUnit: { median: 186667, compCount: 13 },
			pricePerSf: { median: 245, compCount: 13 },
			capRate: null,
		},
		post1978: NONE,
	},
	'silver-lake': {
		rso: {
			pricePerUnit: { median: 225000, compCount: 11 },
			pricePerSf: { median: 270, compCount: 11 },
			capRate: null,
		},
		post1978: NONE,
	},
	'santa-monica': {
		rso: {
			pricePerUnit: { median: 388333, compCount: 34 },
			pricePerSf: { median: 398, compCount: 34 },
			capRate: { low: 0.0481, high: 0.0596, compCount: 19 },
		},
		post1978: NONE,
	},
	'north-hollywood': {
		rso: {
			pricePerUnit: { median: 189500, compCount: 27 },
			pricePerSf: { median: 247, compCount: 27 },
			capRate: { low: 0.0555, high: 0.0698, compCount: 24 },
		},
		post1978: NONE,
	},
	'van-nuys': {
		rso: {
			pricePerUnit: { median: 178167, compCount: 12 },
			pricePerSf: { median: 230, compCount: 12 },
			capRate: { low: 0.054, high: 0.0606, compCount: 10 },
		},
		post1978: NONE,
	},
	// westlake and brentwood: fewer than 10 comps in either age group this year, so both fall back
	// to county-wide for every metric.
};

// Returns the submarket's own figure when it has one, otherwise the county-wide figure, plus
// whether the fallback was used so the UI can label the source honestly.
export function statFor<K extends keyof GroupStats>(
	submarket: string | null,
	group: AgeGroup,
	metric: K
): { value: NonNullable<GroupStats[K]>; usedCountyFallback: boolean } {
	const local = submarket ? SALES_STATS[submarket]?.[group]?.[metric] : null;
	if (local) return { value: local as NonNullable<GroupStats[K]>, usedCountyFallback: false };
	return { value: SALES_STATS.county[group][metric] as NonNullable<GroupStats[K]>, usedCountyFallback: true };
}

export interface AgeBracket {
	id: string;
	label: string;
	expenseRatioLow: number;
	expenseRatioHigh: number;
}

// Expense ratio brackets follow the same split as the sales stats: buildings built before 1978
// fall under the LA Rent Stabilization Ordinance; 1978-or-later buildings fall under statewide
// AB 1482. Ratios are broker-specified (see the note at the top of this file).
export const AGE_BRACKETS: Record<'rso' | 'ab1482', AgeBracket> = {
	rso: {
		id: 'rso',
		label: 'apartment buildings built before 1978, under the LA Rent Stabilization Ordinance',
		expenseRatioLow: 0.37,
		expenseRatioHigh: 0.42,
	},
	ab1482: {
		id: 'ab1482',
		label: "apartment buildings built 1978 or later, under AB 1482's rent cap",
		expenseRatioLow: 0.32,
		expenseRatioHigh: 0.36,
	},
};

export function bracketForYear(yearBuilt: number): AgeBracket {
	return yearBuilt < 1978 ? AGE_BRACKETS.rso : AGE_BRACKETS.ab1482;
}
