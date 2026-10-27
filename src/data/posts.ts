// Insights / blog posts. Add entries here as content is written — src/pages/insights/[slug].astro
// renders each one automatically. Good remaining topics per the project brief: RSO updates,
// Measure ULA, long-tail submarket + process keywords.

// Numbers in the quarterly market update article come from src/data/marketUpdate.ts, which
// scripts/market-update.mjs generates from the CoStar export, so the text, tables, and FAQs stay in step.
import { MARKET_UPDATE as MU } from './marketUpdate';
const muMoney = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const muPct = (n: number) => `${n.toFixed(2)}%`;
const muBillion = (millions: number) => `$${(Math.round(millions / 10) / 100).toFixed(2)} billion`;
const muDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export type Post = {
	slug: string;
	title: string;
	seoTitle?: string; // shorter <title> tag (aim for 60 chars or fewer); falls back to `title`
	description: string; // also used as the meta description, so keep it to ~155 characters
	date: string; // ISO date
	image?: { src: string; alt: string; width: number; height: number }; // optional graphic shown under the date and used for social sharing
	sections: { heading: string; paragraphs: string[] }[];
};

const allPosts: Post[] = [
	{
		slug: 'how-to-choose-a-multifamily-broker-in-los-angeles',
		title: 'How to Choose the Best Multifamily Broker in Los Angeles',
		seoTitle: 'How to Choose the Best Multifamily Broker in Los Angeles',
		description:
			'Hiring a broker to sell your LA apartment building? Seven things to check, the questions to ask, and the red flags to watch for before you sign.',
		date: '2026-10-16',
		image: {
			src: '/images/insights/how-to-choose-multifamily-broker.webp',
			alt: 'Graphic: seven things to check before you hire a multifamily broker. Verify the track record, ask for recent local sales, and call references.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'The broker you hire affects your sale price, your tax outcome, and how smooth the process feels. It is worth interviewing more than one.',
					'Look for a specialist in apartment buildings, with closed sales you can verify, recent experience in your neighborhood, and a clear plan for finding buyers.',
					'Be careful with the broker who offers the highest price. A pricing opinion is only useful if it is backed by comparable sales and a realistic net-proceeds estimate.',
					'Ask for references and check the broker’s license before you sign anything.',
				],
			},
			{
				heading: 'Why Apartment Buildings Need a Specialist',
				paragraphs: [
					'Selling an apartment building is a different job from selling a house or a retail center. The buyer is an investor, so the price rests on income, expenses, and risk. In Los Angeles, rent control, building age, and local taxes can move the number by hundreds of thousands of dollars. A broker who works mostly in other property types will be learning those rules on your sale.',
					'It also affects who sees your building. Apartment buyers work with brokers they already know, and the best offers often come from investors who track the market closely.',
				],
			},
			{
				heading: '1. A Track Record You Can Verify',
				paragraphs: [
					'Ask for a list of recent apartment sales, with addresses, unit counts, and prices, and focus on buildings similar to yours in size, age, and neighborhood. Then check it. Sale prices of recorded transactions are public, and a broker who is proud of a track record will welcome the check.',
					'Pay attention to how the broker was involved. Some brokers may count deals they only assisted with, or deals from a previous firm. It is fair to ask which ones they represented directly and when.',
					'As an example of what a verifiable record looks like, our [closed sales](/closed-sales/) page lists every sale with its address, unit count, size, and price, and more than 1,390 units and $345 million in closed sales are behind it.',
				],
			},
			{
				heading: '2. Knowledge of Your Neighborhood',
				paragraphs: [
					'Los Angeles is a collection of very different markets. A building in Koreatown trades on different numbers from one in Santa Monica or North Hollywood, and the right comparable sales are in your own area, not across the county. Ask the broker for the three most relevant recent sales near your building and why they apply.',
					'A broker who knows the area can also tell you what local buyers care about, from walkability and transit to the condition of the neighborhood’s building stock. We publish real sales figures for each of our [neighborhoods](/submarkets/), including median price per unit and typical cap rates, so you can see what a local broker should already know.',
				],
			},
			{
				heading: '3. An Honest Pricing Opinion',
				paragraphs: [
					'Some brokers win listings by promising a high price. That can leave you with a building that sits on the market, then sells for less after a price cut, having lost weeks and credibility with buyers.',
					'A trustworthy opinion of value shows its work. It should include comparable sales, the cap rate and gross rent multiplier it assumes, your income and expenses, and an estimate of what you would net after taxes and costs. If a broker cannot explain how they arrived at the number, treat it as a sales pitch. Our guide to [how apartment buildings are valued](/insights/how-to-value-an-apartment-building-in-los-angeles/) explains what to look for, and our [free property value calculator](/property-value/) gives you a quick range to compare against.',
				],
			},
			{
				heading: '4. A Plan for Reaching Buyers',
				paragraphs: [
					'Ask the broker how they will find buyers, not only whether they will list the building. A good answer covers a database of active investors, relationships with other brokers, an accurate offering memorandum, an open house, and in some cases an off-market approach.',
					'Two examples from our own work show how different plans fit different buildings. At 1513 Arlington Ave, an open house for brokers and buyers drew offers from 12 buyers, as we describe in the [case study](/case-studies/1513-arlington-ave-arlington-heights-apartments/). At 236 S Bonnie Brae St, a confidential off-market sale to a proven repeat buyer worked better for a large, quietly marketed building, as described in that [case study](/case-studies/236-s-bonnie-brae-st-westlake-apartments/).',
				],
			},
			{
				heading: '5. Knowledge of the Rules and the Tax Side',
				paragraphs: [
					'In Los Angeles, a good broker has to understand more than the real estate. Rent stabilization and statewide rent caps shape your income and how buyers underwrite your building, as we explain in our guides to the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/) and to [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/). The City’s Measure ULA transfer tax can change what you net on a larger sale, as covered in our [Measure ULA guide](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/).',
					'If you plan to defer your tax with a 1031 exchange, ask whether the broker can help you find replacement property and work with your exchange advisor. If you are selling a building from an estate or trust, ask about their experience with that process, which has its own timing and paperwork. Brokers are not tax advisors, so a good one will also work with your CPA. See our guides to [1031 exchanges](/1031-exchanges/), [trust and estate sales](/trust-and-estate-sales/), and [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/).',
				],
			},
			{
				heading: '6. Who Will Actually Do the Work',
				paragraphs: [
					'In some firms, the person who pitches you is not the person who handles your sale. Ask who will prepare the offering memorandum, return your calls, and negotiate with buyers, and how often you can expect an update. Ask how many buildings the broker is handling at once.',
					'At Highlight Multifamily Group, the two co-founders, Josh Kaplan and Troy Lucero, work every listing themselves. They make the calls to investors and other brokers directly, negotiate directly with buyers, and are the main contacts on every deal. They follow up persistently, collect buyer feedback, and relay it to the selling client. You can read more about them on our [team page](/about/).',
				],
			},
			{
				heading: '7. References and Reviews',
				paragraphs: [
					'Ask for the names of past sellers you can call, preferably owners of buildings like yours. Online reviews are a useful start, but a phone call tells you how the broker handled the hard moments, such as an offer that fell through or a tenant issue. You can read what our clients have said on our [testimonials](/testimonials/) page.',
				],
			},
			{
				heading: 'Questions to Ask Every Broker You Interview',
				paragraphs: [
					'Which recent apartment sales have you personally closed, and can I see the addresses and prices?',
					'What are the three best comparable sales for my building, and how did you choose them?',
					'What price do you recommend, and what would I net after taxes and costs?',
					'How will you market the building, and who is likely to buy it?',
					'Who will handle my sale day to day, and how often will I hear from you?',
					'What are your listing terms, including the commission, the length of the agreement, and any fees?',
					'Can I speak with two or three owners you have represented?',
				],
			},
			{
				heading: 'Red Flags',
				paragraphs: [
					'Watch for a price far above every other opinion, with no comparable sales to support it. Be careful with pressure to sign quickly, vague answers about the broker’s own track record, a long listing agreement with no way out, and a reluctance to provide references.',
					'You can also check that a broker is licensed through the [California Department of Real Estate license lookup](https://www2.dre.ca.gov/PublicASP/pplinfo.asp).',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'We would be glad to be one of the brokers you interview. Start with a quick range from our [free property value calculator](/property-value/), then request a free [Broker Opinion of Value](/contact/?intent=bov) and we will walk you through our approach, our recent sales, and your options. If you are still deciding whether to sell, read our [seven questions to ask first](/insights/should-i-sell-my-la-apartment-building/).',
					'This article is general information, not legal or financial advice.',
				],
			},
		],
	},
	{
		slug: 'how-to-value-an-apartment-building-in-los-angeles',
		title: 'How to Value an Apartment Building in Los Angeles',
		seoTitle: 'How to Value an LA Apartment Building: 10 Factors Buyers Use',
		description:
			'How LA apartment buildings are valued: NOI, cap rate, GRM, price per unit, rent control, and condition, with real 2026 sales figures by neighborhood.',
		date: '2026-10-16',
		image: {
			src: '/images/insights/how-to-value-apartment-building.webp',
			alt: "Graphic: income drives the value of an apartment building. Net operating income, cap rate, and real comparable sales.",
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Buyers value an apartment building mainly on its income, not its looks or its asking price. The core measure is net operating income (NOI) divided by a market cap rate, checked against recent comparable sales.',
					'In Los Angeles, rent control and building age change the math. Buildings built before 1978 (rent stabilized) trade differently from newer ones, so comparable sales have to match.',
					'Condition, deferred maintenance, and in-place rents versus market rents move the price as much as the headline numbers do.',
					'A calculator or a rule of thumb gives you a range. A Broker Opinion of Value built on your actual rent roll and expenses gives you a number you can plan around.',
				],
			},
			{
				heading: '1. Net Operating Income: The Core of Value',
				paragraphs: [
					'Net operating income is the building’s collected rent and other income, minus the cost of operating it. It does not include your mortgage payment, depreciation, or income taxes. Because a buyer is paying for that income stream, NOI drives price more than any other number.',
					'Two things trip owners up. First, buyers use realistic expenses, not just what you happen to pay today. They will re-underwrite property taxes, because California reassesses a building when it sells, and our offering memorandums typically assume about 1.2% of the sale price. Second, hidden expense problems come out in due diligence, which is why we recommend owners watch their bills, as we explain in our article on [tracking utility bills](/insights/utility-bill-diligence-la-apartment-owners/).',
				],
			},
			{
				heading: '2. Capitalization Rate (Cap Rate)',
				paragraphs: [
					'The cap rate is NOI divided by price. Flip it around and you get a quick estimate of value: NOI divided by the cap rate. For example, a building with $100,000 of NOI that buyers are pricing at a 5.5% cap rate is worth about $1.8 million. A lower cap rate means buyers are paying more for each dollar of income.',
					'Cap rates are not one number across Los Angeles. In 2026 sales through September, rent-stabilized buildings (built before 1978) with a recorded cap rate traded at a typical range of 5.86% to 7.34% in Koreatown, 5.55% to 6.98% in North Hollywood, and 4.81% to 5.96% in Santa Monica. We publish these ranges, with the number of sales behind each, on our [neighborhood pages](/submarkets/).',
				],
			},
			{
				heading: '3. Gross Rent Multiplier (GRM)',
				paragraphs: [
					'The gross rent multiplier is price divided by annual gross rent. It is a fast screen, and buyers and brokers use it to compare buildings at a glance, but it ignores expenses, so two buildings with the same GRM can have very different NOI.',
					'A real example: our listing at [3815 Don Tomaso Dr](/listings/3815-don-tomaso-dr-los-angeles-ca-90008/) is priced at $1,300,000, which is a 10.35 GRM and a 6.04% cap rate on in-place rents. The two numbers tell different parts of the story, which is why we look at both.',
				],
			},
			{
				heading: '4. Price Per Unit and Price Per Square Foot',
				paragraphs: [
					'Price per unit and price per square foot are the quickest ways to compare a building with recent sales. They are sanity checks, not valuations, because they ignore income, condition, and rent levels.',
					'They also vary widely by neighborhood. Among rent-stabilized buildings sold so far in 2026, the median price per unit was about $173,700 in Koreatown, $189,500 in North Hollywood, and $388,300 in Santa Monica, and the median price per square foot was $230, $247, and $398. A figure from the wrong neighborhood can be off by hundreds of thousands of dollars.',
				],
			},
			{
				heading: '5. In-Place Income Versus Pro Forma',
				paragraphs: [
					'Buyers look at two sets of numbers: what the building earns today (in-place) and what it could earn at market rents (pro forma). The gap between them is called loss to lease, and it is where much of the negotiation happens.',
					'At 3815 Don Tomaso, in-place rents sit about 47% below market, a loss to lease of $4,904 per month. Reaching market rents through normal turnover would lift NOI from $78,553 to $129,231 and the cap rate from 6.04% to 9.94%. Buyers will pay for that upside, but only partly, because under rent control they cannot capture it until units turn over. We explain how in our guide to [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/).',
				],
			},
			{
				heading: '6. Comparable Sales and Market Evidence',
				paragraphs: [
					'The strongest evidence of value is what similar buildings actually sold for. A good comparable is recent, in the same neighborhood, close to your size and age, and has the same rent-control status. Sales of buildings built before 1978 and after 1978 should not be mixed, because the price per unit gap is large: across LA County in 2026 the median was about $220,000 per unit for pre-1978 buildings and about $331,000 for newer ones.',
					'You can see how we have priced and sold buildings across Los Angeles on our [closed sales](/closed-sales/) page.',
				],
			},
			{
				heading: '7. Physical Condition and Capital Expenses',
				paragraphs: [
					'Buyers subtract what they expect to spend. Roofs, plumbing, electrical systems, and required inspections all come off the price. At 1513 Arlington Ave, for example, the building had Federal Pacific electrical sub-panels that insurers increasingly require owners to replace, plus a state-mandated balcony inspection under SB 721. Our seller did not want to pay for either before closing, so we structured the sale for the buyer to take them on, as described in the [case study](/case-studies/1513-arlington-ave-arlington-heights-apartments/).',
					'In general, we advise sellers against spending money on the property before a sale, because they rarely get it back from buyers. Experienced investors have their own plans and cost-effective ways to bring a building up to market.',
				],
			},
			{
				heading: '8. Rent Rules and Regulation',
				paragraphs: [
					'Rent control limits how fast income can grow, so it directly affects value. Buildings built before October 1, 1978 are generally covered by the City’s Rent Stabilization Ordinance, and newer buildings fall under the statewide cap explained in our article on the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/).',
					'Taxes on the sale itself matter too. In the City of Los Angeles, a building sold above about $5.4 million is hit by Measure ULA, which can change your net proceeds sharply. Read our [Measure ULA guide](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/) before pricing a building near that line.',
				],
			},
			{
				heading: '9. Financing and the Buyer Pool',
				paragraphs: [
					'Interest rates and lending standards decide what buyers can pay. When financing is expensive, cap rates rise and values fall, and when it loosens, the reverse happens. A building also sells for more when it reaches the widest pool of qualified buyers, including investors who are exchanging out of another property.',
				],
			},
			{
				heading: '10. How the Building Is Positioned for Sale',
				paragraphs: [
					'The same building can sell for different prices depending on how it is marketed. An accurate offering memorandum, an open house for brokers and buyers, and a clear story about upside all help. At 1513 Arlington Ave, an open house for brokers and buyers drew offers from 12 buyers.',
				],
			},
			{
				heading: 'What Is Your Building Worth?',
				paragraphs: [
					'For a quick range, try our [free property value calculator](/property-value/), which uses real 2026 sales in your neighborhood and splits rent-stabilized buildings from newer ones. For a number you can plan around, request a free [Broker Opinion of Value](/contact/?intent=bov) and we will build it from your actual rent roll, expenses, and condition. If you are still deciding whether to sell, start with our [seven questions to ask first](/insights/should-i-sell-my-la-apartment-building/).',
					'Sales figures are medians or ranges from closed LA County multifamily transactions in 2026 through September, and only appear where enough sales reported the figure. This article is general information, not an appraisal or investment advice.',
				],
			},
		],
	},
	{
		slug: 'should-i-sell-my-la-apartment-building',
		title: 'Should I Sell My Apartment Building? 7 Questions to Ask First',
		seoTitle: 'Should I Sell My LA Apartment Building? 7 Questions to Ask',
		description:
			'Thinking about selling your LA apartment building? Seven questions about goals, value, taxes, costs, and timing to answer before you decide.',
		date: '2026-10-15',
		image: {
			src: '/images/insights/should-i-sell-7-questions.webp',
			alt: "Graphic: 7 questions to ask before you decide to sell your apartment building, from your goals to your timeline.",
			width: 1200,
			height: 900,
		},
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
		seoTitle: 'Selling a Rent-Controlled Apartment Building in Los Angeles',
		description:
			'Selling a rent-controlled apartment building in Los Angeles? How rent control and long-term tenants affect your price, your buyers, and your timeline.',
		date: '2026-10-15',
		image: {
			src: '/images/insights/selling-with-rent-controlled-tenants.webp',
			alt: "Graphic: yes, you can sell an apartment building with rent-controlled tenants. Leases carry over, rent control still applies, and buyers price in the rent gap.",
			width: 1200,
			height: 900,
		},
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
				heading: 'Choosing a Broker to Sell a Rent-Controlled Building',
				paragraphs: [
					'A rent-controlled building is priced on its rents in place, its loss to lease, and its tenants, so the broker you hire needs real experience with those details. Ask whether they have sold similar rent-stabilized buildings in your neighborhood recently, how they would present your rent roll and the upside to buyers, and which buyers they would approach, since some investors specialize in buildings with long-term, below-market tenants.',
					'Our guide on [how to choose a multifamily broker](/insights/how-to-choose-a-multifamily-broker-in-los-angeles/) lists seven things to check before you sign, and our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/) shows how the process runs from pricing to closing.',
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
		image: {
			src: '/images/insights/capital-gains-depreciation-recapture.webp',
			alt: "Graphic: federal capital gains rates of 0%, 15%, or 20%, depreciation recapture of up to 25%, and California taxing gains as ordinary income.",
			width: 1200,
			height: 900,
		},
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
					'Residential rental property is generally depreciated over 27.5 years, which gives owners a deduction every year they hold it. When you sell, the part of your gain that comes from that depreciation is not taxed at the regular capital gains rates. The IRS treats it as unrecaptured section 1250 gain, taxed at a maximum federal rate of 25%. The IRS generally measures this by the depreciation you were allowed to take, whether or not you claimed it, so it is not something an owner can avoid by skipping the deductions.',
					'In plain terms: the depreciation deductions lowered your taxes while you owned the building, and when you sell, the IRS takes some of that benefit back. The amount of depreciation you took becomes the first slice of your gain and is taxed at up to 25%; any growth in price beyond that is taxed at the regular capital gains rates. The example below walks through the numbers.',
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
		image: {
			src: '/images/insights/measure-ula-thresholds.webp',
			alt: "Graphic: a building sold for $5,400,000 owes no Measure ULA tax, but at $5,400,001 the 4% tax applies to the full price, about $216,000.",
			width: 1200,
			height: 900,
		},
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
				heading: 'Own a Building in West Hollywood or Santa Monica?',
				paragraphs: [
					'Measure ULA stops at the City of Los Angeles line. West Hollywood is a separate city, so ULA does not apply there, and West Hollywood has no city transfer tax of its own. See our [West Hollywood multifamily page](/submarkets/west-hollywood/) for a side-by-side example. Santa Monica is also exempt from ULA but has its own version, Measure GS, which takes 5.6% of the full price at $8 million and up. Our [Santa Monica page](/submarkets/santa-monica/) shows how that line works.',
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
					'If your building could land near $5.4 million or $10.9 million, the time to look at the math is before you set a price. Try our [Measure ULA calculator](/measure-ula-calculator/) to see your transfer taxes and net proceeds at any price, start with our [free property value calculator](/property-value/) for a quick range, then request a [free Broker Opinion of Value](/contact/?intent=bov) and we will show you what you would net at different prices and closing dates. If you are deciding whether to sell at all, read our guide to [holding or selling under Measure ULA](/insights/measure-ula-hold-or-sell-la-apartment-building/).',
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
		image: {
			src: '/images/insights/ab-1482-rent-cap.webp',
			alt: "Graphic: the AB 1482 rent cap is the CPI change of 3.7% plus 5%, a maximum annual increase of 8.7%.",
			width: 1200,
			height: 900,
		},
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
		image: {
			src: '/images/insights/utility-bill-leak-value.webp',
			alt: "Graphic: an undetected leak costing $8,000 a year can suppress property value by about $114,000 at a 7% cap rate.",
			width: 1200,
			height: 900,
		},
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
		image: {
			src: '/images/insights/1031-exchange-triple-net.webp',
			alt: "Graphic: a 1031 exchange from apartments into triple-net properties, with 45 days to identify and 180 days to close.",
			width: 1200,
			height: 900,
		},
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
					'We recently guided a client through exactly this kind of exchange: she sold her 24-unit apartment building here in Los Angeles ([1136 S Alvarado St](/closed-sales/1136-s-alvarado-st-los-angeles-ca-90006/)) and exchanged the proceeds into two separate triple-net properties, one in Florida and one in Georgia. Splitting the exchange across two assets in two different states let her diversify both her tenant risk and her geographic exposure in a single transaction, while fully deferring the capital gains tax on the sale.',
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
	{
		slug: 'la-apartment-cap-rates-and-prices-by-neighborhood-2026',
		title: 'LA Apartment Cap Rates and Prices Per Unit by Neighborhood, 2026',
		seoTitle: 'LA Apartment Cap Rates and Price Per Unit by Neighborhood',
		description:
			'What LA apartment buildings sold for in 2026: median price per unit, price per SF, and cap rate ranges for our neighborhoods, from real sales.',
		date: '2026-10-21',
		image: {
			src: '/images/insights/la-apartment-cap-rates-by-neighborhood.webp',
			alt: 'Graphic: what LA apartment buildings really sold for. Median price per unit and cap rate ranges by neighborhood, from real 2026 sales.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'What a Cap Rate Tells You',
				paragraphs: [
					'A capitalization rate, or cap rate, is a building’s net operating income (NOI) divided by its price. If a building earns $100,000 in NOI after operating expenses and sells for $1,600,000, its cap rate is 6.25%. Buyers use it to compare buildings quickly: the lower the cap rate, the more the buyer is paying for each dollar of income.',
					'Cap rates are not the same everywhere. They move with the neighborhood, the age of the building, how much rent control limits future rent growth, the building’s condition, and interest rates. That is why one citywide or countywide number is not very useful, and why we show the neighborhoods one at a time below.',
				],
			},
			{
				heading: 'Where This Data Comes From',
				paragraphs: [
					'The figures below come from sold multifamily properties in Los Angeles County in 2026, taken from CoStar sales data and analyzed by Highlight Multifamily Group. We split the sales by building age, because older buildings generally fall under rent stabilization while buildings built in 1978 or later fall under the statewide AB 1482 cap, and the two groups trade differently. Santa Monica, West Hollywood, and Beverly Hills have their own rent control rules, separate from the City of Los Angeles.',
					'We only show a number when enough sales stand behind it. If a neighborhood did not have enough sales or reported cap rates, the table says so, rather than guessing.',
				],
			},
			{
				heading: 'Pre-1978 (RSO) Buildings by Neighborhood',
				paragraphs: [
					'Older buildings make up most of the sales, so this is the table most owners will care about. Neighborhoods are listed from the highest median price per unit to the lowest.',
				],
			},
			{
				heading: 'Newer Buildings (1978 and Later)',
				paragraphs: [
					'Buildings built in 1978 or later are less common, so only neighborhoods with at least three sales appear here. Where both groups have enough sales, newer buildings generally trade at higher prices per unit than older buildings in the same neighborhood, partly because their rents are less restricted.',
				],
			},
			{
				heading: 'How to Read These Numbers',
				paragraphs: [
					'Price per unit is the quickest way to compare buildings of different sizes, but it ignores how big the units are. Price per square foot adjusts for that. A building of large two-bedroom units and a building of small studios can have the same price per unit and very different values.',
					'Notice how far apart the neighborhoods are. Westside markets such as Santa Monica and Brentwood trade at far higher prices per unit than Koreatown, Westlake, or Pico-Union, and Santa Monica’s cap rates run lower than most of the others. Buyers accept a lower income yield where they expect stronger long-term demand and rent growth.',
					'Cap rates also vary inside a single neighborhood, which is why we show a range, not one number. The range is the middle half of the sales that reported a cap rate, so a few unusually high or low sales do not distort it.',
				],
			},
			{
				heading: 'Why Your Building May Sell Above or Below the Range',
				paragraphs: [
					'A neighborhood range is a starting point, not a price for your building. Several things move a building toward the high or low end.',
					'Rents compared with the market. Buildings with rents well below market are valued on the rents in place, with some credit for the upside, which is why we cover the loss to lease in our article on [selling with rent-controlled tenants](/insights/selling-la-apartment-building-with-tenants-rent-control/).',
					'Condition and deferred maintenance. Roofs, plumbing, electrical, and required retrofits affect what a buyer will pay.',
					'Unit mix, parking, and lot size. Larger units, on-site parking, and extra land can all add value, and a lot that could support new construction can change the math entirely.',
					'The buyer and the timing. A 1031 exchange buyer on a deadline, a change in interest rates, or a competitive bidding process can all shift the price.',
				],
			},
			{
				heading: 'Turn the Range Into a Number for Your Building',
				paragraphs: [
					'For an estimate built on your own rents and expenses, use our [free property value calculator](/property-value/), which draws on the same sales data. For a number you can plan around, request a free [Broker Opinion of Value](/contact/?intent=bov). Our article on [how buyers value an LA apartment building](/insights/how-to-value-an-apartment-building-in-los-angeles/) walks through the math step by step, and each neighborhood page, including [Koreatown](/submarkets/koreatown/), [Silver Lake](/submarkets/silver-lake/), and [Santa Monica](/submarkets/santa-monica/), has the full local breakdown. You can see them all on our [submarkets](/submarkets/) page.',
				],
			},
			{
				heading: 'About This Data',
				paragraphs: [
					'Sales data goes stale, so we refresh it every quarter or two as new sales close. Cap rates in public and commercial databases are sometimes incomplete or estimated, so treat the ranges as a guide, not a guarantee. This article is general information, not an appraisal or investment advice.',
				],
			},
		],
	},
	{
		slug: 'how-to-sell-an-apartment-building-in-los-angeles-step-by-step',
		title: 'How to Sell an Apartment Building in Los Angeles: The Step-by-Step Process',
		seoTitle: 'How to Sell an LA Apartment Building: Step by Step',
		description:
			'The steps to sell an LA apartment building, from pricing and paperwork to offers, escrow, and closing, plus how long each stage typically takes.',
		date: '2026-10-21',
		image: {
			src: '/images/insights/how-to-sell-apartment-building-la.webp',
			alt: 'Graphic: eight steps from decision to closing. Prepare with goals, value, broker, and documents. Market and review offers. Close through escrow and due diligence.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'How Long Does It Take?',
				paragraphs: [
					'A typical Los Angeles apartment sale takes 60 to 90 days from listing to closing: a few weeks of marketing, then 30 to 45 days of escrow. The preparation before you list comes on top of that, and it is time well spent. Every deal is different, but the steps below are the same on almost every sale.',
				],
			},
			{
				heading: 'Step 1: Decide What You Want From the Sale',
				paragraphs: [
					'Start with your goal: the highest price, a certain closing date, a smooth 1031 exchange, a quiet sale, or a clean exit. Your goal shapes the pricing, the marketing, and the timeline. If you are still deciding whether to sell at all, our [seven questions to ask first](/insights/should-i-sell-my-la-apartment-building/) is a good place to start.',
				],
			},
			{
				heading: 'Step 2: Find Out What the Building Is Worth',
				paragraphs: [
					'Get a realistic number before you commit to anything. Start with our [free property value calculator](/property-value/) for a quick range, then ask for a Broker Opinion of Value, which looks at your actual rents, condition, and comparable sales. We explain how it differs from a formal appraisal in our article on [Broker Opinion of Value vs. appraisal](/insights/broker-opinion-of-value-vs-appraisal-apartment-building/). A price that matches the market draws more and better offers than one that is too high and has to be cut later.',
				],
			},
			{
				heading: 'Step 3: Choose a Broker and Sign a Listing Agreement',
				paragraphs: [
					'The broker you hire runs the process, so choose carefully. Our guide on [how to choose a multifamily broker](/insights/how-to-choose-a-multifamily-broker-in-los-angeles/) covers what to check. The listing agreement sets how long the listing lasts, the commission, and what happens if the building sells to a buyer you already know. Read it closely, and negotiate the terms before you sign.',
				],
			},
			{
				heading: 'Step 4: Gather Your Documents',
				paragraphs: [
					'Buyers ask for the same items on day one, and having them ready keeps momentum. Typically that means a current rent roll, the leases, and the last two to three years of income and expenses, along with your utility bills, property tax bill, insurance, permits, inspection reports, and records of major repairs. In Los Angeles, have your Rent Stabilization Ordinance registration and fee records ready as well.',
					'Accurate numbers matter more than polished ones, because buyers check everything against your records and the leases. Utility bills deserve special attention, as we explain in our article on [why diligent owners track them every month](/insights/utility-bill-diligence-la-apartment-owners/).',
				],
			},
			{
				heading: 'Step 5: Market the Building',
				paragraphs: [
					'Your broker prepares an offering memorandum that presents the building’s income, expenses, rent roll, unit mix, photos, and the case for buying it, and then gets it in front of buyers. Good marketing means calling investors and other brokers directly, not just posting a listing and waiting. It also includes professional photos, often a property video, and clear answers to the questions buyers always ask.',
				],
			},
			{
				heading: 'Step 6: Review Offers and Negotiate',
				paragraphs: [
					'Offers usually arrive over a few weeks. Price matters, but so do the buyer’s financing, the length of the due diligence period, the size of the deposit, and how likely the buyer is to close. The highest offer is not always the best one. Your broker should help you compare offers on net proceeds and certainty, and negotiate the terms of the purchase agreement before you accept.',
				],
			},
			{
				heading: 'Step 7: Open Escrow and Go Through Due Diligence',
				paragraphs: [
					'After you accept an offer, escrow opens and the buyer begins due diligence: reviewing the leases, the financials, and the physical condition, often with inspections and tenant estoppels. This is the stage where price reductions are most often requested, so the accurate documents from Step 4 pay off. The buyer’s lender will usually order an appraisal during this period, which is one more reason to price the building on real comparable sales.',
				],
			},
			{
				heading: 'Step 8: Close',
				paragraphs: [
					'In the final weeks, the buyer removes contingencies and funds the purchase, and escrow records the deed and sends you your net proceeds. Plan for the costs of selling, including the broker’s commission, transfer taxes, and, for buildings in the City of Los Angeles priced above $5.4 million, [Measure ULA](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/). If you are doing a 1031 exchange, remember the clock: you have [45 days to identify and 180 days to close](/1031-exchanges/) on your replacement property, so line up that plan before you list. The calendar can also affect your taxes, as we explain in our article on [selling before year-end](/insights/selling-la-apartment-building-before-year-end/).',
				],
			},
			{
				heading: 'Where Sales Go Wrong',
				paragraphs: [
					'Three problems come up again and again: pricing too high at the start, rent roll or expense numbers that do not hold up in due diligence, and a buyer whose financing falls through. All three are easier to prevent than to fix, which is why the early steps matter most.',
				],
			},
			{
				heading: 'Ready to Start?',
				paragraphs: [
					'We guide LA apartment owners through each of these steps. To see where your building stands, request a free [Broker Opinion of Value](/contact/?intent=bov) or start with the [calculator](/property-value/). This article is general information, not legal or tax advice. Please talk with your attorney and CPA about your situation.',
				],
			},
		],
	},
	{
		slug: 'broker-opinion-of-value-vs-appraisal-apartment-building',
		title: 'Broker Opinion of Value vs. Appraisal: Which Do You Need to Sell?',
		seoTitle: 'Broker Opinion of Value vs. Appraisal: Apartment Buildings',
		description:
			'A Broker Opinion of Value and an appraisal answer different questions. What each is, what it costs, and which one an LA apartment seller needs first.',
		date: '2026-10-21',
		image: {
			src: '/images/insights/bov-vs-appraisal.webp',
			alt: 'Graphic: two valuations, two purposes. A Broker Opinion of Value sets your price. An appraisal supports the buyer’s loan. Start with a BOV.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'A Broker Opinion of Value (BOV) is a broker’s estimate of what your building would likely sell for. An appraisal is a formal valuation by a licensed appraiser, usually ordered by a lender. They serve different purposes.',
					'A BOV helps you decide whether and when to sell and what to list for. An appraisal comes up later, when a buyer’s lender needs one to approve a loan.',
					'Most sellers need a BOV first, and they usually do not need to order an appraisal at all.',
				],
			},
			{
				heading: 'What a Broker Opinion of Value Is',
				paragraphs: [
					'A BOV is prepared by a real estate broker who works in your market. It looks at your building’s actual rents and expenses, its condition and unit mix, and recent comparable sales, and arrives at a likely sale price or price range. It also reflects things a formal report may not, such as which buyers are active right now and how they are pricing buildings like yours.',
					'A BOV is not a formal appraisal, and it is not a guarantee of what a buyer will pay. It is a professional opinion, grounded in the market, about where your building is likely to sell.',
				],
			},
			{
				heading: 'What an Appraisal Is',
				paragraphs: [
					'An appraisal is a formal, written opinion of a property’s market value prepared by a licensed or certified appraiser who follows professional standards. Lenders require one before they make a loan, so the buyer’s lender will order an appraisal of your building during escrow. The appraiser works for the lender, not for you.',
					'Owners also use appraisals in situations that call for a formal valuation, such as an estate, a partnership buyout, or a dispute.',
				],
			},
			{
				heading: 'The Main Differences',
				paragraphs: [
					'Who prepares it. A broker prepares a BOV. A licensed appraiser prepares an appraisal.',
					'Why it exists. A BOV helps you price and market a sale. An appraisal supports a loan or another formal need.',
					'What it costs. Brokers typically provide a BOV at no charge when you are considering a sale, while an appraisal is paid for, usually by whoever needs it.',
					'How it is used. A BOV is a planning and pricing tool with no formal standing. An appraisal is the document lenders and other institutions rely on.',
				],
			},
			{
				heading: 'Which One Do You Need Before Selling?',
				paragraphs: [
					'If you are deciding whether to sell or setting your asking price, you want a BOV. It is faster, it costs you nothing from a broker, and it is built around how buyers are actually pricing buildings right now. You do not need an appraisal to list a building.',
					'If you need a formal valuation for a reason other than a typical sale, such as an estate or a legal dispute, ask your attorney or CPA whether an appraisal is required.',
				],
			},
			{
				heading: 'Why the Buyer’s Appraisal Still Matters to Your Sale',
				paragraphs: [
					'Even though you do not order it, the buyer’s lender will. If the appraiser values the building below the agreed price, the buyer may have to bring more cash, ask for a lower price, or walk away if their agreement allows it. That is why a well-supported price at the start matters: a price backed by real comparable sales is more likely to hold up when the appraiser checks it.',
					'A BOV that uses recent sales and your actual rent roll helps you set that price. We use the same kind of neighborhood sales data that appears in our article on [LA apartment cap rates and prices by neighborhood](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/).',
				],
			},
			{
				heading: 'What to Expect From Our BOV',
				paragraphs: [
					'Our Broker Opinion of Value is free and confidential, and it is grounded in your building’s actual rents, condition, and unit mix. We will walk you through how your rents, tenants, and timeline affect the price, so you understand the number and not just the total. To see how buyers think about value, read our guide on [how to value an LA apartment building](/insights/how-to-value-an-apartment-building-in-los-angeles/).',
					'You can start with the [free property value calculator](/property-value/) for a quick range, then request a [Broker Opinion of Value](/contact/?intent=bov) when you want a number you can plan around. This article is general information, not legal, tax, or appraisal advice.',
				],
			},
		],
	},
	{
		slug: 'selling-a-fourplex-or-small-apartment-building-in-los-angeles',
		title: 'Selling a Fourplex or Small Apartment Building in Los Angeles',
		seoTitle: 'Selling a Fourplex or Small Apartment Building in LA',
		description:
			'Selling a fourplex or small apartment building in Los Angeles? How buyers, financing, rent control, and pricing differ from larger buildings.',
		date: '2026-10-21',
		image: {
			src: '/images/insights/selling-fourplex-small-building.webp',
			alt: 'Graphic: a fourplex sells differently. Two kinds of buyers, owner-occupants and investors. Buildings of one to four units often use residential loans. Price with local comparable sales.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Buildings with two to four units sell differently from larger apartment buildings. The buyers, the financing, and the way the price is set are all different.',
					'Many small-building buyers are owner-occupants or smaller investors who finance with a residential loan, while buildings with five or more units are financed with commercial loans and valued mostly on income.',
					'Accurate rents, organized records, and a clear picture of the building’s condition matter just as much in a small sale as in a large one.',
				],
			},
			{
				heading: 'Who Buys a Fourplex',
				paragraphs: [
					'Fourplexes and other two-to-four-unit buildings attract two main kinds of buyers. Owner-occupants live in one unit and rent out the rest, which can let them put less money down than an investor would. Smaller investors, including owners exchanging out of other property, buy for the income and the long-term appreciation.',
					'Because the buyer pool includes people who want the property as a place to live, small buildings can sometimes sell for more than their income alone would support.',
				],
			},
			{
				heading: 'How Financing Differs',
				paragraphs: [
					'In general, buildings with up to four units can be financed with residential mortgages, while buildings with five or more units need commercial loans. A residential loan leans heavily on the buyer’s income and credit, and the property’s own income plays a smaller role. A commercial loan looks hard at the building’s net operating income and cap rate.',
					'That difference changes who can buy your building and how a lender’s appraisal will treat it, so it is worth knowing which side of the line your building falls on.',
				],
			},
			{
				heading: 'How the Price Is Set',
				paragraphs: [
					'Small buildings are usually priced by comparing recent sales of similar buildings nearby, using price per unit, price per square foot, and the gross rent multiplier, which is the price divided by the yearly rent. Larger buildings lean more on net operating income and cap rate.',
					'For a fourplex, the most useful comparables are other small buildings in the same neighborhood, not large apartment complexes. A [Broker Opinion of Value](/contact/?intent=bov) built on those comparables and your own rents is the most reliable way to set a price, and our article on [how buyers value an apartment building](/insights/how-to-value-an-apartment-building-in-los-angeles/) explains the main measures.',
				],
			},
			{
				heading: 'Rent Control Still Applies',
				paragraphs: [
					'Being small does not take a building out of the rent rules. In the City of Los Angeles, the Rent Stabilization Ordinance generally covers multi-unit buildings with a certificate of occupancy issued before October 1, 1978, including smaller ones, and newer buildings typically fall under the statewide AB 1482 cap unless they are exempt. Our articles on [selling with rent-controlled tenants](/insights/selling-la-apartment-building-with-tenants-rent-control/) and the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/) explain how those rules affect price.',
				],
			},
			{
				heading: 'Preparing a Small Building for Sale',
				paragraphs: [
					'With only a few units, each one matters. A single vacant unit, or one tenant paying far below market, can change the numbers noticeably. Buyers will look closely at the unit mix, the condition of the roof, plumbing, and electrical, and the age of the major systems.',
					'Fixing small issues first, confirming your rents and lease terms, and organizing your leases and expense records keep the sale moving. The same steps apply as in a larger sale, which we lay out in our guide to the [step-by-step process of selling an LA apartment building](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/).',
				],
			},
			{
				heading: 'An Example From Our Closed Sales',
				paragraphs: [
					'We have sold small buildings across Los Angeles. At [14654 Gault St in Van Nuys](/closed-sales/14654-gault-st-van-nuys-ca-91405/), a four-unit building, our selling client used a [1031 exchange](/1031-exchanges/) to move into a newer fourplex in North Hollywood. You can see the rest of our sales on the [closed sales](/closed-sales/) page.',
				],
			},
			{
				heading: 'Next Steps',
				paragraphs: [
					'If you own a fourplex or a small apartment building in Los Angeles and want to know what it would sell for, request a free, confidential [Broker Opinion of Value](/contact/?intent=bov). This article is general information, not legal or tax advice. Please talk with your attorney and CPA about your situation.',
				],
			},
		],
	},
	{
		slug: 'selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles',
		title: 'Off-Market or Listed? How to Sell an LA Apartment Building',
		seoTitle: 'Off-Market or Listed? How to Sell an LA Apartment Building',
		description:
			'Should you sell your LA apartment building off-market or list it openly? The tradeoffs in price, privacy, speed, and tenant disruption.',
		date: '2026-10-21',
		image: {
			src: '/images/insights/off-market-vs-listed.webp',
			alt: 'Graphic: off-market or listed? Off-market is private with fewer buyers. A public listing creates competition. A targeted sale to a curated buyer list is the middle path.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Selling off-market means offering your building to a limited group of buyers instead of marketing it publicly. Selling with a public listing means marketing it widely to as many qualified buyers as possible.',
					'Off-market can offer privacy and less disruption. A wide listing usually offers the best chance at the highest price. The right choice depends on what matters most to you.',
					'There is a middle path: targeted marketing to a curated list of proven buyers.',
				],
			},
			{
				heading: 'What an Off-Market Sale Is',
				paragraphs: [
					'An off-market sale, sometimes called a quiet or private sale, happens without a public listing. The broker contacts a small group of qualified buyers directly, often investors who have bought similar buildings before. Tenants and neighbors may never know the building is for sale.',
				],
			},
			{
				heading: 'What a Listed Sale Looks Like',
				paragraphs: [
					'In a listed sale, the broker markets the building to the whole buyer pool: investors, other brokers, and 1031 exchange buyers, using an offering memorandum, photos, video, and direct outreach. The goal is competition, because several interested buyers tend to push the price and the terms in the seller’s favor.',
				],
			},
			{
				heading: 'The Case for Selling Off-Market',
				paragraphs: [
					'Privacy. Some owners do not want tenants, employees, or neighbors to know a sale is possible, and families handling an inheritance often prefer discretion, as we describe in our guide to [trust and estate sales](/trust-and-estate-sales/).',
					'Less disruption. With fewer buyers touring, there are fewer showings and fewer visits to tenants’ units.',
					'Speed and simplicity. When a motivated buyer already knows the building type and neighborhood, the process can move quickly.',
				],
			},
			{
				heading: 'The Case for Listing Openly',
				paragraphs: [
					'More buyers means more competition, and competition is the surest way to find out what the market will actually pay. A public process also gives you a clear view of the true price, which matters if you are not certain of your building’s value. And buyers who are on a deadline, such as 1031 exchange buyers, are often in the market and ready to compete.',
				],
			},
			{
				heading: 'The Tradeoff',
				paragraphs: [
					'The main risk of an off-market sale is that you never learn what you left on the table. If only a few buyers see the building, the best offer may be lower than a wider market would have produced. The main risk of a listed sale is exposure: more people know, tenants may hear about it, and a building that sits on the market can start to look stale.',
				],
			},
			{
				heading: 'A Middle Path: Targeted Marketing',
				paragraphs: [
					'Many owners choose something in between. The broker contacts a curated list of buyers who are active in your neighborhood and your building type, without a public listing. This keeps the sale confidential while still creating some competition.',
					'At 453 S Gramercy Pl in Koreatown, for example, we found an off-market buyer who was experienced with long-term, below-market tenancies, as we describe in the [case study](/case-studies/453-s-gramercy-pl-koreatown-apartments/).',
				],
			},
			{
				heading: 'How to Decide',
				paragraphs: [
					'Ask yourself how important privacy is, how sure you are of your building’s value, how soon you need to close, and whether you are exchanging into other property on a deadline.',
					'Then ask your broker how many qualified buyers they would contact, and how they know those buyers will pay a market price. A good answer includes names, recent purchases, and a plan for what happens if the first round does not produce a strong offer. Our guide on [how to choose a multifamily broker](/insights/how-to-choose-a-multifamily-broker-in-los-angeles/) lists more questions to ask, and our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/) shows where marketing fits in the process.',
				],
			},
			{
				heading: 'Start the Conversation',
				paragraphs: [
					'We can walk through the options for your building and your goals. Start with a free, confidential [Broker Opinion of Value](/contact/?intent=bov), or see what you might expect with the [free calculator](/property-value/). This article is general information, not legal or tax advice. Please talk with your attorney and CPA about your situation.',
				],
			},
		],
	},
	{
		slug: 'la-apartment-market-update-q3-2026',
		title: 'LA Apartment Market Update, Q3 2026: Prices, Cap Rates, and How Far Below Asking Buildings Sold',
		seoTitle: 'LA Apartment Market Update Q3 2026: Prices and Cap Rates',
		description:
			'LA County apartment sales through September 2026: median price per unit, cap rates, quarter-by-quarter trends, and how far below asking buildings sold.',
		date: '2026-10-22',
		image: {
			src: '/images/insights/la-apartment-market-update-q3-2026.png',
			alt: 'Graphic: LA apartment prices held steady in 2026. Median price per unit of $220,000 for older buildings, a median sale price of 94% of asking, and 1,180 LA County sales from January 1 to September 22.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					`Prices were steady. From January 1 to September 22, 2026, older LA County apartment buildings (built before 1978) sold for a median of ${muMoney(MU.headline.older.pricePerUnit)} per unit. Each quarter stayed close to that: ${muMoney(MU.quarters[0].olderPricePerUnit)}, ${muMoney(MU.quarters[1].olderPricePerUnit)}, and ${muMoney(MU.quarters[2].olderPricePerUnit)}.`,
					`Cap rates barely moved. The median cap rate on older buildings was ${muPct(MU.quarters[0].olderCapRateMedian)}, ${muPct(MU.quarters[1].olderCapRateMedian)}, and ${muPct(MU.quarters[2].olderCapRateMedian)} across the three quarters.`,
					`Smaller buildings sold for more per unit. Older buildings of 5 to 9 units sold for a median of ${muMoney(MU.sizes[0].olderPricePerUnit)} per unit, compared with ${muMoney(MU.sizes[2].olderPricePerUnit)} for 20 to 49 units.`,
					`Sellers rarely got their asking price. Of the sales with a recorded asking price, about ${Math.round(100 - MU.asking.atOrAbovePct)}% closed below it, and the median sale was ${MU.asking.medianPct}% of asking.`,
				],
			},
			{
				heading: 'What We Measured',
				paragraphs: [
					`This update covers ${MU.headline.all.sales.toLocaleString('en-US')} sales of apartment buildings with 5 to 99 units in Los Angeles County, from January 1 to September 22, 2026, taken from CoStar sales data and analyzed by Highlight Multifamily Group. We left out sales whose price CoStar marks as approximate or allocated, portfolio sales of 100 or more units, and repeated records. Older buildings are those built before 1978, which in the City of Los Angeles are generally rent-controlled.`,
					'We only have 2026 so far, so this update cannot say how this year compares with last year. The third quarter runs through September 22, so it is not a full quarter. Cap rates come from the sales that reported one, and we use medians throughout so that a few very large or very small sales do not distort the picture.',
				],
			},
			{
				heading: 'The Headline Numbers',
				paragraphs: [
					`Older buildings made up ${Math.round((MU.headline.older.sales / MU.headline.all.sales) * 100)}% of sales but ${Math.round((MU.headline.older.volumeMillions / MU.headline.all.volumeMillions) * 100)}% of the dollars. Newer buildings, built in 1978 or later, were ${Math.round((MU.headline.newer.sales / MU.headline.all.sales) * 100)}% of sales and ${Math.round((MU.headline.newer.volumeMillions / MU.headline.all.volumeMillions) * 100)}% of the dollars. They sold for a median of ${muMoney(MU.headline.newer.pricePerUnit)} per unit, about ${Math.round((MU.headline.newer.pricePerUnit / MU.headline.older.pricePerUnit - 1) * 100)}% more than the ${muMoney(MU.headline.older.pricePerUnit)} for older buildings.`,
					'In the City of Los Angeles, older buildings are generally rent-stabilized and newer ones are not, which is one reason the two can trade differently. Our guide to [how buyers value an apartment building](/insights/how-to-value-an-apartment-building-in-los-angeles/) explains the math behind price per unit and cap rate.',
				],
			},
			{
				heading: 'Quarter by Quarter',
				paragraphs: [
					`Sales volume peaked in the second quarter, with ${MU.quarters[1].sales} sales worth ${muBillion(MU.quarters[1].volumeMillions)}. The third quarter had ${MU.quarters[2].sales} sales through September 22, which is not a full quarter.`,
					`Prices did not move much. Older buildings sold for a median of ${muMoney(MU.quarters[0].olderPricePerUnit)} per unit in the first quarter, ${muMoney(MU.quarters[1].olderPricePerUnit)} in the second, and ${muMoney(MU.quarters[2].olderPricePerUnit)} in the third so far, a spread of about ${Math.round(((Math.max(...MU.quarters.map((q) => q.olderPricePerUnit)) - Math.min(...MU.quarters.map((q) => q.olderPricePerUnit))) / Math.min(...MU.quarters.map((q) => q.olderPricePerUnit))) * 100)}% from lowest to highest.`,
					`The median cap rate on older buildings stayed between ${muPct(Math.min(...MU.quarters.map((q) => q.olderCapRateMedian)))} and ${muPct(Math.max(...MU.quarters.map((q) => q.olderCapRateMedian)))}. Nothing in these numbers shows prices rising or falling sharply this year, and the share of the asking price that buyers paid was steady too.`,
				],
			},
			{
				heading: 'Bigger Buildings Sell for Less Per Unit',
				paragraphs: [
					`Buyers pay less per unit as buildings get bigger, and they accept a higher cap rate. Older buildings of 5 to 9 units sold for a median of ${muMoney(MU.sizes[0].olderPricePerUnit)} per unit, about ${Math.round((MU.sizes[0].olderPricePerUnit / MU.sizes[2].olderPricePerUnit - 1) * 100)}% more than the ${muMoney(MU.sizes[2].olderPricePerUnit)} paid for 20 to 49 units. Median cap rates rose from ${muPct(MU.sizes[0].olderCapRateMedian)} for 5 to 9 units to ${muPct(MU.sizes[2].olderCapRateMedian)} for 20 to 49 units.`,
					`Buildings of 50 to 99 units had only ${MU.sizes[3].olderSales} older-building sales, so treat that group as a rough guide. Our data starts at 5 units, so it does not cover duplexes, triplexes, or fourplexes; our article on [selling a small building](/insights/selling-a-fourplex-or-small-apartment-building-in-los-angeles/) explains how those are priced.`,
					'If you own a smaller building, the per-unit price you see for your neighborhood as a whole may understate what a building of your size can fetch, and the reverse can be true for a larger one. That is why we price from your own building and the sales closest to it in size and age.',
				],
			},
			{
				heading: 'How Far Below Asking Did Buildings Sell?',
				paragraphs: [
					`CoStar recorded an asking price for ${MU.asking.sales} of the ${MU.headline.all.sales.toLocaleString('en-US')} sales. In those, the median sale price was ${MU.asking.medianPct}% of the asking price, about ${muMoney(MU.asking.medianDollarsBelow)} below it. Only ${Math.round(MU.asking.atOrAbovePct)}% sold at or above asking, and ${Math.round(MU.asking.over10Pct)}% sold for more than 10% less.`,
					`The gap was wider for bigger buildings. The median sale price was ${MU.sizes[0].askingMedianPct}% of asking for 5 to 9 units, ${MU.sizes[1].askingMedianPct}% for 10 to 19 units, ${MU.sizes[2].askingMedianPct}% for 20 to 49 units, and ${MU.sizes[3].askingMedianPct}% for 50 to 99 units (${MU.sizes[3].askingSales} sales, a small group). The gap was steady from quarter to quarter.`,
					'In our view, this is the clearest reason to price a building from its income and comparable sales, not from what you hope to get. A price that starts too high costs weeks, and buyers tend to find the gap anyway. Our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/) shows where pricing fits in the process.',
				],
			},
			{
				heading: 'Who Bought and Sold',
				paragraphs: [
					`Private owners drove the market. About ${MU.parties.privateBuyersPct}% of the sales had a private buyer and ${MU.parties.privateSellersPct}% had a private seller, and institutions were about ${MU.parties.institutionalBuyersPct}% of buyers. About ${MU.parties.localBuyersPct}% of buyers were based locally and ${MU.parties.nationalBuyersPct}% were based elsewhere in the United States.`,
				],
			},
			{
				heading: 'Sales by Price Range',
				paragraphs: [
					`About ${Math.round(MU.bands[0].sharePct + MU.bands[1].sharePct)}% of sales closed below $5.4 million. The other ${MU.bands[2].sales + MU.bands[3].sales + MU.bands[4].sales} sales (${Math.round(MU.bands[2].sharePct + MU.bands[3].sharePct + MU.bands[4].sharePct)}%) were above it, and ${MU.bands[3].sales + MU.bands[4].sales} were $8 million or more.`,
					'Those lines matter. In the City of Los Angeles, the Measure ULA transfer tax starts above $5.4 million, and in Santa Monica, Measure GS starts at $8 million. Whether either applied to a given sale depended on where the building was. Our guide to [Measure ULA thresholds](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/) explains why a price just over the line can cost a seller money.',
				],
			},
			{
				heading: 'Neighborhood Detail',
				paragraphs: [
					'For prices and cap rates by neighborhood, see our article on [LA apartment cap rates and prices by neighborhood](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/), or find your area on our [submarkets](/submarkets/) page.',
				],
			},
			{
				heading: 'What This Means If You Own an Apartment Building',
				paragraphs: [
					`Price from income and comparable sales. With the typical sale closing about ${Math.round(100 - MU.asking.medianPct)}% below asking, an asking price that is not backed by your rents and recent sales tends to come down.`,
					'Know your size bracket. Buyers pay different prices per unit for a 7-unit building and a 30-unit building, so the comparable sales that matter most are the ones near yours in size and age.',
					'Have your paperwork ready. Buyers ask for the rent roll, leases, registration, and expense records on day one, and a complete set keeps your price intact in escrow.',
					'Look at what you keep, not just the price. Capital gains tax and depreciation recapture can take a large share of the proceeds, so run the numbers early with your CPA. Our guide to [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/) explains the pieces.',
					'Use the current rules. In the City of Los Angeles, the allowable rent increase for rent-controlled units is 3% through June 2027, and the AB 1482 cap has been 8.7% since August 1, 2026. [Measure ULA thresholds](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/) adjust every July 1. See our guides to the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/) and [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/).',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'To see how these numbers apply to your building, start with our [free property value calculator](/property-value/), then request a free [Broker Opinion of Value](/contact/?intent=bov) and we will build it from your rents, expenses, and condition. We refresh this analysis every quarter.',
					`This article is general information, not an appraisal, investment advice, or a forecast. Figures are medians from CoStar sales data through ${muDate(MU.lastSale)} and will change as more sales close and records are updated.`,
				],
			},
		],
	},
	{
		slug: 'inherited-apartment-building-los-angeles-what-to-do',
		title: 'Inherited an Apartment Building in Los Angeles? What to Do First',
		seoTitle: 'Inherited an Apartment Building in Los Angeles? Next Steps',
		description:
			'Inherited an LA apartment building? What to do first, how a trust or probate affects a sale, the stepped-up basis and Prop 19 tax issues, and your options.',
		date: '2026-10-22',
		image: {
			src: '/images/insights/inherited-apartment-building-la.png',
			alt: 'Graphic: inherited an apartment building? In the first 30 days, insure it, collect rents, tell tenants, and call your attorney. The tax basis steps up to the value at death. A trust or probate decides who can sell.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Inheriting an apartment building comes with decisions that cannot wait: the tenants, the rents, the insurance, and the bills do not pause. Take care of those first, then give yourself time to decide whether to keep or sell.',
					'Who can sell depends on how title was held. A successor trustee can usually act under the trust’s terms. If the building was not in a trust, it generally goes through probate, and the court process shapes the sale.',
					'The tax picture is often kinder than heirs expect on a sale, because an heir’s tax basis generally resets to the building’s value at the date of death. Keeping the building is different: California reassesses property tax at market value, and Proposition 19 does not protect an inherited rental property.',
					'Bring in a probate or trust attorney and a CPA early. We work alongside them, and we can give you a free, confidential opinion of what the building is worth.',
				],
			},
			{
				heading: 'Your First 30 Days',
				paragraphs: [
					'The building keeps running while the paperwork catches up. Rent is due, repairs come up, and the bills and taxes continue. These steps protect the building, the tenants, and the family.',
					'Confirm the insurance. Check that the building’s insurance is in force, and tell the insurer about the owner’s death. A gap in coverage on an occupied building is a risk nobody wants.',
					'Keep the money separate. Rents belong to the estate or trust, so they should go into an account set up for it, not a personal account. Your attorney will tell you how.',
					'Tell the tenants who to pay and who to call. Tenants mostly want to know that their lease and their rent stay the same, and in a sale of an occupied building they generally do. Our guide to [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/) explains how leases carry over.',
					'Gather the documents. You will need the death certificate, the trust or will, the leases, the current rent roll, the building’s Rent Stabilization Ordinance registration if it is in the City of Los Angeles, insurance and property tax bills, and the last two years of income and expenses.',
					'Call an attorney and a CPA. A probate or trust attorney confirms who has the authority to act, and a CPA looks at the tax side. Both should be involved before anyone lists the building.',
				],
			},
			{
				heading: 'Trust or Probate: Who Can Sell?',
				paragraphs: [
					'If the building was held in a living trust, the successor trustee generally has the authority to sell, following the trust’s terms. A trust sale usually does not need a court’s approval.',
					'If the building was not in a trust, it generally goes through probate. An apartment building is worth many times California’s small-estate limit, which is about $200,000, so the simplified process for small estates will not apply. The court appoints an executor or administrator, and that person, not the heirs directly, handles the sale.',
					'How much the court is involved depends on the authority it grants. With full authority under California’s Independent Administration of Estates Act, an executor can generally sell after giving the heirs notice of the proposed sale, and the court steps in only if someone objects. With limited authority, the sale usually goes to the court for confirmation, and at that hearing other buyers can offer more than the accepted price. Your probate attorney will tell you which applies.',
					'That is why the legal question comes before the pricing question. A buyer wants to know the seller can deliver clear title and a closing date, and a broker who understands the process can build the timeline around it. Our page on [trust and estate sales](/trust-and-estate-sales/) explains how we work with trustees and executors.',
				],
			},
			{
				heading: 'What Tax Will You Owe if You Sell?',
				paragraphs: [
					'Most heirs worry about capital gains tax. The usual answer is better than they fear. Under IRS rules, the basis of inherited property is generally its fair market value on the date of the owner’s death, or on an alternate valuation date if the executor chooses one. That resets the starting point for figuring gain, so a building sold soon after the death typically produces little or no taxable gain, and the previous owner’s depreciation history generally does not carry over. Our guide to [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/) explains the pieces.',
					'That makes the date-of-death value important. A formal appraisal is the usual way to support it, and a Broker Opinion of Value is not an appraisal. We explain the difference in our article on [Broker Opinion of Value vs. appraisal](/insights/broker-opinion-of-value-vs-appraisal-apartment-building/).',
					'Federal estate tax is a separate tax on the estate, not on the heir, and it applies only to large estates. For people who die in 2026, the federal exemption is $15 million per person. California does not have its own estate or inheritance tax.',
					'If the estate sells the building, the usual transfer taxes apply to the sale, including Measure ULA above $5.4 million inside the City of Los Angeles. Ask the escrow officer whether any exemption applies to your situation, and see our [Measure ULA guide](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/) for how the thresholds work.',
				],
			},
			{
				heading: 'If You Keep It: Property Tax',
				paragraphs: [
					'Keeping an inherited building has its own tax effect. In California, a change in ownership triggers a reassessment, so the building’s assessed value resets to market value. For a building owned for decades, that can raise the yearly property tax bill sharply.',
					'Proposition 19 limits the old parent-child exclusion to a family home that was the parent’s principal residence and becomes the child’s principal residence, and to family farms. The Board of Equalization says a transfer of a rental property between parents and children does not qualify for the exclusion. So an inherited apartment building is generally reassessed.',
					'The county assessor must also be told about the death. A change in ownership statement for the death of a property owner (form BOE-502-D) is due within 150 days of the date of death, and late filing can bring penalties. The executor or trustee normally files it, with the attorney’s help.',
				],
			},
			{
				heading: 'Keep It or Sell It?',
				paragraphs: [
					'There is no right answer, only the one that fits your family. A few questions help. Does anyone want to manage the building, and do they know what it takes? Can the heirs agree on a plan? What would the property tax bill be after reassessment? What repairs are coming? And what would the sale proceeds do for the family compared with the building’s income?',
					'Our guide to [whether to sell an apartment building](/insights/should-i-sell-my-la-apartment-building/) walks through seven questions worth answering first. If the heirs want to sell, they can list the building openly or sell it quietly to a limited group of buyers. Our article on [selling off-market vs. listing openly](/insights/selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles/) explains the tradeoffs, including why privacy matters to many families.',
				],
			},
			{
				heading: 'How We Sell Inherited Buildings',
				paragraphs: [
					'Buildings that come through an estate are often older, with deferred maintenance and rents that have not moved in years. That is common, and it is not a barrier to a sale. We price these buildings honestly, from the rent roll and comparable sales, and we bring them to buyers who know what they are taking on, so the family is not asked to fix decades of deferred decisions first.',
					'We work with the trustee or executor, the attorney, and the CPA so the sale fits the legal timeline. A typical Los Angeles apartment sale takes 60 to 90 days from listing to closing, and a sale that needs court confirmation adds a step. Our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/) shows each stage.',
				],
			},
			{
				heading: 'Mistakes We Would Help You Avoid',
				paragraphs: [
					'Waiting without a plan. Insurance, taxes, and repairs continue every month, whether or not anyone has decided what to do.',
					'Pricing from sentiment. A building’s value is set by its income and by what buyers are paying, not by what it meant to the family.',
					'Skipping the date-of-death value. A formal appraisal supports the tax basis. Ask your CPA whether you need one.',
					'Assuming Proposition 19 will keep the property tax low. For a rental building, it generally will not.',
					'Leaving tenants in the dark. A short, honest note about who to pay and who to call prevents most problems.',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'We guide families, trustees, and executors through these sales at their pace. Start with a free, confidential [Broker Opinion of Value](/contact/?intent=bov), or read more on our [trust and estate sales](/trust-and-estate-sales/) page.',
					'This article is general information, not legal or tax advice. Probate and tax rules are detailed and change, so please confirm the details with a California probate or trust attorney and a CPA.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[IRS Publication 551: Basis of Assets](https://www.irs.gov/publications/p551)',
					'[California Board of Equalization: Proposition 19](https://www.boe.ca.gov/prop19/)',
					'[IRS: What’s New, Estate and Gift Tax](https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax)',
					'[California Board of Equalization: BOE-502-D, Change in Ownership Statement, Death of Real Property Owner (sample form)](https://www.boe.ca.gov/proptaxes/pdf/sample-boe502d.pdf)',
				],
			},
		],
	},
	{
		slug: 'sb-721-balcony-inspection-los-angeles-apartment-owners',
		title: 'SB 721 Balcony Inspections in Los Angeles: What Apartment Owners Must Do Now',
		seoTitle: 'SB 721 Balcony Inspection in Los Angeles: Owner Guide',
		description:
			'The SB 721 balcony and stair inspection deadline was January 1, 2026. What LA apartment owners must inspect, who can inspect, repairs, penalties, and selling.',
		date: '2026-10-22',
		image: {
			src: '/images/insights/sb-721-balcony-inspection-la.png',
			alt: 'Graphic: the SB 721 deadline has passed. Inspections were due January 1, 2026 and every six years after, for buildings with three or more units and elevated wood balconies, decks, and stairs. Civil penalties run $100 to $500 a day if repairs lag.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'The deadline has passed. California’s SB 721 requires apartment buildings with three or more units to have their elevated balconies, decks, and exterior stairs inspected by January 1, 2026, and every six years after that. If you have not had yours done, you are late.',
					'It covers more buildings than owners expect. A triplex or fourplex counts, and so does any building with wood-supported balconies, walkways, or stairways more than six feet above the ground.',
					'The inspection is only the first step. Problems have to be permitted and repaired on a set timeline, and an owner who lets repairs drag can face civil penalties of $100 to $500 a day and a lien on the building.',
					'The report follows the building. The law requires you to keep it for two inspection cycles and deliver it to a buyer when you sell, so it matters at every sale.',
				],
			},
			{
				heading: 'What the Law Requires',
				paragraphs: [
					'SB 721 was passed in 2018 after a deadly balcony collapse in Berkeley. It is now Section 17973 of the California Health and Safety Code. Owners of buildings with three or more multifamily dwelling units have to hire a licensed professional to inspect the exterior elevated elements, including the load-bearing parts and the waterproofing that protects them.',
					'The inspector checks that these elements are in generally safe condition and free from hazards caused by rot, deterioration, decay, or improper alteration. The inspection has to be completed by January 1, 2026, and by January 1 every six years after that, so the next one is due by January 1, 2032.',
				],
			},
			{
				heading: 'Which Buildings and Which Parts Are Covered',
				paragraphs: [
					'The law calls them “exterior elevated elements”: balconies, decks, porches, stairways, walkways, and entry structures, including their supports and railings. To be covered, an element has to extend beyond the exterior walls of the building, have a walking surface more than six feet above ground level, be designed for people to use, and rely in whole or in substantial part on wood or wood-based products for its structural support.',
					'That can describe older multistory wood-frame buildings in Los Angeles with exterior stairs, walkways, or balconies. Steel or concrete structures are generally not covered, and neither are patios at ground level. Condominium buildings are handled by a different law, SB 326, which has its own rules.',
				],
			},
			{
				heading: 'Who Can Do the Inspection',
				paragraphs: [
					'The law says the inspector has to be one of the following: a licensed architect, a licensed civil or structural engineer, a building contractor with an “A,” “B,” or “C-5” license and at least five years of experience building multistory wood-frame buildings, or an individual certified as a building inspector or building official by a recognized association. The inspector cannot be employed by the local jurisdiction while doing the inspection, and the owner hires and pays the inspector.',
					'In our view, it is worth hiring an inspector who will not also be bidding on the repairs. Separating the two keeps the findings independent and makes it easier to compare repair bids.',
				],
			},
			{
				heading: 'What the Inspection and Report Include',
				paragraphs: [
					'The inspector has to check a sample of at least 15% of each type of exterior elevated element, looking at the load-bearing parts and the waterproofing by direct visual examination or comparable means. The evaluation has to cover each element’s current condition, how long it should keep performing, and whether any further inspection is needed.',
					'You are entitled to a written report, stamped or signed by the inspector, within 45 days of completing the inspection. It has to include photographs, any test results, and enough narrative to serve as a baseline for the next inspection, and it has to say whether any element is an immediate threat to the occupants.',
				],
			},
			{
				heading: 'If the Inspector Finds a Problem',
				paragraphs: [
					'The timeline depends on how serious the problem is. If the inspector says an element is an immediate threat, that is an emergency. You have to act right away, and keeping people off the balcony or stair until repairs are done counts as compliance. The inspector then has to confirm the emergency repairs and report to the local enforcement agency. A report that recommends immediate repairs also has to go to the local agency within 15 days of the report being completed.',
					'For problems that are not an immediate threat, you have to apply for a repair permit within 120 days of receiving the report. Once the permit is approved, you have 120 days to finish the work unless the local agency grants more time. Repairs have to be done by a licensed contractor, follow the inspector’s recommendations and the manufacturer’s specifications, meet the California Building Standards Code, and satisfy local requirements.',
				],
			},
			{
				heading: 'Penalties for Falling Behind',
				paragraphs: [
					'If the repairs are not done within 180 days, the inspector has to notify both you and the local enforcement agency. If they are still not finished 30 days after that notice, the owner is assessed a civil penalty of not less than $100 and not more than $500 per day, under a fee schedule set by the local agency, until the work is complete.',
					'The local agency can also record a building safety lien on the property, which has the force and priority of a judgment lien and can be foreclosed. Local agencies can recover their enforcement costs, and cities and counties are allowed to set requirements that are stricter than the state law.',
				],
			},
			{
				heading: 'How Los Angeles Handles It',
				paragraphs: [
					'For apartment buildings, the Los Angeles Housing Department (LAHD) runs the program, and it calls these the “E3” inspections. Its guidance repeats the state deadline: January 1, 2026, and every six years after. LAHD also takes E3 code enforcement complaints through its hotline at (866) 557-7368, so a building that has not complied can be reported.',
					'The Los Angeles Department of Building and Safety (LADBS) handles condominiums and the building code side. Its bulletin on exterior elevated elements, revised in April 2026, says plans for balconies and other elevated walking surfaces have to show the details of the moisture barrier system, and that the barrier cannot be covered up until it has been inspected and approved. A repair that rebuilds or re-waterproofs a balcony may have to follow that process, so ask your contractor and LADBS before the work starts.',
					'One warning from LAHD: some private businesses have been mailing notices about “E3” or “balcony” inspections that look like official government letters. LAHD says those notices do not come from the city. Real LAHD notices carry the City of Los Angeles or LAHD logo and an LAHD office address. If you are not sure, call LAHD at (866) 557-7368 before you respond or pay anyone.',
				],
			},
			{
				heading: 'Missed the Deadline? What to Do Now',
				paragraphs: [
					'Do not wait for a complaint. Hire a qualified inspector now and schedule the inspection as soon as you can. The sooner the report exists, the sooner the repair clock starts and the sooner you can show the building is on track.',
					'If you already have a report, check that it was done by one of the inspectors the law lists and that it covers each type of element. An older report from before 2019 no longer helps: that exemption ran only until January 1, 2026.',
					'If the inspector flags an immediate threat, keep people off that balcony or stair right away, and tell your tenants why. For other inspections, give tenants the usual written notice before anyone enters a unit, which for non-emergency visits is generally 24 hours.',
					'Ask your attorney whether any part of the cost can be recovered under Los Angeles’ rent rules. Do not assume it can.',
				],
			},
			{
				heading: 'Selling a Building: The Report Goes to the Buyer',
				paragraphs: [
					'The statute says copies of all inspection reports have to be kept in the owner’s permanent records for at least two inspection cycles, and that they must be disclosed and delivered to the buyer at the time of any later sale. Expect a buyer to ask for the report early, and to ask about any open repairs.',
					'In our experience, an unknown balcony problem is the kind of surprise that turns into a price reduction during escrow. At [1513 Arlington Ave](/case-studies/1513-arlington-ave-arlington-heights-apartments/), a 9-unit building, our seller did not want to pay for the electrical sub-panel replacement or the SB 721 inspection before closing, so we structured the sale for the buyer to take both on. The building sold for $1,400,000 and our seller completed his 1031 exchange.',
					'If you can, get the inspection done before you list. A clean report is a selling point, and a known repair with a bid attached is easier for a buyer to price than an open question. Our guide to [how buyers value an apartment building](/insights/how-to-value-an-apartment-building-in-los-angeles/) explains how condition and deferred work come off the price, and our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/) shows where it fits. What you keep also depends on taxes, so see our guide to [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/) and, for larger City of Los Angeles sales, [Measure ULA](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/).',
				],
			},
			{
				heading: 'Tips for Owners',
				paragraphs: [
					'Get two or three bids for any repair, and compare them against the inspector’s written recommendations. Ask each contractor whether the quote includes permits and the waterproofing details LADBS requires.',
					'Treat waterproofing as maintenance, not a one-time fix. Sealants and coatings wear out, and the inspector has to estimate how long each element should keep performing. Planning for that is cheaper than emergency repairs.',
					'Keep a file for each building: the inspector’s qualifications, the report, photographs, permits, repair invoices, and any correspondence with the city. The law expects you to keep the reports for two inspection cycles.',
					'Ask your inspector to schedule a final report once repairs are complete. The law lets you request one, and it is useful proof for a buyer, a lender, or the city.',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'If you are thinking about selling a building with balconies or exterior stairs, we can help you decide whether to inspect and repair first or sell as is, and how to price either way. Start with a free, confidential [Broker Opinion of Value](/contact/?intent=bov). Not sure who to hire? Our guide to [how to choose a multifamily broker](/insights/how-to-choose-a-multifamily-broker-in-los-angeles/) explains what to look for.',
					'This article is general information, not legal or engineering advice. The law and Los Angeles’ procedures can change, so please confirm the details with a licensed inspector and your attorney.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[California Health and Safety Code section 17973 (SB 721), as amended 2025](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=17973)',
					'[Los Angeles Housing Department: Exterior Elevated Elements (E3) Inspection Law, Apartment Buildings](https://housing.lacity.gov/e3-apartments)',
					'[LADBS Information Bulletin P/BC 2026-144: Building Standards for Immediate Enforcement, Exterior Elevated Elements](https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/ib-p-bc-2017-144-exterior-elevated-elements.pdf)',
				],
			},
		],
	},
	{
		slug: 'air-conditioning-law-los-angeles-apartment-owners-electrical-panel',
		title: 'LA Apartment Air Conditioning: What LA County’s 82-Degree Rule Means for Owners, and Where the City of LA Stands',
		seoTitle: 'LA Apartment AC: County 82°F Rule vs. City of LA Status',
		description:
			'No law requires AC in every LA apartment. LA County’s 82°F rule covers unincorporated areas; the City of LA has not adopted one yet. Electrical panel tips.',
		date: '2026-10-22',
		image: {
			src: '/images/insights/la-apartment-air-conditioning-electrical.png',
			alt: 'Graphic: no law requires air conditioning in every Los Angeles apartment, but cooling rules are coming. LA County sets an 82 degree limit starting January 1, 2027 in unincorporated areas, and the City of Los Angeles has voted to move toward the same rule. Check your electrical panel now.',
			width: 1200,
			height: 900,
		},
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Where things stand today (October 2026): the City of Los Angeles has not adopted an air conditioning or maximum-temperature rule for apartments. Its council has voted to pursue one, and LA County’s rule applies only in unincorporated areas.',
					'No law requires an owner to install air conditioning in every apartment. What exists is narrower: Los Angeles County has an 82°F indoor temperature limit for rentals in unincorporated areas, and the City of Los Angeles has voted to move toward the same standard. Neither one says “install AC.” They say the unit has to stay cool enough, and how you get there is up to you.',
					'Where the rule applies, the county does not require electrical upgrades, but it strongly recommends that units can safely support cooling devices. In an older building, the electrical system is usually the real constraint, not the air conditioner.',
					'Tenants in county areas already have the right to plug in a portable air conditioner without penalty. Even where that is not the law, expect more of them to do it, which puts more load on old wiring and sub panels.',
					'The practical move for an owner is to find out now what your panels and wiring can handle, try the inexpensive passive fixes first, and plan any electrical work for a time you choose rather than a time a complaint chooses.',
				],
			},
			{
				heading: 'Is There a Law Requiring Air Conditioning in Every Unit?',
				paragraphs: [
					'No. We looked for it, because owners keep hearing that there is one. There are three separate things that get mixed together, and none of them is an air conditioner mandate.',
					'First, California’s SB 655, signed in 2025, added Section 17914 to the Health and Safety Code. It declares it the policy of the state that all dwelling units should be able to attain and maintain a safe maximum indoor temperature, and it tells state agencies to consider that policy, including when they write regulations beginning January 1, 2027. It does not put a duty on a landlord, and the statute says it does not expand any obligation of the state. Think of it as a signal about where state regulation is headed. The bill’s own findings note that California building standards already set a minimum indoor temperature of 68°F but have no maximum.',
					'Second, Los Angeles County adopted an ordinance setting a maximum indoor temperature of 82°F in rental units in unincorporated areas of the county. It is the one most owners are really asking about.',
					'Third, the City of Los Angeles has not adopted its own rule as far as we can find. On February 17, 2026 the City Council unanimously passed a motion directing the City to adopt an 82°F standard that conforms to the county’s ordinance. The council’s own press release notes that providing heat is currently required for owners but a cooling method is not, and the motion also asks LADWP to report on incentive programs for apartment owners. A motion starts the process; it is not itself the ordinance, and we have not found an adopted city ordinance. Confirm the current status with the Los Angeles Housing Department before you make decisions, because this could move quickly.',
				],
			},
			{
				heading: 'What the LA County 82-Degree Rule Says',
				paragraphs: [
					'The county ordinance applies to rental units in unincorporated Los Angeles County. It does not apply inside incorporated cities, which includes the City of Los Angeles, Santa Monica, Beverly Hills, and West Hollywood, unless those cities adopt something similar. Owner-occupied units, mobile homes, vacant units, and properties already inspected for habitability by another government agency are outside it.',
					'Where it applies, the landlord is responsible for making sure habitable rooms can stay at or below 82°F. Enforcement starts January 1, 2027, or when the county approves the related fee if that is later, and it is complaint-based. The county has described an education-first approach that starts with passive cooling practices.',
					'The ordinance gives “small property” landlords more time. Under the county’s guidance, they need to meet the standard in at least one habitable room per unit by January 1, 2027 and in all habitable rooms by January 1, 2032. The county defines a small landlord narrowly: for example, someone who controls one rental property of no more than 10 units, or up to three properties of 10 or fewer units combined, and not a corporation or an LLC with a corporate member. Check the county’s definition against how your ownership is structured.',
					'Owners who need retrofits to comply can ask for an extension. The county’s presentation describes a potential two-year extension, so do not wait until the last minute to ask.',
				],
			},
			{
				heading: 'What Tenants Are Allowed to Do',
				paragraphs: [
					'In the county’s rule, tenants may add portable or non-mechanical cooling, such as a plug-in air conditioner, a fan, or blackout curtains. They have to give the landlord written notice at least five days before installing, follow the manufacturer’s safety guidelines, and not alter the unit.',
					'Tenants cannot be evicted, penalized, or charged extra for installing portable cooling, and a landlord cannot raise rent or add fees because of it. The cost of a portable unit cannot be passed through to the tenant. The county’s landlord page does not say who pays for the electricity those units use, so check that with your attorney.',
					'Other costs a landlord incurs to comply may be recoverable through the county’s Rent Stabilization and Tenant Protection Ordinance process, which requires an application and review and is subject to the rent increase cap. The City of Los Angeles has its own rent rules, so do not assume the same path would apply to a building in the city.',
				],
			},
			{
				heading: 'Why the Electrical Sub Panel Matters',
				paragraphs: [
					'Older Los Angeles apartment buildings were not wired for air conditioning. A building from the 1950s or 1960s may have a main service sized for lights, a refrigerator, and a range, with a small panel in each unit or a shared panel serving several units. Add a window air conditioner or a mini-split in every unit on a hot afternoon, and a panel that was fine for decades can be pushed to its limit.',
					'There are really four questions: how much capacity is in the main service, how much room is left in the panel feeding each unit, what condition the panel and wiring are in, and whether there are open breaker spaces for a dedicated circuit. A panel can have enough electrical capacity but no physical space for another breaker, and the reverse can also be true.',
					'Many window units can plug into a standard circuit. Larger units, and most permanently installed ductless mini-splits, need their own dedicated circuit. Tenants who plug a big unit into an overloaded kitchen or bedroom circuit are the case to worry about: tripped breakers at best, overheated wiring at worst.',
					'In our experience, the electrical panel is also where deals get tested. At [1513 Arlington Ave](/case-studies/1513-arlington-ave-arlington-heights-apartments/), a 9-unit building, the sub-panel replacement was one of the items our seller did not want to pay for before closing. We structured the sale so the buyer took it on, and the building sold for $1,400,000. Buyers and their inspectors look hard at old panels, and the new cooling rules give them one more reason to.',
				],
			},
			{
				heading: 'Panels That Deserve Extra Attention',
				paragraphs: [
					'Some older panel brands have a bad reputation. Federal Pacific Electric (Stab-Lok) and Zinsco panels are flagged by home and multifamily inspectors, and the concern is that the breakers may not trip when they should. We are not engineers, and we have not been able to verify a federal recall, so treat this as a reason to have a licensed electrician look rather than a conclusion.',
					'Insurance is the practical side. Some insurers ask about or surcharge certain panel types, so it is worth asking your insurance agent before an electrician tells you what you have.',
					'Some buildings from the 1960s and early 1970s also have aluminum branch wiring, which needs different connectors and care. If your building is from that era, mention it to the electrician when you ask for the assessment.',
				],
			},
			{
				heading: 'Permits and Who to Hire',
				paragraphs: [
					'Replacing a panel or adding circuits in the City of Los Angeles generally takes an electrical permit from the Los Angeles Department of Building and Safety (LADBS), and installing a mini-split may need a mechanical permit as well. LADBS publishes an electrical permit application that covers apartment and condominium work. Confirm the permits for your specific project with LADBS or your contractor before work starts.',
					'Hire a licensed electrician to do a written assessment, including a load calculation, rather than guessing. Ask for the panel brand and age, the size of the main service and the unit panels, the number of open breaker spaces, the condition of the wiring, and a priced list of what it would take to put one dedicated cooling circuit in each unit.',
					'If the building’s main service has to be made larger, the utility will be involved, and that can add lead time. Ask early.',
				],
			},
			{
				heading: 'Tips for Owners',
				paragraphs: [
					'Start with passive cooling. Cool roof coatings, window shades or film, awnings, ceiling fans, and shade trees all reduce indoor heat and are the first steps the county’s guidance points to. They are also the cheapest way to see how far you can get without touching the electrical system.',
					'Get an electrical assessment before you need one. Even if your building is in the City of Los Angeles and no rule applies yet, knowing what your panels can handle lets you budget. The county’s own guidance recommends confirming that your wiring is up to code and that there are outlets where tenants will use cooling devices.',
					'Combine the work. If a unit is vacant, that is the best time to replace its panel or run a dedicated circuit, because you will not disturb a tenant or need to schedule entry. If you plan to paint, re-roof, or do SB 721 balcony repairs, ask whether the electrical work can be done at the same time. Our [SB 721 guide](/insights/sb-721-balcony-inspection-los-angeles-apartment-owners/) covers the balcony side.',
					'Decide how the electricity will be paid for. If each unit has its own meter, a tenant who runs an air conditioner pays the bill. If the building is on a house meter, owner-installed cooling shifts that cost to you. Know which situation you have before you choose between providing cooling and allowing tenants to bring their own.',
					'Plan for tenant-installed units. Tell tenants in writing what size unit your wiring can safely support, and where they can plug it in. That protects them and you.',
					'Look at incentives. The county’s financing page lists programs including Clean Power Alliance’s air conditioning and panel upgrade programs, SoCalGas’s multifamily rebates, and federal and state programs for heat pumps and panels. Eligibility depends on the program and on which utility serves your building, so confirm before you count on any of them.',
					'Keep records. Photos, the electrician’s assessment, permits, and invoices will matter if there is a complaint, an insurance question, or a sale.',
				],
			},
			{
				heading: 'How This Affects Value and Selling',
				paragraphs: [
					'A buyer does not pay for an air conditioner you might someday need, but a buyer does subtract for a panel that has to be replaced. Expect buyers to ask about panel brand and age, any cooling rules that apply to the building, and what the owner has already done. A building with a recent electrical assessment and a documented plan is easier to price than one with unknowns.',
					'Our guide to [how buyers value an apartment building](/insights/how-to-value-an-apartment-building-in-los-angeles/) explains how deferred work comes off the price, and our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/) shows where to get ahead of it. What you keep after the sale also depends on taxes, so see our guides to [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/) and, for larger City of Los Angeles sales, [Measure ULA](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/).',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'If you are thinking about selling a building with older electrical, we can help you decide whether to upgrade first or sell as is, and how to price either way. Start with a free, confidential [Broker Opinion of Value](/contact/?intent=bov). Not sure who to hire? Our guide to [how to choose a multifamily broker](/insights/how-to-choose-a-multifamily-broker-in-los-angeles/) explains what to look for.',
					'This article is general information, not legal or engineering advice. These rules are changing, so confirm the details with an attorney, a licensed electrician, and the agency that governs your property.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[California SB 655 (2025), Health and Safety Code section 17914: indoor temperature](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB655)',
					'[LA County Cool and Healthy Homes: How can property owners comply?](https://coolhealthyhomes.org/owner/comply)',
					'[LA County Cool and Healthy Homes: financing and incentive programs](https://coolhealthyhomes.org/financing)',
					'[LA County Board of Supervisors presentation: Maximum Indoor Residential Temperature Threshold Ordinance, August 5, 2025](https://file.lacounty.gov/SDSInter/bos/supdocs/205876.pdf)',
					'[Councilmembers Hernandez and Blumenfield motion to establish a maximum indoor temperature, City of Los Angeles](https://cd1.lacity.gov/press-releases/councilmembers-hernandez-and-blumenfields-motion-establish-maximum-indoor)',
					'[LADBS application for electrical permit](https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/application-for-electrical-permit-pc-elec-app-02.pdf)',
				],
			},
		],
	},
	{
		slug: 'measure-ula-hold-or-sell-la-apartment-building',
		title: 'Measure ULA: Should You Hold or Sell Your LA Apartment Building?',
		seoTitle: 'Measure ULA: Hold or Sell Your LA Apartment Building?',
		description:
			'Measure ULA taxes the whole sale price, not your profit. How the tax changes the hold-or-sell decision for LA apartment owners, with worked examples.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Measure ULA is charged on the sale price, not on your gain. It is owed whether you made money on the building or lost it.',
					'Waiting does not make the tax go away. It is a cost of selling at any time, so for most owners it affects when and at what price they sell more than whether they sell.',
					'The tax matters most when a price lands near $5.4 million or $10.9 million. Between those lines, a few percent on the whole price can cost more than a year of the building’s income.',
					'Decide on your goals first, then model the tax. Our free Measure ULA calculator shows what you would keep at any price.',
				],
			},
			{
				heading: 'Why Measure ULA Is a Hold-or-Sell Question',
				paragraphs: [
					'Most taxes on a sale depend on how much you gained. Measure ULA does not. The City of Los Angeles charges it on the value of the property being sold, and for closings after June 30, 2026 the rate is 0% at or below $5.4 million, 4% above $5.4 million and under $10.9 million, and 5.5% at $10.9 million or more. The rate applies to the entire price. If you want the mechanics, start with our [Measure ULA guide](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/).',
					'Because it is a flat percentage of the price, it hits an owner with a low basis and an owner with a high basis equally. That is why it changes how owners think about holding: for a building above the first line, a sale carries a large, certain cost that has nothing to do with how well the building has performed.',
				],
			},
			{
				heading: 'What the Tax Costs at Different Prices',
				paragraphs: [
					'At $5,400,000 the ULA tax is zero. At $5,400,001 it is 4% of the full price, about $216,000.',
					'At $6,000,000 the ULA tax is $240,000. The City’s regular transfer tax of 0.45% adds $27,000, and the LA County tax of $1.10 per $1,000 adds $6,600, for $273,600 in transfer taxes in all, or 4.56% of the price.',
					'At $12,000,000 the ULA tax is $660,000. With the regular City and County taxes, transfer taxes total $727,200, or 6.06% of the price.',
					'These figures are before the broker’s commission, other closing costs, and your income taxes. You can run your own price through the [Measure ULA calculator](/measure-ula-calculator/).',
				],
			},
			{
				heading: 'The Tax in Terms of Income',
				paragraphs: [
					'A useful way to judge the tax is to compare it with what the building earns. Suppose a building sells for $6,000,000 at a 5.5% cap rate. Its net operating income is about $330,000 a year. The $240,000 ULA tax is about 8.7 months of that income, paid once, on the day you sell.',
					'That framing does not tell you whether to sell. It tells you what the exit costs, so you can weigh it against the other things on the scale: the income you keep earning if you hold, the repairs and compliance work coming up, and what you plan to do with the proceeds.',
				],
			},
			{
				heading: 'Reasons Owners Choose to Hold',
				paragraphs: [
					'The income continues. Every year you hold, you keep collecting the building’s net operating income, and the tax is not due until you sell.',
					'The thresholds move up. The City adjusts both lines every year for inflation, so a building that sits just over a line today could be under it after a future adjustment, if its value does not rise faster. We confirm the current figures with the City before pricing, because they change each July.',
					'A planned handoff. Some owners intend to pass the building to family. That does not avoid ULA, since a later sale above a line would owe it too, but an heir’s income tax on a sale soon after inheriting is often small because of the stepped-up basis rule. Ask your CPA and attorney how it applies to you. Our guide to [inherited apartment buildings](/insights/inherited-apartment-building-los-angeles-what-to-do/) covers the basics.',
				],
			},
			{
				heading: 'Reasons Owners Sell Anyway',
				paragraphs: [
					'The tax is real, but it is only one side of the decision. Owners still sell above the lines for reasons that have nothing to do with ULA. They may be ready to stop managing, face costly repairs or compliance work, want to move capital out of one building into several, or be concerned about how much of their wealth sits in a single property.',
					'It also helps to remember that waiting does not remove the tax. If you will sell eventually, and the building will still be above a line then, the tax is part of the exit either way. It is worth modeling now, but it should not trap you into holding a building that no longer fits your plans. A [1031 exchange](/1031-exchanges/) can defer your capital gains tax, but it does not exempt a sale from Measure ULA.',
				],
			},
			{
				heading: 'Questions to Ask Before You Decide',
				paragraphs: [
					'What would I net at today’s price, and at a price just under the nearest line? Run both in the [calculator](/measure-ula-calculator/).',
					'What does the building earn after expenses, and what repairs or compliance costs are coming?',
					'What will I do with the money, and how does that compare with what the building earns now?',
					'Is my price close enough to a line that a modest price change would leave me with more? If so, a [Broker Opinion of Value](/contact/?intent=bov) can show your net at several prices.',
					'Which tax advisor and attorney will confirm how ULA and my income taxes apply before I list?',
				],
			},
			{
				heading: 'If Your Building Is Near a Line',
				paragraphs: [
					'A building priced just over $5.4 million or $10.9 million is in a stretch where a higher price can put less money in your pocket, which we describe in our guide to the [dead zone above each threshold](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/). The calculator flags it and shows the price you would need to reach to come out even. If your building sits in that range, the decision is not only hold versus sell. It is also what price to sell at.',
					'Be careful with any plan to restructure a sale to avoid the tax. The City reviews payments through its own compliance process, and it will invoice the difference if it finds an underpayment. Take any such idea to a tax attorney first.',
				],
			},
			{
				heading: 'Not in the City of Los Angeles?',
				paragraphs: [
					'Measure ULA stops at the City of Los Angeles line. Buildings in [West Hollywood](/submarkets/west-hollywood/) and [Beverly Hills](/submarkets/beverly-hills/) owe no city transfer tax, and [Santa Monica](/submarkets/santa-monica/) has its own tax, Measure GS, at $8 million and up. The calculator covers all of these.',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'If you are weighing a sale and your building could land near a line, start with the [Measure ULA calculator](/measure-ula-calculator/), then request a free [Broker Opinion of Value](/contact/?intent=bov). We will show you what you would net at different prices and closing dates, and whether holding makes sense for you.',
					'This article is general information, not tax or legal advice. Please confirm how Measure ULA applies to your sale with your CPA or tax attorney.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[City of Los Angeles Office of Finance: Real Property Transfer Tax and Measure ULA FAQ](https://finance.lacity.gov/faq/measure-ula)',
				],
			},
		],
	},
	{
		slug: 'sb-1365-emergency-rent-cap-la-apartment-owners',
		title: 'SB 1365: California’s Emergency Rent Cap Will Cover Leases of Any Length',
		seoTitle: 'SB 1365 Emergency Rent Cap: What LA Owners Must Know',
		description:
			'SB 1365 extends California’s 10% emergency rent cap to every lease and makes the repair-cost exception a defense you must prove. What LA owners should do.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Governor Newsom signed SB 1365 on September 30, 2026. It changes the part of California’s price gouging law that limits rent increases after a declared emergency.',
					'The 10% cap will now apply to rental housing with a lease of any length. Before, it covered only housing with an initial lease term of one year or less.',
					'The old exceptions are now affirmative defenses. If you charge more than 10% during an emergency, you would have to prove the exception applies.',
					'As a regular, non-urgency law, it takes effect January 1, 2027. It does not change rent control. The City’s Rent Stabilization Ordinance and AB 1482 still set their own, lower limits.',
				],
			},
			{
				heading: 'How the Emergency Rent Cap Works',
				paragraphs: [
					'California Penal Code section 396 is the state’s price gouging law. When the President or the Governor proclaims a state of emergency, or a county, city, or city and county declares a local emergency, it becomes unlawful to raise the rental price of housing by more than 10% for an existing or prospective tenant. The limit lasts for 30 days after the proclamation or declaration, or for any longer period the proclamation is extended, and local officials can extend it in steps of up to 30 days.',
					'A violation is a misdemeanor, punishable by up to a year in county jail, a fine of up to $10,000, or both. It is also treated as an unlawful business practice, which opens the door to civil remedies on top of the criminal penalty. SB 1365 amends section 396 and does not change those penalties.',
				],
			},
			{
				heading: 'What SB 1365 Changes',
				paragraphs: [
					'Leases of any length. Under the old law, “housing” meant rental housing with an initial lease term of no longer than one year. SB 1365 defines it as any rental housing, regardless of the length of the initial lease. A long-term lease will no longer put a unit outside the cap.',
					'Exceptions become defenses. The old statute exempted certain increases. The new statute makes them affirmative defenses, which means a landlord charged with violating the cap has to prove the facts that bring the increase within the defense.',
					'Two defenses for rent increases. First, the tenant contractually agreed to the increase before the emergency was proclaimed. Second, the increase is directly attributable to the cost of repairs or additions beyond normal maintenance that were incurred within the year before the proclamation, and either the unit was rented, advertised, or offered for rent when the costs were incurred, or the owner can prove that, within that year, the intent to offer the unit for rent within six months of the work already existed.',
					'A tighter daily-rate rule. For housing that was not offered at a daily rate in the year before the emergency but is afterward, the bill sets the rental price at one-thirtieth of the amount that applies to housing not offered for rent in the prior year. That mostly affects short-term rentals.',
				],
			},
			{
				heading: 'How the Rental Price Is Measured',
				paragraphs: [
					'The cap is measured from the rent the tenant actually paid. For a unit rented within the year before the emergency, the baseline is the actual rent paid. For a unit not rented but offered within that year, it is the most recent rent offered. For a unit not rented or offered at all in the prior year, the statute uses 160% of the fair market rent set by the U.S. Department of Housing and Urban Development, plus 5% if the unit is offered fully furnished.',
					'For a unit that becomes vacant during the emergency and is covered by a local rent control ordinance, the baseline is the greater of the previous tenant’s actual rent or the HUD-based amount. The law does not let you add charges for other goods or services, such as gardening or utilities, to the baseline.',
				],
			},
			{
				heading: 'What It Does Not Change',
				paragraphs: [
					'Rent control still sets the limit. The statute says it does not authorize a landlord to charge more than a local rent control ordinance allows, so an RSO building stays under the City’s limit. For newer buildings, see our guide to the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/), which sets its own ceiling.',
					'Lawful evictions are still allowed. The statute says it does not stop an owner from evicting a tenant for any lawful reason. It does bar evicting a residential tenant and then renting the unit to someone else at a price above what the evicted tenant could be charged under the cap, though an eviction that was lawfully begun before the proclamation can continue.',
				],
			},
			{
				heading: 'What It Means for LA Owners',
				paragraphs: [
					'Plan renewals around the calendar. If an emergency has been declared where your building is, do not assume a two-year lease or a long-term renewal puts a larger increase outside the cap after January 1, 2027.',
					'Keep proof. To rely on either defense you need records: the tenant’s signed agreement and its date, invoices and permits that show when repair costs were incurred, and rent rolls, listings, or ads that show the unit was rented or offered for rent at the time. Organize them now, because the burden is on you.',
					'Know your local emergencies. Both state and local declarations trigger the cap, and local officials can extend it. Check your city and county announcements, and ask your attorney or apartment association before you send any increase above 10% during a declared emergency.',
					'Expect buyers to ask. A buyer reviewing a building that raised rents in the weeks after an emergency may ask how those increases comply. Clean records make a sale smoother. See our guides to [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/) and to [getting ready to sell](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/).',
				],
			},
			{
				heading: 'What About the El Niño Emergency?',
				paragraphs: [
					'On September 21, 2026, the Governor proclaimed a statewide state of emergency ahead of a forecast strong El Niño, which we describe in our [El Niño checklist for apartment owners](/insights/el-nino-2026-la-apartment-owners-checklist/). As we note there, the California Apartment Association reported that the proclamation expressly suspends the price gouging restrictions “at this time.” SB 1365 takes effect January 1, 2027, so it does not govern what you do today. Ask your attorney how it applies if an emergency is still in effect when it begins.',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'If you are thinking about selling, we can help you present your rent roll and records in the way buyers expect. Start with a free [Broker Opinion of Value](/contact/?intent=bov) or the [free property value calculator](/property-value/).',
					'This article is general information, not legal advice. Please confirm how SB 1365 applies to your property with an attorney.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[California Legislative Information: SB 1365 (Allen), chaptered September 30, 2026, Chapter 1028, Statutes of 2026](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB1365)',
				],
			},
		],
	},
	{
		slug: 'ab-628-stove-refrigerator-law-la-apartment-owners',
		title: 'AB 628: California’s Stove and Refrigerator Law for Rental Units',
		seoTitle: 'AB 628 Stove and Refrigerator Law: LA Owner Guide',
		description:
			'AB 628 requires a working stove and refrigerator in rentals under leases signed, amended, or extended from January 1, 2026. Exemptions, recalls, and sale prep.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'AB 628, signed October 6, 2025, adds a working stove and a working refrigerator to the list of things a California rental unit must have to be considered tenantable.',
					'It applies to leases entered into, amended, or extended on or after January 1, 2026.',
					'A tenant may supply their own refrigerator, but only under rules written into the lease, and a landlord cannot make it a condition of renting. The law has no similar option for stoves.',
					'Some housing is exempt, including single-room occupancy units and units with shared kitchens. For an owner preparing to sell, an appliance check is a simple way to avoid surprises in due diligence.',
				],
			},
			{
				heading: 'What the Law Requires',
				paragraphs: [
					'AB 628 amends Civil Code section 1941.1, the list of characteristics a dwelling needs so that it is not considered untenantable. The list already includes things like weatherproofing, plumbing, heating, and electrical service. For covered leases it now also includes:',
					'A stove that is maintained in good working order and capable of safely generating heat for cooking purposes.',
					'A refrigerator that is maintained in good working order and capable of safely storing food.',
					'The statute treats a stove or refrigerator that is subject to a recall by the manufacturer or a public entity as not capable of safely cooking or storing food.',
				],
			},
			{
				heading: 'Which Leases Are Covered',
				paragraphs: [
					'The new requirements apply only to a lease that is entered into, amended, or extended on or after January 1, 2026. A new lease signed this year is covered. A renewal or an amended lease is covered as well. The statute speaks of leases, and does not say how it treats a month-to-month tenancy that simply continues, so ask your attorney how to handle those units. The safest approach is to plan on every unit meeting the standard.',
				],
			},
			{
				heading: 'The Tenant-Supplied Refrigerator Option',
				paragraphs: [
					'Older buildings often have tenants who bring their own refrigerator. The law allows that, with conditions. The landlord and tenant must agree when the lease is signed, and the lease must include a statement in substantially this form: that under state law the landlord is required to provide a refrigerator in good working order, and that by checking the box the tenant acknowledges they asked to bring their own and are responsible for keeping it in working order.',
					'The lease must also say the tenant can give 30 days’ written notice that they no longer want to keep their own refrigerator, and that at the end of the 30 days the landlord will install one in good working order. A landlord may not condition the tenancy on the tenant providing a refrigerator, and is not responsible for maintaining one the tenant provides.',
					'The statute offers no equivalent arrangement for stoves, so plan on supplying the stove.',
				],
			},
			{
				heading: 'Recalls: The 30-Day Rule',
				paragraphs: [
					'If a stove or refrigerator is subject to a recall by the manufacturer or a public entity, the landlord must repair or replace it within 30 days of receiving notice of the recall. The statute does not say who must give that notice. The 30-day period does not take away any remedy the tenant already has under Civil Code section 1942, which lets a tenant repair dilapidations that make the premises untenantable, or move out, when a landlord neglects them.',
					'It is worth checking your appliances’ make and model numbers against the U.S. Consumer Product Safety Commission’s [recall database](https://www.cpsc.gov/Recalls).',
				],
			},
			{
				heading: 'Who Is Exempt',
				paragraphs: [
					'The stove and refrigerator requirements do not apply to permanent supportive housing, to single-room occupancy units that provide living and sleeping space for the occupant’s exclusive use (including those where occupants share food preparation facilities), to units in a residential hotel, or to dwelling units in a facility with shared or communal kitchen spaces, including assisted living facilities.',
				],
			},
			{
				heading: 'What Happens If a Unit Falls Short',
				paragraphs: [
					'The bill creates no separate fine. The consequence is that a unit that substantially lacks a working stove or refrigerator is deemed untenantable under section 1941.1, and the tenant’s existing remedies for untenantable housing apply. That is why an appliance that is missing, broken, or recalled is a real exposure and not a technicality.',
				],
			},
			{
				heading: 'Why This Matters When You Sell',
				paragraphs: [
					'A buyer’s inspection and unit walk-throughs will turn up missing, old, or tenant-owned appliances. If several units have them, a buyer may ask for a price credit or fold the cost into their offer. Getting ahead of it costs less than negotiating it in escrow.',
					'Before you list: walk the units and list each stove and refrigerator, noting who owns it and its age. Look up recalls. Replace what is broken. For tenant-owned refrigerators, document the lease language the statute requires when each lease is signed or renewed. Keep the records with your lease files so they are ready for buyers. Our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/) lists the other documents buyers ask for.',
					'AB 628 is part of a run of recent habitability rules that affect older buildings, along with [SB 721 balcony inspections](/insights/sb-721-balcony-inspection-los-angeles-apartment-owners/) and the [air conditioning rules and electrical panels](/insights/air-conditioning-law-los-angeles-apartment-owners-electrical-panel/). Buyers price the combined cost, so a clear picture of what is done and what is left helps your sale.',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'If you are thinking about selling an older building, request a free [Broker Opinion of Value](/contact/?intent=bov) and we will tell you which items buyers in your neighborhood are likely to raise. Or start with the [free property value calculator](/property-value/).',
					'This article is general information, not legal advice. Please confirm how AB 628 applies to your leases with an attorney.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[California Legislative Information: AB 628 (McKinnor), chaptered October 6, 2025, Chapter 342, Statutes of 2025](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB628)',
					'[U.S. Consumer Product Safety Commission: Recalls](https://www.cpsc.gov/Recalls)',
				],
			},
		],
	},
	{
		slug: 'la-rso-rent-increase-rules-2026-apartment-owners',
		title: 'LA Rent Stabilization in 2026: What Changed for Apartment Owners',
		seoTitle: 'LA RSO Rent Increase Rules 2026: What Owners Need to Know',
		description:
			'Los Angeles rewrote its rent control formula in 2025. What changed for RSO buildings in 2026: the annual increase, the utility add-on, and what buyers underwrite.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'The City of Los Angeles passed an ordinance in December 2025 that lowers how much rent can rise each year in buildings covered by the Rent Stabilization Ordinance (RSO).',
					'According to the Los Angeles Housing Department, since February 2, 2026 a landlord can no longer include any extra percentage for utilities in an annual increase.',
					'The City’s published annual increase for RSO units is 3%, and a council office page states it stays at 3% through June 30, 2027. The ordinance also describes a new formula, covered below, so confirm the current number and how it applies with the Housing Department before you send a notice.',
					'This is separate from the statewide AB 1482 cap, which applies to newer buildings and is 8.7% for increases effective on or after August 1, 2026.',
				],
			},
			{
				heading: 'Which Buildings Are Covered',
				paragraphs: [
					'The RSO generally covers apartment buildings in the City of Los Angeles with a certificate of occupancy issued before October 1, 1978. Newer buildings typically fall under the statewide cap instead. You can check a property on the City’s ZIMAS map, and the Housing Department lists a text-message lookup on its RSO page. Other cities, including [Santa Monica](/submarkets/santa-monica/), [West Hollywood](/submarkets/west-hollywood/), and [Beverly Hills](/submarkets/beverly-hills/), have their own rent control, so a building outside the City of Los Angeles follows different rules.',
				],
			},
			{
				heading: 'What the 2025 Ordinance Changed',
				paragraphs: [
					'The City Council passed the ordinance on December 12, 2025, and Mayor Bass signed it on December 23. The Apartment Association of Greater Los Angeles summarizes its main points as follows.',
					'A new formula. The annual allowable increase is to be calculated at 90% of the Consumer Price Index for all items, down from 100%, with a ceiling of 4%, down from 8%, and a floor of 1%, down from 3%.',
					'No utility add-on. The extra 1% previously allowed for owners who pay for gas or electricity on behalf of tenants was eliminated. The Housing Department says that beginning February 2, 2026, a landlord can no longer include any additional percentage increase for utilities.',
					'No automatic 10% for added dependents. The separate 10% increase that had been allowed when an additional dependent was added to a tenancy was eliminated.',
					'Relocation amounts. Relocation assistance amounts are to be adjusted each year using 100% of the CPI.',
				],
			},
			{
				heading: 'What You Can Charge Now',
				paragraphs: [
					'The Housing Department’s RSO rent increase calculator uses 3%, and a City Council office page last updated in March 2026 states that the RSO annual rent increase remains at 3% from July 1, 2025 to June 30, 2027. The Housing Department’s own announcement on its calculator page still describes the earlier period, so check it before you rely on a number.',
					'A few practical points. State law requires 30 days’ written notice for rent increases of less than 10%. The City’s RSO and Systematic Code Enforcement Program fees can be passed through to tenants only after you register the unit and give written notice. The calculator page lists the current pass-through amounts of $1.61 and $2.83 a month.',
				],
			},
			{
				heading: 'How This Compares With AB 1482',
				paragraphs: [
					'For newer buildings outside the RSO, the statewide rent cap is the lower of 10% or 5% plus the regional CPI change. For increases effective on or after August 1, 2026, that is 8.7%. Our [AB 1482 guide](/insights/ab-1482-rent-cap-2026/) explains how it is calculated.',
					'The gap is large. On a $2,000 rent, a 3% increase is $60 a month, and an 8.7% increase is $174. Over a year that is about $720 versus $2,088 per unit, which is why the two kinds of buildings are priced differently.',
				],
			},
			{
				heading: 'What It Means for Value',
				paragraphs: [
					'Buyers underwrite rents in place and the legal limit on how fast they can grow. A lower ceiling slows rent growth in an RSO building, and buyers give only partial credit for upside they cannot capture until units turn over. See our [cap rates and prices by neighborhood](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/).',
					'As an illustration, take a 10-unit building with $2,000 rents. A 3% increase adds $7,200 a year in rent. At a 6% cap rate, that income is worth about $120,000 to a buyer, and expenses that do not rise with rent mean most of it reaches net operating income. This is an example, not a quote for your building, but it shows why an unused allowable increase has value.',
					'Before you list, ask whether to take an allowable increase you have not yet used. Notices have to be served properly, and timing relative to a listing matters. A free [Broker Opinion of Value](/contact/?intent=bov) can show what the increase is worth to a buyer.',
				],
			},
			{
				heading: 'Selling an RSO Building',
				paragraphs: [
					'The rent rules stay with the building, so a buyer steps into your position. Have your RSO registration and fee records, rent increase notices, and rent roll ready. Our guide to [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/) walks through what buyers ask for, and our [property value calculator](/property-value/) gives a quick range.',
					'This article is general information, not legal advice. Rent rules change, so please confirm the current figures with the Los Angeles Housing Department or an attorney before you serve any notice.',
				],
			},
			{
				heading: 'Sources',
				paragraphs: [
					'[Los Angeles Housing Department: RSO Rent Increase Calculator](https://housing.lacity.gov/rso-rent-increase-calculator)',
					'[Councilmember Nithya Raman, Council District 4: Renters Rights and Protections](https://cd4.lacity.gov/initiative/renters-rights/)',
					'[Apartment Association of Greater Los Angeles: L.A. RSO Formula Change](https://members.aagla.org/news/la-rso-formula-change-we-address-the-1-adders-for-utilities)',
				],
			},
		],
	},
	{
		slug: 'la-apartment-building-due-diligence-checklist-for-buyers',
		title: 'LA Apartment Building Due Diligence Checklist for Buyers',
		seoTitle: 'LA Apartment Due Diligence Checklist for Buyers',
		description:
			'A due diligence checklist for buying an LA apartment building: rent roll and estoppels, rent control, SB 721, permits, property tax, and red flags.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Due diligence is the period after your offer is accepted when you check everything the seller told you. In Los Angeles, the biggest surprises tend to come from the rent roll, the rent control status, deferred maintenance, and missing permits.',
					'Verify income three ways: the rent roll, the leases and tenant estoppels, and the seller’s bank deposits.',
					'Order the building’s legal and compliance records early, because some of them take time to arrive.',
					'Anything you find is leverage. A good due diligence process ends in a lower price, a credit, or a decision to walk away before your deposit is at risk.',
				],
			},
			{
				heading: 'How the Due Diligence Period Works',
				paragraphs: [
					'Once the buyer and seller sign a purchase agreement and open escrow, the buyer has a set period to inspect the building and review its records before the deposit becomes non-refundable. The length of that period, the size of the deposit, and the buyer’s right to cancel are all negotiated, which is one reason the highest offer is not always the best one, as we explain in our guide to [selling an apartment building step by step](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/).',
					'Start the work the day escrow opens. Requests for records, inspections, and loan appraisals each take days, and you will not have time to do them one after another.',
				],
			},
			{
				heading: '1. Income: Check the Rent Roll Three Ways',
				paragraphs: [
					'The rent roll is the seller’s list of units, tenants, and rents. Treat it as a claim, not a fact. Compare it against the leases, against the tenant estoppels, which are short statements in which each tenant confirms their rent, deposit, and lease dates, and against the seller’s bank deposits for the last several months.',
					'Look for rents that differ between documents, units listed as occupied that have no lease, tenants on month-to-month terms, free rent or concessions, and income from laundry or parking that is not in the rent roll. Ask for the last two to three years of income and expenses, and a trailing twelve-month statement.',
					'On expenses, do not rely on the seller’s summary. Ask for the actual utility bills, insurance, property tax, repairs, and management costs, and add up what the building really costs to run. A water bill that crept up for a year can cost a buyer real value, as we show in our guide to [utility bill diligence](/insights/utility-bill-diligence-la-apartment-owners/): at a 7% cap rate, $8,000 of extra yearly expense lowers a building’s value by about $114,000.',
				],
			},
			{
				heading: '2. Rent Control and Tenant Law',
				paragraphs: [
					'Confirm which rules apply. In the City of Los Angeles, buildings with a certificate of occupancy issued before October 1, 1978 are generally covered by the Rent Stabilization Ordinance (RSO), and newer buildings typically fall under the statewide AB 1482 cap. You can look up an address on the City’s ZIMAS site, and the Housing Department answers questions at (866) 557-7368. Other cities, including Santa Monica, West Hollywood, and Beverly Hills, have their own rent control.',
					'Ask for proof that the RSO registration and fees are current, a record of rent increases and the notices behind them, and a history of any no-fault evictions and relocation payments. Check the increases against what the law allowed at the time; our guides to the [City’s 2026 RSO changes](/insights/la-rso-rent-increase-rules-2026-apartment-owners/) and the [AB 1482 cap](/insights/ab-1482-rent-cap-2026/) show the current limits. If the seller raised rents after a declared emergency, ask how they complied, since the rules are changing under [SB 1365](/insights/sb-1365-emergency-rent-cap-la-apartment-owners/).',
					'Also ask about any open or threatened tenant disputes, pending evictions, and the results of City code enforcement inspections, which are part of the Systematic Code Enforcement Program.',
				],
			},
			{
				heading: '3. The Physical Building',
				paragraphs: [
					'Hire a licensed inspector, and add specialists where the building calls for them. In older Los Angeles buildings, the items that most often drive cost are:',
					'Roof and drainage. Flat roofs, aging flashing, and clogged drains show up fast in a wet winter, as we describe in our [El Niño checklist](/insights/el-nino-2026-la-apartment-owners-checklist/).',
					'Plumbing. Older buildings may still have galvanized or cast-iron pipes. Ask for repair history and have a plumber scope the lines.',
					'Electrical. Ask what panels the building has and whether any are brands inspectors flag. Our guide to [air conditioning rules and electrical panels](/insights/air-conditioning-law-los-angeles-apartment-owners-electrical-panel/) explains why it matters when tenants or landlords add cooling.',
					'Seismic. Los Angeles requires retrofits of pre-1978 wood-frame soft-story buildings under a 2015 ordinance, so ask whether the building is covered and for proof that the work was done and permitted.',
					'Balconies and stairs. If the building has three or more units with elevated wood-supported balconies, decks, or stairways, ask for the SB 721 inspection report and proof of any repairs. See our [SB 721 guide](/insights/sb-721-balcony-inspection-los-angeles-apartment-owners/).',
					'Appliances. For leases entered into, amended, or extended on or after January 1, 2026, each unit needs a working stove and refrigerator under [AB 628](/insights/ab-628-stove-refrigerator-law-la-apartment-owners/). Count the units that do not have them.',
					'Lead paint. Federal law requires sellers of housing built before 1978 to disclose known lead-based paint hazards.',
				],
			},
			{
				heading: '4. Permits and the Unit Count',
				paragraphs: [
					'Compare the number of units the City has on record with the number being rented. A unit that was added without permits can bring orders to correct or remove it, and it is a classic way for a building’s income to be overstated. Pull the permit history on ZIMAS and with the Los Angeles Department of Building and Safety, look for open permits and unpermitted work, and ask the seller to explain any difference.',
				],
			},
			{
				heading: '5. Taxes, Insurance, and Transfer Costs',
				paragraphs: [
					'Property tax. A purchase triggers a reassessment. Proposition 13 sets the base rate at 1% of the purchase price, and voter-approved assessments and direct charges are added to it, so the seller’s current tax bill tells you very little about yours. Model your own.',
					'Insurance. Get quotes before you remove contingencies. Ask for the seller’s claims history, since a building’s loss record affects the price and availability of coverage.',
					'Transfer taxes. Check who pays under the contract. In the City of Los Angeles, the Measure ULA tax is figured on the gross price, including any loan the buyer assumes, so an assumed loan does not reduce it. See our [Measure ULA guide](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/) and [calculator](/measure-ula-calculator/). It matters to you twice: it can affect the seller’s pricing now, and it will affect your own exit later.',
				],
			},
			{
				heading: '6. Title, Environmental, and Financing',
				paragraphs: [
					'Read the preliminary title report for liens, easements, and anything recorded against the property. If your lender or the building’s history calls for it, order an environmental report. Coordinate your loan appraisal early, because a lender’s appraisal that comes in below the price can force you to renegotiate or bring more cash. Our guide to [financing an apartment building](/insights/financing-an-apartment-building-in-los-angeles/) explains how lenders look at the building.',
				],
			},
			{
				heading: 'Red Flags',
				paragraphs: [
					'Rents on the rent roll that tenants or leases contradict.',
					'Expenses that look too low, or a seller who will not provide actual bills.',
					'No record of RSO registration, or increases that exceed what the law allowed.',
					'Units that are rented but not on the City’s records.',
					'Deferred maintenance that the seller describes as minor and the inspector does not.',
					'A seller who resists estoppels or access to units.',
				],
			},
			{
				heading: 'Build the Right Team',
				paragraphs: [
					'Most buyers need a real estate attorney, a licensed inspector, a CPA, a lender, and a broker who knows the neighborhood. We represent buyers as well as sellers, and our [closed sales](/closed-sales/) page shows which side we were on in each deal. If you are weighing a building, you can [contact us](/contact/) and we will walk through the numbers.',
					'This article is general information, not legal, tax, or investment advice.',
				],
			},
		],
	},
	{
		slug: 'financing-an-apartment-building-in-los-angeles',
		title: 'How to Finance an Apartment Building in Los Angeles',
		seoTitle: 'Financing an LA Apartment Building: Loan Options Explained',
		description:
			'How buyers finance LA apartment buildings: agency, bank, and bridge loans, what lenders test, and why a higher interest rate can cut your cash return.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Buildings with up to four units can generally be financed with residential mortgages. Buildings with five or more units need commercial loans, which look hard at the building’s income.',
					'Lenders size a loan on the lowest of a few tests: how much of the value they will lend, and how well the building’s net operating income covers the payment.',
					'When your loan’s interest rate is higher than the building’s cap rate, borrowing can lower your cash-on-cash return instead of raising it.',
					'Programs, loan limits, and rates change often. Treat any number in an older guide as out of date and ask a lender for a current quote. We are brokers, not lenders.',
				],
			},
			{
				heading: 'Residential Loans or Commercial Loans',
				paragraphs: [
					'The size of the building decides the kind of loan. Buildings with up to four units can generally be financed with residential mortgages, which lean heavily on the buyer’s income and credit. Buildings with five or more units need commercial loans, which look at the building’s net operating income and cap rate, as we explain in our guide to [selling a fourplex or small apartment building](/insights/selling-a-fourplex-or-small-apartment-building-in-los-angeles/).',
					'That difference changes who your lender is and how long the process takes, so decide which kind of building you are shopping for before you make offers.',
				],
			},
			{
				heading: 'Where Apartment Loans Come From',
				paragraphs: [
					'Agency lenders. Fannie Mae and Freddie Mac both run programs for smaller apartment buildings, delivered through approved lenders. These programs have been revised recently, so terms in older guides may no longer apply, and the details of loan size, leverage, and coverage should come from a current quote.',
					'Banks and credit unions. Local and regional lenders often hold loans on their own books. They can be flexible and fast, but they may offer shorter fixed periods and may ask for a personal guarantee.',
					'Life insurance companies and other institutions. These lenders usually focus on larger, stable buildings and lend at lower leverage.',
					'Bridge lenders. Short-term loans fit a building that is not stable yet, such as one that needs renovation or lease-up, with the plan of refinancing into a longer loan later. They tend to cost more.',
					'Seller financing and assumable loans. Occasionally a seller carries part of the price, or the buyer takes over the seller’s existing loan. If a buyer assumes a loan, remember that in the City of Los Angeles the Measure ULA tax is calculated on the gross value, including the loan, so assuming debt does not reduce it.',
				],
			},
			{
				heading: 'What Lenders Test',
				paragraphs: [
					'Debt service coverage. The debt service coverage ratio (DSCR) is the building’s net operating income divided by the year’s loan payments. A ratio of 1.0 means the building just covers the payment. Lenders set a minimum, often somewhere around 1.2 to 1.35 times, and it varies by lender and loan.',
					'Loan-to-value. The loan is also capped at a percentage of the property’s value, so a lender’s appraisal matters. If the appraisal comes in below your price, you may have to bring more cash. See [Broker Opinion of Value vs. appraisal](/insights/broker-opinion-of-value-vs-appraisal-apartment-building/).',
					'Debt yield. Some lenders also look at net operating income divided by the loan amount.',
					'The borrower. Lenders look at experience, liquidity, and net worth, and they will ask whether the loan is recourse, meaning you are personally liable, or non-recourse.',
					'Terms. Compare the interest rate, whether it is fixed or floating, any interest-only period, the length of the term against the amortization, and the prepayment penalty if you sell or refinance early.',
				],
			},
			{
				heading: 'How Lenders Treat Rent Control',
				paragraphs: [
					'Lenders underwrite the rents actually in place, and they apply their own assumptions for vacancy, expenses, and reserves. They give no credit for the rents a building could reach if units turned over. For a rent-controlled building that sits below market, that is conservative but realistic, because the owner cannot raise rents to market while tenants remain. Our guide to [how apartment buildings are valued](/insights/how-to-value-an-apartment-building-in-los-angeles/) shows how buyers and lenders see the same income.',
				],
			},
			{
				heading: 'Why a Higher Rate Can Cut Your Return',
				paragraphs: [
					'Take a 10-unit building bought for $2,400,000, with net operating income of $144,000. That is a 6.0% cap rate. These are illustrative assumptions, not a quote or a forecast.',
					'Buy it all cash and your return on the investment is the cap rate, 6.0%.',
					'Now borrow 65%, or $1,560,000, on a 30-year loan at 6.5%. The payments come to about $118,300 a year, which leaves $25,700 of cash flow on $840,000 of equity, a cash-on-cash return of about 3.1%, and a debt service coverage ratio of 1.22.',
					'The loan lowered the return, because it costs more than the building earns on the borrowed money. At a 5.0% rate, the same loan costs about $100,500 a year, and the cash-on-cash return rises to about 5.2%, with coverage of 1.43. Borrowing helps only when the rate is below the cap rate, or when you can raise the income. We go through the math in our guide to [cap rate, cash-on-cash return, and GRM](/insights/how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm/).',
				],
			},
			{
				heading: 'Financing and Your 1031 Exchange',
				paragraphs: [
					'If you are buying with the proceeds of a sale, your loan has to close inside the exchange timeline: 45 days to identify a replacement property and 180 days to close. Talk to a lender before you identify a property, not after, and read our [1031 exchange guide](/1031-exchanges/).',
				],
			},
			{
				heading: 'A Practical Order of Operations',
				paragraphs: [
					'Talk to two or three lenders before you start making offers, so you know the loan you can realistically get. Ask each for a quote on the kind of building you want, and compare rate, leverage, coverage, prepayment, and recourse. Once your offer is accepted, order the appraisal early, and line up the loan’s timeline with your due diligence period. Our [due diligence checklist](/insights/la-apartment-building-due-diligence-checklist-for-buyers/) covers what to review while the loan is being underwritten.',
					'This article is general information, not financial advice or a loan offer. Please confirm current programs, terms, and rates with a lender.',
				],
			},
		],
	},
	{
		slug: 'how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm',
		title: 'How to Analyze an LA Apartment Building: Cap Rate, Cash-on-Cash, and GRM',
		seoTitle: 'Analyze an LA Apartment Building: Cap Rate and Cash-on-Cash',
		description:
			'Learn cap rate, GRM, DSCR, and cash-on-cash return with one worked LA example, and see how rent control and interest rates change the numbers for buyers.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Net operating income (NOI) is the building’s income after operating expenses and before loan payments. Almost every other measure starts from it.',
					'The cap rate is NOI divided by price. It tells you the return if you bought the building with all cash.',
					'Cash-on-cash return and debt service coverage show how a loan changes the picture, for better or worse.',
					'In Los Angeles, rent control limits how fast income can grow, so a building’s price should be judged on the rents in place, not on what the rents could be.',
				],
			},
			{
				heading: 'Step 1: Net Operating Income',
				paragraphs: [
					'Start with the rent the building actually collects over a year. Subtract operating expenses: property tax, insurance, utilities, repairs and maintenance, management, and a vacancy allowance. Do not subtract loan payments or income taxes. What is left is the NOI.',
					'Expenses are the number buyers most often get wrong. As a rough guide, the expense ratios our own free [property value calculator](/property-value/) uses are 37% to 47% of rent for buildings built before 1935, 37% to 42% for other rent-controlled buildings, and 32% to 36% for buildings built in 1978 or later. Your building’s actual bills matter far more than any rule of thumb.',
				],
			},
			{
				heading: 'Step 2: Cap Rate',
				paragraphs: [
					'The capitalization rate is NOI divided by the price. If you know the NOI and the cap rate buyers are paying, flip it around: value is NOI divided by the cap rate. A lower cap rate means buyers are paying more for each dollar of income. Cap rates differ a lot between neighborhoods and between older and newer buildings, which is why we publish the 2026 ranges in our guide to [cap rates and prices by neighborhood](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/).',
				],
			},
			{
				heading: 'Step 3: GRM and Price Per Unit',
				paragraphs: [
					'The gross rent multiplier (GRM) is the price divided by the year’s gross rent. It is quick, and it ignores expenses, so it can mislead when two buildings have different costs. Price per unit and price per square foot are also quick checks, not valuations. Use them to see whether a price is in the range of recent sales, and use NOI to decide whether it is worth paying.',
				],
			},
			{
				heading: 'A Worked Example',
				paragraphs: [
					'These numbers are illustrative assumptions, not a quote or a forecast. A 10-unit building collects $240,000 of rent a year. Operating expenses, including a vacancy allowance, are 40% of that, or $96,000, so the NOI is $144,000.',
					'At a 6.0% cap rate, the value is $144,000 divided by 0.06, or $2,400,000. That is $240,000 per unit and a GRM of 10.0 ($2,400,000 divided by $240,000 of rent).',
					'Now add a loan: 65% of the price, or $1,560,000, on a 30-year schedule at 6.5%. The year’s payments are about $118,300, so the DSCR is $144,000 divided by $118,300, or 1.22. The cash flow after the loan is about $25,700. The buyer put in $840,000 of equity, so the cash-on-cash return is about 3.1%, before closing costs.',
					'The building earned 6.0% on the price, and the loan lowered the buyer’s return, because borrowing at 6.5% costs more than the building yields. That is why the rate matters as much as the price. At 5.0%, the payments would be about $100,500, the DSCR 1.43, and the cash-on-cash return about 5.2%.',
				],
			},
			{
				heading: 'What Rent Control Does to the Numbers',
				paragraphs: [
					'In a rent-stabilized building, the City’s published annual increase is 3%, and in newer buildings the statewide AB 1482 cap is 8.7% for increases effective on or after August 1, 2026. On our example, a 3% increase adds $7,200 a year, and at a 6.0% cap rate that income is worth about $120,000. See our guides to the [City’s RSO changes](/insights/la-rso-rent-increase-rules-2026-apartment-owners/) and the [AB 1482 cap](/insights/ab-1482-rent-cap-2026/).',
					'Under-market rents on a rent-controlled building look like upside, but the owner cannot capture it until units turn over. Price the building on the rents in place, and treat any upside as a bonus.',
				],
			},
			{
				heading: 'Reality Checks Before You Offer',
				paragraphs: [
					'Use the actual rent roll and bills, not a pro forma. Rebuild the NOI yourself and see whether it matches the seller’s.',
					'Compare the cap rate with recent sales in the same neighborhood and age group, not a citywide average.',
					'Run your loan at today’s quote, and check the DSCR and the cash-on-cash return. See our guide to [financing an apartment building](/insights/financing-an-apartment-building-in-los-angeles/).',
					'Look ahead to your exit. If a future sale could land above $5.4 million inside the City of Los Angeles, the Measure ULA tax applies to the whole price; see our [Measure ULA calculator](/measure-ula-calculator/).',
					'Do the due diligence. Our [checklist](/insights/la-apartment-building-due-diligence-checklist-for-buyers/) covers what can change the numbers.',
				],
			},
			{
				heading: 'Talk With Us',
				paragraphs: [
					'If you want a second set of eyes on a building you are considering, [contact us](/contact/). We represent buyers as well as sellers and can run the numbers with you. This article is general information, not investment advice.',
				],
			},
		],
	},
	{
		slug: 'mistakes-buying-an-apartment-building-in-los-angeles',
		title: 'Nine Mistakes Buyers Make When Buying an LA Apartment Building',
		seoTitle: '9 Mistakes When Buying an LA Apartment Building',
		description:
			'The mistakes buyers make on LA apartment buildings: trusting pro forma rents, skipping estoppels, ignoring rent control and reassessment, and over-borrowing.',
		date: '2026-10-27',
		sections: [
			{
				heading: 'Key Takeaways',
				paragraphs: [
					'Most buying mistakes come from believing a number you have not checked.',
					'The expensive ones in Los Angeles involve rent control, deferred maintenance and compliance, property tax reassessment, and borrowing at a rate higher than the building’s cap rate.',
					'Each one is avoidable with a few weeks of disciplined due diligence.',
				],
			},
			{
				heading: '1. Underwriting Rents the Building Cannot Charge',
				paragraphs: [
					'A pro forma that assumes below-market rents will move to market is a fantasy in a rent-controlled building. Under the Rent Stabilization Ordinance the owner generally cannot raise a sitting tenant’s rent beyond the allowable increase, which the City currently publishes at 3%, and units reach market rent only when tenants leave. Underwrite the rents in place, and treat the rest as upside. See our guide to the [City’s 2026 RSO changes](/insights/la-rso-rent-increase-rules-2026-apartment-owners/).',
				],
			},
			{
				heading: '2. Trusting the Rent Roll',
				paragraphs: [
					'A rent roll is the seller’s claim. Compare it with the leases, the tenant estoppels, and the seller’s bank deposits. A building whose income does not hold up in due diligence is a common reason a deal reprices or falls apart.',
				],
			},
			{
				heading: '3. Underestimating Deferred Maintenance and Compliance',
				paragraphs: [
					'Older buildings carry costs that do not show on the income statement: roofs, plumbing, electrical panels, and seismic retrofits, plus newer rules such as [SB 721 balcony inspections](/insights/sb-721-balcony-inspection-los-angeles-apartment-owners/), the [stove and refrigerator requirement](/insights/ab-628-stove-refrigerator-law-la-apartment-owners/), and the [air conditioning rules](/insights/air-conditioning-law-los-angeles-apartment-owners-electrical-panel/). Get quotes before you remove contingencies and price the work into your offer.',
				],
			},
			{
				heading: '4. Forgetting the Property Tax Reassessment',
				paragraphs: [
					'The seller’s tax bill is based on an older assessment. When you buy, the building is reassessed at the purchase price, with Proposition 13’s base rate of 1% plus voter-approved assessments and direct charges. Model your own bill, not theirs.',
				],
			},
			{
				heading: '5. Taking the Seller’s Expenses at Face Value',
				paragraphs: [
					'A seller’s summary can leave out or understate costs, and a slow leak can run for months. Pull the actual utility, insurance, and repair records. Each dollar of overstated income or understated expense is worth many dollars of price at a 6% cap rate. See [utility bill diligence](/insights/utility-bill-diligence-la-apartment-owners/).',
				],
			},
			{
				heading: '6. Borrowing at a Rate Above the Cap Rate',
				paragraphs: [
					'When the loan’s interest rate is higher than the cap rate, leverage lowers your cash return. In our worked example, a 6.0% cap rate building financed at 6.5% returned about 3.1% on the buyer’s cash. Run the numbers at today’s quote, and leave a cushion in the debt service coverage. See [financing an apartment building](/insights/financing-an-apartment-building-in-los-angeles/) and [cap rate, cash-on-cash, and GRM](/insights/how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm/).',
				],
			},
			{
				heading: '7. Using the Wrong Comparable Sales',
				paragraphs: [
					'A cap rate in Santa Monica is not a cap rate in Koreatown, and a newer building does not price like a 1950s rent-controlled one. Compare with recent sales in the same neighborhood and age group. We publish 2026 ranges in our [cap rates and prices by neighborhood](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/) guide and on each [neighborhood page](/submarkets/).',
				],
			},
			{
				heading: '8. Not Planning the Exit',
				paragraphs: [
					'The day you buy is the day to think about selling. If your building could be priced above $5.4 million inside the City of Los Angeles, the Measure ULA tax applies to the whole price at sale, and the thresholds adjust every year. See [hold or sell under Measure ULA](/insights/measure-ula-hold-or-sell-la-apartment-building/) and the [calculator](/measure-ula-calculator/).',
				],
			},
			{
				heading: '9. Going In Without a Team',
				paragraphs: [
					'A real estate attorney, a licensed inspector, a CPA, a lender, and a broker who knows the neighborhood each catch different problems. Skipping one to save money is how a manageable issue becomes an expensive one. Our [due diligence checklist](/insights/la-apartment-building-due-diligence-checklist-for-buyers/) shows what each one should review.',
					'We represent buyers as well as sellers. If you are looking at a building, [contact us](/contact/). This article is general information, not legal, tax, or investment advice.',
				],
			},
		],
	},
];

