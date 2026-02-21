# S4M73l09 Infra Portfolio (Astro)

This repository has been migrated to **Astro**.

Important:
- `README.md` and `README.en.md` are **not** used as render data sources anymore.
- Website content now lives in `src/content/*`, while UI copy/config lives in `src/domain/*`.

## Stack

- Astro (static site)
- Content Collections (`projects`, `labs`)
- GitHub Pages deployment via GitHub Actions

## Current structure

- `src/pages/`
  - Main ES/EN routes
  - Dynamic list/detail routes for `projects` and `labs`
- `src/content/`
  - `projects/*.md` (file-per-project, ES/EN)
  - `labs/*.md` (file-per-lab, ES/EN)
  - `config.ts` (schema)
- `src/domain/portfolio/`
  - Types, UI copy, and content repository layer
- `src/components/`
  - Visual components (`ProjectGrid`, `ProfileGate`, `FlowBackground`, etc.)
- `src/styles/global.css`
  - Global styles, entry animations, and theme
- `public/`
  - Public assets (`favicon.svg`, `og-image.svg`) used for SEO/social cards
- `.github/workflows/deploy.yml`
  - Build + deploy pipeline for GitHub Pages

## Local development

Requirements:
- Node.js 20+

Commands:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## How to add content

### New project
1. Create `src/content/projects/<name>.es.md`
2. Create `src/content/projects/<name>.en.md`
3. Use the same `routeSlug` in both files

### New lab
1. Create `src/content/labs/<name>.es.md`
2. Create `src/content/labs/<name>.en.md`
3. Use the same `routeSlug` in both files
4. Set `provider`:
   - `gcs` for Google Cloud
   - `az` for Azure

Key frontmatter fields:
- `lang`: `es` or `en`
- `title`
- `routeSlug`
- `provider` (labs only): `gcs` | `az`
- `challenge`
- `solution`
- `impact`
- `stack` (array)
- `repo` (URL)
- `featured` (boolean)
- `order` (number)

## UI/Animation note

The home includes:
- Console-like profile entry gate
- Synced enter transition
- PS-style flowing background

Current navigation:
- Left floating button: back to home
- Right floating button: switch between `Projects` and `Lab`
- Top-right floating button: ES/EN language switch
- Lab page grouped by provider (`GCS` / `AZ`) with side selector
- SEO/Open Graph/Twitter metadata centralized in `MainLayout`
- `sitemap.xml` and `robots.txt` generated from `src/pages/`
- Custom themed `404.astro` page

Managed in:
- `src/components/ProfileGate.astro`
- `src/components/FlowBackground.astro`
- `src/components/LabProviderAccordion.astro`
- `src/styles/global.css`

## Hardening applied

- Technical SEO:
  - `src/pages/sitemap.xml.ts` generates `sitemap.xml` with static and dynamic routes.
  - `src/pages/robots.txt.ts` generates `robots.txt` and points to the sitemap.
- Error/UX:
  - `src/pages/404.astro` defines a custom themed 404 page.
- Initial performance:
  - Removed Google Fonts `@import` from CSS.
  - Fonts now load in `MainLayout` with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`.
