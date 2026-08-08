"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/routes";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-[100] border-b border-white/[0.06] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-xl"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8 lg:h-[4.25rem]">
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-outfit)] text-lg font-bold tracking-tight text-white transition hover:text-[var(--blue-light)]"
        >
          {site.brand}
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/90">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Available for Freelance Projects
          </span>
        </div>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-lg px-3.5 py-2 text-sm font-medium text-white"
                    : "rounded-lg px-3.5 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <details className="relative ml-auto lg:hidden">
          <summary className="list-none cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-2 shadow-2xl backdrop-blur-xl">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </motion.header>
  );
}
