/** FeraStack — portfolio content (enterprise / SaaS focus only) */

export const heroHeadlines = [
  "Engineering Scalable Digital Systems",
  "Senior Full Stack Engineer",
  "Building SaaS, AI & Automation Platforms",
  "Modern Web Systems Architect",
] as const;

export const heroRole = "Full Stack Developer" as const;

export const heroSubtitle =
  "AI-Powered Web Solutions | SaaS Engineering | Enterprise Systems" as const;

export const heroDescription =
  "Crafting cutting-edge web applications with AI integration, seamless automation, and stunning user experiences. From concept to deployment, I build digital solutions that drive results." as const;

export const site = {
  brand: "FeraStack",
  title: "Senior Full Stack Engineer",
  tagline:
    "Engineering scalable digital systems — SaaS platforms, AI integrations, automation, and enterprise-grade web applications.",
  taglines: heroHeadlines,
  heroRole,
  heroSubtitle,
  heroDescription,
  email: "hello@ferastack.dev",
  whatsapp: "https://wa.me/15551234567",
  location: "Available Worldwide · Remote-first",
  url: "https://ferastack.dev",
  social: {
    github: "https://github.com/ferastack",
    linkedin: "https://www.linkedin.com/in/ferastack",
    twitter: "https://twitter.com/ferastack",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const marqueeSkills = [
  "SaaS Engineering",
  "AI Integrations",
  "CRM Platforms",
  "Workflow Automation",
  "API Engineering",
  "Dashboard Systems",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
] as const;

/** Alias for legacy imports */
export const marqueeStack = marqueeSkills;

export const highlights = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "5+", label: "Years Experience" },
] as const;

export const expertise = [
  "Senior Full Stack Development",
  "SaaS & Multi-tenant Architecture",
  "AI System Integration",
  "CRM & Dashboard Platforms",
  "Workflow Automation",
  "API & Backend Engineering",
] as const;

/** Legacy alias used by older pages/components */
export const heroExpertise = expertise;

export const techStack = [
  { name: "React", icon: "react" as const },
  { name: "Next.js", icon: "next" as const },
  { name: "Node.js", icon: "node" as const },
  { name: "TypeScript", icon: "ts" as const },
  { name: "Supabase", icon: "supabase" as const },
  { name: "PostgreSQL", icon: "pg" as const },
  { name: "MongoDB", icon: "mongo" as const },
  { name: "Firebase", icon: "firebase" as const },
  { name: "OpenAI", icon: "openai" as const },
  { name: "Tailwind", icon: "tailwind" as const },
  { name: "Docker", icon: "docker" as const },
  { name: "AWS", icon: "aws" as const },
  { name: "Stripe", icon: "stripe" as const },
  { name: "GraphQL", icon: "gql" as const },
  { name: "REST APIs", icon: "rest" as const },
] as const;

export const services = [
  {
    title: "SaaS Engineering",
    description:
      "Multi-tenant platforms with subscription billing, RBAC, analytics, and infrastructure built to scale from MVP to enterprise.",
  },
  {
    title: "AI Integrations",
    description:
      "Production AI pipelines — assistants, automation, embeddings, and intelligent workflows integrated into your product stack.",
  },
  {
    title: "CRM & Dashboard Systems",
    description:
      "Revenue-critical CRMs and executive dashboards with real-time data, role-based access, and audit-ready architecture.",
  },
  {
    title: "Workflow Automation",
    description:
      "Visual automation engines connecting APIs, webhooks, and business logic to eliminate manual ops at scale.",
  },
  {
    title: "API Engineering",
    description:
      "REST and GraphQL APIs designed for performance, security, versioning, and seamless third-party integrations.",
  },
  {
    title: "Backend Systems",
    description:
      "Robust server-side architecture — databases, queues, caching, observability, and cloud-native deployment.",
  },
] as const;

