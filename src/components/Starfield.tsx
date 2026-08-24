/**
 * Slow drift of small stars behind the entire page.
 *
 * The layer is `fixed`, not absolute: it stays out of the scrolling container,
 * so scrolling never repaints it. An animated layer inside the scroll flow
 * would force continuous repaints and wreck mobile frame rates.
 *
 * Server-rendered and CSS-driven: no JS, no per-frame work, and it costs
 * nothing on the main thread. Animation runs on transform and opacity only.
 *
 * Positions come from a seeded generator rather than Math.random(), so the
 * server and client produce identical markup. Random values here would cause a
 * hydration mismatch.
 *
 * The whole layer is hidden under prefers-reduced-motion (see globals.css) and
 * is aria-hidden with pointer-events: none, so it never reaches assistive tech
 * or intercepts a click.
 */

// Small deterministic LCG. Same sequence on both sides of the render.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const rand = seeded(20260824);

const STARS = Array.from({ length: 34 }, () => ({
  left: rand() * 100,
  size: 1 + rand() * 2.1,
  duration: 11 + rand() * 16,
  delay: -rand() * 26,
  opacity: 0.18 + rand() * 0.42,
  drift: -14 + rand() * 28,
}));

export function Starfield() {
  return (
    <div
      aria-hidden="true"
      className="starfield pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {STARS.map((s, i) => (
        <span
          key={i}
          className="star"
          style={
            {
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              "--star-o": s.opacity,
              "--star-drift": `${s.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
