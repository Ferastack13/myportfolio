"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  const reduce = useReducedMotion();
  return (
    <section
      id="services"
      className="relative z-10 scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Engagement models that map to how serious teams actually ship."
          subtitle="From zero-to-one builds to rescue missions on critical revenue paths — scoped with explicit trade-offs and delivery you can plan around."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.04 * i, duration: 0.45 }}
              className="group glass-panel relative overflow-hidden rounded-2xl p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-indigo-500/15" />
              <h3 className="relative font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {s.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
