# Project Brief & State Transfer: Kirikla Monastery (Hackathon Landing Page)

## 1. Current Status

| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Build Phase 2 — Visual Enhancements (Surfaces, Interactions, Native Parallax) |
| **Current Project Mode** | Build |
| **Last Active Model** | Antigravity (this session) |

---

## 2. Immutable Decisions Made

- **Target Audience:** Hackathon judges + real-world monastery visitors/donors
- **Primary Goal:** Support/Donate (CTA)
- **Secondary Goals:** Visit (by arrangement), Contact
- **Core Visual Style:** navy (#0F1B2E) + gold (#C9A227) + cream (#F4EDE0), Cormorant Garamond serif + Inter body
- **Bootstrap mapping:** gold → `$primary`, navy-mid → `$secondary`, deepest → `$dark`/`$body-bg` override, teal → `$link-color`. No custom SCSS tokens — everything routed through Bootstrap theme vars.
- **Motion & Parallax:** Swapped from GSAP ScrollSmoother (laggy) to a highly-performant native JS + CSS architecture (`parallax.js`). Uses a fixed hero reveal pattern and `translate3d` GPU-accelerated drifting.
- **Scope:** Single landing page only, one `index.astro`, minimal componentization (only `LifeCard.astro` extracted — the one true repeat)
- **Imagery:** Unsplash placeholders still in use (hero, life, donate) — swap for real photos when Panu provides them
- **Stack:** Astro, GSAP, Bootstrap (npm + SCSS), Sass, Lucide (`@lucide/astro`) — no Facebook icon in current lucide version, used `Link` icon as stand-in for footer social link

---

## 3. Current File Registry & Manifest

- [x] `docs/copy.md`, `docs/style.md`, `docs/plan.md`, `docs/visuals.md` — Visuals plan in progress (Surfaces, Interactions, Parallax completed)
- [x] Mockup (`prototype.jpg` + `gemini.html`) — Approved by Panu
- [x] `src/styles/_variables.scss` — Bootstrap theme color/font overrides, no custom tokens
- [x] `src/styles/_base.scss` — html-selector base styles (@view-transition, h1 clamp, etc.)
- [x] `src/styles/_animations.scss` — `.btn` transitions, `[data-reveal]`, button halo traces, card lifts, and candle pulse keyframes
- [x] `src/styles/index.scss` — import entry + non-utility classes. Includes `.hero-bg`, `.hero-arch`, and pure CSS `@keyframes` light-shaft for zero-JS lag.
- [x] `src/lib/gsap.js` — GSAP + ScrollTrigger only (no unused plugins)
- [x] `src/lib/reveal.js` — Scroll-reveal animations + halos
- [x] `src/lib/parallax.js` — Custom `requestAnimationFrame` loop handling native, buttery 3-layer parallax and drifting images
- [x] `src/layouts/Layout.astro` — minimal shell, now supports `fixed-background` slot for the curtain reveal pattern
- [x] `src/components/LifeCard.astro` — Prayer/Work/Rest card
- [x] `src/pages/index.astro` — full page, structural 3-layer hero depth, and native-parallax tracking
- [x] `npm install` + `astro build` — passes clean
---

## 4. Immediate Next Steps for the Incoming Model

1. Continue with `docs/visuals.md` plan: implement the **Morphing shapes** and **3D** section enhancements.