"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-linked parallax for media.
 *
 * Motivation: depth. The image drifts slower than the page, so the card reads
 * as sitting behind the text rather than pasted onto it.
 *
 * The inner layer is deliberately taller than its frame (see `overscan`) so the
 * translation never exposes an edge. Driven by motion values off the render
 * cycle: no scroll listener, no state, no re-render per frame.
 */
export function ParallaxMedia({
  children,
  className = "",
  strength = 44,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const travel = reduce ? 0 : strength;
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  // Enough overscan on each side to cover the full travel at any frame.
  const overscan = travel + 12;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          position: "absolute",
          left: 0,
          right: 0,
          top: -overscan,
          bottom: -overscan,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
