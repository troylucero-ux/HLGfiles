// Accepts 1031 exchange consult requests and pushes them into Pipedrive as a Person + Lead.
// Same pattern as om-lead.ts: needs PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN; logs only if they are not set.

import { createLead, createPerson, pipedriveConfigured } from './pipedrive';
import { corsHeaders, type Env } from './env';
import { sourceNote } from './source';

const STAGES = ['Just exploring', 'Preparing to list', 'Listed or in escrow', 'Sale closed (the 45 days are running)'];
const INTERESTS = ['Apartments', 'Triple-net (NNN) property', 'Delaware Statutory Trust (DST)', 'Not sure yet'];
const TIMINGS = ['Within 60 days', 'In 2 to 6 months', 'In 6 to 12 months', 'Not sure yet'];

const str = (v: unknown, max = 200): string => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function handleExchangeLead(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const name = str(body.name, 120);
	const email = str(body.email);
	const phone = str(body.phone, 40);
	const stage = str(body.stage);
	const interest = str(body.interest);
	const timing = str(body.timing);

	if (!name || !/^\S+@\S+\.\S+$/.test(email) || !STAGES.includes(stage) || !INTERESTS.includes(interest) || !TIMINGS.includes(timing) || body.privacyConsent !== true) {
		return new Response(JSON.stringify({ error: 'Please complete the required fields and accept the privacy policy.' }), { status: 400, headers: corsHeaders() });
	}

	const urgent = stage === 'Sale closed (the 45 days are running)' || stage === 'Listed or in escrow' || timing === 'Within 60 days';
	const note = [
		'1031 exchange consult request submitted via highlightreg.com.',
		`Email: ${email}`,
		phone ? `Phone: ${phone}` : '',
		`Where they are in the sale: ${stage}`,
		`Replacement interest: ${interest}`,
		`Expected closing: ${timing}`,
		urgent ? 'TIME-SENSITIVE: call promptly.' : '',
		...sourceNote(body.source),
	]
		.filter(Boolean)
		.join('\n');

	if (pipedriveConfigured(env)) {
		try {
			const person = await createPerson(env, { name, email, phone: phone || undefined });
			if (person) {
				await createLead(env, { title: `${urgent ? '[URGENT] ' : ''}1031 Consult: ${name}`, personId: person.id, note });
			} else {
				console.error('Pipedrive person creation failed for 1031 lead:', { name, email });
			}
		} catch (err) {
			console.error('Pipedrive 1031 lead sync error:', err);
		}
	} else {
		console.log('1031 lead received (Pipedrive not configured):', { name, email, phone, stage, interest, timing });
	}

	return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders() });
}
