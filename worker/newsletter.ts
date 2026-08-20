// Accepts newsletter signups and adds the subscriber to Pipedrive as a Person.
// Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN as Cloudflare Worker environment variables/secrets.
// Falls back to logging only (still returns success to the visitor) if those aren't set yet.

import { createPerson, pipedriveConfigured } from './pipedrive';
import { corsHeaders, type Env } from './env';

export async function handleNewsletter(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	let body: { email?: string };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const { email } = body;
	if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
		return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), { status: 400, headers: corsHeaders() });
	}

	if (pipedriveConfigured(env)) {
		try {
			const person = await createPerson(env, { name: email, email });
			if (!person) console.error('Pipedrive person creation failed for newsletter signup:', { email });
		} catch (err) {
			console.error('Pipedrive newsletter sync error:', err);
		}
	} else {
		console.log('Newsletter signup received (Pipedrive not configured):', { email });
	}

	return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders() });
}
