"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { expertise, highlights } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { ProfilePhoto } from "@/components/shared/ProfilePhoto";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { TerminalBlock } from "@/components/ui/TerminalBlock";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutPageContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        eyebrow="About Me"
        title={
          <>
            Building the Future <span className="text-gradient">of Web</span>
          </>
        }
        description="Senior full stack engineer specializing in SaaS, AI integrations, CRM platforms, and enterprise-grade systems that scale."
      />

      <section className="section-pad border-b border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <motion.div
            className="relative mx-auto w-fit"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
          >
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-full border-2 border-blue-500/25 shadow-[0_0_60px_rgba(59,130,246,0.15)] sm:h-72 sm:w-72">
                <ProfilePhoto />
              </div>
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`absolute glass-panel rounded-xl px-4 py-2.5 ${
                    i === 0
                      ? "-left-4 bottom-6"
                      : i === 1
                        ? "-right-4 bottom-14"
                        : "-right-2 top-2"
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
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-base leading-relaxed text-[var(--muted)]">
              I&apos;m a senior full stack engineer building modern web applications from
              frontend to backend. Specializing in React, TypeScript, Node.js, and cloud
              platforms, I create complete solutions that are fast, responsive, and built to
              scale.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
              I partner with founders and engineering leaders who need a calm, senior presence
              across discovery, architecture, delivery, and the hard weeks after launch — with
              explicit trade-offs and documentation your team can actually use.
            </p>
            <ul className="mt-8 space-y-3">
              {expertise.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Let&apos;s work together →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <CodeWindow />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              transition={{ delay: 0.08 }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <TerminalBlock />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
