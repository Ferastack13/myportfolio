"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ContactPageContent() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Have a Project in <span className="text-gradient">Mind?</span>
          </>
        }
        description="I'm always excited to take on new challenges and bring innovative ideas to life. Share your project details and I'll get back to you quickly."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            className="glass-panel rounded-3xl p-8 sm:p-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
          >
            <ContactForm />
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for Freelance
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Quick Response Time
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Global Collaboration
              </span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a
                href={site.social.github}
                className="text-[var(--muted)] hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={site.social.linkedin}
                className="text-[var(--muted)] hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href={`mailto:${site.email}`} className="text-[var(--muted)] hover:text-blue-400">
                Email
              </a>
              <a
                href={site.whatsapp}
                className="text-[var(--muted)] hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
