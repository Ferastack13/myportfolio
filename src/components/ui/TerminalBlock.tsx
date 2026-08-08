"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { prompt: "ferastack", cmd: "deploy --env production --verify" },
  { out: "✓ Build passed (Next.js 16 · Turbopack)" },
  { out: "✓ Lighthouse perf 96 · a11y 100 · SEO 100" },
  { out: "✓ Canary 12% → 50% → 100% — error budget intact" },
  { prompt: "ferastack", cmd: "status --systems saas,crm,ai" },
  { out: "All systems nominal. p99 API latency 118ms." },
];

export function TerminalBlock() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="glass-panel overflow-hidden rounded-2xl font-mono text-[11px] sm:text-xs"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.08 }}
    >
      <div className="border-b border-white/10 bg-black/30 px-4 py-2 text-[var(--muted-2)]">
        zsh — ferastack-cli
      </div>
      <div className="space-y-2 p-4 text-slate-300">
        {lines.map((row, i) =>
          "cmd" in row ? (
            <p key={i}>
              <span className="text-emerald-400/90">➜</span>{" "}
              <span className="text-violet-300/90">{row.prompt}</span>{" "}
              <span className="text-slate-500">~</span>{" "}
              <span className="text-white">{row.cmd}</span>
            </p>
          ) : (
            <p key={i} className="text-cyan-200/80">
              {row.out}
            </p>
          ),
        )}
        <p className="flex items-center gap-1 pt-1 text-[var(--muted-2)]">
          <span className="text-emerald-400/90">➜</span>{" "}
          <span className="text-violet-300/90">ferastack</span>{" "}
          <span className="inline-block h-3 w-1.5 animate-pulse bg-cyan-400/80" />
        </p>
      </div>
    </motion.div>
  );
}
