import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600",
        "focus:border-cyan-400/40 focus:shadow-[0_0_24px_rgba(34,211,238,0.08)] focus:ring-2 focus:ring-cyan-400/20",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600",
        "focus:border-cyan-400/40 focus:shadow-[0_0_24px_rgba(34,211,238,0.08)] focus:ring-2 focus:ring-cyan-400/20",
        className
      )}
      {...props}
    />
  );
}
