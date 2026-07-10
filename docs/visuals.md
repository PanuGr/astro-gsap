Plan below, per plugin, no code.

**Surfaces (glass/gradient)**
Skip generic SaaS glass look — reframe as light-through-glass/gilding:
- Prayer/Work/Rest cards: backdrop-blur + thin gold-dim border → stained-glass read, not UI chrome
- Radial gold-glow behind section headers, fires on scroll-in → halo, not decoration
- Hero: slow-shifting light-shaft gradient overlay (CSSRulePlugin animating a ::before gradient) → dome-oculus feel
- Donate cards: gold-tint glass → candlelight-on-gold

**Interactions (hover)**
- Buttons: gold border draws in on hover via DrawSVGPlugin (traces like halo) — not scale/shadow bounce
- Cards: lift + soft gold glow, title underline draws in (DrawSVGPlugin)
- Dividers: draw themselves in on scroll (DrawSVGPlugin stroke reveal) instead of fade → illuminated-manuscript linework feel
- Donate CTA: slow gold glow pulse, candle-flicker rate not urgent-button rate

**Parallax**
Got basic hero bg parallax already. Upgrade:
- ScrollSmoother → whole-page buttery scroll + built-in speed-based parallax layers (plugin's registered, just unused)
- 3-layer hero depth: bg image slow, silhouette/arch layer mid, title fastest
- Life/Donate images drift as they pass, not static fade-in

**Morphing shapes**
MorphSVGPlugin on one recurring motif — cross ↔ dome outline ↔ candle-flame — morphs at scroll milestones, threads whole page together. Rare plugin, strong "knows GSAP" signal for judges.

**3D**
True WebGL 3D (three.js) not in stack, real weight for one page → skip.
CSS 3D instead: cards tilt toward cursor (quickTo mouse-follow), dome/arch SVG slight rotateY on scroll-approach → 3D feel near-zero cost.

**Full library, tie-together picks**
- SplitText: hero headline reveals word-by-word, staggered, slow → reads like spoken liturgy, not fade-block
- CustomEase: one signature reverent ease curve, used everywhere instead of default power2.out → distinct motion signature
- ScrambleTextPlugin: small flourish on stat numbers only (2025, 40km) — resist overuse
- Draggable + InertiaPlugin + Physics2DPlugin → signature moment below
- Flip, PixiPlugin, EaselPlugin → skip. Canvas/WebGL-heavy or no real content moment fits — plugin-for-plugin's-sake otherwise
- GSDevTools → dev-only, tune timing during build, never ships

**Signature moment (biggest swing, highest build cost)**
Donate section: drag candle → drop on stand → flame ignites, flickers (Physics2D wobble, InertiaPlugin on the drag). Real Orthodox practice, not generic gimmick. Draggable + Inertia + Physics2D in one moment, right before the ask — sticks in judges' memory.

**Watch vs style.md**
style.md says: no bounce, no bright color outside gold, restraint over decoration. Everything above stays inside that — glow/glass/morph all navy+gold, eases stay slow/power-based not elastic. Wow comes from technical depth + thematic tightness, not saturation/bounce. Flagging so it's a call, not accident.

One non-negotiable: prefers-reduced-motion respected (drop parallax/morph/physics, keep instant fades) — bake in later, not optional.