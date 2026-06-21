"use client";

import { motion } from "framer-motion";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

const chips = [
  "Next.js", "React.js", "TypeScript", "Tailwind CSS", "shadcn/ui",
  "Supabase", "PostgreSQL", "Drizzle ORM", "Zod", "React Hook Form",
  "Framer Motion", "Node.js", "Vercel", "Docker", "n8n",
  "LLM APIs", "Claude Code", "Playwright", "Vitest", "BetterAuth",
  "Sanity CMS", "Trigger.dev", "Mailgun", "Radix UI", "Vue.js",
  // duplicate for seamless loop
  "Next.js", "React.js", "TypeScript", "Tailwind CSS", "shadcn/ui",
  "Supabase", "PostgreSQL", "Drizzle ORM", "Zod", "React Hook Form",
  "Framer Motion", "Node.js", "Vercel", "Docker", "n8n",
  "LLM APIs", "Claude Code", "Playwright", "Vitest", "BetterAuth",
  "Sanity CMS", "Trigger.dev", "Mailgun", "Radix UI", "Vue.js",
];

export default function LibrariesSection() {
  return (
    <motion.section
      className="py-[clamp(48px,8vh,80px)] overflow-hidden"
      id="libraries"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" as const }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="px-[clamp(20px,5vw,60px)] pb-8 flex justify-between items-baseline flex-wrap gap-5">
        <div>
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg-3)] font-medium mb-3">
            Modern libraries &amp; tools
          </div>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold tracking-[-0.03em]" style={jakarta}>
            Built on the shoulders<br />of great open source.
          </h2>
        </div>
        <p className="text-sm text-[var(--fg-3)] max-w-[360px] leading-[1.6]">
          Good software is built on good foundations. I pick tools I trust for each
          layer — so I can move fast without cutting corners.
        </p>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track flex gap-[10px] w-max">
          {chips.map((chip, i) => (
            <div
              key={`${chip}-${i}`}
              className="inline-flex items-center gap-2 px-[18px] py-2.5 border border-[var(--border)] rounded-[40px] bg-[var(--bg-off)] whitespace-nowrap text-[13px] font-medium text-[var(--fg-2)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-[border-color,color] cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] opacity-50 shrink-0" />
              {chip}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-[clamp(24px,4vw,48px)] flex-wrap px-[clamp(20px,5vw,60px)] pt-7">
        {[
          { label: "Languages",    items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
          { label: "Frameworks",   items: ["Next.js", "React.js", "Vue.js", "Node.js"] },
          { label: "Databases",    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
          { label: "UI / Styling", items: ["shadcn/ui", "Tailwind CSS", "Radix UI", "Vuetify", "Material Design 3"] },
          { label: "Libraries",    items: ["Zod", "React Hook Form", "Drizzle ORM", "BetterAuth"] },
          { label: "Testing",      items: ["Playwright", "Vitest"] },
          { label: "AI & Automation", items: ["n8n", "LLM APIs", "Claude Code", "Gemini", "Codex"] },
          { label: "DevOps",       items: ["Git", "Docker", "Vercel"] },
          { label: "Services",     items: ["Sanity CMS", "Trigger.dev", "Mailgun"] },
        ].map(({ label, items }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <div className="text-[10px] tracking-[0.12em] uppercase text-[var(--fg-3)] font-medium">{label}</div>
            <div className="text-sm text-[var(--fg-2)] leading-[1.8]">
              {items.map((item) => (
                <span key={item}>{item}<br /></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
