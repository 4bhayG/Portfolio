import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";

/**
 * Layout family: asymmetric feature plus stacked pair. Deliberately not
 * three equal cards, which the skill bans outright. The Adobe result carries
 * a real metric, so it gets the display treatment.
 */
export function Achievements() {
  const { featured, rest } = profile.achievements;

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Beyond the day job
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[var(--radius)] border border-accent-line bg-accent-soft p-8">
              <p className="font-mono text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                {featured.metric}
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-primary">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-secondary">
                  {featured.body}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={0.05 + i * 0.06} variant="depth">
                <div className="h-full rounded-[var(--radius)] border border-line bg-surface-raised p-6">
                  <h3 className="text-base font-medium text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
