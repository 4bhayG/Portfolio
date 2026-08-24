import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import { Reveal } from "./Reveal";
import { ParallaxMedia } from "./ParallaxMedia";

/**
 * Two projects, two deliberately different compositions.
 *
 * Kotion is deployed, so it gets a real screenshot in an image/text split.
 * RediX is a server with no interface. Rather than dressing it in stock
 * photography that says nothing true, it renders text-forward and wide.
 * That difference also keeps the section off a repeated split rhythm.
 */
export function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {profile.projects.map((project, i) => (
            <Reveal key={project.name} variant="depth">
              <article
                className={
                  project.image
                    ? "grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                    : "rounded-[var(--radius)] border border-line bg-surface-raised p-8 sm:p-10"
                }
              >
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-accent">{project.tagline}</p>

                  <p
                    className={`mt-5 text-sm leading-relaxed text-secondary sm:text-base ${
                      project.image ? "max-w-[60ch]" : "max-w-[76ch]"
                    }`}
                  >
                    {project.body}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className={`rounded-[var(--radius-input)] border border-line px-2.5 py-1 font-mono text-xs text-secondary ${
                          project.image ? "bg-surface-raised" : "bg-surface"
                        }`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-7 inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--radius)] border border-line-strong px-4 py-2.5 text-sm font-medium text-primary transition-[transform,border-color,color] hover:border-accent hover:text-accent active:translate-y-px"
                  >
                    {project.hrefLabel}
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                </div>

                {project.image ? (
                  <ParallaxMedia
                    strength={30}
                    className={`aspect-[4/3] w-full rounded-[var(--radius)] border border-line bg-surface-raised ${
                      i % 2 === 0 ? "lg:order-first" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? ""}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      // contain, not cover: these are captures of real output,
                      // and cropping would cut lines off the top.
                      className="object-contain"
                    />
                  </ParallaxMedia>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-14 flex items-center justify-between gap-4 rounded-[var(--radius)] border border-line px-6 py-5 transition-colors hover:border-accent"
          >
            <span className="flex items-center gap-3 text-sm text-secondary">
              <GithubLogo size={20} weight="fill" className="text-primary" />
              The rest of the projects live on GitHub
            </span>
            <ArrowUpRight
              size={18}
              weight="bold"
              className="shrink-0 text-accent"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
