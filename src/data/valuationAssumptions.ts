// Sales statistics and valuation assumptions for the free property value calculator
// (/property-value/) and the "2026 Sales Data" section on each submarket page.
//
// Source: "LA County Sales 01.01.26 to 09.22.26.xlsx" (CoStar export supplied by the user),
// filtered to Sale Status = Sold and Property Type = Multifamily (1,321 comps).
//
// RSO buildings (built before 1978, under the LA Rent Stabilization Ordinance) trade differently
// than buildings built 1978 or later (AB 1482), so every figure is computed separately for each
// age group, and only from the submarket's own sales. Nothing here falls back to LA County averages.
// Cap rate ranges are the 25th-75th percentile of comps with a recorded "Actual Cap Rate"; price
// per unit and price per SF are medians with the sale count shown alongside (null only when the
// submarket had no sales in that group). A submarket page or the calculator only shows a cap rate
// range when at least MIN_CAP_RATE_COMPS comps reported one, and the pages only show a median price
// from MIN_PRICE_COMPS_PAGE sales; otherwise they say there isn't enough data.
//
// Expense ratios are set by the brokers (older buildings run higher): 37%-47% for buildings built
// before 1935, 37%-42% for other RSO buildings (1935-1977), and 32%-36% for 1978-or-later buildings. They are used as given rather than derived
// from the export, which only carries cap rate and GRM.
//
// This goes stale as comps age. Re-derive it from a fresh county sales export every quarter or
// two: send Claude the new file and ask it to rerun the analysis and update this file.

export const VALUATION_DATA_AS_OF = 'September 2026';
export const VALUATION_DATA_PERIOD = 'January-September 2026';

// Minimum comps before a figure is shown (see the note at the top of this file).
export const MIN_PRICE_COMPS_PAGE = 3;
export const MIN_CAP_RATE_COMPS = 5;

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

export const SALES_STATS: Record<string, Record<AgeGroup, GroupStats>> = {
	koreatown: {
		rso: {
			pricePerUnit: { median: 173684, compCount: 34 },
			pricePerSf: { median: 230, compCount: 34 },
			capRate: { low: 0.0586, high: 0.0734, compCount: 26 },
		},
		post1978: {
			pricePerUnit: { median: 250000, compCount: 2 },
			pricePerSf: { median: 256, compCount: 2 },
			capRate: null,
		},
	},
	'pico-union': {
		rso: {
			pricePerUnit: { median: 184000, compCount: 11 },
			pricePerSf: { median: 294, compCount: 11 },
			capRate: { low: 0.07, high: 0.08, compCount: 5 },
		},
		post1978: { pricePerUnit: null, pricePerSf: null, capRate: null },
	},
	westlake: {
		rso: {
			pricePerUnit: { median: 133150, compCount: 7 },
			pricePerSf: { median: 237, compCount: 7 },
			capRate: { low: 0.0528, high: 0.062, compCount: 6 },
		},
		post1978: {
			pricePerUnit: { median: 198611, compCount: 1 },
			pricePerSf: { median: 227, compCount: 1 },
			capRate: null,
		},
	},
	'east-hollywood': {
		rso: {
			pricePerUnit: { median: 186667, compCount: 13 },
			pricePerSf: { median: 245, compCount: 13 },
			capRate: { low: 0.06, high: 0.0655, compCount: 7 },
		},
		post1978: {
			pricePerUnit: { median: 339286, compCount: 4 },
			pricePerSf: { median: 324, compCount: 4 },
			capRate: null,
		},
	},
	'silver-lake': {
		rso: {
			pricePerUnit: { median: 225000, compCount: 11 },
			pricePerSf: { median: 270, compCount: 11 },
			capRate: { low: 0.0544, high: 0.063, compCount: 7 },
		},
		post1978: {
			pricePerUnit: { median: 302250, compCount: 2 },
			pricePerSf: { median: 235, compCount: 2 },
			capRate: null,
		},
	},
	brentwood: {
		rso: {
			pricePerUnit: { median: 475000, compCount: 3 },
			pricePerSf: { median: 363, compCount: 3 },
			capRate: null,
		},
		post1978: {
			pricePerUnit: { median: 687417, compCount: 2 },
			pricePerSf: { median: 464, compCount: 2 },
			capRate: null,
		},
	},
	'santa-monica': {
		rso: {
			pricePerUnit: { median: 388333, compCount: 34 },
			pricePerSf: { median: 398, compCount: 34 },
			capRate: { low: 0.0481, high: 0.0596, compCount: 19 },
		},
		post1978: {
			pricePerUnit: { median: 561000, compCount: 3 },
			pricePerSf: { median: 485, compCount: 3 },
			capRate: null,
		},
	},
	'north-hollywood': {
		rso: {
			pricePerUnit: { median: 189500, compCount: 27 },
			pricePerSf: { median: 247, compCount: 27 },
			capRate: { low: 0.0555, high: 0.0698, compCount: 24 },
		},
		post1978: {
			pricePerUnit: { median: 230000, compCount: 7 },
			pricePerSf: { median: 288, compCount: 7 },
			capRate: { low: 0.05, high: 0.058, compCount: 6 },
		},
	},
	'van-nuys': {
		rso: {
			pricePerUnit: { median: 178167, compCount: 12 },
			pricePerSf: { median: 230, compCount: 12 },
			capRate: { low: 0.054, high: 0.0606, compCount: 10 },
		},
		post1978: {
			pricePerUnit: { median: 327586, compCount: 7 },
			pricePerSf: { median: 345, compCount: 7 },
			capRate: { low: 0.0583, high: 0.0597, compCount: 5 },
		},
	},
};

export interface AgeBracket {
	id: string;
	label: string;
	expenseRatioLow: number;
	expenseRatioHigh: number;
}

// Expense ratio brackets follow the same split as the sales stats: buildings built before 1978
// fall under the LA Rent Stabilization Ordinance; 1978-or-later buildings fall under statewide
// AB 1482. Ratios are broker-specified (see the note at the top of this file).
export const AGE_BRACKETS: Record<'pre1935' | 'rso' | 'ab1482', AgeBracket> = {
	pre1935: {
		id: 'pre1935',
		label: 'apartment buildings built before 1935, under the LA Rent Stabilization Ordinance',
		expenseRatioLow: 0.37,
		expenseRatioHigh: 0.47,
	},
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
	if (yearBuilt < 1935) return AGE_BRACKETS.pre1935;
	return yearBuilt < 1978 ? AGE_BRACKETS.rso : AGE_BRACKETS.ab1482;
}
