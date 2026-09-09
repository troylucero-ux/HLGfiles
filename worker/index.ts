import { handleChat } from './chat';
import { handleBovLead } from './bov-lead';
import { handleOmLead } from './om-lead';
import { handleNewsletter } from './newsletter';
import { redirects } from './redirects';
import type { Env } from './env';

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/chat') return handleChat(request, env);
		if (url.pathname === '/api/bov-lead') return handleBovLead(request, env);
		if (url.pathname === '/api/om-lead') return handleOmLead(request, env);
		if (url.pathname === '/api/newsletter') return handleNewsletter(request, env);

		// Old highlightreg.com (WordPress) URLs — redirect before falling through to ASSETS so
		// existing Google rankings and shared links survive the migration.
		const pathnameNoSlash = url.pathname.replace(/\/$/, '') || '/';
		const redirectTarget = redirects[pathnameNoSlash];
		if (redirectTarget) {
			return Response.redirect(new URL(redirectTarget, url).toString(), 301);
		}

		// Everything else (pages, CSS, images, sitemap, etc.) is served from the Astro build via
		// the [assets] binding configured in wrangler.toml.
		return env.ASSETS.fetch(request);
	},
};
