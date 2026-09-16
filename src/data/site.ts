export const site = {
	name: 'Highlight Multifamily Group',
	brokerage: 'Equity Union Commercial',
	url: 'https://highlightreg.com',
	officeAddress: '16820 Ventura Boulevard, Encino, CA 91436',
	officeDRE: '01811831',
	phone: '310.405.1890',
	// Google Maps Platform API key (Places API enabled), used client-side for address autocomplete
	// on the BOV form. This is NOT a secret — Google Maps browser keys are visible in page source by
	// design; you secure it in the Google Cloud Console by restricting it to this site's domain(s)
	// under "API restrictions" / "Application restrictions", not by hiding it. Leave blank to disable
	// autocomplete (the address field still works as a plain text input).
	googleMapsApiKey: '',
	// Homepage stat-bar figures, as displayed live on highlightreg.com (rounded marketing figures).
	stats: {
		unitsSold: '1,400+',
		closedSalesVolume: '$350M',
		listToSaleRatio: '98%',
		exchangeSuccessRate: '100%',
	},
	// Precise figures per the About page / project brief — use these in body copy and schema, not the rounded stat bar.
	statsPrecise: {
		units: 1390,
		volume: 345000000,
		landSqFt: 135000,
	},
	social: {
		linkedin: 'https://www.linkedin.com/in/josh-a-kaplan/',
		instagram: '',
		facebook: '',
	},
};

export const team = [
	{
		slug: 'josh-kaplan',
		name: 'Josh Kaplan',
		title: 'Founding Partner',
		department: 'Multifamily Investments',
		dre: '01934177',
		phone: '310.405.1890',
		email: 'josh.kaplan@equityunion.com',
		linkedin: 'https://www.linkedin.com/in/josh-a-kaplan/',
		instagram: 'https://www.instagram.com/joshkaplanapartments/',
		facebook: 'https://www.facebook.com/josh.kaplan.549',
		headshot: '/images/bio/josh-kaplan-headshot.webp',
		bio: [
			'Josh Kaplan brings more than 22 years of experience in real estate brokerage, acquisitions, and asset management to every transaction. As co-founder of Highlight Multifamily Group, he has helped close over 1,390 multifamily units, 135,000 square feet of land for development, and more than $345,000,000 in sale value for his clients.',
			'Before founding Highlight, Josh served as Managing Director of Multifamily at Transwestern and as Director of Asset Management at Federal Realty Investment Trust. He spent seven years at Watt Companies, where he sourced and underwrote more than $900 million in acquisitions, and began his career in Deloitte’s financial advisory services group.',
			'Josh holds a B.S. in Economics and History from UCLA. He is an active member of the Apartment Association of Greater Los Angeles Products and Services Council and the UCLA Ziman Real Estate Alumni Group.',
		],
		specialties: ['Seller Representation', 'Buyer Representation', '1031 Exchange Strategy', 'Property Management Advisory'],
		education: 'B.S. Economics and History, UCLA',
	},
	{
		slug: 'troy-lucero',
		name: 'Troy Lucero',
		title: 'Founding Partner',
		department: 'Multifamily Investments',
		dre: '02015705',
		phone: '310.339.5477',
		email: 'troy.lucero@equityunion.com',
		linkedin: 'https://www.linkedin.com/in/troylucero/',
		instagram: 'https://www.instagram.com/troylucero_apartmentguy/',
		facebook: 'https://www.facebook.com/troy.lucero.980',
		headshot: '/images/bio/troy-lucero-headshot.webp',
		bio: [
			'Troy Lucero has spent more than 10 years in commercial real estate, negotiating dispositions, 1031 exchanges, and development site sales for apartment owners across Los Angeles and nationwide. As co-founder of Highlight Multifamily Group, he has helped close over 1,390 multifamily units, 135,000 square feet of land for development, and more than $345,000,000 in sale value for his clients.',
			'Troy holds a B.S. in Finance from California State University, Northridge, and brings a disciplined, data-driven approach to every listing and every client relationship.',
		],
		specialties: ['Seller Representation', 'Buyer Representation', '1031 Exchange Strategy', 'Property Management Advisory'],
		education: 'B.S. Finance, California State University, Northridge',
	},
];

