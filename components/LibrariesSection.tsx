"use client";

import { motion } from "framer-motion";

const ROW1 = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React.js", "Vue.js", "Next.js", "Node.js",
  "Tailwind CSS", "shadcn/ui", "Radix UI", "PostgreSQL",
];

const ROW2 = [
  "MySQL", "MongoDB", "Supabase", "Drizzle ORM",
  "Zod", "React Hook Form", "Playwright", "Vitest",
  "Git", "Docker", "Vercel", "Claude Code",
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {doubled.map((name, i) => (
          <div key={i} className="lib-chip">
            <div className="lib-chip-dot" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LibrariesSection() {
  return (
    <motion.section
      className="libraries"
      id="libraries"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" as const }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="libraries-header">
        <div>
          <div className="section-label" style={{ marginBottom: 12 }}>
            Modern libraries & tools
          </div>
          <h2 style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
            Built on the shoulders<br />of great open source.
          </h2>
        </div>
        <p>
          I lean on battle-tested libraries to move fast and ship quality —
          picking the right tool for each layer rather than reinventing the wheel.
        </p>
      </div>

      <MarqueeRow items={ROW1} />
      <MarqueeRow items={ROW2} reverse />

      <div className="lib-categories">
        {[
          { label: "Languages",    items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
          { label: "Frameworks",   items: ["Next.js", "React.js", "Vue.js", "Node.js"] },
          { label: "Databases",    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
          { label: "UI / Styling", items: ["shadcn/ui", "Tailwind CSS", "Radix UI", "Vuetify", "Material Design 3"] },
          { label: "Libraries",    items: ["Zod", "React Hook Form", "Drizzle ORM", "BetterAuth"] },
          { label: "Testing",      items: ["Playwright", "Vitest"] },
          { label: "AI Tools",     items: ["Claude Code", "Gemini", "Codex"] },
          { label: "DevOps",       items: ["Git", "Docker", "Vercel"] },
          { label: "Services",     items: ["Sanity CMS", "Trigger.dev", "Mailgun"] },
        ].map(({ label, items }) => (
          <div key={label} className="lib-cat">
            <div className="lib-cat-label">{label}</div>
            <div className="lib-cat-items">{items.join("\n").split("\n").map((item, i) => (
              <span key={i}>{item}<br /></span>
            ))}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
