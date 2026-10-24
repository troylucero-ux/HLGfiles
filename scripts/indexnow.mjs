// Tells Bing (and other IndexNow search engines such as Yandex) that pages are new or changed, so they are crawled
// within hours instead of days. Google does not use IndexNow.
//
// Usage, after the site has deployed:
//   node scripts/indexnow.mjs                      send every URL in the live sitemap
//   node scripts/indexnow.mjs /insights/new-post/  send only the pages listed (paths or full URLs)
//
// The key below must match the file public/<key>.txt, which is served at https://highlightreg.com/<key>.txt so the
// search engines can confirm the request comes from the site owner. The key is not a secret.

const KEY = 'ae05c0f97d2922fb333e7ae899f89659';
const HOST = 'highlightreg.com';
const SITE = `https://${HOST}`;

const args = process.argv.slice(2);
let urls;
if (args.length) {
	urls = args.map((a) => (a.startsWith('http') ? a : new URL(a, SITE).toString()));
} else {
	const sitemap = await (await fetch(`${SITE}/sitemap-0.xml`)).text();
	urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
	console.error(`The key file is not live yet at ${SITE}/${KEY}.txt. Deploy first, then run this again.`);
	process.exit(1);
}

const res = await fetch('https://api.indexnow.org/IndexNow', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(`Sent ${urls.length} URLs to IndexNow. Response: ${res.status} ${res.statusText}`);
// 200 or 202 means accepted. 400 bad request, 403 key not found or not valid, 422 URLs do not match the host, 429 too many requests.
