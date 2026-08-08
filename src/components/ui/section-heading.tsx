"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      className={cn(center && "text-center", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400/90">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed text-[var(--muted)]", center && "mx-auto max-w-2xl")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
