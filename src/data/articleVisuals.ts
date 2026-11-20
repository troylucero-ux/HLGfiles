// Illustrations for Insights articles. src/pages/insights/[slug].astro looks up `articleVisuals[post.slug][section heading]` and renders each
// visual right after that section's paragraphs, using src/components/InsightVisual.astro. Add an article here to give it graphics; no template change needed.
// Facts in a visual must already be in the article text (and be sourced there); a visual restates, it never adds claims.

export type IconName = 'ruler' | 'building' | 'wrench' | 'clipboard' | 'search' | 'doc' | 'arrow' | 'shield' | 'clock' | 'warning' | 'check' | 'users' | 'home' | 'key';

export type Visual =
	| { kind: 'stats'; caption?: string; items: { value: string; label: string }[] }
	| { kind: 'timeline'; caption?: string; steps: { label: string; detail: string; tone?: 'warn' }[] }
	| { kind: 'cards'; caption?: string; tone?: 'warn'; items: { icon: IconName; title: string; text?: string }[] }
	| { kind: 'steps'; caption?: string; tone?: 'warn'; items: { icon: IconName; title: string; text?: string }[] }
	| { kind: 'compare'; caption?: string; yes: { title: string; items: string[] }; no: { title: string; items: string[] } }
	| { kind: 'balcony' };

