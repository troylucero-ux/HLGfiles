// Owner guides for five separate cities outside the City of Los Angeles (Pasadena, Burbank, Glendale, Long Beach,
// Inglewood). They are rendered by src/components/CityGuide.astro on the matching /submarkets/<slug>/ page, and the
// template in src/pages/submarkets/[slug].astro also uses `rentFaq`, `ageLabels`, `salesIntro`, and `faqs` from here.
//
// Every rule below comes from a source read on November 12, 2026 (listed in each guide's `sources`). Where a city's own
// page could not be read or two sources disagreed, the text says so and tells owners to confirm with the city. City rules
// change, so re-check this file when a city announces a new yearly adjustment (Pasadena each October, Inglewood each May
// when the CPI figure is published, Burbank and Glendale if they amend their ordinances).
//
// Shared facts used in all five:
// - Transfer taxes: LA County Registrar-Recorder's Documentary Transfer Tax page, read October 22, 2026. Only Culver
//   City, Los Angeles, Pomona, Redondo Beach, and Santa Monica have their own city rate, so in these five cities only the
//   county's $1.10 per $1,000 applies. City of LA figures: $4.50 per $1,000 city tax plus Measure ULA (4% of the whole price
//   above $5.4 million, 5.5% at $10.9 million and up), the same figures the West Hollywood and Beverly Hills guides use.
// - AB 1482: for increases effective on or after August 1, 2026 the cap in the Los Angeles-Long Beach-Anaheim region is
//   8.7% (5% plus 3.7% CPI), per our own article /insights/ab-1482-rent-cap-2026/.
// - City of LA yearly increase for rent-stabilized units: 3% through June 2027 (same article set).

export type CityFaq = { q: string; a: string; links?: { label: string; href: string }[] };
export type CitySection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type CityCompareRow = { topic: string; la: string; city: string };

export type CityGuide = {
	slug: string;
	shortName: string;
	eyebrow: string;
	heading: string;
	intro: string[];
	// Titles for the two age groups in the 2026 sales data (the same 1978 build-year line as every other page).
	ageLabels: { rso: string; post1978: string };
	// One sentence shown above the sales cards.
	salesIntro: string;
	// The answer to "Does rent control apply to apartment buildings in <city>?"
	rentFaq: string;
	compare: CityCompareRow[];
	sections: CitySection[];
	contact: string;
	sources: string[];
	checked: string;
	faqs: CityFaq[];
};

const CHECKED = 'November 12, 2026';

const ulaFaq = (city: string): CityFaq => ({
	q: `Does Measure ULA apply to ${city} apartment buildings?`,
	a: `No. Measure ULA applies only to property in the City of Los Angeles, and ${city} is a separate city. ${city} also has no city transfer tax of its own, so a seller pays only LA County’s documentary transfer tax of $1.10 per $1,000. On a $6 million sale, that is $6,600, compared with $273,600 in combined transfer taxes on the same price inside the City of Los Angeles ($27,000 city tax, $6,600 county tax, and $240,000 Measure ULA).`,
	links: [{ label: 'Measure ULA calculator', href: '/measure-ula-calculator/' }],
});

