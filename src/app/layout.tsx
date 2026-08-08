import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const metadataBase = new URL(site.url);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.brand} · ${site.title}`,
    template: `%s · ${site.brand}`,
  },
  description: site.tagline,
  keywords: [
    "FeraStack",
    "senior full stack developer",
    "SaaS engineering",
    "AI integrations",
    "CRM development",
    "workflow automation",
    "enterprise web applications",
  ],
  authors: [{ name: site.brand, url: site.url }],
  openGraph: {
    title: `${site.brand} · ${site.title}`,
    description: site.tagline,
    url: site.url,
    siteName: site.brand,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} · ${site.title}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  url: site.url,
  description: site.tagline,
  areaServed: "Worldwide",
  serviceType: [
    "Full stack development",
    "SaaS engineering",
    "AI system integration",
    "CRM and dashboard platforms",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppShell>
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
        </AppShell>
      </body>
    </html>
  );
}
