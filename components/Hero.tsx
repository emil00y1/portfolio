"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const FULL = "Emil\nKristensen.";

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
          if (i < iter) {
            return i === FULL.length - 1
              ? '<span style="color:var(--orange)">.</span>'
              : char;
          }
          const rand = CHARS[Math.floor(Math.random() * CHARS.length)];
          return char === "."
            ? `<span style="color:var(--orange)">${rand}</span>`
            : rand;
        }).join("");

        if (iter >= FULL.length) clearInterval(iv);
        iter += 1.2;
      }, 35);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero">
      <div className="hero-eyebrow">— Full Stack Developer</div>
      <h1
        className="hero-name"
        ref={nameRef}
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
      >
        Emil<br />Kristensen<span>.</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-bio">
          I build products people actually use — from database to browser, with AI where it counts.
        </p>
        <div className="hero-status">
          <span className="status-dot" />
          <span>Open to work</span>
        </div>
      </div>
      <div className="hero-year">Copenhagen · 2026</div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
