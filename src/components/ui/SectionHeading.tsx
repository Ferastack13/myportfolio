"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const reduce = useReducedMotion();
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <motion.p
        className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400/90"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
