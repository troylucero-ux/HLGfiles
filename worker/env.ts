import type { PipedriveEnv } from './pipedrive';

export interface Env extends PipedriveEnv {
	ANTHROPIC_API_KEY: string;
	// The [assets] binding configured in wrangler.toml — serves the Astro-built static site.
	ASSETS: { fetch(request: Request): Promise<Response> };
}

export function corsHeaders(): HeadersInit {
	return {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
	};
}
