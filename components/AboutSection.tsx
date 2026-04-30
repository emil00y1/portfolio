"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" as const },
  viewport: { once: true, margin: "-50px" },
};

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <motion.div {...fadeInUp}>
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
            My background in Multimedia Design means I think about interfaces before I build them —
            information hierarchy, component behaviour, and the small details that make something
            feel right to use.
          </p>
          <p>
            I work across the full stack, from designing database schemas to crafting animations
            in the browser. Lately I&apos;ve been integrating AI into development workflows to move
            faster without cutting corners.
          </p>
        </div>
        <div className="about-status">
          <span className="status-dot" />
          <span>Available for new projects — Copenhagen-based, remote-friendly</span>
        </div>
        <div className="about-facts">
          <div className="about-fact">
            <span className="fact-num">5+</span>
            <span className="fact-label">products shipped</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
