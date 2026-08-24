import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";

/**
 * Layout family: pinned meta column beside a substantive highlight list.
 * The right column carries real content, so this is not the banned
 * "big headline + small floating explainer" split header.
 */
export function Experience() {
  const { experience } = profile;

  return (
    <section
      id="experience"
      className="border-t border-line bg-surface-raised/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xl font-semibold text-primary">
                {experience.company}
              </p>
              <p className="mt-1 text-sm text-accent">{experience.team}</p>

              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="text-muted">Role</dt>
                  <dd className="mt-0.5 text-secondary">{experience.title}</dd>
                </div>
                <div>
                  <dt className="text-muted">Period</dt>
                  <dd className="mt-0.5 font-mono text-secondary">
                    {experience.period}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Location</dt>
                  <dd className="mt-0.5 text-secondary">
                    {experience.location}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-secondary">
                {experience.summary}
              </p>
            </div>
          </Reveal>

          <ul className="space-y-8">
            {experience.highlights.map((item, i) => (
              <li
                key={item.title}
                className="border-l border-line pl-6 transition-colors hover:border-accent"
              >
                <Reveal delay={i * 0.06}>
                  <h3 className="text-base font-medium text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-secondary">
                    {item.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
