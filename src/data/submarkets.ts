// Launch scope: 8 submarket pages. Walk/Transit/Bike Scores sourced from walkscore.com (fetched 2026-08-20).
// Retail, employer, and transit highlights below are general, well-established neighborhood characteristics.
// Precise demographic figures (median income, renter %, population growth) are NOT included here and should
// be sourced from Census ACS / DataUSA before publishing, rather than estimated.

export type Submarket = {
	slug: string;
	name: string;
	region: string;
	blurb: string;
	walkScore?: number; // omitted where Walk Score publishes no figure for the area
	transitScore?: number;
	bikeScore?: number;
	walkScoreLabel?: string;
	transit: string[];
	retail: string[];
	employers: string[];
	overview: string;
	// Separate cities with their own rent control and transfer taxes. Omitted means the City of Los
	// Angeles, where the LA Rent Stabilization Ordinance and Measure ULA apply.
	city?: 'santa-monica' | 'west-hollywood' | 'beverly-hills';
	metaDescription?: string;
	// Shows the City of LA owner's guide (rent control, Measure ULA by building size, pre-listing moves).
	laOwnerGuide?: boolean;
	// Closed sale whose photo the card on /submarkets/ shows. Omit to use the neighborhood's highest-value apartment sale with a photo.
	cardSaleSlug?: string;
	// A licensed photo for the card when there is no closed sale to show. The credit line appears under the cards.
	cardPhoto?: { src: string; alt: string; caption: string; credit: string; creditUrl: string };
};

