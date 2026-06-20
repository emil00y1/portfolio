import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "About | Emil Kristensen",
  description: "AI & Full Stack Developer based in Copenhagen. Background in Multimedia Design, specialized in LLM integrations and agentic workflows.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="about-page">
        <div className="about-page-inner">

          <div className="about-page-hero">
            <div className="about-page-hero-text">
              <p className="section-label" style={{ marginBottom: 20 }}>About</p>
              <h1 className="about-page-heading" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Building intelligent things people actually want to use.
              </h1>
              <div className="about-status" style={{ marginTop: 28 }}>
                <span className="status-dot" />
                <span>Available for new projects</span>
              </div>
            </div>
            <div className="about-page-photo-wrapper">
              <Image
                src="/portrait_1x1.jpg"
                alt="Emil Kristensen"
                fill
                sizes="(max-width: 680px) 200px, 220px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </div>

          <div className="about-page-body">

            <div className="about-page-section">
              <h2 className="about-page-section-heading" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Who I am
              </h2>
              <div className="about-page-content">
                <div className="about-page-prose">
                  <p>
                    I&apos;m an AI &amp; full stack developer based in Copenhagen, focused on building products that bridge
                    robust backend systems with intelligent LLM integrations. I care deeply about the details —
                    micro-interactions, performance, and the clarity of an interface.
                  </p>
                  <p>
                    I work best at the intersection of design and engineering, where a clear mental model of the
                    user experience shapes every technical decision. I don&apos;t hand off design to start coding — I do both,
                    and that makes the end result tighter.
                  </p>
                  <p>
                    Lately I&apos;ve been specializing in agentic workflows, prompt engineering, and using AI tooling to
                    accelerate my own output — building products that solve complex problems autonomously and handle
                    workloads a single person shouldn&apos;t be able to handle alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-page-section">
              <h2 className="about-page-section-heading" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Education
              </h2>
              <div className="about-page-content">
                <div className="about-page-prose">
                  <p>
                    I studied <strong>Multimedia Design</strong> at KEA — Copenhagen School of Design and Technology,
                    graduating with a focus on interactive design and front-end development. The programme gave me a
                    foundation in UX, visual communication, and web technologies that I still draw on daily.
                  </p>
                  <p>
                    Beyond formal education, most of what I know came from building things: shipping real products,
                    breaking them, fixing them, and learning from the gap between what I thought I knew and what the
                    code actually needed.
                  </p>
                </div>
                <div className="about-page-edu-card">
                  <div className="about-page-edu-card-left">
                    <span className="about-page-edu-school">KEA – Copenhagen School of Design and Technology</span>
                    <span className="about-page-edu-degree">AP Graduate · Multimedia Design</span>
                  </div>
                  <span className="about-page-edu-year">2022 – 2024</span>
                </div>
              </div>
            </div>

            <div className="about-page-section">
              <h2 className="about-page-section-heading" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                How I work
              </h2>
              <div className="about-page-content">
                <div className="about-page-prose">
                  <p>
                    I work iteratively and ship fast. I use AI tooling to eliminate the repetitive parts of development
                    and spend the saved time on what actually matters: the details that make a product feel right.
                  </p>
                  <p>
                    I handle both ends of the stack — database schema, API design, and the interface — which means
                    fewer handoff gaps, faster decisions, and a product that holds together end to end.
                  </p>
                  <p>
                    I stay close after launch. Shipping is the beginning, not the end. I&apos;m available to iterate
                    based on how real users interact with the product.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
