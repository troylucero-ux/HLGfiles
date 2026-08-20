// Accepts Broker Opinion of Value lead submissions and pushes them into Pipedrive as a Person + Lead.
// Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN as Cloudflare Worker environment variables/secrets.
// Falls back to logging only (still returns success to the visitor) if those aren't set yet.

import { createLead, createPerson, pipedriveConfigured } from './pipedrive';
import { corsHeaders, type Env } from './env';

export async function handleBovLead(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	let body: { name?: string; email?: string; phone?: string; privacyConsent?: boolean };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const { name, email, phone, privacyConsent } = body;

	if (!name || typeof name !== 'string' || !email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email) || !phone || !privacyConsent) {
		return new Response(JSON.stringify({ error: 'Please fill out all fields and accept the privacy policy.' }), {
			status: 400,
			headers: corsHeaders(),
		});
	}

	if (pipedriveConfigured(env)) {
		try {
			const person = await createPerson(env, { name, email, phone });
			if (person) {
				await createLead(env, {
					title: `BOV Request — ${name}`,
					personId: person.id,
					note: `Broker Opinion of Value request submitted via highlightreg.com.\nEmail: ${email}\nPhone: ${phone}`,
				});
			} else {
				console.error('Pipedrive person creation failed for BOV lead:', { name, email });
			}
		} catch (err) {
			console.error('Pipedrive BOV lead sync error:', err);
		}
	} else {
		console.log('BOV lead received (Pipedrive not configured):', { name, email, phone });
	}

	return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders() });
}
