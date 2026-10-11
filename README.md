# Jalayana Engineering & Services Private Limited (JESPL) — Website

Next.js (App Router) + Tailwind CSS v4 + Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where the content lives

- `lib/site-config.ts` — company name, contacts, registrations (CIN / GSTIN / PAN / UDYAM), directors, the 14 service divisions, industries, execution stages, documentation list, mission, organisation, FAQs. Edit here first.
- `public/images/logo.png` — JESPL logo (transparent PNG extracted from the company letterhead).
- `public/docs/JESPL-Company-Profile.docx` — downloadable company profile (linked from the footer and Registrations page).
- `app/globals.css` — brand colours (indigo / blue from the letterhead, orange from the logo).

## Notes

- The contact form opens the visitor's email app addressed to the company mailbox (no backend is configured). Replace `handleSubmit` in `components/shared/ContactSection.tsx` with an API route or form service when ready.
- Gallery, news and social links were removed because no real photos, news or social accounts were provided. Add them back when available.
