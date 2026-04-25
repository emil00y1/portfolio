"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/projects";
import ProjectDrawer from "./ProjectDrawer";


function CardImage({ id }: { id: string }) {
  if (id === "estatenews") {
    return (
      <div className="project-image-inner ph-estatenews" style={{ flexDirection: "column", gap: 16 }}>
        <svg width="480" height="120" viewBox="0 0 480 120" fill="none" style={{ maxWidth: "80%", opacity: 0.6 }}>
          <rect x="0" y="8" width="160" height="14" rx="3" fill="#F5622E" />
          <rect x="0" y="36" width="340" height="22" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="0" y="68" width="300" height="12" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="0" y="86" width="260" height="12" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="360" y="36" width="120" height="80" rx="4" fill="white" fillOpacity="0.08" />
        </svg>
        <span className="ph-label" style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>estatenews.dk</span>
      </div>
    );
  }
  if (id === "allegade") {
    return (
      <div className="project-image-inner ph-allegade" style={{ flexDirection: "column", gap: 16 }}>
        <svg width="480" height="100" viewBox="0 0 480 100" fill="none" style={{ maxWidth: "80%", opacity: 0.5 }}>
          <rect x="160" y="0" width="160" height="60" rx="6" fill="#C4B5A5" />
          <rect x="140" y="60" width="200" height="8" rx="2" fill="#A8967F" />
          <rect x="180" y="75" width="120" height="6" rx="2" fill="#A8967F" fillOpacity="0.5" />
          <rect x="0" y="20" width="120" height="6" rx="2" fill="#A8967F" fillOpacity="0.3" />
          <rect x="0" y="32" width="90" height="6" rx="2" fill="#A8967F" fillOpacity="0.2" />
          <rect x="360" y="20" width="120" height="6" rx="2" fill="#A8967F" fillOpacity="0.3" />
          <rect x="380" y="32" width="80" height="6" rx="2" fill="#A8967F" fillOpacity="0.2" />
        </svg>
        <span className="ph-label" style={{ color: "#A8967F", fontSize: 11 }}>allegade10.dk</span>
      </div>
    );
  }
  return (
    <div className="project-image-inner ph-internal" style={{ flexDirection: "column", gap: 12 }}>
      <svg width="320" height="60" viewBox="0 0 320 60" fill="none" style={{ maxWidth: "80%", opacity: 0.35 }}>
        <rect x="0" y="4" width="80" height="8" rx="2" fill="#6E5E4C" />
        <rect x="0" y="22" width="220" height="14" rx="3" fill="#6E5E4C" />
        <rect x="0" y="46" width="160" height="8" rx="2" fill="#6E5E4C" />
        <rect x="240" y="4" width="80" height="52" rx="4" fill="#E0D2C5" />
      </svg>
      <span className="ph-label" style={{ color: "#C4B5A5", fontSize: 11, letterSpacing: "0.15em" }}>
        NDA · Details on request
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const isInternal = project.id === "internal";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" as const, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`project-card${isInternal ? " project-nda" : ""}`}
      onClick={(e) => {
        if ((e.target as Element).closest('a[target="_blank"]')) return;
        onOpen(project);
      }}
    >
      <div className="project-image" style={isInternal ? { aspectRatio: "16/5" } : undefined}>
        <CardImage id={project.id} />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <div className="project-num">{project.eyebrow}</div>

          {project.id === "allegade" ? (
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
              <div
                className="project-title"
                style={{ marginBottom: 0, fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                {project.title}
              </div>
              <span className="soon-badge">Launching soon</span>
            </div>
          ) : (
            <div
              className="project-title"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: isInternal ? "clamp(18px,2.5vw,28px)" : undefined,
              }}
            >
              {project.title}
            </div>
          )}

          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="project-card-hint">View details →</div>
        </div>

        <div className="project-link">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link"
              title={`Visit ${project.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              ↗
            </a>
          )}
          {isInternal && (
            <a href="#contact" className="arrow-link" onClick={(e) => e.stopPropagation()}>→</a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work">
      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" as const }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>Selected Work</h2>
        <span className="section-label">2024 — 2026</span>
      </motion.div>

      <div>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
        ))}
      </div>

      <ProjectDrawer project={active} onClose={() => setActive(null)} />
    </section>
  );
}
