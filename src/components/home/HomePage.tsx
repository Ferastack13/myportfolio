"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { site, highlights } from "@/lib/site";
import { TechBackground } from "@/components/effects/TechBackground";
import { Marquee } from "@/components/shared/Marquee";

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const techIcons = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiSupabase, label: "Supabase" },
  { Icon: SiVercel, label: "Vercel" },
  { Icon: SiOpenai, label: "AI Tools" },
];

const exploreLinks = [
  {
    href: "/about",
    title: "About Me",
    description: "Background, expertise, and how I work with teams.",
  },
  {
    href: "/work",
    title: "Portfolio",
    description: "SaaS, AI, CRM, and enterprise projects with real impact.",
  },
  {
    href: "/services",
    title: "Services",
    description: "Full stack engineering, AI integrations, and automation.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Start a project or book a discovery call.",
  },
];

export function HomePage() {
  const reduce = useReducedMotion();

  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-20">
        <TechBackground />
        <div className="ambient-orb -left-32 top-0 h-[480px] w-[480px] bg-blue-600/20" />
        <div className="ambient-orb right-0 top-20 h-[420px] w-[420px] bg-indigo-600/15" aria-hidden />
        <div className="absolute inset-0 tech-grid opacity-50" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200/90 lg:hidden"
            initial="hidden"
            animate="show"
            variants={fade}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for Freelance Projects
          </motion.span>

          <motion.h1
            className="mt-8 font-[family-name:var(--font-outfit)] text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ delay: 0.05 }}
          >
            <span className="brand-glow block">{site.brand}</span>
            <span className="role-glow mt-2 block text-4xl sm:text-5xl lg:text-6xl">
              {site.heroRole}
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 text-sm text-[var(--muted)] sm:text-base"
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ delay: 0.1 }}
          >
            {site.heroSubtitle}
          </motion.p>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ delay: 0.15 }}
          >
            {site.heroDescription}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="btn-primary rounded-full px-8 py-3.5 text-sm font-semibold">
              Hire Me
            </Link>
            <Link href="/work" className="btn-ghost rounded-full px-8 py-3.5 text-sm font-semibold">
              View My Work
            </Link>
          </motion.div>
        </div>
      </section>

      <Marquee />

      <section className="border-b border-white/[0.06] py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techIcons.map(({ Icon, label }) => (
              <div
                key={label}
                className="glass-panel flex h-[72px] w-[72px] items-center justify-center rounded-xl text-blue-400 transition hover:border-blue-500/30 hover:text-blue-300"
                title={label}
              >
                <Icon className="h-8 w-8" aria-hidden />
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-12 sm:gap-20">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <p className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-white sm:text-4xl">
                  {h.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted-2)]">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-white sm:text-4xl">
              Explore the <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
              Each section has its own page — dive into what matters most to you.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {exploreLinks.map((item, i) => (
              <motion.div
                key={item.href}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fade}
                transition={{ delay: i * 0.06 }}
                whileHover={reduce ? undefined : { y: -4 }}
              >
                <Link
                  href={item.href}
                  className="glass-panel group block rounded-2xl p-6 transition"
                >
                  <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white group-hover:text-blue-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-400">
                    View page →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