export const projects = [
  {
    slug: "ai-crm-platform",
    name: "AI CRM Platform",
    problem:
      "Sales teams drowning in manual follow-ups and fragmented customer data across tools.",
    summary:
      "Enterprise CRM with AI lead scoring, pipeline automation, and unified customer intelligence.",
    impact: "Reduced sales cycle time by 40% and increased qualified conversions by 28%.",
    features: [
      "AI-powered lead scoring & prioritization",
      "Automated pipeline workflows",
      "Real-time analytics dashboard",
      "Multi-tenant RBAC architecture",
    ],
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
    variant: "crm" as const,
    github: "https://github.com/ferastack",
    live: "#",
  },
  {
    slug: "saas-analytics-dashboard",
    name: "SaaS Analytics Dashboard",
    problem:
      "Leadership lacked real-time visibility into product metrics and revenue performance.",
    summary:
      "Executive analytics platform with custom charts, automated reporting, and multi-tenant data isolation.",
    impact: "Board-ready metrics delivered 4× faster than legacy BI workflows.",
    features: [
      "Real-time KPI visualization",
      "Automated PDF/CSV reporting",
      "SSO & enterprise RBAC",
      "Custom metric builder",
    ],
    tags: ["React", "Node.js", "AWS", "GraphQL"],
    variant: "analytics" as const,
    github: "https://github.com/ferastack",
    live: "#",
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation System",
    problem:
      "Operations teams spending hours on repetitive cross-app tasks and manual data sync.",
    summary:
      "Visual workflow builder connecting 50+ services with triggers, conditions, and retry logic.",
    impact: "Cut manual operations workload by 60% across three enterprise deployments.",
    features: [
      "Drag-and-drop workflow designer",
      "Webhook & schedule triggers",
      "Execution logs & monitoring",
      "Enterprise connector library",
    ],
    tags: ["Node.js", "Redis", "PostgreSQL", "Docker"],
    variant: "workflow" as const,
    github: "https://github.com/ferastack",
    live: "#",
  },
  {
    slug: "real-estate-crm",
    name: "Real Estate CRM",
    problem:
      "Brokerages managing listings, leads, and closings across disconnected spreadsheets.",
    summary:
      "Full-featured real estate CRM with listing management, lead routing, and transaction pipelines.",
    impact: "Centralized operations for 200+ agents with 3× faster deal tracking.",
    features: [
      "Listing & lead management",
      "Automated lead assignment",
      "Document & transaction tracking",
      "Mobile-responsive dashboards",
    ],
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    variant: "crm" as const,
    github: "https://github.com/ferastack",
    live: "#",
  },
  {
    slug: "business-management",
    name: "Business Management System",
    problem:
      "Growing companies outgrowing spreadsheets for inventory, orders, and team coordination.",
    summary:
      "Unified operations platform — inventory, orders, team workflows, and financial snapshots in one system.",
    impact: "Replaced 5 legacy tools; ops overhead reduced by 45%.",
    features: [
      "Inventory & order management",
      "Team task orchestration",
      "Financial snapshot dashboards",
      "Role-based permissions",
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    variant: "fintech" as const,
    github: "https://github.com/ferastack",
    live: "#",
  },
  {
    slug: "ai-support-platform",
    name: "AI Support Ticket Platform",
    problem:
      "Support teams overwhelmed by ticket volume with slow first-response times.",
    summary:
      "AI-assisted ticketing with smart routing, suggested replies, and SLA-aware escalation workflows.",
    impact: "First-response time improved by 55%; resolution rate up 32%.",
    features: [
      "AI ticket classification & routing",
      "Suggested reply generation",
      "SLA tracking & escalation",
      "Agent performance analytics",
    ],
    tags: ["Next.js", "OpenAI", "Supabase", "TypeScript"],
    variant: "analytics" as const,
    github: "https://github.com/ferastack",
    live: "#",
  },
  {
    slug: "enterprise-dashboard",
    name: "Enterprise Dashboard",
    problem:
      "Enterprise clients needed a single pane of glass across disparate operational systems.",
    summary:
      "Customizable enterprise command center with widget system, SSO, and compliance-grade audit logs.",
    impact: "Unified 12 data sources into one executive view for Fortune 500 client.",
    features: [
      "Modular widget dashboard",
      "SSO & SAML integration",
      "Audit logging & compliance",
      "Real-time data federation",
    ],
    tags: ["React", "GraphQL", "AWS", "Docker"],
    variant: "fintech" as const,
    github: "https://github.com/ferastack",
    live: "#",
  },
] as const;

/** Projects with mockVariant alias for MockDashboard components */
export const projectsWithMocks = projects.map((p) => ({
  ...p,
  mockVariant: p.variant,
}));

export const processSteps = [
  { phase: "Discovery", detail: "Deep-dive into goals, users, constraints, and success metrics." },
  { phase: "Planning", detail: "Roadmaps, milestones, and clear scope with stakeholder alignment." },
  { phase: "Architecture", detail: "System design, data models, security, and scalability decisions." },
  { phase: "Development", detail: "Iterative delivery with demos, tests, and production-grade code." },
  { phase: "Optimization", detail: "Performance tuning, accessibility, and observability hardening." },
  { phase: "Deployment", detail: "CI/CD, zero-downtime releases, monitoring, and launch support." },
  { phase: "Scaling", detail: "Post-launch iteration, analytics, and infrastructure growth." },
] as const;

export const testimonials = [
  {
    quote:
      "FeraStack delivered our SaaS platform on time with architecture that scaled effortlessly through our Series A growth.",
    name: "Alex Rivera",
    role: "CTO",
    company: "ScaleFlow AI",
  },
  {
    quote:
      "The CRM rebuild transformed our sales ops. Clean code, clear communication, and measurable business impact.",
    name: "Sarah Mitchell",
    role: "VP of Operations",
    company: "Nexus Ventures",
  },
] as const;
