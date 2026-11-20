// Illustrations for Insights articles. src/pages/insights/[slug].astro looks up `articleVisuals[post.slug][section heading]` and renders each
// visual right after that section's paragraphs, using src/components/InsightVisual.astro. Add an article here to give it graphics; no template change needed.
// Facts in a visual must already be in the article text (and be sourced there); a visual restates, it never adds claims.

export type IconName = 'ruler' | 'building' | 'wrench' | 'clipboard' | 'search' | 'doc' | 'arrow' | 'shield' | 'clock' | 'warning' | 'check' | 'users' | 'home' | 'key';

export type Visual =
	| { kind: 'stats'; caption?: string; items: { value: string; label: string }[] }
	| { kind: 'timeline'; caption?: string; steps: { label: string; detail: string; tone?: 'warn' }[] }
	| { kind: 'cards'; caption?: string; items: { icon: IconName; title: string; text: string }[] }
	| { kind: 'steps'; caption?: string; items: { icon: IconName; title: string; text: string }[] }
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
};
