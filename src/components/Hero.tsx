import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import { HeroEntry, HeroMotion } from "./HeroMotion";
import { ParallaxMedia } from "./ParallaxMedia";

/**
 * Asymmetric split hero (DESIGN_VARIANCE 6 rules out a centered hero).
 * Exactly four text elements: role eyebrow, headline, subtext, CTA pair.
 *
 * Copy and portrait sit on separate scroll layers so the hero gains depth on
 * the way out. Entry is staggered top to bottom, matching reading order.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 lg:pt-24 lg:pb-28"
    >

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <HeroMotion layer="front">
          <HeroEntry>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {profile.role}
            </p>
          </HeroEntry>

          {/* Capped at 2 lines on desktop: font scale is planned around the
              column width, not set large and left to wrap. */}
          <HeroEntry delay={0.08}>
            <h1 className="mt-5 max-w-[19ch] text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl">
              {profile.hero.headline}
            </h1>
          </HeroEntry>

          <HeroEntry delay={0.16}>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-secondary sm:text-lg">
              {profile.hero.subtext}
            </p>
          </HeroEntry>

          <HeroEntry delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--radius)] bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-[transform,background-color] duration-200 hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-px"
              >
                View work
                <ArrowDown size={16} weight="bold" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--radius)] border border-line-strong px-5 py-3 text-sm font-medium text-primary transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-px"
              >
                Email me
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </HeroEntry>
        </HeroMotion>

        <HeroMotion layer="back">
          <HeroEntry delay={0.12}>
            {/*
              Frame is 3:4, matching the source exactly, so the full photo is
              shown with no crop. Held to 340px so the 900px-wide asset is never
              upscaled, even at 2x device pixel ratio.
            */}
            <ParallaxMedia
              strength={26}
              className="mx-auto aspect-[3/4] w-full max-w-[300px] rounded-[var(--radius)] border border-line bg-surface-raised sm:max-w-[340px] lg:mx-0 lg:ml-auto"
            >
              <Image
                src="/profile.jpg"
                alt={`${profile.name}, ${profile.role.toLowerCase()}`}
                fill
                priority
                // Wider than the visible frame on purpose: ParallaxMedia insets
                // the layer past the frame on both sides, so the image is drawn
                // taller than the box and object-cover scales it up to match.
                // Sizing to the frame alone serves too small a file and softens it.
                sizes="(max-width: 640px) 90vw, 620px"
                className="object-cover object-center"
              />
            </ParallaxMedia>
          </HeroEntry>
        </HeroMotion>
      </div>
    </section>
  );
}
