// Builds src/data/marketUpdate.ts from a CoStar sales export, for the quarterly "LA Apartment Market Update"
// article. Run it each quarter with the new export:
//
//   npm install --no-save xlsx
//   node scripts/market-update.mjs "C:/path/to/LA County Sales 01.01.26 to 09.22.26.xlsx" 2026-q3
//
// The article (src/data/posts.ts) and its charts (src/components/MarketUpdateCharts.astro) read the file this
// writes, so nothing in the article is typed in by hand. The rules match the neighborhood sales data in
// src/data/valuationAssumptions.ts: Sale Status = Sold, Property Type = Multifamily, sales whose price is
// marked Approximate or Allocated left out, portfolio sales of 100 or more units left out, and repeated rows
// (same address, price, and date) counted once. Never use or print broker, buyer, or seller company names.
import fs from 'node:fs';
import XLSX from 'xlsx';

// Optional third and fourth arguments write a different data file and export name, for example the month-end
// report: node scripts/market-update.mjs <export.xlsx> 2026-10 marketReportOct2026 MARKET_REPORT_OCT_2026
const [file, key, outName = 'marketUpdate', exportName = 'MARKET_UPDATE'] = process.argv.slice(2);
if (!file || !key) {
	console.error('usage: node scripts/market-update.mjs <export.xlsx> <period-key, e.g. 2026-q3> [data-file-name export-name]');
	process.exit(1);
}

const wb = XLSX.readFile(file);
const all = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: null });
let rows = all.filter(
	(r) =>
		r['Sale Status'] === 'Sold' &&
		r['Property Type'] === 'Multifamily' &&
		r['Sale Price Comment'] !== 'Approximate' &&
		r['Sale Price Comment'] !== 'Allocated' &&
		r['Number of Units'] > 0 &&
		r['Number of Units'] < 100 &&
		r['Sale Price'] > 0,
);
const seen = new Set();
rows = rows.filter((r) => {
	const k = [r['Property Address'], r['Sale Price'], r['Sale Date']].join('|');
	if (seen.has(k)) return false;
	seen.add(k);
	return true;
});

