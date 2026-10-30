// Figures for the October 2026 month-end market report (src/data/posts.ts) that do not come from our own sales data.
// Treasury figures are the U.S. Department of the Treasury's Daily Treasury Par Yield Curve Rates for the 10-year
// maturity (October 30 from treasury.gov; September and the monthly averages cross-checked against the Federal Reserve
// Bank of St. Louis FRED series DGS10). CoStar figures are read from CoStar's "Los Angeles Multi-Family Market Report"
// dated 10/30/2026 and are paraphrased in the article, not reproduced. Next month, replace this file with the new
// month's figures along with the regenerated sales data (node scripts/market-update.mjs).

export const TREASURY = {
	asOf: '2026-10-30',
	close: 4.94, // October 30, the last trading day of the month
	septemberClose: 5.29, // September 30
	octoberFirstClose: 5.24, // October 1
	octoberHigh: 5.31, // October 5
	octoberLow: 4.94, // October 30
	februaryLow: 3.97, // the lowest close of 2026 so far, at the end of February
	monthlyAverage: { 1: 4.21, 2: 4.13, 3: 4.25, 4: 4.32, 5: 4.48, 6: 4.47, 7: 4.6, 8: 4.68, 9: 4.99, 10: 5.14 } as Record<number, number>,
} as const;

export const COSTAR_OCT_2026 = {
	reportDate: 'October 30, 2026',
	vacancy: 5.5,
	nationalVacancy: 7.9,
	vacancyFourFiveStar: 9.4,
	vacancyThreeStar: 5.4,
	vacancyOneTwoStar: 4.6,
	askingRentGrowth12Mo: 0.4,
	deliveredUnits12Mo: 9378,
	absorbedUnits12Mo: 7792,
	underConstructionUnits: 17712,
	salesVolume12MoBillions: 8.0,
	priorSalesVolume12MoBillions: 8.1,
	pricePerUnit: 340000,
	pricePerUnitPeak2021: 430000,
	institutionalSellerSharePct: 8,
	institutionalSellerShareBeforeUlaPct: 13,
	institutionalBuyerSharePct: 13,
	institutionalBuyerShareBeforeUlaPct: 16,
	vacancySantaMonica: 8.1,
	vacancyDowntown: 9.5,
	vacancySouthLa: 3.5,
	vacancySoutheastLa: 3.6,
} as const;
