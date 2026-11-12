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
	city?: 'santa-monica' | 'west-hollywood' | 'beverly-hills' | 'pasadena' | 'burbank' | 'glendale' | 'long-beach' | 'inglewood';
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
	// Sherman Oaks, Studio City, and Reseda (added November 5, 2026). Facts below were read from LA Metro (metro.net and the
	// June 7, 2026 timetables), LA City Planning (planning.lacity.gov), the neighborhood councils, and Radford Studio Center's own
	// site. No Walk Scores are shown because none were checked for these areas. Sales figures live in valuationAssumptions.ts.
	{
		slug: 'sherman-oaks',
		name: 'Sherman Oaks',
		region: 'San Fernando Valley',
		blurb: 'A Ventura Boulevard Valley neighborhood beside the 101 and 405, where older rent-controlled buildings and newer ones sell side by side.',
		transit: [
			'Metro Rapid Line 761: Van Nuys G Line Station, Ventura & Sepulveda in Sherman Oaks, and the E Line at Expo/Sepulveda',
			'Metro local lines 233 (Van Nuys Blvd), 155 and 240 (Ventura Blvd area)',
			'No Metro rail station inside Sherman Oaks; the nearest are the B Line’s Universal City/Studio City station and the G Line’s Van Nuys station',
		],
		retail: ['Regional commercial centers along Ventura and Sepulveda Boulevards (as City Planning describes the area)', 'The Ventura Boulevard corridor'],
		employers: ['Entertainment employers in nearby Studio City and Universal City: Radford Studio Center and Universal Studios'],
		overview:
			'Sherman Oaks is inside the City of Los Angeles, so LA rent control and Measure ULA apply. Ventura Boulevard parcels fall under the Ventura–Cahuenga Boulevard Corridor Specific Plan, the community plan that governs the area is being updated, and Metro is studying a Sepulveda subway that does not name a Sherman Oaks station. Owners here are pricing a mix of older buildings and newer ones.',
		metaDescription:
			'Sherman Oaks multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA, Ventura Blvd planning, and a free valuation.',
		laOwnerGuide: true,
		cardPhoto: {
			src: '/images/submarkets/sherman-oaks.webp',
			alt: 'Office buildings at Ventura and Sepulveda Boulevards in Sherman Oaks',
			caption: 'Ventura Blvd and Sepulveda Blvd, Sherman Oaks',
			credit: 'Cbl62, CC BY-SA 3.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Citibank_and_City_National_Bank_Buildings,_Ventura_%26_Sepulveda,_Sherman_Oaks.JPG',
		},
	},
	{
		slug: 'studio-city',
		name: 'Studio City',
		region: 'San Fernando Valley',
		blurb: 'A small, studio-adjacent Valley neighborhood with a Metro B Line station on Lankershim Boulevard.',
		transit: [
			'Metro B Line (Red): Universal City/Studio City Station on Lankershim Blvd',
			'Metro bus lines 240 (Ventura Blvd), 155, 224 (Hollywood to Sylmar via Lankershim), and 167 (Coldwater Canyon)',
		],
		retail: ['Commercial uses along Laurel Canyon Boulevard near Ventura Boulevard (as City Planning describes them)', 'The Ventura Boulevard corridor'],
		employers: ['Radford Studio Center, a 1.14-million-square-foot campus with 22 stages (per the studio’s own site)', 'Universal Studios in adjacent Universal City'],
		overview:
			'Studio City sits between Lankershim Boulevard and Fulton Avenue and includes a stretch of the Los Angeles River. It is inside the City of Los Angeles, so LA rent control and Measure ULA apply. The B Line station, the Ventura–Cahuenga Boulevard Corridor Specific Plan, and the proposed expansion of Radford Studio Center are the local factors owners ask about. Studio City has few apartment sales in a year, so its price figures rest on a small number of deals.',
		metaDescription:
			'Studio City multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA, the Radford Studio Center plan, and a free valuation.',
		laOwnerGuide: true,
		cardPhoto: {
			src: '/images/submarkets/studio-city.webp',
			alt: 'Storefronts and palm trees along Ventura Boulevard in Studio City',
			caption: 'Ventura Boulevard shopping district, Studio City',
			credit: 'Cbl62, CC BY-SA 3.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Studio_City%27s_Ventura_Boulevard_Shopping_District.JPG',
		},
	},
	{
		slug: 'reseda',
		name: 'Reseda',
		region: 'San Fernando Valley',
		blurb: 'A West Valley workforce-housing market on the G Line busway, with its community plan now under review.',
		transit: [
			'Metro G Line (busway): Reseda Station',
			'Metro bus lines 240, 150, 152, 162, 166, and 167 along Reseda Blvd, Sherman Way, Roscoe Blvd, and Nordhoff St',
			'North San Fernando Valley bus rapid transit upgrades (Metro lists the project as in construction)',
		],
		retail: ['Reseda Boulevard and Sherman Way, the historic commercial center and designated Reseda Central Business District', 'Reseda Central Business District Community Design Overlay (2005)'],
		employers: ['CSUN, Pierce College, and UCLA West Valley Medical Center nearby (all shown on Metro’s 2026 Valley map)'],
		overview:
			'Reseda is inside the City of Los Angeles, so LA rent control and Measure ULA apply. The G Line busway gives it a direct link to the Valley’s transit network, and the City’s draft community plan names the Reseda Boulevard and Sherman Way area and the G Line station area as targets for new mixed-use housing. Older buildings here trade at far lower prices per unit than on the Westside or in Studio City.',
		metaDescription:
			'Reseda multifamily broker: 2026 apartment prices and cap rates, the G Line busway, the community plan update, LA rent control, and a free valuation.',
		laOwnerGuide: true,
		cardPhoto: {
			src: '/images/submarkets/reseda.webp',
			alt: 'Reseda Boulevard looking toward the San Gabriel Mountains',
			caption: 'Reseda Boulevard',
			credit: 'Cbl62, CC BY-SA 3.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Reseda_Boulevard.JPG',
		},
	},
	// Palms, Mar Vista, Westwood, and Venice (added November 5, 2026). Facts were read from LA Metro, LA City Planning, the
	// California Coastal Commission, the neighborhood councils, and UCLA Health and the VA. No Walk Scores are shown because
	// none were checked for these areas. Sales figures live in valuationAssumptions.ts.
	{
		slug: 'palms',
		name: 'Palms',
		region: 'Westside LA',
		blurb: 'A Westside neighborhood with its own E Line station, next to Culver City’s studio and tech employers.',
		transit: [
			'Metro E Line (Expo): Palms Station, with Culver City Station the next stop east',
			'Metro Line 33 along Venice Blvd',
			'Venice Blvd has a 24-hour dedicated bus lane and protected bike lanes between Inglewood Blvd and National Blvd (completed 2023)',
		],
		retail: [
			'Strip commercial on Pico and Venice Boulevards',
			'Commercial centers on Motor Avenue, and at National Boulevard and Barrington Avenue (as the City’s community plan describes them)',
			'Small shopping centers on Sepulveda and National Boulevards',
		],
		employers: ['Culver City’s large employers next door, including Sony Pictures Entertainment, Amazon Studios, Apple, and Riot Games (per the city’s 2022 financial report)'],
		overview:
			'Palms is inside the City of Los Angeles, so LA rent control and Measure ULA apply. It sits in the Palms–Mar Vista–Del Rey community plan area, where the 1997 plan is being updated, and the Exposition Corridor Transit Neighborhood Plan is one of the City’s specific plans for the area. Palms has one of the larger sets of apartment sales among the Westside neighborhoods in our data.',
		metaDescription:
			'Palms multifamily broker: 2026 apartment prices and cap rates, the E Line, LA rent control and Measure ULA, and a free valuation for Westside apartment owners.',
		laOwnerGuide: true,
		cardSaleSlug: '3667-mentone-ave-los-angeles-ca-90034',
	},
	{
		slug: 'mar-vista',
		name: 'Mar Vista',
		region: 'Westside LA',
		blurb: 'A residential Westside neighborhood along Venice Boulevard, with a historic tract and no rail station of its own.',
		transit: [
			'No Metro rail station in Mar Vista; the E Line’s Palms and Expo/Bundy stations are the closest on that line',
			'Metro Line 33 along Venice Blvd',
			'Venice Blvd has a 24-hour dedicated bus lane and protected bike lanes between Inglewood Blvd and National Blvd (completed 2023)',
		],
		retail: [
			'Venice Boulevard: small shopping centers, fast-food and multi-ethnic restaurants (per the City’s community plan)',
			'The Centinela Avenue community center on Venice Boulevard, with a shopping center, the Mar Vista library, and small retail and antique stores',
		],
		employers: ['Culver City’s large employers next door, including Sony Pictures Entertainment, Amazon Studios, and Apple (per the city’s 2022 financial report)'],
		overview:
			'Mar Vista is inside the City of Los Angeles, so LA rent control and Measure ULA apply. The Mar Vista Community Council covers the area south of the 10 freeway and west of the 405. The Gregory Ain Mar Vista Tract is a Historic Preservation Overlay Zone, and the Palms–Mar Vista–Del Rey community plan is being updated. Sales here are few, so price figures rest on a small number of deals.',
		metaDescription:
			'Mar Vista multifamily broker: 2026 apartment prices and cap rates, LA rent control and Measure ULA, the Venice Blvd corridor, and a free valuation.',
		laOwnerGuide: true,
		cardSaleSlug: '12770-caswell-avenue-los-angeles-ca-90066',
	},
	{
		slug: 'westwood',
		name: 'Westwood',
		region: 'Westside LA',
		blurb: 'UCLA’s neighborhood, with high prices per unit and a subway extension under construction.',
		transit: [
			'Metro E Line: Westwood/Rancho Park Station, south of Wilshire in Rancho Park rather than in Westwood Village',
			'Metro D Line (Purple) Extension, Section 3: Westwood/UCLA and Westwood/VA Hospital stations under construction (Metro lists no opening date for Sections 2 and 3)',
			'Metro bus lines 2, 4, 20, 720, and 761 serve Westwood',
		],
		retail: [
			'Westwood Village, a pedestrian-oriented low-rise center between UCLA and Wilshire Boulevard',
			'Westwood Boulevard south of Wilshire, and Santa Monica and Sepulveda Boulevards',
			'The Wilshire Boulevard high-rise corridor',
		],
		employers: ['UCLA and Ronald Reagan UCLA Medical Center', 'West Los Angeles VA Medical Center', 'The Hammer Museum and Geffen Playhouse'],
		overview:
			'Westwood is inside the City of Los Angeles, so LA rent control and Measure ULA apply. The Westwood Community Plan was last updated in 1999 and is not part of the Westside plan update. Several City specific plans and overlays apply, including the Westwood Village Specific Plan, so check which ones cover a parcel before pricing it. Older buildings here sell for far more per unit than in Palms or Mar Vista, at lower cap rates, with few sales behind each number.',
		metaDescription:
			'Westwood multifamily broker: 2026 apartment prices and cap rates, UCLA-area buildings, the D Line extension, LA rent control, and a free valuation.',
		laOwnerGuide: true,
		cardPhoto: {
			src: '/images/submarkets/westwood.webp',
			alt: 'The Janss Steps and Royce Hall on the UCLA campus in Westwood',
			caption: 'Janss Steps and Royce Hall, UCLA, Westwood',
			credit: 'b r e n t, CC BY 2.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Janss_Steps,_Royce_Hall_in_background,_UCLA.jpg',
		},
	},
	{
		slug: 'venice',
		name: 'Venice',
		region: 'Westside LA',
		blurb: 'A beach neighborhood where much of the land is in the Coastal Zone, so changes to apartment buildings involve extra City and state review.',
		transit: [
			'No Metro rail station in Venice',
			'Metro Line 33 along Venice Blvd',
			'Metro’s Countywide BRT study includes a Venice corridor linking Venice Beach to Downtown LA (planning stage; recommendation expected in spring 2027)',
		],
		retail: [
			'Abbot Kinney Boulevard: a pedestrian-oriented area of shops, restaurants, and art galleries (per the City’s community plan)',
			'Windward Circle and Main Street, near Ocean Front Walk',
			'Lincoln Boulevard, which the plan calls auto-oriented',
		],
		employers: ['Retail, restaurant, and hotel businesses on Abbot Kinney Boulevard, Main Street, and near Ocean Front Walk'],
		overview:
			'Venice is inside the City of Los Angeles, so LA rent control and Measure ULA apply. Land west of Lincoln Boulevard is in the Venice Coastal Zone, where demolition, new construction, and changes to a building’s size or density go through the Venice Coastal Zone Specific Plan, the state Mello Act, and in some areas the California Coastal Commission. Venice does not have a certified Local Coastal Program. Apartment sales here are few, so price figures rest on a small number of deals.',
		metaDescription:
			'Venice multifamily broker: 2026 apartment prices and cap rates, Coastal Zone and Mello Act rules, LA rent control and Measure ULA, and a free valuation.',
		laOwnerGuide: true,
		cardPhoto: {
			src: '/images/submarkets/venice.webp',
			alt: 'Ocean Front Walk in Venice, with palm trees and the boardwalk shops',
			caption: 'Ocean Front Walk, Venice',
			credit: 'DanielMichaelPerry, CC0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Ocean_Front_Walk_Venice_Beach.jpg',
		},
	},
	// Added November 12, 2026: five separate cities outside the City of Los Angeles (so no LA Rent Stabilization Ordinance and no Measure ULA).
	// Their rules, sources, and FAQs live in src/data/cityGuides.ts. Photos are from Wikimedia Commons (credit lines show under the cards on /submarkets/).
	{
		slug: 'pasadena',
		cardPhoto: {
			src: '/images/submarkets/pasadena.webp',
			alt: 'Pasadena City Hall, a domed Beaux-Arts building with a tall central tower',
			caption: 'Pasadena City Hall',
			credit: 'Oleknutlee, public domain',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Pasadena_City_Hall_2.jpg',
		},
		name: 'Pasadena',
		region: 'San Gabriel Valley',
		blurb: 'Its own city with voter-approved rent stabilization for buildings built before 1995, a yearly rental registry, and no city transfer tax or Measure ULA.',
		transit: [
			'Metro A Line light rail: six Pasadena stations (Sierra Madre Villa, Allen, Lake, Memorial Park, Del Mar, and Fillmore)',
			'Pasadena ARTS and Metro bus service',
			'Close to the 210 and 134 freeways',
		],
		retail: ['Old Pasadena and the Colorado Blvd corridor', 'South Lake Avenue shopping district', 'The Playhouse District and Paseo Colorado'],
		employers: [
			'Caltech',
			'Huntington Hospital',
			'Pasadena City College and Art Center College of Design',
			'Jet Propulsion Laboratory (adjacent, in La Cañada Flintridge) and the City of Pasadena',
		],
		overview:
			'Pasadena is its own city, with its own voter-approved rent stabilization for buildings built before February 1, 1995, a yearly rental registry and fee, and no city transfer tax or Measure ULA. Its older apartment buildings sit near Old Pasadena, Lake Avenue, Caltech,, and a six-station Metro A Line corridor.',
		city: 'pasadena',
		metaDescription: 'Pasadena multifamily broker: 2026 apartment prices and cap rates, Pasadena rent stabilization and registry explained, no ULA, and a free valuation.',
	},
	{
		slug: 'burbank',
		cardPhoto: {
			src: '/images/submarkets/burbank.webp',
			alt: 'The Warner Bros. Studios water tower in Burbank against a blue sky',
			caption: 'Warner Bros. Studios water tower, Burbank',
			credit: 'Chris Yarzab, CC BY 2.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Warner_Bros._Studios_Water_Tower_2020.jpg',
		},
		name: 'Burbank',
		region: 'San Fernando Valley',
		blurb: 'Its own city with its own tenant protection ordinance, the state rent cap instead of local rent control, and no city transfer tax or Measure ULA.',
		transit: [
			'Metrolink and Amtrak service at the Hollywood Burbank Airport train stations',
			'Burbank Bus and Metro bus service',
			'Close to the 5 and 134 freeways',
		],
		retail: ['Downtown Burbank and San Fernando Blvd', 'Burbank Town Center', 'Magnolia Park'],
		employers: ['The Walt Disney Company and Warner Bros. (Burbank studios)', 'Hollywood Burbank Airport', 'Providence Saint Joseph Medical Center', 'The City of Burbank and Burbank Unified School District'],
		overview:
			'Burbank is its own city, with no local rent cap (the state AB 1482 cap applies), its own Tenant Protection Ordinance, and no city transfer tax or Measure ULA. Apartment buildings here sit close to the studios, Downtown Burbank, and the airport, and they sell at higher prices per unit than most of the San Fernando Valley.',
		city: 'burbank',
		metaDescription: 'Burbank multifamily broker: 2026 apartment prices and cap rates, the Burbank Tenant Protection Ordinance explained, no ULA, and a free valuation.',
	},
	{
		slug: 'glendale',
		cardPhoto: {
			src: '/images/submarkets/glendale.webp',
			alt: 'The Alex Theatre marquee and tower on Brand Boulevard in Glendale',
			caption: 'Alex Theatre, Brand Boulevard, Glendale',
			credit: 'Tony the Marine, CC BY-SA 3.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Glendale,_Ca.-Alex_Theatre-1925-1.jpg',
		},
		name: 'Glendale',
		region: 'Verdugo Valley',
		blurb: 'Its own city with a Rental Rights Program (just cause and relocation help) instead of rent control, and no city transfer tax or Measure ULA.',
		transit: [
			'Glendale Transportation Center with Metrolink and Amtrak service',
			'Beeline bus service and Metro bus lines',
			'Close to the 5, 134, and 2 freeways',
		],
		retail: ['The Americana at Brand', 'Glendale Galleria', 'Brand Boulevard and Downtown Glendale'],
		employers: ['DreamWorks Animation and Walt Disney Imagineering', 'Adventist Health Glendale and Glendale Memorial Hospital', 'Glendale Community College', 'The City of Glendale and Glendale Unified School District'],
		overview:
			'Glendale is its own city. It has no local rent cap (the state AB 1482 cap applies) but does run its own Rental Rights Program, with just cause eviction rules and relocation help, and it has no city transfer tax or Measure ULA. Its apartment buildings sit between Downtown Glendale, Brand Boulevard, and the Verdugo foothills.',
		city: 'glendale',
		metaDescription: 'Glendale multifamily broker: 2026 apartment prices and cap rates, the Glendale Rental Rights Program explained, no ULA, and a free valuation.',
	},
	{
		slug: 'long-beach',
		cardPhoto: {
			src: '/images/submarkets/long-beach.webp',
			alt: 'The Long Beach skyline across the water at dusk',
			caption: 'Long Beach skyline at dusk',
			credit: 'JD Lasica, CC BY 2.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Long-Beach-skyline-at-dusk_(21611595655).jpg',
		},
		name: 'Long Beach',
		region: 'Long Beach and South Bay',
		blurb: 'The busiest apartment sales market in our data outside the City of LA, with a local just cause ordinance, no local rent cap, and no city transfer tax or Measure ULA.',
		transit: [
			'Metro A Line light rail, with its southern end in Downtown Long Beach',
			'Long Beach Transit bus network',
			'Long Beach Airport and the 405, 710, and 91 freeways',
		],
		retail: ['Downtown Long Beach, The Pike, and Shoreline Village', 'Belmont Shore and Second Street', 'Fourth Street Retro Row'],
		employers: ['The Port of Long Beach', 'California State University, Long Beach', 'MemorialCare Long Beach Medical Center', 'Long Beach City College and Long Beach Unified School District'],
		overview:
			'Long Beach is its own city and, in our 2026 data, its busiest apartment sales market outside the City of Los Angeles. It has no local rent cap (the state AB 1482 cap applies), its own just cause and relocation ordinance, and no city transfer tax or Measure ULA. Most of the buildings that sold in 2026 were built before 1978, which is where much of the pricing story starts.',
		city: 'long-beach',
		metaDescription: 'Long Beach multifamily broker: 2026 apartment prices and cap rates, the Long Beach just cause ordinance explained, no ULA, and a free valuation.',
	},
	{
		slug: 'inglewood',
		cardPhoto: {
			src: '/images/submarkets/inglewood.webp',
			alt: 'The Intuit Dome arena in Inglewood lit in blue at night',
			caption: 'Intuit Dome, Inglewood',
			credit: 'Haruhi8, CC BY 4.0',
			creditUrl: 'https://commons.wikimedia.org/wiki/File:Intuit_Dome_Fa%C3%A7ade.jpg',
		},
		name: 'Inglewood',
		region: 'South Bay and Westside',
		blurb: 'Its own city with its own rent stabilization program, a yearly registry, and no city transfer tax or Measure ULA, next to SoFi Stadium, the Intuit Dome, and LAX.',
		transit: [
			'Metro K Line (Crenshaw/LAX): Downtown Inglewood and Fairview Heights stations',
			'Metro and Inglewood bus service',
			'Close to the 405 and 105 freeways and LAX',
		],
		retail: ['Downtown Inglewood and Market Street', 'The Hollywood Park district around SoFi Stadium', 'The Crenshaw and Century corridors'],
		employers: ['SoFi Stadium, the Intuit Dome, and the Kia Forum', 'Centinela Hospital Medical Center', 'LAX and aviation-related employers (adjacent)', 'The City of Inglewood and Inglewood Unified School District'],
		overview:
			'Inglewood is its own city, with its own rent stabilization program and yearly rental registry, and no city transfer tax or Measure ULA. It sits beside LAX and the SoFi Stadium and Intuit Dome district, has a Metro K Line station downtown, and trades at some of the highest cap rates of the five cities in this group.',
		city: 'inglewood',
		metaDescription: 'Inglewood multifamily broker: 2026 apartment prices and cap rates, Inglewood rent stabilization and registry explained, no ULA, and a free valuation.',
	},
];
