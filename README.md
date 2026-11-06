# Mariam Ali — Product Designer Portfolio

Bilingual (English / Arabic RTL) portfolio with light and dark modes, built with Next.js and deployed on Vercel.

## Edit content

| What | File |
| --- | --- |
| Projects (order, tags, text, covers) | `src/content/projects.ts` |
| All other text, EN + AR | `src/content/i18n.ts` |
| Links (WhatsApp, email, LinkedIn, Behance, CV) | `links` in `src/content/i18n.ts` |
| Colours, spacing, type | tokens at the top of `src/app/globals.css` |
| Cover images | `public/covers/` (16:10, WebP, ~1600px wide) |
| CV, portrait, videos | `public/media/` |

### Add a project
1. Export the cover at **1600×1000 (16:10)** as WebP into `public/covers/`.
2. Copy one entry in `src/content/projects.ts`, change the `slug`, tags, `cover` path and both `en` / `ar` texts.
3. Use `fit: 'contain'` with a `bg` colour to show the whole image instead of cropping it.
4. Add `href: 'https://…'` to make the card open a live site.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Routes
- `/` → redirects to `/en` or `/ar` by browser language
- `/en`, `/ar` → the home page in each language

## Deploy
Push to `main` — Vercel builds and deploys automatically. Set `NEXT_PUBLIC_SITE_URL` in Vercel to your final domain so link previews use it.
