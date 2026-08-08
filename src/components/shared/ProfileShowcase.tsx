"use client";

import { motion, useReducedMotion } from "framer-motion";
import { highlights } from "@/lib/site";
import { ProfilePhoto } from "@/components/shared/ProfilePhoto";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type ProfileShowcaseProps = {
  priority?: boolean;
  className?: string;
};

/** Circular profile with floating stat badges — matches portfolio reference layout */
export function ProfileShowcase({ priority = false, className = "" }: ProfileShowcaseProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative mx-auto w-fit ${className}`}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true }}
      variants={fade}
    >
      {/* Outer glow ring */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/20 blur-xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-1 rounded-full border border-blue-400/30 shadow-[0_0_60px_rgba(59,130,246,0.35)]"
        aria-hidden
      />

      <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-blue-400/40 bg-slate-900 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
        <ProfilePhoto priority={priority} />
      </div>

      {highlights.map((h, i) => (
        <div
          key={h.label}
          className={`absolute glass-panel z-10 rounded-xl px-4 py-2.5 shadow-lg ${
            i === 0
              ? "-left-2 bottom-4 sm:-left-6 sm:bottom-8"
              : i === 1
                ? "-right-2 bottom-16 sm:-right-6 sm:bottom-20"
                : "-right-1 top-0 sm:-right-4 sm:top-2"
          }`}
        >
          <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
            {h.value}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-2)]">
            {h.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
