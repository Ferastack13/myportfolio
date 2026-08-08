"use client";

import { motion, useReducedMotion } from "framer-motion";

const snippet = `// FeraStack — system contract
export const engagement = {
  brand: "FeraStack",
  scope: ["saas", "ai", "crm", "automation"],
  principles: [
    "typed_end_to_end",
    "observable_by_default",
    "boring_where_it_matters",
  ],
} satisfies SeniorEngineeringProfile;`;

export function CodeWindow() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="glass-panel relative overflow-hidden rounded-2xl"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-[11px] text-[var(--muted-2)]">
          contract.ts — readonly
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs">
        <code>{snippet}</code>
      </pre>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
    </motion.div>
  );
}
