# GSAP, Astro & Webflow Cloud

Astro app template with [GSAP](https://gsap.com/) loaded and ready to use, set up for Webflow Cloud. All GSAP plugins — including the formerly premium Club GSAP plugins, which are now 100% free for everyone (including commercial use) thanks to Webflow — are registered and available. Just import what you need from `src/lib/gsap.js`.

[GSAP Cheatsheet 👀](https://gsap.com/cheatsheet/)

## 🎬 GSAP basics

GSAP animates anything JavaScript can touch — CSS, SVG, canvas, WebGL, custom JS objects. The core API has three main methods:

## 🔌 Registered plugins

All of these are imported and registered in `src/lib/gsap.js`:

| Plugin              | What it does                                          |
| :------------------ | :---------------------------------------------------- |
| `ScrollTrigger`     | Trigger and scrub animations based on scroll position |
| `ScrollSmoother`    | Smooth, native-feeling scroll with parallax effects   |
| `ScrollToPlugin`    | Animate the scroll position of the window or element  |
| `Observer`          | Detect scroll/touch/pointer/wheel without scrollbars  |
| `SplitText`         | Split text into chars/words/lines for animation       |
| `Draggable`         | Make any element draggable, with throwing via inertia |
| `Flip`              | Animate between any two states (FLIP technique)       |
| `MotionPathPlugin`  | Animate elements along an SVG path or coordinates     |
| `MotionPathHelper`  | Interactive editor for motion paths (dev only)        |
| `DrawSVGPlugin`     | Animate SVG stroke drawing in/out                     |
| `MorphSVGPlugin`    | Morph one SVG shape into another                      |
| `InertiaPlugin`     | Velocity-based throwing/momentum animations           |
| `Physics2DPlugin`   | 2D physics: velocity, acceleration, gravity           |
| `PhysicsPropsPlugin`| Physics-driven animation of any property              |
| `CustomEase`        | Build your own easing curves                          |
| `CustomBounce`      | Configurable bounce easing                            |
| `CustomWiggle`      | Configurable wiggle easing                            |
| `ScrambleTextPlugin`| Scramble text into the final string                   |
| `TextPlugin`        | Animate text content character-by-character           |
| `PixiPlugin`        | Animate PIXI.js display objects                       |
| `EaselPlugin`       | Animate EaselJS display objects                       |
| `CSSRulePlugin`     | Animate CSS rules (e.g. `::before`, `::after`)        |
| `GSDevTools`        | Visual scrubber for animations (dev only)             |
| `EasePack`          | Extra eases: `SlowMo`, `RoughEase`, `ExpoScaleEase`   |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |