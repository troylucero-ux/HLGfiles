// Article text is plain, with [link text](/internal-path/) or [link text](https://...) links supported.
const linkPattern = /\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g;

export function toParts(paragraph: string) {
	const parts: { text: string; href?: string }[] = [];
	let last = 0;
	for (const m of paragraph.matchAll(linkPattern)) {
		if (m.index! > last) parts.push({ text: paragraph.slice(last, m.index) });
		parts.push({ text: m[1], href: m[2] });
		last = m.index! + m[0].length;
	}
	if (last < paragraph.length) parts.push({ text: paragraph.slice(last) });
	return parts;
}

// The same text with the link markup removed, for structured data where only plain text is allowed.
export function stripLinks(paragraph: string) {
	return paragraph.replace(linkPattern, '$1');
}
