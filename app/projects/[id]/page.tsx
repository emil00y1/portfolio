import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import Nav from "@/components/Nav";
import BrowserFrame from "@/components/BrowserFrame";
import CaseStudySection from "@/components/CaseStudySection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

const SCREENSHOTS: Record<string, { src: string; ogSrc: string; url: string }> = {
  estatenews: { src: "/estatenews-live.webp", ogSrc: "/estatenews-live.png", url: "estatenews.dk" },
  allegade: { src: "/allegade10-live.webp", ogSrc: "/allegade10-live.png", url: "allegade10.dk" },
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
      ...(screenshot ? { images: [{ url: screenshot.ogSrc, width: 1600, height: 1000 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Emil Kristensen`,
      description: project.desc,
      ...(screenshot ? { images: [screenshot.ogSrc] } : {}),
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
    <div className="browser-frame rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-off)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)] animate-[frame-in_0.7s_var(--ease)_both] motion-reduce:animate-none">
      <div className="flex items-center gap-[14px] px-4 py-[11px] bg-[var(--bg-off)] border-b border-[var(--border)]">
        <span className="flex gap-[7px] shrink-0" aria-hidden="true">
          <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
          <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
          <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
        </span>
        <span className="flex-1 text-[12px] text-[var(--fg-3)] bg-[var(--bg)] rounded-md px-3 py-[5px] text-center tracking-[0.01em] overflow-hidden text-ellipsis whitespace-nowrap">
          Confidential · under NDA
        </span>
      </div>
      <div
        className="bg-[var(--bg)] leading-[0] relative aspect-[16/10] flex flex-col items-center justify-center gap-4"
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
      <main id="main-content" className="pt-16">
        <div className="px-[clamp(20px,5vw,60px)] py-4 border-b border-[var(--border)]">
          <Link href="/#work" className="text-[13px] text-[var(--fg-3)] no-underline inline-flex items-center gap-1.5 hover:text-[var(--fg)] transition-colors">
            ← Back to work
          </Link>
        </div>

        {project.id !== "internal" && (
          <div className="px-[clamp(20px,5vw,60px)] pt-[clamp(32px,6vw,64px)] max-w-[1200px] mx-auto">
            <ProjectHeroImage id={project.id} title={project.title} />
          </div>
        )}

        <div className="px-[clamp(20px,5vw,60px)] py-[clamp(48px,7vh,80px)] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 min-[860px]:grid-cols-[1fr_320px] min-[1100px]:grid-cols-[1fr_360px] gap-[clamp(40px,6vw,80px)] mb-[clamp(48px,7vw,80px)] items-start">
            <div>
              <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg-2)] font-semibold mb-4">
                {project.eyebrow}
              </p>
              <h1
                className="text-[clamp(36px,6vw,72px)] font-extrabold tracking-[-0.04em] leading-none mb-6"
                style={jakarta}
              >
                {project.title}
              </h1>
              <p className="text-[clamp(16px,2vw,18px)] leading-[1.75] text-[var(--fg-2)] font-light max-w-[580px]">
                {project.desc}
              </p>
            </div>
            <div className="flex flex-col gap-[clamp(28px,4vw,40px)] pt-1">
              <div>
                <h2 className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg)] font-bold mb-3">My role</h2>
                <p className="text-[15px] text-[var(--fg-2)] leading-[1.75]">{project.role}</p>
              </div>
              <div>
                <h2 className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg)] font-bold mb-3">Highlights</h2>
                <p className="text-[15px] text-[var(--fg-2)] leading-[1.75]">{project.highlights}</p>
              </div>
              <div>
                <h2 className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg)] font-bold mb-3">Technologies</h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="pt-1 flex items-center gap-4">
                {project.link ? (
                  <Button asChild className="h-auto px-[18px] py-2.5 rounded-lg">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel}
                    </a>
                  </Button>
                ) : project.linkHref ? (
                  <Button asChild variant="outline" className="h-auto px-[18px] py-2.5 rounded-lg">
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
