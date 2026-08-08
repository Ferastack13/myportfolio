"use client";

import { motion, useReducedMotion } from "framer-motion";
import { highlights, site } from "@/lib/site";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalBlock } from "@/components/ui/TerminalBlock";

export function About() {
  const reduce = useReducedMotion();
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Senior engineer mindset — product outcomes, not ticket counts."
          subtitle="FeraStack partners with founders and engineering leaders who need a calm, senior presence across the full stack: discovery, architecture, delivery, and the hard weeks after launch."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p>
              I specialize in <strong className="text-white">scalable SaaS</strong>,{" "}
              <strong className="text-white">AI-assisted workflows</strong>,{" "}
              <strong className="text-white">CRM &amp; dashboard systems</strong>, and{" "}
              <strong className="text-white">enterprise-grade web apps</strong> where
              reliability, security, and velocity all have to be true at once.
            </p>
            <p>
              Engagements are structured for clarity: explicit architecture decisions,
              measurable milestones, and documentation that helps your team onboard
              without reverse‑engineering the codebase.
            </p>
            <p className="text-sm text-[var(--muted-2)]">{site.location}</p>
          </motion.div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="glass-panel rounded-2xl p-5"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i, duration: 0.45 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-2)]">
                    {h.label}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
                    {h.value}
                  </p>
                </motion.div>
              ))}
            </div>
            <CodeWindow />
            <TerminalBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
