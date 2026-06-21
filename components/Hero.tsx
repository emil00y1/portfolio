"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const FULL = "Emil\nKristensen";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const timeout = setTimeout(() => {
      let iter = 0;
      const iv = setInterval(() => {
        el.innerHTML = FULL.split("").map((char, i) => {
          if (char === "\n") return "<br>";
          if (i < iter) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("");

        if (iter >= FULL.length) clearInterval(iv);
        iter += 1.2;
      }, 35);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-svh flex flex-col justify-end overflow-hidden px-[clamp(20px,5vw,60px)] pt-[calc(64px+clamp(60px,10vh,120px))] pb-[clamp(40px,8vh,80px)] max-md:pb-[max(100px,14vh)]">
      {/* Decorative background: dot grid fading from top-right */}
      <svg
        className="hero-bg-graphic absolute inset-0 w-full h-full text-[var(--fg)] opacity-[0.07] pointer-events-none z-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="2" fill="currentColor" />
          </pattern>
          <radialGradient id="dot-fade" cx="80%" cy="15%" r="90%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="80%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dot-mask">
            <rect width="100%" height="100%" fill="url(#dot-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dot-mask)" />
      </svg>

      <div className="relative z-[1] text-[12px] tracking-[0.12em] text-[var(--brand)] font-medium uppercase mb-5 opacity-0 translate-y-3 animate-[fadeUp_0.7s_0.3s_var(--ease)_forwards] motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:translate-y-0">
        AI &amp; Full Stack Developer
      </div>
      <h1
        className="relative z-[1] text-[clamp(52px,10vw,120px)] font-extrabold leading-none tracking-[-0.04em] text-[var(--fg)] opacity-0 translate-y-5 animate-[fadeUp_0.8s_0.4s_var(--ease)_forwards] motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:translate-y-0"
        ref={nameRef}
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        aria-label="Emil Kristensen"
      >
        Emil<br />Kristensen
      </h1>
      <div className="relative z-[1] flex justify-between items-end mt-[clamp(32px,5vh,60px)] flex-wrap gap-6 opacity-0 translate-y-3 animate-[fadeUp_0.7s_0.7s_var(--ease)_forwards] motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:translate-y-0">
        <p className="max-w-[380px] text-[clamp(15px,2vw,17px)] leading-[1.65] text-[var(--fg-2)] font-light">
          I build products people actually use by combining robust full-stack architectures with deep LLM integrations, prompt engineering, and agentic workflows.
        </p>
      </div>
      <div className="hero-arrow-indicator absolute bottom-7 left-1/2 -translate-x-1/2 text-[var(--fg-3)] flex items-center justify-center opacity-0 animate-[fadeIn_0.7s_1.2s_var(--ease)_forwards] pointer-events-none z-[10] motion-reduce:animate-none motion-reduce:opacity-100 max-[700px]:hidden">
        <div className="animate-[bounce-down_2s_infinite_ease-in-out] flex motion-reduce:animate-none">
          <ChevronDown width={20} height={20} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
