// Source: highlightreg.com/project/* (re-fetched 2026-08-20), rewritten for SEO.
// `dealType` tags drive the Case Studies filter (1031 / value-add / trust-probate / family-legacy).

export type CaseStudy = {
	slug: string;
	title: string;
	location: string;
	submarket: string | null;
	summary: string;
	dealType: ('1031' | 'value-add' | 'trust-probate' | 'family-legacy' | 'buyer-rep')[];
	opportunity: string;
	solution: string;
	results: string;
	closingSlug?: string;
	images?: string[];
};

export const caseStudies: CaseStudy[] = [
	{
		slug: 'the-burlington-portfolio',
		title: 'The Burlington Portfolio',
		location: 'Westlake/MacArthur Park, Los Angeles, CA',
		submarket: 'westlake',
		summary: 'A 192-unit, three-building portfolio sold under new statewide rent control, exchanged into two Texas multifamily assets across state lines.',
		dealType: ['1031'],
		opportunity:
			'Built in 1989, the Burlington Portfolio consisted of three multifamily buildings totaling 192 units in the Westlake/MacArthur Park submarket of Los Angeles. The property carried real upside, but the sale was complicated by a publicized tenant strike and California’s newly enacted statewide rent control law (AB 1482), which took effect just days before the transaction closed. The seller wanted to complete a 1031 exchange while moving investment capital out of California and into Texas.',
		solution:
			'To meet the seller’s exchange timeline, our Los Angeles team coordinated directly with brokers in Austin, accompanying the client on property tours and introducing them to regional specialists. By starting the exchange search early and drawing on cross-country relationships, we sourced two off-market multifamily opportunities in Austin and San Antonio. Both assets went under contract before the Burlington Portfolio closed in Los Angeles, protecting the seller from any risk of missing IRS 1031 deadlines.',
		results:
			'The Burlington Portfolio sold at an aggressive price, allowing the seller to exchange into two Texas properties with stronger income profiles. Both replacement properties closed smoothly, delivering a meaningful increase in net operating income over the original Los Angeles portfolio.',
		closingSlug: '131-171-s-burlington-ave-los-angeles-ca-90057',
		images: ['/images/listings/131-171-s-burlington-ave-los-angeles-ca-90057/the-burlington-portfolio-los-angeles-ca-1.jpg', '/images/listings/131-171-s-burlington-ave-los-angeles-ca-90057/the-burlington-portfolio-los-angeles-ca-2.png'],
	},
	{
		slug: '941-normandie-ave',
		title: '941 N Normandie Ave',
		location: 'East Hollywood, Los Angeles, CA',
		submarket: null,
		summary: 'A 7-unit non-rent-controlled building with rents 45% below market sold at 97% of list within one week of marketing.',
		dealType: ['value-add'],
		opportunity:
			'941 N. Normandie Avenue was a value-add, 7-unit, non-rent-controlled apartment building in East Hollywood. Its challenges included a busy street location, extensive deferred maintenance, and rents running roughly 45% below market.',
		solution:
			'We went directly to buyers who had purchased comparable non-rent-controlled properties within a two-mile radius over the prior two years. That targeted outreach generated multiple competitive offers in the first week of marketing.',
		results: 'We procured a buyer who closed quickly at 97% of list price, with both sides satisfied by the pace and terms of the transaction.',
		closingSlug: '941-n-normandie-ave-los-angeles-ca-90029',
		images: ['/images/listings/941-n-normandie-ave-los-angeles-ca-90029/941-n-normandie-ave-los-angeles-ca.jpg'],
	},
	{
		slug: '925-n-san-vicente-blvd',
		title: '925 N San Vicente Blvd',
		location: 'West Hollywood, CA',
		submarket: null,
		summary: 'A rent-controlled 9-unit building facing seismic retrofit requirements went under contract in under a week.',
		dealType: ['value-add'],
		opportunity:
			'925 N. San Vicente Blvd. was a 9-unit, value-add, rent-controlled apartment building in West Hollywood. Built in 1963, units were priced roughly 60% below market. The sale was complicated by deferred maintenance, a mandatory seismic retrofit, and needed capital upgrades.',
		solution:
			'We reached out directly to previous buyers in the area and qualified prospects who had shown interest in comparable properties, engaging both principals and buyer-side brokers to generate multiple competitive offers.',
		results: 'We procured a highly qualified buyer and went under contract in less than a week, with both parties satisfied by the efficient process and terms.',
		closingSlug: '925-n-san-vicente-blvd-west-hollywood-ca-90069',
		images: ['/images/listings/925-n-san-vicente-blvd-west-hollywood-ca-90069/925-n-san-vicente-blvd-west-hollywood-ca.png'],
	},
	{
		slug: '6938-coldwater-canyon-ave',
		title: '6938 Coldwater Canyon Ave',
		location: 'North Hollywood, CA',
		submarket: 'north-hollywood',
		summary: 'A soft-story, rent-controlled building drew over 15 offers in its first week and closed above asking.',
		dealType: ['value-add'],
		opportunity:
			'6938 Coldwater Canyon is a value-add, rent-controlled apartment building in North Hollywood built in 1964, with 4 one-bedroom and 6 two-bedroom units. The building carried significant deferred maintenance, a soft-story retrofit requirement, and rents roughly 50% under market.',
		solution:
			'We ran a multi-channel marketing campaign across the major real estate sales platforms plus targeted email outreach, and personally contacted buyers who had purchased in the surrounding two-mile radius within the previous two years.',
		results: 'The campaign generated over 15 offers in the first week, and the property closed $5,000 above asking despite its deferred maintenance.',
		closingSlug: '6938-coldwater-canyon-north-hollywood-ca-91605',
	},
	{
		slug: '467-s-bonnie-brae-st',
		title: '467 S Bonnie Brae St',
		location: 'Westlake/MacArthur Park, Los Angeles, CA',
		submarket: 'westlake',
		summary: 'An 18-unit non-rent-controlled asset with elevated operating costs drew multiple offers within a week.',
		dealType: ['value-add'],
		opportunity:
			'467 S. Bonnie Brae St. is a value-add, non-rent-controlled, 18-unit apartment building built in 1991 in the Westlake/MacArthur Park area. The challenge was marketing the asset competitively despite significant deferred maintenance and elevated operating costs.',
		solution:
			'A focused marketing push generated multiple offers within seven days. We worked closely with the seller to evaluate every offer and identify the strongest buyer.',
		results:
			'The winning buyer had substantial local multifamily ownership and operating experience, with a clear understanding of rehab costs and expense remediation — which made for an expedited, seamless close.',
		closingSlug: '467-s-bonnie-brae-st-los-angeles-ca-90057',
	},
	{
		slug: '3148-james-m-wood-blvd',
		title: '3148 James M Wood Blvd',
		location: 'Koreatown, Los Angeles, CA',
		submarket: 'koreatown',
		summary: 'An 8-unit Koreatown building marketed to both developers and value-add buyers closed $100,000 over list.',
		dealType: ['value-add'],
		opportunity:
			'3148 James M. Wood Boulevard was a value-add, 8-unit, rent-controlled apartment building in the heart of Koreatown, with significant deferred maintenance and rents well below market.',
		solution:
			'We positioned the property with dual appeal — as both a development prospect and a value-add investment — which generated competitive bids within the first week of marketing.',
		results: 'The property sold $100,000 over list price, with both sides satisfied by the speed of the close and the negotiated terms.',
		closingSlug: '3148-james-m-wood-blvd-los-angeles-ca-90006',
	},
	{
		slug: '2429-cheremoya-ave',
		title: '2429 Cheremoya Ave',
		location: 'Beachwood Canyon, Hollywood Hills, CA',
		submarket: null,
		summary: 'A stabilized 7-unit building that had stalled with another brokerage sold above its prior list price.',
		dealType: ['value-add'],
		opportunity:
			'2429 Cheremoya Ave is a 7-unit, stabilized, rent-controlled apartment building in the Beachwood Canyon area of the Hollywood Hills. Built in 1962, it had already been listed with another brokerage and was priced roughly 15% under market, needing renewed marketing momentum.',
		solution:
			'We contacted every buyer who had purchased in the immediate area, along with sellers in the target price range, and worked with buyer-side brokers to generate multiple competitive offers.',
		results: 'The property closed above the previous brokerage’s list price, with both parties satisfied by the streamlined process and terms.',
		closingSlug: '2429-cheremoya-ave-los-angeles-ca-90068',
	},
	{
		slug: '140-westmoreland-ave',
		title: '140 S Westmoreland Ave',
		location: 'Virgil / Downtown-adjacent, Los Angeles, CA',
		submarket: 'koreatown',
		summary: 'Buyer representation on a core-plus asset in an up-and-coming submarket, secured through early access and market insight.',
		dealType: ['buyer-rep'],
		opportunity:
			'140 S Westmoreland Avenue was an opportunity to represent a buyer on a non-rent-controlled, core-plus asset in the up-and-coming Virgil neighborhood near Downtown LA. Roughly half the units were already upgraded, while the rest offered renovation upside as rents in the area continued to climb.',
		solution:
			'We leveraged our standing with all parties involved to secure our client early access for preliminary evaluation, then used that information advantage to submit an offer that outperformed competing bids.',
		results: 'Our market relationships, industry standing, and persistence secured the acquisition for our client.',
		closingSlug: '140-s-westmoreland-ave-los-angeles-ca-90004',
	},
	{
		slug: '11667-goshen-ave',
		title: '11667 Goshen Ave',
		location: 'Brentwood, Los Angeles, CA',
		submarket: 'brentwood',
		summary: 'A 35%-under-market Brentwood value-add asset closed escrow just three weeks after going under contract.',
		dealType: ['value-add'],
		opportunity:
			'11667 Goshen is a 10-unit, value-add, rent-controlled apartment building in Brentwood, one of West LA’s most prestigious neighborhoods. Built in 1961, it was priced roughly 35% under market, with deferred maintenance and no modern unit upgrades limiting achievable pricing.',
		solution:
			'We contacted prior buyers in the immediate area, plus interested parties from a neighboring listing at 11642 Kiowa Ave, running a dual-channel campaign to both principals and buyer brokers.',
		results: 'The transaction generated multiple competitive offers and closed escrow just three weeks after going under contract.',
		closingSlug: '11667-goshen-ave-los-angeles-ca-90049',
	},
	{
		slug: '11642-kiowa-ave',
		title: '11642 Kiowa Ave',
		location: 'Brentwood, Los Angeles, CA',
		submarket: 'brentwood',
		summary: 'A Brentwood asset that sat stale on the market for nearly a year found a buyer within our own network in two weeks.',
		dealType: ['value-add'],
		opportunity:
			'11642 Kiowa was an opportunity to be the second brokerage to sell a 9-unit, value-add, rent-controlled apartment building in Brentwood. Built in 1967, rents ran roughly a third below market, and the property had sat on the market for nearly a year without traction, needing fresh positioning.',
		solution:
			'We contacted previous buyers in the immediate vicinity and in comparable prestigious neighborhoods, coordinating with buyer brokers to generate multiple competitive offers. A prospect from our own client network who had previously shown interest in our listings emerged as the buyer.',
		results: 'We procured the buyer and closed escrow within two weeks of going under contract, with both parties satisfied by the efficient process.',
		closingSlug: '11642-kiowa-ave-los-angeles-ca-90049',
		images: ['/images/listings/11642-kiowa-ave-los-angeles-ca-90049/11642-kiowa-ave-los-angeles-ca.jpg'],
	},
	{
		slug: '1201-s-orange-grove-ave',
		title: '1201 S Orange Grove Ave',
		location: 'Mid-Wilshire, Los Angeles, CA',
		submarket: null,
		summary: 'A 5-unit Mid-Wilshire building with structural issues and low parking sold at full price on an accelerated timeline.',
		dealType: ['value-add', 'family-legacy'],
		opportunity:
			'1201 S. Orange Grove Avenue was a value-add, 5-unit, rent-controlled apartment building in the prime Mid-Wilshire area, facing structural deferred maintenance, minimal parking, and rents well under market.',
		solution:
			'We repositioned the property as a value-add opportunity rather than emphasizing its current limitations, generating strong buyer interest and multiple offers that preserved the seller’s negotiating leverage.',
		results: 'The property sold at full asking price on an accelerated timeline, with both sides satisfied by the process and terms.',
		closingSlug: '1201-s-orange-grove-ave-los-angeles-ca-90019',
	},
	{
		slug: '236-s-bonnie-brae-st',
		title: '236 S Bonnie Brae St',
		location: 'Westlake/MacArthur Park, Los Angeles, CA',
		submarket: 'westlake',
		summary: 'A large, off-market sale of a 65-unit building leveraged a proven repeat buyer to move past deferred-maintenance objections.',
		dealType: ['value-add'],
		opportunity:
			'236 S Bonnie Brae St. is a value-add, non-rent-controlled, 65-unit apartment building built in 1989 in Westlake/MacArthur Park. The challenge was marketing a large property off-market while addressing buyer concerns about deferred maintenance and rents well under current market rates.',
		solution:
			'We brought in a repeat buyer from a previous, comparable transaction — a buyer with proven capacity and speed — allowing us to present the property confidentially off-market and move past the objections that typically slow large multifamily sales.',
		results: 'The off-market strategy connected the owner with a highly qualified buyer, and the transaction closed smoothly and efficiently.',
		closingSlug: '236-s-bonnie-brae-st-los-angeles-ca-90057',
		images: ['/images/listings/236-s-bonnie-brae-st-los-angeles-ca-90057/236-s-bonnie-brae-st-los-angeles-ca.png'],
	},
	{
		slug: '453-s-gramercy-pl',
		title: '453 S Gramercy Pl',
		location: 'Western Koreatown / Hancock Park, Los Angeles, CA',
		submarket: 'koreatown',
		summary: 'A 14-unit building with long-term, below-market tenants sold off-market to a buyer that assumed the soft-story retrofit.',
		dealType: ['value-add'],
		opportunity:
			'453 S. Gramercy Place is a value-add, rent-controlled, 14-unit apartment building built in 1966 in Western Koreatown/Hancock Park. Most tenants were long-term occupants paying well below market, complicating a sale at full value.',
		solution:
			'We identified an off-market buyer with proven expertise acquiring below-market rental properties with established tenants, enabling a direct transaction.',
		results: 'The sale closed smoothly and quickly. The buyer agreed to assume the soft-story retrofit requirement — a key win for the seller given the complexity involved.',
		closingSlug: '453-s-gramercy-pl-los-angeles-ca-90020',
		images: ['/images/listings/453-s-gramercy-pl-los-angeles-ca-90020/453-s-gramercy-pl-los-angeles-ca.jpg'],
	},
	{
		slug: '5455-inglewood-blvd',
		title: '5455 Inglewood Blvd',
		location: 'Culver City, CA (Playa Vista-adjacent)',
		submarket: null,
		summary: 'Buyer representation on an off-market, newly built 13-unit asset near Silicon Beach, closed with certainty via a pre-close lease-up.',
		dealType: ['buyer-rep'],
		opportunity:
			'5455 Inglewood Boulevard was an opportunity to represent a buyer on an off-market, brand-new 13-unit apartment building directly adjacent to Playa Vista. Completed in 2017, the asset was underleased 15–20% below market, in a neighborhood benefiting from nearby Silicon Beach tech employers.',
		solution:
			'We used our relationships and market knowledge to secure early access to this off-market opportunity, working directly with the seller and his partners ahead of any broader market exposure.',
		results:
			'We negotiated favorable pricing while leasing 11 of the 12 market-rate units before closing, demonstrating our buyer’s financial strength and ability to close with certainty — which won the seller’s confidence over other offers.',
		closingSlug: '5455-inglewood-blvd-culver-city-ca-90230',
		images: ['/images/listings/5455-inglewood-blvd-culver-city-ca-90230/5455-inglewood-blvd-culver-city-ca.jpg'],
	},
];
