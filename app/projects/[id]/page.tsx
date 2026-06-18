import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/lib/projects";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} | Emil Kristensen`,
    description: project.desc,
  };
}

function ProjectHeroImage({ id }: { id: string }) {
  if (id === "estatenews") {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src="/estatenews-live.png"
          alt="EstateNews website preview"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
    );
  }

  if (id === "allegade") {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src="/allegade10-live.png"
          alt="Allegade 10 website preview"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "var(--bg-off)",
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.025) 12px, rgba(0,0,0,0.025) 13px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <svg width="320" height="60" viewBox="0 0 320 60" fill="none" style={{ maxWidth: "50%", opacity: 0.35 }}>
        <rect x="0" y="4" width="80" height="8" rx="2" fill="#555555" />
        <rect x="0" y="22" width="220" height="14" rx="3" fill="#555555" />
        <rect x="0" y="46" width="160" height="8" rx="2" fill="#555555" />
        <rect x="240" y="4" width="80" height="52" rx="4" fill="#E0E0E0" />
      </svg>
      <span style={{ fontSize: 11, color: "#AAAAAA", letterSpacing: "0.15em" }}>NDA · Details on request</span>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <Cursor />
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <div className="project-detail-back">
          <Link href="/#work">← Back to work</Link>
        </div>

        <div className="project-detail-hero">
          <ProjectHeroImage id={project.id} />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-eyebrow">{project.eyebrow}</div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-desc">{project.desc}</p>

          <div className="project-detail-meta">
            <div>
              <div className="project-detail-meta-key">My role</div>
              <div className="project-detail-meta-val">{project.role}</div>
            </div>
            <div>
              <div className="project-detail-meta-key">Highlights</div>
              <div className="project-detail-meta-val">{project.highlights}</div>
            </div>
          </div>

          <div className="project-detail-tools" style={{ paddingTop: 32, borderTop: "1px solid var(--border)", marginBottom: 40 }}>
            <div className="project-detail-meta-key">Technologies</div>
            <div className="project-detail-meta-val" style={{ fontSize: 15 }}>{project.tags.join(" · ")}</div>
          </div>

          <div className="project-detail-actions">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                {project.linkLabel}
              </a>
            ) : project.linkHref ? (
              <Link href={project.linkHref} className="btn btn-outline">
                {project.linkLabel}
              </Link>
            ) : (
              <span style={{ fontSize: 13, color: "var(--fg-3)" }}>{project.linkLabel}</span>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
