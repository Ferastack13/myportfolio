"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TechBackground } from "@/components/effects/TechBackground";
import { heroExpertise, site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const [line, setLine] = useState(0);
  const taglines = [...site.taglines];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setLine((i) => (i + 1) % taglines.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce, taglines.length]);

  return (
    <section
      id="top"
      className="relative z-10 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Animated tech environment background */}
      <TechBackground />
      <div className="ambient-orb -left-32 top-0 h-[420px] w-[420px] bg-cyan-500/30" />
      <div className="ambient-orb -right-40 top-32 h-[480px] w-[480px] bg-violet-600/25" />
      <div className="ambient-orb left-1/3 bottom-0 h-[350px] w-[350px] bg-fuchsia-500/20" />
      <div className="absolute inset-0 tech-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          {site.title}
        </motion.div>

        <motion.h1
          className="mt-8 max-w-5xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
        >
          <span className="block">Premium engineering for</span>
          <span className="text-gradient mt-1 block">
            SaaS, AI systems &amp; business platforms.
          </span>
        </motion.h1>

        <div className="relative mt-6 h-8 max-w-2xl sm:h-9">
          <AnimatePresence mode="wait">
            <motion.p
              key={taglines[line]}
              className="absolute inset-x-0 top-0 text-lg font-medium text-[var(--muted)] sm:text-xl"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {taglines[line]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition hover:brightness-110"
          >
            Start a project
          </Link>
          <Link
            href="/work"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            View case studies
          </Link>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap gap-2"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {heroExpertise.map((label, i) => (
            <motion.span
              key={label}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm"
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
