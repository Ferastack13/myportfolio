"use client";

import { AppShell } from "@/components/AppShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function RootChrome({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <SiteHeader />
      <main className="relative z-10 flex min-h-[calc(100dvh-4.25rem)] flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
    </AppShell>
  );
}
