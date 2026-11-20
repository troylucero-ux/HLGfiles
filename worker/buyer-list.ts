// Accepts buyer-list sign-ins from the Listings page: { name, email, phone?, privacyConsent, source }.
// Records the buyer in Pipedrive as a Person (looked up by email first, so repeat sign-ups don't duplicate) and adds a
// Lead titled "Buyer List: <name>" with a note saying where it came from. Nothing is emailed automatically.
// Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN as Cloudflare Worker secrets; logs only if they aren't set.

import { createLead, createPerson, pipedriveConfigured } from './pipedrive';
import { corsHeaders, type Env } from './env';
import { sourceNote } from './source';

type BuyerBody = {
	name?: string;
	email?: string;
	phone?: string;
	privacyConsent?: boolean;
	source?: unknown;
};

const str = (v: unknown, max = 200): string => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function handleBuyerList(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	let body: BuyerBody;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const name = str(body.name, 120);
	const email = str(body.email);
	const phone = str(body.phone, 40);

	if (!name || !/^\S+@\S+\.\S+$/.test(email) || body.privacyConsent !== true) {
		return new Response(JSON.stringify({ error: 'Please enter your name and email and accept the privacy policy.' }), {
			status: 400,
			headers: corsHeaders(),
		});
	}

	if (pipedriveConfigured(env)) {
		try {
			const person = await createPerson(env, { name, email, phone: phone || undefined });
			if (person) {
				await createLead(env, {
					title: `Buyer List: ${name}`,
					personId: person.id,
					note: [
						'Joined the buyer list on the highlightreg.com Listings page (wants to hear about new listings first).',
						`Email: ${email}`,
						phone ? `Phone: ${phone}` : 'Phone: not provided',
						'Consent given to be contacted about new listings.',
						...sourceNote(body.source),
					].join('\n'),
				});
			} else {
				console.error('Pipedrive person creation failed for buyer list sign-up:', { name, email });
			}
		} catch (err) {
			console.error('Pipedrive buyer list sync error:', err);
		}
	} else {
		console.log('Buyer list sign-up received (Pipedrive not configured):', { name, email, phone });
	}

	return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders() });
}
