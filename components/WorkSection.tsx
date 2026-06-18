"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects";

function CardImage({ id }: { id: string }) {
  if (id === "estatenews") {
    return (
      <div className="project-image-inner">
        <Image
          src="/estatenews-live.png"
          alt="EstateNews website preview"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    );
  }
  if (id === "allegade") {
    return (
      <div className="project-image-inner">
        <Image
          src="/allegade10-live.png"
          alt="Allegade 10 website preview"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }
  return (
    <div
      className="project-image-inner ph-internal"
      style={{
        flexDirection: "column",
        gap: 16,
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.8 }}
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      <span className="ph-label" style={{ color: "var(--fg-3)", fontSize: 10, letterSpacing: "0.15em" }}>
        Confidential Case Studies
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const router = useRouter();
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
        if ((e.target as Element).closest('a[href="#contact"]')) return;
        if (isInternal) {
          router.push("#contact");
        } else {
          router.push(`/projects/${project.id}`);
        }
      }}
    >
      <div className="project-image">
        <CardImage id={project.id} />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <div className="project-num">
            {project.eyebrow}
            <span style={{ marginLeft: 12, color: "var(--fg-3)", fontWeight: 400 }}>{project.year}</span>
          </div>

          <div
            className="project-title"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: isInternal ? "clamp(18px,2.5vw,28px)" : undefined,
            }}
          >
            {project.title}
          </div>

          <p className="project-desc">{project.desc}</p>
          <div className="project-tools" style={{ fontSize: 13, color: "var(--fg-3)", marginTop: 8 }}>
            {project.tags.join(" · ")}
          </div>
          <div className="project-card-hint">
            {isInternal ? "Get in touch →" : "View details →"}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkSection() {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset slightly to keep cursor visible and clickable
      mouseX.set(e.clientX + 24);
      mouseY.set(e.clientY + 24);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="work" style={{ position: "relative" }}>
      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" as const }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>Selected Work</h2>
        <span className="section-label">2024 - 2026</span>
      </motion.div>

      {/* Full-width row-list view (all viewports) */}
      <div className="project-list">
        {projects.map((project) => {
          const isInternal = project.id === "internal";
          return (
            <div
              key={project.id}
              className={`project-row ${isInternal ? "project-row-nda" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                if (isInternal) {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  router.push(`/projects/${project.id}`);
                }
              }}
            >
              <span className="project-row-index">{project.eyebrow.split(" - ")[0]}</span>
              <div className="project-row-info">
                <h3 className="project-row-title">{project.title}</h3>
                <span className="project-row-cat">{project.cat}</span>
              </div>
              <div className="project-row-tech hidden md:block">
                {project.tags.join(" · ")}
              </div>
              <div className="project-row-meta">
                <span className="project-row-year">{project.year}</span>
                <span className="project-row-arrow">↗</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mouse-following preview tooltip (desktop only) */}
      <div className="hidden lg:block">
        <motion.div
          className="floating-preview"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            x: xSpring,
            y: ySpring,
            pointerEvents: "none",
            zIndex: 1000,
            width: hoveredId === "internal" ? 280 : 420,
            height: hoveredId === "internal" ? 185 : 260,
            overflow: "hidden",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 48px rgba(0, 0, 0, 0.12)",
            background: hoveredId === "internal" ? "linear-gradient(135deg, #161616 0%, #222222 100%)" : "var(--bg)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredId ? 1 : 0,
            scale: hoveredId ? 1 : 0.8,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {hoveredId === "estatenews" && (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/estatenews-live.png"
                alt="EstateNews preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
          {hoveredId === "allegade" && (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/allegade10-live.png"
                alt="Allegade 10 preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
          {hoveredId === "internal" && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: 24,
                textAlign: "center",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--brand)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255, 255, 255, 0.4)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                NDA Protected
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
