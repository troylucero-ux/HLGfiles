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
};
