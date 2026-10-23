// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://highlightreg.com',
	integrations: [sitemap()],
	// Small stylesheets are inlined into each page so the first paint does not wait on extra CSS requests.
	build: {
		inlineStylesheets: 'always',
	},
	image: {
		responsiveStyles: true,
	},
});
