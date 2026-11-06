// Turns the "source" object a form sends (see hlgSource() in src/layouts/BaseLayout.astro) into plain note
// lines for the Pipedrive lead, so each lead says which Facebook post, page and button produced it.
// Everything is length-limited and stripped of line breaks; no personal details are ever part of it.

const clean = (v: unknown, max = 140): string => (typeof v === 'string' ? v.replace(/[\r\n]+/g, ' ').trim().slice(0, max) : '');

export function sourceNote(src: unknown): string[] {
	if (!src || typeof src !== 'object') return [];
	const s = src as Record<string, unknown>;
	const lines: string[] = [];

	const utmSource = clean(s.utm_source, 60);
	const utmMedium = clean(s.utm_medium, 60);
	const campaign = clean(s.utm_campaign);
	const content = clean(s.utm_content);
	const referrer = clean(s.referrer, 80);
	if (utmSource) {
		lines.push(`Lead source: ${utmSource}${utmMedium ? ` / ${utmMedium}` : ''}${campaign ? ` / campaign ${campaign}` : ''}${content ? ` / post ${content}` : ''}`);
	} else if (referrer) {
		lines.push(`Lead source: referred by ${referrer}`);
	} else {
		lines.push('Lead source: direct or unknown');
	}

	const landing = clean(s.landing);
	if (landing) lines.push(`First page visited: ${landing}`);
	const page = clean(s.page);
	if (page) lines.push(`Form submitted on: ${page}`);
	const cta = clean(s.cta, 80);
	const ctaPage = clean(s.ctaPage);
	if (cta) lines.push(`Last button clicked: ${cta}${ctaPage ? ` (on ${ctaPage})` : ''}`);
	return lines;
}
