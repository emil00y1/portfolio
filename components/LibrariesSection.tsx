"use client";

import { motion } from "framer-motion";

const ROW1 = [
  "shadcn/ui", "Framer Motion", "Tailwind CSS", "Radix UI",
  "TanStack Query", "Zustand", "Zod", "Vercel AI SDK",
  "Drizzle ORM", "Next.js", "Motion One", "LangChain.js",
];

const ROW2 = [
  "Headless UI", "GSAP", "Supabase", "OpenAI Node",
  "CSS Modules", "React Hook Form", "Prisma", "Recharts",
  "tRPC", "Stitches", "Playwright", "Vitest",
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
          { label: "UI Components", items: ["shadcn/ui", "Radix UI", "Headless UI"] },
          { label: "Animation",     items: ["Framer Motion", "GSAP", "Motion One"] },
          { label: "Data & State",  items: ["Zustand", "TanStack Query", "Zod"] },
          { label: "Styling",       items: ["Tailwind CSS", "CSS Modules", "Stitches"] },
          { label: "AI / LLM",      items: ["Vercel AI SDK", "LangChain.js", "OpenAI Node"] },
          { label: "Infrastructure",items: ["Vercel", "Supabase", "Drizzle ORM"] },
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
