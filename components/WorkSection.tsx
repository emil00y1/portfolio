"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Lock } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

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
    <section id="work" className="relative">
      <motion.div
        className="px-[clamp(20px,5vw,60px)] pt-[clamp(48px,7vh,80px)] flex justify-between items-baseline mb-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" as const }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.03em]" style={jakarta}>Selected Work</h2>
      </motion.div>

      {/* Full-width row-list view (all viewports) */}
      <div className="px-[clamp(20px,5vw,60px)] pb-[clamp(48px,8vh,80px)]">
        {projects.map((project) => {
          const isInternal = project.id === "internal";

          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={cn(
                "group grid grid-cols-[40px_1fr_60px] md:grid-cols-[80px_1.8fr_3fr_120px] gap-4 md:gap-0 items-center py-8",
                "border-t border-t-transparent border-b border-b-[var(--border)] -mt-px",
                "cursor-pointer w-full text-left no-underline text-inherit bg-transparent font-inherit",
                "hover:border-[var(--brand)] hover:z-[2] relative transition-[border-color] duration-300",
                "focus-visible:outline-2 focus-visible:outline-[var(--brand)] focus-visible:outline-offset-4 focus-visible:rounded-sm",
                isInternal && "project-row-nda"
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <span className="text-[13px] text-[var(--fg-3)] font-mono">{project.eyebrow.split(" - ")[0]}</span>
              <div className="flex flex-col gap-1">
                <h3
                  className="text-[clamp(20px,2.2vw,26px)] font-bold tracking-[-0.02em] text-[var(--fg)] group-hover:text-[var(--brand)] group-hover:translate-x-1.5 transition-[color,transform] duration-300 motion-reduce:group-hover:translate-x-0"
                  style={jakarta}
                >
                  {project.title}
                </h3>
                <span className="text-[13px] text-[var(--fg-2)] group-hover:translate-x-1.5 transition-transform duration-300 motion-reduce:group-hover:translate-x-0">
                  {project.cat}
                </span>
              </div>
              <div className="hidden md:block text-[13px] text-[var(--fg-3)] pr-6">
                {project.tags.join(" · ")}
              </div>
              <div className="flex items-center justify-end gap-3 text-sm text-[var(--fg-3)] text-right">
                <span className={cn(
                  "text-[18px] transition-[transform,color] duration-300",
                  isInternal
                    ? "group-hover:translate-x-[3px]"
                    : "group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-[var(--brand)]"
                )}>↗</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mouse-following preview tooltip (desktop only) */}
      <div className="hidden lg:block">
        <motion.div
          className="floating-preview pointer-events-none"
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
            <div className="browser-frame preview-frame rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-off)]">
              <div className="flex items-center gap-[14px] px-4 py-[11px] bg-[var(--bg-off)] border-b border-[var(--border)]">
                <span className="flex gap-[7px] shrink-0" aria-hidden="true">
                  <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
                  <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
                  <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
                </span>
                <span className="flex-1 text-[12px] text-[var(--fg-3)] bg-[var(--bg)] rounded-md px-3 py-[5px] text-center tracking-[0.01em] overflow-hidden text-ellipsis whitespace-nowrap">
                  {hoveredId === "estatenews" ? "estatenews.dk" : "allegade10.dk"}
                </span>
              </div>
              <div className="bg-[var(--bg)] leading-[0] relative" style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <Image
                  src={hoveredId === "estatenews" ? "/estatenews-live.webp" : "/allegade10-live.webp"}
                  alt={hoveredId === "estatenews" ? "EstateNews preview" : "Allegade 10 preview"}
                  fill
                  sizes="420px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          )}
          {hoveredId === "internal" && (
            <div className="browser-frame nda-preview preview-frame rounded-xl overflow-hidden border border-[var(--border)] flex flex-col items-center justify-center gap-3 p-10 text-center min-h-[160px] bg-[var(--bg-off)]">
              <Lock width={28} height={28} strokeWidth={1.5} className="text-[var(--brand)]" />
              <span className="text-[10px] text-[var(--fg-3)] tracking-[0.15em] uppercase font-semibold">NDA Protected</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
