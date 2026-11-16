// Builds 1200x630 social-share versions of the article graphics (which are 4:3), so Facebook and X do not crop them.
// The full graphic is fitted to the height and centred on a soft navy-tint field, so nothing is cut off.
// Run from the project root: node scripts/make-article-og.mjs
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const W = 1200, H = 630;
let total = 0;
for (const sub of ['', 'es']) {
const src = path.join('public/images/insights', sub);
const out = path.join('public/images/social/insights', sub);
fs.mkdirSync(out, { recursive: true });
const files = fs.readdirSync(src).filter((f) => /\.(webp|png)$/i.test(f));
total += files.length;
for (const f of files) {
	const base = path.parse(f).name;
	const img = await sharp(path.join(src, f)).resize({ height: H, fit: 'inside' }).toBuffer({ resolveWithObject: true });
	const left = Math.round((W - img.info.width) / 2);
	// A navy field with a gold rule on each side of the graphic keeps the side bars clean and on brand.
	const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14467a"/><stop offset="1" stop-color="#0c2e50"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/><rect x="${left - 6}" y="0" width="6" height="${H}" fill="#b6944a"/><rect x="${left + img.info.width}" y="0" width="6" height="${H}" fill="#b6944a"/></svg>`;
	await sharp(Buffer.from(bgSvg))
		.composite([{ input: img.data, left, top: 0 }])
		.webp({ quality: 86 })
		.toFile(path.join(out, `${base}-og.webp`));
}
}
console.log('made', total);
