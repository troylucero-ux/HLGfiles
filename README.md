# highlightreg.com

Custom-coded, SEO-first rebuild of the Highlight Multifamily Group website. Static Astro site served by a Cloudflare Worker (via Cloudflare's Workers Builds Git integration — not Pages), with a Claude-powered chat widget and Pipedrive-backed lead capture running as routes in that same Worker.

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
2. **Lead delivery (Pipedrive) — done.** `worker/bov-lead.ts` and `worker/newsletter.ts` push submissions into Pipedrive (Person + Lead, via `worker/pipedrive.ts`), which now looks up an existing Person by email before creating one, so repeat submissions from the same visitor update one CRM record instead of creating duplicates. `PIPEDRIVE_API_TOKEN` and `PIPEDRIVE_DOMAIN` are set as encrypted variables on the Worker and confirmed working against a real live-site test submission. For local testing, add both to `.dev.vars` (never commit that file).
3. **Legal pages — accepted as-is.** `/privacy-policy/` and `/terms/` reflect this site's actual data practices (BOV form, newsletter, TCPA consent language). Troy has confirmed these are fine to keep as parity with the old site — no additional counsel review requested.
4. **Testimonials — done.** `src/data/site.ts` → `testimonials` now holds 4 real client quotes provided directly by Troy Lucero (`verified: true`), replacing the earlier placeholder copy from the project brief. Two are linked to their case study (`caseStudySlug`); the other two aren't tied to a specific transaction.
5. **Images — done.** Team headshots, photos for all 61 closed sales, photos for both active listings (333 N Union Ave, 3815 Don Tomaso Dr), and the Land for Development hero photo are in place under `public/images/`, wired into `src/data/*.ts` (or hardcoded for the land page) via `image`/`images`/`headshot` fields, and rendered with descriptive alt text. All are WebP and compressed for performance. The land photo is a licensed/stock parcel shot, not a photo of a specific closed site — Troy has reviewed and approved it as final.
6. **Social links — done.** `src/data/site.ts` → `team` now has per-person LinkedIn, Instagram, and Facebook URLs for both Josh Kaplan and Troy Lucero, rendered as icon links on the About page bio cards. The site-wide header/footer `social` block still only has Josh's LinkedIn — intentionally left alone since it can only hold one account per platform and now represents two people.
7. **URL redirects — done.** `worker/redirects.ts` holds a 301 redirect map from the old WordPress site's URL structure to this site's (`/project/*` → `/case-studies/*-{submarket}-apartments/`, `/success-stories/` → `/testimonials/`, `/josh-kaplan/`/`/troy-lucero/` → `/about/`, `/privacy-policy-2/` → `/privacy-policy/`), applied in `worker/index.ts` before falling through to `ASSETS`. Normalizes trailing-slash variants on the incoming path. Tested against a live `wrangler dev` instance — all 18 mappings return the correct 301 `Location`.
8. **SEO structured data & social previews — done.** Case study and submarket pages now render a visible breadcrumb trail (`src/components/Breadcrumbs.astro`) plus matching `BreadcrumbList` JSON-LD. `/faqs/` has `FAQPage` schema. Case study, submarket, and Land for Development pages each pass their own photo as `og:image`/`twitter:image` (via `BaseLayout`'s `image` prop) instead of falling back to the sitewide default.

## Images

Photos live under `public/images/<section>/...` and are referenced by path from `src/data/*.ts`:
- `public/images/listings/<closing-or-case-study-slug>/` — property photos (some entries have 2; the card/thumbnail views show `images[0]`, case study detail pages show all of them)
- `public/images/bio/` — team headshots, referenced from `team`/`supportTeam` in `src/data/site.ts`
- `public/images/land/` — Land for Development page hero (stock parcel photo, approved as final)

When adding more: convert to WebP and compress before adding, and give every file a descriptive, keyword-tied name (e.g. `236-s-bonnie-brae-st-westlake-apartment-building.webp`, not `IMG_4821.jpg`) — alt text is already wired to pull from the property/team data, so a new `image`/`images` value just needs to be added to the matching entry.

## Deployment

This repo is connected to the `hlgfiles` Cloudflare Worker via Workers Builds — every push to `main` triggers a build (`npm run build`) and deploy (`wrangler deploy`) automatically. `wrangler.toml` defines the entry point (`worker/index.ts`), the static assets binding (`dist/` → `env.ASSETS`), and the `nodejs_compat` compatibility flag the Anthropic SDK needs.
