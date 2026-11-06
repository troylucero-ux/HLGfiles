// Accepts Offering Memorandum requests and pushes them into Pipedrive as a Person + Lead.
// Two shapes are accepted:
//  - the original "request the OM" form: { name, email, message, privacyConsent }, answered with { ok: true }
//    (the team sends the OM by hand);
//  - the instant-download gate on a listing page: { firstName, lastName, email, phone?, company?, property,
//    privacyConsent }, answered with { ok: true, omUrl } when that listing has an OM in om-files.ts.
// Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN as Cloudflare Worker environment variables/secrets.
// Falls back to logging only (still returns success to the visitor) if those aren't set yet.

import { createLead, createPerson, pipedriveConfigured } from './pipedrive';
import { corsHeaders, type Env } from './env';
import { omFiles } from './om-files';

type OmBody = {
	name?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	company?: string;
	message?: string;
	property?: string;
	privacyConsent?: boolean;
};

const str = (v: unknown, max = 200): string => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function handleOmLead(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	let body: OmBody;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const firstName = str(body.firstName, 80);
	const lastName = str(body.lastName, 80);
	const name = str(body.name) || [firstName, lastName].filter(Boolean).join(' ');
	const email = str(body.email);
	const phone = str(body.phone, 40);
	const company = str(body.company);
	const property = str(body.property, 120);
	const gated = Boolean(property);
	// The gate form has no message box; the original form requires one.
	const message = str(body.message, 2000) || (gated ? `Requested the offering memorandum for ${property}.` : '');

	if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message || body.privacyConsent !== true || (gated && !(firstName && lastName))) {
		return new Response(JSON.stringify({ error: 'Please fill out the required fields and accept the privacy policy.' }), {
			status: 400,
			headers: corsHeaders(),
		});
	}

	if (pipedriveConfigured(env)) {
		try {
			const person = await createPerson(env, { name, email, phone: phone || undefined });
			if (person) {
				await createLead(env, {
					title: gated ? `OM Download: ${property}, ${name}` : `OM Request: ${name}`,
					personId: person.id,
					note: [
						gated ? 'Offering Memorandum downloaded via highlightreg.com listing page.' : 'Offering Memorandum request submitted via highlightreg.com.',
						`Email: ${email}`,
						phone ? `Phone: ${phone}` : '',
						company ? `Company: ${company}` : '',
						`Property: ${property || '(not stated)'}`,
						`Message: ${message}`,
					]
						.filter(Boolean)
						.join('\n'),
				});
			} else {
				console.error('Pipedrive person creation failed for OM lead:', { name, email });
			}
		} catch (err) {
			console.error('Pipedrive OM lead sync error:', err);
		}
	} else {
		console.log('OM lead received (Pipedrive not configured):', { name, email, phone, company, property });
	}

	const omUrl = gated ? omFiles[property] : undefined;
	return new Response(JSON.stringify(omUrl ? { ok: true, omUrl } : { ok: true }), { headers: corsHeaders() });
}
