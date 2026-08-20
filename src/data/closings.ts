// Source: highlightreg.com/closed-sales/ (re-fetched 2026-08-20). Sorted highest to lowest sale price.
// `submarket` is a best-effort geographic match to the 8 launch submarket pages, by zip/neighborhood.
// It is unset when a property falls outside those 8 areas. Verify against internal records before publishing.

export type Closing = {
	slug: string;
	name: string;
	city: string;
	state: string;
	zip: string;
	units: number | null;
	sqft: number | null;
	acres: number | null;
	price: number;
	type: 'apartment' | 'development-site';
	submarket: string | null;
	caseStudySlug?: string;
};

export const closings: Closing[] = [
	{ slug: 'lenox-stone-oak-apartments-san-antonio-tx', name: 'Lenox Stone Oak Apartments', city: 'San Antonio', state: 'TX', zip: '', units: 312, sqft: null, acres: null, price: 48500000, type: 'apartment', submarket: null },
	{ slug: '131-171-s-burlington-ave-los-angeles-ca-90057', name: '131-171 S Burlington Ave', city: 'Los Angeles', state: 'CA', zip: '90057', units: 192, sqft: 145356, acres: null, price: 48250000, type: 'apartment', submarket: 'westlake', caseStudySlug: 'the-burlington-portfolio' },
	{ slug: 'urban-north-apartments-austin-tx', name: 'Urban North Apartments', city: 'Austin', state: 'TX', zip: '78729', units: 179, sqft: null, acres: null, price: 33700000, type: 'apartment', submarket: null },
	{ slug: '49270-cochran-dr-indio-ca-92201', name: '49270 Cochran Dr', city: 'Indio', state: 'CA', zip: '92201', units: 32, sqft: null, acres: 4.8, price: 16500000, type: 'apartment', submarket: null },
	{ slug: '236-s-bonnie-brae-st-los-angeles-ca-90057', name: '236 S Bonnie Brae St', city: 'Los Angeles', state: 'CA', zip: '90057', units: 65, sqft: 48458, acres: null, price: 15600000, type: 'apartment', submarket: 'westlake', caseStudySlug: '236-s-bonnie-brae-st' },
	{ slug: 'dallas-flats-dallas-tx', name: 'Dallas Flats', city: 'Dallas', state: 'TX', zip: '', units: 105, sqft: null, acres: null, price: 12552000, type: 'apartment', submarket: null },
	{ slug: '8377-blackburn-ave-los-angeles-ca-90048', name: '8377 Blackburn Ave', city: 'Los Angeles', state: 'CA', zip: '90048', units: 13, sqft: 12922, acres: null, price: 10760000, type: 'apartment', submarket: null },
	{ slug: '12770-caswell-avenue-los-angeles-ca-90066', name: '12770 Caswell Avenue', city: 'Los Angeles', state: 'CA', zip: '90066', units: 11, sqft: 5278, acres: null, price: 8100000, type: 'apartment', submarket: null },
	{ slug: '5455-inglewood-blvd-culver-city-ca-90230', name: '5455 Inglewood Blvd', city: 'Culver City', state: 'CA', zip: '90230', units: 13, sqft: 14954, acres: null, price: 7880000, type: 'apartment', submarket: null, caseStudySlug: '5455-inglewood-blvd' },
	{ slug: '3667-mentone-ave-los-angeles-ca-90034', name: '3667 Mentone Ave', city: 'Los Angeles', state: 'CA', zip: '90034', units: 10, sqft: 13152, acres: null, price: 7500000, type: 'apartment', submarket: null },
	{ slug: '1720-1724-huntington-dr-south-pasadena-ca-91030', name: '1720-1724 Huntington Dr', city: 'South Pasadena', state: 'CA', zip: '91030', units: 24, sqft: 18224, acres: null, price: 5800000, type: 'apartment', submarket: null },
	{ slug: '1540-laurel-st-south-pasadena-ca-91030', name: '1540 Laurel St', city: 'South Pasadena', state: 'CA', zip: '91030', units: 16, sqft: 16534, acres: null, price: 5575000, type: 'apartment', submarket: null },
	{ slug: '829-euclid-st-santa-monica-ca-90403', name: '829 Euclid St', city: 'Santa Monica', state: 'CA', zip: '90403', units: 10, sqft: 9500, acres: null, price: 4530000, type: 'apartment', submarket: 'santa-monica' },
	{ slug: '728-734-s-manhattan-pl-los-angeles-ca-90005', name: '728 & 734 S Manhattan Pl', city: 'Los Angeles', state: 'CA', zip: '90005', units: null, sqft: 14998, acres: null, price: 4500000, type: 'development-site', submarket: 'koreatown' },
	{ slug: '1135-leighton-ave-los-angeles-ca-90037', name: '1135 Leighton Ave', city: 'Los Angeles', state: 'CA', zip: '90037', units: 4, sqft: 5442, acres: null, price: 4375000, type: 'apartment', submarket: null },
	{ slug: '1136-s-alvarado-st-los-angeles-ca-90006', name: '1136 S Alvarado St', city: 'Los Angeles', state: 'CA', zip: '90006', units: 24, sqft: 16113, acres: null, price: 4290000, type: 'apartment', submarket: 'pico-union' },
	{ slug: '11642-kiowa-ave-los-angeles-ca-90049', name: '11642 Kiowa Ave', city: 'Los Angeles', state: 'CA', zip: '90049', units: 9, sqft: 8284, acres: null, price: 4250000, type: 'apartment', submarket: 'brentwood', caseStudySlug: '11642-kiowa-ave' },
	{ slug: '925-n-san-vicente-blvd-west-hollywood-ca-90069', name: '925 N San Vicente Blvd', city: 'West Hollywood', state: 'CA', zip: '90069', units: 9, sqft: 11718, acres: null, price: 4195000, type: 'apartment', submarket: null, caseStudySlug: '925-n-san-vicente-blvd' },
	{ slug: '11747-mayfield-ave-los-angeles-ca-90049', name: '11747 Mayfield Ave', city: 'Los Angeles', state: 'CA', zip: '90049', units: 8, sqft: 7120, acres: null, price: 4130000, type: 'apartment', submarket: 'brentwood' },
	{ slug: '453-s-gramercy-pl-los-angeles-ca-90020', name: '453 S Gramercy Pl', city: 'Los Angeles', state: 'CA', zip: '90020', units: 14, sqft: 8594, acres: null, price: 4050000, type: 'apartment', submarket: 'koreatown', caseStudySlug: '453-s-gramercy-pl' },
	{ slug: '11667-goshen-ave-los-angeles-ca-90049', name: '11667 Goshen Ave', city: 'Los Angeles', state: 'CA', zip: '90049', units: 10, sqft: 9024, acres: null, price: 3800000, type: 'apartment', submarket: 'brentwood', caseStudySlug: '11667-goshen-ave' },
	{ slug: '467-s-bonnie-brae-st-los-angeles-ca-90057', name: '467 S Bonnie Brae St', city: 'Los Angeles', state: 'CA', zip: '90057', units: 18, sqft: 14250, acres: null, price: 3770000, type: 'apartment', submarket: 'westlake', caseStudySlug: '467-s-bonnie-brae-st' },
	{ slug: '604-evergreen-st-inglewood-ca-90302', name: '604 Evergreen St', city: 'Inglewood', state: 'CA', zip: '90302', units: 12, sqft: 11444, acres: null, price: 3295000, type: 'apartment', submarket: null },
	{ slug: '1819-s-manhattan-pl-los-angeles-ca-90019', name: '1819 S Manhattan Pl', city: 'Los Angeles', state: 'CA', zip: '90019', units: 12, sqft: 10332, acres: null, price: 3245000, type: 'apartment', submarket: null },
	{ slug: '946-s-burlington-ave-los-angeles-ca-90006', name: '946 S Burlington Ave', city: 'Los Angeles', state: 'CA', zip: '90006', units: 28, sqft: 14758, acres: null, price: 3040000, type: 'apartment', submarket: 'pico-union' },
	{ slug: '1127-18th-st-santa-monica-ca-90403', name: '1127 18th St', city: 'Santa Monica', state: 'CA', zip: '90403', units: 7, sqft: 6561, acres: null, price: 2930000, type: 'apartment', submarket: 'santa-monica' },
	{ slug: '318-s-mariposa-ave-los-angeles-ca-90020', name: '318 S Mariposa Ave', city: 'Los Angeles', state: 'CA', zip: '90020', units: 14, sqft: 9676, acres: null, price: 2900000, type: 'apartment', submarket: 'koreatown' },
	{ slug: '12716-venice-blvd-los-angeles-ca-90066', name: '12716 Venice Blvd', city: 'Los Angeles', state: 'CA', zip: '90066', units: 9, sqft: 6172, acres: null, price: 2825000, type: 'apartment', submarket: null },
	{ slug: '3148-james-m-wood-blvd-los-angeles-ca-90006', name: '3148 James M Wood Blvd', city: 'Los Angeles', state: 'CA', zip: '90006', units: 8, sqft: 6800, acres: null, price: 2635000, type: 'apartment', submarket: 'koreatown', caseStudySlug: '3148-james-m-wood-blvd' },
	{ slug: '5631-whitnall-hwy-north-hollywood-ca-91601', name: '5631 Whitnall Hwy', city: 'North Hollywood', state: 'CA', zip: '91601', units: 4, sqft: 6015, acres: null, price: 2515000, type: 'apartment', submarket: 'north-hollywood' },
	{ slug: '1443-18th-st-santa-monica-ca-90404', name: '1443 18th St', city: 'Santa Monica', state: 'CA', zip: '90404', units: null, sqft: 7500, acres: null, price: 2500000, type: 'development-site', submarket: 'santa-monica' },
	{ slug: '7113-s-la-cienega-blvd-los-angeles-ca-90045', name: '7113 S La Cienega Blvd', city: 'Los Angeles', state: 'CA', zip: '90045', units: 4, sqft: 5278, acres: null, price: 2495000, type: 'apartment', submarket: null },
	{ slug: '2820-3rd-st-santa-monica-ca-90405', name: '2820 3rd St', city: 'Santa Monica', state: 'CA', zip: '90405', units: 6, sqft: 4636, acres: null, price: 2446000, type: 'apartment', submarket: 'santa-monica' },
	{ slug: '1820-s-bundy-dr-los-angeles-ca-90025', name: '1820 S Bundy Dr', city: 'Los Angeles', state: 'CA', zip: '90025', units: 9, sqft: 6403, acres: null, price: 2400000, type: 'apartment', submarket: null },
	{ slug: '5431-5441-lemon-grove-ave-los-angeles-ca-90038', name: '5431-5441 Lemon Grove Ave', city: 'Los Angeles', state: 'CA', zip: '90038', units: null, sqft: 20999, acres: null, price: 2380000, type: 'development-site', submarket: null },
	{ slug: '2429-cheremoya-ave-los-angeles-ca-90068', name: '2429 Cheremoya Ave', city: 'Los Angeles', state: 'CA', zip: '90068', units: 8, sqft: 5193, acres: null, price: 2295000, type: 'apartment', submarket: null, caseStudySlug: '2429-cheremoya-ave' },
	{ slug: '3943-w-7th-st-los-angeles-ca-90062', name: '3943 W 7th St', city: 'Los Angeles', state: 'CA', zip: '90062', units: null, sqft: 9001, acres: null, price: 2200000, type: 'development-site', submarket: null },
	{ slug: '8234-blackburn-ave-los-angeles-ca-90048', name: '8234 Blackburn Ave', city: 'Los Angeles', state: 'CA', zip: '90048', units: null, sqft: 6250, acres: null, price: 2150000, type: 'development-site', submarket: null },
	{ slug: '707-crenshaw-blvd-los-angeles-ca-90005', name: '707 Crenshaw Blvd', city: 'Los Angeles', state: 'CA', zip: '90005', units: 10, sqft: 6362, acres: null, price: 2100000, type: 'apartment', submarket: 'koreatown' },
	{ slug: '3915-brighton-ave-los-angeles-ca-90062', name: '3915 Brighton Ave', city: 'Los Angeles', state: 'CA', zip: '90062', units: 4, sqft: 5402, acres: null, price: 2095000, type: 'apartment', submarket: null },
	{ slug: '331-s-harvard-blvd-los-angeles-ca-90020', name: '331 S Harvard Blvd', city: 'Los Angeles', state: 'CA', zip: '90020', units: 10, sqft: 9046, acres: null, price: 2075000, type: 'apartment', submarket: 'koreatown' },
	{ slug: '2204-7th-ave-los-angeles-ca-90018', name: '2204 7th Ave', city: 'Los Angeles', state: 'CA', zip: '90018', units: 12, sqft: 8488, acres: null, price: 2050000, type: 'apartment', submarket: null },
	{ slug: '1302-w-martin-luther-king-jr-blvd-los-angeles-ca-90037', name: '1302 W Martin Luther King Jr Blvd', city: 'Los Angeles', state: 'CA', zip: '90037', units: 4, sqft: 6556, acres: null, price: 2025000, type: 'apartment', submarket: null },
	{ slug: '941-n-normandie-ave-los-angeles-ca-90029', name: '941 N Normandie Ave', city: 'Los Angeles', state: 'CA', zip: '90029', units: 7, sqft: 5086, acres: null, price: 2025000, type: 'apartment', submarket: null, caseStudySlug: '941-normandie-ave' },
	{ slug: '620-624-n-ardmore-ave-los-angeles-ca-90004', name: '620-624 N Ardmore Ave', city: 'Los Angeles', state: 'CA', zip: '90004', units: null, sqft: 13652, acres: null, price: 2000000, type: 'development-site', submarket: 'koreatown' },
	{ slug: '140-s-westmoreland-ave-los-angeles-ca-90004', name: '140 S Westmoreland Ave', city: 'Los Angeles', state: 'CA', zip: '90004', units: 7, sqft: 4191, acres: null, price: 1980000, type: 'apartment', submarket: 'koreatown', caseStudySlug: '140-westmoreland-ave' },
	{ slug: '11264-morrison-st-north-hollywood-ca-91601', name: '11264 Morrison St', city: 'North Hollywood', state: 'CA', zip: '91601', units: 6, sqft: 5802, acres: null, price: 1940000, type: 'apartment', submarket: 'north-hollywood' },
	{ slug: '6938-coldwater-canyon-north-hollywood-ca-91605', name: '6938 Coldwater Canyon', city: 'North Hollywood', state: 'CA', zip: '91605', units: 10, sqft: 10746, acres: null, price: 1855000, type: 'apartment', submarket: 'north-hollywood', caseStudySlug: '6938-coldwater-canyon-ave' },
	{ slug: '1330-portia-st-los-angeles-ca-90026', name: '1330 Portia St', city: 'Los Angeles', state: 'CA', zip: '90026', units: 8, sqft: 5046, acres: null, price: 1750000, type: 'apartment', submarket: 'silver-lake' },
	{ slug: '10560-sherman-grove-ave-sunland-ca-91040', name: '10560 Sherman Grove Ave', city: 'Sunland', state: 'CA', zip: '91040', units: 10, sqft: 6301, acres: null, price: 1700000, type: 'apartment', submarket: null },
	{ slug: '1201-s-orange-grove-ave-los-angeles-ca-90019', name: '1201 S Orange Grove Ave', city: 'Los Angeles', state: 'CA', zip: '90019', units: 5, sqft: 5225, acres: null, price: 1650000, type: 'apartment', submarket: null, caseStudySlug: '1201-s-orange-grove-ave' },
	{ slug: '848-s-mariposa-ave-los-angeles-ca-90005', name: '848 S Mariposa Ave', city: 'Los Angeles', state: 'CA', zip: '90005', units: null, sqft: 8795, acres: null, price: 1500000, type: 'development-site', submarket: 'koreatown' },
	{ slug: '14654-gault-st-van-nuys-ca-91405', name: '14654 Gault St', city: 'Van Nuys', state: 'CA', zip: '91405', units: 4, sqft: null, acres: null, price: 1520000, type: 'apartment', submarket: 'van-nuys' },
	{ slug: '1421-waterloo-st-los-angeles-ca-90026', name: '1421 Waterloo St', city: 'Los Angeles', state: 'CA', zip: '90026', units: 4, sqft: 3457, acres: null, price: 1450000, type: 'apartment', submarket: 'silver-lake' },
	{ slug: '2233-w-14th-st-los-angeles-ca-90006', name: '2233 W 14th St', city: 'Los Angeles', state: 'CA', zip: '90006', units: 10, sqft: 4576, acres: null, price: 1300000, type: 'apartment', submarket: 'pico-union' },
	{ slug: '14700-hubbard-st-sylmar-ca-91342', name: '14700 Hubbard St', city: 'Sylmar', state: 'CA', zip: '91342', units: 7, sqft: 6452, acres: null, price: 1175000, type: 'apartment', submarket: null },
	{ slug: '4532-saint-charles-pl-los-angeles-ca-90019', name: '4532 Saint Charles Pl', city: 'Los Angeles', state: 'CA', zip: '90019', units: null, sqft: 6998, acres: null, price: 960000, type: 'development-site', submarket: null },
	{ slug: '4526-saint-charles-pl-los-angeles-ca-90019', name: '4526 Saint Charles Pl', city: 'Los Angeles', state: 'CA', zip: '90019', units: null, sqft: 6998, acres: null, price: 925000, type: 'development-site', submarket: null },
	{ slug: '1253-n-kingsley-dr-los-angeles-ca-90029', name: '1253 N Kingsley Dr', city: 'Los Angeles', state: 'CA', zip: '90029', units: null, sqft: 7820, acres: null, price: 925000, type: 'development-site', submarket: null },
	{ slug: '4632-saint-elmo-dr-los-angeles-ca-90019', name: '4632 Saint Elmo Dr', city: 'Los Angeles', state: 'CA', zip: '90019', units: null, sqft: 7999, acres: null, price: 890000, type: 'development-site', submarket: null },
	{ slug: '853-n-ridgewood-pl-los-angeles-ca-90038', name: '853 N Ridgewood Pl', city: 'Los Angeles', state: 'CA', zip: '90038', units: 2, sqft: 2096, acres: null, price: 750000, type: 'apartment', submarket: null },
];

export const closingStats = {
	totalClosings: closings.length,
	totalUnits: closings.reduce((sum, c) => sum + (c.units ?? 0), 0),
	totalVolume: closings.reduce((sum, c) => sum + c.price, 0),
};
