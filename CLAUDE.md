# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build (also typechecks)
npm start        # serve the production build
npx eslint .     # lint (npm run lint invokes eslint with no args and checks nothing)
```

There is no test suite.

Node 20.14 is installed, which is below what some tooling wants. `npx skills`
and `pdf-parse@2` both require Node >= 22 (`zlib.crc32`,
`process.getBuiltinModule`) and fail on this machine.

## Architecture

Next.js 16 App Router, React 19, Tailwind v4, TypeScript. One route: `src/app/page.tsx`.

**Content is fully separated from presentation.** Every visible string lives in
`src/content/profile.ts`, typed `as const`. Components read from it and contain
no copy of their own. To change what the site says, edit that file, not the
components. Content is sourced from `Abhay_Resume_SDE (6).pdf` in the repo root;
figures in it are real resume numbers, so do not invent or round them.

**Server Components by default.** The client components are all isolated
motion/interaction leaves:

- `src/components/Reveal.tsx` — scroll-triggered entries. Two variants: `rise`
  (text) and `depth` (cards/figures, adds a scale-up so content reads as
  arriving toward the viewer).
- `src/components/ParallaxMedia.tsx` — scroll-linked image drift. The inner
  layer is inset by `-overscan` on both sides so translation never exposes an
  edge; change `strength` and the overscan follows automatically.
- `src/components/HeroMotion.tsx` — `HeroMotion` puts the hero copy and portrait
  on separate scroll layers (`front` drifts 90px, `back` 40px) and fades them as
  the hero recedes; `HeroEntry` staggers the hero in on load.
- `src/components/StatMotion.tsx` — `CountUp` (MotionValue tween, no per-frame
  React state) and `StatBar` (grows via `scaleX`, never `width`).
- `src/components/SiteNav.tsx` — holds the mobile disclosure state.

Anything animating on entry renders `opacity: 0` during SSR, so `layout.tsx`
carries a `<noscript>` override keyed on `[data-reveal]`. **Any new entry
animation must set `data-reveal=""`**, or the page goes blank without JS.

`src/components/LeetCodeStats.tsx` is an async Server Component that fetches
`https://leetcode.com/graphql` at build time with `next: { revalidate: 21600 }`.
It returns `null` on any failure and the section degrades to a plain profile
link, so a network or API change never breaks the build. Numbers are formatted
with an explicit `"en-US"` locale because the default groups as `1,46,912` on an
Indian system and would drift between server and client.

Phosphor icons must be imported from `@phosphor-icons/react/dist/ssr` in Server
Components; the default entrypoint is client-only.

## Design constraints

Two skill files in the repo govern the visual work and are worth reading before
changing anything visual: `taste-design/SKILL.md` (an anti-slop frontend ruleset
with a mandatory pre-flight checklist) and `web-design-rules/SKILL.md` (fetches
Vercel's Web Interface Guidelines).

The design decisions below are locked deliberately. Breaking one is a
regression, not a preference:

- **One theme.** The page is dark only, by explicit brief. No section inverts.
- **One accent.** Deep rose, defined once in `globals.css`. Do not introduce a
  second accent hue anywhere, including status colors and badges.
- **One radius scale.** 12px for surfaces/cards/buttons, 8px for inputs.
- **Zero em-dashes** (`—` and `–`) in any visible string. Use `-`.
- **Contrast.** All text passes WCAG AA against its own background. `--text-muted`
  was raised to `#82828f` specifically to clear 4.5:1; do not darken it.
- **LeetCode difficulty is a sequential single-hue ramp**, not three categorical
  colors. That keeps the one-accent lock intact while encoding order.
- Motion honors `prefers-reduced-motion` at both the CSS and Motion layers.
  `MOTION_INTENSITY` is 7. Scroll effects use Motion's `useScroll`/`useTransform`
  only. **Never** add a `scroll` event listener or track scroll in React state:
  both re-render every frame and collapse on mobile. Animate `transform` and
  `opacity` exclusively.

Theme tokens are defined once in `src/app/globals.css` under `:root` and exposed
to Tailwind via `@theme inline`. Change a color there, not in a component.

## Assets

`public/kotion.png` is a real screenshot of the deployed Kotion app, captured
cropped below its nav because that site's logo asset 404s. RediX intentionally
has no image (`image: null` in `profile.ts`) because it is a server with no UI,
and `Projects.tsx` renders a text-forward card in that case. Do not fill the slot
with stock photography.
