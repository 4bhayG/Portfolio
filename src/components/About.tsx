import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";

/**
 * Layout family: oversized statement plus a key/value quip ledger.
 *
 * Deliberately not a card grid. The quips sit on hairlines in two columns,
 * which no other section on the page uses, so the personality beat reads as
 * its own moment rather than another row of boxes.
 */
export function About() {
  const { about } = profile;

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            {/* 19ch keeps "mid-build." intact: at 15ch it broke on the hyphen. */}
            <h2 className="max-w-[19ch] text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl lg:text-[2.6rem]">
              {about.headline}
            </h2>
            <div className="mt-6 max-w-[56ch] space-y-4">
              {about.body.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="text-base leading-relaxed text-secondary"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="depth" delay={0.08}>
            <dl className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {about.quips.map((q) => (
                <div
                  key={q.k}
                  className="border-t border-line py-5 transition-colors hover:border-accent"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    {q.k}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-secondary">
                    {q.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
