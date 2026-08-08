"use client";

import { useState } from "react";
import { contactLinks } from "@/lib/site";
import { openMailto } from "@/lib/mailto";

export function SocialLinks({ className = "", variant = "cards" }: SocialLinksProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyText(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  function handleClick(item: (typeof contactLinks)[number]) {
    if (item.id === "email") {
      openMailto(item.href);
    }
  }

  if (variant === "list") {
    return (
      <ul className={`space-y-3 ${className}`}>
        {contactLinks.map((item) => (
          <li key={item.id} className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-2)]">
                {item.label}
              </span>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 block truncate text-sm font-medium text-white transition hover:text-[var(--blue-light)]"
                >
                  {item.display}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => handleClick(item)}
                  className="mt-0.5 block truncate text-left text-sm font-medium text-white transition hover:text-[var(--blue-light)]"
                >
                  {item.display}
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => copyText(item.id, item.copyText)}
              className="shrink-0 rounded-lg border border-white/10 px-2.5 py-1 text-[11px] font-medium text-[var(--muted)] transition hover:border-blue-500/30 hover:text-blue-300"
              aria-label={`Copy ${item.label}`}
            >
              {copiedId === item.id ? "Copied" : "Copy"}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {contactLinks.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
        >
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted-2)]">
              {item.label}
            </p>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 block truncate text-sm font-medium text-white transition hover:text-[var(--blue-light)]"
              >
                {item.display}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => handleClick(item)}
                className="mt-0.5 block w-full truncate text-left text-sm font-medium text-white transition hover:text-[var(--blue-light)]"
              >
                {item.display}
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => copyText(item.id, item.copyText)}
            className="shrink-0 rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] font-medium text-[var(--muted)] transition hover:border-blue-500/30 hover:text-blue-300"
            aria-label={`Copy ${item.label}`}
          >
            {copiedId === item.id ? "Copied" : "Copy"}
          </button>
        </div>
      ))}
    </div>
  );
}
