# Project Brief & State Transfer: Kirikla Monastery (Hackathon Landing Page)

## 1. Current Status

| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Phase 3 — Design System (style.md written) |
| **Current Project Mode** | Design → about to move to Build |
| **Last Active Model** | Claude (this session) |

---

## 2. Immutable Decisions Made

- **Target Audience:** Hackathon judges + real-world monastery visitors/donors
- **Primary Goal:** Support/Donate (CTA)
- **Secondary Goals:** Visit (by arrangement), Contact
- **Core Visual Style:** Vellum-adapted — navy (#0F1B2E) + warm gold (#C9A227) + cream (#F4EDE0), Cormorant Garamond serif + Source Sans 3 body, minimal radius, gold-dim hairline dividers
- **Motion:** GSAP scroll-reveals, slow reverent pacing (600–900ms, power2.out), subtle hero parallax, no bounce
- **Scope:** Single landing page only (not full multi-page site — real source copy covers 7 pages, condensed to 1)
- **Imagery:** Real photos from user, no stock — authenticity prioritized over polish
- **Stack:** Astro, GSAP, Webflow Cloud deploy, Bootstrap utilities, Lucide icons, SCSS

---

## 3. Current File Registry & Manifest

- [x] `docs/copy.md` — Approved (condensed 7-section copy)
- [x] `docs/style.md` — Approved (Vellum-adapted design tokens)
- [x] `docs/plan.md` — Approved (section order, GSAP plan, scope boundary)
- [ ] `src/styles/_variables.scss` — Missing (Bootstrap SCSS overrides not yet written)
- [ ] Astro components — Missing (no build started)
- [ ] GSAP setup — Missing
- [ ] Photos — Waiting on user upload

---

## 4. Immediate Next Steps for the Incoming Model

1. Confirm photos ready or build with placeholder blocks first
2. Scaffold Astro project structure (if not already initialized)
3. Write `_variables.scss` from style.md tokens
4. Build sections in order per plan.md, one component at a time
5. Wire GSAP ScrollTrigger per motion plan
6. Set up Webflow Cloud deploy config last
