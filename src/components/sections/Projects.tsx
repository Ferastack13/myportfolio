"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projectsWithMocks as projects } from "@/lib/site";
import { MockDashboard } from "@/components/ui/MockDashboard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const reduce = useReducedMotion();
  return (
    <section
      id="work"
      className="relative z-10 scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Case-study depth — the kind of work that stands up in diligence."
          subtitle="Each build pairs product craft with systems rigor: auth models, data lifecycles, observability, and operational workflows that teams live in daily."
        />

        <ul className="mt-14 space-y-16 lg:space-y-24">
          {projects.map((p, index) => (
            <li key={p.slug}>
              <motion.article
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
              >
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/15 via-transparent to-violet-500/15 blur-2xl" />
                  <MockDashboard variant={p.mockVariant} />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                    {p.tags.slice(0, 3).join(" · ")}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                    {p.summary}
                  </p>
                  <p className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm font-medium text-emerald-200/90">
                    Impact: {p.impact}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-cyan-400/35"
                    >
                      GitHub
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 text-sm font-bold text-slate-950 transition hover:brightness-110"
                    >
                      Live demo
                    </a>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
