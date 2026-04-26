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
    eyebrow: "01 — Real Estate Media",
    year: "2025",
    title: "EstateNews",
    cat: "Media platform",
    desc: "A modern real estate news and media platform serving curated property market coverage to Danish audiences. Built to handle high editorial volume with a clean reading experience and strong SEO fundamentals.",
    role: "Lead developer — full stack. Designed and built the entire platform from scratch, including data ingestion from external APIs, the editorial CMS workflow, and the public-facing site.",
    highlights:
      "Server-side rendering for fast load times and full search indexability. Custom API integrations pulling live property data. Designed for non-technical editors to publish without developer involvement.",
    tags: ["Next.js", "TypeScript", "CMS", "API Integration", "SEO", "PostgreSQL"],
    link: "https://estatenews.dk",
    linkLabel: "Visit estatenews.dk ↗",
    imgClass: "ph-estatenews",
  },
  {
    id: "allegade",
    eyebrow: "02 — Property Platform",
    year: "2026",
    title: "Allegade 10",
    cat: "Property platform",
    desc: "An interactive platform for Allegade 10 — making it easy for prospective buyers and renters to explore the property, its units, and availability in a clear, modern interface. Launching soon.",
    role: "Full stack developer. Responsible for architecture, backend API, interactive map/floor plan integration, and the full frontend experience.",
    highlights:
      "Real-time availability queries. Interactive floor plan viewer. Mobile-first design with smooth transitions throughout.",
    tags: ["React", "Node.js", "Maps API", "PostgreSQL", "Framer Motion"],
    link: null,
    linkLabel: "Launching soon",
    imgClass: "ph-allegade",
  },
  {
    id: "internal",
    eyebrow: "03+ — Internal & Client Work",
    year: "2024 – 2026",
    title: "Internal Projects",
    cat: "Various",
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
