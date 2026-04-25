"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
          Emil Kristensen
        </a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contact" className="nav-cta">Get in touch</a></li>
        </ul>
        <button
          className={`burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`menu-overlay${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <a href="#work"    onClick={close} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>Work</a>
        <a href="#about"   onClick={close} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>About</a>
        <a href="#stack"   onClick={close} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>Stack</a>
        <a href="#contact" onClick={close} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>Contact</a>
        <div className="menu-bottom">emil@example.com</div>
      </div>
    </>
  );
}
