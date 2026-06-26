"use client";

import { motion } from "framer-motion";
import { Target, Hammer, TrendingUp } from "lucide-react";
import type { CaseStudyItem } from "@/lib/projects";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

/** Section icons keyed by case-study stage (passed as a string so this can be a Client Component). */
const ICONS = { challenge: Target, built: Hammer, value: TrendingUp } as const;
export type CaseStudyIcon = keyof typeof ICONS;

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
  icon,
}: {
  label: string;
  items: CaseStudyItem[];
  icon: CaseStudyIcon;
}) {
  const Icon = ICONS[icon];
  return (
    <motion.section
      className="mt-[clamp(56px,8vw,96px)]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="grid grid-cols-1 min-[980px]:grid-cols-3 gap-x-[clamp(32px,5vw,72px)] gap-y-[clamp(28px,4vw,44px)]">
        {/* Section label column - a heading + accent icon, no box */}
        <motion.div className="min-[980px]:pr-6" variants={item}>
          <span
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--brand-lt)] text-[var(--brand)] mb-5"
            aria-hidden="true"
          >
            <Icon width={22} height={22} strokeWidth={1.75} />
          </span>
          <h2
            className="text-[clamp(22px,2.6vw,30px)] font-bold tracking-[-0.02em] text-[var(--fg)] leading-[1.15]"
            style={jakarta}
          >
            {label}
          </h2>
        </motion.div>

        {items.map((entry, i) => (
          <motion.article key={entry.title} variants={item} className="min-[980px]:pt-1">
            <span className="block text-[12px] font-mono tracking-[0.1em] text-[var(--brand)] mb-3">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="text-[clamp(17px,2vw,20px)] font-semibold leading-[1.35] text-[var(--fg)] mb-3 tracking-[-0.01em]"
              style={jakarta}
            >
              {entry.title}
            </h3>
            <p className="text-[clamp(14px,1.6vw,15px)] leading-[1.8] text-[var(--fg-2)]">{entry.body}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
