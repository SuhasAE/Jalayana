# Jalayana Engineering & Services Limited — Website

A Next.js 16 (App Router) marketing site with Tailwind v4 and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Editing content without touching component code

Almost everything text-based — services, projects, stats, FAQs, job openings,
nav links, contact info — lives in one file:

```
lib/site-config.ts
```

Open that file and edit the arrays/objects directly. You do not need to touch
any `.tsx` component file to change site content. Example: to change a
service description, find it in the `services` array and edit the `summary`
field.

### Swapping in real fonts

This build ships with system-font fallbacks because the build sandbox could
not reach Google Fonts. Once you deploy (Vercel, Firebase, Cloud Run — all
have normal internet access), swap back to the intended fonts:

1. In `app/layout.tsx`, re-add:
   ```ts
   import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
   ```
   and the three font loader calls (Space Grotesk 500/600/700, Inter
   400/500/600, JetBrains Mono 400/500 — each with a `variable` matching
   the CSS var names already referenced in globals.css).
2. In `app/globals.css`, change the `--font-display`, `--font-sans`, and
   `--font-mono` values back to `var(--font-space-grotesk)`,
   `var(--font-inter)`, and `var(--font-jetbrains)`.

### Replacing placeholder images

Hero and project card backgrounds currently use gradient/grid placeholders
or a stock Unsplash image. Replace these once real photography is available:

- `components/home/Hero.tsx` — hero background image URL
- `components/home/FeaturedProjects.tsx`, `components/projects/ProjectsFilterGrid.tsx`,
  `components/gallery/GalleryGrid.tsx` — swap the gradient divs for real
  `<Image>` components once you have project/facility photos.

## Moving to a real CMS later (recommended)

`lib/site-config.ts` is intentionally shaped like CMS content — this makes
migrating to Sanity (or another headless CMS) straightforward later: each
array becomes a schema/document type, and you replace the static import with
a fetch call. No layout or component code changes needed.

## Deploying

### Option A — Firebase Hosting (frontend) + Cloud Functions (if SSR needed)
```bash
npm run build
firebase init hosting
firebase deploy
```

### Option B — Google Cloud Run (recommended for full Next.js SSR)
```bash
gcloud run deploy jalayana-site --source . --region asia-south1 --allow-unauthenticated
```

### Option C — Vercel (simplest, first-party Next.js support)
```bash
npx vercel
```

## Project structure

```
app/                  Routes (one folder per page)
components/
  layout/              Navbar, Footer, PageLoader, FloatingButtons
  home/                Homepage-only sections
  shared/              Reused across pages (ContactSection, PageHero, FAQAccordion)
  ui/                  Small primitives (Reveal, Counter, SectionHeading)
lib/
  site-config.ts       ALL EDITABLE CONTENT LIVES HERE
  utils.ts             cn() className helper
```
