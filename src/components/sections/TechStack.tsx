"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SiDocker,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandAws } from "react-icons/tb";
import { techStack } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  ts: SiTypescript,
  mongo: SiMongodb,
  pg: SiPostgresql,
  firebase: SiFirebase,
  supabase: SiSupabase,
  tailwind: SiTailwindcss,
  docker: SiDocker,
  aws: TbBrandAws,
  openai: SiOpenai,
  stripe: SiStripe,
  rest: TbApi,
  gql: SiGraphql,
} as const;

export function TechStack() {
  const reduce = useReducedMotion();
  return (
    <section
      id="stack"
      className="relative z-10 scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 h-64 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title="Modern defaults — boring where it buys safety, cutting‑edge where it buys leverage."
          subtitle="Typed end-to-end, observable pipelines, and infra that survives traffic spikes and auditor questions alike."
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techStack.map((t, i) => {
            const Icon = iconMap[t.icon as keyof typeof iconMap];
            return (
              <motion.li
                key={t.name}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.03 * i, duration: 0.4 }}
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, boxShadow: "0 0 32px rgba(34,211,238,0.12)" }
                }
                className="glass-panel group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-colors hover:border-cyan-400/25"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-2xl text-cyan-200/90 transition group-hover:text-white">
                  <Icon aria-hidden />
                </span>
                <span className="text-sm font-semibold text-slate-200">{t.name}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
