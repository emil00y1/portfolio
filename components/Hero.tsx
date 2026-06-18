"use client";

import { useEffect, useRef } from "react";

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
      <div className="hero-year">Copenhagen · 2026</div>
      <div className="hero-arrow-indicator">
        <div className="hero-arrow-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
