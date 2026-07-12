# Next Phase — GSAP Visual Enhancements
## 1. Scrub hero on scroll
## 2. Pull-out stat callouts
## 3. Custom gold cursor
## 4. Sequential history reveal
## 5. Ambient hero drift

## Build order
1. Sequential history reveal (markup-only, lowest risk, confirms `data-reveal` pattern still solid post-halo-removal)
2. Ambient hero drift (pure CSS, isolated, no JS dependency)
3. Pull-out stat callouts (markup + reuses existing scramble JS)
4. Scrub hero on scroll (JS logic, touches `reveal.js` core)
5. Custom gold cursor (new file, most novel — build last so earlier work isn't blocked if this needs iteration)