// Scheduled publishing: a post dated in the future is held back until that date (Pacific time). The
// site is static, so it only appears once a build runs on or after its date; a daily GitHub Action
// (.github/workflows/publish-scheduled.yml) triggers that build on any morning with something due.
const todayPacific = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date());

// Newest first. The sort is stable, so posts sharing a date keep their order in allPosts.
export const posts: Post[] = allPosts
	.filter((post) => post.date <= todayPacific)
	.sort((a, b) => b.date.localeCompare(a.date));
export const scheduledPosts: Post[] = allPosts.filter((post) => post.date > todayPacific);

// "Related reading" shown at the end of each article: three hand-picked posts per slug, chosen by
// topic so each article links onward to the ones a reader would want next. Slugs that are not live
// yet (scheduled) are skipped at render time, so a post can be listed here before it publishes.
export const relatedPostSlugs: Record<string, string[]> = {
	'how-to-choose-a-multifamily-broker-in-los-angeles': ['how-to-sell-an-apartment-building-in-los-angeles-step-by-step', 'selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles', 'should-i-sell-my-la-apartment-building'],
	'how-to-value-an-apartment-building-in-los-angeles': ['should-i-sell-my-la-apartment-building', 'la-apartment-cap-rates-and-prices-by-neighborhood-2026', 'broker-opinion-of-value-vs-appraisal-apartment-building'],
	'should-i-sell-my-la-apartment-building': ['how-to-sell-an-apartment-building-in-los-angeles-step-by-step', 'capital-gains-depreciation-recapture-selling-la-apartment-building', 'how-to-choose-a-multifamily-broker-in-los-angeles'],
	'selling-la-apartment-building-with-tenants-rent-control': ['ab-1482-rent-cap-2026', 'how-to-choose-a-multifamily-broker-in-los-angeles', 'selling-a-fourplex-or-small-apartment-building-in-los-angeles'],
	'capital-gains-depreciation-recapture-selling-la-apartment-building': ['1031-exchange-into-triple-net-properties', 'measure-ula-2026-thresholds-selling-la-apartment-building', 'selling-la-apartment-building-before-year-end'],
	'measure-ula-2026-thresholds-selling-la-apartment-building': ['measure-ula-hold-or-sell-la-apartment-building', 'capital-gains-depreciation-recapture-selling-la-apartment-building', 'selling-la-apartment-building-before-year-end'],
	'el-nino-2026-la-apartment-owners-checklist': ['ab-1482-rent-cap-2026', 'selling-la-apartment-building-with-tenants-rent-control', 'utility-bill-diligence-la-apartment-owners'],
	'selling-la-apartment-building-before-year-end': ['capital-gains-depreciation-recapture-selling-la-apartment-building', '1031-exchange-into-triple-net-properties', 'should-i-sell-my-la-apartment-building'],
	'ab-1482-rent-cap-2026': ['la-rso-rent-increase-rules-2026-apartment-owners', 'selling-la-apartment-building-with-tenants-rent-control', 'sb-1365-emergency-rent-cap-la-apartment-owners'],
	'utility-bill-diligence-la-apartment-owners': ['how-to-value-an-apartment-building-in-los-angeles', 'el-nino-2026-la-apartment-owners-checklist', 'should-i-sell-my-la-apartment-building'],
	'1031-exchange-into-triple-net-properties': ['capital-gains-depreciation-recapture-selling-la-apartment-building', 'selling-la-apartment-building-before-year-end', 'should-i-sell-my-la-apartment-building'],
	'la-apartment-cap-rates-and-prices-by-neighborhood-2026': ['how-to-value-an-apartment-building-in-los-angeles', 'broker-opinion-of-value-vs-appraisal-apartment-building', 'should-i-sell-my-la-apartment-building'],
	'how-to-sell-an-apartment-building-in-los-angeles-step-by-step': ['should-i-sell-my-la-apartment-building', 'how-to-choose-a-multifamily-broker-in-los-angeles', 'selling-la-apartment-building-before-year-end'],
	'broker-opinion-of-value-vs-appraisal-apartment-building': ['how-to-value-an-apartment-building-in-los-angeles', 'la-apartment-cap-rates-and-prices-by-neighborhood-2026', 'how-to-choose-a-multifamily-broker-in-los-angeles'],
	'selling-a-fourplex-or-small-apartment-building-in-los-angeles': ['how-to-value-an-apartment-building-in-los-angeles', 'selling-la-apartment-building-with-tenants-rent-control', 'how-to-sell-an-apartment-building-in-los-angeles-step-by-step'],
	'selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles': ['how-to-sell-an-apartment-building-in-los-angeles-step-by-step', 'how-to-choose-a-multifamily-broker-in-los-angeles', 'should-i-sell-my-la-apartment-building'],
	'la-apartment-market-update-q3-2026': ['la-apartment-cap-rates-and-prices-by-neighborhood-2026', 'how-to-value-an-apartment-building-in-los-angeles', 'should-i-sell-my-la-apartment-building'],
	'inherited-apartment-building-los-angeles-what-to-do': ['capital-gains-depreciation-recapture-selling-la-apartment-building', 'broker-opinion-of-value-vs-appraisal-apartment-building', 'selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles'],
	'sb-721-balcony-inspection-los-angeles-apartment-owners': ['how-to-value-an-apartment-building-in-los-angeles', 'how-to-sell-an-apartment-building-in-los-angeles-step-by-step', 'selling-la-apartment-building-with-tenants-rent-control'],
	'air-conditioning-law-los-angeles-apartment-owners-electrical-panel': ['sb-721-balcony-inspection-los-angeles-apartment-owners', 'how-to-value-an-apartment-building-in-los-angeles', 'selling-la-apartment-building-with-tenants-rent-control'],
	'measure-ula-hold-or-sell-la-apartment-building': ['measure-ula-2026-thresholds-selling-la-apartment-building', 'capital-gains-depreciation-recapture-selling-la-apartment-building', 'should-i-sell-my-la-apartment-building'],
	'sb-1365-emergency-rent-cap-la-apartment-owners': ['ab-1482-rent-cap-2026', 'el-nino-2026-la-apartment-owners-checklist', 'selling-la-apartment-building-with-tenants-rent-control'],
	'ab-628-stove-refrigerator-law-la-apartment-owners': ['sb-721-balcony-inspection-los-angeles-apartment-owners', 'air-conditioning-law-los-angeles-apartment-owners-electrical-panel', 'how-to-sell-an-apartment-building-in-los-angeles-step-by-step'],
	'la-rso-rent-increase-rules-2026-apartment-owners': ['ab-1482-rent-cap-2026', 'selling-la-apartment-building-with-tenants-rent-control', 'la-apartment-cap-rates-and-prices-by-neighborhood-2026'],
	'la-apartment-building-due-diligence-checklist-for-buyers': ['financing-an-apartment-building-in-los-angeles', 'how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm', 'mistakes-buying-an-apartment-building-in-los-angeles'],
	'financing-an-apartment-building-in-los-angeles': ['how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm', 'la-apartment-building-due-diligence-checklist-for-buyers', 'broker-opinion-of-value-vs-appraisal-apartment-building'],
	'how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm': ['la-apartment-cap-rates-and-prices-by-neighborhood-2026', 'financing-an-apartment-building-in-los-angeles', 'la-apartment-building-due-diligence-checklist-for-buyers'],
	'mistakes-buying-an-apartment-building-in-los-angeles': ['la-apartment-building-due-diligence-checklist-for-buyers', 'financing-an-apartment-building-in-los-angeles', 'how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm'],
};

