"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Lock } from "lucide-react";
import { projects } from "@/lib/projects";
import TransitionLink from "@/components/TransitionLink";

export default function WorkSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const reducedMotion = useRef(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const handleMouseMove = (e: MouseEvent) => {
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

          const rowContent = (
            <>
              <span className="project-row-index">{project.eyebrow.split(" - ")[0]}</span>
              <div className="project-row-info">
                <h3 className="project-row-title">{project.title}</h3>
                <span className="project-row-cat">{project.cat}</span>
              </div>
              <div className="project-row-tech hidden md:block">
                {project.tags.join(" · ")}
              </div>
              <div className="project-row-meta">
                <span className="project-row-arrow">↗</span>
              </div>
            </>
          );

          const rowClass = `project-row ${isInternal ? "project-row-nda" : ""}`;
          const hoverHandlers = {
            onMouseEnter: () => setHoveredId(project.id),
            onMouseLeave: () => setHoveredId(null),
          };

          return isInternal ? (
            <button
              key={project.id}
              type="button"
              className={rowClass}
              {...hoverHandlers}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {rowContent}
            </button>
          ) : (
            <TransitionLink
              key={project.id}
              href={`/projects/${project.id}`}
              direction="forward"
              className={rowClass}
              {...hoverHandlers}
            >
              {rowContent}
            </TransitionLink>
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
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{
            opacity: hoveredId ? 1 : 0,
            scale: hoveredId ? 1 : 0.92,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {(hoveredId === "estatenews" || hoveredId === "allegade") && (
            <div className="browser-frame preview-frame">
              <div className="browser-frame-bar">
                <span className="browser-frame-dots" aria-hidden="true"><i /><i /><i /></span>
                <span className="browser-frame-url">
                  {hoveredId === "estatenews" ? "estatenews.dk" : "allegade10.dk"}
                </span>
              </div>
              <div className="browser-frame-viewport" style={{ position: "relative", height: 220 }}>
                <Image
                  src={hoveredId === "estatenews" ? "/estatenews-live.png" : "/allegade10-live.png"}
                  alt={hoveredId === "estatenews" ? "EstateNews preview" : "Allegade 10 preview"}
                  fill
                  sizes="420px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </div>
            </div>
          )}
          {hoveredId === "internal" && (
            <div
              className="browser-frame"
              style={{
                background: "linear-gradient(135deg, #161616 0%, #222222 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: 40,
                textAlign: "center",
                minHeight: 160,
              }}
            >
              <Lock width={28} height={28} strokeWidth={1.5} style={{ stroke: "var(--brand)" }} />
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
