import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
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
    title: `${project.title} — Emil Kristensen`,
    description: project.desc,
  };
}

function ProjectHeroImage({ id }: { id: string }) {
  if (id === "estatenews") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3d3d3d 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <svg width="560" height="140" viewBox="0 0 480 120" fill="none" style={{ maxWidth: "60%", opacity: 0.6 }}>
          <rect x="0" y="8" width="160" height="14" rx="3" fill="#888888" />
          <rect x="0" y="36" width="340" height="22" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="0" y="68" width="300" height="12" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="0" y="86" width="260" height="12" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="360" y="36" width="120" height="80" rx="4" fill="white" fillOpacity="0.08" />
        </svg>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
          estatenews.dk
        </span>
      </div>
    );
  }

  if (id === "allegade") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <svg width="480" height="120" viewBox="0 0 480 100" fill="none" style={{ maxWidth: "60%", opacity: 0.6 }}>
          <rect x="160" y="0" width="160" height="60" rx="6" fill="#BBBBBB" />
          <rect x="140" y="60" width="200" height="8" rx="2" fill="#999999" />
          <rect x="180" y="75" width="120" height="6" rx="2" fill="#999999" fillOpacity="0.5" />
          <rect x="0" y="20" width="120" height="6" rx="2" fill="#999999" fillOpacity="0.3" />
          <rect x="0" y="32" width="90" height="6" rx="2" fill="#999999" fillOpacity="0.2" />
          <rect x="360" y="20" width="120" height="6" rx="2" fill="#999999" fillOpacity="0.3" />
          <rect x="380" y="32" width="80" height="6" rx="2" fill="#999999" fillOpacity="0.2" />
        </svg>
        <span style={{ fontSize: 12, color: "#999999", letterSpacing: "0.1em" }}>allegade10.dk</span>
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

          <div className="project-detail-tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
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
