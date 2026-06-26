"use client";

import { motion } from "framer-motion";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

const steps = [
  {
    num: "01",
    title: "Understand first",
    body: "Before writing a line of code I want to understand the problem: who it's for, what they need, and where things tend to go wrong. Good software starts with the right questions.",
  },
  {
    num: "02",
    title: "Build lean, ship fast",
    body: "I work iteratively, focusing on small, working increments over big releases. I use AI tools to optimize and accelerate my workflow to build features and solve issues, quickly.",
  },
  {
    num: "03",
    title: "Own the full stack",
    body: "I handle database schemas, API design and the interface. Fewer handoff gaps, faster decisions, and a product that holds together end to end.",
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
      className="px-[clamp(20px,5vw,60px)] py-[clamp(60px,10vh,100px)]"
      id="process"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" as const }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="mb-16">
        <span className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg-3)] font-medium">How I work</span>
        <h2
          className="text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.03em] mt-3 leading-[1.1]"
          style={jakarta}
        >
          Four principles I don&apos;t compromise on.
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[clamp(32px,4vw,48px)_clamp(24px,5vw,60px)]">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col gap-3">
            <div className="text-[12px] font-bold text-[var(--brand)] tracking-[0.1em]">{s.num}</div>
            <h3 className="text-[clamp(16px,1.8vw,19px)] font-bold tracking-[-0.02em]" style={jakarta}>{s.title}</h3>
            <p className="text-[15px] text-[var(--fg-2)] leading-[1.7] font-light">{s.body}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
