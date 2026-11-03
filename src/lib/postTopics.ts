// Topic filters for the Insights page. A post belongs to every topic whose pattern matches. Specific legal and tax topics
// ('all') also look at the description, so an article that covers 1031 exchanges or SB 721 in depth shows up there. Broad
// topics ('title') match the slug and title only, so an article does not land under "Selling" just because it mentions a sale.
// New articles are sorted automatically. Order here is the order of the filter buttons.
export type Topic = { id: string; label: string; test: RegExp; scope: 'title' | 'all' };

export const topics: Topic[] = [
	{ id: '1031', label: '1031 Exchanges', scope: 'all', test: /1031|triple-net|\bNNN\b/i },
	{ id: 'sb-721', label: 'SB 721 Balconies', scope: 'all', test: /sb-721|sb 721|balcon/i },
	{ id: 'rso', label: 'Rent Control (RSO)', scope: 'all', test: /\bRSO\b|rent stabiliz|rent control|rent-stabil/i },
	{ id: 'ab-1482', label: 'AB 1482 & Rent Caps', scope: 'all', test: /1482|rent cap|emergency rent|sb-1365|sb 1365/i },
	{ id: 'ula', label: 'Measure ULA & Transfer Tax', scope: 'all', test: /\bULA\b|transfer tax|measure gs/i },
	{ id: 'taxes', label: 'Taxes & Capital Gains', scope: 'title', test: /capital gains|depreciation|recapture|\btax|1031/i },
	{ id: 'laws', label: 'Laws & Compliance', scope: 'title', test: /\bSB \d|\bAB \d|sb-\d|ab-\d|\blaw\b|inspection|compliance|air conditioning|ordinance|rent stabilization|rso/i },
	{ id: 'selling', label: 'Selling Your Building', scope: 'title', test: /\bsell|off-market|broker opinion|choose a multifamily broker|year-end/i },
	{ id: 'valuation', label: 'Valuation & Cap Rates', scope: 'title', test: /valu|cap rate|price per unit|\bGRM\b|appraisal|prices by neighborhood/i },
	{ id: 'buying', label: 'Buying & Financing', scope: 'title', test: /\bbuyer|buying|financing|due diligence/i },
	{ id: 'market', label: 'Market Reports', scope: 'title', test: /market (update|report)|prices (per unit )?by neighborhood/i },
	{ id: 'ops', label: 'Operations & Maintenance', scope: 'title', test: /utilit|el nino|maintenance|air conditioning|electrical|balcon|stove|refrigerator/i },
	{ id: 'estate', label: 'Inherited & Estate', scope: 'title', test: /inherit|estate sale|trust/i },
];

export function topicsFor(titleText: string, allText: string): string[] {
	return topics.filter((t) => t.test.test(t.scope === 'all' ? allText : titleText)).map((t) => t.id);
}
