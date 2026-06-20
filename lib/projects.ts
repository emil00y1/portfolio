export interface CaseStudyItem {
  title: string;
  body: string;
}

export interface CaseStudy {
  /** The problem space and constraints going in. */
  challenges: CaseStudyItem[];
  /** What was actually designed and built to solve it. */
  whatIBuilt: CaseStudyItem[];
  /** Outcomes and the value created for the client/users. */
  value: CaseStudyItem[];
}

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
  /** Long-form case study content for the detail page. Placeholder copy — refine later. */
  caseStudy: CaseStudy;
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
    caseStudy: {
      challenges: [
        {
          title: "Publishing at a pace humans can't match",
          body: "Real estate news moves daily, but a one-person editorial team can't keep up with the volume the market expects. The core challenge was producing accurate, well-structured property content continuously without a newsroom behind it.",
        },
        {
          title: "Trustworthy automation",
          body: "Autonomous AI generation is only useful if the output is reliable. The system had to pull live property data, structure it correctly, and publish without introducing errors that would erode reader trust.",
        },
      ],
      whatIBuilt: [
        {
          title: "An autonomous content pipeline",
          body: "AI agents that ingest data from external property APIs, draft and structure articles, and publish them on a schedule — all running as background jobs through Trigger.dev with no manual step in the loop.",
        },
        {
          title: "An editor-friendly CMS and paywall",
          body: "A workflow non-technical editors can use to review and publish without developer involvement, plus a subscription paywall and Mailgun-driven email automation for reader retention.",
        },
      ],
      value: [
        {
          title: "Up to 5 articles published daily — fully automatically",
          body: "The platform publishes up to five articles every day without a single manual step. 100% autonomous end-to-end, from data ingestion to live publication.",
        },
        {
          title: "A full platform shipped solo",
          body: "From database schema to browser, the entire product was designed and built by one developer — proving how far a single person can go with the right AI tooling and architecture.",
        },
      ],
    },
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
    caseStudy: {
      challenges: [
        {
          title: "A decade-old WordPress site that had grown unmanageable",
          body: "The existing site was built on a non-intuitive template loaded with plugins. Dead pages that should have been removed years ago were still live, and the content was difficult to edit without breaking something.",
        },
        {
          title: "~65% of visitors arrive on mobile — and the old site ignored them",
          body: "Responsiveness was an afterthought on the original site. With roughly 2,000 monthly visitors on mobile devices, a broken mobile experience was directly costing the venue conversions.",
        },
      ],
      whatIBuilt: [
        {
          title: "A full ground-up rebuild, solo",
          body: "Replaced the WordPress template with a custom Next.js and Sanity CMS site — clean architecture, no plugin debt, structured content the team can actually edit themselves.",
        },
        {
          title: "Mobile-first layout built around the real numbers",
          body: "Every layout decision was made with the 65% mobile majority in mind. Improved load times, responsive design throughout, and a guest-facing experience optimised to drive conversions.",
        },
      ],
      value: [
        {
          title: "A digital front door that reflects the venue",
          body: "Faster load times, a clean structure, and a guest experience whose polish matches the quality of the restaurant and hotel itself.",
        },
        {
          title: "A team that can own their own content",
          body: "With Sanity CMS in place, the venue no longer needs a developer to update menus, events, or availability. The site evolves as the business does.",
        },
      ],
    },
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
    caseStudy: {
      challenges: [
        {
          title: "Real problems, under NDA",
          body: "These engagements span several industries and are covered by confidentiality agreements. The shared thread: businesses with manual, repetitive workflows that were slowing teams down and were ripe for automation.",
        },
        {
          title: "Fit into systems that already exist",
          body: "Most of this work meant integrating with established tools and processes rather than greenfield builds — the solution had to slot into how each business already operated.",
        },
      ],
      whatIBuilt: [
        {
          title: "LLM-powered automation",
          body: "Document-processing pipelines, automated reporting dashboards, and custom CRM integrations — ranging from rapid prototypes to full production systems, usually as sole developer or lead.",
        },
        {
          title: "Maintainable by design",
          body: "Everything was built with handoff in mind: clear structure and documentation so each client's team can own and extend the work after delivery.",
        },
      ],
      value: [
        {
          title: "Time given back to teams",
          body: "By automating the repetitive parts, these tools free people to spend their time on work that actually needs human judgement.",
        },
        {
          title: "Proven across industries",
          body: "A track record of shipping AI and automation that holds up in production across very different business contexts.",
        },
      ],
    },
  },
];
