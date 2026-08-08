import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.brand} — senior full stack engineer building SaaS, AI, and enterprise web systems.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
