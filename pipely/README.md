# Pipely — Landing Page

High-conversion landing page for **Pipely**, a LinkedIn follow-up tracker for freelancers.

## Design
- **Style:** Aurora UI + dark glassmorphism + kinetic typography (deep indigo/violet, animated mesh gradients).
- **Type:** Plus Jakarta Sans.
- **Motion:** staggered scroll reveals, animated mesh background, mouse parallax on the hero, count-up stats, hover micro-interactions, animated FAQ accordion and pricing toggle — all gated behind `prefers-reduced-motion`.

## Run
Just open `index.html` in a browser. No server or build step required.

## Editing styles
Tailwind is precompiled to `dist.css` (no CDN, production-ready). If you change Tailwind
classes in `index.html`, rebuild the CSS:

```bash
npm install            # first time only
npx tailwindcss -i src.css -o dist.css --minify
```

## Files
- `index.html` — the page (markup, custom CSS, vanilla-JS interactions)
- `dist.css` — compiled Tailwind utilities (linked by the page)
- `tailwind.config.js`, `src.css` — Tailwind build inputs
