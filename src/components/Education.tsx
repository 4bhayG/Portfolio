import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";

/**
 * Layout family: compact record rows. Only two entries, and a single hairline
 * separates them rather than boxing every row, which the skill flags as the
 * laziest possible treatment.
 */
export function Education() {
  return (
    <section id="education" className="border-t border-line bg-surface-raised/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line">
          {profile.education.map((entry, i) => (
            <Reveal key={entry.institution} delay={i * 0.06}>
              <div className="flex flex-col gap-3 py-6 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <h3 className="text-base font-medium text-primary">
                    {entry.institution}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">
                    {entry.credential}
                  </p>
                  <p className="mt-1 text-sm text-muted">{entry.location}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-mono text-sm text-accent">
                    {entry.result}
                  </p>
                  <p className="mt-1 font-mono text-sm text-muted">
                    {entry.period}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
