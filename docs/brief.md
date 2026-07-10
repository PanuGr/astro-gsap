# Project Brief & State Transfer: Kirikla Monastery (Hackathon Landing Page)

## 1. Current Status

| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Build Phase 1 — Astro components + SCSS + GSAP wired, build passes |
| **Current Project Mode** | Build |
| **Last Active Model** | Claude (this session) |

---

## 2. Immutable Decisions Made

- **Target Audience:** Hackathon judges + real-world monastery visitors/donors
- **Primary Goal:** Support/Donate (CTA)
- **Secondary Goals:** Visit (by arrangement), Contact
- **Core Visual Style:** navy (#0F1B2E) + gold (#C9A227) + cream (#F4EDE0), Cormorant Garamond serif + Inter body
- **Bootstrap mapping:** gold → `$primary`, navy-mid → `$secondary`, deepest → `$dark`/`$body-bg` override, teal → `$link-color`. No custom SCSS tokens — everything routed through Bootstrap theme vars.
- **Motion:** single GSAP file (`src/scripts/reveal.js`), `[data-reveal]` attr-based scroll fades + hero parallax via `[data-parallax]`. No per-component JS.
- **Scope:** Single landing page only, one `index.astro`, minimal componentization (only `LifeCard.astro` extracted — the one true repeat)
- **Imagery:** Unsplash placeholders still in use (hero, life, donate) — swap for real photos when Panu provides them
- **Stack:** Astro, GSAP, Bootstrap (npm + SCSS), Sass, Lucide (`@lucide/astro`) — no Facebook icon in current lucide version, used `Link` icon as stand-in for footer social link

---

## 3. Current File Registry & Manifest

- [x] `docs/copy.md`, `docs/style.md`, `docs/plan.md` — Approved
- [x] Mockup (`prototype.jpg` + `gemini.html`) — Approved by Panu
- [x] `src/styles/_variables.scss` — Bootstrap theme color/font overrides, no custom tokens
- [x] `src/styles/_base.scss` — html-selector base styles (@view-transition, h1 clamp, etc.)
- [x] `src/styles/_animations.scss` — `.btn` transitions + `[data-reveal]` will-change hook
- [x] `src/styles/index.scss` — import entry (variables → bootstrap → base → animations) + non-utility classes (`.hero`, `.divider`, `.max-w-prose`, `.max-w-content`)
- [x] `src/lib/gsap.js` — GSAP + ScrollTrigger only (no unused plugins)
- [x] `src/scripts/reveal.js` — single scroll-reveal + parallax script for whole page
- [x] `src/layouts/Layout.astro` — minimal shell
- [x] `src/components/LifeCard.astro` — Prayer/Work/Rest card, icon via slot
- [x] `src/pages/index.astro` — full page, real copy from `copy.md` (not mockup's trimmed text), real contact/footer details, mailto CTAs
- [x] `npm install` + `astro build` — passes clean (only Dart Sass deprecation noise from Bootstrap internals, harmless)
- [ ] Real photos — still Unsplash placeholders, waiting on Panu
- [ ] Webflow Cloud deploy config — not yet set up
- [ ] Facebook link URL — still `href="#"` placeholder

---

## 4. Immediate Next Steps for the Incoming Model

1. Swap Unsplash placeholder images for real Kirikla photos when Panu uploads them
2. Get real Facebook URL, wire into footer link
3. Visual QA pass against `prototype.jpg` — confirm spacing/section order matches
4. Set up Webflow Cloud deploy config
5. Optional: verify GSAP reveal timing feels right in browser (not just build-checked — needs live visual test)