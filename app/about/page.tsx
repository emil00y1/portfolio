import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "About | Emil Kristensen",
  description: "AI & Full Stack Developer based in Copenhagen. Specialising in LLM integrations, agentic workflows, and modern web development.",
};

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

const education = [
  {
    school: "Erhvervsakademi København (KEA)",
    degree: "Bachelor in Web Development",
    years: "2024 - 2026",
    detail: "Bachelor project: estatenews.dk",
  },
  {
    school: "Erhvervsakademi København (KEA)",
    degree: "AP Graduate · Multimedia Design",
    years: "2022 - 2024",
    detail: "JavaScript, UX & UI Design, Frontend Development",
  },
  {
    school: "Copenhagen Business School (CBS)",
    degree: "BSc Markets and Cultural Analysis",
    years: "2020 - 2021",
    detail: "One year completed before pivoting toward a more practical, creative path",
  },
  {
    school: "Baltorp Business Gymnasium",
    degree: "HHX",
    years: "2016 - 2019",
    detail: "English A, Danish A, International Economics A",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="px-[clamp(20px,5vw,60px)] pt-[calc(64px+clamp(48px,8vh,80px))] pb-[clamp(80px,12vh,120px)]">
        <div className="max-w-[860px] mx-auto">

          <div className="grid grid-cols-1 min-[680px]:grid-cols-[1fr_220px] gap-[clamp(24px,5vw,56px)] items-center mb-8 pb-8 min-[680px]:mb-[clamp(48px,7vh,80px)] min-[680px]:pb-[clamp(48px,7vh,80px)] min-[680px]:border-b min-[680px]:border-[var(--border)]">
            <div>
              <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg-3)] font-medium mb-5">About</p>
              <h1
                className="text-[clamp(32px,5vw,60px)] font-extrabold tracking-[-0.04em] leading-[1.05]"
                style={jakarta}
              >
                Building intelligent things people actually want to use.
              </h1>
              <div className="flex items-center gap-2.5 mt-7 text-sm text-[var(--fg-2)]">
                <span className="w-2 h-2 rounded-full bg-[var(--green)] shrink-0 animate-[pulse_2s_ease-in-out_infinite] motion-reduce:animate-none" />
                <span>Available for new projects</span>
              </div>
            </div>
            <div className="relative w-full max-w-[200px] min-[680px]:max-w-[220px] aspect-square rounded-lg overflow-hidden border border-[var(--border)] justify-self-start min-[680px]:justify-self-end order-first min-[680px]:order-none">
              <Image
                src="/portrait_1x1.webp"
                alt="Emil Kristensen"
                fill
                sizes="(max-width: 680px) 200px, 220px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(48px,7vh,72px)]">

            <div className="grid grid-cols-1 min-[680px]:grid-cols-[180px_1fr] gap-[20px_40px]">
              <h2
                className="text-[13px] font-bold tracking-[0.1em] uppercase text-[var(--fg-3)] pt-1.5"
                style={jakarta}
              >
                Who I am
              </h2>
              <div className="flex flex-col gap-6">
                <div className="text-[clamp(15px,1.8vw,17px)] leading-[1.8] text-[var(--fg-2)] font-light space-y-4">
                  <p>
                    I&apos;m a full-stack developer specialising in AI integration and automation, based in Copenhagen.
                    I build LLM-powered products, multi-step agents, and n8n-based automation pipelines - and I bring
                    a strong eye for user experience from a background in Multimedia Design.
                  </p>
                  <p>
                    I take ownership from architecture to delivery and communicate clearly between technical and
                    non-technical stakeholders. I enjoy picking up new technologies and thrive in environments
                    where quality and continuous improvement matter.
                  </p>
                  <p>
                    Most of my work sits at the intersection of design and engineering - where a clear mental model
                    of the user experience shapes every technical decision. I don&apos;t hand off design to start
                    coding. I do both, and the end result is tighter for it.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[680px]:grid-cols-[180px_1fr] gap-[20px_40px]">
              <h2
                className="text-[13px] font-bold tracking-[0.1em] uppercase text-[var(--fg-3)] pt-1.5"
                style={jakarta}
              >
                Education
              </h2>
              <div className="flex flex-col gap-6">
                <div className="text-[clamp(15px,1.8vw,17px)] leading-[1.8] text-[var(--fg-2)] font-light space-y-4">
                  <p>
                    I hold a Bachelor in Web Development from KEA and an AP degree in Multimedia Design from the
                    same institution. The combination gave me both the technical depth to build production systems
                    and the design foundation to think about interfaces before writing a line of code.
                  </p>
                  <p>
                    I started at CBS studying Markets and Cultural Analysis, but after a year I realised I wanted
                    something more practical and creative. I&apos;d always been the IT person in the room and had a
                    genuine interest in design, so Multimedia Design felt like a natural fit - a mix of both
                    worlds. Once I got into it, I found myself drawn more and more to the coding side, especially
                    frontend, and the range of possibilities it opened up. That pull eventually led me into Web
                    Development, and here I am.
                  </p>
                </div>
                <div className="flex flex-col gap-7">
                  {education.map((e) => (
                    <div
                      key={e.school + e.years}
                      className="flex flex-col min-[500px]:flex-row min-[500px]:gap-8"
                    >
                      <span className="text-[13px] font-mono text-[var(--brand)] shrink-0 mb-1.5 min-[500px]:mb-0 min-[500px]:w-[104px] min-[500px]:pt-0.5">
                        {e.years}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-[15px] font-semibold text-[var(--fg)]">{e.school}</span>
                        <span className="text-[13px] text-[var(--fg-2)]">{e.degree}</span>
                        <span className="text-[12px] text-[var(--fg-3)]">{e.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[680px]:grid-cols-[180px_1fr] gap-[20px_40px]">
              <h2
                className="text-[13px] font-bold tracking-[0.1em] uppercase text-[var(--fg-3)] pt-1.5"
                style={jakarta}
              >
                How I work
              </h2>
              <div className="flex flex-col gap-6">
                <div className="text-[clamp(15px,1.8vw,17px)] leading-[1.8] text-[var(--fg-2)] font-light space-y-4">
                  <p>
                    I work iteratively and ship fast. I use AI tooling to eliminate the repetitive parts of
                    development and spend the saved time on what actually matters: the details that make a product
                    feel right.
                  </p>
                  <p>
                    I handle both ends of the stack - database schema, API design, and the interface - which means
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