const toDate = (serial) => new Date(Math.round((serial - 25569) * 86400 * 1000));
for (const r of rows) {
	const d = toDate(r['Sale Date']);
	r._d = d;
	r._q = Math.floor(d.getUTCMonth() / 3) + 1;
}
const median = (a) => {
	const s = [...a].sort((x, y) => x - y);
	const m = s.length >> 1;
	return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const pctile = (a, p) => {
	const s = [...a].sort((x, y) => x - y);
	const i = (s.length - 1) * p;
	const lo = Math.floor(i);
	const hi = Math.ceil(i);
	return s[lo] + (s[hi] - s[lo]) * (i - lo);
};
const caps = (rs) => rs.filter((r) => r['Actual Cap Rate'] > 0).map((r) => r['Actual Cap Rate'] / (r['Actual Cap Rate'] > 1 ? 100 : 1));
const r1 = (n) => Math.round(n * 10) / 10;
const r2 = (n) => Math.round(n * 100) / 100;

const summary = (rs) => {
	const ppu = rs.map((r) => r['Price Per Unit']).filter((x) => x > 0);
	const psf = rs.map((r) => r['Price Per SF']).filter((x) => x > 0);
	const c = caps(rs);
	return {
		sales: rs.length,
		volumeMillions: Math.round(rs.reduce((s, r) => s + r['Sale Price'], 0) / 1e6),
		pricePerUnit: Math.round(median(ppu)),
		pricePerSf: Math.round(median(psf)),
		capRateCount: c.length,
		capRateMedian: r2(median(c) * 100),
		capRateLow: c.length >= 5 ? r2(pctile(c, 0.25) * 100) : null,
		capRateHigh: c.length >= 5 ? r2(pctile(c, 0.75) * 100) : null,
	};
};

const older = rows.filter((r) => r['Year Built'] < 1978);
const newer = rows.filter((r) => r['Year Built'] >= 1978);
const first = new Date(Math.min(...rows.map((r) => r._d)));
const last = new Date(Math.max(...rows.map((r) => r._d)));

const quarters = [1, 2, 3, 4]
	.map((q) => {
		const a = rows.filter((r) => r._q === q);
		if (!a.length) return null;
		const o = older.filter((r) => r._q === q);
		const asks = a.filter((r) => r['Asking Price'] > 0).map((r) => r['Sale Price'] / r['Asking Price']);
		return {
			quarter: q,
			sales: a.length,
			volumeMillions: Math.round(a.reduce((s, r) => s + r['Sale Price'], 0) / 1e6),
			olderSales: o.length,
			olderPricePerUnit: Math.round(median(o.map((r) => r['Price Per Unit']).filter((x) => x > 0))),
			olderCapRateMedian: r2(median(caps(o)) * 100),
			olderCapRateCount: caps(o).length,
			askingMedianPct: r1(median(asks) * 100),
		};
	})
	.filter(Boolean);

const months = [...new Set(rows.map((r) => r._d.getUTCMonth()))]
	.sort((a, b) => a - b)
	.map((m) => {
		const a = rows.filter((r) => r._d.getUTCMonth() === m);
		const o = older.filter((r) => r._d.getUTCMonth() === m);
		return {
			month: m + 1,
			sales: a.length,
			volumeMillions: Math.round(a.reduce((s, r) => s + r['Sale Price'], 0) / 1e6),
			olderSales: o.length,
			olderPricePerUnit: Math.round(median(o.map((r) => r['Price Per Unit']).filter((x) => x > 0))),
			olderCapRateMedian: r2(median(caps(o)) * 100),
			olderCapRateCount: caps(o).length,
		};
	});

const sizeBuckets = [
	['5 to 9 units', 5, 9],
	['10 to 19 units', 10, 19],
	['20 to 49 units', 20, 49],
	['50 to 99 units', 50, 99],
];
const sizes = sizeBuckets.map(([label, lo, hi]) => {
	const o = older.filter((r) => r['Number of Units'] >= lo && r['Number of Units'] <= hi);
	const a = rows.filter((r) => r['Number of Units'] >= lo && r['Number of Units'] <= hi && r['Asking Price'] > 0);
	return {
		label,
		olderSales: o.length,
		olderPricePerUnit: Math.round(median(o.map((r) => r['Price Per Unit']).filter((x) => x > 0))),
		olderCapRateMedian: r2(median(caps(o)) * 100),
		olderCapRateCount: caps(o).length,
		askingSales: a.length,
		askingMedianPct: r1(median(a.map((r) => r['Sale Price'] / r['Asking Price'])) * 100),
	};
});

const asked = rows.filter((r) => r['Asking Price'] > 0);
const ratio = (r) => r['Sale Price'] / r['Asking Price'];
const share = (f) => r1((asked.filter((r) => f(ratio(r))).length / asked.length) * 100);
const asking = {
	sales: asked.length,
	medianPct: r1(median(asked.map(ratio)) * 100),
	medianDollarsBelow: Math.round(median(asked.map((r) => r['Asking Price'] - r['Sale Price'])) / 1000) * 1000,
	atOrAbovePct: share((x) => x >= 1),
	within5Pct: share((x) => x >= 0.95 && x < 1),
	five10Pct: share((x) => x >= 0.9 && x < 0.95),
	over10Pct: share((x) => x < 0.9),
};

const bandDefs = [
	['Under $2 million', 0, 2e6],
	['$2 million to $5.4 million', 2e6, 5.4e6],
	['$5.4 million to $8 million', 5.4e6, 8e6],
	['$8 million to $10.9 million', 8e6, 10.9e6],
	['$10.9 million and up', 10.9e6, 1e12],
];
const bands = bandDefs.map(([label, lo, hi]) => {
	const b = rows.filter((r) => r['Sale Price'] >= lo && r['Sale Price'] < hi);
	return { label, sales: b.length, sharePct: r1((b.length / rows.length) * 100) };
});

const frac = (key, val) => Math.round((rows.filter((r) => r[key] === val).length / rows.length) * 100);
const knownOrigin = rows.filter((r) => r['Buyer (True) Origin']);
const parties = {
	privateBuyersPct: frac('Buyer (True) Type', 'Private'),
	institutionalBuyersPct: frac('Buyer (True) Type', 'Institutional'),
	localBuyersPct: frac('Buyer (True) Origin', 'Local'),
	nationalBuyersPct: frac('Buyer (True) Origin', 'National'),
	privateSellersPct: frac('Seller (True) Type', 'Private'),
	buyersWithKnownOrigin: knownOrigin.length,
};

const out = {
	key,
	firstSale: first.toISOString().slice(0, 10),
	lastSale: last.toISOString().slice(0, 10),
	headline: { all: summary(rows), older: summary(older), newer: summary(newer) },
	quarters,
	months,
	sizes,
	asking,
	bands,
	medianSalePrice: Math.round(median(rows.map((r) => r['Sale Price']))),
	parties,
};

const body = `// GENERATED by scripts/market-update.mjs from a CoStar sales export (${first.toISOString().slice(0, 10)} to ${last.toISOString().slice(0, 10)}).
// Do not edit by hand: rerun the script with the new export each quarter. Counts exclude sales with approximate or
// allocated prices, portfolio sales of 100 or more units, and repeated records. Older = built before 1978.
export const ${exportName} = ${JSON.stringify(out, null, '\t')} as const;
`;
fs.writeFileSync(new URL(`../src/data/${outName}.ts`, import.meta.url), body);
console.log(`wrote src/data/${outName}.ts`);
console.log(JSON.stringify({ sales: rows.length, older: older.length, newer: newer.length, quarters: quarters.map((q) => [q.quarter, q.sales]), askingSales: asking.sales }));
