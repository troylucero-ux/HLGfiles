// Minimal Pipedrive client for pushing website leads into the CRM.
// Requires PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN (the subdomain before .pipedrive.com) as
// Cloudflare Worker environment variables/secrets. Auth docs: https://pipedrive.readme.io/docs/core-api-concepts-authentication

export interface PipedriveEnv {
	PIPEDRIVE_API_TOKEN?: string;
	PIPEDRIVE_DOMAIN?: string;
}

function baseUrl(env: PipedriveEnv): string {
	return `https://${env.PIPEDRIVE_DOMAIN}.pipedrive.com/api`;
}

function headers(env: PipedriveEnv): HeadersInit {
	return {
		'Content-Type': 'application/json',
		'x-api-token': env.PIPEDRIVE_API_TOKEN as string,
	};
}

export function pipedriveConfigured(env: PipedriveEnv): boolean {
	return Boolean(env.PIPEDRIVE_API_TOKEN && env.PIPEDRIVE_DOMAIN);
}

export async function createPerson(
	env: PipedriveEnv,
	input: { name: string; email?: string; phone?: string }
): Promise<{ id: number } | null> {
	const body: Record<string, unknown> = { name: input.name };
	if (input.email) body.emails = [{ value: input.email, primary: true, label: 'work' }];
	if (input.phone) body.phones = [{ value: input.phone, primary: true, label: 'work' }];

	const res = await fetch(`${baseUrl(env)}/v2/persons`, {
		method: 'POST',
		headers: headers(env),
		body: JSON.stringify(body),
	});

	if (!res.ok) return null;
	const json = (await res.json()) as { data?: { id: number } };
	return json.data ? { id: json.data.id } : null;
}

export async function createLead(env: PipedriveEnv, input: { title: string; personId: number; note?: string }): Promise<boolean> {
	const res = await fetch(`${baseUrl(env)}/v1/leads`, {
		method: 'POST',
		headers: headers(env),
		body: JSON.stringify({ title: input.title, person_id: input.personId }),
	});

	if (!res.ok || !input.note) return res.ok;

	const json = (await res.json()) as { data?: { id: string } };
	const leadId = json.data?.id;
	if (!leadId) return true;

	await fetch(`${baseUrl(env)}/v1/notes`, {
		method: 'POST',
		headers: headers(env),
		body: JSON.stringify({ content: input.note, lead_id: leadId }),
	});

	return true;
}
