"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentHint, setSentHint] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`FeraStack inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSentHint(true);
    window.setTimeout(() => setSentHint(false), 8000);
  }

  return (
    <section id="contact" className="relative z-10 scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="If it is ambitious, technical, and needs to land — we should talk."
          subtitle="Share context on your product, constraints, and timeline. You will get a direct, senior-level response — no handoffs to a bench team."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.form
            onSubmit={onSubmit}
            className="glass-panel space-y-5 rounded-2xl p-6 sm:p-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-300">
                Name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 transition focus:ring-2"
                  placeholder="Alex Rivera"
                  autoComplete="name"
                />
              </label>
              <label className="block text-sm font-medium text-slate-300">
                Work email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 transition focus:ring-2"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-300">
              What are we building?
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 transition focus:ring-2"
                placeholder="Product stage, stack, deadlines, success metrics…"
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 text-sm font-bold text-slate-950 transition hover:brightness-110"
              >
                Send message
              </button>
              {sentHint ? (
                <p className="text-xs text-emerald-300/90">
                  Your mail client should open — if it does not, email {site.email}{" "}
                  directly.
                </p>
              ) : (
                <p className="text-xs text-[var(--muted-2)]">
                  Submits via your default mail client (mailto).
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            className="space-y-6"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300/80">
                Direct lines
              </p>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <span className="text-[var(--muted-2)]">Email</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block font-medium text-white underline-offset-4 hover:text-cyan-200 hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-[var(--muted-2)]">GitHub</span>
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium text-white underline-offset-4 hover:text-cyan-200 hover:underline"
                  >
                    {site.social.github.replace("https://", "")}
                  </a>
                </li>
                <li>
                  <span className="text-[var(--muted-2)]">LinkedIn</span>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium text-white underline-offset-4 hover:text-cyan-200 hover:underline"
                  >
                    Company profile
                  </a>
                </li>
                <li>
                  <span className="text-[var(--muted-2)]">WhatsApp</span>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium text-white underline-offset-4 hover:text-cyan-200 hover:underline"
                  >
                    Message on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-cyan-400/25 bg-cyan-500/[0.04] p-6 text-sm leading-relaxed text-[var(--muted)]">
              <strong className="text-white">Ideal fit:</strong> funded startups,
              growth-stage SaaS, and enterprise product teams modernizing revenue
              systems — especially where AI, automation, and compliance intersect.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
