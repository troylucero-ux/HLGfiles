import { handleChat } from './chat';
import { handleBovLead } from './bov-lead';
import { handleNewsletter } from './newsletter';
import type { Env } from './env';

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/chat') return handleChat(request, env);
		if (url.pathname === '/api/bov-lead') return handleBovLead(request, env);
		if (url.pathname === '/api/newsletter') return handleNewsletter(request, env);

		// Everything else (pages, CSS, images, sitemap, etc.) is served from the Astro build via
		// the [assets] binding configured in wrangler.toml.
		return env.ASSETS.fetch(request);
	},
};
