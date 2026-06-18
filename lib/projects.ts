export interface Project {
  id: string;
  eyebrow: string;
  year: string;
  title: string;
  cat: string;
  desc: string;
  role: string;
  highlights: string;
  tags: string[];
  link: string | null;
  linkLabel: string;
  linkHref?: string;
  imgClass: string;
}

export const projects: Project[] = [
  {
    id: "estatenews",
    eyebrow: "01 - Real Estate Media",
    year: "2025",
    title: "EstateNews",
    cat: "Automated News Platform",
    desc: "An AI-powered automated real estate news platform built entirely solo, from database to browser. AI agents generate, structure, and publish property market content autonomously. Includes a paywall, email automation, admin dashboard, and background job processing.",
    role: "Lead developer: full stack. Designed and built the entire platform from scratch, including data ingestion from external APIs, the editorial CMS workflow, and the public-facing site.",
    highlights:
      "Server-side rendering for fast load times and full search indexability. Custom API integrations pulling live property data. Designed for non-technical editors to publish without developer involvement.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Trigger.dev", "Mailgun", "SEO"],
    link: "https://estatenews.dk",
    linkLabel: "Visit estatenews.dk ↗",
    imgClass: "ph-estatenews",
  },
  {
    id: "allegade",
    eyebrow: "02 - Property Platform",
    year: "2026",
    title: "Allegade 10",
    cat: "Restaurant and Hotel",
    desc: "A full redesign of the website for Allégade 10, a historic restaurant and hotel in Frederiksberg, Copenhagen. Built with Next.js and Sanity CMS, with a focus on visual identity, editorial flexibility, and a clean guest-facing experience.",
    role: "Full stack developer. Responsible for architecture, backend API, interactive map/floor plan integration, and the full frontend experience.",
    highlights:
      "Real-time availability queries. Interactive floor plan viewer. Mobile-first design with smooth transitions throughout.",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
    link: "https://allegade10.dk",
    linkLabel: "Visit allegade10.dk ↗",
    imgClass: "ph-allegade",
  },
  {
    id: "internal",
    eyebrow: "03+ - Internal & Client Work",
    year: "2024 - 2026",
    title: "Internal Projects",
    cat: "Optimizing and automating internal tools",
    desc: "A range of tools, AI integrations, and client builds developed under NDA. These span internal business tooling, workflow automation, and customer-facing products across several industries.",
    role: "Sole developer or lead on most engagements. Ranged from rapid prototypes to full production systems.",
    highlights:
      "LLM-powered document processing pipelines. Automated reporting dashboards. Custom CRM integrations. All built with maintainability and handoff in mind.",
    tags: ["AI / LLM", "OpenAI API", "Automation", "Node.js", "React", "Internal tooling"],
    link: null,
    linkLabel: "Get in touch to learn more →",
    linkHref: "#contact",
    imgClass: "ph-internal",
  },
];
