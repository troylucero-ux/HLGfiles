# highlightreg.com

Custom-coded, SEO-first rebuild of the Highlight Real Estate Group website. Static Astro site served by a Cloudflare Worker (via Cloudflare's Workers Builds Git integration — not Pages), with a Claude-powered chat widget and Pipedrive-backed lead capture running as routes in that same Worker.

## Stack

- **Astro** (static output) — pages, components, layouts under `src/`, built to `dist/`
- **Cloudflare Worker** (`worker/index.ts`) — a single entry point that handles `/api/chat`, `/api/bov-lead`, and `/api/newsletter` directly, and falls through to the `ASSETS` binding (the built Astro site in `dist/`) for every other request. Pipedrive access lives in `worker/pipedrive.ts`.
- Content lives as typed data files in `src/data/` (`closings.ts`, `caseStudies.ts`, `submarkets.ts`, `site.ts`, `listings.ts`, `posts.ts`) rather than a CMS, so adding a closed sale, case study, or blog post is a matter of adding an object to the relevant file.

**Why a Worker and not Pages:** the Cloudflare project connected to this repo was created as a Worker (Workers Builds), which deploys with `wrangler deploy` and requires a `main` entry script — it does not understand the Pages-specific `functions/` file-routing convention. If a Pages project is ever created instead, the three routes in `worker/` would need to move back into a `functions/api/*.ts` structure using `onRequestPost`/`onRequestOptions` exports, and `wrangler.toml` would need `pages_build_output_dir` instead of `main`/`[assets]`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Astro dev server at `localhost:4321` (page content only — `/api/*` routes are not served here) |
| `npm run build` | Build to `./dist/` |
| `npx wrangler dev` | Serve the built site **with working `/api/*` routes**, close to the real Cloudflare runtime (run `npm run build` first) |
| `npx wrangler deploy` | Manual deploy (normally handled automatically by Workers Builds on push to `main`) |

## Before Launch — Required Setup

1. **Chat widget API key.** In the Cloudflare dashboard for this Worker (`hlgfiles`) → Settings → Variables and Secrets, add an encrypted variable `ANTHROPIC_API_KEY` with a real Anthropic API key. Without it, `/api/chat` returns a friendly "not configured" error instead of crashing. For local testing, copy `.dev.vars.example` to `.dev.vars` and fill in a key, then run `npx wrangler dev`.
2. **Lead delivery (Pipedrive).** `worker/bov-lead.ts` and `worker/newsletter.ts` push submissions into Pipedrive (Person + Lead, via `worker/pipedrive.ts`) once configured. Add two Worker environment variables/secrets: `PIPEDRIVE_API_TOKEN` (Settings → Personal Preferences → API in Pipedrive) and `PIPEDRIVE_DOMAIN` (the subdomain before `.pipedrive.com`, e.g. `highlightreg`). Until both are set, submissions still validate and return success to the visitor but only log server-side — nothing is lost, it just doesn't reach the CRM yet. For local testing, add both to `.dev.vars` (never commit that file).
3. **Legal pages.** `/privacy-policy/` and `/terms/` are working first drafts reflecting this site's actual data practices (BOV form, newsletter, TCPA consent language). Have counsel review both before publishing.
4. **Testimonials.** `src/data/site.ts` — the 3 testimonials are carried over from the project brief but are not currently live anywhere on highlightreg.com (`/success-stories/` returned "No Results Found" as of 2026-08-20). Verify or replace with sourced quotes (e.g. from Google Business Profile) before publishing.
5. **Images.** No property photos, team headshots, or hero video have been migrated yet — see below.
6. **Social links.** Only Josh Kaplan's personal LinkedIn was found live on the current site. Add company Instagram/Facebook URLs to `src/data/site.ts` → `social` once available (empty strings currently hide those icons).

## Image Migration (Not Yet Done)

The current WordPress site's images live at `highlightreg.com/wp-content/uploads/...`. None have been re-downloaded into this project yet. When ready:

- Place images under `public/images/<section>/<descriptive-slug>.webp` (e.g. `public/images/closings/236-s-bonnie-brae-st.webp`)
- Convert to WebP and compress before adding
- Reference them from the relevant `src/data/*.ts` entry (most types already have an `image`/`headshot` field ready) and add descriptive `alt` text tied to property/location/keyword, not a generic filename

## Deployment

This repo is connected to the `hlgfiles` Cloudflare Worker via Workers Builds — every push to `main` triggers a build (`npm run build`) and deploy (`wrangler deploy`) automatically. `wrangler.toml` defines the entry point (`worker/index.ts`), the static assets binding (`dist/` → `env.ASSETS`), and the `nodejs_compat` compatibility flag the Anthropic SDK needs.
