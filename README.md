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
5. **Images — partially done.** Team headshots (all 5), 16 property photos (closings + matching case studies), and a placeholder land-development hero image are in place under `public/images/`, wired into `src/data/*.ts` via `image`/`images`/`headshot` fields, and rendered with descriptive alt text. Still outstanding: photos for the other 45 closed sales, active listings (none exist yet), and a real (non-stock) land parcel photo. Formats are as-received (JPG/PNG) — not yet converted to WebP/compressed for performance.
6. **Social links.** Only Josh Kaplan's personal LinkedIn was found live on the current site. Add company Instagram/Facebook URLs to `src/data/site.ts` → `social` once available (empty strings currently hide those icons).

## Images

Photos live under `public/images/<section>/...` and are referenced by path from `src/data/*.ts`:
- `public/images/listings/<closing-or-case-study-slug>/` — property photos (some entries have 2; the card/thumbnail views show `images[0]`, case study detail pages show all of them)
- `public/images/bio/` — team headshots, referenced from `team`/`supportTeam` in `src/data/site.ts`
- `public/images/land/` — Land for Development page hero (currently a generic placeholder, not a real parcel photo)

When adding more: convert to WebP and compress before adding, and give every file a descriptive, keyword-tied name (e.g. `236-s-bonnie-brae-st-westlake-apartment-building.webp`, not `IMG_4821.jpg`) — alt text is already wired to pull from the property/team data, so a new `image`/`images` value just needs to be added to the matching entry.

## Deployment

This repo is connected to the `hlgfiles` Cloudflare Worker via Workers Builds — every push to `main` triggers a build (`npm run build`) and deploy (`wrangler deploy`) automatically. `wrangler.toml` defines the entry point (`worker/index.ts`), the static assets binding (`dist/` → `env.ASSETS`), and the `nodejs_compat` compatibility flag the Anthropic SDK needs.
