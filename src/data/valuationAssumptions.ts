// Sales statistics and valuation assumptions for the free property value calculator
// (/property-value/) and the "2026 Sales Data" section on each submarket page.
//
// Source: two CoStar exports supplied by the user, "LA County Sales 01.01.26 to 09.22.26.xlsx" and "CostarExport (22).xlsx"
// (sales dated 9/1/26 to 10/30/26), merged with repeated rows (same address, price, and date) counted once and filtered to
// Sale Status = Sold and Property Type = Multifamily: 1,513 sold comps from January 2 to October 30, 2026, of which 1,407
// remain after the rules below.
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

export const VALUATION_DATA_AS_OF = 'October 2026';
export const VALUATION_DATA_PERIOD = 'January-October 2026';

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

// Neighborhood groups (rebuilt October 30, 2026 so every group can be reproduced from the export). Unless a comment says
// otherwise, each group is the sales in the City of Los Angeles under these CoStar submarket names: Koreatown = Koreatown;
// Pico-Union = Pico-Union and Harvard Heights; Westlake = Westlake North and MacArthur Park; East Hollywood = East
// Hollywood, Little Armenia, and Thai Town; Silver Lake = Silver Lake; Brentwood = ZIP 90049; Santa Monica = Property
// City Santa Monica; North Hollywood = the North Hollywood submarket; Van Nuys = the Van Nuys submarket. The first nine
// were defined differently before this rebuild (that earlier definition was not written down), so their figures moved
// for that reason as well as from the new sales.
export const SALES_STATS: Record<string, Record<AgeGroup, GroupStats>> = {
	koreatown: {
		rso: {
			pricePerUnit: { median: 161875, compCount: 28 },
			pricePerSf: { median: 217, compCount: 28 },
			capRate: { low: 0.0595, high: 0.0767, compCount: 23 },
		},
		post1978: {
			pricePerUnit: null,
			pricePerSf: null,
			capRate: null,
		},
	},
	'pico-union': {
		rso: {
			pricePerUnit: { median: 173945, compCount: 14 },
			pricePerSf: { median: 233, compCount: 14 },
			capRate: { low: 0.0501, high: 0.0771, compCount: 7 },
		},
		post1978: {
			pricePerUnit: null,
			pricePerSf: null,
			capRate: null,
		},
	},
	westlake: {
		rso: {
			pricePerUnit: { median: 135857, compCount: 14 },
			pricePerSf: { median: 219, compCount: 14 },
			capRate: { low: 0.059, high: 0.0719, compCount: 9 },
		},
		post1978: {
			pricePerUnit: { median: 198611, compCount: 1 },
			pricePerSf: { median: 227, compCount: 1 },
			capRate: null,
		},
	},
	'east-hollywood': {
		rso: {
			pricePerUnit: { median: 173684, compCount: 19 },
			pricePerSf: { median: 228, compCount: 19 },
			capRate: { low: 0.0596, high: 0.068, compCount: 16 },
		},
		post1978: {
			pricePerUnit: { median: 259722, compCount: 6 },
			pricePerSf: { median: 323, compCount: 6 },
			capRate: { low: 0.0515, high: 0.0669, compCount: 6 },
		},
	},
	'silver-lake': {
		rso: {
			pricePerUnit: { median: 266667, compCount: 13 },
			pricePerSf: { median: 392, compCount: 13 },
			capRate: { low: 0.0558, high: 0.0629, compCount: 6 },
		},
		post1978: {
			pricePerUnit: { median: 206250, compCount: 1 },
			pricePerSf: { median: 302, compCount: 1 },
			capRate: null,
		},
	},
	brentwood: {
		rso: {
			pricePerUnit: { median: 446250, compCount: 4 },
			pricePerSf: { median: 407, compCount: 4 },
			capRate: null,
		},
		post1978: {
			pricePerUnit: { median: 779217, compCount: 2 },
			pricePerSf: { median: 582, compCount: 2 },
			capRate: null,
		},
	},
	'santa-monica': {
		rso: {
			pricePerUnit: { median: 387500, compCount: 37 },
			pricePerSf: { median: 415, compCount: 37 },
			capRate: { low: 0.0493, high: 0.0594, compCount: 22 },
		},
		post1978: {
			pricePerUnit: { median: 592764, compCount: 4 },
			pricePerSf: { median: 539, compCount: 4 },
			capRate: null,
		},
	},
	'north-hollywood': {
		rso: {
			pricePerUnit: { median: 195000, compCount: 31 },
			pricePerSf: { median: 276, compCount: 31 },
			capRate: { low: 0.0542, high: 0.0706, compCount: 28 },
		},
		post1978: {
			pricePerUnit: { median: 233215, compCount: 6 },
			pricePerSf: { median: 285, compCount: 6 },
			capRate: null,
		},
	},
	'van-nuys': {
		rso: {
			pricePerUnit: { median: 195833, compCount: 19 },
			pricePerSf: { median: 214, compCount: 19 },
			capRate: { low: 0.054, high: 0.0646, compCount: 13 },
		},
		post1978: {
			pricePerUnit: { median: 235834, compCount: 6 },
			pricePerSf: { median: 312, compCount: 6 },
			capRate: null,
		},
	},
	// The export has no "Mid-Wilshire" submarket; its "Miracle Mile" submarket (the Wilshire corridor blocks
	// from Fairfax to La Brea, ZIPs 90036 and 90019) stands in for it. The 2007 Wilshire portfolio sale with
	// no price is left out.
	'mid-wilshire': {
		rso: {
			pricePerUnit: { median: 209375, compCount: 5 },
			pricePerSf: { median: 277, compCount: 5 },
			capRate: { low: 0.0563, high: 0.0641, compCount: 5 },
		},
		post1978: {
			pricePerUnit: { median: 567917, compCount: 2 },
			pricePerSf: { median: 394, compCount: 2 },
			capRate: null,
		},
	},
	// West Hollywood is its own city: comps are the export's sales with Property City = West Hollywood.
	// Its rent control covers buildings from before July 1, 1979 rather than October 1978, but the export
	// has no 1978 West Hollywood sales, so the usual 1978 split gives the same groups.
	'west-hollywood': {
		rso: {
			pricePerUnit: { median: 279500, compCount: 13 },
			pricePerSf: { median: 298, compCount: 13 },
			capRate: { low: 0.0498, high: 0.0585, compCount: 10 },
		},
		post1978: {
			pricePerUnit: { median: 566667, compCount: 3 },
			pricePerSf: { median: 391, compCount: 3 },
			capRate: null,
		},
	},
	// Added October 22, 2026 from the same CoStar export, with these rules: Sale Status = Sold and Property Type =
	// Multifamily, sales whose price is marked Approximate or Allocated left out, portfolio sales of 100 or more
	// units left out, and repeated rows (same address, price, and date) counted once. The older/newer split is
	// the same 1978 line as everywhere else, though Beverly Hills' rent control follows its own rules.
	// Beverly Hills is the export's Property City = Beverly Hills (16 sales after the rules above).
	'beverly-hills': {
		rso: {
			pricePerUnit: { median: 462500, compCount: 15 },
			pricePerSf: { median: 445, compCount: 15 },
			capRate: { low: 0.0437, high: 0.0499, compCount: 12 },
		},
		post1978: {
			pricePerUnit: { median: 1320000, compCount: 1 },
			pricePerSf: { median: 592, compCount: 1 },
			capRate: null,
		},
	},
	// West LA combines the City of LA ZIP codes 90024 (Westwood), 90025 and 90064 (West Los Angeles), 90034
	// (Palms), and 90066 (Mar Vista), 92 sales after the rules above. Brentwood (90049) is its own page and
	// Culver City is a separate city, so both are left out. WEST_LA_AREAS below splits the same sales by area.
	'west-la': {
		rso: {
			pricePerUnit: { median: 251667, compCount: 69 },
			pricePerSf: { median: 308, compCount: 69 },
			capRate: { low: 0.0483, high: 0.0631, compCount: 50 },
		},
		post1978: {
			pricePerUnit: { median: 407143, compCount: 21 },
			pricePerSf: { median: 402, compCount: 21 },
			capRate: { low: 0.05, high: 0.0538, compCount: 12 },
		},
	},
	// Added October 27, 2026 from the same CoStar export and the same rules as Beverly Hills above (Sale Status = Sold,
	// Property Type = Multifamily, Approximate or Allocated prices and portfolios of 100 or more units left out, repeated
	// rows counted once, price per unit = sale price divided by units, cap rates the 25th to 75th percentile).
	// Hollywood is the export's Hollywood submarket in the City of Los Angeles (31 sales; ZIPs 90028, 90038, 90046).
	hollywood: {
		rso: {
			pricePerUnit: { median: 210400, compCount: 25 },
			pricePerSf: { median: 267, compCount: 25 },
			capRate: { low: 0.057, high: 0.0699, compCount: 20 },
		},
		post1978: {
			pricePerUnit: { median: 708929, compCount: 6 },
			pricePerSf: { median: 395, compCount: 6 },
			capRate: { low: 0.0534, high: 0.0663, compCount: 5 },
		},
	},
	// South LA combines the export's South Central LA and Crenshaw submarkets in the City of Los Angeles (53 sales;
	// ZIPs 90003, 90007, 90008, 90018, 90037, 90044, 90047, 90062). Only 2 were built in 1978 or later, so that group
	// shows "not enough data".
	'south-la': {
		rso: {
			pricePerUnit: { median: 146354, compCount: 48 },
			pricePerSf: { median: 193, compCount: 48 },
			capRate: { low: 0.0637, high: 0.0799, compCount: 27 },
		},
		post1978: {
			pricePerUnit: { median: 335443, compCount: 3 },
			pricePerSf: { median: 467, compCount: 3 },
			capRate: null,
		},
	},
};

// Median price per unit for older (built before 1978) buildings inside the West LA group, by area, from the same
// sales. Shown on the West LA page, which only prints an area when it has at least MIN_PRICE_COMPS_PAGE sales.
export const WEST_LA_AREAS: { name: string; zips: string; pricePerUnit: { median: number; compCount: number } }[] = [
	{ name: 'Westwood', zips: '90024', pricePerUnit: { median: 450000, compCount: 7 } },
	{ name: 'West Los Angeles', zips: '90025 and 90064', pricePerUnit: { median: 303333, compCount: 25 } },
	{ name: 'Palms', zips: '90034', pricePerUnit: { median: 237500, compCount: 27 } },
	{ name: 'Mar Vista', zips: '90066', pricePerUnit: { median: 247542, compCount: 10 } },
];

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
