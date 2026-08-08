"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { MockDashboard } from "@/components/ui/MockDashboard";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function WorkPageContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Featured <span className="text-gradient">Projects</span>
          </>
        }
        description="SaaS platforms, AI integrations, CRM systems, and enterprise web applications — built for scale and real business outcomes."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.article
                key={p.slug}
                className="glass-panel overflow-hidden rounded-2xl text-left"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fade}
                transition={{ delay: i * 0.05 }}
                whileHover={reduce ? undefined : { y: -6 }}
              >
                <div className="overflow-hidden">
                  <MockDashboard variant={p.variant} className="rounded-none border-0" />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{p.summary}</p>
                  <p className="mt-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-xs text-emerald-200/90">
                    {p.impact}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-300/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
