// Accepts Offering Memorandum request submissions and pushes them into Pipedrive as a Person + Lead.
// Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN as Cloudflare Worker environment variables/secrets.
// Falls back to logging only (still returns success to the visitor) if those aren't set yet.

import { createLead, createPerson, pipedriveConfigured } from './pipedrive';
import { corsHeaders, type Env } from './env';

export async function handleOmLead(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	let body: { name?: string; email?: string; message?: string; privacyConsent?: boolean };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const { name, email, message, privacyConsent } = body;

	if (
		!name ||
		typeof name !== 'string' ||
		!email ||
		typeof email !== 'string' ||
		!/^\S+@\S+\.\S+$/.test(email) ||
		!message ||
		typeof message !== 'string' ||
		!privacyConsent
	) {
		return new Response(JSON.stringify({ error: 'Please fill out all fields and accept the privacy policy.' }), {
			status: 400,
			headers: corsHeaders(),
		});
	}

	if (pipedriveConfigured(env)) {
		try {
			const person = await createPerson(env, { name, email });
			if (person) {
				await createLead(env, {
					title: `OM Request — ${name}`,
					personId: person.id,
					note: `Offering Memorandum request submitted via highlightreg.com.\nEmail: ${email}\nMessage: ${message}`,
				});
			} else {
				console.error('Pipedrive person creation failed for OM lead:', { name, email });
			}
		} catch (err) {
			console.error('Pipedrive OM lead sync error:', err);
		}
	} else {
		console.log('OM lead received (Pipedrive not configured):', { name, email, message });
	}

	return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders() });
}
