import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Services offered by ${site.brand} — SaaS engineering, AI integrations, CRM, automation, and full stack development.`,
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
