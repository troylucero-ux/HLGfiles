// Cap rate and expense ratio assumptions for the free property value calculator (/property-value/).
//
// Source: "LA County Sales 01.01.26 to 09.22.26.xlsx" (CoStar export supplied by the user),
// filtered to Sale Status = Sold and Property Type = Multifamily (1,321 comps).
//
// Cap rate ranges are the 25th-75th percentile of each submarket's own comps with a recorded
// "Actual Cap Rate." Submarkets with fewer than ~10 such comps this year (Pico-Union, Westlake,
// Brentwood) fall back to the county-wide range instead of publishing a thin, unreliable number.
//
// Expense ratios are IMPLIED from real comps, not assumed: Cap Rate = (1 - Expense Ratio) / GRM,
// so Expense Ratio = 1 - (Cap Rate x GRM), computed only for the 967 comps reporting both figures,
// then split by building-age bracket (25th-75th percentile per bracket).
//
// This goes stale as comps age. Re-derive it from a fresh county sales export every quarter or
// two — send Claude the new file and ask it to rerun the analysis and update this file.

export const VALUATION_DATA_AS_OF = 'September 2026';
export const VALUATION_DATA_SOURCE = 'LA County sold multifamily transactions, January-September 2026';

export interface CapRateRange {
	low: number; // decimal, e.g. 0.0583 = 5.83%
	high: number;
	compCount: number;
	areaLabel: string;
}

export const COUNTY_WIDE_CAP_RATE: CapRateRange = {
	low: 0.0512,
	high: 0.0656,
	compCount: 879,
	areaLabel: 'Los Angeles County',
};

// null = too few comps this year to trust a submarket-specific range; falls back to county-wide.
export const SUBMARKET_CAP_RATES: Record<string, CapRateRange | null> = {
	koreatown: { low: 0.0583, high: 0.0734, compCount: 27, areaLabel: 'Koreatown' },
	'pico-union': null,
	westlake: null,
	'east-hollywood': { low: 0.06, high: 0.0677, compCount: 11, areaLabel: 'East Hollywood' },
	'silver-lake': { low: 0.0544, high: 0.063, compCount: 9, areaLabel: 'Silver Lake' },
	brentwood: null,
	'santa-monica': { low: 0.0497, high: 0.0596, compCount: 21, areaLabel: 'Santa Monica' },
	'north-hollywood': { low: 0.0552, high: 0.0687, compCount: 30, areaLabel: 'North Hollywood' },
	'van-nuys': { low: 0.054, high: 0.0606, compCount: 15, areaLabel: 'Van Nuys' },
};

export function capRateForSubmarket(submarket: string | null): CapRateRange {
	const found = submarket ? SUBMARKET_CAP_RATES[submarket] : null;
	return found ?? COUNTY_WIDE_CAP_RATE;
}

// Same source export as the cap rate figures above. Median price/unit, shown on each submarket
// page when a submarket has at least 10 comps reporting it this year; null below that threshold.
export interface SalesStat {
	compCount: number;
	medianPricePerUnit: number;
}

export const SUBMARKET_SALES_STATS: Record<string, SalesStat | null> = {
	koreatown: { compCount: 36, medianPricePerUnit: 175862 },
	'pico-union': { compCount: 11, medianPricePerUnit: 184000 },
	westlake: null, // fewer than 10 comps reporting price/unit this year
	'east-hollywood': { compCount: 17, medianPricePerUnit: 225000 },
	'silver-lake': { compCount: 13, medianPricePerUnit: 230556 },
	brentwood: null, // fewer than 10 comps reporting price/unit this year
	'santa-monica': { compCount: 37, medianPricePerUnit: 405833 },
	'north-hollywood': { compCount: 34, medianPricePerUnit: 195000 },
	'van-nuys': { compCount: 19, medianPricePerUnit: 225000 },
};

export interface AgeBracket {
	id: string;
	label: string;
	expenseRatioLow: number;
	expenseRatioHigh: number;
}

// Brackets mirror LA's actual rent-control framework (same one explained in the AB 1482 Insights
// post): pre-1978 buildings fall under the LA Rent Stabilization Ordinance; 1978-but-older-than-15-
// years fall under statewide AB 1482; anything newer sits inside AB 1482's rolling 15-year
// new-construction exemption. The exemption cutoff year is computed live (see bracketForYear)
// rather than hardcoded, since it moves forward every year.
export const AGE_BRACKETS: Record<'rso' | 'ab1482' | 'exempt', AgeBracket> = {
	rso: {
		id: 'rso',
		label: 'apartment buildings built before 1978, under the LA Rent Stabilization Ordinance',
		expenseRatioLow: 0.303,
		expenseRatioHigh: 0.395,
	},
	ab1482: {
		id: 'ab1482',
		label: "apartment buildings built 1978 or later but more than 15 years ago, under AB 1482's rent cap",
		expenseRatioLow: 0.303,
		expenseRatioHigh: 0.389,
	},
	exempt: {
		id: 'exempt',
		label: 'new-construction apartment buildings built within the last 15 years',
		expenseRatioLow: 0.207,
		expenseRatioHigh: 0.298,
	},
};

export function bracketForYear(yearBuilt: number): AgeBracket {
	const exemptCutoff = new Date().getFullYear() - 15;
	if (yearBuilt >= exemptCutoff) return AGE_BRACKETS.exempt;
	if (yearBuilt >= 1978) return AGE_BRACKETS.ab1482;
	return AGE_BRACKETS.rso;
}
