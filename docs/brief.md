# Project Brief & State Transfer: Kirikla Monastery (Hackathon Landing Page)

## 1. Current Status

| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Phase 3 — Post-Build Verification (Code Simplification, Code Review, Performance, Security) |
| **Current Project Mode** | Review |
| **Last Active Model** | DeepSeek v4 Flash |

---

## 2. Immutable Decisions Made

*(unchanged from prior phases)*
- **Target Audience:** Hackathon judges + real-world monastery visitors/donors
- **Primary Goal:** Support/Donate (CTA)
- **Secondary Goals:** Visit (by arrangement), Contact
- **Core Visual Style:** navy (#0F1B2E) + gold (#C9A227) + cream (#F4EDE0), Cormorant Garamond serif + Inter body
- **Bootstrap mapping:** gold → `$primary`, navy-mid → `$secondary`, deepest → `$dark`/`$body-bg` override, teal → `$link-color`. No custom SCSS tokens — everything routed through Bootstrap theme vars.
- **Motion & Parallax:** Custom RAF parallax (`parallax.js`), GSAP reveals (`reveal.js`), 3D tilt (`tilt3d.js`), candle drag (`candle.js`)
- **Scope:** Single landing page only, one `index.astro`, minimal componentization (only `LifeCard.astro` extracted)
- **Imagery:** Unsplash placeholders still in use (hero, life, donate) — swap for real photos when Panu provides them
- **Stack:** Astro 6, GSAP 3.15, Bootstrap 5.3 (npm + SCSS), Sass, Lucide (`@lucide/astro`)
- **CTA:** Donate button is always visible (no longer gated behind candle game). Candle game is decorative delight only.

---

## 3. Current File Registry & Manifest

- [x] `src/pages/index.astro` — Main page. Back-to-top button added with Lucide ArrowUp icon. Unused `Mail` import removed. Both below-the-fold images now have `loading="lazy" decoding="async"`. Candle game has `aria-hidden="true"` and donate button is always visible.
- [x] `src/lib/reveal.js` — Added `initBackToTop()` (GSAP ScrollTrigger for animated reveal, gsap.set for reduced-motion). Removed unused `CSSRulePlugin` import/registration.
- [x] `src/lib/parallax.js` — Simplified `calculateCenters()` using `getBoundingClientRect()` instead of manual `offsetParent` traversal.
- [x] `src/lib/tilt3d.js` — Removed unused `ScrollTrigger` import/registration.
- [x] `src/lib/candle.js` — Candle game no longer gates the donate button. `aria-hidden="true"` added to game container.
- [x] `src/styles/index.scss` — Added `.back-to-top` styles (fixed position, 44x44px, opacity/visibility initial hidden). Candle widths updated: `.cs-candle` 24px→44px, `.cs-holder` 30px→50px, `.cs-target` 24px→44px.
- [x] `src/styles/_base.scss` — Body font family set to `Verdana` (note: missing `sans-serif` fallback).

---

## 4. Changes Made This Phase

### UX Fixes
- **Back-to-top button** — Fixed bottom-right, 44x44px, gold primary, appears on scroll past 300px. GSAP fade-in with ScrollTrigger. Reduced-motion uses instant `gsap.set`.
- **Candle drag target** — `.cs-candle` widened from 24px→44px to meet WCAG 2.5.5 (44×44px minimum tap target). Holder and target proportionally widened.
- **Candle game accessibility** — Game has `aria-hidden="true"`. Donate button is always visible (no longer gated).

### Code Simplification
- Removed unused `Mail` import from index.astro
- Removed unused `CSSRulePlugin` from reveal.js
- Removed unused `ScrollTrigger` from tilt3d.js
- Simplified `calculateCenters()` in parallax.js with `getBoundingClientRect()`

### Performance
- Added `loading="lazy" decoding="async"` to both below-the-fold images
- PurgeCSS-safe back-to-top (uses inline styles, no `.visible` class that could be stripped)

### Security
- Clean audit: no `innerHTML`, `eval`, inline handlers, or third-party CDN scripts.
- Only external resources: Unsplash images (read-only), Facebook link (HTTPS).

---
