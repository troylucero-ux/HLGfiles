// Insights / blog posts. Add entries here as content is written — src/pages/insights/[slug].astro
// renders each one automatically. Good remaining topics per the project brief: RSO updates,
// Measure ULA, long-tail submarket + process keywords.

export type Post = {
	slug: string;
	title: string;
	description: string;
	date: string; // ISO date
	sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
	{
		slug: 'ab-1482-rent-cap-2026',
		title: "AB 1482's Rent Cap Just Reset: What It Means for Post-1978 LA Apartment Buildings",
		description:
			"The maximum allowable rent increase under California's statewide AB 1482 cap changed effective August 1, 2026. What the new number is, why it applies to a large share of LA's apartment stock, and why it matters for underwriting.",
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
		description:
			'A quiet water bill increase can run for months before anyone notices, and the cost is bigger than the bill itself. How to catch it early, with two real examples and the cap rate math behind them.',
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
		description:
			'How and why LA multifamily owners use a 1031 exchange to move out of active apartment management and into passive triple-net (NNN) investments, including a recent client example.',
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
