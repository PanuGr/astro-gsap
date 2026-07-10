# Kirikla Monastery — Design System

Base: Vellum template (design-templates/html-templates.json), adapted for real content + heavy GSAP.

## Mood
Scholarly, sacred, quiet-intellectual, bold in execution — not decoration.
Byzantine/Athonite roots expressed through restraint: navy depth, gold as accent (not gilding), serif as voice.

## Colors

```scss
$navy-deep:    #0F1B2E;  // primary bg — near-black-blue, icon-ground color
$navy-mid:     #1A2B45;  // card/section bg, one step up
$cream:        #F4EDE0;  // primary text on dark, warm parchment
$gold:         #C9A227;  // accent — CTAs, dividers, small emphasis only
$gold-dim:     #8A7020;  // muted gold, borders, secondary accents
$teal-dusty:   #4A6B6B;  // secondary accent, links, quiet highlight
$ink:          #08111F;  // deepest shadow / footer bg
```

Rule: gold used sparingly (CTA, rule lines, small icons) — never large fields. Navy carries the weight.

## Typography

- **Display/Headings:** Cormorant Garamond (serif, warm, classical) — weights 500/600
- **Body:** Source Sans 3 or Inter — clean, readable at length (this page has real theological copy, not marketing fluff)
- **Scale:** Hero h1 large (clamp 2.5rem–5rem), generous line-height on body (1.7+) — content is contemplative, give it room

## Radius & Borders
- Minimal radius (2–4px) — nothing rounded/playful, this isn't a SaaS product
- Thin gold-dim hairline rules (1px) as section dividers — echoes iconostasis screens

## Motion (GSAP)
- Scroll-triggered reveals: fade + slight y-translate, slow (600–900ms), ease "power2.out" — reverence not bounce
- Parallax on hero image (subtle, 10–20% shift) — depth without distraction
- Section pacing: generous scroll distance between reveals, let content breathe like liturgy — no rapid-fire animation

## Imagery
- Real monastery photos (user has, may not be polished) — grade toward warm/desaturated to unify tone if quality varies
- No stock — authenticity matters more than polish here

## Anti-patterns
- No playful/bouncy easing
- No bright saturated colors outside gold accent
- No dense multi-column marketing layout — single column, generous vertical rhythm
