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
};

export const listings: Listing[] = [
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
		image: '/images/listings/3815-don-tomaso-dr-los-angeles-ca-90008/3815-don-tomaso-dr-los-angeles-ca.jpg',
	},
];
