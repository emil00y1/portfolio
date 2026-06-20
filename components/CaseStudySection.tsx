"use client";

import { motion } from "framer-motion";
import type { CaseStudyItem } from "@/lib/projects";

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
      className="case-study-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <motion.h2 className="case-study-label" variants={item}>
        {label}
      </motion.h2>
      <div className="case-study-grid">
        {items.map((entry) => (
          <motion.article key={entry.title} className="case-study-item" variants={item}>
            <h3 className="case-study-item-title">{entry.title}</h3>
            <p className="case-study-item-body">{entry.body}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
