"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

export function ProfilePhoto({ className = "" }: { className?: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 ${className}`}
      >
        <span className="font-[family-name:var(--font-outfit)] text-5xl font-bold brand-glow">
          FS
        </span>
      </div>
    );
  }
  return (
    <Image
      src="/images/ferastack-profile.png"
      alt={site.brand}
      width={320}
      height={320}
      className={`h-full w-full object-cover ${className}`}
      priority
      onError={() => setErr(true)}
    />
  );
}
