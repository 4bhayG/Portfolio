"use client";

import { useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react/dist/ssr";
import { navItems, profile } from "@/content/profile";

/**
 * Single-line desktop nav, 64px tall (skill cap is 80px).
 * Below md the links collapse into a disclosure rather than wrapping
 * to a second line.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-primary transition-colors hover:text-accent"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-secondary transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Recruiters look for this first, so it sits in the nav rather
                than only at the foot of the page. */}
            <li>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-secondary transition-colors hover:text-primary"
              >
                Resume
                <ArrowUpRight size={13} weight="bold" />
              </a>
            </li>
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-[var(--radius)] border border-accent-line bg-accent-soft px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-contrast"
          >
            Email me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-[var(--radius)] border border-line p-2 text-secondary transition-colors hover:text-primary md:hidden"
        >
          {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-secondary transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 py-2.5 text-sm text-secondary transition-colors hover:text-primary"
              >
                Resume
                <ArrowUpRight size={13} weight="bold" />
              </a>
            </li>
            <li className="pt-2 pb-1">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="inline-block rounded-[var(--radius)] border border-accent-line bg-accent-soft px-4 py-2 text-sm font-medium text-accent"
              >
                Email me
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
