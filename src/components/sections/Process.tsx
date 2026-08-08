"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const reduce = useReducedMotion();
  return (
    <section
      id="process"
      className="relative z-10 scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A delivery rhythm designed for real companies — not portfolio fiction."
          subtitle="Every phase has artifacts you can forward to investors, compliance, or your internal team. No black boxes."
        />

        <div className="relative mt-16 space-y-0 lg:mt-20" role="list">
          <div className="absolute left-[15px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/40 to-fuchsia-400/30 lg:block" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.phase}
              role="listitem"
              className="relative grid gap-4 pb-12 pl-10 lg:grid-cols-[180px_1fr] lg:gap-10 lg:pb-14 lg:pl-0"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.05 * i, duration: 0.45 }}
            >
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-[var(--bg)] font-mono text-xs font-bold text-cyan-200 lg:relative lg:left-auto lg:top-auto">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="glass-panel rounded-2xl p-6 lg:col-start-2">
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white">
                  {step.phase}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
