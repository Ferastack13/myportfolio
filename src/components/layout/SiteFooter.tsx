import Link from "next/link";
import { mainNav } from "@/lib/routes";
import { contactLinks, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[var(--bg)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
            {site.brand}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            Senior full stack engineer building SaaS, AI integrations, and
            enterprise-grade web systems.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-2)]">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--blue-light)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-2)]">
            Connect
          </p>
          <ul className="mt-4 space-y-2">
            {contactLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--blue-light)]"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-5 text-center text-xs text-[var(--muted-2)]">
        © {year} {site.brand}. Built with passion and cutting-edge tech.
      </div>
    </footer>
  );
}
