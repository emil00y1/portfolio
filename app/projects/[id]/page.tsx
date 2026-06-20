import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import Nav from "@/components/Nav";
import BrowserFrame from "@/components/BrowserFrame";
import CaseStudySection from "@/components/CaseStudySection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SCREENSHOTS: Record<string, { src: string; url: string }> = {
  estatenews: { src: "/estatenews-live.png", url: "estatenews.dk" },
  allegade: { src: "/allegade10-live.png", url: "allegade10.dk" },
};

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
  const screenshot = SCREENSHOTS[id];
  return {
    title: `${project.title} | Emil Kristensen`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Emil Kristensen`,
      description: project.desc,
      ...(screenshot ? { images: [{ url: screenshot.src, width: 1600, height: 1000 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Emil Kristensen`,
      description: project.desc,
      ...(screenshot ? { images: [screenshot.src] } : {}),
    },
  };
}

function ProjectHeroImage({ id, title }: { id: string; title: string }) {
  const shot = SCREENSHOTS[id];

  if (shot) {
    return (
      <BrowserFrame src={shot.src} alt={`${title} website preview`} url={shot.url} priority />
    );
  }

  // NDA / internal work — no public screenshot, show a framed placeholder.
  return (
    <div className="browser-frame">
      <div className="browser-frame-bar">
        <span className="browser-frame-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-frame-url">Confidential · under NDA</span>
      </div>
      <div
        className="browser-frame-viewport is-placeholder flex flex-col items-center justify-center gap-4"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 12px, color-mix(in srgb, var(--fg) 3%, transparent) 12px, color-mix(in srgb, var(--fg) 3%, transparent) 13px)",
        }}
      >
        <svg
          width="320"
          height="60"
          viewBox="0 0 320 60"
          fill="none"
          className="max-w-[50%] opacity-35"
          aria-hidden="true"
        >
          <rect x="0" y="4" width="80" height="8" rx="2" fill="currentColor" />
          <rect x="0" y="22" width="220" height="14" rx="3" fill="currentColor" />
          <rect x="0" y="46" width="160" height="8" rx="2" fill="currentColor" />
          <rect x="240" y="4" width="80" height="52" rx="4" fill="currentColor" opacity="0.4" />
        </svg>
        <span className="text-[11px] tracking-[0.15em] text-[var(--fg-3)]">
          NDA · Details on request
        </span>
      </div>
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
      <Nav />
      <main className="pt-16">
        <div className="project-detail-back">
          <Link href="/#work">
            ← Back to work
          </Link>
        </div>

        {project.id !== "internal" && (
          <div className="project-detail-hero">
            <ProjectHeroImage id={project.id} title={project.title} />
          </div>
        )}

        <div className="project-detail-content">
          <div className="project-detail-header">
            <div className="project-detail-header-text">
              <p className="project-detail-eyebrow">{project.eyebrow}</p>
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-desc">{project.desc}</p>
            </div>
            <div className="project-detail-sidebar">
              <div className="project-detail-meta-block">
                <h2 className="project-detail-meta-key">My role</h2>
                <p className="project-detail-meta-val">{project.role}</p>
              </div>
              <div className="project-detail-meta-block">
                <h2 className="project-detail-meta-key">Highlights</h2>
                <p className="project-detail-meta-val">{project.highlights}</p>
              </div>
              <div className="project-detail-meta-block">
                <h2 className="project-detail-meta-key">Technologies</h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="project-detail-actions">
                {project.link ? (
                  <Button asChild className="btn btn-dark h-auto rounded-lg">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel}
                    </a>
                  </Button>
                ) : project.linkHref ? (
                  <Button asChild variant="outline" className="btn btn-outline h-auto rounded-lg">
                    <Link href={project.linkHref}>{project.linkLabel}</Link>
                  </Button>
                ) : (
                  <span className="text-[13px] text-[var(--fg-3)]">{project.linkLabel}</span>
                )}
              </div>
            </div>
          </div>

          <CaseStudySection label="The challenge" items={project.caseStudy.challenges} />
          <CaseStudySection label="What I built" items={project.caseStudy.whatIBuilt} />
          <CaseStudySection label="The value created" items={project.caseStudy.value} />
        </div>
      </main>
    </>
  );
}
