"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

type ProfilePhotoProps = {
  className?: string;
  priority?: boolean;
};

export function ProfilePhoto({ className = "", priority = false }: ProfilePhotoProps) {
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
      alt={`${site.contactName} — ${site.heroRole}`}
      fill
      sizes="(max-width: 640px) 288px, 320px"
      className={`object-cover object-top ${className}`}
      priority={priority}
      unoptimized
      onError={() => setErr(true)}
    />
  );
}
