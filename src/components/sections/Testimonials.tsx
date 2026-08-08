"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const reduce = useReducedMotion();
  return (
    <section
      id="testimonials"
      className="relative z-10 scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client voices"
          title="Trusted by leaders who ship under pressure."
          subtitle="Fictionalized testimonials inspired by the caliber of feedback senior engineers earn on mission-critical programs."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.company}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="glass-panel relative overflow-hidden rounded-2xl p-8"
            >
              <span className="absolute -right-6 -top-6 text-8xl font-serif leading-none text-white/[0.04]">
                “
              </span>
              <p className="relative text-base leading-relaxed text-slate-200">
                {t.quote}
              </p>
              <div className="relative mt-8 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-[var(--muted)]">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
