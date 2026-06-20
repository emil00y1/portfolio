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
                I&apos;m a full-stack developer specialising in AI integration and automation, based in Copenhagen.
                I build LLM-powered products, multi-step agents, and n8n-based automation pipelines — and bring a
                strong eye for UX from a background in Multimedia Design and Web Development.
              </p>
              <p>
                I take ownership from architecture to delivery and communicate clearly across technical and
                non-technical teams. I thrive in environments where quality and continuous improvement matter.
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