export const supportTeam = [
	{ slug: 'zach-pomer', name: 'Zach Pomer', title: 'Marketing Director', headshot: '/images/bio/zach-pomer-headshot.webp' },
	{ slug: 'monica-hernandez', name: 'Monica Hernandez', title: 'Transaction Coordinator', headshot: '/images/bio/monica-hernandez-headshot.webp' },
	{ slug: 'billy-rhodes', name: 'Billy Rhodes', title: 'Photographer & Videographer', headshot: '/images/bio/billy-rhodes-headshot.webp' },
];

export const press = [
	{
		name: 'Yahoo Finance',
		url: 'https://finance.yahoo.com/news/multifamily-investment-powerhouses-josh-kaplan-014500450.html',
	},
	{
		name: 'Traded',
		url: 'https://traded.co/agent/josh-kaplan/',
	},
	{
		name: 'Bisnow',
		url: 'https://www.bisnow.com/news/los-angeles/commercial-real-estate/this-weeks-la-deal-sheet-55971',
	},
];

// Real client testimonials provided directly by Troy Lucero (co-founder).
export const testimonials = [
	{
		quote:
			"Josh and Troy from the Highlight Group at Equity Union represented me in the sale of my apartment building in Los Angeles and brought multiple qualified offers to the table. Before closing, the team helped me identify several good options for my 1031 Exchange. The team's connection with brokers in Austin also greatly helped me transition smoothly into apartment ownership in Texas. I highly recommend them if you're buying or selling multifamily property.",
		attribution: 'L., Google Review',
		caseStudySlug: 'the-burlington-portfolio-westlake-apartments',
		verified: true,
	},
	{
		quote:
			'I have done business with other agencies in the past, but none of them are even comparable. I credit Josh and Troy for helping me pick the perfect time to list my property, and for making the sale a complete success.',
		attribution: 'Martine, Seller of 6938 Coldwater Canyon Ave',
		caseStudySlug: '6938-coldwater-canyon-ave-north-hollywood-apartments',
		verified: true,
		featured: true,
	},
	{
		quote:
			"I had a 14-unit building in Koreatown that I'd owned for years and finally decided it was time to sell. A friend referred me to Troy Lucero and Josh Kaplan at Highlight Real Estate Group and I'm really glad they did. These guys know the LA multifamily market inside and out. They got me strong offers, walked me through everything, and were always straight with me. Selling a building like this can be stressful but they made it a lot smoother than I expected. If you own apartments in LA and are thinking about selling, give them a call. I'll definitely be going back to them when I'm ready to make my next move.",
		attribution: 'Steve, Google Review',
		verified: true,
	},
	{
		quote:
			"We just sold our 12-unit apartment building in Los Angeles with Troy and Josh at Highlight Real Estate Group, and honestly, we couldn't be happier with how everything went. Our family had owned this property for over 15 years, so this wasn't just a transaction for us, it was a big moment. We needed people we could actually trust, and Troy and Josh delivered on that completely. They were always easy to get ahold of, walked us through every offer that came and summarized all the key points every time so we actually understood what we were looking at and never made us feel rushed or pressured. You can tell they really know the LA multifamily and investment property market. If you own an apartment building in Los Angeles and are thinking about selling, we'd absolutely point you in their direction. They made a stressful process feel manageable, and that meant a lot to our family.",
		attribution: 'Gustavo, Google Review',
		verified: true,
	},
	{
		quote: "I really appreciated Troy and Josh's advice with regard to the LA apartment market. Highly recommend these guys if you want a broker who actually listens.",
		attribution: 'Jorge, Google Review',
		verified: true,
		featured: true,
	},
	{
		quote:
			'Josh Kaplan and Troy Lucero at Highlight Real Estate Group helped us close on a 9-unit apartment building in Arlington Heights, Los Angeles. Highly recommend this team for anyone buying or selling an apartment building in Los Angeles.',
		attribution: 'Eman, Google Review',
		verified: true,
		featured: true,
	},
	{
		quote:
			'Troy and Josh did an excellent job representing us in the purchase of two apartment buildings in Santa Monica. Most recently, they helped us acquire a 6 unit property in Santa Monica as well. They were knowledgeable, responsive, and made the entire process smooth and straightforward. I would highly recommend them to anyone looking to purchase an apartment property.',
		attribution: 'Arsine, Google Review',
		verified: true,
	},
];
