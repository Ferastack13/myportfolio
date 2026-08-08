"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ServicesPageContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Services I <span className="text-gradient">Offer</span>
          </>
        }
        description="Comprehensive digital solutions tailored to your needs — from SaaS engineering and AI integrations to CRM platforms and workflow automation."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="glass-panel rounded-2xl p-6 text-left"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fade}
                transition={{ delay: i * 0.05 }}
                whileHover={reduce ? undefined : { y: -4 }}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-sm font-bold text-blue-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass-panel mt-14 rounded-2xl p-8 text-center sm:p-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
          >
            <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white">
              Need something custom?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-[var(--muted)]">
              Every engagement starts with understanding your goals, constraints, and timeline.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-6 inline-flex rounded-full px-8 py-3 text-sm font-semibold"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
