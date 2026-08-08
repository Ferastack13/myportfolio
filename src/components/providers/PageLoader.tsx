"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function PageLoader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(() => !reduce);

  useEffect(() => {
    if (reduce) {
      const id = window.requestAnimationFrame(() => {
        setVisible(false);
      });
      return () => window.cancelAnimationFrame(id);
    }
    const t = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative h-14 w-14"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="absolute inset-0 rounded-2xl shimmer-ring opacity-80" />
            <span className="absolute inset-[2px] rounded-2xl bg-[var(--bg-elevated)]" />
            <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-outfit)] text-lg font-bold tracking-tight text-gradient">
              FS
            </span>
          </motion.div>
          <motion.p
            className="mt-6 font-[family-name:var(--font-outfit)] text-sm font-semibold tracking-[0.35em] text-[var(--muted)]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {site.brand.toUpperCase()}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
