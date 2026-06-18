"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/useTheme";
import { projects } from "@/lib/projects";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const { theme, toggle } = useTheme();

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
      <nav className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <Link href="/" className="nav-logo" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
          Emil Kristensen
        </Link>
        <ul className="nav-links">
          <li><Link href="/#work">Work</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#libraries">Libraries</Link></li>
          <li><Link href="/#contact" className="nav-cta">Get in touch</Link></li>
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
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <button className="nav-item" onClick={() => setProjectsOpen(!projectsOpen)} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
            Projects
          </button>
          <div 
            className="menu-accordion-content"
            style={{
              maxHeight: projectsOpen ? "300px" : "0px",
              opacity: projectsOpen ? 1 : 0,
              marginTop: projectsOpen ? 16 : 0,
              marginBottom: projectsOpen ? 16 : 0,
              transition: "max-height 0.4s var(--ease), opacity 0.4s var(--ease), margin 0.4s var(--ease)"
            }}
          >
            {projects.map(p => (
               <Link key={p.id} href={p.id === "internal" ? "/#contact" : `/projects/${p.id}`} onClick={close}>
                 {p.title}
               </Link>
            ))}
          </div>
        </div>
        <Link href="/#about"   className="nav-item" onClick={close} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>About</Link>
        <Link href="/#libraries" className="nav-item" onClick={close} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>Libraries</Link>
        <Link href="/#contact" className="nav-item" onClick={close} style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>Contact</Link>
        
        <div className="menu-bottom" style={{ right: "clamp(40px, 10vw, 80px)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>emilck@live.dk</span>
          <button
            onClick={toggle}
            style={{
              background: "none",
              border: "none",
              color: "rgba(248, 248, 248, 0.4)",
              fontSize: 13,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: 0,
              fontFamily: "var(--font-sans), sans-serif",
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                Light
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                Dark
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
