"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { SocialLinks } from "@/components/shared/SocialLinks";

const ContactForm = dynamic(
  () => import("@/components/shared/ContactForm").then((m) => m.ContactForm),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto mt-8 h-48 max-w-xl animate-pulse rounded-xl border border-white/10 bg-white/[0.03]" />
    ),
  },
);

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

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-[var(--muted-2)]">
                Or reach me directly
              </p>
              <SocialLinks
                className="mt-5"
                linkClassName="hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:text-blue-300"
              />
            </div>

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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
