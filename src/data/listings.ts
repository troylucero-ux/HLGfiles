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
	status: 'active' | 'pending' | 'in-escrow' | 'off-market';
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
	youtubeId?: string; // the video ID from a youtube.com/watch?v=<id> URL, not the full URL
};

export const listings: Listing[] = [
	{
		slug: '927-s-berendo-st-los-angeles-ca-90006',
		youtubeId: 'fPCjDEiQNFY',
		name: '927 S Berendo St',
		city: 'Los Angeles',
		state: 'CA',
		zip: '90006',
		units: 7,
		sqft: 5294,
		acres: null,
		askingPrice: 1800000,
		status: 'active',
		type: 'apartment',
		submarket: 'koreatown',
		description:
			'Seven-unit, all two-bedroom apartment investment in Koreatown, built in 1987 on a 7,748 SF lot. Exempt from the Los Angeles Rent Stabilization Ordinance and governed instead by the more favorable statewide AB 1482 cap. Two units deliver vacant and available to lease at market today, with roughly 10% additional rental upside after lease-up.',
		image: '/images/listings/927-s-berendo-st-los-angeles-ca-90006/927-s-berendo-st-los-angeles-ca.webp',
		yearBuilt: 1987,
		capRate: 6.71,
		grm: 9.61,
		zoning: 'R4-1',
		pricePerUnit: 257143,
		pricePerSqft: 340,
		highlights: [
			'Exempt from the LA Rent Stabilization Ordinance: 1987 construction places the property under CA State AB 1482, allowing more favorable 5% plus CPI annual rent increases.',
			'Two units delivered vacant: Units #3 and #7 are currently vacant, allowing a new owner to lease at market rents.',
			'All two-bedroom unit mix: seven 2-bed/1-bath units averaging 756 SF across 5,294 SF of building area, the most consistently occupied unit type in the submarket.',
			'ADU potential: the rear of the large lot includes a freestanding carport, and the rear of the building has a large tuck-under parking area.',
			'Superior in-place return to comparables: prices to a 6.71% in-place cap rate and 9.61 GRM against a comparable average of 5.94% and 10.64.',
			'Rental upside: after lease-up of vacant units, the property still allows for almost 10% additional rental upside.',
			'Prime Koreatown location, minutes from the Wilshire Boulevard corridor, the Metro D Line, Downtown Los Angeles, and the USC and Exposition Park employment base.',
		],
	},
	{
		slug: '4412-4414-lockwood-ave-los-angeles-ca-90029',
		youtubeId: 'NWHQN79ZvbU',
		name: '4412-4414 Lockwood Ave',
		city: 'Los Angeles',
		state: 'CA',
		zip: '90029',
		units: 7,
		sqft: 5521,
		acres: null,
		askingPrice: 1350000,
		status: 'in-escrow',
		type: 'apartment',
		submarket: 'east-hollywood',
		description:
			'Rare 7-unit investment in the Virgil Village section of East Hollywood, combining a freestanding five-bedroom single-family residence (built 1946) with an all one-bedroom, six-unit apartment building (built 1960) on a single 9,299 SF lot. Two units deliver vacant with a third possible, offering roughly 57% rental upside after lease-up, plus ADU potential in a separate, currently unrented basement unit.',
		image: '/images/listings/4412-4414-lockwood-ave-los-angeles-ca-90029/4412-4414-lockwood-ave-los-angeles-ca.webp',
		capRate: 6.04,
		grm: 9.9,
		zoning: 'LARD1.5',
		pricePerUnit: 192857,
		pricePerSqft: 245,
		highlights: [
			'Major value-add opportunity: approximately 57% additional rental upside after lease-up of vacant units.',
			'ADU potential: a spacious, separate unrented basement unit in the single-family home includes bedrooms, a kitchen, a bathroom, windows, and a private entrance.',
			'Additional ADU potential: tuck-under parking in the six-unit apartment building may provide the ability to create additional units.',
			'Vacant units: two units will be delivered vacant, with the possibility of a third.',
			'Excellent unit mix: one five-bedroom single-family home alongside a six-unit building consisting of all one-bedroom, one-bath units.',
			'Prime location, easy walking distance to dining, retail, and entertainment on both Vermont Ave and Virgil Ave, just four blocks from Sunset Junction in Silver Lake.',
		],
	},
	{
		slug: '5631-whitnall-hwy-los-angeles-ca-91601',
		youtubeId: 'Bn8asB9XcNk',
		name: '5631 Whitnall Hwy',
		city: 'Los Angeles',
		state: 'CA',
		zip: '91601',
		units: 4,
		sqft: 6015,
		acres: null,
		askingPrice: 2500000,
		status: 'active',
		type: 'apartment',
		submarket: 'north-hollywood',
		description:
			'Condo-quality four-unit investment in North Hollywood, built in 2021 across two buildings on a 5,000 SF lot. All four homes are large three-bedroom plans averaging 1,504 SF, currently exempt from the LA Rent Stabilization Ordinance and statewide AB 1482. One unit delivers vacant, and in-place rents sit roughly $900 per month below market.',
		image: '/images/listings/5631-whitnall-hwy-los-angeles-ca-91601/5631-whitnall-hwy-los-angeles-ca.webp',
		yearBuilt: 2021,
		capRate: 5.5,
		grm: 14.1,
		zoning: 'LAC2',
		pricePerUnit: 625000,
		pricePerSqft: 416,
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
		youtubeId: 'hNlrT8MSd2M',
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
		yearBuilt: 1925,
		capRate: 8.03,
		grm: 7.7,
		pricePerUnit: 116667,
		pricePerSqft: 230,
		highlights: [
			'Strong in-place return: priced to an 8.03% cap rate and 7.7 GRM on in-place rents, rising to an 11.96% cap rate and 5.6 GRM at pro forma rents.',
			'Rental upside: in-place rents sit roughly 36% below market, a loss to lease of about $4,083 per month.',
			'Two units delivered vacant: the two vacant guest rooms (Units 1 and 4) allow a new owner to lease at market rents.',
			'Excellent unit mix: five 1-bed/1-bath apartments and four guest rooms across three separate structures, a front four-plex, a freestanding bungalow, and a rear four-plex.',
			'Character and amenities: the 1-bed/1-bath units have 11-foot ceilings, and some feature crown molding, built-in fireplaces, wood floors, and split AC systems. A large, well-maintained common yard and garden serves all tenants.',
			'Low operating costs: tenants pay trash, the front four units are separately metered for electricity and gas, and electrical upgrades have recently been completed.',
			'Guest room upside: investors can explore the Los Angeles Municipal Code to legally upgrade the guest rooms to a light housekeeping designation, which would allow a permanent two-burner stovetop and oven.',
			'Walkable South Echo Park location: a Walk Score of 89, steps from dining and retail on Temple St, with quick access to the 101 and 110 freeways.',
		],
	},
	{
		slug: '3815-don-tomaso-dr-los-angeles-ca-90008',
		youtubeId: 'dXbVV9ctKgo',
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
		yearBuilt: 1954,
		capRate: 6.04,
		grm: 10.35,
		zoning: 'LARD1.5',
		pricePerUnit: 216667,
		pricePerSqft: 285,
		highlights: [
			'Value-add upside: in-place rents sit roughly 47% below market, a loss to lease of $4,904 per month. Capturing it through natural turnover lifts NOI from $78,553 to $129,231 and the cap rate from 6.04% to 9.94%.',
			'Fully occupied: stable in-place income while a new owner works toward market rents.',
			'Diverse unit mix: four 1-bed/1-bath units, one 2-bed/2-bath unit, and one 3-bed/3-bath ADU, all within a single building.',
			'Views and privacy: the building rises above the street on a 10,866 SF hillside lot, with views from the upper levels reaching Downtown LA and beyond.',
			'Outdoor space: Units E and F at the top feature large private patios off the master bedrooms, and a quiet second-level courtyard could be improved into a tenant gathering space.',
			'Low operating burden: all units are separately metered for electricity and gas with their own water heaters, and tenants pay their own trash.',
			'Added income potential: the laundry room is not currently used by tenants, and investors may explore adding washers and dryers in each unit.',
			'Central Baldwin Hills location near Crenshaw Boulevard retail and dining, the Metro K Line, and Kenneth Hahn State Recreation Area.',
		],
	},
];
