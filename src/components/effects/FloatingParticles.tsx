"use client";

import { useMemo } from "react";

export function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        top: `${(i * 23) % 100}%`,
        delay: `${(i % 8) * 0.6}s`,
        duration: `${10 + (i % 7)}s`,
        size: 1 + (i % 3),
      })),
    [],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="float-particle absolute rounded-full bg-cyan-400/25 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
