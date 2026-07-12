---
name: website-build
description: Use this skill for any task that involves building a client website.
---

<context-preservation>

## State Management & Model Handoff Protocol
Because different models execute different phases of this build, you MUST maintain a state-tracking file named `docs/brief.md` in the docs folder (`/docs/`). 
- **If `docs/brief.md` exists:** Read it completely before doing anything else. It is your ultimate source of truth for project state.
- **Before ending any session/phase:** You must update or generate a fresh `docs/brief.md` using the strict template below. Do not consider a phase complete until this file is written.

```md
# Project Brief & State Transfer: [Client Name]
## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | [e.g., Phase 2.5 — Prototyping] |
| **Current Project Mode** | [Strategy / Design / Build] |
| **Last Active Model** | [e.g., Claude Sonnet Latest] |

---

## 2. Immutable Decisions Made
*(List definitive choices that the incoming model must NOT change or re-ask)*
- **Target Audience:** [Details]
- **Primary Goal:** [Details]
- **Core Visual Style:** [Details]

---

## 3. Current File Registry & Manifest
*(Tracks what has actually been written to disk so far)*
- [ ] `style.md` — [Status: Approved / Pending / Missing]
- [ ] `src/styles/_variables.scss` — [Status: Tokens Mapped / Missing]
- [ ] `src/components/Navbar.astro` — [Status: Extracted from Stitch / Missing]

---

## 4. Immediate Next Steps for the Incoming Model
1. [Clear tactical step 1]
2. [Clear tactical step 2]
```

</context-preservation>

---

<tech-stack>

## Tech Stack

- **Framework:** Astro v6
- **Styling:** Bootstrap v5 (imported via npm, customized via SCSS) + Sass v1.100
- **Icons:** Lucide icons v1 (`@lucide/astro`)
- **Hosting:** Netlify
- **Design Tooling:** Stitch (Manual Interaction)

**MCP Servers available:**
- Astro Docs MCP — query for Astro v6+ syntax, API changes, and best practices.

**Code preferences:**
- Apply lazy-senior-dev discipline per `.agents/skills/ponytail`
- Semantic HTML5 always
- No class constructors in JavaScript — clean, named functions only
- TypeScript only where necessary; keep it minimal
- Centralize design tokens as Bootstrap SCSS variable overrides, not inline styles

**Bootstrap vs. custom SCSS — the governing rule:**
Use Bootstrap utilities (`.py-5`, `.mt-4`, `.d-flex`) for things that vary per instance,since different elements genuinely need different values. Use centralized SCSS rules for anything universal — for example, a single `h1, h2, h3 { font-weight: 600; }` in `_base.scss` beats adding `.fw-bold` to every heading in the HTML. If the same utility class would appear on every instance of an element with no variation, it belongs in SCSS, not the markup.


</tech-stack>

## Phase 1 - Astro components
Treat `index.html` as read-only. Never modify it — it is the reference, not the working file. Use it to:
1. Identify components & props: find repeating structures and values (navbar, hero, cards, sections, footer) and make them `.astro` components with props.
2. Replace hardcoded content with prop values or slots
3. The goal is componentization, not rewriting. If a Bootstrap class in the HTML works correctly in v5, keep it.
4. Map the build order: start from the outermost layout components inward (Layout → Navbar → sections → sub-components)

### 1.1 Astro Patterns
- Semantic HTML5 first
- Prefer Astro components (`.astro`) for layout and static content
- Use component islands only where client-side interactivity is genuinely needed
- Pass data via props; avoid hardcoding content inside components
- Use Astro's built-in image optimization (`<Image />`) for all images
- Use Astro's built-in font optimization (Astro Font Provider API `astro.config.mjs`) for fonts
- Layouts live in `src/layouts/`, reusable components in `src/components/`

## Phase 2 - Bootstrap VS css
 1. Spacing stays native: use Bootstrap's own spacing scale throughout. Match the approved screenshot visually, if possible.
 2. Does Bootstrap do this natively? No → custom CSS (component partial or _base.scss, depending on scope).
 3. Is it Bootstrap-doable, but identical on every instance of this element (headings, links, images, etc.)? Yes → _base.scss element selector, not a repeated utility class.
 4. If Bootstrap handles it, and it varies per instance → keep the Bootstrap class directly in the markup.

### 2.1 - SCSS Patterns
- Centralize design tokens as Bootstrap SCSS variable overrides, not inline styles
- Never write hardcoded pixel values where a Bootstrap spacing variable works.
- Use SCSS nesting for component-scoped styles (max 2 levels)

## Phase 3 - Javascript
- No class constructors — use named functions
- DOM manipulation via `document.querySelector` and event listeners
- Keep scripts scoped to their component using Astro's `<script>` tag
- Minimal TypeScript: use it for prop types in `.astro` frontmatter only

## Phase Handoff Requirement (MANDATORY)
Compile state progress into  `docs/brief.md` using State Management Template. 
