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
			"Josh and Troy's connections with brokers in Austin made for a smooth 1031 exchange into apartment ownership in Texas.",
		attribution: 'Seller of 192 Units in Westlake / MacArthur Park',
		caseStudySlug: 'the-burlington-portfolio-westlake-apartments',
		verified: true,
	},
	{
		quote:
			'I have done business with other agencies in the past, but none of them are even comparable. I credit Josh and Troy for helping me pick the perfect time to list my property, and for making the sale a complete success.',
		attribution: 'Seller of 10 units in North Hollywood',
		caseStudySlug: '6938-coldwater-canyon-ave-north-hollywood-apartments',
		verified: true,
	},
	{
		quote:
			'These guys know the LA multifamily market inside and out. They got me strong offers, walked me through everything, and were always straight with me. Selling a building like this can be stressful but they made it a lot smoother than I expected.',
		attribution: 'Seller of 14 units in Koreatown',
		verified: true,
	},
	{
		quote:
			'We needed people we could actually trust, and Troy and Josh delivered on that completely. They were always easy to get ahold of, walked us through every offer that came and summarized all the key points every time so we actually understood what we were looking at and never made us feel rushed or pressured.',
		attribution: 'Seller of 12 Units in Los Angeles',
		verified: true,
	},
	{
		quote: "I really appreciated Troy and Josh's advice with regard to the LA apartment market. Highly recommend these guys if you want a broker who actually listens.",
		attribution: 'Jorge Morales, Google Review',
		verified: true,
	},
];
