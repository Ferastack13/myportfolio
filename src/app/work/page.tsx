import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/WorkPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Featured projects by ${site.brand} — SaaS, AI integrations, CRM, and enterprise web applications.`,
};

export default function WorkPage() {
  return <WorkPageContent />;
}
