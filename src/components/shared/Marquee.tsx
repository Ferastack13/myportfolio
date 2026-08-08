import { marqueeSkills } from "@/lib/site";

export function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills];
  return (
    <div className="overflow-hidden border-y border-white/[0.06] bg-[var(--bg-elevated)]">
      <div className="marquee-track flex w-max">
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-3 px-8 py-4 text-sm font-medium text-slate-500"
          >
            {label}
            <span className="text-blue-500/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