// Questions and answers shown at the end of an article (and written into its FAQPage structured data),
// keyed by post slug. Every answer restates facts already in the article it belongs to, so edit the
// two together. Answers can use [link text](/path/) links.
export type PostFaq = { q: string; a: string };

export const postFaqs: Record<string, PostFaq[]> = {
	'how-to-choose-a-multifamily-broker-in-los-angeles': [
		{
			q: 'How do I choose a good real estate broker to sell my apartment building in Los Angeles?',
			a: 'Look for a specialist in apartment buildings, with closed sales you can verify, recent experience in your neighborhood, an honest pricing opinion backed by comparable sales, a clear plan for reaching buyers, and references from past sellers. It is worth interviewing more than one broker.',
		},
		{
			q: 'How do I know if a real estate broker is any good? How can I check their track record?',
			a: 'Ask for a list of recent apartment sales with addresses, unit counts, and prices, then check them, since sale prices of recorded transactions are public. Also ask which sales the broker represented directly and when, because some brokers count deals they only assisted with or deals from a previous firm. Our [closed sales](/closed-sales/) page shows what a verifiable record looks like.',
		},
		{
			q: 'Should I hire the real estate agent who tells me the highest price for my building?',
			a: 'Not on that basis alone. A broker who promises a high price can leave you with a building that sits on the market and then sells for less after a price cut. A trustworthy opinion of value shows its work: comparable sales, the cap rate it assumes, your income and expenses, and an estimate of what you would net after taxes and costs.',
		},
		{
			q: 'What questions should I ask a broker before I list my apartment building?',
			a: 'Ask which recent apartment sales they have personally closed, what the three best comparable sales for your building are and why, what price they recommend and what you would net, how they will market the building, who will handle your sale day to day, what their listing terms are, and whether you can speak with owners they have represented.',
		},
		{
			q: 'What are the warning signs of a bad real estate broker?',
			a: 'Watch for a price far above every other opinion with no comparable sales to support it, pressure to sign quickly, vague answers about the broker’s own track record, a long listing agreement with no way out, and a reluctance to provide references.',
		},
		{
			q: 'How do I check if a real estate broker is licensed in California?',
			a: 'Use the [California Department of Real Estate license lookup](https://www2.dre.ca.gov/PublicASP/pplinfo.asp) to confirm a broker’s license before you sign anything.',
		},
	],
	'how-to-value-an-apartment-building-in-los-angeles': [
		{
			q: 'How is an apartment building valued in Los Angeles, and how do I figure out what mine is worth?',
			a: 'Mainly on its income, not its looks or its asking price. The core measure is net operating income (NOI) divided by a market cap rate, checked against recent comparable sales. In Los Angeles, rent control, building age, condition, and in-place rents versus market rents also move the price.',
		},
		{
			q: 'What is a cap rate, and how do I use it to figure out what my building is worth?',
			a: 'The cap rate is NOI divided by price. Flip it around and value is NOI divided by the cap rate. For example, a building with $100,000 of NOI that buyers are pricing at a 5.5% cap rate is worth about $1.8 million. A lower cap rate means buyers are paying more for each dollar of income.',
		},
		{
			q: 'What is a good cap rate for an apartment building in Los Angeles?',
			a: 'It depends on the neighborhood. In 2026 sales through September, rent-stabilized buildings (built before 1978) with a recorded cap rate traded at a typical range of 5.86% to 7.34% in Koreatown, 5.55% to 6.98% in North Hollywood, and 4.81% to 5.96% in Santa Monica. See our [cap rates and prices by neighborhood](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/) and each [neighborhood page](/submarkets/) for the number of sales behind each range.',
		},
		{
			q: 'How much is an apartment building worth per unit in Los Angeles?',
			a: 'No. Price per unit and price per square foot are quick sanity checks, not valuations, because they ignore income, condition, and rent levels. They also vary widely: among rent-stabilized buildings sold so far in 2026, the median price per unit was about $173,700 in Koreatown, $189,500 in North Hollywood, and $388,300 in Santa Monica.',
		},
		{
			q: 'Does rent control lower the value of my apartment building?',
			a: 'Rent control limits how fast income can grow, so it directly affects value. Buildings built before October 1, 1978 are generally covered by the City’s Rent Stabilization Ordinance, and newer buildings fall under the statewide cap. Buyers price a building on the rents in place and give only partial credit for upside, because under rent control they cannot capture it until units turn over.',
		},
		{
			q: 'How can I find out how much my apartment building is worth for free?',
			a: 'For a quick range, try our [free property value calculator](/property-value/), which uses real 2026 sales in your neighborhood. For a number you can plan around, request a free [Broker Opinion of Value](/contact/?intent=bov), built from your actual rent roll, expenses, and condition.',
		},
	],
	'should-i-sell-my-la-apartment-building': [
		{
			q: 'Is now a good time to sell my apartment building, and how do I decide?',
			a: 'There is no single right answer, because it depends on your goals as much as on the market. Seven questions help: what you want the building to do for you, what it is worth today, what you would net after taxes and costs, what it will cost you over the next five years, where your rents sit compared with the market, what your options are besides selling, and what your timeline is.',
		},
		{
			q: 'How much money will I actually walk away with if I sell my apartment building?',
			a: 'Less than the sale price. Federal and California capital gains tax, depreciation recapture, commissions, and closing costs all come out first, and for buildings near the top of the market the City of Los Angeles transfer tax can matter a great deal. See our guides to [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/) and [Measure ULA](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/), and ask your CPA to estimate your tax.',
		},
		{
			q: 'What are my options besides selling my apartment building?',
			a: 'Yes. Depending on your situation, you could keep the building and bring in better management, refinance, or sell and defer your capital gains tax with a [1031 exchange](/1031-exchanges/). Owners who want to stop managing property but keep the income often look at [triple-net (NNN) and DST investments](/triple-net-dst/).',
		},
		{
			q: 'How long does it take to sell an apartment building in Los Angeles?',
			a: 'A typical Los Angeles apartment sale takes 60 to 90 days from listing to closing, though every deal is different. If you want a sale to land in a particular tax year, or you are working against a 1031 exchange deadline, the calendar matters. See [selling before year-end](/insights/selling-la-apartment-building-before-year-end/).',
		},
		{
			q: 'How do I find out what my rental property is worth before I decide to sell?',
			a: 'Start with our [free property value calculator](/property-value/) for a quick range based on real, recent LA County sales. A free [Broker Opinion of Value](/contact/?intent=bov) goes further by looking at your actual rents, condition, and unit mix.',
		},
	],
	'selling-la-apartment-building-with-tenants-rent-control': [
		{
			q: 'Can I sell my apartment building with tenants still living in it?',
			a: 'Yes. Most apartment buildings in Los Angeles sell with tenants in place, and many buyers look for occupied buildings with stable income. A sale does not by itself end anyone’s tenancy. The leases and the rent rules that apply to the building stay with the building, so the new owner steps into the owner’s position.',
		},
		{
			q: 'How do I know if my building is rent controlled in Los Angeles?',
			a: 'Apartment buildings in Los Angeles with a certificate of occupancy issued before October 1, 1978 are generally covered by the City’s Rent Stabilization Ordinance (RSO), which limits annual increases and adds eviction protections. Newer buildings typically fall under the statewide AB 1482 cap instead. See our article on the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/).',
		},
		{
			q: 'My tenants pay low rent. How does that affect what I can sell my building for?',
			a: 'Buyers call the gap between in-place and market rents the loss to lease, and they value it carefully. They usually price the building on the rents in place, then add some value for the upside they can capture as units turn over naturally. A building with all long-term tenants sells differently from one with several vacant units.',
		},
		{
			q: 'Can I raise the rent to market price when a tenant moves out of a rent-controlled unit?',
			a: 'Under California law, a unit that becomes vacant can generally be re-rented at market rent, which is why units delivered vacant are attractive to buyers. Any agreement to have a tenant move out voluntarily has to follow state and City rules, so talk to a landlord-tenant attorney before offering or signing one.',
		},
		{
			q: 'What do I need to get ready before selling a building with tenants?',
			a: 'Build an accurate rent roll, gather each tenant’s lease and a clear record of security deposits (which transfer to the buyer), confirm your RSO registration and fees are current, and expect buyers to request estoppels, in which tenants confirm the terms of their tenancy during escrow.',
		},
		{
			q: 'What should I tell my tenants when I am selling the building?',
			a: 'Tell them honestly, and do not promise anything on a buyer’s behalf. Most tenants just want to know that their lease and their rent stay the same, and in a sale of an occupied building they generally do. Showings, inspections, and estoppels require some access to units, so plan for them with proper written notice.',
		},
	],
	'capital-gains-depreciation-recapture-selling-la-apartment-building': [
		{
			q: 'How much tax will I pay if I sell my rental property in California?',
			a: 'If you owned the property for more than a year, the gain is generally a long-term capital gain, taxed federally at 0%, 15%, or 20% depending on your taxable income. Depreciation recapture is taxed at up to 25%, high-income sellers may owe the 3.8% net investment income tax, and California taxes the gain as ordinary income.',
		},
		{
			q: 'What is depreciation recapture, and why am I taxed on it when I sell?',
			a: 'Residential rental property is generally depreciated over 27.5 years. When you sell, the part of your gain that comes from that depreciation is treated by the IRS as unrecaptured section 1250 gain, taxed at a maximum federal rate of 25%. The IRS generally measures it by the depreciation you were allowed to take, whether or not you claimed it.',
		},
		{
			q: 'How do I figure out my taxable gain when I sell my rental property?',
			a: 'Your taxable gain is generally the amount you realize from the sale, after selling costs, minus your adjusted basis. Your adjusted basis starts with what you paid for the property, adds the cost of capital improvements, and subtracts the depreciation you took or were allowed to take.',
		},
		{
			q: 'Does California have a lower tax rate on capital gains from selling real estate?',
			a: 'No. According to the California Franchise Tax Board, all capital gains are taxed as ordinary income, so for a seller with a large gain the state tax can be substantial on top of the federal tax.',
		},
		{
			q: 'How can I defer capital gains tax when I sell my rental property? Does a 1031 exchange work?',
			a: 'Yes. If you reinvest the proceeds into like-kind investment property, you can defer both the capital gains tax and the depreciation recapture. The rules are strict, including 45 days to identify a replacement property and 180 days to close. See our [1031 exchange guide](/1031-exchanges/).',
		},
		{
			q: 'Do I owe capital gains tax if I inherit an apartment building and sell it?',
			a: 'Property inherited at death generally receives a new, stepped-up basis, which can eliminate much of the gain for heirs. If you are handling a building after an owner’s death, see our [trust and estate sales](/trust-and-estate-sales/) page, and confirm the details with your CPA or tax attorney.',
		},
	],
	'measure-ula-2026-thresholds-selling-la-apartment-building': [
		{
			q: 'What is the LA mansion tax (Measure ULA) in 2026, and at what price does it start?',
			a: 'The thresholds are $5.4 million and $10.9 million for sales closing after June 30, 2026, up from $5.3 million and $10.6 million a year earlier. Sales above $5.4 million but below $10.9 million pay a 4% ULA tax, and sales at $10.9 million or more pay 5.5%, in addition to the City’s regular transfer tax of 0.45%.',
		},
		{
			q: 'Does the LA mansion tax apply to the whole sale price or just the part above $5.4 million?',
			a: 'The whole price. The tax is not marginal. A building that sells for $5,400,000 owes no ULA tax, but one that sells for $5,400,001 owes 4% of the full price, about $216,000.',
		},
		{
			q: 'Can I avoid the LA mansion tax (Measure ULA) with a 1031 exchange?',
			a: 'No. A 1031 exchange can defer your capital gains tax, but it does not exempt a sale from Measure ULA, and exchanges are not among the exemptions the City lists. The tax is calculated on the sale of your building either way. See our [1031 exchange guide](/1031-exchanges/) for what an exchange does cover.',
		},
		{
			q: 'Do I pay Measure ULA if my building is in West Hollywood or Santa Monica?',
			a: 'No. Measure ULA applies only inside the City of Los Angeles. West Hollywood is a separate city, so ULA does not apply there, and West Hollywood has no city transfer tax of its own. Santa Monica is also exempt from ULA but has its own version, Measure GS, which takes 5.6% of the full price at $8 million and up. See our [West Hollywood](/submarkets/west-hollywood/) and [Santa Monica](/submarkets/santa-monica/) pages.',
		},
		{
			q: 'Is anyone exempt from the LA mansion tax (Measure ULA)?',
			a: 'In narrow cases. Sales to certain qualified affordable housing nonprofits and to government agencies are exempt, and the exemption for qualified affordable housing organizations has to be requested through the Los Angeles Housing Department. For most private sales it will not apply.',
		},
		{
			q: 'What should I do if my building is priced right around $5.4 million?',
			a: 'Price with the threshold in mind, since a modest price adjustment can leave you with more money than a higher price that crosses the line. Watch the calendar, because the thresholds adjust each year for inflation, and run the numbers before you list. A [free Broker Opinion of Value](/contact/?intent=bov) can show what you would net at different prices and closing dates.',
		},
	],
	'la-apartment-cap-rates-and-prices-by-neighborhood-2026': [
		{
			q: 'What is a cap rate on an apartment building, in plain English?',
			a: 'A capitalization rate is a building’s net operating income (NOI) divided by its price. If a building earns $100,000 in NOI after operating expenses and sells for $1,600,000, its cap rate is 6.25%. The lower the cap rate, the more the buyer is paying for each dollar of income.',
		},
		{
			q: 'What cap rate should I expect when I sell my apartment building in LA?',
			a: 'It varies by neighborhood, building age, rent control, condition, and interest rates, which is why one citywide number is not very useful. The tables in this article show the typical range for each neighborhood. Santa Monica’s cap rates run lower than most of the others, and Westside markets trade at far higher prices per unit than Koreatown, Westlake, or Pico-Union.',
		},
		{
			q: 'Where does this sales data come from?',
			a: 'The figures come from sold multifamily properties in Los Angeles County in 2026, taken from CoStar sales data and analyzed by Highlight Multifamily Group. We split the sales by building age and only show a number when enough sales stand behind it.',
		},
		{
			q: 'How is the cap rate range calculated?',
			a: 'The range is the middle half of the sales that reported a cap rate, so a few unusually high or low sales do not distort it. Cap rates in public and commercial databases are sometimes incomplete or estimated, so treat the ranges as a guide, not a guarantee.',
		},
		{
			q: 'Why do newer apartment buildings sell for more per unit than older rent-controlled ones?',
			a: 'Where both groups have enough sales, buildings built in 1978 or later generally trade at higher prices per unit than older buildings in the same neighborhood, partly because their rents are less restricted. Older buildings generally fall under rent stabilization, while newer ones fall under the statewide AB 1482 cap.',
		},
		{
			q: 'Why might my building sell for more or less than other buildings in my neighborhood?',
			a: 'A neighborhood range is a starting point, not a price for your building. Rents compared with the market, condition and deferred maintenance, unit mix, parking and lot size, and the buyer and timing can all move a building toward the high or low end. For a number built on your own rents, use our [free calculator](/property-value/) or request a [Broker Opinion of Value](/contact/?intent=bov).',
		},
	],
	'how-to-sell-an-apartment-building-in-los-angeles-step-by-step': [
		{
			q: 'How long does it take to sell an apartment building in Los Angeles?',
			a: 'A typical sale takes 60 to 90 days from listing to closing: a few weeks of marketing, then 30 to 45 days of escrow. The preparation before you list comes on top of that. Every deal is different, but the steps are the same on almost every sale.',
		},
		{
			q: 'What are the steps to selling an apartment building from start to finish?',
			a: 'There are eight: decide what you want from the sale, find out what the building is worth, choose a broker and sign a listing agreement, gather your documents, market the building, review offers and negotiate, open escrow and go through due diligence, and close.',
		},
		{
			q: 'What paperwork do I need to sell my apartment building?',
			a: 'Typically a current rent roll, the leases, and the last two to three years of income and expenses, along with your utility bills, property tax bill, insurance, permits, inspection reports, and records of major repairs. In Los Angeles, have your Rent Stabilization Ordinance registration and fee records ready as well.',
		},
		{
			q: 'Should I always take the highest offer on my building?',
			a: 'No. Price matters, but so do the buyer’s financing, the length of the due diligence period, the size of the deposit, and how likely the buyer is to close. Your broker should help you compare offers on net proceeds and certainty.',
		},
		{
			q: 'What fees and taxes come out of the money when I sell my apartment building?',
			a: 'Plan for the broker’s commission, transfer taxes, and, for buildings in the City of Los Angeles priced above $5.4 million, [Measure ULA](/insights/measure-ula-2026-thresholds-selling-la-apartment-building/). If you are doing a 1031 exchange, you have 45 days to identify and 180 days to close on your replacement property.',
		},
		{
			q: 'What can go wrong when selling an apartment building?',
			a: 'Three problems come up again and again: pricing too high at the start, rent roll or expense numbers that do not hold up in due diligence, and a buyer whose financing falls through. All three are easier to prevent than to fix, which is why the early steps matter most.',
		},
	],
	'broker-opinion-of-value-vs-appraisal-apartment-building': [
		{
			q: 'What is a Broker Opinion of Value (BOV)?',
			a: 'A BOV is a broker’s estimate of what your building would likely sell for. It looks at your actual rents and expenses, the building’s condition and unit mix, and recent comparable sales. It is a professional opinion grounded in the market, not a formal appraisal and not a guarantee of what a buyer will pay.',
		},
		{
			q: 'What is the difference between a broker opinion of value and an appraisal?',
			a: 'A broker prepares a BOV to help you price and market a sale, and it has no formal standing. A licensed appraiser prepares an appraisal, which lenders and other institutions rely on to support a loan or another formal need.',
		},
		{
			q: 'Do I need an appraisal to sell my apartment building?',
			a: 'No. If you are deciding whether to sell or setting your asking price, you want a BOV, and you do not need an appraisal to list a building. If you need a formal valuation for another reason, such as an estate or a legal dispute, ask your attorney or CPA whether an appraisal is required.',
		},
		{
			q: 'How much does it cost to find out what my building is worth? Is a BOV free?',
			a: 'Brokers typically provide a BOV at no charge when you are considering a sale. Ours is free and confidential. You can [request a Broker Opinion of Value](/contact/?intent=bov) or start with our [free property value calculator](/property-value/).',
		},
		{
			q: 'What happens if the buyer’s appraisal comes in lower than the price we agreed on?',
			a: 'The buyer’s lender will order an appraisal during escrow. If the appraiser values the building below the agreed price, the buyer may have to bring more cash, ask for a lower price, or walk away if their agreement allows it. A price backed by real comparable sales is more likely to hold up.',
		},
	],
	'selling-a-fourplex-or-small-apartment-building-in-los-angeles': [
		{
			q: 'Who buys a fourplex, and can I sell it to someone who wants to live in one unit?',
			a: 'Two main kinds of buyers: owner-occupants, who live in one unit and rent out the rest, which can let them put less money down than an investor would, and smaller investors, including owners exchanging out of other property. Because the pool includes people who want a place to live, small buildings can sometimes sell for more than their income alone would support.',
		},
		{
			q: 'How do buyers get a loan for a fourplex compared with a bigger apartment building?',
			a: 'In general, buildings with up to four units can be financed with residential mortgages, while buildings with five or more units need commercial loans. A residential loan leans heavily on the buyer’s income and credit, while a commercial loan looks hard at the building’s net operating income and cap rate.',
		},
		{
			q: 'How do I figure out what my fourplex is worth?',
			a: 'Usually by comparing recent sales of similar small buildings nearby, using price per unit, price per square foot, and the gross rent multiplier, which is the price divided by the yearly rent. Larger buildings lean more on net operating income and cap rate. A [Broker Opinion of Value](/contact/?intent=bov) built on those comparables and your own rents is the most reliable way to set a price.',
		},
		{
			q: 'Does rent control apply to my duplex, triplex, or fourplex in LA?',
			a: 'Yes. In the City of Los Angeles, the Rent Stabilization Ordinance generally covers multi-unit buildings with a certificate of occupancy issued before October 1, 1978, including smaller ones, and newer buildings typically fall under the statewide AB 1482 cap unless they are exempt.',
		},
		{
			q: 'How do I get my fourplex ready to sell?',
			a: 'With only a few units, each one matters, so confirm your rents and lease terms, organize your leases and expense records, and fix small issues first. Buyers will look closely at the unit mix and the age of the roof, plumbing, electrical, and other major systems.',
		},
	],
	'selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles': [
		{
			q: 'What does it mean to sell my apartment building off-market, or quietly?',
			a: 'An off-market sale, sometimes called a quiet or private sale, happens without a public listing. The broker contacts a small group of qualified buyers directly, often investors who have bought similar buildings before, and tenants and neighbors may never know the building is for sale.',
		},
		{
			q: 'Will I get a lower price selling off-market?',
			a: 'Possibly. The main risk of an off-market sale is that you never learn what you left on the table, because if only a few buyers see the building, the best offer may be lower than a wider market would have produced. A wide listing usually offers the best chance at the highest price.',
		},
		{
			q: 'Should I put my apartment building on the market publicly?',
			a: 'More buyers means more competition, which tends to push the price and terms in the seller’s favor, and it shows you what the market will actually pay. Buyers on a deadline, such as 1031 exchange buyers, are often in the market and ready to compete.',
		},
		{
			q: 'Is there a middle path between off-market and listed?',
			a: 'Yes. The broker contacts a curated list of buyers who are active in your neighborhood and building type, without a public listing. This keeps the sale confidential while still creating some competition. See our [case study of 453 S Gramercy Pl](/case-studies/453-s-gramercy-pl-koreatown-apartments/), where we found an off-market buyer experienced with long-term, below-market tenancies.',
		},
		{
			q: 'How do I decide whether to sell quietly or list my building publicly?',
			a: 'Ask how important privacy is, how sure you are of your building’s value, how soon you need to close, and whether you are exchanging into other property on a deadline. Then ask your broker how many qualified buyers they would contact and how they know those buyers will pay a market price. Families handling an inheritance often prefer discretion, as we describe in our guide to [trust and estate sales](/trust-and-estate-sales/).',
		},
	],
	'el-nino-2026-la-apartment-owners-checklist': [
		{
			q: 'Is there an El Niño state of emergency in California, and what does it mean for my rental property?',
			a: 'Yes. On September 21, 2026, Governor Newsom proclaimed a statewide state of emergency ahead of what forecasters expect to be a very strong El Niño this winter, citing a better than 90% chance of a very strong event. The City of Long Beach proclaimed a local emergency the same day, and Los Angeles County Supervisor Hilda Solis issued a county proclamation on September 23.',
		},
		{
			q: 'Can I raise rent during a state of emergency in California?',
			a: 'Not currently at the state level. California’s price gouging law (Penal Code section 396) ordinarily kicks in when an emergency is declared and generally prohibits raising rents more than 10% above pre-emergency levels, but according to the California Apartment Association, the governor’s proclamation expressly suspends those restrictions “at this time.” The governor could change that later, and a local declaration can trigger its own protections, so confirm the rules for your city with an attorney or apartment association before sending an increase above 10%.',
		},
		{
			q: 'Does rent control still apply during a state of emergency?',
			a: 'Yes. If your building is covered by the LA Rent Stabilization Ordinance or by AB 1482, those caps are unaffected. For the current AB 1482 numbers, see our article on the [2026 AB 1482 rent cap](/insights/ab-1482-rent-cap-2026/).',
		},
		{
			q: 'Does my landlord insurance cover flood damage, and do I need flood insurance for my rental property?',
			a: 'Standard property insurance policies generally exclude flood damage. Flood policies through the National Flood Insurance Program usually do not take effect until 30 days after purchase, so waiting for the first storm is too late. Also check your deductible and whether you carry loss-of-rents coverage.',
		},
		{
			q: 'How do I get my apartment building ready for heavy rain and El Niño?',
			a: 'Clear and test your drainage, including roofs, gutters, downspouts, and sump pumps in driveways and subterranean parking. Fix leaks quickly and keep a record of each repair, take photos and video of your roof, ceilings, and parking areas today, line up roofers and plumbers early, and give tenants one number or email address to report leaks. Non-emergency inspections still generally require 24 hours’ written notice before entering a unit.',
		},
		{
			q: 'Why do older LA apartment buildings leak or flood more in heavy rain?',
			a: 'Older buildings tend to have flat roofs that pond water, parapets and roof flashing that have aged, and drains and downspouts that have not been cleaned or tested in years. Subterranean and driveway-level parking can also take on water fast when drainage backs up. A wet winter exposes deferred maintenance, and buyers price it in.',
		},
	],
	'selling-la-apartment-building-before-year-end': [
		{
			q: 'Do I pay taxes for the year I list my building or the year it closes?',
			a: 'In general, a sale is reported for the year it closes, not the year you list it or sign the contract, so the calendar matters more than most owners expect.',
		},
		{
			q: 'Should I close my apartment sale in December or January?',
			a: 'Neither is automatically better. A December close puts the gain on your 2026 return, while a January close pushes that tax bill out a full year. Which works for you depends on your income this year and next, your other deductions and plans, and where you want the proceeds to go, so talk to your CPA before you list, not after you are under contract.',
		},
		{
			q: 'How long does it take to sell an apartment building in LA, and can I still close before the end of the year?',
			a: 'A typical Los Angeles apartment sale takes 60 to 90 days from listing to closing: a few weeks of marketing, then 30 to 45 days of escrow. If you list in October, a December 31 closing is realistic. Wait until November and you are likely closing in 2027. Pricing, buyer financing, and due diligence can all move the date.',
		},
		{
			q: 'How does a 1031 exchange work if I sell my building in December?',
			a: 'A 1031 exchange gives you 45 days from closing to identify a replacement property and 180 days to close on it. For a year-end sale, the 180 days ends early if your tax return for the year of the sale is due first, unless you file an extension. With a December sale, the 180 days would run past the April tax deadline, so ask your CPA about filing an extension to keep the full window. See our [1031 exchange guide](/1031-exchanges/).',
		},
		{
			q: 'What should I do first if I want to sell my apartment building this year?',
			a: 'Start with your goals: a particular tax year, a particular price, or a smooth handoff into a 1031 exchange. Then find out what your building is worth, using our [free property value calculator](/property-value/) for a quick range, and request a free [Broker Opinion of Value](/contact/?intent=bov) for a number grounded in your actual rents, condition, and unit mix.',
		},
	],
	'ab-1482-rent-cap-2026': [
		{
			q: 'How much can I raise rent in Los Angeles in 2026?',
			a: 'For increases effective on or after August 1, 2026, the Los Angeles-Long Beach-Anaheim region’s CPI change came in at 3.7%, putting the maximum allowable increase at 8.7%, which is the CPI change plus 5%. That is up from the prior year’s cap of 8.0% (3.0% CPI plus 5%).',
		},
		{
			q: 'How is the California rent cap (AB 1482) calculated?',
			a: 'AB 1482, California’s statewide Tenant Protection Act, has capped most residential rent increases since 2020 at whichever is lower: 10%, or 5% plus the percentage change in the regional Consumer Price Index (CPI) over the prior year. The CPI figure is recalculated each year, region by region, so the actual ceiling moves annually even though the law has not changed.',
		},
		{
			q: 'Does my LA apartment building have rent control, and does the AB 1482 rent cap apply to it?',
			a: 'Los Angeles’ Rent Stabilization Ordinance (RSO) covers buildings with a certificate of occupancy issued before October 1, 1978, and sets its own, generally lower annual increase limit. Buildings built on or after that date typically fall outside the RSO, and once they age past AB 1482’s own 15-year exemption for new construction, the statewide formula is what limits how much rent can rise each year.',
		},
		{
			q: 'Which rent cap applies if I raise rent before or after August 1, 2026?',
			a: 'It depends on the increase’s effective date. An increase effective before August 1, 2026 uses the prior year’s CPI change (3.0%, an 8.0% maximum). An increase effective on or after August 1, 2026 uses the new figure (3.7%, an 8.7% maximum). All percentages are rounded to the nearest tenth of a point.',
		},
		{
			q: 'Where does the 8.7% rent cap number come from, and when does it change?',
			a: 'They come from the Apartment Association of Greater Los Angeles, citing the U.S. Bureau of Labor Statistics and the California Department of Industrial Relations, and they are updated on the same August 1 cycle every year. Confirm the applicable cap and how it applies to your property with your attorney or property manager before implementing any increase.',
		},
		{
			q: 'How does the rent cap affect what my apartment building is worth when I sell or buy?',
			a: 'For a buyer underwriting a non-RSO, value-add deal, the cap is a real, legal ceiling on how quickly in-place rents can be brought to market, so it is worth checking against the current figure rather than a remembered number from a prior year. For an owner deciding when to raise rents, knowing the exact cap avoids both leaving money on the table and exceeding a limit that moves every year. See also [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/).',
		},
	],
	'utility-bill-diligence-la-apartment-owners': [
		{
			q: 'Can a water leak lower the value of my apartment building?',
			a: 'An apartment building is valued on its net operating income, capitalized at a market cap rate. Using a rough 7% cap rate, an extra $8,000 a year in water expense translates to roughly $114,000 in suppressed property value, and an extra $4,000 translates to roughly $57,000. A leak that seems like a maintenance headache is actually a value problem.',
		},
		{
			q: 'My water bill went up. How do I know if my apartment building has a leak?',
			a: 'Do not just track whether a utility bill was paid. Track what percentage of your total monthly expenses each bill represents, in a spreadsheet updated every month. If your water bill jumps from roughly 35% of monthly expenses to 45% the next month, that is a red flag regardless of the dollar amount, and reason enough to get a plumber out before it runs another month.',
		},
		{
			q: 'Why do landlords miss water leaks for months?',
			a: 'Utility bills often get paid on autopilot, by the owner or a property management company, on the assumption that the number is just what it is that month. A leak does not announce itself. It shows up as a slightly higher number every month, easy to miss if nobody is comparing bills month over month, and it can run for months, sometimes closer to a year.',
		},
		{
			q: 'How much does a water leak cost an apartment owner? Are there real LA examples?',
			a: 'On a 10-unit building in Pico-Union managed by a professional property management company, we noticed a jump in the water bill that started about a year earlier and never came back down. A plumber found a leak, and the bill normalized once it was fixed. The undetected leak cost the owner about $8,000 in avoidable water expense. A similar leak at a 7-unit building in Koreatown saved the owner roughly $4,000 once it was caught.',
		},
		{
			q: 'Should I track my utility bills if I am not selling my building?',
			a: 'Yes. Even with no plans to sell, catching a leak early instead of a year later is real, ongoing savings straight to your bottom line. If you are getting ready to bring a property to market, cleaning up an expense like this before you list is one of the more direct ways to protect what you can ask for it.',
		},
		{
			q: 'Do buyers and brokers look at my utility bills when pricing my building?',
			a: 'Not at first. When we put together a Broker Opinion of Value, we work from normalized expenses, a reasonable estimate of what the property should be running. It is not until we sign the listing and pull the real bills, including water, sewer, trash, and insurance, that we see how the property has actually been operating. You can [request a free Broker Opinion of Value](/contact/?intent=bov) to see where your building stands.',
		},
	],
	'1031-exchange-into-triple-net-properties': [
		{
			q: 'I am tired of being a landlord. How can I sell my apartment building without a huge tax bill?',
			a: 'Owning an apartment building in Los Angeles has gotten harder, with statewide rent control under AB 1482, local rent stabilization ordinances, rising insurance costs, and tenant turnover pushing many long-term owners to ask whether it still makes sense. Selling outright means a large capital gains tax bill. A 1031 exchange into a triple-net (NNN) property lets you defer that tax while moving into a passive investment with no apartment management, and it is often the answer for owners nearing retirement, managing from out of state, or simply tired of the 2 a.m. phone calls.',
		},
		{
			q: 'What is a 1031 exchange, in simple terms?',
			a: 'Named for Section 1031 of the Internal Revenue Code, a 1031 exchange lets you sell an investment property and defer the capital gains tax you would otherwise owe, as long as you reinvest the proceeds into another investment property of equal or greater value. The tax is not eliminated, only deferred until you eventually sell without exchanging again.',
		},
		{
			q: 'What are the 45-day and 180-day rules for a 1031 exchange?',
			a: 'There are two strict IRS deadlines, and both are hard cutoffs, not guidelines: 45 days to identify a replacement property and 180 days to close on it. You can never touch the sale proceeds directly. A Qualified Intermediary holds the funds from your sale and uses them to buy your replacement property on your behalf. See our [1031 exchange guide](/1031-exchanges/).',
		},
		{
			q: 'Can I sell my apartment building and buy a triple-net (NNN) property with a 1031 exchange?',
			a: 'Yes. Multifamily and commercial real estate both qualify as like-kind to each other under current tax code, which is what makes an apartment-to-NNN exchange possible.',
		},
		{
			q: 'What does triple net lease mean for a landlord, and why do owners want one?',
			a: 'In a triple-net lease, the tenant, not the owner, is responsible for property taxes, insurance, and maintenance. NNN properties are also typically leased to a single commercial tenant on a long-term lease, so the day-to-day tenant management that comes with dozens of residential units goes away. Because NNN opportunities exist all over the country, an exchange also lets an owner diversify geographically and step outside California rent control exposure.',
		},
		{
			q: 'Is there a real example of someone trading an LA apartment building for NNN properties?',
			a: 'We guided a client who sold her 24-unit apartment building at [1136 S Alvarado St](/closed-sales/1136-s-alvarado-st-los-angeles-ca-90006/) and exchanged the proceeds into two separate triple-net properties, one in Florida and one in Georgia. Splitting the exchange diversified both her tenant risk and her geographic exposure while fully deferring the capital gains tax on the sale.',
		},
		{
			q: 'Is an NNN exchange right for my apartment building?',
			a: 'Not every owner should exchange into a triple-net property, and not every apartment building is the right one to sell right now. The first conversation is about your goals: stopping management altogether, reducing your workload without fully exiting real estate, or moving capital out of California. See our [triple-net and DST page](/triple-net-dst/), or [request a free Broker Opinion of Value](/contact/?intent=bov) to start.',
		},
	],
	'la-apartment-market-update-q3-2026': [
		{
			q: 'Are apartment prices in Los Angeles going up or down in 2026?',
			a: `Based on our CoStar data through ${muDate(MU.lastSale)}, prices were steady. Older apartment buildings in LA County sold for a median of ${muMoney(MU.quarters[0].olderPricePerUnit)} per unit in the first quarter, ${muMoney(MU.quarters[1].olderPricePerUnit)} in the second, and ${muMoney(MU.quarters[2].olderPricePerUnit)} in the third so far. We only have 2026, so we cannot compare it with last year.`,
		},
		{
			q: 'How many apartment buildings sold in Los Angeles County in 2026?',
			a: `From January 1 to ${muDate(MU.lastSale)}, ${MU.headline.all.sales.toLocaleString('en-US')} apartment buildings of 5 to 99 units sold in LA County for about ${muBillion(MU.headline.all.volumeMillions)} in total, after we left out approximate prices, portfolio sales of 100 or more units, and repeated records.`,
		},
		{
			q: 'What is a typical cap rate for an apartment building in LA County in 2026?',
			a: `Older buildings (built before 1978) had a median cap rate of ${muPct(MU.headline.older.capRateMedian)}, with the middle half of sales between ${muPct(MU.headline.older.capRateLow!)} and ${muPct(MU.headline.older.capRateHigh!)}. Newer buildings had a median of ${muPct(MU.headline.newer.capRateMedian)}, with the middle half between ${muPct(MU.headline.newer.capRateLow!)} and ${muPct(MU.headline.newer.capRateHigh!)}. These come from the ${MU.headline.older.capRateCount} and ${MU.headline.newer.capRateCount} sales that reported a cap rate.`,
		},
		{
			q: 'Do bigger apartment buildings sell for less per unit?',
			a: `Yes. Older buildings of 5 to 9 units sold for a median of ${muMoney(MU.sizes[0].olderPricePerUnit)} per unit in 2026, compared with ${muMoney(MU.sizes[1].olderPricePerUnit)} for 10 to 19 units, ${muMoney(MU.sizes[2].olderPricePerUnit)} for 20 to 49 units, and ${muMoney(MU.sizes[3].olderPricePerUnit)} for 50 to 99 units, a small group of ${MU.sizes[3].olderSales} sales.`,
		},
		{
			q: 'How far below the asking price do apartment buildings sell for in Los Angeles?',
			a: `Of the ${MU.asking.sales} sales with a recorded asking price, the median sale price was ${MU.asking.medianPct}% of asking, about ${muMoney(MU.asking.medianDollarsBelow)} below it. About ${Math.round(100 - MU.asking.atOrAbovePct)}% sold below asking, and ${Math.round(MU.asking.over10Pct)}% sold for more than 10% less. Larger buildings sold further below asking than smaller ones.`,
		},
		{
			q: 'Who is buying apartment buildings in Los Angeles?',
			a: `Mostly private owners. About ${MU.parties.privateBuyersPct}% of 2026 sales had a private buyer, about ${MU.parties.localBuyersPct}% of buyers were based locally and ${MU.parties.nationalBuyersPct}% elsewhere in the United States, and institutions were about ${MU.parties.institutionalBuyersPct}% of buyers.`,
		},
	],
	'inherited-apartment-building-los-angeles-what-to-do': [
		{
			q: 'I inherited an apartment building in Los Angeles. What do I do first?',
			a: 'Protect the building and the tenants first: confirm the insurance is in force, keep the rents in an account for the estate or trust, tell tenants who to pay, and gather the documents. Then talk to a probate or trust attorney and a CPA before you decide whether to keep or sell.',
		},
		{
			q: 'Do I have to go through probate to sell an inherited apartment building in California?',
			a: 'It depends on how the building was owned. If it was in a living trust, the successor trustee can generally sell under the trust’s terms without probate. If it was not, it generally goes through probate, because an apartment building is worth far more than California’s small-estate limit of about $200,000.',
		},
		{
			q: 'Do I pay capital gains tax if I sell an apartment building I inherited?',
			a: 'Often very little. Under IRS rules, an heir’s basis in inherited property is generally its fair market value on the date of death, so a sale soon afterward typically produces little or no taxable gain. Confirm with your CPA, and keep documentation of the date-of-death value. See our guide to [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/).',
		},
		{
			q: 'Will my property taxes go up if I keep an inherited apartment building in California?',
			a: 'Usually, yes. A change in ownership triggers a reassessment to market value. Proposition 19 limits the parent-child exclusion to a family home that becomes the child’s principal residence, and the Board of Equalization says a transfer of a rental property between parents and children does not qualify.',
		},
		{
			q: 'How long does it take to sell an inherited apartment building?',
			a: 'A typical Los Angeles apartment sale takes 60 to 90 days from listing to closing. A probate sale that needs court confirmation adds a step, and sorting out who has authority comes first, so ask your attorney for a timeline before you list.',
		},
		{
			q: 'Do I need an appraisal when I inherit an apartment building?',
			a: 'For tax purposes, a date-of-death value supports your basis, and a formal appraisal is the usual way to document it, so ask your CPA. A Broker Opinion of Value is not an appraisal, but it is a free, confidential way to see what buyers would likely pay. See [Broker Opinion of Value vs. appraisal](/insights/broker-opinion-of-value-vs-appraisal-apartment-building/).',
		},
		{
			q: 'Is there an estate tax in California?',
			a: 'California does not have its own estate or inheritance tax. The federal estate tax applies only to large estates: for people who die in 2026, the exemption is $15 million per person.',
		},
		{
			q: 'Can I sell an inherited apartment building with tenants in it?',
			a: 'Yes. Most Los Angeles apartment buildings sell with tenants in place. Leases and rent rules stay with the building, so the buyer steps into the owner’s position. See our guide to [selling with tenants under rent control](/insights/selling-la-apartment-building-with-tenants-rent-control/).',
		},
		{
			q: 'My parent died and left me an apartment building. What should I do?',
			a: 'Take a breath, then handle the urgent items: make sure the insurance is active, keep collecting rent into an account for the estate or trust, tell the tenants who to pay and who to call, and find the trust or will. Call a probate or trust attorney and a CPA before you sign anything or list the building. You do not have to decide whether to keep or sell in the first month.',
		},
		{
			q: 'Who collects the rent and pays the bills after the owner of an apartment building dies?',
			a: 'If the building was in a trust, the successor trustee generally takes over. If it was not, the court appoints an executor or administrator in probate, and that person manages the building until it is sold or distributed. Until then, rent should go into an account for the estate or trust, and the mortgage, insurance, property taxes, and repairs still have to be paid. Your attorney can tell you who has the authority to act.',
		},
		{
			q: 'What happens to the mortgage on an inherited apartment building?',
			a: 'The loan does not go away when the owner dies. Payments, taxes, and insurance have to stay current while the estate or trust decides what to do. Contact the lender, and ask your attorney whether the lender can require the loan to be paid off. If you sell, the loan is paid from the sale proceeds at closing.',
		},
		{
			q: 'Can I sell an inherited duplex, triplex, or fourplex?',
			a: 'Yes. Heirs, trustees, and executors sell small apartment buildings all the time. The same rules apply as for a larger building: who can sell depends on whether the property was in a trust or goes through probate, and the sale follows that legal timeline. See our guide to [selling a fourplex or small apartment building](/insights/selling-a-fourplex-or-small-apartment-building-in-los-angeles/).',
		},
		{
			q: 'Can I sell an inherited rental property before probate is finished?',
			a: 'Sometimes. In probate, the executor or administrator can sell once the court has given them the authority to do so, and with limited authority the sale usually goes to the court for confirmation. A trust sale usually does not need a court. Your probate attorney will tell you when the property can be listed and when it can close.',
		},
		{
			q: 'What is the stepped-up basis on an inherited apartment building?',
			a: 'It is the IRS rule that an heir’s tax basis in inherited property is generally its fair market value on the date of the owner’s death, not what the owner originally paid. It resets the starting point for figuring gain, which is why a sale soon after inheriting often produces little or no taxable gain. The previous owner’s depreciation history generally does not carry over. Ask your CPA how it applies, and keep documentation of the date-of-death value.',
		},
		{
			q: 'Do I owe capital gains tax or depreciation recapture on an inherited rental property?',
			a: 'Usually little or none if you sell soon after the date of death, because the basis steps up to market value at that date and the previous owner’s depreciation generally does not carry over. Gain can appear later if the building rises in value after the date of death, or if you depreciate it yourself while you keep it. See [capital gains and depreciation recapture](/insights/capital-gains-depreciation-recapture-selling-la-apartment-building/), and confirm with your CPA.',
		},
		{
			q: 'Does Proposition 19 or Proposition 58 let me keep my parent’s low property tax on an inherited apartment building?',
			a: 'Generally no. Proposition 19 limits the parent-child exclusion to a family home that is the principal residence of both the parent and the child, and to family farms, and the Board of Equalization says a rental property transferred between parents and children does not qualify. The older Proposition 58 exclusion for other real property, up to $1 million of value, was eliminated for transfers on or after February 16, 2021. Expect the building to be reassessed to market value.',
		},
		{
			q: 'Do I have to tell the county when the owner of a property dies?',
			a: 'Yes. A change in ownership statement for the death of a property owner (form BOE-502-D) is due to the county within 150 days of the date of death, and late filing can bring penalties. The executor or trustee normally files it, with the attorney’s help.',
		},
		{
			q: 'Can I raise the rent on tenants after I inherit an apartment building?',
			a: 'The owner’s death does not cancel the tenants’ leases or the city’s rent rules. In the City of Los Angeles, rent increases on a building covered by the Rent Stabilization Ordinance stay limited, and many other California buildings are covered by the statewide cap described in our [AB 1482 guide](/insights/ab-1482-rent-cap-2026/). Check the specifics with your attorney before sending any notice.',
		},
		{
			q: 'What if my brothers and sisters disagree about keeping or selling the inherited building?',
			a: 'It happens often. If the building is in a trust, the trustee follows the trust’s terms. If it goes through probate, the executor handles the sale under the court’s supervision. If heirs end up co-owners and cannot agree, a real estate or probate attorney can explain the options, which can include a buyout or a court-ordered sale. A neutral number from a free [Broker Opinion of Value](/contact/?intent=bov) gives everyone the same starting point.',
		},
		{
			q: 'How do I find out what my inherited apartment building is worth?',
			a: 'Start with a free, confidential [Broker Opinion of Value](/contact/?intent=bov), which shows what buyers would likely pay based on the rent roll, expenses, and recent comparable sales. For tax purposes you may also need a formal appraisal as of the date of death, so ask your CPA. See [how buyers value an apartment building](/insights/how-to-value-an-apartment-building-in-los-angeles/).',
		},
		{
			q: 'Should I sell or keep an inherited apartment building?',
			a: 'There is no single right answer. Ask who will manage the building and whether they know what it takes, whether the heirs agree, what the property tax will be after reassessment, what repairs are coming, and what the sale proceeds would do for the family compared with the building’s income. Our guide to [whether to sell an apartment building](/insights/should-i-sell-my-la-apartment-building/) walks through the questions.',
		},
		{
			q: 'Can I do a 1031 exchange on an inherited property?',
			a: 'Often there is little reason to, because the stepped-up basis already reduces the gain on a sale soon after the date of death. If the building has gained value since then, or you want to stay invested in real estate, ask your CPA whether an exchange fits your situation. See our page on [1031 exchanges](/1031-exchanges/).',
		},
		{
			q: 'How long does probate take in California when the estate includes an apartment building?',
			a: 'It varies and often takes many months, sometimes a year or more, depending on the court, creditor claim deadlines, and whether anyone contests. Your attorney can give a realistic timeline for your case. A building held in a living trust generally avoids probate.',
		},
		{
			q: 'Is rental income from an inherited building taxable?',
			a: 'Generally yes. Rent collected is income, first to the estate or trust and then to the heirs once it is distributed, with the building’s expenses deducted. Your CPA will set up the reporting and tell you which return applies.',
		},
		{
			q: 'Do I need a lawyer to sell an inherited apartment building?',
			a: 'In practice, yes. A probate or trust attorney confirms who has the authority to sell and handles any court steps, and a CPA covers the tax side. We work alongside them on pricing, marketing, buyers, and the closing timeline. See our page on [trust and estate sales](/trust-and-estate-sales/).',
		},
		{
			q: 'How do I sell an inherited apartment building quickly?',
			a: 'The legal side sets the pace more than the market. A trust sale can move once the trustee is ready, and a probate sale needs the court’s authority first. After that, a typical Los Angeles apartment sale takes 60 to 90 days from listing to closing. We can prepare the pricing and buyer list while the paperwork finishes. A quiet sale to a limited group of buyers is also an option, and our article on [selling off-market vs. listing openly](/insights/selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles/) explains the tradeoffs.',
		},
	],
	'sb-721-balcony-inspection-los-angeles-apartment-owners': [
		{
			q: 'What is SB 721, and does it apply to my apartment building in Los Angeles?',
			a: 'SB 721, now Section 17973 of the California Health and Safety Code, requires owners of buildings with three or more multifamily units to have their exterior elevated elements (balconies, decks, porches, stairways, walkways, and entry structures) inspected by a licensed professional. It applies if those elements are more than six feet above ground, are designed for people to use, and rely mainly on wood for structural support. Condominiums fall under a different law, SB 326.',
		},
		{
			q: 'What was the SB 721 balcony inspection deadline?',
			a: 'The first inspection had to be completed by January 1, 2026, and then by January 1 every six years after that, so the next is due by January 1, 2032. The deadline was originally January 1, 2025 and was extended. Because it has passed, an owner who has not inspected is late.',
		},
		{
			q: 'I missed the SB 721 inspection deadline. What happens now?',
			a: 'Hire a qualified inspector and schedule the inspection as soon as you can. If repairs are needed and are not completed within 180 days, the inspector must notify the local agency, and after a further 30 days an owner can face civil penalties of $100 to $500 per day and a lien on the building. Ask your attorney how Los Angeles is enforcing it for your building.',
		},
		{
			q: 'Who can do an SB 721 balcony inspection in California?',
			a: 'A licensed architect, a licensed civil or structural engineer, a building contractor with an “A,” “B,” or “C-5” license and five years of experience building multistory wood-frame buildings, or a certified building inspector or official. The inspector cannot be employed by the local jurisdiction, and the owner hires the inspector.',
		},
		{
			q: 'How much of my balconies and stairs does the inspector have to check?',
			a: 'At least 15% of each type of exterior elevated element, including the load-bearing parts and the waterproofing. The inspector must give you a written report within 45 days that says whether any element is an immediate threat to the occupants.',
		},
		{
			q: 'How long do I have to fix problems found in an SB 721 inspection?',
			a: 'An immediate threat has to be addressed right away, and keeping people off the balcony or stair until repairs are done counts as compliance. For other problems, you must apply for a repair permit within 120 days of receiving the report and then have 120 days after the permit is approved to finish, unless the local agency gives more time.',
		},
		{
			q: 'Do triplexes and fourplexes need balcony inspections?',
			a: 'Yes, if they have covered elements. The law applies to buildings with three or more multifamily dwelling units that have elevated, wood-supported balconies, decks, stairways, walkways, or entry structures more than six feet above ground.',
		},
		{
			q: 'Do I have to give the SB 721 inspection report to a buyer when I sell?',
			a: 'Yes. The law says inspection reports must be kept in the owner’s records for at least two inspection cycles and must be disclosed and delivered to the buyer at the time of any later sale. See our [step-by-step guide to selling](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/).',
		},
	],
	'air-conditioning-law-los-angeles-apartment-owners-electrical-panel': [
		{
			q: 'Do I have to install air conditioning in every apartment in Los Angeles?',
			a: 'No. We found no law in California or in the City of Los Angeles that requires an owner to install air conditioning in every unit. Los Angeles County has an 82°F maximum indoor temperature rule for rentals in unincorporated areas, and it lets the landlord choose how to meet it. The City of Los Angeles passed a motion in February 2026 to adopt a similar standard, but we have not found an adopted city ordinance.',
		},
		{
			q: 'Is a landlord required to provide air conditioning in California?',
			a: 'Not under current state law. California’s SB 655 (2025) made it state policy that dwelling units should be able to maintain a safe maximum indoor temperature and told state agencies to consider it, including when writing regulations starting January 1, 2027, but it does not itself put a duty on a landlord. State building standards already set a minimum indoor temperature of 68°F for heat but no maximum.',
		},
		{
			q: 'What is the 82-degree rule for rentals in Los Angeles?',
			a: 'It is a Los Angeles County ordinance that makes landlords responsible for keeping habitable rooms in rental units at or below 82°F. It applies in unincorporated county areas, not in incorporated cities such as the City of Los Angeles. Enforcement starts January 1, 2027, or when the related fee is approved if later, and it is complaint-based. Small landlords have more time, until January 1, 2032 for all habitable rooms.',
		},
		{
			q: 'Does the 82-degree rule apply to my building in the City of Los Angeles?',
			a: 'Not yet, as far as we can find. The County ordinance covers unincorporated areas only. The City Council unanimously passed a motion on February 17, 2026 directing the City to adopt a conforming 82°F standard, but a motion is not an ordinance. Ask the Los Angeles Housing Department for the current status.',
		},
		{
			q: 'Can my tenants install their own air conditioner?',
			a: 'Under the LA County rule, yes. Tenants may add a portable or window air conditioner or other non-mechanical cooling if they give the landlord written notice at least five days beforehand, follow the manufacturer’s safety guidelines, and do not alter the unit. They cannot be evicted, penalized, or charged extra for it, and a landlord cannot raise the rent because of it. Outside the county’s rule, check your lease and ask your attorney.',
		},
		{
			q: 'Will adding air conditioning mean I need a new electrical sub panel?',
			a: 'Not always, but in older buildings it often comes up. A mini-split and many larger units need a dedicated circuit, so the question is whether the main service has capacity, whether the panel feeding the unit has room and open breaker spaces, and what condition the panel and wiring are in. A licensed electrician can answer with a load calculation. The county’s rule does not require electrical upgrades, but it strongly recommends that units can safely support cooling devices.',
		},
		{
			q: 'Do I need a permit to add a mini-split or replace a sub panel in an apartment?',
			a: 'Generally yes in the City of Los Angeles: replacing a panel or adding circuits typically takes an electrical permit from the Los Angeles Department of Building and Safety (LADBS), and a mini-split may need a mechanical permit as well. Confirm the permits for your project with LADBS or your licensed contractor before work starts.',
		},
		{
			q: 'Who pays the electric bill if the apartment has air conditioning?',
			a: 'It depends on the meter. If each unit has its own meter, the tenant who runs the air conditioner pays. If the building is on a house meter, cooling you provide adds to your cost. The county’s landlord guidance does not say who pays for electricity used by tenant-installed units, so ask your attorney about your lease and your situation.',
		},
		{
			q: 'Can I raise rent to pay for air conditioning or panel upgrades?',
			a: 'Under the LA County rule, you cannot raise rent or charge fees because a tenant installs portable cooling. Other compliance costs may be recoverable through the county’s rent stabilization process, which requires an application and is subject to the rent increase cap. The City of Los Angeles has its own rent rules, so talk to an attorney before assuming you can pass anything through.',
		},
		{
			q: 'What is a Federal Pacific or Zinsco electrical panel, and should I worry?',
			a: 'These are older panel brands that inspectors often flag because their breakers may not trip when they should. They are common in older apartment buildings. We are not engineers, so have a licensed electrician inspect the panel, and ask your insurance agent whether the panel type affects your coverage. Buyers and their inspectors also look closely at them.',
		},
	],
	'measure-ula-hold-or-sell-la-apartment-building': [
		{
			q: 'Does Measure ULA make it better to hold my apartment building instead of selling?',
			a: 'Not by itself. The tax is owed whenever you sell above the first threshold, so holding does not remove it. It affects when and at what price you sell more than whether you sell. Decide on your goals, then model the tax in our [Measure ULA calculator](/measure-ula-calculator/).',
		},
		{
			q: 'Is Measure ULA charged on my profit or on the sale price?',
			a: 'On the sale price. The City charges it on the value of the property sold, so it applies whether you made a large gain or none. For closings after June 30, 2026, the rate is 0% at or below $5.4 million, 4% above $5.4 million and under $10.9 million, and 5.5% at $10.9 million or more.',
		},
		{
			q: 'How much is the Measure ULA tax on a $6 million apartment building?',
			a: 'The ULA tax is $240,000, which is 4% of $6,000,000. With the City’s regular transfer tax of 0.45% ($27,000) and the LA County tax of $1.10 per $1,000 ($6,600), transfer taxes total $273,600. These figures are before commissions and income taxes.',
		},
		{
			q: 'Can I wait for Measure ULA to be repealed or changed?',
			a: 'You can, but a decision that depends on a rule change that has not happened is a risk. The rates and thresholds in this article are the current rules. Confirm them with the City of Los Angeles Office of Finance before you price a building near a line.',
		},
		{
			q: 'Does a 1031 exchange avoid Measure ULA?',
			a: 'No. A 1031 exchange can defer your capital gains tax, but it does not exempt a sale from Measure ULA. See our [1031 exchange guide](/1031-exchanges/) for what an exchange does cover.',
		},
		{
			q: 'How do I find out what I would keep after Measure ULA at different prices?',
			a: 'Use our [Measure ULA calculator](/measure-ula-calculator/) for transfer taxes and net proceeds at any price, and request a free [Broker Opinion of Value](/contact/?intent=bov) to see the numbers on your actual building.',
		},
	],
	'sb-1365-emergency-rent-cap-la-apartment-owners': [
		{
			q: 'What is SB 1365?',
			a: 'A California law signed on September 30, 2026 that amends the state’s price gouging statute, Penal Code section 396. It applies the 10% emergency rent cap to rental housing regardless of the length of the lease, and it turns the old exceptions into defenses the landlord must prove.',
		},
		{
			q: 'When does SB 1365 take effect?',
			a: 'January 1, 2027. It is a regular, non-urgency statute. Ask your attorney how it applies if an emergency is already in effect when it begins.',
		},
		{
			q: 'How long does the emergency rent cap last?',
			a: 'For 30 days after a state or local emergency is proclaimed or declared, or any longer period the proclamation is extended. Local officials can extend the limit in steps of up to 30 days each.',
		},
		{
			q: 'Does SB 1365 replace Los Angeles rent control or AB 1482?',
			a: 'No. The statute says it does not authorize a landlord to charge more than a local rent control ordinance allows. Rent-stabilized buildings stay under the City’s limit, and newer buildings stay under the [AB 1482 cap](/insights/ab-1482-rent-cap-2026/).',
		},
		{
			q: 'What can I use as a defense if I raised rent more than 10% during an emergency?',
			a: 'Two are listed: the tenant contractually agreed to the increase before the emergency was proclaimed, or the increase is directly attributable to repairs or additions beyond normal maintenance incurred in the prior year, if the unit was rented or offered for rent at the time or the intent to offer it within six months already existed. You would have to prove the facts.',
		},
		{
			q: 'What are the penalties for violating the emergency rent cap?',
			a: 'A violation is a misdemeanor punishable by up to a year in county jail, a fine of up to $10,000, or both, and it is also treated as an unlawful business practice. Talk to an attorney before raising rent by more than 10% during a declared emergency.',
		},
	],
	'ab-628-stove-refrigerator-law-la-apartment-owners': [
		{
			q: 'Do California landlords have to provide a stove and refrigerator?',
			a: 'Yes, for leases entered into, amended, or extended on or after January 1, 2026. AB 628 added a working stove and a working refrigerator to the list of things a rental unit must have to be tenantable. Some housing types are exempt.',
		},
		{
			q: 'Can a tenant bring their own refrigerator under AB 628?',
			a: 'Yes, with conditions. The landlord and tenant must agree when the lease is signed, the lease must include the statement the law prescribes, and the tenant can give 30 days’ written notice to have the landlord install one. A landlord cannot require a tenant to bring a refrigerator. There is no similar option for stoves.',
		},
		{
			q: 'What happens if a stove or refrigerator is recalled?',
			a: 'The landlord must repair or replace it within 30 days of receiving notice of the recall. A recalled appliance is treated as not safe for cooking or storing food. You can check models against the [CPSC recall database](https://www.cpsc.gov/Recalls).',
		},
		{
			q: 'Which rental units are exempt from AB 628?',
			a: 'Permanent supportive housing, single-room occupancy units, units in a residential hotel, and dwelling units in a facility with shared or communal kitchens, including assisted living facilities.',
		},
		{
			q: 'What is the penalty if my rental unit has no stove or refrigerator?',
			a: 'AB 628 sets no separate fine. A unit that substantially lacks a working stove or refrigerator is treated as untenantable, which gives the tenant the remedies California law already provides for untenantable housing.',
		},
		{
			q: 'Should I check my appliances before selling my apartment building?',
			a: 'Yes. Buyers walk the units, and missing, old, or tenant-owned appliances can lead to price credits. List each unit’s stove and refrigerator, look up recalls, replace what is broken, and keep the required lease language on file. See our [guide to selling step by step](/insights/how-to-sell-an-apartment-building-in-los-angeles-step-by-step/).',
		},
	],
	'la-rso-rent-increase-rules-2026-apartment-owners': [
		{
			q: 'How much can I raise rent on a rent-stabilized unit in Los Angeles in 2026?',
			a: 'The City’s Rent Stabilization Ordinance calculator uses 3%, and a City Council office page states the annual increase remains at 3% from July 1, 2025 to June 30, 2027. Confirm the current figure with the Los Angeles Housing Department before you send a notice.',
		},
		{
			q: 'Can I still add an extra 1% for utilities on an RSO unit?',
			a: 'No. The Los Angeles Housing Department says that beginning February 2, 2026, a landlord can no longer include any additional percentage increase for utilities in an annual rent increase.',
		},
		{
			q: 'What is the new RSO rent increase formula?',
			a: 'According to the Apartment Association of Greater Los Angeles, the ordinance sets the annual allowable increase at 90% of the Consumer Price Index for all items, with a ceiling of 4% and a floor of 1%. Confirm with the Housing Department how it applies to your notice date.',
		},
		{
			q: 'Which Los Angeles buildings are covered by the RSO?',
			a: 'Generally apartment buildings in the City of Los Angeles with a certificate of occupancy issued before October 1, 1978. Newer buildings typically fall under the statewide AB 1482 cap, which is 8.7% for increases effective on or after August 1, 2026.',
		},
		{
			q: 'How much notice do I have to give for a rent increase?',
			a: 'State law requires 30 days’ written notice for rent increases of less than 10%. The Housing Department also notes that RSO and Systematic Code Enforcement Program fees can be passed through to tenants only with proper written notice.',
		},
		{
			q: 'How does the lower RSO cap affect what my building is worth?',
			a: 'It limits how fast rents can grow, and buyers give only partial credit for upside they cannot capture until units turn over. A free [Broker Opinion of Value](/contact/?intent=bov) shows how buyers would price your building today.',
		},
	],
	'la-apartment-building-due-diligence-checklist-for-buyers': [
		{
			q: 'What is due diligence when buying an apartment building?',
			a: 'It is the period after your offer is accepted when you inspect the building and verify the seller’s records before your deposit becomes non-refundable. The length of the period, the deposit, and your right to cancel are negotiated in the purchase agreement.',
		},
		{
			q: 'How do I verify the rent roll on an apartment building?',
			a: 'Compare it three ways: against the leases, against tenant estoppels in which each tenant confirms their rent, deposit, and lease dates, and against the seller’s bank deposits for the last several months. Also ask for two to three years of income and expenses.',
		},
		{
			q: 'How do I find out if an LA apartment building is rent controlled?',
			a: 'Buildings in the City of Los Angeles with a certificate of occupancy issued before October 1, 1978 are generally covered by the Rent Stabilization Ordinance. Look up the address on the City’s ZIMAS site, or call the Housing Department at (866) 557-7368. Other cities, such as Santa Monica, have their own rules.',
		},
		{
			q: 'What inspections should I order on an older LA apartment building?',
			a: 'A licensed general inspector, plus specialists as needed: a plumber to scope the lines, an electrician for the panels, a roofer, and a structural engineer where the building has soft-story or balcony concerns. Ask for the SB 721 balcony report and proof of any seismic retrofit.',
		},
		{
			q: 'Will my property taxes change when I buy an apartment building in California?',
			a: 'Yes. A purchase triggers a reassessment at the purchase price. Proposition 13 sets the base rate at 1%, and voter-approved assessments and direct charges are added, so the seller’s current bill tells you very little about yours.',
		},
		{
			q: 'What are the biggest red flags during due diligence?',
			a: 'Rents the leases or tenants contradict, expenses that look too low, no record of RSO registration, rented units missing from the City’s records, deferred maintenance the inspector rates worse than the seller does, and a seller who resists estoppels or unit access.',
		},
	],
	'financing-an-apartment-building-in-los-angeles': [
		{
			q: 'How do I get a loan to buy an apartment building in Los Angeles?',
			a: 'Talk to two or three lenders before you make offers. Buildings with up to four units can generally be financed with residential mortgages, and buildings with five or more units need commercial loans. Agency programs, banks, credit unions, and bridge lenders are the main sources, and each lender’s quote should be compared on rate, leverage, coverage, prepayment, and recourse.',
		},
		{
			q: 'What is a DSCR, and what do lenders require?',
			a: 'The debt service coverage ratio is the building’s net operating income divided by the year’s loan payments. Lenders set a minimum, often somewhere around 1.2 to 1.35 times, and it varies by lender and loan. Ask your lender for the current figure.',
		},
		{
			q: 'How much can I borrow on an apartment building?',
			a: 'It depends on the lowest of the lender’s tests: a percentage of the building’s appraised value, and the loan that the net operating income can support at the minimum debt service coverage. The lender’s appraisal and your borrower profile also matter.',
		},
		{
			q: 'Can borrowing make my return on an apartment building worse?',
			a: 'Yes, when the loan’s rate is higher than the building’s cap rate. In our illustration, a 6.0% cap rate building financed at 6.5% returned about 3.1% on the buyer’s cash, compared with 6.0% all cash. The same loan at 5.0% returned about 5.2%.',
		},
		{
			q: 'Do lenders give credit for below-market rents in a rent-controlled building?',
			a: 'No. Lenders underwrite the rents in place, and they use their own assumptions for vacancy, expenses, and reserves. Under rent control the owner generally cannot raise rents to market while tenants remain.',
		},
		{
			q: 'What if I am buying with a 1031 exchange?',
			a: 'Your loan has to close inside the exchange timeline: 45 days to identify a replacement property and 180 days to close. Speak to a lender before you identify a property. See our [1031 exchange guide](/1031-exchanges/).',
		},
	],
	'how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm': [
		{
			q: 'How do I calculate the cap rate on an apartment building?',
			a: 'Divide the net operating income by the price. If the building earns $144,000 of NOI and sells for $2,400,000, the cap rate is 6.0%. Flip it around to value a building: NOI divided by the cap rate.',
		},
		{
			q: 'What is net operating income (NOI)?',
			a: 'The rent the building collects in a year, minus operating expenses such as property tax, insurance, utilities, repairs, management, and a vacancy allowance. It does not subtract loan payments or income taxes.',
		},
		{
			q: 'What is the gross rent multiplier (GRM)?',
			a: 'The price divided by the year’s gross rent. A $2,400,000 building with $240,000 of rent has a GRM of 10.0. It is a quick check that ignores expenses, so it can mislead when two buildings cost different amounts to run.',
		},
		{
			q: 'What is cash-on-cash return?',
			a: 'The year’s cash flow after loan payments, divided by the cash you invested. In our example, about $25,700 of cash flow on $840,000 of equity is a return of about 3.1%.',
		},
		{
			q: 'How does rent control change how I should analyze a building?',
			a: 'Price the building on the rents in place. In a rent-stabilized building the City’s published annual increase is 3%, and units reach market rent only when tenants leave, so below-market rents are upside you cannot count on. See our guide to the [City’s RSO changes](/insights/la-rso-rent-increase-rules-2026-apartment-owners/).',
		},
		{
			q: 'What expense ratio should I assume for an LA apartment building?',
			a: 'Our free property value calculator assumes 37% to 47% of rent for buildings built before 1935, 37% to 42% for other rent-controlled buildings, and 32% to 36% for buildings built in 1978 or later. Use the building’s actual bills whenever you have them.',
		},
	],
	'mistakes-buying-an-apartment-building-in-los-angeles': [
		{
			q: 'What are the most common mistakes when buying an apartment building?',
			a: 'Underwriting rents a rent-controlled building cannot charge, trusting the seller’s rent roll and expenses, underestimating deferred maintenance and compliance, forgetting the property tax reassessment, and borrowing at a rate above the cap rate.',
		},
		{
			q: 'Can I raise rents to market after I buy a rent-controlled building?',
			a: 'Generally not while tenants remain. Under the Rent Stabilization Ordinance the allowable annual increase is limited, and units reach market rent only when they turn over. Underwrite the rents in place.',
		},
		{
			q: 'Why do buyers need to think about the exit when they buy?',
			a: 'Because the cost of selling is part of the return. If a future sale could land above $5.4 million inside the City of Los Angeles, the Measure ULA tax applies to the whole price. See our [Measure ULA calculator](/measure-ula-calculator/).',
		},
		{
			q: 'What team do I need to buy an apartment building?',
			a: 'A real estate attorney, a licensed inspector, a CPA, a lender, and a broker who knows the neighborhood. We represent buyers as well as sellers, so [contact us](/contact/) if you are looking at a building.',
		},
	],
};
