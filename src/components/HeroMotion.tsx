"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Hero depth layer.
 *
 * Motivation: hierarchy. As the page scrolls away, the copy and the portrait
 * separate slightly and fade, so the hero recedes instead of sliding off as
 * one flat sheet. Scroll-linked, so it is reversible and never fights the user.
 *
 * `layer` sets how far the element drifts. Text drifts further than the
 * portrait, which is what produces the depth cue.
 */
export function HeroMotion({
  children,
  layer = "front",
  className,
}: {
  children: ReactNode;
  layer?: "front" | "back";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const drift = reduce ? 0 : layer === "front" ? 90 : 40;
  const y = useTransform(scrollYProgress, [0, 1], [0, drift]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.15]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Staggered entry for the hero on first paint. Runs once on load rather than
 * on scroll, because the hero is already in view.
 */
export function HeroEntry({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
