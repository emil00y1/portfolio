"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" as const },
  viewport: { once: true, margin: "-50px" },
};

export default function AboutSection() {
  return (
    <section className="px-[clamp(20px,5vw,60px)] py-[clamp(60px,10vh,100px)]" id="about">
      <motion.div {...fadeInUp} className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-[clamp(40px,6vw,64px)] items-start md:items-center">
          <div className="w-full">
            <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg-3)] font-medium mb-5">About</div>
            <h2
              className="text-[clamp(28px,4vw,46px)] font-bold tracking-[-0.03em] leading-[1.1] mb-7"
              style={jakarta}
            >
              Building intelligent things people actually want to use.
            </h2>
            <div className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-[var(--fg-2)] font-light space-y-4">
              <p>
                I&apos;m a full-stack developer specialising in AI integration and automation, based in Copenhagen.
                I build LLM-powered products, multi-step agents, and n8n-based automation pipelines and bring a
                strong eye for UX from a background in Multimedia Design and Web Development.
              </p>
              <p>
                I&apos;ve built full-stack applications like an automated news platform, AI agents that take over
                repetitive tasks, websites for restaurants, and custom CMS solutions.
              </p>
              <p>
                I take ownership from architecture to delivery and communicate clearly across technical and
                non-technical teams. Outside of the code I&apos;m pretty down to earth - I like keeping things
                simple, building things I&apos;d actually use, and learning something new with every project.
              </p>
            </div>
            <div className="flex items-center gap-2.5 mt-7 text-sm text-[var(--fg-2)]">
              <span className="w-2 h-2 rounded-full bg-[var(--green)] shrink-0 animate-[pulse_2s_ease-in-out_infinite] motion-reduce:animate-none" />
              <span>Available for new projects</span>
            </div>
            <div className="mt-7">
              <Link href="/about" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--fg-2)] no-underline hover:text-[var(--brand)] transition-colors">
                Read more →
              </Link>
            </div>
          </div>

          <div className="group relative w-full max-w-[260px] md:max-w-[280px] aspect-square rounded-lg overflow-hidden border border-[var(--border)] justify-self-center order-first md:order-none">
            <Image
              src="/portrait_1x1.jpg"
              alt="Emil Kristensen"
              fill
              sizes="(max-width: 900px) 260px, 300px"
              className="grayscale-[15%] group-hover:grayscale-0 transition-[filter] duration-[400ms]"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
