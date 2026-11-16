// Article graphics are 4:3, but Facebook and X show link previews at about 1.9:1 and would crop (zoom) them.
// scripts/make-article-og.mjs writes a 1200x630 version of each one; this maps an article image path to it.
// Falls back to the original path for anything that is not an article graphic.
export function socialImageFor(src?: string): string | undefined {
	if (!src) return undefined;
	const m = src.match(/^\/images\/insights\/((?:es\/)?[^/]+)\.(?:webp|png)$/);
	return m ? `/images/social/insights/${m[1]}-og.webp` : src;
}
