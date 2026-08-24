import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";
import { CountUp, StatBar } from "./StatMotion";

/**
 * Live LeetCode stats, fetched server-side from the public GraphQL endpoint.
 *
 * Color: difficulty is an ordered magnitude scale, so it is encoded as a
 * SEQUENTIAL single-hue ramp in the page accent (light to deep rose). That
 * satisfies the dataviz rule (sequential = one hue, never a rainbow) and the
 * page's one-accent lock at the same time. Identity never rests on color
 * alone: every row is directly labelled.
 *
 * Marks: fills sit on a hairline baseline rather than inside a filled track,
 * which the design rules call out as dashboard clutter on a marketing page.
 */

const USERNAME = "AbhayG15";
const ENDPOINT = "https://leetcode.com/graphql";

type Bucket = { difficulty: string; count: number };

type LeetCodeData = {
  solved: number;
  total: number;
  ranking: number | null;
  breakdown: { label: string; solved: number; total: number; step: string }[];
};

// Three steps of the accent hue, light to deep.
const RAMP: Record<string, string> = {
  Easy: "#eb9aab",
  Medium: "#d4526b",
  Hard: "#9e3349",
};

async function getStats(): Promise<LeetCodeData | null> {
  const query = `
    query($u: String!) {
      matchedUser(username: $u) {
        profile { ranking }
        submitStatsGlobal { acSubmissionNum { difficulty count } }
      }
      allQuestionsCount { difficulty count }
    }
  `;

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({ query, variables: { u: USERNAME } }),
      // Stats move slowly; refresh a few times a day rather than per request.
      next: { revalidate: 21600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    const user = json?.data?.matchedUser;
    const all: Bucket[] = json?.data?.allQuestionsCount ?? [];
    if (!user) return null;

    const solvedBy: Bucket[] = user.submitStatsGlobal?.acSubmissionNum ?? [];
    const pick = (list: Bucket[], d: string) =>
      list.find((b) => b.difficulty === d)?.count ?? 0;

    return {
      solved: pick(solvedBy, "All"),
      total: pick(all, "All"),
      ranking: user.profile?.ranking ?? null,
      breakdown: (["Easy", "Medium", "Hard"] as const).map((d) => ({
        label: d,
        solved: pick(solvedBy, d),
        total: pick(all, d),
        step: RAMP[d],
      })),
    };
  } catch {
    return null;
  }
}

export async function LeetCodeStats() {
  const stats = await getStats();

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Problem solving
            </h2>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-accent"
            >
              LeetCode profile
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>
        </Reveal>

        {stats ? (
          <Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              {/* Hero number: the one figure worth reading at a glance. */}
              <div>
                <p className="font-mono text-6xl font-semibold leading-none tracking-tight text-primary sm:text-7xl">
                  <CountUp to={stats.solved} />
                </p>
                <p className="mt-3 text-sm text-secondary">
                  problems solved of {stats.total.toLocaleString("en-US")}
                </p>
                {stats.ranking ? (
                  <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
                    Global rank{" "}
                    <span className="font-mono text-secondary">
                      {/* Locale pinned: the default groups as 1,46,912 on an
                          Indian system, and would differ server vs client. */}
                      {stats.ranking.toLocaleString("en-US")}
                    </span>
                  </p>
                ) : null}
              </div>

              <ul className="space-y-7">
                {stats.breakdown.map((row, i) => {
                  const pct = row.total ? (row.solved / row.total) * 100 : 0;
                  return (
                    <li key={row.label}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-primary">{row.label}</span>
                        <span className="font-mono text-sm text-secondary">
                          {row.solved}
                          <span className="text-muted">/{row.total}</span>
                        </span>
                      </div>
                      {/* Hairline baseline, not a filled track. */}
                      <StatBar
                        pct={pct}
                        color={row.step}
                        delay={i * 0.12}
                        label={`${row.label}: ${row.solved} of ${row.total} solved`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ) : (
          // Error state: the section degrades to a link rather than vanishing.
          <Reveal>
            <p className="mt-8 max-w-[54ch] text-sm leading-relaxed text-secondary">
              Live stats could not be loaded right now. The full solve history is
              on the{" "}
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent underline underline-offset-4"
              >
                LeetCode profile
              </a>
              .
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
