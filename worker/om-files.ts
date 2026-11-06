// Offering Memorandum PDFs, keyed by listing slug. Each PDF lives in /public/om/ under a long random
// file name that is never linked from a page: the Worker only reveals it in the response to a valid
// /api/om-lead submission. This is a lead gate, not a vault: anyone who is given the link can forward it.
// To add a listing: copy the OM to public/om/<slug>-om-<32 random hex>.pdf, add it here, and set
// `omGate: true` on the listing in src/data/listings.ts.

export const omFiles: Record<string, string> = {
	'311-s-new-hampshire-ave-los-angeles-ca-90020': '/om/311-s-new-hampshire-ave-om-19984726de233c61b3f18484f4fcb662.pdf',
	'4143-don-tomaso-dr-los-angeles-ca-90008': '/om/4143-don-tomaso-dr-om-ebb25fb9acc98a87f9734bab46ef2199.pdf',
	'1118-1120-sanborn-ave-los-angeles-ca-90029': '/om/1118-1120-sanborn-ave-om-961b43fd57bf8c8d766624f3c91afabd.pdf',
	'927-s-berendo-st-los-angeles-ca-90006': '/om/927-s-berendo-st-om-5dc90cd23fe017a8bbf14bfc771083cc.pdf',
	'5631-whitnall-hwy-los-angeles-ca-91601': '/om/5631-whitnall-hwy-om-2d3f5a4d507d4bd20dc5340aa29e4a56.pdf',
	'333-n-union-ave-los-angeles-ca-90026': '/om/333-n-union-ave-om-eeee12d391448d14fd2e1fba52a2ed7f.pdf',
	'3815-don-tomaso-dr-los-angeles-ca-90008': '/om/3815-don-tomaso-dr-om-16e58a17f2f8454dc3e995e73b214e11.pdf',
};
