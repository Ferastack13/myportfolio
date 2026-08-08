# FeraStack Portfolio

Production portfolio site for **FeraStack** — senior full stack engineer specializing in SaaS, AI integrations, CRM platforms, and enterprise web applications.

Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lenis.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

- `src/app/` — Next.js App Router pages
- `src/components/` — UI components and page sections
- `src/lib/site.ts` — Centralized site content and branding
- `public/images/` — Static assets

## Environment

Create `.env.local` with Supabase credentials for the contact form:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## License

© FeraStack. All rights reserved.