export const submarkets: Submarket[] = [
	{
		slug: 'koreatown',
		name: 'Koreatown',
		region: 'Central LA',
		blurb: 'One of the densest, most transit-connected multifamily submarkets in Los Angeles.',
		walkScore: 93,
		transitScore: 80,
		bikeScore: 57,
		walkScoreLabel: "Walker's Paradise (3rd most walkable neighborhood in LA)",
		transit: ['Metro D Line (Purple): Wilshire/Western & Wilshire/Vermont stations', 'Metro B Line (Red): Vermont/Beverly & Vermont/Santa Monica stations', 'Dense local bus network along Wilshire, Olympic, and Vermont'],
		retail: ['Wilshire Blvd and Olympic Blvd commercial corridors', 'Koreatown Plaza and Koreatown Galleria', 'Dense concentration of restaurants, Korean BBQ, spas, and 24-hour retail'],
		employers: ['Kaiser Permanente Los Angeles Medical Center', 'Wilshire Blvd office corridor', 'Wiltern Theatre and surrounding entertainment/retail employers'],
		overview:
			'Koreatown is one of LA’s most densely populated submarkets and a perennial target for multifamily investment sales, driven by strong rental demand, deep transit access via two Metro Rail lines, and a 24-hour commercial corridor along Wilshire and Olympic. Highlight has closed value-add and development-site transactions throughout Koreatown, including buildings positioned for both existing-use and redevelopment buyers.',
		metaDescription:
			'Koreatown multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA explained, SB 79 near the subway, and a free valuation.',
		laOwnerGuide: true,
	},
	{
		slug: 'pico-union',
		name: 'Pico-Union',
		region: 'Central LA',
		blurb: 'A dense, historically rent-controlled submarket just west of Downtown LA.',
		walkScore: 90,
		transitScore: 83,
		bikeScore: 74,
		walkScoreLabel: "Walker's Paradise (7th most walkable neighborhood in LA)",
		transit: ['Metro D Line (Purple): Westlake/MacArthur Park station nearby', 'Metro J Line (Silver) express bus along the Harbor Transitway', 'Direct bus access to Downtown LA and USC'],
		retail: ['Pico Blvd and Union Ave commercial corridors', 'Local markets and restaurants serving a dense Central American immigrant community', 'Close proximity to the LA Convention Center and Crypto.com Arena district'],
		employers: ['Downtown LA financial and civic core (short commute)', 'USC (short commute)', 'LA Convention Center / event and hospitality employment'],
		overview:
			'Pico-Union sits immediately west of Downtown LA, offering some of the highest Walk and Transit Scores of any submarket in this portfolio. Its dense, predominantly rent-controlled housing stock makes it a consistent source of value-add multifamily opportunities, with strong long-term rental demand driven by proximity to Downtown and USC employment.',
		metaDescription:
			'Pico-Union multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA explained, and a free valuation for owners.',
		laOwnerGuide: true,
	},
	{
		slug: 'westlake',
		name: 'Westlake',
		region: 'Central LA',
		blurb: 'Home to MacArthur Park and some of Highlight’s largest closed transactions, including the Burlington Portfolio.',
		walkScore: 91,
		transitScore: 87,
		bikeScore: 64,
		walkScoreLabel: "Walker's Paradise (4th most walkable neighborhood in LA)",
		transit: ['Metro B Line (Red) & D Line (Purple): MacArthur Park/Westlake station', 'Metro Bus Rapid Transit along Wilshire and Alvarado', 'One of the best transit-connected submarkets in LA'],
		retail: ['Alvarado St and 6th St commercial corridors', 'MacArthur Park and surrounding retail/dining district', 'Dense mixed-use storefronts serving a high-density residential population'],
		employers: ['Downtown LA financial and civic core (adjacent)', 'Kaiser Permanente and other Wilshire corridor medical/office employers'],
		overview:
			'Westlake, anchored by MacArthur Park, is where Highlight closed the Burlington Portfolio, a 192-unit, three-building 1031 exchange transaction, along with the 65-unit 236 S Bonnie Brae St and other value-add sales. The submarket combines LA’s highest transit access with consistently strong multifamily fundamentals.',
		metaDescription:
			'Westlake multifamily broker: 2026 apartment prices and cap rates, MacArthur Park projects, LA rent control and Measure ULA, and a free valuation.',
		laOwnerGuide: true,
	},
	{
		slug: 'east-hollywood',
		name: 'East Hollywood',
		region: 'Central LA',
		blurb: 'A dense, walkable submarket bordering Hollywood, Los Feliz, and Silver Lake, anchored by major medical and educational employers.',
		walkScore: 90,
		transitScore: 70,
		bikeScore: 71,
		walkScoreLabel: "Walker's Paradise (6th most walkable neighborhood in LA)",
		transit: [
			'Metro B Line (Red): Vermont/Santa Monica, Vermont/Beverly & Vermont/Sunset stations',
			'Dense local bus network along Vermont Ave and Santa Monica Blvd, with direct access to the 101 Freeway',
		],
		retail: [
			'Vermont Ave and Virgil Ave dining, retail, and entertainment corridors',
			'A diverse mix of ethnic eateries, independent shops, and entertainment venues',
			'Four blocks from Sunset Junction in neighboring Silver Lake',
		],
		employers: ['Kaiser Permanente Los Angeles Medical Center', 'Children’s Hospital Los Angeles', 'Los Angeles City College'],
		overview:
			'East Hollywood, bordered by Los Feliz to the north, Silver Lake to the east, and Hollywood to the west, is one of LA’s most walkable and culturally diverse submarkets, anchored by major medical and educational institutions. Highlight closed the 7-unit value-add sale at 941 N Normandie Ave here, and is currently marketing 4412-4414 Lockwood Ave in the submarket’s Virgil Village pocket.',
		metaDescription:
			'East Hollywood multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA explained, and a free valuation for owners.',
		laOwnerGuide: true,
	},
	{
		slug: 'hollywood',
		name: 'Hollywood',
		region: 'Central LA',
		blurb: 'The most walkable neighborhood in LA, where older, rent-controlled buildings make up most apartment sales.',
		walkScore: 95,
		transitScore: 67,
		bikeScore: 73,
		walkScoreLabel: "Walker's Paradise (Central Hollywood is the most walkable neighborhood in LA)",
		transit: ['Metro B Line (Red): Hollywood/Western, Hollywood/Vine, and Hollywood/Highland stations', 'Metro and DASH bus service along Sunset, Hollywood, and Santa Monica Blvds', 'Quick access to the US-101 freeway'],
		retail: ['Hollywood Blvd and Hollywood & Highland, home to the Dolby Theatre', 'Sunset Blvd restaurant, nightlife, and entertainment corridor', 'Hollywood & Vine and the surrounding dining district'],
		employers: ['Paramount Pictures and other studio lots along Melrose, Sunset, and Gower', 'Entertainment, media, and production companies clustered around Sunset and Hollywood Blvds', 'Tourism and hospitality employers, including hotels, venues, and the nearby Hollywood Bowl'],
		overview:
			'Hollywood sits at the center of the city, between West Hollywood to the west, the Hollywood Hills to the north, and East Hollywood to the east. It pairs one of the highest Walk Scores in Los Angeles with Metro B Line stations and a steady flow of entertainment-industry renters, which keeps demand for apartments broad. Most of the apartment buildings that sold here in 2026 were older buildings, so rent control and building condition shape pricing as much as location does, and newer buildings trade on a different footing. This page uses real 2026 sales to show what buyers have paid.',
		metaDescription:
			'Hollywood multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA explained, and a free valuation for owners.',
		laOwnerGuide: true,
	},
	{
		slug: 'silver-lake',
		name: 'Silver Lake',
		region: 'Eastside LA',
		blurb: 'A hillside, walkable submarket with strong long-term rent growth on the Eastside.',
		walkScore: 81,
		transitScore: 54,
		bikeScore: 51,
		walkScoreLabel: 'Very Walkable (20th most walkable neighborhood in LA)',
		transit: ['Metro local and rapid bus lines along Sunset Blvd and Hyperion Ave', 'Short drive/bus connection to Metro B Line (Red) at Vermont/Sunset'],
		retail: ['Sunset Junction and Silver Lake Blvd retail corridors', 'Independent boutiques, coffee shops, and restaurants', 'Silver Lake Reservoir and recreation area as a neighborhood amenity'],
		employers: ['Creative and media companies clustered along Sunset Blvd', 'Proximity to Downtown LA and Hollywood employment centers'],
		overview:
			'Silver Lake is one of LA’s most in-demand Eastside submarkets, known for its hillside streets, walkable retail corridors, and consistently strong renter demand from creative-industry professionals. Highlight has closed value-add multifamily sales in Silver Lake, including properties near Sunset Blvd.',
		metaDescription:
			'Silver Lake multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA explained, and a free valuation for owners.',
		laOwnerGuide: true,
	},
	{
		slug: 'south-la',
		cardSaleSlug: '2204-7th-ave-los-angeles-ca-90018', // the top sale, 1135 Leighton Ave, only has an interior photo
		name: 'South LA',
		region: 'South LA',
		blurb: 'A large, mostly rent-controlled submarket with some of the lowest prices per unit in the City of LA.',
		transit: ['Metro E Line (Expo) and K Line (Crenshaw/LAX) light rail', 'Metro bus service along Crenshaw Blvd, Vermont Ave, and Western Ave', 'Close to the 10 and 110 freeways'],
		retail: ['Baldwin Hills Crenshaw Plaza and the Crenshaw Blvd corridor', 'Leimert Park Village arts and dining district', 'Vermont Ave, Western Ave, and Figueroa St commercial corridors'],
		employers: ['University of Southern California', 'Exposition Park, including the Los Angeles Memorial Coliseum, the California Science Center, and the Natural History Museum', 'Downtown LA and the Westside, both a short commute away'],
		overview:
			'South LA covers the City of Los Angeles neighborhoods south and southwest of Downtown that CoStar groups as South Central LA and Crenshaw, around ZIP codes 90003, 90007, 90008, 90018, 90037, 90044, 90047, and 90062. It is a large area with a mostly older housing stock: nearly all of the apartment buildings that sold here in 2026 were built before 1978, so rent stabilization applies to most of them. Light rail along Exposition and Crenshaw Blvds, the University of Southern California, and the short drive to Downtown LA support renter demand. This page uses real 2026 sales to show what buyers have paid.',
		metaDescription:
			'South LA multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA explained, and a free valuation for owners.',
		laOwnerGuide: true,
	},
	{
		slug: 'brentwood',
		name: 'Brentwood',
		region: 'West LA',
		blurb: 'One of West LA’s most prestigious ownership markets, and a repeat submarket for Highlight’s value-add sales.',
		walkScore: 52,
		transitScore: 42,
		bikeScore: 42,
		walkScoreLabel: 'Somewhat Walkable (70th most walkable neighborhood in LA)',
		transit: ['Metro Rapid bus along Wilshire Blvd and Sunset Blvd', 'Car-oriented submarket relative to Central LA'],
		retail: ['San Vicente Blvd retail and restaurant corridor', 'Brentwood Country Mart', 'Proximity to Westwood and Santa Monica retail districts'],
		employers: ['VA West Los Angeles Medical Center', 'UCLA (adjacent submarket)', 'West LA/Sunset Blvd professional office corridor'],
		overview:
			'Brentwood is one of West LA’s most prestigious multifamily ownership markets, with consistently below-market rents on older rent-controlled stock creating repeat value-add opportunities. Highlight has closed transactions in Brentwood, including 11667 Goshen Ave, 11642 Kiowa Ave, and 11747 Mayfield Ave, building deep buyer relationships in the immediate area.',
		metaDescription:
			'Brentwood multifamily broker: 2026 apartment prices, LA rent control and Measure ULA explained, and a free valuation for Westside apartment owners.',
		laOwnerGuide: true,
	},
	// Walk Score is walkscore.com's neighborhood score for West Los Angeles (90, checked 2026-10-22); no Transit or
	// Bike Score is shown because the group spans several neighborhoods. Transit facts are from LA Metro: the E Line
	// stops in the area, and the D Line's Westwood/UCLA and Westwood/VA Hospital stations, which Metro projects for
	// fall 2027 (an estimate, not a set date). The sales group is ZIP codes 90024, 90025, 90064, 90034, and 90066
	// (see valuationAssumptions.ts).
	{
		slug: 'west-la',
		name: 'West LA',
		region: 'Westside LA',
		blurb: 'West Los Angeles, Westwood, Palms, and Mar Vista: the Westside neighborhoods of the City of LA, served by the E Line today and the D Line soon.',
		walkScore: 90,
		walkScoreLabel: "Walker's Paradise (West Los Angeles neighborhood)",
		transit: [
			'Metro E Line (Expo): Palms, Westwood/Rancho Park, and Expo/Sepulveda stations',
			'Metro D Line (Purple) subway extension: Westwood/UCLA and Westwood/VA Hospital stations, projected for fall 2027',
			'Metro bus lines along Wilshire Blvd',
		],
		retail: ['Westwood Village', 'Sawtelle Blvd restaurants and shops (Sawtelle Japantown)', 'The Santa Monica Blvd and Pico Blvd corridors'],
		employers: ['UCLA (Westwood)', 'VA West Los Angeles Medical Center', 'Silicon Beach tech and media employers nearby'],
		overview:
			'West LA covers four Westside neighborhoods of the City of Los Angeles: West Los Angeles, Westwood, Palms, and Mar Vista. All of it is inside the City of LA, so LA rent control and Measure ULA apply. Highlight sold 3667 Mentone Ave in Palms and 12770 Caswell Ave in Mar Vista.',
		metaDescription:
			'West LA multifamily broker: 2026 apartment prices and cap rates in West LA, Westwood, Palms, and Mar Vista, LA rent control, Measure ULA, and a free valuation.',
		laOwnerGuide: true,
	},
	{
		slug: 'santa-monica',
		name: 'Santa Monica',
		region: 'Westside LA',
		blurb: 'A rent-controlled coastal submarket with consistently high per-unit pricing.',
		walkScore: 83,
		transitScore: 60,
		bikeScore: 88,
		walkScoreLabel: 'Very Walkable, Very Bikeable',
		transit: ['Metro E Line (Expo) light rail to Downtown LA', 'Big Blue Bus local network', 'Highly bikeable beach-adjacent street grid'],
		retail: ['Third Street Promenade', 'Montana Ave and Main St retail corridors', 'Santa Monica Pier and beachfront commercial district'],
		employers: ['Silicon Beach tech employers (Snap Inc., and other media/tech firms)', 'Santa Monica College', 'Saint John’s Health Center'],
		overview:
			'Santa Monica is a rent-controlled coastal submarket that consistently commands some of the highest per-unit multifamily pricing in the Los Angeles Metro Area. Highlight has closed multiple transactions here, including properties near the Third Street Promenade and Montana Ave corridors, drawing on strong long-term demand from the Silicon Beach employment base.',
		city: 'santa-monica',
		cardSaleSlug: '2820-3rd-st-santa-monica-ca-90405',
		metaDescription:
			'Santa Monica multifamily broker: 2026 apartment sale prices and cap rates, the Measure GS transfer tax explained, and a free valuation for owners.',
	},
	// Walk Score is walkscore.com's published score for 5200 Wilshire Blvd, at the center of the
	// neighborhood (checked 2026-10-22); its neighborhood page was unavailable, so no Transit or Bike
	// Score is shown rather than a guess. The D Line extension's first three stations opened May 8, 2026.
	{
		slug: 'mid-wilshire',
		name: 'Mid-Wilshire',
		region: 'Central LA',
		blurb: 'The Miracle Mile and Museum Row, with three new Metro D Line subway stations that opened in May 2026.',
		walkScore: 92,
		walkScoreLabel: "Walker's Paradise (5200 Wilshire Blvd)",
		transit: [
			'Metro D Line (Purple): Wilshire/La Brea and Wilshire/Fairfax stations, opened May 8, 2026, with Wilshire/La Cienega just west',
			'Metro bus lines along Wilshire Blvd, La Brea Ave, and Fairfax Ave',
			'A direct subway ride to Koreatown and Downtown LA',
		],
		retail: ['Museum Row: LACMA, the Academy Museum, and the Petersen', 'La Brea Ave shops and restaurants', 'The Grove and the Original Farmers Market (just north)'],
		employers: ['Wilshire Blvd office corridor', 'LACMA and the Museum Row institutions', 'Cedars-Sinai Medical Center and CBS Television City (nearby)'],
		overview:
			'Mid-Wilshire, home to the Miracle Mile and Museum Row, gained three new subway stations when the Metro D Line extension opened in May 2026. Its older rent-controlled buildings line the side streets between Wilshire and Pico, from Fairfax to La Brea and beyond. Highlight sold 1201 S Orange Grove Ave, a 5-unit rent-controlled building with structural issues and minimal parking, at full price on an accelerated timeline.',
		metaDescription:
			'Mid-Wilshire multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA explained, the new D Line stations, and a free valuation.',
		laOwnerGuide: true,
	},
	// Walk and Transit Scores are walkscore.com's city-wide averages (checked 2026-10-22); its Bike Score
	// page was unavailable, so none is shown.
	{
		slug: 'west-hollywood',
		name: 'West Hollywood',
		region: 'Westside LA',
		blurb: 'Its own city, with its own rent control law and no Measure ULA, and some of the highest per-unit apartment pricing in LA County.',
		walkScore: 91,
		transitScore: 61,
		walkScoreLabel: "Walker's Paradise (city-wide average)",
		transit: [
			'Metro bus lines along Santa Monica Blvd, Sunset Blvd, Fairfax Ave, and La Cienega Blvd',
			'The city-run Cityline shuttle',
			'Short drive to the Metro D Line (Purple) on Wilshire Blvd',
		],
		retail: [
			'The Sunset Strip',
			'Santa Monica Blvd and Melrose Ave corridors',
			'The West Hollywood Design District and Robertson Blvd',
		],
		employers: ['Cedars-Sinai Medical Center (next door)', 'Pacific Design Center and the Design District', 'Sunset Strip hospitality, music, and entertainment employers'],
		overview:
			'West Hollywood is its own city, with its own rent control law and no Measure ULA transfer tax, which makes it one of the most distinctive apartment markets in Los Angeles County. Older rent-controlled buildings in the Norma Triangle, West Hollywood West, and the Eastside near Fairfax trade at some of the highest prices per unit in the region. Highlight sold 925 N San Vicente Blvd, a 9-unit rent-controlled building facing a mandatory seismic retrofit, and had it under contract in less than a week.',
		city: 'west-hollywood',
		metaDescription:
			'West Hollywood multifamily broker: 2026 apartment prices and cap rates, WeHo rent control explained, why Measure ULA does not apply, and a free valuation.',
	},
	// Walk, Transit, and Bike Scores are walkscore.com's city-wide figures for Beverly Hills (75, 55, 52; checked
	// 2026-10-22). Transit facts are from LA Metro: the D Line extension's Wilshire/La Cienega station opened
	// May 8, 2026; Metro's stations in Beverly Hills and Century City are projected for spring 2027 (an estimate,
	// not a set date).
	{
		slug: 'beverly-hills',
		cardPhoto: {
			src: '/images/submarkets/beverly-hills-sign.webp',
			alt: 'The Beverly Hills sign, an arch of lettering over a fountain at Beverly Gardens Park',
			caption: 'Beverly Hills sign, Beverly Gardens Park',
			credit: 'Tony Hisgett, CC BY 2.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Beverly_Hills_3_(14952153353).jpg',
		},
		name: 'Beverly Hills',
		region: 'Westside LA',
		blurb: 'Its own city, with its own rent control law and no city transfer tax or Measure ULA, and some of the highest per-unit prices in LA County.',
		walkScore: 75,
		transitScore: 55,
		bikeScore: 52,
		walkScoreLabel: 'Very Walkable (city-wide average)',
		transit: [
			'Metro D Line (Purple): Wilshire/La Cienega station, opened May 8, 2026, with a second Beverly Hills station projected for spring 2027',
			'Metro bus lines along Wilshire Blvd',
			'A direct subway ride east to Koreatown and Downtown LA',
		],
		retail: ['Rodeo Drive and the Golden Triangle shopping district', 'The Wilshire Blvd corridor', 'Restaurants and hotels in the city center'],
		employers: ['Cedars-Sinai Medical Center (adjacent, in Los Angeles)', 'Entertainment, hospitality, and retail employers in the city center', 'Century City office employers (adjacent)'],
		overview:
			'Beverly Hills is its own city, with its own rent stabilization ordinance, its own soft-story program, and no city transfer tax or Measure ULA. Its older apartment buildings sell for some of the highest prices per unit in Los Angeles County, and the D Line subway now reaches the city’s edge at Wilshire/La Cienega.',
		city: 'beverly-hills',
		metaDescription:
			'Beverly Hills multifamily broker: 2026 apartment prices and cap rates, Beverly Hills rent stabilization explained, no city transfer tax, and a free valuation.',
	},
	{
		slug: 'north-hollywood',
		name: 'North Hollywood (NoHo)',
		region: 'San Fernando Valley',
		blurb: 'A rapidly redeveloping Valley submarket anchored by the NoHo Arts District.',
		walkScore: 67,
		transitScore: 47,
		bikeScore: 65,
		walkScoreLabel: 'Somewhat Walkable (48th most walkable neighborhood in LA)',
		transit: ['Metro B Line (Red) & G Line (Orange): North Hollywood Station', 'Major Valley transit hub connecting to Downtown LA and the Orange Line busway'],
		retail: ['NoHo Arts District theaters, galleries, and restaurants', 'Lankershim Blvd and Magnolia Blvd corridors'],
		employers: ['Warner Bros. and Universal Studios (Burbank, adjacent)', 'NoHo Arts District entertainment and hospitality employers'],
		overview:
			'North Hollywood is one of the San Fernando Valley’s fastest-changing submarkets, anchored by the NoHo Arts District and one of LA Metro’s busiest transit hubs at North Hollywood Station. Highlight has closed value-add sales here, including the soft-story retrofit property at 6938 Coldwater Canyon Ave.',
		metaDescription:
			'North Hollywood multifamily broker: 2026 apartment prices and cap rates, District NoHo, LA rent control and Measure ULA, and a free valuation.',
		laOwnerGuide: true,
	},
	{
		slug: 'van-nuys',
		name: 'Van Nuys',
		region: 'San Fernando Valley',
		blurb: 'A high-volume Valley multifamily market with strong workforce housing demand.',
		walkScore: 71,
		transitScore: 52,
		bikeScore: 61,
		walkScoreLabel: 'Very Walkable (39th most walkable neighborhood in LA)',
		transit: ['Metro G Line (Orange) busway', 'Metrolink Van Nuys station (Ventura County Line)', 'Dense local bus network along Van Nuys Blvd and Sherman Way'],
		retail: ['Van Nuys Blvd civic and commercial corridor', 'Van Nuys Civic Center'],
		employers: ['Van Nuys Airport and surrounding aviation/industrial employers', 'Los Angeles Police Academy', 'Valley industrial and office employment base'],
		overview:
			'Van Nuys is a high-volume San Fernando Valley multifamily submarket driven by deep workforce housing demand and strong transit access via the Metro Orange Line and Metrolink. Highlight closed 14654 Gault St in Van Nuys as part of its Valley track record.',
		metaDescription:
			'Van Nuys multifamily broker: 2026 apartment prices and cap rates, the new light rail line, LA rent control and Measure ULA, and a free valuation.',
		laOwnerGuide: true,
	},
];
