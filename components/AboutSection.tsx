"use client";

import Image from "next/image";
import Link from "next/link";
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
      <motion.div {...fadeInUp} className="about-container">
        <div className="about-inner">
          <div className="about-content">
            <div className="about-label section-label">About</div>
            <h2
              className="about-heading"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Building intelligent things people actually want to use.
            </h2>
            <div className="about-body">
              <p>
                I&apos;m an AI & full stack developer based in Copenhagen, focused on building products that
                bridge robust backend systems with intelligent LLM integrations. I care deeply about the details,
                including micro-interactions, performance, and the clarity of an interface.
              </p>
              <p>
                My background in Multimedia Design means I think about interfaces before I build them,
                considering information hierarchy, component behaviour, and the subtle details that make software
                feel right to use.
              </p>
              <p>
                Lately, I&apos;ve been specializing in agentic workflows, prompt engineering, and utilizing AI
                tools to accelerate my own output, optimize codebases, and build products that solve complex user
                problems autonomously.
              </p>
            </div>
            <div className="about-status">
              <span className="status-dot" />
              <span>Available for new projects</span>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/about" className="btn-ghost-link">
                Read more →
              </Link>
            </div>
          </div>

          <div className="about-photo-wrapper">
            <Image
              src="/portrait_1x1.jpg"
              alt="Emil Kristensen"
              fill
              sizes="(max-width: 900px) 260px, 300px"
              className="about-photo"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
