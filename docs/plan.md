# Kirikla Monastery — Plan

## Context
- Astro + Webflow Cloud hackathon. Single landing page (no multi-page site — full site copy exists but out of scope).
- Stack: Astro, GSAP, Webflow Cloud, Bootstrap, Lucide icons.

## Primary Goal
Support/Donate. Secondary: Visit (by arrangement), Contact.

## Page Sections (single scroll, in order)
1. **Hero** — name, subtitle, tagline, 2 CTAs (Support / Visit)
2. **Intro** — founding, brotherhood, welcome line
3. **History** — condensed founding story (Petseri → Bishop Damaskinos → Kirikla acquired → brotherhood grows)
4. **Life at the Monastery** — prayer / work / rest, coenobitic structure
5. **Visiting** — informal, by-arrangement, email CTA
6. **Donate** — primary CTA section, EE bank details + US non-profit option
7. **Contact/Footer** — address, email, abbot contact, languages, Facebook

## User Journey
Hero (hook: only Orthodox monastery in Estonia) → Intro (who they are) → History (why it matters, real struggle) → Life (what monastic life means, sacred not sales-y) → Visiting (soft CTA) → Donate (hard CTA, emotional peak) → Contact (close)

## GSAP Motion Plan
- Scroll-triggered fade+y-reveal per section, slow pacing (600–900ms, power2.out)
- Subtle parallax on hero image
- No bounce, no fast/playful easing — reverent pacing throughout

## Out of Scope (exists in full copy-en.md, not built here)
- /history, /life, /calendar, /crafts, /gallery, /blog, /contact as separate routes
- Services calendar CMS
- Prayer request form
- Photo gallery grid
- Blog index

## Assets Needed
- Real monastery photos (user has, quality TBD — no stock, authenticity over polish)
- Facebook link URL (placeholder for now)
