"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

function DrawerImage({ project }: { project: Project }) {
  if (project.imgClass === "ph-estatenews") {
    return (
      <div className={`drawer-image-inner ${project.imgClass}`}>
        <svg width="360" height="90" viewBox="0 0 480 120" fill="none">
          <rect x="0" y="8" width="160" height="14" rx="3" fill="#F5622E" />
          <rect x="0" y="36" width="340" height="22" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="0" y="68" width="300" height="12" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="0" y="86" width="260" height="12" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="360" y="36" width="120" height="80" rx="4" fill="white" fillOpacity="0.08" />
        </svg>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
          estatenews.dk
        </span>
      </div>
    );
  }
  if (project.imgClass === "ph-allegade") {
    return (
      <div className={`drawer-image-inner ${project.imgClass}`}>
        <svg width="360" height="80" viewBox="0 0 480 100" fill="none">
          <rect x="160" y="0" width="160" height="60" rx="6" fill="#C4B5A5" />
          <rect x="140" y="60" width="200" height="8" rx="2" fill="#A8967F" />
          <rect x="180" y="75" width="120" height="6" rx="2" fill="#A8967F" fillOpacity="0.5" />
        </svg>
        <span style={{ fontSize: 11, color: "#A8967F", letterSpacing: "0.1em" }}>
          allegade10.dk
        </span>
      </div>
    );
  }
  return (
    <div className={`drawer-image-inner ${project.imgClass}`}>
      <svg width="280" height="60" viewBox="0 0 320 60" fill="none">
        <rect x="0" y="4" width="80" height="8" rx="2" fill="#6E5E4C" />
        <rect x="0" y="22" width="220" height="14" rx="3" fill="#6E5E4C" />
        <rect x="0" y="46" width="160" height="8" rx="2" fill="#6E5E4C" />
        <rect x="240" y="4" width="80" height="52" rx="4" fill="#E0D2C5" />
      </svg>
      <span style={{ fontSize: 11, color: "#C4B5A5", letterSpacing: "0.1em" }}>
        NDA · details on request
      </span>
    </div>
  );
}

export default function ProjectDrawer({ project, onClose }: Props) {
  const isOpen = project !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        className={`drawer-overlay${isOpen ? " open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`drawer${isOpen ? " open" : ""}`}
        aria-label="Project details"
        aria-hidden={!isOpen}
      >
        <div className="drawer-header">
          <span className="section-label">{project?.eyebrow ?? "Project"}</span>
          <button className="drawer-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {project && (
          <>
            <div className="drawer-body">
              <div className="drawer-image">
                <DrawerImage project={project} />
              </div>
              <div className="drawer-cat">{project.cat}</div>
              <h2
                className="drawer-title"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                {project.title}
              </h2>
              <p className="drawer-desc">{project.desc}</p>
              <div className="drawer-meta">
                <div className="drawer-meta-row">
                  <div className="drawer-meta-key">My role</div>
                  <div className="drawer-meta-val">{project.role}</div>
                </div>
                <div className="drawer-meta-row">
                  <div className="drawer-meta-key">Highlights</div>
                  <div className="drawer-meta-val">{project.highlights}</div>
                </div>
              </div>
              <div className="drawer-tags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="drawer-footer">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  {project.linkLabel}
                </a>
              ) : project.linkHref ? (
                <a
                  href={project.linkHref}
                  className="btn btn-outline"
                  onClick={onClose}
                >
                  {project.linkLabel}
                </a>
              ) : (
                <span style={{ fontSize: 13, color: "var(--fg-3)" }}>
                  {project.linkLabel}
                </span>
              )}
            </div>
          </>
        )}
      </aside>
    </>
  );
}
