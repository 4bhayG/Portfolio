"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-reveal leaf. MOTION_INTENSITY 7: entries are choreographed rather
 * than merely present, but nothing loops forever and nothing hijacks scroll.
 *
 * Two variants:
 *   rise  - content lifts into place. The default for text.
 *   depth - content also scales up from slightly behind, so it reads as
 *           arriving toward the viewer. Use on cards and figures, not on
 *           long body copy, where scaling text softens it mid-flight.
 *
 * Under reduced motion both collapse to a plain fade with no transform, and
 * `initial={false}` skips the offscreen state entirely.
 */
export function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className,
}: {
  children: ReactNode;
  delay?: number;
  variant?: "rise" | "depth";
  className?: string;
}) {
  const reduce = useReducedMotion();

  const hidden =
    variant === "depth"
      ? { opacity: 0, y: 34, scale: 0.94 }
      : { opacity: 0, y: 22, scale: 1 };

  return (
    <motion.div
      // Paired with a <noscript> override in layout.tsx: without JS the
      // initial opacity:0 would otherwise leave the page blank.
      data-reveal=""
      className={className}
      initial={reduce ? false : hidden}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: variant === "depth" ? 0.7 : 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
