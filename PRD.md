# HerbaScan Static Promotional Page — PRD

This site is a **single-page static promotional landing page** that drives visitors to download the HerbaScan mobile app from the Google Play Store. Deploy target: **Vercel**.

## Goal and scope

- **Goal:** Conversion funnel to app download; no implied in-browser functionality (no scan, library, or result flows on the web).
- **Out of scope:** Web-based scanning, plant library, plant detail, or result pages.

## Architecture (implemented)

- **Single route:** Only `/` for content; `*` → NotFound.
- **Nav:** Home, Features, About (anchor links); primary CTA = "Get it on Google Play" badge → `VITE_GOOGLE_PLAY_URL`.
- **Hero:** Two-column layout (stacked on mobile). Left: headline (white/light), subtitle, Google Play badge. Right: smartphone mockup with app preview. Dark overlay for contrast.
- **Features:** Three static, non-interactive feature blocks below hero (no button-like hover/shadows).
- **About:** Inlined on the same page (Mission, Technology, For Everyone). Technology stats integrated inline. Important Disclaimer anchored at bottom.
- **Config:** Google Play URL from `src/lib/config.ts` (reads `VITE_GOOGLE_PLAY_URL`). See `.env.example`.

## Acceptance criteria

- No nav or CTA suggests scanning/browsing on the website.
- All primary CTAs are the Google Play badge linking to the configured store URL.
- Hero: two-column, high-contrast headline, visible app mockup.
- Feature cards: flat, informational only.
- Single scrolling page: Hero → Features → About → Disclaimer.
- Disclaimer remains prominent at bottom.
- Build: static bundle (`npm run build`), Vercel-ready.

## Optional follow-ups

- App Store badge when iOS listing exists.
- Analytics for CTA clicks.
- Replace phone mockup image with real app screenshot when available.
