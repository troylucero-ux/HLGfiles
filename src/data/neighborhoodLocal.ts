// Neighborhood-specific sections for the submarket pages (rendered by NeighborhoodLocal.astro, which
// also feeds `faqs` into the page's FAQ and FAQPage schema). Every claim here comes from a source checked
// on October 22, 2026, or from the site's own data (Walk Scores, closed sales, case studies). Text can use
// [link text](/path/) links. Add a neighborhood only when it has facts that are real and specific to it.
//
// Sources:
// - Van Nuys: LA Metro, East San Fernando Valley Light Rail Transit Project page (metro.net/projects/east-sfv).
//   6.7 miles, 11 stations along Van Nuys Blvd from the G Line to San Fernando Road, in construction, estimated
//   project completion "Early 2032", major construction phase 2026 to 2032. Stations the page names: Van Nuys
//   G Line, Victory, Sherman Way, Van Nuys Metrolink, Arleta, San Fernando (it does not list all 11).
// - North Hollywood: LA Metro press release of October 3, 2024 (Board approves District NoHo): 11.8 acres at the
//   Metro North Hollywood Station, more than 1,400 apartments when complete, about 570 in the first phase, at
//   least 311 affordable (under 60% of county median income); developer NOHO Development Associates (Trammell
//   Crow and High Street Residential). No construction schedule was given.
// - Westlake: Centro Westlake (Metro and Walter J. Company), City of LA approval in March 2026, 668 homes with 234
//   income-restricted, per The Real Deal and Commercial Observer; tower heights and office square footage differ
//   between reports, so they are left out. Reconnecting MacArthur Park: announced July 9, 2024, with $2 million from
//   the U.S. DOT Reconnecting Communities Pilot Program and $500,000 from SCAG, covering planning (Fox LA).
// - Koreatown: SB 79 took effect July 1, 2026; LA adopted a phased approach in March 2026 that delays full
//   implementation in historic districts, lower-resource areas, and high fire severity zones until 2030 (same
//   source as the Mid-Wilshire page).

// Added after researching what Google shows owners for each neighborhood (October 22, 2026):
// - Rent control lookup: LA Housing Department RSO Property Search page (housing.lacity.gov), read in the
//   browser. The lookup lives in ZIMAS, under Housing, "Rent Stabilization Ordinance (RSO)" shows Yes or No; it
//   only says whether at least one unit is subject; questions go to (866) 557-7368. Cutoff: Oct 1, 1978.
// - Silver Lake, East Hollywood, and Brentwood use only the LA Housing Department lookup above and our own
//   sales data. Policy (set by the user, Oct 22, 2026): never cite, quote, or use deals, numbers, or
//   statements from competing brokerages on the site. Opinions are fine when they are general market logic.
// - East Hollywood, Pico-Union, and Brentwood figures from SALES_STATS (CoStar export, Jan to Sept 22, 2026).
import { SALES_STATS, MIN_CAP_RATE_COMPS, WEST_LA_AREAS } from './valuationAssumptions';

const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const millions = (n: number) => `$${(n / 1_000_000).toFixed(1)} million`;
const pct = (n: number) => `${(n * 100).toFixed(2)}%`;
const rso = (slug: string) => SALES_STATS[slug].rso;
const newer = (slug: string) => SALES_STATS[slug].post1978;

export type LocalSection = {
	eyebrow: string;
	heading: string;
	intro: string[];
	facts: { value: string; label: string }[];
	cards: { title: string; body: string }[];
	proof?: string;
	source: string;
	faqs?: { q: string; a: string }[];
};

const capMid = (slug: string) => {
	const c = rso(slug).capRate;
	return c && c.compCount >= MIN_CAP_RATE_COMPS ? (c.low + c.high) / 2 : null;
};
const highestCapNote =
	Object.keys(SALES_STATS)
		.filter((slug) => capMid(slug) !== null)
		.sort((a, b) => capMid(b)! - capMid(a)!)[0] === 'pico-union';

// West LA: price by area, from the same sales as the page's headline figures.
const westAreas = WEST_LA_AREAS.filter((a) => a.pricePerUnit.compCount >= 3);
const westHigh = westAreas.reduce((a, b) => (b.pricePerUnit.median > a.pricePerUnit.median ? b : a));
const westLow = westAreas.reduce((a, b) => (b.pricePerUnit.median < a.pricePerUnit.median ? b : a));
const westGap = Math.round((westHigh.pricePerUnit.median - westLow.pricePerUnit.median) / 10_000) * 10_000;
const westList = westAreas.map((a) => `${money(a.pricePerUnit.median)} in ${a.name} (${a.pricePerUnit.compCount} sales)`).join(', ');

