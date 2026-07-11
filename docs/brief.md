# Project Brief & State Transfer: Kirikla Monastery (Hackathon Landing Page)

## 1. Current Status

| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Build Phase 3 — 3D, ScrambleText, Signature Candle Moment |
| **Current Project Mode** | Build |
| **Last Active Model** | DeepSeek v4 Flash |

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

- [x] `docs/copy.md`, `docs/style.md`, `docs/plan.md`, `docs/visuals.md` — Visuals plan: Surfaces, Interactions, Parallax, ScrambleText, 3D tilt and scroll-rotateY completed. Morphing shapes attempted but discarded (CSS clip-path approach not satisfactory). Signature candle moment completed.
- [x] Mockup (`prototype.jpg` + `gemini.html`) — Approved by Panu
- [x] `src/styles/_variables.scss` — Bootstrap theme color/font overrides, no custom tokens
- [x] `src/styles/_base.scss` — html-selector base styles (@view-transition, h1 clamp, etc.)
- [x] `src/styles/_animations.scss` — `.btn` transitions, `[data-reveal]`, button halo traces, card lifts, `transform-style: preserve-3d` on cards, and candle pulse keyframes
- [x] `src/styles/index.scss` — import entry + non-utility classes. Includes `.hero-bg`, `.hero-arch`, `perspective` on hero, `.perspective-parent` for 3D tilt, `.candle-game`/`.cs-*` candle scene styling
- [x] `src/lib/gsap.js` — GSAP + ScrollTrigger + ScrambleTextPlugin registered
- [x] `src/lib/reveal.js` — Scroll-reveal animations, halos, `[data-scramble]` text scrambling
- [x] `src/lib/parallax.js` — Custom `requestAnimationFrame` loop handling native, buttery 3-layer parallax and drifting images
- [x] `src/lib/tilt3d.js` — 3D card tilt on mouse-follow (`.stained-glass`, `.gold-glass`) via GSAP `quickTo`; hero `.hero-arch` subtle `rotateY` on scroll scrub
- [x] `src/lib/candle.js` — Signature moment: Draggable + InertiaPlugin candle drag, drop-detection via hidden `#cs-target`, snap + settle wobble, flame ignition with Physics2DPlugin flicker, hidden donate button revealed on completion
- [x] `src/layouts/Layout.astro` — minimal shell
- [x] `src/components/LifeCard.astro` — Prayer/Work/Rest card (inherits 3D tilt via `.stained-glass`)
- [x] `src/pages/index.astro` — full page. Donate section now includes interactive candle game (candle + stand) and hidden donate button revealed only after candle is lit. Stat numbers wrapped in `[data-scramble]` spans. LifeCards row and donate column get `.perspective-parent` for 3D tilt.
- [x] `npm install` + `astro build` — passes clean

---