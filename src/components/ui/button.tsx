"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:brightness-110",
        secondary:
          "border border-white/15 bg-white/[0.04] text-white hover:border-cyan-400/40 hover:bg-white/[0.08]",
        ghost: "text-[var(--muted)] hover:text-white hover:bg-white/5",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-10 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = HTMLMotionProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    magnetic?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  magnetic = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={magnetic ? { scale: 1.03 } : undefined}
      whileTap={magnetic ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  href,
  children,
}: {
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
