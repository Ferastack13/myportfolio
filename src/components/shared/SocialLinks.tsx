import { contactLinks } from "@/lib/site";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
  variant?: "inline" | "list";
};

export function SocialLinks({
  className = "",
  linkClassName = "text-[var(--muted)] transition hover:text-[var(--blue-light)]",
  variant = "inline",
}: SocialLinksProps) {
  if (variant === "list") {
    return (
      <ul className={`space-y-2 ${className}`}>
        {contactLinks.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={`text-sm ${linkClassName}`}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}: {item.display}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${className}`}>
      {contactLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium ${linkClassName}`}
          {...(item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span className="text-[var(--muted-2)]">{item.label}</span>
          <span className="text-white">{item.display}</span>
        </a>
      ))}
    </div>
  );
}
