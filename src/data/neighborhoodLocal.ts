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
// - Silver Lake: Hyperion Residences, a three-parcel site, sold July 2026 for $5.25 million (Northmarq's
//   transaction page) or "nearly $5.3 million" (The Real Deal, citing LA Business First); delivered entitled for
//   about 54 units (Transit Oriented Communities Tier 3) and re-entitled to 105 units through Executive Directive 1
//   during escrow; the broker put the buyer's basis near $50,000 per buildable unit. Search-result summaries only
//   (those sites block automated fetches), so the section says "reported".
// - Brentwood: Multi-Housing News, April 17, 2026 (read in the browser): 11911 Mayfield Ave (31 units and a
//   nonconforming studio) and 11860 Kiowa Ave (29 units), 61 units, $46.4 million combined, built in 2006 and 2007,
//   marketed earlier at $52 million, closed in under 60 days, "two of just five multifamily deals completed in the
//   neighborhood this year"; broker quote about strong demand and limited supply. Brokers call it a per-unit
//   benchmark; no source calls it a record, so the page does not.
// - East Hollywood, Pico-Union, and Brentwood figures from SALES_STATS (CoStar export, Jan to Sept 22, 2026).
import { SALES_STATS, MIN_CAP_RATE_COMPS } from './valuationAssumptions';

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
			'We have closed three sales in North Hollywood, including the 10-unit [6938 Coldwater Canyon Ave](/case-studies/6938-coldwater-canyon-ave-north-hollywood-apartments/), a soft-story retrofit property.',
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
			{ value: '105 units', label: 'what a three-parcel Hyperion Ave site was re-entitled for during escrow, reported in July 2026' },
		],
		cards: [
			{
				title: 'Look up your building’s RSO status first',
				body: 'Enter your address in [ZIMAS](https://zimas.lacity.org/) and read the Rent Stabilization Ordinance field under Housing: it says Yes or No. The Housing Department notes that Yes means at least one unit is covered, so a building can be partly covered. Print it before you meet a broker. If you are unsure, the Housing Department answers questions at (866) 557-7368.',
			},
			{
				title: 'Developers are buying Silver Lake sites',
				body: 'In July 2026, The Real Deal and Northmarq reported the sale of a three-parcel site on Hyperion Ave for about $5.25 million. It came with approvals for roughly 54 units, and the buyer re-entitled it to 105 units during escrow. That was a development site, not a typical apartment building, but it shows that land can be worth more than the building on it. If your lot is large or zoned for more, ask us to price it both ways.',
			},
			{
				title: 'Know your unit count before you pick a buyer pool',
				body: 'Our Silver Lake sales and listings have run from 4 to 9 units. Buildings of one to four units can be bought with residential loans, and five or more need commercial loans, which changes who can buy yours. Our guide to [selling a fourplex or small building](/insights/selling-a-fourplex-or-small-apartment-building-in-los-angeles/) explains how.',
			},
		],
		proof:
			'We have sold 1330 Portia St, an 8-unit building, and 1421 Waterloo St, a 4-unit building, in Silver Lake, and have also marketed [1118-1120 Sanborn Ave](/listings/1118-1120-sanborn-ave-los-angeles-ca-90029/) and [333 N Union Ave](/listings/333-n-union-ave-los-angeles-ca-90026/).',
		source: 'Sources: LA Housing Department RSO Property Search (housing.lacity.gov); Northmarq and The Real Deal, July 2026, as reported (figures differ slightly between the two). Checked October 2026.',
		faqs: [
			{
				q: 'Are developers buying apartment buildings or land in Silver Lake?',
				a: 'Some are. In July 2026, Northmarq and The Real Deal reported the sale of a three-parcel development site on Hyperion Ave for about $5.25 million. It was approved for roughly 54 units, and the buyer re-entitled it to 105 units during escrow. A site like that is different from an occupied apartment building, but owners with larger or higher-density lots should ask what the land alone could be worth.',
			},
		],
	},

	'east-hollywood': {
		eyebrow: 'What’s Local in East Hollywood',
		heading: 'East Hollywood Apartment Owners: Why the Prices You See Online Disagree',
		intro: [
			`Search for what an apartment building is worth in East Hollywood and you will find very different numbers. Some sites quote $275,000 to $365,000 per unit. In our 2026 data, ${rso('east-hollywood').pricePerUnit!.compCount} sales of older East Hollywood buildings had a median of ${money(rso('east-hollywood').pricePerUnit!.median)} per unit. Both can be honest, because they describe different buildings.`,
			`An average is only as good as the buildings behind it. One published East Hollywood average rests on just two apartment sales, and a blend of older and newer buildings can hide a gap of about ${money(Math.round((newer('east-hollywood').pricePerUnit!.median - rso('east-hollywood').pricePerUnit!.median) / 10_000) * 10_000)} per unit.`,
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
		source: 'Sources: Highlight analysis of CoStar sold multifamily comps, January to September 2026; published figures from broker websites, checked October 2026. Older-building median rests on the sale count shown.',
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
			'We have closed four sales in Pico-Union, including the 24-unit [1136 S Alvarado St](/closed-sales/1136-s-alvarado-st-los-angeles-ca-90006/).',
		source: 'Sources: LA Housing Department RSO Property Search (housing.lacity.gov); Highlight analysis of CoStar sold multifamily comps, January to September 2026. The cap rate range is the middle half of sales that reported one. Checked October 2026.',
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
			'Very few apartment buildings trade in Brentwood. In April 2026, two buildings on Mayfield Ave and Kiowa Ave, 61 units in all, sold for a combined $46.4 million, after being marketed at $52 million. Multi-Housing News reported that the two sales were two of just five multifamily deals in the neighborhood that year, and that they closed in under 60 days.',
			'Those buildings were completed in 2006 and 2007, long after the 1978 cutoff for LA rent control, so they say little about an older, rent-controlled building. That difference is the most important thing to understand about Brentwood pricing.',
		],
		facts: [
			{ value: '61 units', label: 'in the two Brentwood buildings that sold for about $46.4 million in April 2026' },
			{ value: `${rso('brentwood').pricePerUnit!.compCount + newer('brentwood').pricePerUnit!.compCount}`, label: 'Brentwood multifamily sales in our 2026 data through September' },
			{ value: `${money(rso('brentwood').pricePerUnit!.median)} vs. ${money(newer('brentwood').pricePerUnit!.median)}`, label: `median price per unit, older vs. newer Brentwood buildings (${rso('brentwood').pricePerUnit!.compCount} and ${newer('brentwood').pricePerUnit!.compCount} sales)` },
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
				title: 'Buyers are watching a small set of streets',
				body: 'Brokers on the April sale said demand in Brentwood is strong, especially for large, well-located units, and supply is limited. We have sold on the same streets. Pricing and timing matter more when so few buildings trade.',
			},
		],
		proof:
			'We have sold three Brentwood buildings: [11642 Kiowa Ave](/case-studies/11642-kiowa-ave-brentwood-apartments/) (9 units), [11667 Goshen Ave](/case-studies/11667-goshen-ave-brentwood-apartments/) (10 units), and [11747 Mayfield Ave](/closed-sales/11747-mayfield-ave-los-angeles-ca-90049/) (8 units).',
		source: 'Sources: Multi-Housing News, April 17, 2026 (Marcus & Millichap sale of 11911 Mayfield Ave and 11860 Kiowa Ave); Highlight analysis of CoStar sold multifamily comps, January to September 2026. Checked October 2026.',
		faqs: [
			{
				q: 'What was the biggest apartment sale in Brentwood in 2026?',
				a: 'In April 2026, two buildings, 11911 Mayfield Ave (31 units and a nonconforming studio) and 11860 Kiowa Ave (29 units), sold together for about $46.4 million, according to Multi-Housing News. They were marketed at $52 million earlier, were completed in 2006 and 2007, and closed in under 60 days. Because they are newer buildings, the sale says little about the price of an older, rent-controlled building.',
			},
			{
				q: 'Why do Brentwood apartment buildings sell for more per unit than Central LA?',
				a: `Two things show up in the data. Brentwood has very few apartment sales, only ${rso('brentwood').pricePerUnit!.compCount + newer('brentwood').pricePerUnit!.compCount} in our 2026 data, and its newer buildings sell for much more per unit than its older ones. Brokers on the April 2026 Mayfield and Kiowa sale described demand as strong and supply as limited. Older Brentwood buildings had a median of ${money(rso('brentwood').pricePerUnit!.median)} per unit in 2026, compared with ${money(rso('koreatown').pricePerUnit!.median)} in Koreatown, though a median from ${rso('brentwood').pricePerUnit!.compCount} sales is fragile.`,
			},
		],
	},
};
