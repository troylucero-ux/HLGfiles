// Silently logs every Property Value Calculator submission into Pipedrive, whether or not the
// visitor goes on to request a full Broker Opinion of Value. No name/email/phone is collected by
// the free calculator, so the Person record is keyed by the property address itself, enough to
// look the owner up and follow up directly. Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN as
// Cloudflare Worker environment variables/secrets. Falls back to logging only (still returns
// success to the visitor) if those aren't set yet.

import { createLead, createPerson, pipedriveConfigured } from './pipedrive';
import { corsHeaders, type Env } from './env';

interface ValuationLeadBody {
	address?: string;
	submarket?: string;
	monthlyGrossRents?: string;
	yearBuilt?: string;
	units?: string;
	estimateLow?: string;
	estimateHigh?: string;
	compCount?: string;
	compArea?: string;
}

export async function handleValuationLead(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	let body: ValuationLeadBody;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const { address, submarket, monthlyGrossRents, yearBuilt, units, estimateLow, estimateHigh, compCount, compArea } = body;

	if (!address || typeof address !== 'string' || !monthlyGrossRents) {
		return new Response(JSON.stringify({ error: 'Please enter a property address and monthly gross rent.' }), {
			status: 400,
			headers: corsHeaders(),
		});
	}

	if (pipedriveConfigured(env)) {
		try {
			const person = await createPerson(env, { name: `${address} (Valuation Calculator)` });
			if (person) {
				const noteLines = [
					'Property Value Calculator submission on highlightreg.com. No contact info was collected.',
					`Property Address: ${address}`,
					submarket ? `Submarket Selected: ${submarket}` : null,
					`Monthly Gross Rent Entered: ${monthlyGrossRents}`,
					yearBuilt ? `Year Built: ${yearBuilt}` : null,
					units ? `Units: ${units}` : null,
					estimateLow && estimateHigh ? `Estimated Range Shown: ${estimateLow} - ${estimateHigh}` : 'No estimate shown (not enough sales data for this neighborhood and building age).',
					compCount && compArea ? `Based on ${compCount} comps in ${compArea}` : null,
				].filter((line): line is string => Boolean(line));

				await createLead(env, {
					title: `Valuation Calculator — ${address}`,
					personId: person.id,
					note: noteLines.join('\n'),
				});
			} else {
				console.error('Pipedrive person creation failed for valuation lead:', { address });
			}
		} catch (err) {
			console.error('Pipedrive valuation lead sync error:', err);
		}
	} else {
		console.log('Valuation calculator lead received (Pipedrive not configured):', body);
	}

	return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders() });
}
