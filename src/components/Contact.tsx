import {
  ArrowUpRight,
  Envelope,
  FileText,
  GithubLogo,
  LinkedinLogo,
  Code,
} from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: GithubLogo },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinLogo },
  { label: "LeetCode", href: profile.links.leetcode, Icon: Code },
];

/**
 * Layout family: closing statement with a single conversion path.
 * "Email me" is the only contact-intent label used anywhere on the page,
 * per the skill's ban on duplicate CTA intent.
 */
export function Contact() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {profile.contact.headline}
          </h2>

          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-secondary">
            {profile.contact.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--radius)] bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-[transform,background-color] hover:bg-accent-hover active:translate-y-px"
            >
              <Envelope size={16} weight="bold" />
              Email me
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--radius)] border border-line-strong px-5 py-3 text-sm font-medium text-primary transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-px"
            >
              <FileText size={16} weight="bold" />
              View resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-secondary underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-line bg-surface-raised px-4 py-2.5 text-sm text-secondary transition-colors hover:border-accent hover:text-primary"
                >
                  <Icon size={18} weight="fill" />
                  {label}
                  <ArrowUpRight size={14} weight="bold" className="text-muted" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
