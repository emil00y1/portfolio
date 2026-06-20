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
    <section className="hero">
      {/* Decorative background: dot grid fading from top-right */}
      <svg
        className="hero-bg-graphic"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
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

      <div className="hero-eyebrow">AI & Full Stack Developer</div>
      <h1
        className="hero-name"
        ref={nameRef}
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        aria-label="Emil Kristensen"
      >
        Emil<br />Kristensen
      </h1>
      <div className="hero-bottom">
        <p className="hero-bio">
          I build products people actually use by combining robust full-stack architectures with deep LLM integrations, prompt engineering, and agentic workflows.
        </p>
      </div>
      <div className="hero-arrow-indicator">
        <div className="hero-arrow-bounce">
          <ChevronDown width={20} height={20} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
