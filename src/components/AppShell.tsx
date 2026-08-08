"use client";

import { CursorGlow } from "@/components/providers/CursorGlow";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { PageLoader } from "@/components/providers/PageLoader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <FloatingParticles />
      <CursorGlow />
      <PageLoader />
      {children}
    </SmoothScroll>
  );
}
