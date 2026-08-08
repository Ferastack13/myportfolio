"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type InsertResult = { error: { message: string } | null };

async function submitContact(
  name: string,
  email: string,
  message: string,
): Promise<InsertResult | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url?.trim() || !key?.trim()) {
    return null;
  }

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url, key);

  return supabase.from("contacts").insert({ name, email, message });
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const message = fd.get("message") as string;

    try {
      const result = await submitContact(name, email, message);

      if (!result) {
        const subject = encodeURIComponent(`FeraStack inquiry from ${name || "website"}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
        return;
      }

      if (result.error) {
        setStatus("error");
        return;
      }

      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell me about your project..."
        className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full rounded-xl py-3.5 text-sm font-semibold disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="text-center text-sm text-emerald-400">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Try emailing directly.
        </p>
      )}
    </form>
  );
}
