# Next Phase — GSAP Visual Enhancements

State: planning only. No code written yet. Implement in order below (each builds on stable ground, none blocks another).

---

## 1. Scrub hero on scroll
**Files:** `src/lib/reveal.js`

Replace static `[data-reveal]` fade-in on hero elements with a scroll-scrubbed timeline: as user scrolls hero out of view, `.hero-bg` scales/darkens, `h1`/`h2`/lead text scale down + fade, tied to scroll position via `scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }`.

Keep initial on-load reveal (current fade+y) for first paint — scrub only takes over once user starts scrolling past hero. Gate under existing `prefers-reduced-motion no-preference` matchMedia; reduced-motion gets instant `gsap.set`, no scrub.

No new file. ~20-30 lines added to `reveal.js`.

---

## 2. Pull-out stat callouts
**Files:** `src/pages/index.astro`, `src/styles/index.scss`, `src/lib/reveal.js`

Extract 2-3 facts currently buried in paragraph text (founding year `2025`, distance `40km`, brothers count) into standalone stat blocks — large gold numerals + small cream caption underneath. Place inline within `#history` or as a small row between sections.

Markup: reuse existing `.scramble-text` + `data-scramble` pattern already wired in `reveal.js` (`initScrambleText`), just give them their own container/typography instead of inline in a `<p>`. New SCSS class `.stat-block` (or reuse `display-*` classes + `.text-primary`, likely covered by Bootstrap utilities — check before adding custom CSS per YAGNI).

No new JS logic — `initScrambleText()` already scans `[data-scramble]`, works as-is once markup exists.

---

## 3. Custom gold cursor
**Files:** new `src/lib/cursor.js`, `src/pages/index.astro` (import), `src/styles/index.scss`

Small gold ring `<div>` fixed-positioned, follows cursor via `gsap.quickTo` (same pattern as `tilt3d.js`) — x/y with slight lag (`duration: 0.15-0.2`). Scale up slightly on hover over links/buttons (`mouseenter`/`mouseleave` on `a, button`).

Desktop-only: gate behind `(pointer: fine)` media query check (skip on touch devices — no mouse to track). Respect `prefers-reduced-motion` — disable entirely if reduced motion, default cursor stays.

New file (~25 lines), mirrors `tilt3d.js` structure exactly (named fn, no class, `gsap.matchMedia`).

---

## 4. Sequential history reveal
**Files:** `src/pages/index.astro`, `src/lib/reveal.js`

`#history` section currently one `[data-reveal]` wrapping all 5 `<p>` — fades in as single block. Move `data-reveal` off the section wrapper, onto each `<p>` individually. `revealOnScroll()` already iterates `[data-reveal]` elements independently — no JS change needed, just add a small stagger via scroll-trigger `start` offset naturally handled by each paragraph's own position, OR add explicit stagger if paragraphs sit too close vertically to feel sequential (test first, only add stagger logic if flat trigger-per-element isn't enough).

Mostly a markup change. Confirm `h2[data-reveal-halo]` removal (agreed last session) doesn't leave orphaned attribute on this section's heading.

---

## 5. Ambient hero drift
**Files:** `src/styles/index.scss`

`.hero-bg` currently static until `native-parallax` scroll listener kicks in. Add a slow continuous CSS `@keyframes` drift (reuse `light-shaft` pattern already in `index.scss` — same technique, new target) — subtle `transform: scale/translate` oscillation, 20-30s duration, `ease-in-out infinite`. Wrap in `@media (prefers-reduced-motion: no-preference)` at CSS level (no JS needed, pure CSS keyframe — cheaper than a JS-driven idle loop).

No new file, ~10 lines CSS.

---

## Build order
1. Sequential history reveal (markup-only, lowest risk, confirms `data-reveal` pattern still solid post-halo-removal)
2. Ambient hero drift (pure CSS, isolated, no JS dependency)
3. Pull-out stat callouts (markup + reuses existing scramble JS)
4. Scrub hero on scroll (JS logic, touches `reveal.js` core)
5. Custom gold cursor (new file, most novel — build last so earlier work isn't blocked if this needs iteration)

## Out of scope (confirmed declined)
SplitText, DrawSVGPlugin, MorphSVGPlugin — not implemented this phase or any future one, per prior decision.

## Post-implementation
Re-run Lighthouse — scrub timelines + continuous CSS keyframe are the two items most likely to touch CLS/main-thread cost. Verify `prefers-reduced-motion` still degrades cleanly across all 5 before calling phase done.
