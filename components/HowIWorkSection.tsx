"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Understand first",
    body: "Before writing a line of code I want to understand the problem — who it's for, what they need, and where things tend to go wrong. Good software starts with the right questions.",
  },
  {
    num: "02",
    title: "Build lean, ship fast",
    body: "I work iteratively — small, working increments over big-bang releases. I use AI tooling to accelerate the repetitive parts and spend the saved time on what actually matters: the details.",
  },
  {
    num: "03",
    title: "Own the full stack",
    body: "I handle both ends — database schema, API design, and the interface. Fewer handoff gaps, faster decisions, and a product that holds together end to end.",
  },
  {
    num: "04",
    title: "Stay close after launch",
    body: "Shipping is the beginning, not the end. I stay available to iterate and improve based on how real users interact with the product.",
  },
];

export default function HowIWorkSection() {
  return (
    <motion.section
      className="how-i-work"
      id="process"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" as const }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="hiw-header">
        <span className="section-label">How I work</span>
        <h2 className="hiw-heading" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
          Four principles I don&apos;t compromise on.
        </h2>
      </div>
      <div className="hiw-steps">
        {steps.map((s) => (
          <div key={s.num} className="hiw-step">
            <div className="hiw-num">{s.num}</div>
            <h3 style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
