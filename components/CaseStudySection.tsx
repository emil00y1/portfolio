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
      className="mt-[clamp(16px,2.5vw,24px)]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3 gap-[clamp(14px,1.8vw,20px)]">
        {/* Section label as a bento feature tile */}
        <motion.div
          className="rounded-2xl border border-[var(--border)] bg-[var(--brand-lt)] p-[clamp(24px,3vw,32px)] flex flex-col justify-between gap-6 min-h-[160px]"
          variants={item}
        >
          <span className="text-[11px] tracking-[0.16em] uppercase text-[var(--brand)] font-bold opacity-80">
            Case study
          </span>
          <h2
            className="text-[clamp(22px,2.6vw,28px)] font-bold tracking-[-0.02em] text-[var(--brand)] leading-[1.15]"
            style={jakarta}
          >
            {label}
          </h2>
        </motion.div>

        {items.map((entry) => (
          <motion.article
            key={entry.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-off)] p-[clamp(24px,3vw,32px)]"
            variants={item}
          >
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
