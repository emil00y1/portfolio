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
  /** Optional badge shown on the card, e.g. "Hobby · In progress". */
  status?: string;
  /** Long-form case study content for the detail page. */
  caseStudy: CaseStudy;
  /**
   * Optional override for the three case-study section headings.
   * Defaults to ["The challenge", "What I built", "The value created"].
   */
  caseStudyLabels?: [string, string, string];
}

export const projects: Project[] = [
  {
    id: "estatenews",
    eyebrow: "01 - Real Estate Media",
    year: "2025",
    title: "EstateNews",
    cat: "Automated News Platform",
    desc: "An AI-powered real estate news platform built entirely solo. A pipeline of agents scrapes curated Danish sources, filters for relevance, rewrites the content with an LLM, and generates a matching image - then adds it as a draft for a quick human review before it goes live. Built as both a commercial product and my bachelor project.",
    role: "Sole developer. Designed and built the entire platform - architecture, data ingestion, AI pipeline, editorial workflow, the public-facing site, and ongoing maintenance.",
    highlights:
      "Multi-model pipeline using Gemini and Claude depending on the task. Custom CMS for managing and reviewing articles. Background jobs via Trigger.dev. Free sign-up required to read full articles. Around 200 users and several hundred articles published to date.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Gemini", "Claude", "Trigger.dev", "Mailgun"],
    link: "https://estatenews.dk",
    linkLabel: "Visit estatenews.dk ↗",
    imgClass: "ph-estatenews",
    caseStudy: {
      challenges: [
        {
          title: "A news platform, and how far AI could take it",
          body: "The brief was a real estate news platform - and an open question of how far AI could be pushed to fill that need. Real estate news moves daily and a one-person team can't match the volume the market expects, so the real challenge was handing as much of the work as possible to AI while keeping the output accurate, relevant, and trustworthy.",
        },
        {
          title: "Scraping wildly inconsistent sources",
          body: "The source pages are all very different, so the scraper had to handle a lot of different situations. Dates were a particular headache - formats and placement varied from site to site - and some pages were static while others were JavaScript-rendered, so the scraper had to reliably handle both.",
        },
      ],
      whatIBuilt: [
        {
          title: "A multi-stage autonomous pipeline",
          body: "Trigger.dev background jobs scrape a curated list of Danish sources on a schedule. Each piece of content is analysed for freshness and relevance, then handed to the models: Gemini analyses the content and generates a matching image, and Claude writes the article. Rather than going straight live, each finished piece is added as a draft for a quick review before publishing.",
        },
        {
          title: "A reader-facing product with sign-up and email",
          body: "Free registration gates full article access. Mailgun handles transactional and retention emails. The whole product, from pipeline to public site, was designed and built solo.",
        },
      ],
      value: [
        {
          title: "Hundreds of articles, drafted end to end",
          body: "The pipeline has produced several hundred articles, handling sourcing, writing, and imagery on its own. Each one lands as a draft rather than publishing blind, so the only human step left is a quick review before it goes live.",
        },
        {
          title: "A bachelor project - and a marketing channel",
          body: "EstateNews started as a real product concept and was later adopted as my bachelor project at KEA, the idea coming first and the academic framing second. It also doubles as a marketing channel, putting the company's other products in front of a relevant real estate audience.",
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
      "64% of visitors on mobile - the old site was effectively unusable on phones. Sanity CMS built with only the fields the team actually needs, no plugin debt. Links to third-party booking; full booking integration planned.",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
    link: "https://allegade10.dk",
    linkLabel: "Visit allegade10.dk ↗",
    imgClass: "ph-allegade",
    caseStudy: {
      challenges: [
        {
          title: "A WordPress site that had become a liability",
          body: "The existing site was built on an outdated template packed with plugins - many unmaintained, some introducing security vulnerabilities. Dead pages, broken layouts, and a CMS the team found confusing to use. It was slow to load and gave no impression of the quality of the venue.",
        },
        {
          title: "64% of visitors arriving on a site that didn't work on mobile",
          body: "Buttons overflowed each other, the header consumed nearly half the screen, and navigating between pages meant waiting several seconds for each load. For a hospitality business where first impressions matter, this was directly costing them guests.",
        },
      ],
      whatIBuilt: [
        {
          title: "A clean rebuild on Next.js and Sanity",
          body: "Replaced the WordPress template entirely. Sanity CMS was configured with only the content types and fields the team actually uses - menus, events, availability info - so editing is straightforward and there's nothing superfluous to get lost in. No plugin debt, no stale dependencies.",
        },
        {
          title: "A mobile-first experience built around real visitor data",
          body: "With 64% of traffic on mobile (50% on iOS), every layout decision was made with smaller screens first. Fast navigation, responsive design throughout, and a guest-facing experience that matches the quality of the restaurant and hotel.",
        },
      ],
      value: [
        {
          title: "3,400+ visitors and 10,000+ page views in the first three weeks",
          body: "Early traffic data shows strong engagement. The site has gone through multiple iterations since launch based on client and user feedback - ongoing rather than handed off.",
        },
        {
          title: "A team that can own their own content",
          body: "The venue updates menus, events, and other content themselves. No developer involvement needed for day-to-day changes - that was a deliberate design goal from the start.",
        },
      ],
    },
  },
  {
    id: "internal",
    eyebrow: "03+ - Client Work",
    year: "2025 - 2026",
    title: "Internal Projects",
    cat: "Automation & AI Integration",
    desc: "A set of automation and AI integration projects for a single client in the commercial real estate space, built under NDA. The work centres on eliminating manual, repetitive workflows using a combination of LLMs, third-party APIs, and internal systems.",
    role: "Sole developer. Working directly with the client to identify bottlenecks, design solutions, and build and iterate in production.",
    highlights:
      "Automated web crawler creation flow: what was a manual, field-by-field process is now handled by AI from a single input. Building new features with built-in LLM and AI capabilities into the client's existing product. Invoice automation: new and recurring invoices can be generated and dispatched without human involvement. Ongoing engagement, 2025-2026.",
    tags: ["AI / LLM", "Automation", "n8n", "Node.js", "Next.js", "React", "Vercel", "Railway", "REST APIs"],
    link: null,
    linkLabel: "Get in touch to learn more →",
    linkHref: "/contact",
    imgClass: "ph-internal",
    caseStudy: {
      challenges: [
        {
          title: "Manual processes slowing down a lean team",
          body: "The client operates with a small team in a data-heavy industry. Several of their core workflows, creating web crawler configurations, generating invoices, required significant manual effort per task, with no room to scale without adding headcount.",
        },
        {
          title: "Integrating with systems that already exist",
          body: "These weren't greenfield projects. Each solution had to slot into existing tools and internal systems, work reliably in production, and be maintainable by the team after handoff.",
        },
      ],
      whatIBuilt: [
        {
          title: "Automated crawler configuration",
          body: "Building web crawlers for commercial real estate listings previously meant manually filling out a set of structured fields for each new source. I built a system where an LLM analyses the target site and populates those fields automatically - reducing a multi-step manual task to a single input.",
        },
        {
          title: "Invoice generation and dispatch",
          body: "New and recurring invoices can now be created and sent automatically, using a combination of LLM generation, third-party billing APIs, and internal data, so the client's team won't need to touch the invoicing flow for standard cases.",
        },
      ],
      value: [
        {
          title: "Manual tasks converted to fully automated workflows",
          body: "Work that previously required per-task human input now runs without involvement. The team's time goes to higher-value work.",
        },
        {
          title: "Built to last, not just to ship",
          body: "Both systems are in active production use. The engagement is ongoing - solutions are iterated based on real usage rather than treated as one-time deliveries.",
        },
      ],
    },
  },
  {
    id: "catacrawl",
    eyebrow: "04 - Hobby Project",
    year: "2026",
    title: "Catacrawl",
    cat: "Roguelite Auto-Shooter",
    status: "Hobby · In progress",
    desc: "A browser-based roguelite auto-shooter I'm building solo, for fun. Its hook: \"weapons are themselves - you choose where to stand, and what to become.\" Combat is about positioning and build choices rather than aim, wrapped in pixel-art and account-based progression - talents, a compendium, a codex and achievements. Still in active development, with a native mobile version planned.",
    role: "Solo passion project. Game design, gameplay programming, the meta-progression systems, and the pixel-art direction - all built in my own time.",
    highlights:
      "Auto-shooter combat where positioning, not aim, is the core skill. Persistent accounts with a talent tree, compendium, codex and achievements. Live in the browser today; a native mobile build is on the roadmap.",
    tags: ["TypeScript", "React", "Canvas", "Vercel"],
    link: "https://catacrawl.vercel.app",
    linkLabel: "Play Catacrawl ↗",
    imgClass: "ph-catacrawl",
    caseStudyLabels: ["The idea", "What I'm building", "What's next"],
    caseStudy: {
      challenges: [
        {
          title: "A roguelite where positioning is the whole game",
          body: "Most action roguelites are about aiming. I wanted to flip that: weapons fire on their own, so the only things you control are where you stand and what build you grow into. The constraint makes every encounter about movement and risk rather than twitch aim.",
        },
        {
          title: "Making \"just one more run\" feel earned",
          body: "A roguelite lives or dies on its meta-progression. The goal is to give players a reason to come back between runs - talents, a compendium, a codex and achievements that feed long-term growth without trivialising the moment-to-moment combat.",
        },
      ],
      whatIBuilt: [
        {
          title: "Auto-shooter combat and run structure",
          body: "The core loop: runs built around auto-firing weapons and mid-run upgrades that reshape how your build plays. Rendered as pixel-art in the browser and tuned for fast, readable action with WASD movement.",
        },
        {
          title: "Account-based meta-progression",
          body: "Players log in and keep their progress: a talent tree, an unlockable compendium and codex, and achievements that persist across runs - long-term goals layered on top of individual sessions.",
        },
      ],
      value: [
        {
          title: "A native mobile build",
          body: "Positioning-first, auto-firing combat is a natural fit for touch. A mobile version is the next major milestone - reworking controls and UI for small screens while keeping the same core loop.",
        },
        {
          title: "What it's teaching me",
          body: "Game development stretches different muscles than client work - real-time rendering, game-feel tuning, and balancing systems for long-term engagement. It's where I experiment with ideas that feed back into how I build everything else.",
        },
      ],
    },
  },
];
