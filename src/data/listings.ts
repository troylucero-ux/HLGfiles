// Self-maintained active inventory (no live MLS/IDX feed at launch).
// Add a new object here whenever a listing goes active or comes off market.
// Photos: place in /public/images/listings/<slug>/ and reference by filename below.

export type Listing = {
	slug: string;
	name: string;
	city: string;
	state: string;
	zip: string;
	units: number | null;
	sqft: number | null;
	acres: number | null;
	askingPrice: number | null; // null = "Contact for Pricing"
	status: 'active' | 'pending' | 'off-market';
	type: 'apartment' | 'development-site';
	submarket: string | null;
	description: string;
	image?: string;
	yearBuilt?: number;
	capRate?: number;
	grm?: number;
	zoning?: string;
	pricePerUnit?: number;
	pricePerSqft?: number;
	highlights?: string[];
};

export const listings: Listing[] = [
	{
		slug: '5631-whitnall-hwy-los-angeles-ca-91601',
		name: '5631 Whitnall Hwy',
		city: 'Los Angeles',
		state: 'CA',
		zip: '91601',
		units: 4,
		sqft: 6015,
		acres: null,
		askingPrice: 2600000,
		status: 'active',
		type: 'apartment',
		submarket: 'north-hollywood',
		description:
			'Condo-quality four-unit investment in North Hollywood, built in 2021 across two buildings on a 5,000 SF lot. All four homes are large three-bedroom plans averaging 1,504 SF, currently exempt from the LA Rent Stabilization Ordinance and statewide AB 1482. One unit delivers vacant, and in-place rents sit roughly $900 per month below market.',
		image: '/images/listings/5631-whitnall-hwy-los-angeles-ca-91601/5631-whitnall-hwy-los-angeles-ca.webp',
		yearBuilt: 2021,
		capRate: 5.25,
		grm: 14.6,
		zoning: 'LAC2',
		pricePerUnit: 650000,
		pricePerSqft: 432,
		highlights: [
			'New 2021 construction, currently exempt from both the Los Angeles Rent Stabilization Ordinance and CA statewide rent control (AB 1482).',
			'All large three-bedroom homes: two 3-bed/3.5-bath and two 3-bed/3-bath units, 6,015 SF total and 1,504 SF average, drawing family tenants rather than roommate demand.',
			'Owner-occupier ready: the vacant unit provides the perfect scenario for a new owner to occupy while receiving steady income from the remaining units.',
			'Rental upside: in-place rents of $14,800 per month sit roughly $900 below market.',
			'Low operating burden: estimated expenses of $41,220, or $10,305 per unit, produce a 23.2% expense ratio on in-place income.',
			'Prime North Hollywood location, walkable to the NoHo Arts District and the Metro B and G Line station, with direct access to the Burbank studio employment base.',
		],
	},
	{
		slug: '333-n-union-ave-los-angeles-ca-90026',
		name: '333 N Union Ave',
		city: 'Los Angeles',
		state: 'CA',
		zip: '90026',
		units: 9,
		sqft: 4558,
		acres: null,
		askingPrice: 1050000,
		status: 'active',
		type: 'apartment',
		submarket: 'silver-lake',
		description:
			'Nine-unit value-add opportunity in Echo Park, built in 1925 across three structures on a 6,904 SF lot just south of Temple St. Two units deliver vacant with roughly 36% rental upside after lease-up; tenants pay trash, landlord pays water.',
		image: '/images/listings/333-n-union-ave-los-angeles-ca-90026/333-n-union-ave-los-angeles-ca.avif',
	},
	{
		slug: '3815-don-tomaso-dr-los-angeles-ca-90008',
		name: '3815 Don Tomaso Dr',
		city: 'Los Angeles',
		state: 'CA',
		zip: '90008',
		units: 6,
		sqft: 4556,
		acres: null,
		askingPrice: 1300000,
		status: 'active',
		type: 'apartment',
		submarket: null,
		description:
			'Six-unit value-add opportunity in Baldwin Hills, built in 1954 on a 10,866 SF hillside lot with sweeping views toward Downtown LA. In-place rents sit roughly 47% below market, offering a clear path to increased income through turnover.',
		image: '/images/listings/3815-don-tomaso-dr-los-angeles-ca-90008/3815-don-tomaso-dr-los-angeles-ca.webp',
	},
];
