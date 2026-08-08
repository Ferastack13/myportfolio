"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const { error } = await supabase.from("contacts").insert({
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      message: fd.get("message") as string,
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
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
