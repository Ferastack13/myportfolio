"use client";

import { motion, useReducedMotion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="ambient-orb -left-32 top-0 h-[400px] w-[400px] bg-blue-600/15" />
      <div className="ambient-orb right-0 top-10 h-[360px] w-[360px] bg-indigo-600/10" aria-hidden />
      <div className="absolute inset-0 tech-grid opacity-40" aria-hidden />

      <div
        className={`relative mx-auto max-w-4xl px-5 sm:px-8 ${
          centered ? "text-center" : "text-left"
        }`}
      >
        <motion.p
          className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400/90"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={fade}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 font-[family-name:var(--font-outfit)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={fade}
          transition={{ delay: 0.05 }}
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            className={`mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={fade}
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
