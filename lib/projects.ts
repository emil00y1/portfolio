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
  /** Long-form case study content for the detail page. */
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "estatenews",
    eyebrow: "01 - Real Estate Media",
    year: "2025",
    title: "EstateNews",
    cat: "Automated News Platform",
    desc: "An AI-powered real estate news platform built entirely solo. A pipeline of agents scrapes curated Danish sources, filters for relevance, rewrites content through an LLM, generates images, and publishes — all without a human in the loop. Built as both a commercial product and my bachelor project.",
    role: "Sole developer. Designed and built the entire platform — data ingestion, AI pipeline, editorial workflow, and the public-facing site.",
    highlights:
      "Multi-model pipeline using GPT-4o, Gemini, and Claude depending on the task. Background jobs via Trigger.dev. Free sign-up required to read full articles. Around 200 users and several hundred articles published to date.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Gemini", "Claude", "Trigger.dev", "Mailgun"],
    link: "https://estatenews.dk",
    linkLabel: "Visit estatenews.dk ↗",
    imgClass: "ph-estatenews",
    caseStudy: {
      challenges: [
        {
          title: "Publishing at a pace no single person can match",
          body: "Real estate news moves daily. A one-person team can't keep up with the volume the market expects — but the output still needs to be accurate, relevant, and well-written enough to build reader trust.",
        },
        {
          title: "Filtering signal from noise",
          body: "Scraping a curated list of Danish real estate sources produces a lot of raw material. The system had to identify new content, determine whether it was relevant to the platform's audience, and discard anything that didn't meet the bar — before spending tokens on writing.",
        },
      ],
      whatIBuilt: [
        {
          title: "A multi-stage autonomous pipeline",
          body: "Trigger.dev background jobs scrape a curated list of Danish sources on a schedule. Each piece of content is analysed for freshness and relevance, then structured and passed to an LLM — drawing on GPT-4o, Gemini, and Claude depending on the task — to write the article. A separate model generates a matching image. The finished article is published automatically.",
        },
        {
          title: "A reader-facing product with sign-up and email",
          body: "Free registration gates full article access. Mailgun handles transactional and retention emails. The whole product — from pipeline to public site — was designed and built solo.",
        },
      ],
      value: [
        {
          title: "Hundreds of articles published, fully automatically",
          body: "The platform has published several hundred articles without a single manual editorial step. Every article from ingestion to publication is handled by the pipeline.",
        },
        {
          title: "A product idea that became a bachelor project",
          body: "EstateNews started as a real product concept and was later adopted as my bachelor project at KEA — the idea came first, the academic framing second.",
        },
      ],
    },
  },
  {
    id: "allegade",
    eyebrow: "02 - Hospitality",
    year: "2025",
    title: "Allégade 10",
    cat: "Restaurant & Hotel Website",
    desc: "A ground-up rebuild of the website for Allégade 10, a restaurant and hotel in Frederiksberg, Copenhagen. Replaced a slow, broken WordPress site with a custom Next.js and Sanity CMS build. 3,400+ visitors and 10,000+ page views in its first three weeks live.",
    role: "Sole developer on a paid client engagement. Responsible for architecture, CMS setup, all frontend work, and ongoing iteration based on client feedback.",
    highlights:
      "64% of visitors on mobile — the old site was effectively unusable on phones. Sanity CMS built with only the fields the team actually needs, no plugin debt. Links to third-party booking; full booking integration planned.",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
    link: "https://allegade10.dk",
    linkLabel: "Visit allegade10.dk ↗",
    imgClass: "ph-allegade",
    caseStudy: {
      challenges: [
        {
          title: "A WordPress site that had become a liability",
          body: "The existing site was built on an outdated template packed with plugins — many unmaintained, some introducing security vulnerabilities. Dead pages, broken layouts, and a CMS the team found confusing to use. It was slow to load and gave no impression of the quality of the venue.",
        },
        {
          title: "64% of visitors arriving on a site that didn't work on mobile",
          body: "Buttons overflowed each other, the header consumed nearly half the screen, and navigating between pages meant waiting several seconds for each load. For a hospitality business where first impressions matter, this was directly costing them guests.",
        },
      ],
      whatIBuilt: [
        {
          title: "A clean rebuild on Next.js and Sanity",
          body: "Replaced the WordPress template entirely. Sanity CMS was configured with only the content types and fields the team actually uses — menus, events, availability info — so editing is straightforward and there's nothing superfluous to get lost in. No plugin debt, no stale dependencies.",
        },
        {
          title: "A mobile-first experience built around real visitor data",
          body: "With 64% of traffic on mobile (50% on iOS), every layout decision was made with smaller screens first. Fast navigation, responsive design throughout, and a guest-facing experience that matches the quality of the restaurant and hotel.",
        },
      ],
      value: [
        {
          title: "3,400+ visitors and 10,000+ page views in the first three weeks",
          body: "Early traffic data shows strong engagement. The site has gone through multiple iterations since launch based on client and user feedback — ongoing rather than handed off.",
        },
        {
          title: "A team that can own their own content",
          body: "The venue updates menus, events, and other content themselves. No developer involvement needed for day-to-day changes — that was a deliberate design goal from the start.",
        },
      ],
    },
  },
  {
    id: "internal",
    eyebrow: "03+ - Client Work",
    year: "2025 – 2026",
    title: "Internal Projects",
    cat: "Automation & AI Integration",
    desc: "A set of automation and AI integration projects for a single client in the commercial real estate space, built under NDA. The work centres on eliminating manual, repetitive workflows using a combination of LLMs, third-party APIs, and internal systems.",
    role: "Sole developer. Working directly with the client to identify bottlenecks, design solutions, and build and iterate in production.",
    highlights:
      "Automated web crawler creation flow: what was a manual, field-by-field process is now handled by AI from a single input. Invoice automation: new and recurring invoices generated and dispatched without human involvement. Ongoing engagement, 2025–2026.",
    tags: ["AI / LLM", "OpenAI API", "Automation", "Node.js", "React", "REST APIs"],
    link: null,
    linkLabel: "Get in touch to learn more →",
    linkHref: "/contact",
    imgClass: "ph-internal",
    caseStudy: {
      challenges: [
        {
          title: "Manual processes slowing down a lean team",
          body: "The client operates with a small team in a data-heavy industry. Several of their core workflows — creating web crawler configurations, generating invoices — required significant manual effort per task, with no room to scale without adding headcount.",
        },
        {
          title: "Integrating with systems that already exist",
          body: "These weren't greenfield projects. Each solution had to slot into existing tools and internal systems, work reliably in production, and be maintainable by the team after handoff.",
        },
      ],
      whatIBuilt: [
        {
          title: "Automated crawler configuration",
          body: "Building web crawlers for commercial real estate listings previously meant manually filling out a set of structured fields for each new source. I built a system where an LLM analyses the target site and populates those fields automatically — reducing a multi-step manual task to a single input.",
        },
        {
          title: "Invoice generation and dispatch",
          body: "New and recurring invoices are now created and sent automatically, using a combination of LLM generation, third-party billing APIs, and internal data. The client's team no longer touches the invoicing flow for standard cases.",
        },
      ],
      value: [
        {
          title: "Manual tasks converted to fully automated workflows",
          body: "Work that previously required per-task human input now runs without involvement. The team's time goes to higher-value work.",
        },
        {
          title: "Built to last, not just to ship",
          body: "Both systems are in active production use. The engagement is ongoing — solutions are iterated based on real usage rather than treated as one-time deliveries.",
        },
      ],
    },
  },
];