export const articleVisuals: Record<string, Record<string, Visual[]>> = {
	'sb-721-balcony-inspection-los-angeles-apartment-owners': {
		'Key Takeaways': [
			{
				kind: 'stats',
				caption: 'SB 721 at a glance',
				items: [
					{ value: '3+', label: 'dwelling units in the building' },
					{ value: '6 ft', label: 'walking surface above the ground' },
					{ value: '15%', label: 'of each type of element inspected' },
					{ value: '6 years', label: 'between inspections (next: January 1, 2032)' },
				],
			},
		],
		'Which Buildings Are Covered? Are Exterior Stairs and Walkways Included?': [
			{ kind: 'balcony' },
			{
				kind: 'compare',
				yes: {
					title: 'Generally covered',
					items: ['Wood-supported balconies, decks, and porches', 'Exterior stairways and walkways', 'Entry structures', 'Elements with a walking surface more than six feet above the ground'],
				},
				no: {
					title: 'Generally not covered',
					items: ['Steel or concrete structures', 'Patios at ground level', 'Condominium buildings (SB 326 applies instead)'],
				},
			},
		],
		'Who Can Do the Inspection': [
			{
				kind: 'cards',
				caption: 'The law lists four kinds of qualified inspector',
				items: [
					{ icon: 'ruler', title: 'Licensed architect', text: 'A California-licensed architect.' },
					{ icon: 'building', title: 'Civil or structural engineer', text: 'A licensed civil or structural engineer.' },
					{ icon: 'wrench', title: 'Building contractor', text: '“A,” “B,” or “C-5” license and five or more years building multistory wood-frame buildings.' },
					{ icon: 'clipboard', title: 'Certified inspector or official', text: 'Certified by a recognized state, national, or international association.' },
				],
			},
		],
		'SB 721 Repairs: What Happens If the Inspector Finds a Problem': [
			{
				kind: 'timeline',
				caption: 'The repair schedule under Health and Safety Code section 17973',
				steps: [
					{ label: 'Immediate threat: act right away', detail: 'Keep people off the balcony or stair until it is repaired. That counts as compliance.', tone: 'warn' },
					{ label: 'Written report within 45 days', detail: 'The inspector delivers a stamped or signed report after finishing the inspection.' },
					{ label: 'Apply for a repair permit within 120 days', detail: 'Counted from when you receive the report.' },
					{ label: 'Finish repairs within 120 days of permit approval', detail: 'Unless the local agency grants more time. A licensed contractor does the work.' },
					{ label: 'Repairs still not done at 180 days', detail: 'The inspector notifies you and the local enforcement agency.', tone: 'warn' },
					{ label: '30 days after that notice: penalties start', detail: '$100 to $500 per day until the repairs are complete, and the agency can record a building safety lien.', tone: 'warn' },
				],
			},
		],
		'Missed the Deadline? What to Do Now': [
			{
				kind: 'steps',
				caption: 'Four steps to get on track',
				items: [
					{ icon: 'search', title: 'Hire a qualified inspector', text: 'Schedule the inspection as soon as you can.' },
					{ icon: 'warning', title: 'Protect people first', text: 'If anything is an immediate threat, keep people off it and tell your tenants why.' },
					{ icon: 'doc', title: 'Check any older report', text: 'It must come from a listed inspector and cover each type of element. A pre-2019 report no longer counts.' },
					{ icon: 'clock', title: 'Start the repair clock', text: 'Apply for permits within 120 days of getting the report.' },
				],
			},
		],
		'Selling a Building: The Report Goes to the Buyer': [
			{
				kind: 'steps',
				caption: 'How the report follows the building',
				items: [
					{ icon: 'search', title: 'Inspect', text: 'A qualified inspector examines the balconies, decks, and stairs.' },
					{ icon: 'doc', title: 'Keep the reports', text: 'Keep them in your permanent records for at least two inspection cycles.' },
					{ icon: 'key', title: 'Deliver at sale', text: 'Disclose the reports and deliver them to the buyer when you sell.' },
				],
			},
		],
	},
	'la-apartment-building-due-diligence-checklist-for-buyers': {
		'Key Takeaways': [
			{
				kind: 'stats',
				caption: 'Due diligence at a glance',
				items: [
					{ value: '3', label: 'ways to check the rent roll' },
					{ value: '6', label: 'areas to check, from income to title' },
					{ value: 'Day 1', label: 'start the work the day escrow opens' },
					{ value: '$114,000', label: 'value lost to $8,000 of extra yearly expense at a 7% cap rate' },
				],
			},
		],
		'How the Due Diligence Period Works': [
			{
				kind: 'timeline',
				caption: 'From signed offer to a decision',
				steps: [
					{ label: 'Purchase agreement signed, escrow opens', detail: 'The buyer now has a set period to inspect the building and review its records.' },
					{ label: 'Start the work the same day', detail: 'Records, inspections, and the loan appraisal each take days, so run them at the same time.' },
					{ label: 'Check everything the seller told you', detail: 'Income, rent control, the building, permits, taxes and insurance, title and financing.' },
					{ label: 'Deposit becomes non-refundable at the end of the period', detail: 'The length of the period, the size of the deposit, and your right to cancel are all negotiated.', tone: 'warn' },
					{ label: 'What you find is leverage', detail: 'A lower price, a credit, or a decision to walk away before your deposit is at risk.' },
				],
			},
		],
		'1. Income: Check the Rent Roll Three Ways': [
			{
				kind: 'steps',
				caption: 'Compare the seller’s rent roll against three sources',
				items: [
					{ icon: 'doc', title: 'The leases', text: 'Look for rents that differ between documents and occupied units with no lease.' },
					{ icon: 'users', title: 'Tenant estoppels', text: 'Short statements in which each tenant confirms their rent, deposit, and lease dates.' },
					{ icon: 'clipboard', title: 'The seller’s bank deposits', text: 'The last several months of deposits, compared with the rent roll.' },
				],
			},
		],
		'2. Rent Control and Tenant Law': [
			{
				kind: 'cards',
				caption: 'Which rules apply in the City of Los Angeles',
				items: [
					{ icon: 'building', title: 'Certificate of occupancy before October 1, 1978', text: 'Generally covered by the Rent Stabilization Ordinance (RSO).' },
					{ icon: 'home', title: 'Newer buildings', text: 'Typically fall under the statewide AB 1482 cap.' },
					{ icon: 'key', title: 'Other cities', text: 'Santa Monica, West Hollywood, and Beverly Hills have their own rent control.' },
				],
			},
		],
		'3. The Physical Building': [
			{
				kind: 'cards',
				caption: 'What most often drives cost in older Los Angeles buildings',
				items: [
					{ icon: 'home', title: 'Roof and drainage', text: 'Flat roofs, aging flashing, and clogged drains show up fast in a wet winter.' },
					{ icon: 'wrench', title: 'Plumbing', text: 'Older buildings may still have galvanized or cast-iron pipes. Have a plumber scope the lines.' },
					{ icon: 'warning', title: 'Electrical', text: 'Ask what panels the building has and whether any are brands inspectors flag.' },
					{ icon: 'building', title: 'Seismic', text: 'Pre-1978 wood-frame soft-story buildings must be retrofitted under a 2015 ordinance. Ask for proof the work was permitted.' },
					{ icon: 'ruler', title: 'Balconies and stairs', text: 'Three or more units with elevated wood-supported balconies or stairs need an SB 721 inspection report.' },
					{ icon: 'check', title: 'Appliances', text: 'Leases entered, amended, or extended on or after January 1, 2026 need a working stove and refrigerator.' },
					{ icon: 'shield', title: 'Lead paint', text: 'Sellers of housing built before 1978 must disclose known lead-based paint hazards.' },
				],
			},
		],
		'5. Taxes, Insurance, and Transfer Costs': [
			{
				kind: 'cards',
				items: [
					{ icon: 'building', title: 'Property tax', text: 'A purchase triggers a reassessment. The base rate is 1% of the purchase price, plus voter-approved charges.' },
					{ icon: 'shield', title: 'Insurance', text: 'Get quotes before you remove contingencies, and ask for the seller’s claims history.' },
					{ icon: 'arrow', title: 'Transfer taxes', text: 'Measure ULA is figured on the gross price, including any loan the buyer assumes.' },
				],
			},
		],
		'Red Flags': [
			{
				kind: 'cards',
				tone: 'warn',
				caption: 'Signs to slow down',
				items: [
					{ icon: 'warning', title: 'Rents that do not match', text: 'Rent roll rents that tenants or leases contradict.' },
					{ icon: 'warning', title: 'Expenses that look too low', text: 'Or a seller who will not provide actual bills.' },
					{ icon: 'warning', title: 'RSO gaps', text: 'No record of RSO registration, or increases above what the law allowed.' },
					{ icon: 'warning', title: 'Unrecorded units', text: 'Units that are rented but not on the City’s records.' },
					{ icon: 'warning', title: '“Minor” deferred maintenance', text: 'The seller calls it minor and the inspector does not.' },
					{ icon: 'warning', title: 'Resistance to checking', text: 'A seller who resists estoppels or access to units.' },
				],
			},
		],
		'Build the Right Team': [
			{
				kind: 'cards',
				caption: 'Most buyers need',
				items: [
					{ icon: 'doc', title: 'A real estate attorney' },
					{ icon: 'search', title: 'A licensed inspector' },
					{ icon: 'clipboard', title: 'A CPA' },
					{ icon: 'key', title: 'A lender' },
					{ icon: 'home', title: 'A broker who knows the neighborhood' },
				],
			},
		],
	},
};
