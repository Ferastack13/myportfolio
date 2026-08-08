"use client";

type Variant = "crm" | "inventory" | "analytics" | "workflow" | "fintech";

export function MockDashboard({
  variant,
  className = "",
}: {
  variant: Variant;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="relative flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-auto font-mono text-[9px] text-slate-500">
          {variant}.ferastack.app
        </span>
      </div>
      <div className="grid h-[calc(100%-2rem)] grid-cols-12 gap-2 p-3">
        <div className="col-span-4 flex flex-col gap-2">
          <div className="h-2 w-[66%] rounded bg-white/10" />
          <div className="flex-1 rounded-lg bg-white/5 p-2">
            <div className="space-y-2">
              {[40, 65, 35, 80, 55].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-500/30 to-violet-500/20" />
                  <div
                    className="h-2 rounded bg-white/10"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            {["ARR", "Activation", "NPS"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/5 p-2"
              >
                <p className="text-[8px] uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1 font-mono text-sm text-cyan-300/90">
                  {label === "ARR"
                    ? "$4.2M"
                    : label === "Activation"
                      ? "61%"
                      : "72"}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 gap-2">
            <div className="flex flex-[2] flex-col justify-end rounded-lg border border-white/10 bg-gradient-to-t from-cyan-500/10 to-transparent p-2">
              <div className="mt-auto flex h-24 items-end justify-between gap-1 px-1">
                {[35, 55, 40, 70, 50, 80, 65, 90, 75, 60, 85, 95].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t bg-gradient-to-t from-cyan-500/60 to-violet-500/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-full rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-[8px] text-slate-500">API health</p>
                <p className="mt-2 font-mono text-[10px] text-emerald-400/90">
                  200 OK · p99 118ms
                </p>
                <div className="mt-3 space-y-1.5">
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-[88%] rounded-full bg-emerald-400/70" />
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-cyan-400/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
    </div>
  );
}
