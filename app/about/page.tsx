import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "About | Emil Kristensen",
  description: "AI & Full Stack Developer based in Copenhagen. Specialising in LLM integrations, agentic workflows, and modern web development.",
};

const education = [
  {
    school: "Erhvervsakademi København (KEA)",
    degree: "Bachelor in Web Development",
    years: "2024 – 2026",
    detail: "Bachelor project: estatenews.dk",
  },
  {
    school: "Erhvervsakademi København (KEA)",
    degree: "AP Graduate · Multimedia Design",
    years: "2022 – 2024",
    detail: "JavaScript, UX & UI Design, Frontend Development",
  },
  {
    school: "Copenhagen Business School (CBS)",
    degree: "BSc Markets and Cultural Analysis",
    years: "2020 – 2021",
    detail: "One year completed before pivoting toward a more practical, creative path",
  },
  {
    school: "Baltorp Business Gymnasium",
    degree: "HHX",
    years: "2016 – 2019",
    detail: "English A, Danish A, International Economics A",
  },
];

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
                    I&apos;m a full-stack developer specialising in AI integration and automation, based in Copenhagen.
                    I build LLM-powered products, multi-step agents, and n8n-based automation pipelines — and I bring
                    a strong eye for user experience from a background in Multimedia Design.
                  </p>
                  <p>
                    I take ownership from architecture to delivery and communicate clearly between technical and
                    non-technical stakeholders. I enjoy picking up new technologies and thrive in environments
                    where quality and continuous improvement matter.
                  </p>
                  <p>
                    Most of my work sits at the intersection of design and engineering — where a clear mental model
                    of the user experience shapes every technical decision. I don&apos;t hand off design to start
                    coding. I do both, and the end result is tighter for it.
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
                    I hold a Bachelor in Web Development from KEA and an AP degree in Multimedia Design from the
                    same institution. The combination gave me both the technical depth to build production systems
                    and the design foundation to think about interfaces before writing a line of code.
                  </p>
                  <p>
                    I started at CBS studying Markets and Cultural Analysis, but after a year I realised I wanted
                    something more practical and creative. I&apos;d always been the IT person in the room and had a
                    genuine interest in design, so Multimedia Design felt like a natural fit — a mix of both
                    worlds. Once I got into it, I found myself drawn more and more to the coding side, especially
                    frontend, and the range of possibilities it opened up. That pull eventually led me into Web
                    Development, and here I am.
                  </p>
                </div>
                <div className="about-page-edu-list">
                  {education.map((e) => (
                    <div key={e.school + e.years} className="about-page-edu-card">
                      <div className="about-page-edu-card-left">
                        <span className="about-page-edu-school">{e.school}</span>
                        <span className="about-page-edu-degree">{e.degree}</span>
                        <span className="about-page-edu-detail">{e.detail}</span>
                      </div>
                      <span className="about-page-edu-year">{e.years}</span>
                    </div>
                  ))}
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
                    I work iteratively and ship fast. I use AI tooling to eliminate the repetitive parts of
                    development and spend the saved time on what actually matters: the details that make a product
                    feel right.
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