export const neighborhoodLocal: Record<string, LocalSection> = {
	koreatown: {
		eyebrow: 'What’s Local in Koreatown',
		heading: 'Koreatown Apartment Owners: Two Subway Lines, a New State Law, and Two Kinds of Buyer',
		intro: [
			'Koreatown is one of the most transit-connected apartment markets in Los Angeles. The Metro D Line runs under Wilshire Blvd with stops at Wilshire/Vermont, Wilshire/Normandie, and Wilshire/Western, and the B Line meets it at Wilshire/Vermont. Strong rental demand and that transit access draw both investors and developers to the neighborhood.',
			'For an owner, that means two different groups of buyers may be looking at your building: investors who want the income it earns today, and developers who are pricing the land.',
		],
		facts: [
			{ value: '93', label: 'Walk Score, one of the highest in LA' },
			{ value: '3', label: 'D Line stations on Wilshire: Vermont, Normandie, and Western' },
			{ value: 'July 1, 2026', label: 'SB 79, the state transit-housing law, took effect' },
		],
		cards: [
			{
				title: 'Put the walk to the subway in your marketing',
				body: 'Renters and buyers both pay for an easy commute. If your building is within a 10 to 15 minute walk of a station, say so, with the minutes, in the offering. It is a selling point you can measure, and it costs nothing to include.',
			},
			{
				title: 'Run a zoning check before you set a price',
				body: 'SB 79 allows more housing near major transit stops. Los Angeles adopted a phased approach in March 2026 that delays full implementation in historic districts, lower-resource areas, and high fire severity zones until 2030. If your lot is near a station, a developer may value the land more than an investor values the building. Print your parcel’s zoning from the city’s [ZIMAS](https://zimas.lacity.org/) site and ask us to price it both ways.',
			},
			{
				title: 'Match the building to the right buyer',
				body: 'We have closed value-add and development-site sales throughout Koreatown, including buildings positioned for both existing-use and redevelopment buyers. A fully occupied rent-controlled building with a big rent gap may suit an investor. A site with extra land, or a building near the end of its life, may suit a developer. Knowing which fits yours decides who we call first.',
			},
		],
		proof:
			'At [453 S Gramercy Pl](/case-studies/453-s-gramercy-pl-koreatown-apartments/), a 14-unit building with mostly long-term, below-market tenants, we found an off-market buyer who was experienced with exactly that kind of property. We have also sold [3148 James M Wood Blvd](/case-studies/3148-james-m-wood-blvd-koreatown-apartments/) and [140 S Westmoreland Ave](/case-studies/140-westmoreland-ave-koreatown-apartments/) in the neighborhood.',
		source: 'Sources: walkscore.com; LA Metro; City of Los Angeles and Councilmember Yaroslavsky’s office on SB 79 implementation (March 2026). Checked October 2026.',
		faqs: [
			{
				q: 'Which Metro stations serve Koreatown?',
				a: 'The Metro D Line (Purple) has stations at Wilshire/Vermont, Wilshire/Normandie, and Wilshire/Western, and the B Line (Red) connects at Wilshire/Vermont and also stops at Vermont/Beverly. Together they give Koreatown direct subway access to Downtown LA and Hollywood.',
			},
			{
				q: 'Does SB 79 affect Koreatown apartment buildings?',
				a: 'It can, if your lot is near a major transit stop. SB 79 took effect July 1, 2026 and allows more housing near transit. Los Angeles adopted a phased approach in March 2026 that delays full implementation in historic districts, lower-resource areas, and high fire severity zones until 2030. Check your parcel on the city’s ZIMAS site before you price a sale.',
			},
		],
	},

	westlake: {
		eyebrow: 'What’s Local in Westlake',
		heading: 'Westlake Apartment Owners: A Major Project Over the Station, a Park Plan, and Large-Building Sales',
		intro: [
			'Westlake is built around MacArthur Park and the Westlake/MacArthur Park station, where the B and D Lines meet at Wilshire and Alvarado. Two public projects are shaping how buyers talk about the neighborhood, and one of them has already been approved.',
			'Our sales here include a 192-unit, three-building portfolio and a 65-unit building, and the size of a building changes how a sale is structured.',
		],
		facts: [
			{ value: '668', label: 'homes in Centro Westlake, approved by the City in March 2026 (234 income-restricted)' },
			{ value: '2024', label: 'year the city announced its plan to reconnect MacArthur Park' },
			{ value: '192', label: 'units in the Burlington Portfolio we sold here' },
		],
		cards: [
			{
				title: 'A big project is coming to the station',
				body: 'Centro Westlake, a joint development of Metro and the Walter J. Company on the block bounded by Wilshire, Alvarado, Westlake, and 7th, was approved by the City of Los Angeles in March 2026. It is not built yet, and plans can change. Buyers know about it, so be ready to discuss where your building sits in relation to it and what it does and does not change today.',
			},
			{
				title: 'The park project is a plan, not a park',
				body: 'The city announced in July 2024 that it wants to close part of Wilshire Blvd through MacArthur Park and reconnect the two halves of the park, with federal and regional grants that pay for planning. Nothing is funded for construction in what we found. We would treat it as a talking point, not a price driver, until that changes.',
			},
			{
				title: 'Large buildings need a sale plan, not just a listing',
				body: 'When a building has dozens of units, who sees it matters as much as the price. A quiet sale to a proven buyer can beat a public listing, or the reverse. Our guide to [selling off-market vs. listing openly](/insights/selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles/) walks through the tradeoffs.',
			},
		],
		proof:
			'We sold the 192-unit, three-building [Burlington Portfolio](/case-studies/the-burlington-portfolio-westlake-apartments/) as a 1031 exchange, and [236 S Bonnie Brae St](/case-studies/236-s-bonnie-brae-st-westlake-apartments/), a 65-unit building, in a confidential off-market sale to a proven repeat buyer. We also sold [467 S Bonnie Brae St](/case-studies/467-s-bonnie-brae-st-westlake-apartments/).',
		source: 'Sources: The Real Deal and Commercial Observer (March 2026) on Centro Westlake; Fox LA (July 2024) on Reconnecting MacArthur Park. Figures can change as projects move through review. Checked October 2026.',
		faqs: [
			{
				q: 'What is Centro Westlake?',
				a: 'Centro Westlake is a mixed-use project planned above the Westlake/MacArthur Park Metro station, developed by Metro and the Walter J. Company. The City of Los Angeles approved it in March 2026, with 668 homes, 234 of them income-restricted, plus retail, office, and a hotel. It is not built yet, and details may change.',
			},
			{
				q: 'What is the Reconnecting MacArthur Park plan?',
				a: 'In July 2024 the city announced a plan to close Wilshire Blvd to cars through MacArthur Park and reconnect the two halves of the park. A $2 million federal grant and $500,000 from the Southern California Association of Governments fund the planning stage. It is a plan, not a funded construction project.',
			},
		],
	},

	'north-hollywood': {
		eyebrow: 'What’s Local in North Hollywood',
		heading: 'North Hollywood Apartment Owners: A Transit Hub With a Very Large Neighbor on the Way',
		intro: [
			'North Hollywood Station is where the Metro B Line subway ends and the G Line busway runs through, one of LA Metro’s busiest transit hubs. On Metro-owned land right at that station, a very large development has been approved, and it is the biggest local fact an NoHo apartment owner should have in mind.',
		],
		facts: [
			{ value: '11.8 acres', label: 'District NoHo site at the North Hollywood station' },
			{ value: '1,400+', label: 'apartments planned when complete' },
			{ value: '311+', label: 'affordable homes in the early phases (under 60% of area median income)' },
		],
		cards: [
			{
				title: 'Know what is coming next door',
				body: 'The Metro Board approved District NoHo in October 2024. Metro’s announcement gives no construction schedule, so it is a long-term change, not an event this year. New apartments near the station give renters more choice, and buyers will ask how older buildings compete. Be ready to show your rents, parking, and condition.',
			},
			{
				title: 'Have your soft-story paperwork ready',
				body: 'LA requires older wood-frame apartment buildings with weak ground floors (think tuck-under parking) to be retrofitted, and buyers and lenders ask for the certificate of compliance. We sold [6938 Coldwater Canyon Ave](/case-studies/6938-coldwater-canyon-ave-north-hollywood-apartments/), a soft-story retrofit property, and we know what buyers want to see.',
			},
			{
				title: 'Older and newer buildings sell differently here',
				body: 'North Hollywood has enough sales of buildings built in 1978 or later that we show them separately from older rent-controlled buildings in the sales data above. If your building is newer, the statewide AB 1482 rent cap applies, not LA’s Rent Stabilization Ordinance, and buyers price the two differently.',
			},
		],
		proof:
			'We have closed sales in North Hollywood, including the 10-unit [6938 Coldwater Canyon Ave](/case-studies/6938-coldwater-canyon-ave-north-hollywood-apartments/), a soft-story retrofit property.',
		source: 'Sources: LA Metro press release, October 3, 2024 (District NoHo); walkscore.com. Checked October 2026.',
		faqs: [
			{
				q: 'What is District NoHo?',
				a: 'District NoHo is a large joint development on Metro-owned land at the North Hollywood Station, approved by the Metro Board on October 3, 2024. It covers 11.8 acres and plans more than 1,400 apartments, about 570 in the first phase, with at least 311 reserved for households earning under 60% of the county median income. Metro has not announced a construction schedule.',
			},
			{
				q: 'What Metro lines serve North Hollywood?',
				a: 'North Hollywood Station is the end of the B Line (Red) subway and a stop on the G Line (Orange) busway, with connections to many bus lines. It links the Valley to Hollywood and Downtown LA.',
			},
		],
	},

	'van-nuys': {
		eyebrow: 'What’s Local in Van Nuys',
		heading: 'Van Nuys Apartment Owners: A Light Rail Line Is Being Built Down Van Nuys Blvd',
		intro: [
			'Metro is building the East San Fernando Valley Light Rail line, a new 6.7-mile line with 11 stations along Van Nuys Blvd, running from the G Line to San Fernando Road. It is under construction, and Metro’s estimated completion is early 2032.',
		],
		facts: [
			{ value: '6.7 miles', label: 'of new light rail along Van Nuys Blvd, with 11 stations' },
			{ value: 'Early 2032', label: 'Metro’s estimated project completion' },
			{ value: '2026 to 2032', label: 'Metro’s major construction period' },
		],
		cards: [
			{
				title: 'Construction now, trains later',
				body: 'Metro’s timeline shows utility relocation and civil construction along Van Nuys Blvd through 2032. Construction can mean disruption for blocks near the corridor. Buyers will see it, so be honest about it and show them what the finished line will serve, without promising a date beyond Metro’s own estimate.',
			},
			{
				title: 'Measure your building against the stations',
				body: 'Metro’s page names stations at the Van Nuys G Line station, Victory, Sherman Way, the Van Nuys Metrolink station, Arleta, and San Fernando. If your building is within a short walk of one of them, put the distance in the offering. Print your parcel’s zoning from the city’s [ZIMAS](https://zimas.lacity.org/) site as well, so a buyer can see what it allows.',
			},
			{
				title: 'This is a workforce-housing market',
				body: 'Van Nuys is a high-volume San Fernando Valley market driven by workforce housing demand. At [14654 Gault St](/closed-sales/14654-gault-st-van-nuys-ca-91405/), a 4-unit building, our selling client used a [1031 exchange](/1031-exchanges/) to move into a newer fourplex in North Hollywood.',
			},
		],
		source: 'Sources: LA Metro, East San Fernando Valley Light Rail Transit Project page (estimated completion as stated by Metro, October 2026). Schedules can change.',
		faqs: [
			{
				q: 'Is light rail coming to Van Nuys?',
				a: 'Yes. Metro is building the East San Fernando Valley Light Rail line, 6.7 miles with 11 stations along Van Nuys Blvd, running from the G Line to San Fernando Road. It is under construction, and Metro lists the estimated project completion as early 2032.',
			},
			{
				q: 'Which stations will the Van Nuys light rail line have?',
				a: 'Metro’s project page names the Van Nuys G Line station, Victory, Sherman Way, the Van Nuys Metrolink station, Arleta, and San Fernando among the 11 stations. Check Metro’s project page for the full list and the latest schedule.',
			},
		],
	},

	'silver-lake': {
		eyebrow: 'What’s Local in Silver Lake',
		heading: 'Silver Lake Apartment Owners: Check Your Rent Control Status, and Know What Your Land Is Worth',
		intro: [
			'“Does Silver Lake have rent control?” is a question Google suggests to people searching about Silver Lake apartment buildings. Rent control does not work by neighborhood. Silver Lake is inside the City of Los Angeles, so what applies depends on when your building was built: buildings first occupied on or before October 1, 1978 are covered by LA’s Rent Stabilization Ordinance (RSO), and newer buildings generally fall under the statewide AB 1482 cap.',
			'That one fact changes how a buyer prices your building, so it is the first thing to confirm before you talk about a number.',
		],
		facts: [
			{ value: 'Oct 1, 1978', label: 'the RSO cutoff: older buildings are rent-controlled, newer ones follow AB 1482' },
			{ value: money(rso('silver-lake').pricePerUnit!.median), label: `median price per unit for older Silver Lake buildings in 2026 (${rso('silver-lake').pricePerUnit!.compCount} sales)` },
			{ value: '4 to 9 units', label: 'the size range of our Silver Lake sales and listings' },
		],
		cards: [
			{
				title: 'Look up your building’s RSO status first',
				body: 'Enter your address in [ZIMAS](https://zimas.lacity.org/) and read the Rent Stabilization Ordinance field under Housing: it says Yes or No. The Housing Department notes that Yes means at least one unit is covered, so a building can be partly covered. Print it before you meet a broker. If you are unsure, the Housing Department answers questions at (866) 557-7368.',
			},
			{
				title: 'Find out what your land could be worth',
				body: 'Land can be worth more than the building on it, especially on a larger lot or one zoned for more units. A buyer who plans to build new prices the land, and a buyer who keeps the building prices the income. Print your parcel’s zoning from [ZIMAS](https://zimas.lacity.org/) and ask us to price it both ways, so you know which group of buyers would pay more.',
			},
			{
				title: 'Know your unit count before you pick a buyer pool',
				body: 'Our Silver Lake sales and listings have run from 4 to 9 units. Buildings of one to four units can be bought with residential loans, and five or more need commercial loans, which changes who can buy yours. Our guide to [selling a fourplex or small building](/insights/selling-a-fourplex-or-small-apartment-building-in-los-angeles/) explains how.',
			},
		],
		proof:
			'We have sold 1330 Portia St, an 8-unit building, and 1421 Waterloo St, a 4-unit building, in Silver Lake, and have also marketed [1118-1120 Sanborn Ave](/listings/1118-1120-sanborn-ave-los-angeles-ca-90029/) and [333 N Union Ave](/listings/333-n-union-ave-los-angeles-ca-90026/).',
		source: 'Sources: LA Housing Department RSO Property Search (housing.lacity.gov); Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked October 2026.',
		faqs: [
			{
				q: 'Could my Silver Lake lot be worth more than my building?',
				a: 'It can be. Land can be worth more than the building on it, especially on a larger lot or one zoned for more units, because a buyer who plans to build new prices the land and a buyer who keeps the building prices the income. Print your parcel’s zoning from the city’s ZIMAS site, then ask us to price it both ways.',
			},
		],
	},

	'east-hollywood': {
		eyebrow: 'What’s Local in East Hollywood',
		heading: 'East Hollywood Apartment Owners: Why Price-Per-Unit Numbers Online Can Mislead',
		intro: [
			`Search for what an apartment building is worth in East Hollywood and the price-per-unit figures you find can be far apart, because they average different buildings. In our 2026 data, ${rso('east-hollywood').pricePerUnit!.compCount} sales of older East Hollywood buildings had a median of ${money(rso('east-hollywood').pricePerUnit!.median)} per unit, while ${newer('east-hollywood').pricePerUnit!.compCount} newer buildings had a median of ${money(newer('east-hollywood').pricePerUnit!.median)}. Neither number is wrong. They describe different buildings.`,
			`An average is only as good as the buildings behind it. A blend of older and newer buildings can hide a gap of about ${money(Math.round((newer('east-hollywood').pricePerUnit!.median - rso('east-hollywood').pricePerUnit!.median) / 10_000) * 10_000)} per unit, and a figure built on only a handful of sales can swing with one deal.`,
		],
		facts: [
			{ value: money(rso('east-hollywood').pricePerUnit!.median), label: `median price per unit, buildings built before 1978 (${rso('east-hollywood').pricePerUnit!.compCount} sales in 2026)` },
			{ value: money(newer('east-hollywood').pricePerUnit!.median), label: `median price per unit, buildings built 1978 or later (${newer('east-hollywood').pricePerUnit!.compCount} sales in 2026)` },
			{ value: '3', label: 'B Line stations on Vermont Ave: Vermont/Santa Monica, Vermont/Beverly, and Vermont/Sunset' },
		],
		cards: [
			{
				title: 'Compare like with like',
				body: 'Age, size, condition, and rent control status all move the price. Older rent-controlled buildings and newer buildings are different markets, and the gap in East Hollywood is wide. When you see a price per unit, ask which buildings it includes and how many sales stand behind it. A figure from two or three sales is a guess.',
			},
			{
				title: 'A rough starting point, not a valuation',
				body: `At East Hollywood’s median, a 20-unit older building would be around ${millions(20 * rso('east-hollywood').pricePerUnit!.median)}. That is arithmetic, not an appraisal: income, condition, unit mix, and how far rents sit below market can move the real number up or down. Our [free property value calculator](/property-value/) adjusts for your building’s age and neighborhood, and a [Broker Opinion of Value](/contact/?intent=bov) uses your actual rent roll.`,
			},
			{
				title: 'Show the numbers behind your price',
				body: 'If your building should sell above or below the median, be ready to explain why, with rents, expenses, and recent comparable sales. Our article on [Broker Opinion of Value vs. appraisal](/insights/broker-opinion-of-value-vs-appraisal-apartment-building/) explains how a price opinion is built.',
			},
		],
		proof:
			'We sold the 7-unit [941 N Normandie Ave](/case-studies/941-normandie-ave-east-hollywood-apartments/) in East Hollywood and are marketing [4412-4414 Lockwood Ave](/listings/4412-4414-lockwood-ave-los-angeles-ca-90029/) in the Virgil Village pocket.',
		source: 'Sources: Highlight analysis of CoStar sold multifamily comps, January to October 2026. Each median rests on the sale count shown.',
		faqs: [
			{
				q: 'How much would a 20-unit apartment building cost in East Hollywood?',
				a: `As a rough starting point, 20 units at East Hollywood’s 2026 median of ${money(rso('east-hollywood').pricePerUnit!.median)} per unit for older buildings comes to about ${millions(20 * rso('east-hollywood').pricePerUnit!.median)}. That is arithmetic, not a valuation: income, condition, and rents can move the real price up or down. Use our [free calculator](/property-value/) or request a Broker Opinion of Value for a number built on your own building.`,
			},
			{
				q: 'Why do websites show different prices per unit for East Hollywood?',
				a: `Because they average different buildings. Older rent-controlled buildings in East Hollywood sold for a median of ${money(rso('east-hollywood').pricePerUnit!.median)} per unit in 2026, while newer buildings sold for a median of ${money(newer('east-hollywood').pricePerUnit!.median)}. A figure that mixes the two, or rests on only a few sales, can sit far from the number for your building.`,
			},
		],
	},

	'pico-union': {
		eyebrow: 'What’s Local in Pico-Union',
		heading: 'Pico-Union Apartment Owners: Higher Cap Rates, Larger Buildings, and Knowing Your RSO Status',
		intro: [
			'Pico-Union is a dense neighborhood west of Downtown LA, and its apartment stock is predominantly older, rent-controlled housing. That shapes how buildings here are priced. Buyers in Pico-Union accept a higher return than they do in most of the neighborhoods we cover, so the same net income is worth less here than it would be in, say, Santa Monica.',
		],
		facts: [
			{ value: `${pct(rso('pico-union').capRate!.low)} to ${pct(rso('pico-union').capRate!.high)}`, label: `typical cap rate for older Pico-Union buildings in 2026 (${rso('pico-union').capRate!.compCount} reported)` },
			{ value: money(rso('pico-union').pricePerUnit!.median), label: `median price per unit for older buildings (${rso('pico-union').pricePerUnit!.compCount} sales)` },
			{ value: '24 units', label: 'the size of the 1136 S Alvarado St building we sold, in a 1031 exchange' },
		],
		cards: [
			{
				title: 'Confirm your RSO status before anything else',
				body: 'Enter your address in [ZIMAS](https://zimas.lacity.org/) and check the Rent Stabilization Ordinance field under Housing: Yes means at least one unit is covered. Because the search shows only whether any unit is covered, a building can be partly covered, and the Housing Department asks owners with questions to call (866) 557-7368. Know the answer before a buyer asks.',
			},
			{
				title: highestCapNote ? 'Higher cap rates mean buyers pay less per dollar of income' : 'Know what cap rate buyers are using',
				body: highestCapNote
					? `Older Pico-Union buildings sold at ${pct(rso('pico-union').capRate!.low)} to ${pct(rso('pico-union').capRate!.high)} cap rates in 2026, the highest range of the neighborhoods we cover. Santa Monica’s was ${pct(rso('santa-monica').capRate!.low)} to ${pct(rso('santa-monica').capRate!.high)}. A higher cap rate means a buyer pays less for each dollar of net income, which is why price per unit here is lower. Clean, accurate income and expenses matter, because buyers will check them.`
					: `Older Pico-Union buildings sold at ${pct(rso('pico-union').capRate!.low)} to ${pct(rso('pico-union').capRate!.high)} cap rates in 2026. A higher cap rate means a buyer pays less for each dollar of net income. Clean, accurate income and expenses matter, because buyers will check them.`,
			},
			{
				title: 'Plan an exchange before you list',
				body: 'If you want to defer the tax on a sale, a 1031 exchange has hard deadlines: 45 days to identify a replacement property and 180 days to close. Our client who sold 1136 S Alvarado St, a 24-unit building, exchanged into two triple-net properties, one in Florida and one in Georgia. Read our [1031 exchange guide](/1031-exchanges/) and line up your plan before you list.',
			},
		],
		proof:
			'We have closed sales in Pico-Union, including the 24-unit [1136 S Alvarado St](/closed-sales/1136-s-alvarado-st-los-angeles-ca-90006/).',
		source: 'Sources: LA Housing Department RSO Property Search (housing.lacity.gov); Highlight analysis of CoStar sold multifamily comps, January to October 2026. The cap rate range is the middle half of sales that reported one. Checked October 2026.',
		faqs: [
			{
				q: 'What cap rate do Pico-Union apartment buildings sell for?',
				a: `Older Pico-Union buildings had a typical cap rate range of ${pct(rso('pico-union').capRate!.low)} to ${pct(rso('pico-union').capRate!.high)} in 2026, based on ${rso('pico-union').capRate!.compCount} sales that reported one${highestCapNote ? ', the highest range of the neighborhoods we cover' : ''}. A higher cap rate means a buyer pays less for each dollar of income.`,
			},
		],
	},

	brentwood: {
		eyebrow: 'What’s Local in Brentwood',
		heading: 'Brentwood Apartment Owners: Very Few Sales, Big Numbers, and Why Building Age Matters',
		intro: [
			`Very few apartment buildings trade in Brentwood. Our 2026 sales data, which runs through October, has only ${rso('brentwood').pricePerUnit!.compCount + newer('brentwood').pricePerUnit!.compCount} Brentwood multifamily sales, ${rso('brentwood').pricePerUnit!.compCount} of older buildings and ${newer('brentwood').pricePerUnit!.compCount} of newer ones.`,
			'Older Brentwood buildings were built before the 1978 cutoff for LA rent control, and newer buildings fall under the statewide AB 1482 cap instead. That difference is the most important thing to understand about Brentwood pricing, because newer buildings sell for far more per unit and say little about an older one.',
		],
		facts: [
			{ value: `${rso('brentwood').pricePerUnit!.compCount + newer('brentwood').pricePerUnit!.compCount}`, label: 'Brentwood multifamily sales in our 2026 data through October' },
			{ value: `${money(rso('brentwood').pricePerUnit!.median)} vs. ${money(newer('brentwood').pricePerUnit!.median)}`, label: `median price per unit, older vs. newer Brentwood buildings (${rso('brentwood').pricePerUnit!.compCount} and ${newer('brentwood').pricePerUnit!.compCount} sales)` },
			{ value: '3', label: 'Brentwood buildings we have sold, on Kiowa Ave, Goshen Ave, and Mayfield Ave' },
		],
		cards: [
			{
				title: 'Older and newer buildings are different markets',
				body: `Newer buildings fall under the statewide AB 1482 cap rather than LA’s rent control ordinance, and they sell for much more per unit. In our 2026 data, older Brentwood buildings had a median of ${money(rso('brentwood').pricePerUnit!.median)} per unit and newer ones ${money(newer('brentwood').pricePerUnit!.median)}. A headline price per unit from a newer building does not translate to yours if it was built before October 1, 1978.`,
			},
			{
				title: 'With this few sales, an average is fragile',
				body: 'Three sales is the minimum we will publish for a median, so Brentwood’s older-building number moves a lot with one deal. A number built on your own rents, expenses, and condition is more reliable than any average. Start with our [free property value calculator](/property-value/), which tells you plainly when there are not enough sales, then request a [Broker Opinion of Value](/contact/?intent=bov).',
			},
			{
				title: 'When so few buildings trade, pricing and timing matter',
				body: 'When so few buildings trade, one sale can move the average, and a building that sits on the market gets noticed. That is why we build a price from your rents and expenses and compare it with the sales that do exist, instead of leaning on a headline number. We have sold on Kiowa Ave, Goshen Ave, and Mayfield Ave.',
			},
		],
		proof:
			'We have sold three Brentwood buildings: [11642 Kiowa Ave](/case-studies/11642-kiowa-ave-brentwood-apartments/) (9 units), [11667 Goshen Ave](/case-studies/11667-goshen-ave-brentwood-apartments/) (10 units), and [11747 Mayfield Ave](/closed-sales/11747-mayfield-ave-los-angeles-ca-90049/) (8 units).',
		source: 'Sources: Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked October 2026.',
		faqs: [
			{
				q: 'How many apartment buildings sell in Brentwood each year?',
				a: `Very few. Our 2026 sales data, which runs through October, has only ${rso('brentwood').pricePerUnit!.compCount + newer('brentwood').pricePerUnit!.compCount} Brentwood multifamily sales: ${rso('brentwood').pricePerUnit!.compCount} older rent-controlled buildings and ${newer('brentwood').pricePerUnit!.compCount} newer ones. With so few sales, any average moves a lot with one deal, so a price built on your own building’s rents and expenses is more reliable.`,
			},
			{
				q: 'Why do Brentwood apartment buildings sell for more per unit than Central LA?',
				a: `Two things show up in the data. Brentwood has very few apartment sales, only ${rso('brentwood').pricePerUnit!.compCount + newer('brentwood').pricePerUnit!.compCount} in our 2026 data, and its newer buildings sell for much more per unit than its older ones. Older Brentwood buildings had a median of ${money(rso('brentwood').pricePerUnit!.median)} per unit in 2026, compared with ${money(rso('koreatown').pricePerUnit!.median)} in Koreatown, though a median from ${rso('brentwood').pricePerUnit!.compCount} sales is fragile.`,
			},
		],
	},

	'west-la': {
		eyebrow: 'What’s Local in West LA',
		heading: 'West LA Apartment Owners: Four Neighborhoods, Four Price Levels, and Two Subway Lines',
		intro: [
			'West LA is not one market. This page covers four Westside neighborhoods of the City of Los Angeles: West Los Angeles, Westwood, Palms, and Mar Vista. All of it is inside the City of LA, so LA’s rent control and Measure ULA apply. But the neighborhoods price very differently, and the transit is changing.',
			`In our 2026 data, older buildings across the area sold for a median of ${money(rso('west-la').pricePerUnit!.median)} per unit across ${rso('west-la').pricePerUnit!.compCount} sales. That one number hides a wide spread by neighborhood.`,
		],
		facts: [
			{ value: money(rso('west-la').pricePerUnit!.median), label: `median price per unit, older West LA-area buildings (${rso('west-la').pricePerUnit!.compCount} sales in 2026)` },
			{ value: `${money(westLow.pricePerUnit.median)} to ${money(westHigh.pricePerUnit.median)}`, label: `range of older-building medians, from ${westLow.name} to ${westHigh.name}` },
			{ value: '3', label: 'E Line stations in the area: Palms, Westwood/Rancho Park, and Expo/Sepulveda' },
		],
		cards: [
			{
				title: 'Know which West LA you are in',
				body: `Older buildings sold for a median of ${westList}. The gap between the highest and lowest is about ${money(westGap)} per unit, so the neighborhood your building sits in changes the price a great deal. A figure for all of West LA is a starting point, not a price.`,
			},
			{
				title: 'A second subway line is on the way',
				body: 'The E Line already stops at Palms, Westwood/Rancho Park, and Expo/Sepulveda. Metro projects the D Line subway extension’s Westwood/UCLA and Westwood/VA Hospital stations for fall 2027, which is an estimate and not a set date. If your building is a short walk from a station, put the minutes in the offering.',
			},
			{
				title: 'Check your zoning near the stations',
				body: 'SB 79 took effect July 1, 2026 and allows more housing near major transit stops. Los Angeles adopted a phased approach in March 2026 that delays full implementation in historic districts, lower-resource areas, and high fire severity zones until 2030. If your lot is near a station, a developer may value the land more than an investor values the building. Print your parcel’s zoning from [ZIMAS](https://zimas.lacity.org/) and ask us to price it both ways.',
			},
		],
		proof:
			'We have sold two buildings in the area: [3667 Mentone Ave](/closed-sales/3667-mentone-ave-los-angeles-ca-90034/), 10 units in Palms, and [12770 Caswell Avenue](/closed-sales/12770-caswell-avenue-los-angeles-ca-90066/), 11 units in Mar Vista.',
		source: 'Sources: Highlight analysis of CoStar sold multifamily comps, January to October 2026 (ZIP codes 90024, 90025, 90064, 90034, and 90066); LA Metro; walkscore.com. Each median rests on the sale count shown. Checked October 2026.',
		faqs: [
			{
				q: 'Which Metro lines serve West LA?',
				a: 'The E Line (Expo) stops at Palms, Westwood/Rancho Park, and Expo/Sepulveda in the area. Metro projects the D Line (Purple) subway extension’s Westwood/UCLA and Westwood/VA Hospital stations for fall 2027, which is an estimate and not a set opening date.',
			},
			{
				q: 'How much do apartment buildings cost per unit in Westwood, Palms, and Mar Vista?',
				a: `In our 2026 data, older buildings sold for a median of ${westList}. Newer buildings sell for more per unit, and a median from only a few sales can move a lot with one deal, so use our [free calculator](/property-value/) or request a [Broker Opinion of Value](/contact/?intent=bov) for a number built on your own building.`,
			},
		],
	},

	'sherman-oaks': {
		eyebrow: 'What’s Local in Sherman Oaks',
		heading: 'Sherman Oaks Apartment Owners: Ventura Boulevard Rules, a Plan in Draft, and a Subway Study',
		intro: [
			'Three things shape how buyers look at a Sherman Oaks building. Parcels along Ventura Boulevard fall under a corridor specific plan that has been in place since 1991. The community plan that governs the neighborhood is being rewritten. And Metro is studying a Sepulveda subway whose named stations do not include Sherman Oaks.',
			'For an owner, the practical question is whether your parcel is on the corridor and what the draft zoning does to it, before you decide what the land is worth to a buyer.',
		],
		facts: [
			{ value: '1991', label: 'Ventura–Cahuenga Boulevard Corridor Specific Plan took effect' },
			{ value: 'Draft', label: 'community plan update; the current plan was last updated in 1998' },
			{ value: 'Jan 2026', label: 'Metro chose a preferred route for the Sepulveda Transit Corridor' },
		],
		cards: [
			{
				title: 'Find out whether your lot is on the Ventura corridor',
				body: 'The Ventura–Cahuenga Boulevard Corridor Specific Plan covers more than 4,300 parcels along about 17 miles, including parcels on Ventura Boulevard and on adjacent boulevards such as Sepulveda and Van Nuys. If yours is one of them, extra rules apply to what can be built, so look it up before you price the building.',
			},
			{
				title: 'Price from today’s income, not a future station',
				body: 'Metro’s Sepulveda Transit Corridor is in the planning phase. The route it selected in January 2026 is underground heavy rail between the Van Nuys Metrolink Station and the E Line’s Expo/Sepulveda Station, and the stations the project names do not include one in Sherman Oaks. Buyers who pay for a subway that is not planned here are paying for something that may never arrive.',
			},
			{
				title: 'Watch the draft zoning along the boulevards',
				body: 'The City’s draft zoning for this plan area puts the highest densities and building heights mainly along corridors, naming Lankershim, Van Nuys, and Sepulveda Boulevards. It is not adopted, and no hearing date has been set that we found. If your building is on or near one of those streets, ask us what the draft could mean for a buyer’s view of your land.',
			},
		],
		source:
			'Sources: LA City Planning (Sherman Oaks–Studio City–Toluca Lake–Cahuenga Pass plan area page, Southeast Valley Community Plans Update fact sheet of April 2026, and the Ventura–Cahuenga Boulevard Corridor Specific Plan and fact sheet); LA Metro (Sepulveda Transit Corridor page and June 2026 timetables); Sherman Oaks Neighborhood Council; Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked November 5, 2026.',
		faqs: [
			{
				q: 'Is there a Metro station in Sherman Oaks?',
				a: 'We did not find a Metro rail or busway station inside Sherman Oaks. The nearest are the B Line’s Universal City/Studio City station and the G Line’s Van Nuys station. Metro Rapid Line 761 connects Sherman Oaks, at Ventura and Sepulveda, to the G Line at Van Nuys and the E Line at Expo/Sepulveda.',
			},
			{
				q: 'Will the Sepulveda Transit Corridor stop in Sherman Oaks?',
				a: 'Not according to what Metro has published. The project is in its planning phase, and the stations Metro names are Van Nuys Metrolink, G Line/Van Nuys, Wilshire/Westwood, and E Line Expo/Sepulveda. Station locations are still open for public comment, so confirm on Metro’s project page.',
			},
		],
	},

	'studio-city': {
		eyebrow: 'What’s Local in Studio City',
		heading: 'Studio City Apartment Owners: A B Line Station, a Studio Expansion Plan, and a Small Market',
		intro: [
			'Studio City is a small apartment market with a Metro B Line station on Lankershim Boulevard and one of the Valley’s largest employers next door. Because it has few sales in a year, a single deal can move its price numbers, so we show how many sales each figure rests on.',
			'Two local plans are worth knowing about: the Ventura–Cahuenga Boulevard Corridor Specific Plan and a proposed expansion of Radford Studio Center.',
		],
		facts: [
			{ value: '22', label: 'sound stages at Radford Studio Center, per the studio' },
			{ value: `${SALES_STATS['studio-city'].rso.pricePerUnit?.compCount ?? 0}`, label: 'older-building sales behind our 2026 price figure' },
			{ value: '1', label: 'B Line station: Universal City/Studio City' },
		],
		cards: [
			{
				title: 'The studio next door is proposing to grow',
				body: 'The City is reviewing the Radford Studio Center Project, which would create a specific plan for the roughly 55-acre site and allow up to about 1.67 million square feet of new floor area. The Draft EIR came out in January 2025, and we have not confirmed what has happened since. A large production campus is a source of local employment, and a buyer may weigh it, but treat the project as proposed, not approved.',
			},
			{
				title: 'Use the B Line in your marketing, with the minutes',
				body: 'The Universal City/Studio City station is on Lankershim Boulevard. If your building is within a short walk, say how many minutes, and which bus lines connect: Metro lines 240, 155, 224, and 167 all serve the area.',
			},
			{
				title: 'Check the corridor plan for Ventura and Laurel Canyon',
				body: 'The Ventura–Cahuenga Boulevard Corridor Specific Plan, in effect since 1991, also governs Studio City parcels along Ventura Boulevard. Confirm whether your parcel is covered before you tell a buyer what can be built.',
			},
		],
		source:
			'Sources: LA Metro (parking and station list, June 2026 timetables); LA City Planning (plan area page, Radford Studio Center Project EIR page ENV-2023-1348-EIR, Ventura–Cahuenga Boulevard Corridor Specific Plan); Radford Studio Center; Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked November 5, 2026.',
		faqs: [
			{
				q: 'Which Metro station serves Studio City?',
				a: 'The B Line (Red) Universal City/Studio City Station, on Lankershim Boulevard. Bus lines 240, 155, 224, and 167 also serve the area.',
			},
			{
				q: 'What is the Radford Studio Center Project?',
				a: 'A proposal reviewed by the City of Los Angeles (case ENV-2023-1348-EIR) to create a specific plan for the Radford Studio Center site, allowing up to about 1.67 million square feet of new floor area. A Draft EIR was released in January 2025. We have not confirmed any later approval, so check the City’s project page for the current status.',
			},
		],
	},

	reseda: {
		eyebrow: 'What’s Local in Reseda',
		heading: 'Reseda Apartment Owners: The G Line, a Community Plan Under Review, and Lower Prices per Unit',
		intro: [
			'Reseda is one of the more affordable apartment markets in our data, with older buildings selling for a lower price per unit than in most of the Westside or the east Valley. The G Line busway gives it a direct link to the Valley’s transit network.',
			'The City is rewriting the community plan for Reseda and its neighbors, and its draft names the Reseda Boulevard and Sherman Way area and the G Line station area as places for new mixed-use housing.',
		],
		facts: [
			{ value: money(rso('reseda').pricePerUnit?.median ?? 0), label: `median price per unit, older buildings (${rso('reseda').pricePerUnit?.compCount ?? 0} sales)` },
			{ value: '6', label: 'Metro bus lines at Reseda Boulevard and nearby corridors' },
			{ value: 'Nov 22', label: '2026: end of the Draft EIR comment period for the community plan update' },
		],
		cards: [
			{
				title: 'Read what the draft plan says about your block',
				body: 'The City’s Southwest Valley Community Plans Update draft names “Downtown Reseda” around Reseda Boulevard and Sherman Way, and the G Line station area, as mixed-use targets. It is labeled adoption pending, so treat any new development potential as proposed. A hearing date had not been announced when we checked.',
			},
			{
				title: 'Better buses are in the works',
				body: 'Metro’s North San Fernando Valley bus rapid transit project lists work on Reseda Boulevard, Sherman Way, Roscoe Boulevard, and Nordhoff Street, including 10-minute weekday service on key routes. Metro shows it in construction with a 2026 completion estimate, and we have not confirmed it is finished.',
			},
			{
				title: 'Price on cap rate, not on neighbors’ asking prices',
				body: `Older Reseda buildings sold for a median of ${money(rso('reseda').pricePerUnit?.median ?? 0)} per unit in 2026 on ${rso('reseda').pricePerUnit?.compCount ?? 0} sales. With so few sales, one unusual deal moves the number, so a Broker Opinion of Value built on your building’s actual rents will tell you more than any median.`,
			},
		],
		source:
			'Sources: LA Metro (parking and station list, June 2026 timetables, North San Fernando Valley Transit Corridor page); LA City Planning (Reseda–West Van Nuys plan area page, Southwest Valley Community Plans Update draft and EIR notice); Reseda Neighborhood Council bylaws; Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked November 5, 2026.',
		faqs: [
			{
				q: 'Which Metro lines serve Reseda?',
				a: 'The G Line busway has a Reseda Station, and Metro bus lines 240, 150, 152, 162, 166, and 167 serve Reseda Boulevard, Ventura Boulevard, Sherman Way, Roscoe Boulevard, and Nordhoff Street.',
			},
			{
				q: 'Is the Reseda community plan changing?',
				a: 'Yes. The City is updating the Southwest Valley community plans, which cover Reseda, and its draft is labeled adoption pending. The Draft EIR comment period ran from October 8 to November 22, 2026, and the plan area would be renamed Reseda–West Van Nuys–Lake Balboa. Check the City’s project page for the hearing date and current status.',
			},
		],
	},

	palms: {
		eyebrow: 'What’s Local in Palms',
		heading: 'Palms Apartment Owners: An E Line Station, a Plan Update, and a New Transit-Housing Law',
		intro: [
			'Palms has its own Metro E Line station, sits next to Culver City’s studio and tech employers, and has one of the larger sets of apartment sales among the Westside neighborhoods in our data. Three official items shape how buyers look at a building here: a specific plan along the Expo line, a community plan update, and a state transit-housing law.',
		],
		facts: [
			{ value: money(rso('palms').pricePerUnit?.median ?? 0), label: `median price per unit, older buildings (${rso('palms').pricePerUnit?.compCount ?? 0} sales)` },
			{ value: '1997', label: 'year of the current Palms–Mar Vista–Del Rey community plan, now being updated' },
			{ value: 'Jul 1, 2026', label: 'SB 79 took effect, allowing more housing near eligible transit stops' },
		],
		cards: [
			{
				title: 'Check the Expo corridor plan',
				body: 'The Exposition Corridor Transit Neighborhood Plan is a City specific plan that covers the Palms–Mar Vista–Del Rey plan area, along with the West Los Angeles and West Adams–Baldwin Hills–Leimert areas. We have not confirmed which Palms parcels fall inside it, so look up your address with City Planning before you tell a buyer what can be built.',
			},
			{
				title: 'A community plan update is in progress',
				body: 'The City is updating the Palms–Mar Vista–Del Rey plan together with Venice, West Los Angeles, and Westchester–Playa del Rey. The City released draft land use maps in spring 2024 and revised drafts in fall 2025, with zoning work continuing through 2026 and into early 2027. Plans are not final until the City Council adopts them.',
			},
			{
				title: 'Ask whether SB 79 reaches your lot',
				body: 'SB 79 took effect July 1, 2026 and allows by-right development standards near eligible transit stops. The City says implementation is separate from the Westside plan update. We have not verified which Palms parcels it covers, so a buyer who is thinking about redevelopment should check the parcel itself.',
			},
		],
		source:
			'Sources: LA City Planning (Palms–Mar Vista–Del Rey plan area page, Exposition Corridor Transit Neighborhood Plan page, Westside Community Plans Update FAQ); LA Metro (E Line timetable, Venice Blvd Safety and Mobility Project, schedules); City of Culver City financial report (2022); Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked November 5, 2026.',
		faqs: [
			{
				q: 'Which Metro station serves Palms?',
				a: 'The E Line (Expo) has a station at Palms, and the Culver City station is the next stop east. Metro Line 33 also runs along Venice Boulevard.',
			},
			{
				q: 'Is the Palms community plan changing?',
				a: 'Yes. The City is updating the Palms–Mar Vista–Del Rey community plan along with three other Westside plans. Drafts have been released, but nothing is final until the City Council adopts it. Check City Planning’s Westside plan page for the current status.',
			},
		],
	},

	'mar-vista': {
		eyebrow: 'What’s Local in Mar Vista',
		heading: 'Mar Vista Apartment Owners: A Historic Tract, a Venice Boulevard Corridor, and a Small Sales Pool',
		intro: [
			'Mar Vista is a residential neighborhood without a rail station of its own, served by buses along Venice Boulevard. Few apartment buildings sell here in a year, so one unusual sale can move the price figures, and we show how many sales each number rests on.',
		],
		facts: [
			{ value: money(rso('mar-vista').pricePerUnit?.median ?? 0), label: `median price per unit, older buildings (${rso('mar-vista').pricePerUnit?.compCount ?? 0} sales)` },
			{ value: '0', label: 'Metro rail stations inside Mar Vista' },
			{ value: '2023', label: 'Venice Blvd bus lane and bike lane project completed' },
		],
		cards: [
			{
				title: 'See whether you are in the Gregory Ain Mar Vista Tract',
				body: 'The City lists the Gregory Ain Mar Vista Tract as a Historic Preservation Overlay Zone. If your building is inside it, changes to the exterior can need City review. We have not checked what the rules require of apartment owners, so confirm with City Planning before you promise a buyer a remodel or an addition.',
			},
			{
				title: 'Market the Venice Boulevard buses honestly',
				body: 'Metro Line 33 runs along Venice Boulevard, and the street has a 24-hour dedicated bus lane and protected bike lanes between Inglewood and National Boulevards. There is no rail station in Mar Vista, so describe the commute as it is, with the line number and the minutes.',
			},
			{
				title: 'Same plan update as Palms',
				body: 'Mar Vista is in the Palms–Mar Vista–Del Rey plan area, so the Westside Community Plans Update and the Exposition Corridor plan apply to the same area as Palms. Check your parcel before you assume either one changes what a buyer can do.',
			},
		],
		source:
			'Sources: LA City Planning (Palms–Mar Vista–Del Rey plan area page and community plan text); Mar Vista Community Council (boundary map); LA Metro (schedules, Venice Blvd Safety and Mobility Project); Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked November 5, 2026.',
		faqs: [
			{
				q: 'Is there a Metro station in Mar Vista?',
				a: 'No. The closest stations on the E Line are Palms and Expo/Bundy, and Metro Line 33 runs along Venice Boulevard.',
			},
			{
				q: 'Which neighborhood council covers Mar Vista?',
				a: 'The Mar Vista Community Council. Its boundary is south of the 10 freeway and west of the 405 freeway, with the Culver City border to the south. See its map for the exact lines.',
			},
		],
	},

	westwood: {
		eyebrow: 'What’s Local in Westwood',
		heading: 'Westwood Apartment Owners: UCLA, a Subway Extension Under Construction, and High Prices per Unit',
		intro: [
			'Westwood is priced well above Palms and Mar Vista in our data. Older buildings sell for a median above $400,000 per unit and at cap rates below 5%, on a small number of sales. The neighborhood is anchored by UCLA and the Westwood Village shopping district, and a Metro subway extension is being built into it.',
		],
		facts: [
			{ value: money(rso('westwood').pricePerUnit?.median ?? 0), label: `median price per unit, older buildings (${rso('westwood').pricePerUnit?.compCount ?? 0} sales)` },
			{ value: '1999', label: 'year the Westwood Community Plan was last updated' },
			{ value: '2', label: 'D Line Extension stations being built in Westwood: UCLA and VA Hospital' },
		],
		cards: [
			{
				title: 'The subway is being built, but Metro has no opening date',
				body: 'Metro’s D Line Extension Section 1 opened in May 2026. Section 3 is in construction in Westwood, including work at the UCLA and VA Hospital stations, and Metro’s project page gives no opening date for Sections 2 and 3. Describe the stations as under construction, not as open.',
			},
			{
				title: 'Check the specific plans on your parcel',
				body: 'The City lists several plans and overlays for the Westwood plan area, among them the Westwood Community Multi-Family Specific Plan, the North Westwood Village plan, the Westwood Village Specific Plan, and the Wilshire–Westwood Scenic Corridor. We have not reviewed what the multi-family plan requires, so look up your parcel before you quote what can be built.',
			},
			{
				title: 'Use the thin sales pool carefully',
				body: `Our Westwood figures rest on ${rso('westwood').pricePerUnit?.compCount ?? 0} older-building sales, and the cap rate range on ${rso('westwood').capRate?.compCount ?? 0}. A building with unusual rents or location can sell far from the median, so a Broker Opinion of Value built on your actual numbers is a better guide than the average.`,
			},
		],
		source:
			'Sources: LA City Planning (Westwood plan area page and community plan text); LA Metro (D Line Extension project page, Sepulveda Transit Corridor page, schedules); UCLA Health; VA West Los Angeles; Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked November 5, 2026.',
		faqs: [
			{
				q: 'Which Metro stations serve Westwood?',
				a: 'The E Line’s Westwood/Rancho Park station is south of Wilshire in Rancho Park, not in Westwood Village. The D Line Extension is building Westwood/UCLA and Westwood/VA Hospital stations, and Metro lists no opening date for Sections 2 and 3. Bus lines 2, 4, 20, 720, and 761 serve Westwood.',
			},
			{
				q: 'Is Westwood part of the Westside community plan update?',
				a: 'No. The City’s Westside update covers West Los Angeles, Venice, Palms–Mar Vista–Del Rey, and Westchester–Playa del Rey. The Westwood Community Plan was last updated in 1999, and we did not find an update program for it.',
			},
		],
	},

	venice: {
		eyebrow: 'What’s Local in Venice',
		heading: 'Venice Apartment Owners: The Coastal Zone, the Mello Act, and What They Mean for a Sale',
		intro: [
			'Much of Venice is in the Coastal Zone, so changes to an apartment building can need City review, and in some places a coastal permit from the California Coastal Commission, on top of the usual rules. That does not stop a sale, but it changes what a buyer can plan to do with the building, so it belongs in the pricing conversation. This is general information, not legal advice; confirm your parcel with City Planning and a land-use attorney.',
		],
		facts: [
			{ value: 'West of Lincoln Blvd', label: 'is the Venice Coastal Zone Specific Plan area' },
			{ value: 'No', label: 'certified Local Coastal Program for Venice (per City Planning)' },
			{ value: money(rso('venice').pricePerUnit?.median ?? 0), label: `median price per unit, older buildings (${rso('venice').pricePerUnit?.compCount ?? 0} sales)` },
		],
		cards: [
			{
				title: 'Find out whether your lot is in the Coastal Zone',
				body: 'The Venice Coastal Zone Specific Plan covers the part of the Venice plan area west of Lincoln Boulevard, including lots on the west side of Lincoln. Inside it, a demolition, new construction, alteration of a building’s size, or a change in the density or intensity of use is a “Venice Coastal Development Project” that needs the City’s sign-off before permits are issued.',
			},
			{
				title: 'Expect the Mello Act to apply to housing changes',
				body: 'City Planning applies the state Mello Act when a project in the Coastal Zone converts, demolishes, or develops residential units. In a June 2026 City determination, small new developments of nine or fewer units were treated as exempt from the inclusionary unit requirement. The Specific Plan also looks for replacement affordable units to stay affordable. A buyer planning to redevelop should have a land-use attorney review it.',
			},
			{
				title: 'A coastal permit may be needed in some areas',
				body: 'In parts of the Coastal Zone the California Coastal Commission also issues a coastal permit. We have not verified which Venice parcels are in that “dual jurisdiction” area. Commission staff, reviewing a 2020 four-unit demolition on the Venice Canals, recommended conditions to offset the loss of housing density, so treat redevelopment value with caution.',
			},
		],
		source:
			'Sources: LA City Planning (Venice plan area page, Venice Coastal Zone Specific Plan, Venice Local Coastal Program page, Mello Act determination of June 10, 2026); California Coastal Commission staff reports (2020 and 2025); LA Metro (schedules, Countywide BRT Study); Highlight analysis of CoStar sold multifamily comps, January to October 2026. Checked November 5, 2026.',
		faqs: [
			{
				q: 'Does the Coastal Zone stop me from selling my Venice apartment building?',
				a: 'No. The Coastal Zone rules apply to demolition, new construction, and changes to a building’s size or density, not to a sale of the building as it stands. They matter to price because a buyer who planned to redevelop will need City review and may need a coastal permit.',
			},
			{
				q: 'What is the Mello Act?',
				a: 'A California law the City applies to projects in the Coastal Zone that convert, demolish, or develop residential units. It protects affordable housing in the coastal area. Talk to a land-use attorney about how it applies to a specific project.',
			},
			{
				q: 'Is there a Metro rail station in Venice?',
				a: 'No. Metro Line 33 runs along Venice Boulevard, and Metro’s countywide bus rapid transit study includes a Venice corridor linking Venice Beach to Downtown LA. It is in the planning stage, with a recommendation expected in spring 2027.',
			},
		],
	},
};
