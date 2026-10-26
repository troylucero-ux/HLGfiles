// GET /api/verify-address?address=... lets the website check a typed address before the form is submitted.
// Returns { status: 'verified' | 'not_found' | 'unchecked' }. See worker/address.ts for what the check can and cannot tell.

import { checkAddress } from './address';

export async function handleVerifyAddress(request: Request): Promise<Response> {
	const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
	if (request.method !== 'GET') return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers });

	const address = new URL(request.url).searchParams.get('address') ?? '';
	if (!address.trim() || address.length > 200) {
		return new Response(JSON.stringify({ status: 'not_found' }), { headers });
	}
	const check = await checkAddress(address);
	// The matched address is not sent back; the page only needs to know whether to warn.
	return new Response(JSON.stringify({ status: check.status }), { headers });
}
