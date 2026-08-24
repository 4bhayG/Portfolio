import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";

/**
 * Layout family: grouped chip grid. Each group holds more than five items,
 * which the skill says must not ship as a plain divided list, so items are
 * chunked into four labelled groups with chips inside.
 */
export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface-raised/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {profile.skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.06} variant="depth">
              <div className="h-full rounded-[var(--radius)] border border-line bg-surface p-6">
                <h3 className="text-sm font-medium text-accent">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-[var(--radius-input)] border border-line bg-surface-raised px-2.5 py-1 font-mono text-xs text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
