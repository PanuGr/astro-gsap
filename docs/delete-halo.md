# Delete halo — 3 spots:

1. src/styles/index.scss — remove whole block:
scss// Surfaces: Section Header Halos

```scss
h2[data-reveal-halo] {
  position: relative;
  display: inline-block;
  --halo-opacity: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 150%;
    background: radial-gradient(circle, rgba($primary, 0.08) 0%, transparent 65%);
    z-index: -1;
    opacity: var(--halo-opacity);
    pointer-events: none;
    border-radius: 100%;
  }
}
```
2. src/lib/reveal.js — remove initSurfaces() fn + its call at bottom. import { gsap } / ScrollTrigger / ScrambleTextPlugin stay (still used elsewhere).
3. src/pages/index.astro — strip data-reveal-halo attr off the 3 h2s ("Our History", "Life at the Monastery", "Support the Brotherhood").