"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "motion/react";

/**
 * Count-up for the headline figure.
 *
 * Motivation: hierarchy. The number is the one thing worth reading in this
 * section, and counting draws the eye to it once, on arrival.
 *
 * The value lives in a MotionValue, so the tween never re-renders React.
 * Under reduced motion the final figure is rendered immediately.
 */
export function CountUp({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  const count = useMotionValue(reduce ? to : 0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(count, to, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, to, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{reduce ? to.toString() : rounded}</motion.span>
    </span>
  );
}

/**
 * Difficulty meter. Grows via scaleX rather than width so the browser can
 * keep it on the compositor.
 *
 * Motivation: magnitude. The bar filling is the quantity being stated.
 */
export function StatBar({
  pct,
  color,
  label,
  delay = 0,
}: {
  pct: number;
  color: string;
  label: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const width = `${Math.max(pct, 1.5)}%`;

  return (
    <div className="mt-2.5 border-b border-line">
      <motion.div
        className="h-1.5 origin-left rounded-full"
        style={{ width, backgroundColor: color }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        role="img"
        aria-label={label}
      />
    </div>
  );
}
