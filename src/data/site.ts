export const site = {
	name: 'Highlight Real Estate Group',
	brokerage: 'Equity Union Commercial',
	url: 'https://highlightreg.com',
	officeAddress: '16820 Ventura Boulevard, Encino, CA 91436',
	officeDRE: '01811831',
	phone: '310.405.1890',
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
		title: 'Director, Multifamily Investments',
		dre: '01934177',
		phone: '310.405.1890',
		email: 'josh.kaplan@equityunion.com',
		linkedin: 'https://www.linkedin.com/in/josh-a-kaplan/',
		headshot: '/images/bio/josh-kaplan-headshot.jpg',
		bio: [
			'Josh Kaplan brings more than 20 years of experience in real estate brokerage, acquisitions, and asset management to every transaction. As co-founder of Highlight Real Estate Group, he has helped close over 1,390 multifamily units, 135,000 square feet of land for development, and more than $345,000,000 in sale value for his clients.',
			'Before founding Highlight, Josh served as Managing Director of Multifamily at Transwestern and as Director of Asset Management at Federal Realty Investment Trust. He spent seven years at Watt Companies, where he sourced and underwrote more than $900 million in acquisitions, and began his career in Deloitte’s financial advisory services group.',
			'Josh holds a B.S. in Economics and History from UCLA. He is an active member of the Apartment Association of Greater Los Angeles Products and Services Council and the UCLA Ziman Real Estate Alumni Group.',
		],
		specialties: ['Seller Representation', 'Buyer Representation', '1031 Exchange Strategy', 'Property Management Advisory'],
		education: 'B.S. Economics and History, UCLA',
	},
	{
		slug: 'troy-lucero',
		name: 'Troy Lucero',
		title: 'Director, Multifamily Investments, Equity Union Commercial',
		dre: '02015705',
		phone: '310.339.5477',
		email: 'troy.lucero@equityunion.com',
		linkedin: '',
		headshot: '/images/bio/troy-lucero-headshot.jpg',
		bio: [
			'Troy Lucero has negotiated dispositions, 1031 exchanges, and development site sales for apartment owners across Los Angeles and nationwide. As co-founder of Highlight Real Estate Group, he has helped close over 1,390 multifamily units, 135,000 square feet of land for development, and more than $345,000,000 in sale value for his clients.',
			'Troy holds a B.S. in Finance from California State University, Northridge, and brings a disciplined, data-driven approach to every listing and every client relationship.',
		],
		specialties: ['Seller Representation', 'Buyer Representation', '1031 Exchange Strategy', 'Property Management Advisory'],
		education: 'B.S. Finance, California State University, Northridge',
	},
];

export const supportTeam = [
	{ slug: 'zach-pomer', name: 'Zach Pomer', title: 'Marketing Director', headshot: '/images/bio/zach-pomer-headshot.jpg' },
	{ slug: 'monica-hernandez', name: 'Monica Hernandez', title: 'Transaction Coordinator', headshot: '/images/bio/monica-hernandez-headshot.jpg' },
	{ slug: 'billy-rhodes', name: 'Billy Rhodes', title: 'Photographer & Videographer', headshot: '/images/bio/billy-rhodes-headshot.jpg' },
];

// NOTE: highlightreg.com/success-stories/ currently returns "No Results Found" — no testimonials are
// live on the site as of 2026-08-20. These are drawn from the project brief's content inventory and
// should be verified/sourced (e.g. from Google Business Profile) before publishing.
export const testimonials = [
	{
		quote:
			'They sold my Orange Grove property fast and at full price, even with deferred maintenance and low rents. Smooth, professional, and results-driven.',
		attribution: 'Seller of a 5-unit building, Los Angeles',
		verified: false,
	},
	{
		quote:
			'Josh and Troy negotiated hard, kept our timeline on our terms, and preserved the full value of the building throughout the process.',
		attribution: 'Seller of an 18-unit building, Glendale',
		verified: false,
	},
	{
		quote:
			'They found a qualified buyer off-market and closed fast, even with deferred maintenance and rents well below market.',
		attribution: 'Seller of a 65-unit building, Los Angeles',
		verified: false,
	},
];
