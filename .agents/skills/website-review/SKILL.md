---
name: website-review
description: Use this skill when reviewing the codebase of a client website.
---

<context-preservation>

## State Management & Model Handoff Protocol
Because different models execute different phases of this build, you MUST maintain a state-tracking file named `brief.md` in the docs folder (`/docs/`). 
- **If `brief.md` exists:** Read it completely before doing anything else. It is your ultimate source of truth for project state.
- **Before ending any session/phase:** You must update or generate a fresh `brief.md` using the strict template below. Do not consider a phase complete until this file is written.

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

---

Do not do all phases at once. After each phase, create a short list grouped by severity:

- **Blocking** — must fix before launch
- **Important** — should fix before launch
- **Nice to have** — improve in next iteration

For each issue: what the problem is, why it matters, and a specific fix.
Wait confirmation for fixes or moving on to the next phase.

## Phase 1 - UX/UI
Go through each area and note: ✅ Pass / ⚠️ Needs attention / ❌ Blocking issue

**Layout & Visual Hierarchy**
- [ ] Can a first-time visitor tell what this site does within 5 seconds?
- [ ] Is the most important content visually dominant?
- [ ] Is there a clear visual path from top to bottom of each page?

**Navigation**
- [ ] Is the primary CTA visible without scrolling on desktop and mobile?
- [ ] Are navigation labels clear enough that a new visitor understands them?
- [ ] Is there a consistent way to return to the homepage from every page?

**Calls to Action**
- [ ] Does each page have exactly one primary CTA?
- [ ] Is the CTA specific ("Book a free audit") rather than generic ("Contact us")?
- [ ] Is the CTA repeated at logical points (top, mid, bottom) on long pages?

**Readability**
- [ ] Are paragraphs short (3–5 lines max on desktop)?
- [ ] Is the font size at least 16px for body text?
- [ ] Is contrast ratio WCAG AA compliant for all text?

**Mobile Usability**
- [ ] Do all tap targets meet the 44×44px minimum?
- [ ] Is no content cut off or horizontally scrollable on a 375px viewport?
- [ ] Do forms work correctly on mobile keyboards?

**Accessibility:**
- [ ] Verify contrast ratio of `$body-color` against `$body-bg` meets 4.5:1 (WCAG AA)

**Semantic HTML checklist**
- [ ] One `<h1>` per page, logical `<h2>`/`<h3>` nesting.
- [ ] All images have meaningful `alt` text (or `alt=""` if decorative).
- [ ] All interactive elements reachable and operable by keyboard.
- [ ] Form inputs have associated `<label>` elements.
- [ ] ARIA attributes used only where native HTML semantics are insufficient.

## Phase 2 — SEO & Pre-Launch Review

### 2.1 - SEO
Run a full & detailed audit of the codebase. For intent mapping, keyword configuration, title tags, meta descriptions, and H2/H3 header frameworks, invoke and use: `.agents/skills/seo-content-strategist`. 

### 2.2 - Review
Finnish this phase with completing the checklist `.agents/skills/seo-content-strategist/rules/technical-seo-checklist.md`

## Phase 3 - Post-Build Verification
Invoke and run these automated quality checks on the completed build architecture.
### 3.1 - Code Review
#### 3.1.1
Run a full codebase audit with: `.agents/skills/code-simplification`
#### 3.1.2
Run a full codebase audit with: `.agents/skills/code-reviewer`
#### 3.1.3
Run a full codebase audit with: `.agents/skills/performance-optimization`

### 3.2 - Security
1. Run a full codebase audit with: `.agents/skills/security-auditor`

### Phase Handoff Requirement (MANDATORY)
Before declaring this phase closed or halting execution, you must compile all progress, structural trees, or token rules generated during this step into the `docs/brief.md` file using the State Management Template. Confirm to Panagiotis once the file is saved so he can cleanly switch models.
