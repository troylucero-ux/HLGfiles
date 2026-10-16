// Insights / blog posts. Add entries here as content is written — src/pages/insights/[slug].astro
// renders each one automatically. Good remaining topics per the project brief: RSO updates,
// Measure ULA, long-tail submarket + process keywords.

export type Post = {
	slug: string;
	title: string;
	seoTitle?: string; // shorter <title> tag (aim for 60 chars or fewer); falls back to `title`
	description: string; // also used as the meta description, so keep it to ~155 characters
	date: string; // ISO date
	image?: { src: string; alt: string; width: number; height: number }; // optional graphic shown under the date and used for social sharing
	sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
	{
		slug: 'should-i-sell-my-la-apartment-building',
		title: 'Should I Sell My Apartment Building? 7 Questions to Ask First',
		seoTitle: 'Should I Sell My LA Apartment Building? 7 Questions to Ask',
		description:
			'Thinking about selling your LA apartment building? Seven questions about goals, value, taxes, costs, and timing to answer before you decide.',
		date: '2026-10-15',
		sections: [
			{
				heading: 'There Is No Single Right Answer',
				paragraphs: [
					'Whether to sell an apartment building is one of the biggest financial decisions an owner makes, and the right answer depends on your goals as much as on the market. Some owners are better off holding. Others are better off selling now, or selling into a 1031 exchange. The seven questions below are the ones we walk through with owners before anyone lists a property.',
				],
			},
			{
				heading: '1. What Do You Want the Building to Do for You?',
				paragraphs: [
					'Start with the goal, not the price. Do you want steady income, less work, a simpler estate for your family, cash for another venture, or a way out of managing tenants altogether? A building that fits your goals ten years ago may not fit them today.',
				],
			},
			{
				heading: '2. What Is It Worth Today?',
				paragraphs: [
					'You cannot weigh selling against holding without a realistic number. Our [free property value calculator](/property-value/) gives you a quick range based on real, recent LA County sales, and a free [Broker Opinion of Value](/contact/?intent=bov) goes further by looking at your actual rents, condition, and unit mix.',
				],
			},
			{
				heading: '3. What Would You Actually Net After Taxes and Costs?',
				paragraphs: [
					'The sale price is not what lands in your account. Federal and California capital gains tax, depreciation recapture, commissions, and closing costs all come out first, and for buildings near the top of the market the City of Los Angeles transfer tax can matter a great deal. Read our guides to [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/) and to [Measure ULA price thresholds](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/) before you decide, and ask your CPA to estimate your tax on a sale.',
				],
			},
			{
				heading: '4. What Is the Building Going to Cost You Over the Next Five Years?',
				paragraphs: [
					'Look ahead as well as back. Aging roofs, plumbing, and electrical systems, rising insurance premiums, and the cost of keeping up with new rules all affect what the building will really earn. A water leak that goes unnoticed can quietly cost an owner tens of thousands of dollars in value, which we explain in our article on [tracking utility bills](/insights/utility-bill-diligence-la-apartment-owners/).',
					'Deferred maintenance also tends to show up in the sale price, because buyers deduct for it. Fixing the right things before you list, or choosing not to, is a decision worth making deliberately.',
				],
			},
			{
				heading: '5. Where Are Your Rents Compared With the Market?',
				paragraphs: [
					'In Los Angeles, rent rules shape what a building can earn and what a buyer will pay. Buildings built before October 1, 1978 are covered by the City’s Rent Stabilization Ordinance, and newer buildings generally fall under the statewide cap explained in our article on the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/). If your tenants have been in place a long time at below-market rents, a buyer will price in that gap. Our guide to [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/) explains how.',
				],
			},
			{
				heading: '6. What Are Your Options Besides Selling Outright?',
				paragraphs: [
					'Selling is not all or nothing. Depending on your situation, you could keep the building and bring in better management, refinance, or sell and defer your capital gains tax with a [1031 exchange](/1031-exchanges/). Owners who want to stop managing property but keep the income often look at [triple-net (NNN) and DST investments](/triple-net-dst/), which we cover in our article on [exchanging into triple-net properties](/insights/1031-exchange-into-triple-net-properties/). If you are handling a building after the death of an owner, our [trust and estate sales](/trust-and-estate-sales/) page explains that process.',
				],
			},
			{
				heading: '7. What Is Your Timeline?',
				paragraphs: [
					'A typical Los Angeles apartment sale takes 60 to 90 days from listing to closing, though every deal is different. If you want a sale to land in a particular tax year, or you are working against a 1031 exchange deadline, the calendar matters. Our article on [timing a sale before year-end](/insights/selling-la-apartment-building-before-year-end/) walks through how.',
				],
			},
			{
				heading: 'Talk It Through With Us',
				paragraphs: [
					'If you are weighing a sale, we are glad to talk it through with no obligation. You can see how we have helped other owners in our [case studies](/case-studies/) and [closed sales](/closed-sales/), or reach out to Josh Kaplan or Troy Lucero at Highlight Multifamily Group for a free, confidential conversation.',
					'This article is general information, not tax, legal, or financial advice. Please talk with your CPA, attorney, and financial advisor about your own situation.',
				],
			},
		],
	},
	{
		slug: 'selling-la-apartment-building-with-tenants-rent-control',
		title: 'Selling an LA Apartment Building With Tenants Under Rent Control',
		seoTitle: 'Selling an LA Apartment Building With Rent-Controlled Tenants',
		description:
			'Yes, you can sell an occupied LA apartment building. How rent control and long-term tenants affect price, preparation, and your sale timeline.',
		date: '2026-10-15',
		sections: [
			{
				heading: 'Can You Sell a Building With Tenants in It?',
				paragraphs: [
					'Yes. Most apartment buildings in Los Angeles sell with tenants in place, and many buyers specifically look for occupied buildings with stable income. A sale does not by itself end anyone’s tenancy. The leases and the rent rules that apply to the building stay with the building, so the new owner steps into the owner’s position.',
					'That is also why rent control matters so much to value. A buyer is not paying for what the building could earn at today’s market rents. They are paying for what it earns under the rules that apply to your tenants.',
				],
			},
			{
				heading: 'Which Rent Rules Apply to Your Building',
				paragraphs: [
					'In Los Angeles, apartment buildings with a certificate of occupancy issued before October 1, 1978 are generally covered by the City’s Rent Stabilization Ordinance (RSO), which limits annual increases and adds eviction protections. Newer buildings typically fall under the statewide AB 1482 cap instead. Our article on the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/) explains the current numbers.',
					'Which set of rules applies to your property affects your income, your expenses, and how buyers underwrite the deal, so it is the first thing we confirm.',
				],
			},
			{
				heading: 'How Below-Market Rents Affect Price',
				paragraphs: [
					'Long-term tenants in rent-controlled units often pay well below what a vacant unit would rent for today. Buyers call this the loss to lease, and they value it carefully. They will usually price the building on the rents in place, then add some value for the upside they can capture as units turn over naturally. A building with all long-term tenants sells differently from one with several vacant units.',
					'Two examples from our own work show how it plays out. At 453 S Gramercy Pl, most tenants were long-term occupants paying well below market, and we found an off-market buyer experienced with exactly that kind of property, as we describe in our [case study](/case-studies/453-s-gramercy-pl-koreatown-apartments/). At 1513 Arlington Ave, vacant units gave buyers a clear way to see the opportunity, which we cover in that [case study](/case-studies/1513-arlington-ave-arlington-heights-apartments/).',
				],
			},
			{
				heading: 'Vacant Units',
				paragraphs: [
					'Under California law, a unit that becomes vacant can generally be re-rented at market rent, which is why units delivered vacant are attractive to buyers. If you have vacant units, they are often worth highlighting. Any agreement to have a tenant move out voluntarily has to follow state and City rules, so talk to a landlord-tenant attorney before offering or signing one.',
				],
			},
			{
				heading: 'Getting Ready to Sell With Tenants in Place',
				paragraphs: [
					'A few steps make the process smoother and protect your price.',
					'Build an accurate rent roll. Buyers will check every rent, lease start date, and unit against your records and the leases, and mistakes cost credibility.',
					'Gather your lease files. Have each tenant’s lease, any addenda, and notices ready, along with a clear record of security deposits, since deposits transfer to the buyer.',
					'Confirm your City compliance. Make sure your RSO registration and fees are current, because a buyer’s attorney will ask.',
					'Expect estoppel requests. Buyers often ask tenants to confirm the terms of their tenancy during escrow, and clean files make this quick.',
					'Keep your rental practices normal. Continue to follow the usual rules for repairs and for giving tenants proper written notice before entering a unit, including for showings.',
				],
			},
			{
				heading: 'Talking With Your Tenants',
				paragraphs: [
					'Tell tenants about a sale honestly, and do not promise anything on a buyer’s behalf. Most tenants just want to know that their lease and their rent stay the same, and in a sale of an occupied building they generally do. Showings, inspections, and estoppels all require some access to units, so plan for them with proper notice.',
				],
			},
			{
				heading: 'Measure ULA and Other Costs of Selling',
				paragraphs: [
					'Rent rules are only part of the picture. For buildings priced near $5.4 million or $10.9 million inside the City of Los Angeles, the Measure ULA transfer tax can change what you net, as we explain in our [Measure ULA guide](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/). And if you are still deciding whether to sell, start with our list of [seven questions to ask first](/insights/should-i-sell-my-la-apartment-building/).',
				],
			},
			{
				heading: 'Start With a Number',
				paragraphs: [
					'We help owners sell occupied, rent-controlled buildings across Los Angeles every year. Start with our [free property value calculator](/property-value/), then request a free [Broker Opinion of Value](/contact/?intent=bov) and we will walk you through how your rent roll, your tenants, and your timeline affect your price.',
					'This article is general information, not legal advice. Rent control and tenant laws are detailed and change, so please confirm how they apply to your building with a landlord-tenant attorney.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[Los Angeles Housing Department: Rental Property Owners](https://housing.lacity.gov/rental-property-owners)',
				],
			},
		],
	},
	{
		slug: 'capital-gains-depreciation-recapture-selling-la-apartment-building',
		title: 'Capital Gains and Depreciation Recapture When You Sell an LA Apartment Building',
		seoTitle: 'Capital Gains & Depreciation Recapture: LA Apartment Sale',
		description:
			'Selling an LA apartment building? How federal and California capital gains tax and depreciation recapture work, and how a 1031 exchange can defer both.',
		date: '2026-10-15',
		sections: [
			{
				heading: 'Why the Tax Bill Surprises Many Owners',
				paragraphs: [
					'For many apartment owners, the biggest cost of selling is not the commission. It is the tax. Owners who bought years ago, and who have been taking depreciation deductions every year since, are often surprised by how much of the sale price is taxable. Understanding the pieces before you list lets you plan around them instead of discovering them at closing.',
				],
			},
			{
				heading: 'How Your Gain Is Figured',
				paragraphs: [
					'Your taxable gain is generally the amount you realize from the sale, after selling costs, minus your adjusted basis. Your adjusted basis starts with what you paid for the property, adds the cost of capital improvements, and subtracts the depreciation you took or were allowed to take. Because depreciation lowers your basis every year, a building that has been depreciated for decades can have a basis far below what you paid.',
				],
			},
			{
				heading: 'Federal Capital Gains Tax',
				paragraphs: [
					'If you owned the property for more than a year, the gain is generally a long-term capital gain, taxed at 0%, 15%, or 20% federally depending on your taxable income. According to the IRS, the 20% rate applies once income is above the threshold for the 15% rate, and those thresholds are adjusted every year. Sellers with a large gain often land in the 15% or 20% bracket, because the gain itself counts toward taxable income.',
					'High-income sellers may also owe the 3.8% net investment income tax, which applies to net gains from selling real estate when income is above certain levels, for example $200,000 for a single filer and $250,000 for a married couple filing jointly.',
				],
			},
			{
				heading: 'Depreciation Recapture',
				paragraphs: [
					'Residential rental property is generally depreciated over 27.5 years, which gives owners a deduction every year they hold it. When you sell, the part of your gain that comes from that depreciation is not taxed at the regular capital gains rates. The IRS treats it as unrecaptured section 1250 gain, taxed at a maximum federal rate of 25%.',
					'As a simple illustration, if you have claimed $600,000 of depreciation over the years, up to $600,000 of your gain can be taxed at that higher rate, with the rest of the gain taxed at the regular capital gains rates. The IRS generally measures this by the depreciation you were allowed to take, whether or not you claimed it, so it is not something an owner can avoid by skipping the deductions.',
				],
			},
			{
				heading: 'California Taxes the Gain Too',
				paragraphs: [
					'California does not have a lower rate for capital gains. According to the Franchise Tax Board, all capital gains are taxed as ordinary income. For a seller with a large gain, that means the state tax can be substantial on top of the federal tax.',
				],
			},
			{
				heading: 'Ways Owners Manage the Tax',
				paragraphs: [
					'There are legitimate ways to reduce, defer, or time the tax, and the right one depends on your situation. A few of the most common are below.',
					'A 1031 exchange. If you reinvest the proceeds into like-kind investment property, you can defer both the capital gains tax and the depreciation recapture. The rules are strict, including 45 days to identify a replacement property and 180 days to close. Read our [1031 exchange guide](/1031-exchanges/) and our article on [exchanging into triple-net properties](/insights/1031-exchange-into-triple-net-properties/).',
					'Timing the sale. Closing in December or January puts the gain in a different tax year, which can matter for your overall income. See our article on [timing a sale before year-end](/insights/selling-la-apartment-building-before-year-end/).',
					'Estate planning. Property inherited at death generally receives a new, stepped-up basis, which can eliminate much of the gain for heirs. If you are handling a building after an owner’s death, see our [trust and estate sales](/trust-and-estate-sales/) page.',
					'Records. Keep documentation of capital improvements you have made over the years, since they add to your basis and reduce your gain.',
				],
			},
			{
				heading: 'Do Not Forget the Other Costs of Selling',
				paragraphs: [
					'Income tax is only part of what comes out of a sale. If your building is priced near $5.4 million or $10.9 million inside the City of Los Angeles, the Measure ULA transfer tax can matter just as much, as we explain in our [Measure ULA guide](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/). And if you are still deciding whether selling makes sense, our [seven questions to ask first](/insights/should-i-sell-my-la-apartment-building/) is a good place to start.',
				],
			},
			{
				heading: 'Plan Before You List',
				paragraphs: [
					'The best time to talk about taxes is before you list, not after you are under contract. Bring your CPA into the conversation early, and we will help with the real estate side: what your building is likely to sell for, what a buyer will pay, and how timing and structure affect your options. Start with our [free property value calculator](/property-value/) or request a free [Broker Opinion of Value](/contact/?intent=bov).',
					'This article is general information, not tax or legal advice. Tax rules and income thresholds change, so please confirm everything with your CPA or tax attorney.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[IRS Topic No. 409: Capital gains and losses](https://www.irs.gov/taxtopics/tc409)',
					'[IRS Topic No. 559: Net investment income tax](https://www.irs.gov/taxtopics/tc559)',
					'[IRS Publication 527: Residential Rental Property](https://www.irs.gov/publications/p527)',
					'[IRS Publication 544: Sales and Other Dispositions of Assets](https://www.irs.gov/publications/p544)',
					'[California Franchise Tax Board: Capital gains and losses](https://www.ftb.ca.gov/file/personal/income-types/capital-gains-and-losses.html)',
				],
			},
		],
	},
	{
		slug: 'measure-ula-2026-thresholds-selling-la-apartment-building',
		title: 'Selling Near a Measure ULA Threshold? Why Price and Timing Matter',
		seoTitle: 'Measure ULA 2026 Thresholds: What LA Apartment Sellers Owe',
		description:
			'Measure ULA thresholds rose to $5.4M and $10.9M. See how a price just over the line can cut your net proceeds, and what LA apartment sellers can do.',
		date: '2026-10-15',
		sections: [
			{
				heading: 'What Changed on July 1, 2026',
				paragraphs: [
					'Measure ULA is the City of Los Angeles transfer tax, often called the mansion tax, on property sales above a set price. Its price thresholds are adjusted for inflation every year, and the latest adjustment applies to sales closing after June 30, 2026. The thresholds are now $5.4 million and $10.9 million, up from $5.3 million and $10.6 million a year earlier.',
					'Sales above $5.4 million but below $10.9 million pay a 4% ULA tax. Sales at $10.9 million or more pay 5.5%. The tax applies only to property inside the City of Los Angeles, and it is in addition to the City\u2019s regular transfer tax of 0.45%.',
				],
			},
			{
				heading: 'Why a Price Just Over the Line Costs So Much',
				paragraphs: [
					'The key detail is that the tax is not marginal. The ULA tax applies to the entire sale price, not only the portion above the threshold. A building that sells for $5,400,000 owes no ULA tax. A building that sells for $5,400,001 owes 4% of the full price, about $216,000.',
				],
			},
			{
				heading: 'The Dead Zone Above Each Threshold',
				paragraphs: [
					'That creates a stretch of prices where a higher number puts less money in your pocket. At $5.5 million, a seller keeps $120,000 less after ULA than at $5.4 million, and it takes a price of about $5.625 million to net the same. The pattern repeats at the upper line: a sale at $10.9 million leaves about $67,500 less than a sale at $10.8 million, and the price has to reach roughly $10.97 million to catch up.',
					'The figures above are before commissions, the regular transfer tax, and other closing costs, so your actual numbers will differ, but the shape of the problem does not. Also keep in mind that the tax is calculated on the gross value of the sale, including any loan the buyer assumes, so assuming debt does not lower the taxable amount.',
				],
			},
			{
				heading: 'What Sellers Near a Threshold Can Do',
				paragraphs: [
					'If your building is priced near either number, a few things are worth weighing before you list.',
					'Price with the threshold in mind. Sometimes a modest price adjustment leaves you with more money than a higher price that crosses the line. We model your net proceeds at several price points before you list, not after you are under contract.',
					'Watch the calendar. The thresholds are adjusted each year for inflation, so a building priced just above a line today may fall under it after the next adjustment. If you are close, ask us how your closing date interacts with the adjustment.',
					'Do not count on a 1031 exchange to reduce the tax. A 1031 exchange can defer your capital gains tax, but it does not exempt a sale from Measure ULA, and exchanges are not among the exemptions the City lists. The tax is calculated on the sale of your building either way. An exchange is still a powerful tool for the gain, and you can read more in our guide to [1031 exchanges](/1031-exchanges/), but it solves a different problem.',
					'Know who the buyer is. In narrow cases the buyer matters. Sales to certain qualified affordable housing nonprofits and to government agencies are exempt from ULA, and the exemption for qualified affordable housing organizations has to be requested through the Los Angeles Housing Department. For most private sales it will not apply, but it is worth asking.',
				],
			},
			{
				heading: 'Where Things Stand Today',
				paragraphs: [
					'There has been a lot of talk about changing Measure ULA, but as of this writing in October 2026, the rates and thresholds above are the current rules. In July, the Los Angeles City Council shelved a proposal to put an exemption for new multifamily construction on the November ballot, so that measure will not go before voters this fall. Rules like this can change, so we confirm the current thresholds and exemptions with the City\u2019s Office of Finance before we price any building near a line.',
				],
			},
			{
				heading: 'Run the Numbers Before You List',
				paragraphs: [
					'If your building could land near $5.4 million or $10.9 million, the time to look at the math is before you set a price. Start with our [free property value calculator](/property-value/) for a quick range, then request a [free Broker Opinion of Value](/contact/?intent=bov) and we will show you what you would net at different prices and closing dates.',
					'Planning around year-end? Our article on [timing a sale before December 31](/insights/selling-la-apartment-building-before-year-end/) covers how closing dates affect your taxes.',
					'This article is general information, not tax or legal advice. Please confirm how Measure ULA applies to your sale with your CPA or tax attorney.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[City of Los Angeles Office of Finance: Real Property Transfer Tax and Measure ULA FAQ](https://finance.lacity.gov/faq/measure-ula)',
					'[Apartment Association of Greater Los Angeles: Measure ULA update on the July 2025 thresholds](https://members.aagla.org/news/city-of-la-measure-ula-update--increased-thresholds-eff-july-1st-)',
					'[Bisnow: LA City Council kills ballot measure for ULA multifamily exemption](https://www.bisnow.com/los-angeles/news/construction-development/ballot-measure-to-exempt-new-housing-construction-from-ula-dead-after-council-vote-135271)',
				],
			},
		],
	},
	{
		slug: 'el-nino-2026-la-apartment-owners-checklist',
		title: 'El Niño Emergency Declared: What LA Apartment Owners Should Know',
		seoTitle: 'El Niño 2026: What LA Apartment Owners Should Do Now',
		description:
			'California and LA County have declared El Niño emergencies. What it means for rent increases, insurance, and your building, plus a prep checklist.',
		date: '2026-09-28',
		image: {
			src: '/images/insights/el-nino-owner-alert.webp',
			alt: 'Illustration of a Spanish-style apartment building in heavy rain, with an El Niño owner checklist: buy flood coverage now, photograph roofs and ceilings, book your roofer and plumber, give tenants one number to report leaks, and fix leaks fast.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'What Was Declared',
				paragraphs: [
					'On September 21, 2026, Governor Newsom proclaimed a statewide state of emergency ahead of what forecasters expect to be a very strong El Niño this winter. The proclamation cites a better than 90% chance of a very strong event, and it directs state agencies to pre-position flood-fighting supplies, equipment, and personnel before the storms arrive.',
					'Local governments have followed. The City of Long Beach proclaimed a local emergency the same day, and Los Angeles County Supervisor Hilda Solis issued a county proclamation on September 23. These declarations are mostly about preparedness and coordination, but for apartment owners they also raise a practical question about rent increases.',
				],
			},
			{
				heading: 'What It Means for Rent Increases',
				paragraphs: [
					'When a governor declares an emergency, California’s price gouging law (Penal Code section 396) ordinarily kicks in automatically. Among other things, it generally prohibits landlords from raising rents more than 10% above pre-emergency levels. According to the California Apartment Association, the governor’s El Niño proclamation expressly suspends those restrictions “at this time,” so the statewide declaration does not currently impose the 10% cap. The governor could change that later.',
					'Local emergency declarations are a separate question. The California Apartment Association notes that a local declaration can trigger its own price gouging protections independent of the state proclamation. The news coverage we reviewed of the LA County and Long Beach proclamations did not address rent limits either way, so an owner planning an increase above 10% should confirm the rules for their city with an attorney or apartment association before sending the notice.',
					'Your normal limits still apply regardless. If your building is covered by the LA Rent Stabilization Ordinance or by AB 1482, those caps are unaffected. For the current AB 1482 numbers, see our article on the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/).',
				],
			},
			{
				heading: 'Why Older LA Buildings Are the Most Exposed',
				paragraphs: [
					'Los Angeles apartment buildings are often older, and older buildings tend to have the features that struggle in a heavy, sustained rain: flat roofs that pond water, parapets and roof flashing that have aged, and drains and downspouts that have not been cleaned or tested in years. Subterranean and driveway-level parking can take on water fast when drainage backs up. A small amount of maintenance now is far cheaper than a five-figure repair in January.',
				],
			},
			{
				heading: 'What Mom-and-Pop Owners Should Do Before the Rains',
				paragraphs: [
					'Check rent increases first. Before sending any increase above 10%, confirm whether a local emergency order applies to your city, as described above.',
					'Clear and test your drainage. Clear roofs, gutters, and downspouts, and test drains and sump pumps in driveways and subterranean parking.',
					'Treat leaks as a habitability issue. California law requires rental housing to be kept habitable, which includes weather protection and working drainage. A slow response to a leak can turn into mold complaints, withheld rent, or a code enforcement case. Fix leaks quickly and keep a record of each repair.',
					'Review your insurance now. Standard property insurance policies generally exclude flood damage. Flood policies through the National Flood Insurance Program usually do not take effect until 30 days after purchase, so waiting for the first storm is too late. While you are at it, check your deductible and whether you carry loss-of-rents coverage.',
					'Take photos and video today. A record of your roof, ceilings, and parking areas before the rain makes an insurance claim much easier to prove.',
					'Line up contractors early. Roofers, plumbers, and water damage cleanup companies get booked solid once the storms start, so have their numbers ready before you need them.',
					'Tell your tenants the plan. Give them one number or email address to report leaks, and show them where the water shutoff is. Non-emergency inspections still generally require 24 hours’ written notice before entering a unit.',
					'If you own on a hillside or near a recent burn area, take extra care. Buildings below slopes or near the Palisades and Eaton burn areas face added risk from mudflows and debris flows, so check drainage and retaining walls first. Los Angeles County Public Works offers property-specific preparedness guidance at 800-933-0930, and more information is at ready.lacounty.gov.',
				],
			},
			{
				heading: 'Deferred Maintenance and Your Building’s Value',
				paragraphs: [
					'A wet winter has a way of exposing deferred maintenance, and buyers price it in. If you are thinking about selling, or just want to know where your building stands, we are glad to take a look. Start with a [free Broker Opinion of Value](/contact/?intent=bov), or try our [free property value calculator](/property-value/).',
					'This article is general information, not legal, insurance, or tax advice. Rules can change as emergency declarations are updated, so please confirm the details for your property with a qualified professional.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[Governor’s El Niño emergency proclamation, September 21, 2026](https://www.gov.ca.gov/2026/09/21/governor-newsom-proclaims-state-of-emergency-to-bolster-statewide-el-nino-preparedness-protect-california/)',
					'[California Apartment Association: Newsom proclaims statewide El Niño emergency but suspends price gouging restrictions](https://caanet.org/newsom-proclaims-statewide-el-nino-emergency-but-suspends-price-gouging-restrictions/)',
					'[MyNewsLA: Solis issues LA County emergency proclamation ahead of El Niño](https://mynewsla.com/weather/2026/09/24/solis-issues-la-county-emergency-proclamation-ahead-of-el-nino-2/)',
					'[NBC Los Angeles: Long Beach declares local emergency over possibly strong El Niño season](https://www.nbclosangeles.com/news/local/long-beach-local-emergency-el-nino/3945449/)',
				],
			},
		],
	},
	{
		slug: 'selling-la-apartment-building-before-year-end',
		title: 'Thinking About Selling? The Year-End Clock Starts Now',
		seoTitle: 'Selling an LA Apartment Building Before Year-End: Timeline',
		description:
			'A typical LA apartment sale takes 60 to 90 days. Here is how to time a December or January close, and what it means for a 1031 exchange.',
		date: '2026-09-25',
		image: {
			src: '/images/insights/year-end-sale-clock.webp',
			alt: 'Timeline graphic: list in October, escrow in November, close by December 31. Tax year 2026 or 2027? Timing is your choice.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Why October Is the Month to Decide',
				paragraphs: [
					'If you are thinking about selling your apartment building, October is the month to decide which tax year you want the sale to land in. In general, a sale is reported for the year it closes, not the year you list it or sign the contract, so the calendar matters more than most owners expect.',
				],
			},
			{
				heading: 'How Long an LA Apartment Sale Typically Takes',
				paragraphs: [
					'A typical Los Angeles apartment sale takes 60 to 90 days from listing to closing: a few weeks of marketing, then 30 to 45 days of escrow. Every deal is different, and pricing, buyer financing, and due diligence can all move the date, but that range is a useful planning number.',
					'Work backward from that and the year-end picture gets clear. List now and a December 31 closing is realistic. Wait until November and you are likely closing in 2027.',
				],
			},
			{
				heading: 'December Close vs. January Close',
				paragraphs: [
					'Neither is automatically better. A December close puts the gain on your 2026 return. A January close pushes that tax bill out a full year. Which one works for you depends on your income this year and next, your other deductions and plans, and where you want the proceeds to go, which is a conversation to have with your CPA before you list, not after you are under contract.',
				],
			},
			{
				heading: 'If You Are Planning a 1031 Exchange, the Calendar Matters Even More',
				paragraphs: [
					'A 1031 exchange gives you 45 days from closing to identify a replacement property and 180 days to close on it. There is a catch for year-end sales: the 180 days ends early if your tax return for the year of the sale is due first, unless you file an extension. With a December sale, the 180 days would run past the April tax deadline, so ask your CPA about filing an extension to keep the full window.',
					'For a closer look at how exchanges work, see our guide to [1031 exchanges](/1031-exchanges/) and our article on [why LA apartment owners are exchanging into triple-net properties](/insights/1031-exchange-into-triple-net-properties/).',
				],
			},
			{
				heading: 'Start With Your Goals, Then Build the Timeline',
				paragraphs: [
					'The right timeline starts with what you want the sale to accomplish: a particular tax year, a particular price, or a smooth handoff into a 1031 exchange. From there, the first step is knowing what your building is worth. You can get a quick range from our [free property value calculator](/property-value/), and a free Broker Opinion of Value gives you a number grounded in your building’s actual rents, condition, and unit mix.',
					'If you want a sale timeline built around your goals, we would be glad to map it out with you. Reach out to Josh Kaplan or Troy Lucero at Highlight Multifamily Group.',
					'This article is general information, not tax or legal advice. Please talk with your CPA or tax attorney about how the timing of a sale affects you.',
				],
			},
		],
	},
	{
		slug: 'ab-1482-rent-cap-2026',
		title: "AB 1482's Rent Cap Just Reset: What It Means for Post-1978 LA Apartment Buildings",
		seoTitle: 'AB 1482 Rent Cap 2026: What LA Apartment Owners Need to Know',
		description:
			'The AB 1482 rent cap reset on August 1, 2026. See the new 8.7% LA maximum, which buildings it covers, and why it matters when you buy or sell.',
		date: '2026-09-15',
		sections: [
			{
				heading: 'What AB 1482 Actually Caps',
				paragraphs: [
					"Assembly Bill 1482, California's statewide Tenant Protection Act, has capped most residential rent increases since 2020 at whichever is lower: 10%, or 5% plus the percentage change in the regional Consumer Price Index (CPI) over the prior year. That CPI figure is not fixed. It is recalculated each year, region by region, which means the actual dollar ceiling on a rent increase moves annually even though the law itself has not changed.",
				],
			},
			{
				heading: 'Why This Matters Specifically for Post-1978 LA Buildings',
				paragraphs: [
					"Los Angeles' own Rent Stabilization Ordinance (RSO) covers apartment buildings with a certificate of occupancy issued before October 1, 1978, and sets its own, generally lower annual increase limit. Buildings built on or after that date typically fall outside the local RSO entirely.",
					"For those non-RSO buildings, once they age past AB 1482's own 15-year exemption for new construction, the statewide AB 1482 formula, not the city's ordinance, is what actually limits how much you can raise rent each year. For a large share of LA's post-1978 apartment stock, this CPI-based number is the real ceiling owners are working within.",
				],
			},
			{
				heading: 'The New Maximum, Effective August 1, 2026',
				paragraphs: [
					'For increases effective on or after August 1, 2026, the Los Angeles-Long Beach-Anaheim region’s CPI change came in at 3.7%, putting the maximum allowable increase at 8.7%, the CPI change plus 5%. That is up from the prior year’s cap of 8.0% (3.0% CPI plus 5%).',
				],
			},
			{
				heading: 'Which Number Applies, and When',
				paragraphs: [
					'Under the Tenant Relief Act amendment, the CPI figure that applies depends on the increase’s effective date. An increase effective before August 1, 2026 uses the prior year’s CPI change (3.0% for the LA-Long Beach-Anaheim region, an 8.0% maximum). An increase effective on or after August 1, 2026 uses the new figure (3.7%, an 8.7% maximum). All percentages are rounded to the nearest tenth of a point.',
					'These figures come from the Apartment Association of Greater Los Angeles (AAGLA), citing the U.S. Bureau of Labor Statistics and the California Department of Industrial Relations, and they are updated on this same cycle every year.',
				],
			},
			{
				heading: 'Why This Matters When You Are Buying or Selling',
				paragraphs: [
					'For a buyer underwriting a non-RSO, value-add deal, the AB 1482 cap is a real, legal ceiling on how quickly in-place rents can be brought to market, and it is worth confirming against the actual current figure rather than a remembered number from a prior year.',
					"For an owner deciding whether and when to push a rent increase, knowing the precise, current cap avoids both leaving money on the table and inadvertently exceeding a limit that moves every year on the same August 1 cycle.",
					'This is general market information, not legal advice. Confirm the applicable cap and its exact application to your property with your attorney or property manager before implementing any increase.',
				],
			},
		],
	},
	{
		slug: 'utility-bill-diligence-la-apartment-owners',
		title: 'Why Diligent LA Apartment Owners Track Their Utility Bills Every Month',
		seoTitle: 'Why LA Apartment Owners Should Track Utility Bills',
		description:
			'A quiet water leak can cost an owner $100K+ in property value. Two real LA examples, the cap rate math, and the monthly habit that catches it early.',
		date: '2026-09-14',
		sections: [
			{
				heading: 'An Expense Owners Often Overlook',
				paragraphs: [
					'Rent collection gets constant attention. Every owner knows exactly who paid, who is late, and what is owed. Utility bills rarely get the same scrutiny. They get paid on autopilot, whether by the owner directly or by a property management company, and the assumption is usually that the number is just what it is that month.',
					'That assumption is the problem. A water, sewer, or gas bill is not a fixed cost. It moves for real reasons, and one of the most common reasons is one nobody wants: a leak that started running and never got noticed.',
				],
			},
			{
				heading: 'The Real Risk: A Leak That Runs for Months',
				paragraphs: [
					'In our experience, the biggest risk is not a one-time billing error. It is usually a plumbing leak that starts quietly, does not get caught, and keeps running for months, sometimes closer to a year, before anyone connects it to the bill.',
					'A leak like that does not announce itself. It just shows up as a slightly higher number every month, easy to miss if nobody is actually comparing bills month over month.',
				],
			},
			{
				heading: 'What We See When We Take On a New Listing',
				paragraphs: [
					'When we first put together a Broker Opinion of Value, we work from normalized expenses, a reasonable estimate of what the property should be running. It is not until we actually sign the listing and pull the real bills, water, sewer, trash, insurance, that we get a true picture of how the property has actually been operating.',
					'This has happened to us more than once. In the last 12 months alone, it happened twice.',
					'On one property, a 10-unit building in Pico-Union managed by a professional property management company, we noticed a large jump in the water bill that had started roughly a year earlier and never came back down. We recommended bringing in a plumber to check the property for leaks. They found one. Once it was fixed, the water bill normalized almost immediately. That undetected leak cost the owner about $8,000 in extra water expense that could have been avoided if it had been caught when it started.',
					'On another property, a 7-unit building in Koreatown, the same pattern played out on a smaller scale. We caught the jump, recommended a plumber, and a leak was found and fixed. That one saved the owner roughly $4,000.',
				],
			},
			{
				heading: 'Translating an $8,000 Water Bill Into $114,000 of Lost Value',
				paragraphs: [
					'$8,000 or $4,000 a year does not sound like a lot of money on its own. But an apartment building is not valued on its expenses in isolation, it is valued on its net operating income, capitalized at a market cap rate. Using a rough 7% cap rate, that extra $8,000 a year in water expense translates to roughly $114,000 in suppressed property value. The $4,000 overspend translates to roughly $57,000.',
					'That is the part that catches most owners off guard. A leak that seems like a maintenance headache is actually a value problem, and at the cap rates apartment buildings trade at, a fairly small monthly overspend has an outsized, almost exponential effect on what the property is ultimately worth.',
				],
			},
			{
				heading: 'The Best Way to Catch It: Track Your Expenses as a Percentage',
				paragraphs: [
					'Our advice to owners is simple: do not just track whether a utility bill was paid, track what percentage of your total monthly expenses that bill represents, in a spreadsheet, updated every month.',
					'Watch that percentage over time. If your water bill jumps from making up roughly 35% of your monthly expenses one month to 45% the next, that kind of jump is a red flag on its own, regardless of the dollar amount, and it is reason enough to get a plumber out to check for leaks before it runs for another month, let alone another year.',
				],
			},
			{
				heading: 'Proactive Diligence Pays Off, Whether or Not You Are Selling',
				paragraphs: [
					'Even if you have no plans to sell right now, catching a leak early instead of a year later is real, ongoing savings straight to your bottom line. And if you are getting ready to bring a property to market, cleaning up an expense like this before you list is one of the more direct ways to protect, or improve, what you can ask for it.',
					'If you are not sure whether your property’s expenses are running the way they should be, we are glad to take a look.',
				],
			},
		],
	},
	{
		slug: '1031-exchange-into-triple-net-properties',
		title: 'Why LA Apartment Owners Are 1031 Exchanging Into Triple-Net Properties',
		seoTitle: '1031 Exchange Into Triple-Net (NNN) Properties for LA Owners',
		description:
			'How LA apartment owners use a 1031 exchange to move into passive triple-net (NNN) investments, with a real example: a 24-unit sale into two NNN properties.',
		date: '2026-08-28',
		sections: [
			{
				heading: 'What Is a 1031 Exchange?',
				paragraphs: [
					'A 1031 exchange, named for Section 1031 of the Internal Revenue Code, lets you sell an investment property and defer the capital gains tax you would otherwise owe, as long as you reinvest the proceeds into another investment property of equal or greater value. The tax isn’t eliminated; it’s deferred until you eventually sell without exchanging again.',
					'The catch is that you can never touch the sale proceeds directly. A Qualified Intermediary (QI) holds the funds from your sale and uses them to purchase your replacement property on your behalf, and the entire process runs against two strict IRS deadlines, shown below, that determine whether the exchange holds up.',
				],
			},
			{
				heading: 'When Active Management Stops Making Sense',
				paragraphs: [
					'Owning an apartment building in Los Angeles has gotten harder, not easier, over the last several years. Statewide rent control under AB 1482, local rent stabilization ordinances, rising insurance costs, and the day-to-day reality of tenant turnover and deferred maintenance have pushed a growing number of long-term owners to ask the same question: does this still make sense for me?',
					'For owners nearing retirement, managing a portfolio from out of state, or simply tired of the 2 a.m. phone calls, the answer is often no. But selling outright means a large capital gains tax bill. That is where a 1031 exchange into a triple-net (NNN) property comes in.',
				],
			},
			{
				heading: 'How a 1031 Exchange Makes the Move Tax-Deferred',
				paragraphs: [
					'Multifamily and commercial real estate both qualify as "like-kind" to each other under current tax code, which is what makes an apartment-to-NNN exchange possible in the first place. Once your relinquished property closes escrow, the clock starts on the two deadlines below. Both are hard cutoffs set by the IRS, not guidelines. We start sourcing replacement options before your sale even closes, specifically to protect that window rather than scramble against it.',
				],
			},
			{
				heading: 'Why Triple-Net (NNN) Properties Specifically',
				paragraphs: [
					'In a triple-net lease, the tenant, not the owner, is responsible for property taxes, insurance, and maintenance. For an owner used to fielding maintenance calls and coordinating repairs on an apartment building, that structure is the whole appeal: rent arrives, and there is no roof to fix.',
					'NNN properties are also typically leased to a single commercial tenant on a long-term lease, which means the day-to-day tenant management that comes with dozens of residential units simply goes away. And because NNN opportunities exist all over the country, an exchange out of an LA apartment building is also a natural way to diversify geographically and step outside California-specific rent control exposure entirely.',
				],
			},
			{
				heading: 'A Recent Example: One LA Building, Two NNN Properties',
				paragraphs: [
					'We recently guided a client through exactly this kind of exchange: she sold her 24-unit apartment building here in Los Angeles and exchanged the proceeds into two separate triple-net properties, one in Florida and one in Georgia. Splitting the exchange across two assets in two different states let her diversify both her tenant risk and her geographic exposure in a single transaction, while fully deferring the capital gains tax on the sale.',
					'As with any multi-property, multi-state exchange, the work was in the coordination: keeping both replacement acquisitions moving in parallel against the same 45- and 180-day clock, and working with NNN specialists in each market to get her comfortable with the tenant, lease terms, and location before committing.',
				],
			},
			{
				heading: 'Is an NNN Exchange Right for Your Building?',
				paragraphs: [
					'Not every owner should exchange into a triple-net property, and not every apartment building is the right one to sell right now. The first conversation is always about your goals: are you trying to stop managing property altogether, reduce your workload without fully exiting real estate, or move capital out of California? The right answer changes the strategy.',
					'If you are considering a sale and want to understand what a 1031 exchange into a passive NNN investment could look like for your specific building, we would be glad to walk through it with you.',
				],
			},
		],
	},
];
