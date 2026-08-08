"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const codeSnippets = [
  "const api = await fetch('/v1/deploy');",
  "export default function App() {",
  "type User = { id: string; role: Role };",
  "await db.transaction(async (tx) => {",
  "if (status === 200) return data;",
  "import { useEffect } from 'react';",
  "docker compose up -d --build",
  "git push origin main --force-with-lease",
  "npm run build && npm run deploy",
  "SELECT * FROM users WHERE active = true;",
  "const [state, dispatch] = useReducer(reducer, init);",
  "pipeline.addStage('transform', fn);",
  "export async function POST(req: Request) {",
  "return NextResponse.json({ success: true });",
  "const schema = z.object({ email: z.string() });",
  ".env.production → loaded",
  "✓ Build passed — 0 errors",
  "async function* streamTokens(prompt) {",
  "kubectl apply -f deployment.yaml",
  "redis.set(`session:${id}`, token, 'EX', 3600);",
];

const binaryStrings = [
  "01001000 01100101 01101100",
  "10110010 11001010 01010101",
  "00101110 11110001 10010011",
  "11010100 00110110 01011001",
  "01110011 10001101 11100010",
  "10001011 01100111 00111100",
];

const techSymbols = [
  "{ }", "< />", "=>", "[ ]", "&&", "||", "??", "...", "#!", "$/", "::","@", ">>>",
  "fn()", "::new", "|>", "?.","...args",
];

export function TechBackground() {
  const reduce = useReducedMotion();

  const floatingCode = useMemo(
    () =>
      codeSnippets.map((text, i) => ({
        id: `code-${i}`,
        text,
        x: `${(i * 13 + 5) % 92}%`,
        y: `${(i * 19 + 8) % 88}%`,
        duration: 18 + (i % 12) * 2,
        delay: (i % 10) * 1.4,
        opacity: 0.04 + (i % 5) * 0.015,
        size: 10 + (i % 3),
      })),
    [],
  );

  const binary = useMemo(
    () =>
      binaryStrings.map((text, i) => ({
        id: `bin-${i}`,
        text,
        x: `${(i * 31 + 12) % 90}%`,
        y: `${(i * 41 + 5) % 85}%`,
        duration: 22 + i * 3,
        delay: i * 2.5,
      })),
    [],
  );

  const symbols = useMemo(
    () =>
      techSymbols.map((text, i) => ({
        id: `sym-${i}`,
        text,
        x: `${(i * 23 + 3) % 95}%`,
        y: `${(i * 17 + 10) % 90}%`,
        duration: 14 + (i % 8) * 2,
        delay: (i % 6) * 1.8,
        size: 12 + (i % 4) * 2,
      })),
    [],
  );

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Pulsing radial glow bursts */}
      <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] animate-pulse-slow rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] animate-pulse-slow2 rounded-full bg-violet-500/[0.06] blur-[100px]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow3 rounded-full bg-fuchsia-500/[0.05] blur-[90px]" />

      {/* Shining sweep */}
      <div className="absolute inset-0 animate-shine-sweep bg-[linear-gradient(105deg,transparent_40%,rgba(34,211,238,0.04)_45%,rgba(167,139,250,0.05)_50%,transparent_55%)] bg-[length:200%_100%]" />

      {/* Circuit lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M0 200 H120 V350 H280 V200 H420 V450 H600" stroke="url(#circuit-grad)" strokeWidth="1" fill="none" />
        <path d="M800 100 H650 V280 H500 V100 H350 V400 H200" stroke="url(#circuit-grad)" strokeWidth="1" fill="none" />
        <path d="M100 500 H300 V650 H500 V500 H700 V700 H900" stroke="url(#circuit-grad)" strokeWidth="1" fill="none" />
        <circle cx="120" cy="200" r="3" fill="var(--cyan)" className="animate-pulse" opacity="0.5" />
        <circle cx="280" cy="350" r="3" fill="var(--violet)" className="animate-pulse" opacity="0.5" />
        <circle cx="500" cy="280" r="3" fill="var(--cyan)" className="animate-pulse" opacity="0.5" />
        <circle cx="600" cy="450" r="3" fill="var(--fuchsia)" className="animate-pulse" opacity="0.5" />
        <circle cx="300" cy="650" r="3" fill="var(--cyan)" className="animate-pulse" opacity="0.5" />
      </svg>

      {/* Floating code snippets */}
      {floatingCode.map((item) => (
        <motion.span
          key={item.id}
          className="absolute whitespace-nowrap font-mono text-cyan-300/80"
          style={{
            left: item.x,
            top: item.y,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [item.opacity, item.opacity * 1.8, item.opacity],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.span>
      ))}

      {/* Binary streams */}
      {binary.map((item) => (
        <motion.span
          key={item.id}
          className="absolute font-mono text-[9px] tracking-widest text-emerald-400/[0.06]"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.04, 0.09, 0.04],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.span>
      ))}

      {/* Tech symbols */}
      {symbols.map((item) => (
        <motion.span
          key={item.id}
          className="absolute font-mono font-bold text-violet-300/[0.06]"
          style={{
            left: item.x,
            top: item.y,
            fontSize: `${item.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.span>
      ))}

      {/* Horizontal scan line */}
      <div className="absolute inset-x-0 h-px animate-scan-line bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </div>
  );
}
