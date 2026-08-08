import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.brand} for your next SaaS, AI, or enterprise web project.`,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
