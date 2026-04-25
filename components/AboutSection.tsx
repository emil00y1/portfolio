"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" as const },
  viewport: { once: true, margin: "-50px" },
};

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  Backend:  ["Node.js", "PostgreSQL", "GraphQL", "Supabase"],
  "AI & Tools": ["OpenAI API", "LangChain", "Vercel", "Git"],
};

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-left"
        {...fadeInUp}
      >
        <div className="about-label section-label">About</div>
        <h2
          className="about-heading"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          Building things people actually want to use.
        </h2>
        <div className="about-body">
          <p>
            I&apos;m a full stack developer based in Copenhagen, focused on building products that
            are both technically solid and genuinely enjoyable to use. I care about the details —
            the micro-interactions, the performance, the clarity of an interface.
          </p>
          <p>
            I work across the full stack, from designing database schemas to crafting animations
            in the browser. Lately I&apos;ve been integrating AI into development workflows to move
            faster without cutting corners.
          </p>
          <p>
            I&apos;m currently open to new projects — whether that&apos;s a focused product build,
            a technical collaboration, or a longer engagement.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="about-right"
        id="stack"
        {...fadeInUp}
        transition={{ duration: 0.7, ease: "easeInOut" as const, delay: 0.15 }}
      >
        <div className="stack-label section-label">Stack</div>
        {Object.entries(stack).map(([category, items], i) => (
          <div key={category}>
            <div className="stack-category" style={i === 0 ? { marginTop: 0 } : undefined}>
              {category}
            </div>
            <div className="stack-grid">
              {items.map((item) => (
                <div key={item} className="stack-item">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
