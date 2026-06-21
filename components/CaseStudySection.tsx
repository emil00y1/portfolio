"use client";

import { motion } from "framer-motion";
import type { CaseStudyItem } from "@/lib/projects";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function CaseStudySection({
  label,
  items,
}: {
  label: string;
  items: CaseStudyItem[];
}) {
  return (
    <motion.section
      className="mt-[clamp(48px,7vw,80px)]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <motion.h2
        className="text-[12px] tracking-[0.12em] uppercase text-[var(--brand)] font-bold mb-[clamp(20px,3vw,32px)]"
        variants={item}
      >
        {label}
      </motion.h2>
      <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[1100px]:grid-cols-3 gap-[clamp(24px,4vw,48px)]">
        {items.map((entry) => (
          <motion.article key={entry.title} variants={item}>
            <h3
              className="text-[clamp(17px,2vw,20px)] font-semibold leading-[1.35] text-[var(--fg)] mb-3 tracking-[-0.01em]"
              style={jakarta}
            >
              {entry.title}
            </h3>
            <p className="text-[clamp(14px,1.6vw,15px)] leading-[1.75] text-[var(--fg-2)]">{entry.body}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
