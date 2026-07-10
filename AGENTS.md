# AGENTS.md

## Commands
| Command | Purpose |
|---|---|
| `npm start` | Dev server |
| `npm run build` | Production build (triggers PurgeCSS) |
| `npm run preview` | Preview production build |
| `npm run check` | Astro's typecheck |
| `npm run fallow` | Quality, risk, architecture, dependencies, duplication, safe cleanup evidence |

## Architecture
- **Framework:** Astro
- **Styling:** Bootstrap (imported via npm, customized via SCSS) + Sass
- **Icons:** Lucide icons (`@lucide/astro`)
- **Hosting:** Webflow Cloud
- **Animations:** GSAP

**MCP Servers available:**
- Astro Docs MCP — query for Astro v6+ syntax, API changes, and best practices.

## SCSS quirks
Use Bootstrap utilities (`.py-5`, `.mt-4`, `.d-flex`) for things that vary per instance,since different elements genuinely need different values. Use centralized SCSS rules for anything universal — for example, a single `h1, h2, h3 { font-weight: 600; }` in `_base.scss` beats adding `.fw-bold` to every heading in the HTML. If the same utility class would appear on every instance of an element with no variation, it belongs in SCSS, not the markup.

## Before writing any code
Stop at the first rung that holds:
1. Does this need to be built at all? (YAGNI)
2. Does the Bootstrap library already do this? Use it.
3. Does Astro have a native feature doing/covering it? Use it
4. Does a native platform feature cover it? Use it.
5. Does an already-installed dependency solve it? Use it.
6. Can this be one line? Make it one line.
7. Only then: write the minimum code that works.

## Rules:
- Semantic HTML5 always
- No class constructors in JavaScript — clean, named functions only
- TypeScript only where necessary; keep it minimal
- Centralize design tokens as Bootstrap SCSS variable overrides, not inline styles
- No abstractions that weren't explicitly requested.
- No new dependency if it can be avoided.
- No boilerplate nobody asked for.
- Deletion over addition. Boring over clever. Fewest files possible.
- Question complex requests: "Do you actually need X, or does Y cover it?"
- Pick the edge-case-correct option when two stdlib approaches are the same size, lazy means less code, not the flimsier algorithm.
- Mark intentional simplifications with a `ponytail:` comment. If the shortcut has a known ceiling (global lock, O(n²) scan, naive heuristic), the comment names the ceiling and the upgrade path.

**Not lazy about**: input validation at trust boundaries, error handling that prevents data loss, security, accessibility, the calibration real hardware needs (the platform is never the spec ideal, a clock drifts, a sensor reads off), anything explicitly requested. Lazy code without its check is unfinished: non-trivial logic leaves ONE runnable check behind, the smallest thing that fails if the logic breaks (an assert-based demo/self-check or one small test file; no frameworks, no fixtures). Trivial one-liners need no test.