export const cityGuides: Record<string, CityGuide> = {
	pasadena: {
		slug: 'pasadena',
		shortName: 'Pasadena',
		eyebrow: 'Its Own City, Its Own Rules',
		heading: 'Selling an Apartment Building in Pasadena vs. the City of Los Angeles',
		intro: [
			'Pasadena is its own city, and that changes how a sale works. Voters approved rent stabilization here in December 2022 (Measure H, now Article XVIII of the city charter), the city runs a rental registry with a yearly fee, and neither the City of Los Angeles rent ordinance nor Measure ULA applies. A building a few miles away in LA can face very different rules and very different transfer taxes.',
		],
		ageLabels: { rso: 'Built Before 1978', post1978: 'Built 1978 or Later' },
		salesIntro:
			'Pasadena’s rent stabilization covers buildings built before 1995, but we keep the same 1978 build-year line as our other pages so the figures compare across neighborhoods. Almost all of the 2026 Pasadena sales were older buildings.',
		rentFaq:
			'Yes, under Pasadena’s own rent stabilization law (Measure H, approved by voters in December 2022), not the City of Los Angeles rules. It covers multi-unit rental buildings built before February 1, 1995, with a yearly cap called the Annual General Adjustment, 2.50% for October 1, 2026 through September 30, 2027. Owners must also register covered units with the city every year. Newer buildings generally fall under the statewide AB 1482 cap. Confirm which rules cover your building with the city’s Rent Stabilization Department.',
		compare: [
			{ topic: 'Rent control', la: 'LA’s ordinance, for buildings first occupied on or before Oct 1, 1978', city: 'Pasadena’s charter law (Measure H), for multi-unit buildings built before Feb 1, 1995' },
			{ topic: 'Yearly rent increase', la: '3% from July 1, 2026 through June 30, 2027', city: '2.50% from Oct 1, 2026 through Sept 30, 2027 (2.25% the year before)' },
			{ topic: 'Yearly registration', la: 'Registration with the LA Housing Department', city: 'City rental registry each year, Sept 1 to Oct 31; $236.54 per unit for 2026-27' },
			{ topic: 'Measure ULA', la: 'Applies above $5.4 million', city: 'Does not apply' },
			{ topic: 'City transfer tax', la: '$4.50 per $1,000', city: 'None (county tax only)' },
		],
		sections: [
			{
				heading: 'How Pasadena rent stabilization works',
				paragraphs: [
					'The city’s rent stabilization pages say the rules apply to multi-unit residential rental properties built before February 1, 1995. The city lists condominiums and single-family homes as not covered by the rent limits, although its registry pages still ask owners of rented houses and condos to register and claim an exemption, so read both pages or call the city if you own one of those. Newer buildings generally fall under the statewide AB 1482 cap, which is 8.7% for increases effective on or after August 1, 2026.',
					'Each year the city sets an Annual General Adjustment, the most a covered rent can rise. For October 1, 2026 through September 30, 2027 it is 2.50%. It was 2.25% the year before and 3% the year before that. Rent can go up once every 12 months, with 30 days’ written notice. Increases that were approved earlier but never taken cannot be added on top of the yearly adjustment.',
				],
			},
			{
				heading: 'The rental registry is part of what a buyer is buying',
				paragraphs: [
					'Owners of covered units register every year and pay a Rental Housing Fee by October 31. The fee for fiscal year 2026-27 is $236.54 per unit, it cannot be passed on to tenants, and late registration adds 15%, 30%, or 50% depending on how late it is. The city’s FAQ also says that if a unit is not registered, tenants may have the right to withhold rent, the owner may not increase the rent on a rent-stabilized unit, and the owner may be prevented from evicting. That makes the registry file one of the first things a careful buyer will ask a Pasadena seller to show.',
					'Landlords must also update the registry within 30 days of a change in ownership, as well as when rents change or tenancies start or end.',
				],
				bullets: [
					'Before you list, confirm that every unit is registered and the fee is paid.',
					'Have your rent history ready. The city says tenants whose rent was raised beyond the legal limits since May 17, 2021 may be eligible for a rollback.',
					'If you own a rented house or condo, ask the city whether you need to register and claim an exemption.',
				],
			},
			{
				heading: 'What to do before you sell in Pasadena',
				paragraphs: [
					'A Pasadena sale is cleaner when the paperwork matches the building: registry confirmations for every unit, a rent roll that shows each increase and its notice, and a clear view of which units are covered by Measure H and which by AB 1482. A free Broker Opinion of Value from us includes that review, not just a number.',
				],
			},
		],
		contact: 'Pasadena Rent Stabilization Department: (626) 744-7999, rentalregistry@cityofpasadena.net.',
		sources: [
			'City of Pasadena, Rent Stabilization Overview and Rental Registry pages (cityofpasadena.net/rent-stabilization), read November 12, 2026: coverage date, Annual General Adjustment, registry deadline, per-unit fee, late fees, ownership-change rule, and rent rollback.',
			'LA County Registrar-Recorder documentary transfer tax page, read October 22, 2026: only Culver City, Los Angeles, Pomona, Redondo Beach, and Santa Monica have their own city rate.',
			'City of Los Angeles figures (3% yearly increase, Measure ULA thresholds, $4.50 per $1,000 city tax) are the same ones used on our City of LA pages. The statewide AB 1482 cap is from our article on the 2026 reset.',
		],
		checked: CHECKED,
		faqs: [
			{
				q: 'How much can landlords raise rent in Pasadena in 2026?',
				a: 'For rent-stabilized units, the Annual General Adjustment is 2.50% for October 1, 2026 through September 30, 2027. The city sets it each year; it was 2.25% for the year before. Rent can go up once every 12 months with 30 days’ written notice, and the unit must be registered with the city. Buildings the city does not cover fall under the statewide AB 1482 cap instead.',
				links: [{ label: '2026 AB 1482 rent cap', href: '/insights/ab-1482-rent-cap-2026/' }],
			},
			ulaFaq('Pasadena'),
			{
				q: 'Do I have to register my Pasadena rental building with the city?',
				a: 'Yes, for covered rental units. Registration is yearly, from September 1 to October 31, with a Rental Housing Fee of $236.54 per unit for 2026-27 that cannot be passed on to tenants. Late registration adds 15%, 30%, or 50%. Some units are exempt, such as owner-occupied units, so check the city’s exemption list.',
			},
			{
				q: 'What happens to Pasadena rent stabilization when I sell the building?',
				a: 'A sale does not remove the rules. The tenants keep their protections and the new owner steps into the same rent limits. The new owner must update the city registry within 30 days of the ownership change, and unregistered units can limit rent increases and evictions, so we recommend resolving registry questions before you list.',
				links: [{ label: 'Selling with rent-controlled tenants', href: '/insights/selling-la-apartment-building-with-tenants-rent-control/' }],
			},
		],
	},

	burbank: {
		slug: 'burbank',
		shortName: 'Burbank',
		eyebrow: 'Its Own City, Its Own Rules',
		heading: 'Selling an Apartment Building in Burbank vs. the City of Los Angeles',
		intro: [
			'Burbank is its own city. It has no local rent cap, so the statewide AB 1482 limit is the one that applies, but it does have its own Tenant Protection Ordinance covering relocation assistance and anti-harassment rules. Neither the City of Los Angeles rent ordinance nor Measure ULA applies, and there is no city transfer tax.',
		],
		ageLabels: { rso: 'Built Before 1978', post1978: 'Built 1978 or Later' },
		salesIntro:
			'Burbank has no local rent control, so the 1978 line is not a legal dividing line here the way it is in the City of Los Angeles. We keep it so the figures compare with our other pages, since older buildings still trade differently from newer ones.',
		rentFaq:
			'Not locally. Burbank has no rent cap of its own, so the statewide AB 1482 limit applies to covered buildings (8.7% for increases effective on or after August 1, 2026 in the Los Angeles region). Burbank does have its own Tenant Protection Ordinance, which adds relocation assistance and anti-harassment rules, and the City of Los Angeles rent control ordinance does not apply. Confirm which rules cover your building with the Burbank Housing Division.',
		compare: [
			{ topic: 'Rent control', la: 'LA’s ordinance, for buildings first occupied on or before Oct 1, 1978', city: 'No local rent cap; the statewide AB 1482 cap applies to covered buildings' },
			{ topic: 'Yearly rent increase', la: '3% from July 1, 2026 through June 30, 2027', city: 'Up to the AB 1482 cap: 8.7% for increases effective from Aug 1, 2026' },
			{ topic: 'Tenant rules', la: 'LA’s just cause and relocation rules', city: 'Burbank Tenant Protection Ordinance (Municipal Code Title 5, Chapter 4), amended March 11, 2025' },
			{ topic: 'Measure ULA', la: 'Applies above $5.4 million', city: 'Does not apply' },
			{ topic: 'City transfer tax', la: '$4.50 per $1,000', city: 'None (county tax only)' },
		],
		sections: [
			{
				heading: 'No local rent cap, but a local tenant ordinance',
				paragraphs: [
					'Burbank’s own tenant rules sit in Chapter 4 (Residential Tenant Protections) of Title 5 of the Burbank Municipal Code. The City Council adopted an amendment to that chapter on March 11, 2025. The city says the amendment adds an exemption from the higher relocation assistance payment when an owner or an owner’s relative moves in (under California Civil Code section 1946.2(b)(2)(A)) and adds anti-harassment measures that apply to all tenants in Burbank.',
					'The city’s announcement describes the ordinance as raising relocation assistance for certain no-fault terminations to three months of the tenant’s current rent, and it has separate requirements for demolition or substantial remodel. We could not read the city’s FAQ document, so treat the three-month figure as a summary and confirm exactly which notices it applies to with the Housing Division before you serve one.',
				],
			},
			{
				heading: 'The state cap is the limit on rent increases',
				paragraphs: [
					'Because Burbank has no cap of its own, the statewide Tenant Protection Act (AB 1482) sets the limit on covered buildings: 5% plus the regional change in CPI, up to a maximum of 10%. For increases effective on or after August 1, 2026 in the Los Angeles region, that works out to 8.7%. The city’s housing resources page lists the state Tenant Protection Act (AB 1482) among its resources.',
				],
			},
			{
				heading: 'What this means when you sell',
				paragraphs: [
					'With no local cap, buyers underwrite rent growth against the state limit and the just cause rules rather than a city-set yearly percentage, which is a different calculation from a rent-stabilized city like Pasadena or Inglewood. Sellers who have not taken increases they were allowed to take may find that buyers price in that unused room, and sellers planning a renovation or owner move-in should have their notices and relocation plan ready before they list, because buyers will ask.',
				],
			},
		],
		contact: 'Burbank Housing Division: 150 N. Third Street, (818) 238-5180, housinginfo@burbankca.gov.',
		sources: [
			'City of Burbank, Burbank Tenant Protection Ordinance page (burbankca.gov/tenantprotections) and Landlord-Tenant Commission and Housing Resources page, read November 12, 2026: adoption date of the March 2025 amendment, its contents, and the housing office contact. The city’s FAQ PDF could not be opened, so the three-month relocation figure comes from the city’s announcement as summarized in search results.',
			'LA County Registrar-Recorder documentary transfer tax page, read October 22, 2026: only Culver City, Los Angeles, Pomona, Redondo Beach, and Santa Monica have their own city rate.',
			'The statewide AB 1482 cap is from our article on the 2026 reset; City of Los Angeles figures match our City of LA pages.',
		],
		checked: CHECKED,
		faqs: [
			{
				q: 'How much can landlords raise rent in Burbank in 2026?',
				a: 'Burbank has no local rent cap, so the statewide AB 1482 limit applies to covered buildings: 5% plus CPI, up to 10%. For increases effective on or after August 1, 2026 in the Los Angeles region, the cap is 8.7%. Some buildings are exempt from AB 1482, such as those less than 15 years old, so check which rules cover yours.',
				links: [{ label: '2026 AB 1482 rent cap', href: '/insights/ab-1482-rent-cap-2026/' }],
			},
			ulaFaq('Burbank'),
			{
				q: 'What is the Burbank Tenant Protection Ordinance?',
				a: 'It is Burbank’s local set of tenant rules, in Chapter 4 of Title 5 of the Burbank Municipal Code. The City Council amended it on March 11, 2025 to add anti-harassment measures for all tenants and an exemption from the higher relocation payment for owner or relative move-ins. The city describes it as raising relocation assistance for certain no-fault terminations to three months of current rent. Contact the Burbank Housing Division at (818) 238-5180 before serving a notice.',
			},
			{
				q: 'Do I need to relocate tenants if I renovate a Burbank apartment building?',
				a: 'It can trigger payments. The city has separate rules for demolition and substantial remodel, including relocation assistance for no-fault notices tied to a remodel. Because the rules turn on the scope of the work and the type of notice, review the city’s requirements and get legal advice before you serve a notice. A well-documented plan also helps a sale, since buyers will ask how a renovation was handled.',
			},
		],
	},

	glendale: {
		slug: 'glendale',
		shortName: 'Glendale',
		eyebrow: 'Its Own City, Its Own Rules',
		heading: 'Selling an Apartment Building in Glendale vs. the City of Los Angeles',
		intro: [
			'Glendale is its own city. It has no local rent cap, so the statewide AB 1482 limit applies, but since 2019 it has run a Rental Rights Program with just cause eviction rules, relocation assistance, and other protections. Neither the City of Los Angeles rent ordinance nor Measure ULA applies, and there is no city transfer tax.',
		],
		ageLabels: { rso: 'Built Before 1978', post1978: 'Built 1978 or Later' },
		salesIntro:
			'Glendale has no local rent control, so the 1978 line is not a legal dividing line here the way it is in the City of Los Angeles. We keep it so the figures compare with our other pages, since older buildings still trade differently from newer ones.',
		rentFaq:
			'Not locally. Glendale has no rent cap of its own, so the statewide AB 1482 limit applies to covered buildings (8.7% for increases effective on or after August 1, 2026 in the Los Angeles region). Glendale does run its own Rental Rights Program (Ordinance 5922, updated in 2024) with just cause eviction rules and relocation assistance, and the City of Los Angeles rent control ordinance does not apply. Confirm which rules cover your building with the city’s Rental Rights Program office.',
		compare: [
			{ topic: 'Rent control', la: 'LA’s ordinance, for buildings first occupied on or before Oct 1, 1978', city: 'No local rent cap; the statewide AB 1482 cap applies to covered buildings' },
			{ topic: 'Local tenant program', la: 'LA’s just cause and relocation rules', city: 'Rental Rights Program, Ordinance 5922 (effective March 14, 2019; updated effective March 7, 2024)' },
			{ topic: 'Large rent increases', la: '3% from July 1, 2026 through June 30, 2027', city: 'Relocation assistance for tenants who move out because of an increase above 7%' },
			{ topic: 'Measure ULA', la: 'Applies above $5.4 million', city: 'Does not apply' },
			{ topic: 'City transfer tax', la: '$4.50 per $1,000', city: 'None (county tax only)' },
		],
		sections: [
			{
				heading: 'The Rental Rights Program in plain terms',
				paragraphs: [
					'Ordinance 5922, the Rental Rights Program, took effect March 14, 2019 and was updated effective March 7, 2024. The city describes five parts:',
				],
				bullets: [
					'Just cause eviction: twelve lawful grounds for ending a tenancy.',
					'Relocation assistance: tenants have a right to it when they choose to move out because of a rent increase above 7%.',
					'Right to lease: a process for longer-term leases.',
					'Intentional disrepair: consequences when a landlord lets a unit fall into disrepair on purpose.',
					'Rent reduction: tenants can ask for a reduction when services are cut.',
				],
			},
			{
				heading: 'The 7% line and the state cap',
				paragraphs: [
					'Glendale does not stop a landlord from raising rent up to the state cap, but an increase above 7% can mean relocation assistance if the tenant moves out because of it. The AB 1482 cap is higher, 8.7% for increases effective on or after August 1, 2026, so the two numbers can differ. A buyer will want to know how past increases were handled, and an owner planning a large increase should check the program’s relocation rules first. The city publishes the amounts and procedures in its program guides.',
				],
			},
			{
				heading: 'What this means when you sell',
				paragraphs: [
					'Glendale buyers underwrite against the state cap and the Rental Rights Program rather than a city-set yearly percentage. Have your rent history, notices, and any termination or relocation files in order before you list. A clean record on just cause and relocation helps a sale go through without surprises in due diligence.',
				],
			},
		],
		contact: 'Glendale Rental Rights Program: (818) 548-3926, Rent@GlendaleCA.gov, glendalerentalrights.com.',
		sources: [
			'City of Glendale, Rental Rights Program guides (glendalerentalrights.com), read November 12, 2026: ordinance number, effective dates, the five program components, the twelve just cause grounds, the 7% relocation rule, and the program contact. The city housing pages that list relocation amounts would not load automatically, so amounts are not stated here.',
			'LA County Registrar-Recorder documentary transfer tax page, read October 22, 2026: only Culver City, Los Angeles, Pomona, Redondo Beach, and Santa Monica have their own city rate.',
			'The statewide AB 1482 cap is from our article on the 2026 reset; City of Los Angeles figures match our City of LA pages.',
		],
		checked: CHECKED,
		faqs: [
			{
				q: 'How much can landlords raise rent in Glendale in 2026?',
				a: 'Glendale has no local rent cap, so the statewide AB 1482 limit applies to covered buildings: 5% plus CPI, up to 10%. For increases effective on or after August 1, 2026 in the Los Angeles region, the cap is 8.7%. Under Glendale’s Rental Rights Program, a tenant who moves out because of an increase above 7% has a right to relocation assistance.',
				links: [{ label: '2026 AB 1482 rent cap', href: '/insights/ab-1482-rent-cap-2026/' }],
			},
			ulaFaq('Glendale'),
			{
				q: 'What is Glendale’s Rental Rights Program?',
				a: 'It is Glendale’s local tenant protection ordinance (Ordinance 5922, effective March 14, 2019 and updated effective March 7, 2024). It has five parts: just cause eviction with twelve lawful grounds, relocation assistance, a right to lease, rules on intentional disrepair, and rent reduction when services are cut. The city runs a Rental Rights Program office at (818) 548-3926.',
			},
			{
				q: 'Does a Glendale landlord need a reason to end a tenancy?',
				a: 'Yes. Glendale’s program lists twelve lawful grounds for ending a tenancy, and state law adds its own just cause rules for covered tenants. Because the grounds, notices, and any relocation payment depend on the reason, get legal advice before serving a notice, and keep clean records, since buyers review them in due diligence.',
			},
		],
	},

	'long-beach': {
		slug: 'long-beach',
		shortName: 'Long Beach',
		eyebrow: 'Its Own City, Its Own Rules',
		heading: 'Selling an Apartment Building in Long Beach vs. the City of Los Angeles',
		intro: [
			'Long Beach is its own city. It has no local rent cap, so the statewide AB 1482 limit applies, but it has its own just cause ordinance with set relocation payments, a rental housing inspection program, and a business license requirement. Neither the City of Los Angeles rent ordinance nor Measure ULA applies, and there is no city transfer tax.',
		],
		ageLabels: { rso: 'Built Before 1978', post1978: 'Built 1978 or Later' },
		salesIntro:
			'Long Beach has no local rent control, so the 1978 line is not a legal dividing line here the way it is in the City of Los Angeles. We keep it so the figures compare with our other pages, since older buildings still trade differently from newer ones.',
		rentFaq:
			'Not locally. Long Beach has no rent cap of its own, so the statewide AB 1482 limit applies to covered buildings (8.7% for increases effective on or after August 1, 2026 in the Los Angeles region). Long Beach does have its own Just Cause for Termination of Tenancies ordinance (Chapter 8.99 of the municipal code), which works together with AB 1482 and sets relocation payments for no-fault terminations. The City of Los Angeles rent control ordinance does not apply.',
		compare: [
			{ topic: 'Rent control', la: 'LA’s ordinance, for buildings first occupied on or before Oct 1, 1978', city: 'No local rent cap (the city repealed its 2019 rent-limit ordinance); AB 1482 applies to covered buildings' },
			{ topic: 'Just cause', la: 'LA’s just cause rules', city: 'Chapter 8.99, adopted March 10, 2020, for tenants of 12 months or more; most rentals covered' },
			{ topic: 'Relocation (no-fault)', la: 'LA’s relocation schedule', city: 'One month’s rent; the greater of $4,500 or two months’ rent for demolition or substantial remodel; due within 15 days of the written notice' },
			{ topic: 'Measure ULA', la: 'Applies above $5.4 million', city: 'Does not apply' },
			{ topic: 'City transfer tax', la: '$4.50 per $1,000', city: 'None (county tax only)' },
		],
		sections: [
			{
				heading: 'Just cause and relocation: Chapter 8.99',
				paragraphs: [
					'Long Beach’s City Council adopted its Just Cause for Termination of Tenancies ordinance on March 10, 2020. The city says it applies to most rental properties and works in tandem with AB 1482, protecting tenants who have lived in the unit for 12 months or more. Owners need a lawful reason to end a tenancy. At-fault reasons include non-payment of rent after a three-day notice, a material breach, a nuisance, criminal activity, and subletting without permission. No-fault reasons include an owner or immediate family member moving in, taking the unit off the rental market, demolition or substantial remodel, and complying with a government order to vacate.',
					'For no-fault terminations the owner pays relocation assistance: one month of the tenant’s rent, or the greater of $4,500 or two months of rent for demolition or substantial remodel. The owner may pay it or waive the last month’s rent, it must be paid within 15 calendar days of the written notice, and the notice is void if the owner does not follow the ordinance. The city lists exemptions, including housing built within the previous 15 years and owner-occupied homes, so check whether your building is covered.',
				],
			},
			{
				heading: 'Inspections and licensing',
				paragraphs: [
					'Long Beach runs a Proactive Rental Housing Inspection Program that allows the city to inspect residential rental properties periodically (Long Beach Municipal Code 18.30.120). The city’s licensing page says every business in Long Beach must hold a business license; ask the Business License office at 562.570.6211 how that applies to your rental property. Code Enforcement is at 562.570.CODE (2633). We could not find a rental registry or a soft-story retrofit ordinance on the pages we read, so ask the city before you list.',
				],
			},
			{
				heading: 'What this means when you sell',
				paragraphs: [
					'Long Beach buyers underwrite rent growth against the state cap and the cost of any no-fault move-out. A planned renovation that requires tenants to leave carries a known relocation cost per unit, which is why buyers ask for the scope and the notices up front. Because Long Beach had the most apartment sales of any city in our 2026 data outside the City of Los Angeles, there is also plenty of recent pricing to compare against.',
				],
			},
		],
		contact: 'Long Beach Code Enforcement: 562.570.CODE (2633). Business License: 562.570.6211.',
		sources: [
			'City of Long Beach, Tenant and Landlord Resources page (longbeach.gov/lbcd/hn/tenant-landlord-resources), the District 1 Tenant Assistance Ordinance page, the Proactive Rental Housing Inspection Program page, and the business licensing guidelines, read November 12, 2026: just cause grounds, exemptions, relocation amounts and timing, the repeal of the 2019 rent-limit ordinance, and the inspection and licensing programs. No 2025 or 2026 amendment to Chapter 8.99 was found; the municipal code on Municode is the final authority.',
			'LA County Registrar-Recorder documentary transfer tax page, read October 22, 2026: only Culver City, Los Angeles, Pomona, Redondo Beach, and Santa Monica have their own city rate.',
			'The statewide AB 1482 cap is from our article on the 2026 reset; City of Los Angeles figures match our City of LA pages.',
		],
		checked: CHECKED,
		faqs: [
			{
				q: 'How much can landlords raise rent in Long Beach in 2026?',
				a: 'Long Beach has no local rent cap, so the statewide AB 1482 limit applies to covered buildings: 5% plus CPI, up to 10%. For increases effective on or after August 1, 2026 in the Los Angeles region, the cap is 8.7%. Some buildings are exempt from AB 1482, such as those less than 15 years old, so check which rules cover yours.',
				links: [{ label: '2026 AB 1482 rent cap', href: '/insights/ab-1482-rent-cap-2026/' }],
			},
			ulaFaq('Long Beach'),
			{
				q: 'How much relocation assistance must a Long Beach landlord pay?',
				a: 'For a no-fault termination, one month of the tenant’s rent. For demolition or substantial remodel, the greater of $4,500 or two months of rent. It must be paid within 15 calendar days of the written notice, and the notice is void if the owner does not follow the ordinance. Confirm the current amounts with the city before serving a notice.',
			},
			{
				q: 'Does Long Beach require rental properties to be inspected?',
				a: 'The city runs a Proactive Rental Housing Inspection Program that allows periodic inspections of residential rental properties. Ask Code Enforcement at 562.570.CODE (2633) about timing and any fees, and fix known code issues before you list, since buyers read inspection reports closely.',
			},
		],
	},

	inglewood: {
		slug: 'inglewood',
		shortName: 'Inglewood',
		eyebrow: 'Its Own City, Its Own Rules',
		heading: 'Selling an Apartment Building in Inglewood vs. the City of Los Angeles',
		intro: [
			'Inglewood is its own city, with its own rent stabilization program run by the city’s Housing Protection Department. Owners of buildings with two or more units register them with the city, the yearly increase limit depends on the size of the building, and neither the City of Los Angeles rent ordinance nor Measure ULA applies. There is no city transfer tax.',
		],
		ageLabels: { rso: 'Built Before 1978', post1978: 'Built 1978 or Later' },
		salesIntro:
			'Inglewood’s rules exempt buildings with a certificate of occupancy from the last 15 years rather than using a fixed build year, but we keep the same 1978 line as our other pages so the figures compare across neighborhoods. Almost all of the 2026 Inglewood sales were older buildings.',
		rentFaq:
			'Yes, under Inglewood’s own Housing Protection Ordinance, not the City of Los Angeles rules. It covers rental buildings with two or more units, except units whose certificate of occupancy is within the last 15 years and a few other exemptions. The yearly increase limit depends on building size: for buildings of 5 or more units it is 3% or the CPI change, whichever is greater, and for 4 or fewer units it is 5% plus CPI, never more than 10%. Owners must register with the city. Confirm the current figures with the city’s Housing Protection Department.',
		compare: [
			{ topic: 'Rent control', la: 'LA’s ordinance, for buildings first occupied on or before Oct 1, 1978', city: 'Inglewood’s Housing Protection Ordinance (Municipal Code Chapter 8, Articles 9 and 10); newer buildings (certificate of occupancy within 15 years) exempt' },
			{ topic: 'Yearly rent increase', la: '3% from July 1, 2026 through June 30, 2027', city: '5 or more units: 3% or CPI, whichever is greater (3.7% on the city’s current table). 4 or fewer: 5% plus CPI (8.7%). Never over 10%' },
			{ topic: 'Registration', la: 'Registration with the LA Housing Department', city: 'City registry for properties with 2 or more units, with a yearly per-unit fee' },
			{ topic: 'Measure ULA', la: 'Applies above $5.4 million', city: 'Does not apply' },
			{ topic: 'City transfer tax', la: '$4.50 per $1,000', city: 'None (county tax only)' },
		],
		sections: [
			{
				heading: 'Two limits, depending on building size',
				paragraphs: [
					'The city’s allowable rent increase page sets the limit by building size. For buildings of five or more units, an increase in any 12-month period may not exceed 3% or the CPI change, whichever is greater. For buildings of four or fewer units, the limit is 5% plus the CPI change. No increase may exceed 10%. The city’s current table, labeled fiscal year 2025-26 and applying to increases after June 30, 2025, cites a CPI figure of 3.7% published in May 2026, which gives 3.7% for buildings of five or more units and 8.7% for buildings of four or fewer. The city says new CPI figures are published each May, so confirm the figure that applies on the date of your notice.',
					'There is also a below-market add-on. When a unit’s rent is under 80% of fair market rent, the city’s program administrator may approve an extra 5% for buildings of five or more units, or an extra 2% for buildings of four or fewer, with the total capped at 10%.',
				],
			},
			{
				heading: 'Registration, fees, and recording increases',
				paragraphs: [
					'The city’s registration pages say all properties with two or more units must register, and so must any residential property owned by an entity rather than a person. After a 30-day notice of a change in terms, the owner must record the increase in the city’s online registry. The fee page we could read shows an adopted fee of $206 per unit for 2023-24 ($184 at a discounted rate), with exemptions such as owner-occupied duplexes and units that are less than 15 years old; the current fee may differ, so ask the city. If registration is incomplete and fees are unpaid after April 1, monthly penalties apply and the city can place a lien on the property tax bill.',
				],
			},
			{
				heading: 'What this means when you sell',
				paragraphs: [
					'A careful Inglewood buyer will ask for registry confirmation, the rent increase notices, and proof that each increase stayed within the limit for its building size. Our 2026 data also shows Inglewood trading at some of the highest cap rates of the five cities in this group, which is why a clean compliance file matters: the buyer is paying for an income stream that the city’s rules govern.',
				],
			},
		],
		contact: 'Inglewood Housing Protection Department, Long Term Rental Division: 1 Manchester Blvd, Suite 602, (310) 412-4330, Housingprotection@cityofinglewood.org. Property owner help desk: (310) 987-7013.',
		sources: [
			'City of Inglewood, Allowable Rent Increases, Annual Program Fee, Long Term Rental Division, Residential Registration, and contact pages (cityofinglewood.org), read November 12, 2026: building-size limits, the current CPI table, the below-market add-on, registration and fees, exemptions, and contacts. The city pages did not state just cause or relocation rules, the ordinance number, or its adoption date, and two registry web addresses appear in different places, so confirm details with the city.',
			'LA County Registrar-Recorder documentary transfer tax page, read October 22, 2026: only Culver City, Los Angeles, Pomona, Redondo Beach, and Santa Monica have their own city rate.',
			'City of Los Angeles figures (3% yearly increase, Measure ULA thresholds, $4.50 per $1,000 city tax) match our City of LA pages.',
		],
		checked: CHECKED,
		faqs: [
			{
				q: 'How much can landlords raise rent in Inglewood in 2026?',
				a: 'It depends on the size of the building. For buildings of five or more units, the limit is 3% or the CPI change, whichever is greater, which is 3.7% on the city’s current table. For buildings of four or fewer units, it is 5% plus CPI, which is 8.7% on that table. No increase may exceed 10%. The city publishes new CPI figures each May, so confirm the figure that applies on the date of your notice.',
			},
			ulaFaq('Inglewood'),
			{
				q: 'Do Inglewood landlords have to register their buildings?',
				a: 'Yes. All properties with two or more units must register with the city’s Housing Protection Department, and so must residential properties owned by an entity. Owners record each increase in the online registry after serving the 30-day notice. Some units are exempt, such as units with a certificate of occupancy from the last 15 years and owner-occupied duplexes where the owner moved in first.',
			},
			{
				q: 'Why do Inglewood apartment buildings trade at higher cap rates than other cities?',
				a: 'In our 2026 sales, older Inglewood buildings carried higher cap rates than the other four cities in this group, which can reflect lower prices per unit relative to rents, among other things. Each building’s number depends on its own income and expenses, so a Broker Opinion of Value is the reliable way to see where yours fits.',
				links: [{ label: 'Free property value calculator', href: '/property-value/' }],
			},
		],
	},
};
