// Accepts newsletter signups and adds the subscriber to Pipedrive as a Person.
// Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN as Cloudflare Pages environment variables/secrets.
// Falls back to logging only (still returns success to the visitor) if those aren't set yet.

import { createPerson, pipedriveConfigured, type PipedriveEnv } from '../lib/pipedrive';

interface Env extends PipedriveEnv {}

function corsHeaders(): HeadersInit {
	return {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
	};
}

export async function onRequestOptions(): Promise<Response> {
	return new Response(null, { headers: corsHeaders() });
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
	let body: { email?: string };
	try {
		body = await context.request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const { email } = body;
	if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
		return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), { status: 400, headers: corsHeaders() });
	}

	if (pipedriveConfigured(context.env)) {
		try {
			const person = await createPerson(context.env, { name: email, email });
			if (!person) console.error('Pipedrive person creation failed for newsletter signup:', { email });
		} catch (err) {
			console.error('Pipedrive newsletter sync error:', err);
		}
	} else {
		console.log('Newsletter signup received (Pipedrive not configured):', { email });
	}

	return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders() });
}
