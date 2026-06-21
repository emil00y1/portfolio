"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ThemeToggle from "@/components/ThemeToggle";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <nav className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <Link href="/" className="nav-logo" style={jakarta}>
          Emil Kristensen
        </Link>
        <ul className="nav-links">
          <li className="nav-work-item">
            <Link href="/#work" className="nav-work-trigger">
              Work
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className="nav-work-chevron">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="nav-dropdown">
              <div className="nav-dropdown-inner">
                {projects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="nav-dropdown-item"
                  >
                    <span className="nav-dropdown-num">{p.eyebrow.split(" - ")[0]}</span>
                    <span>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact" className="nav-cta">Contact</Link></li>
        </ul>
        <SheetTrigger asChild>
          <button
            className={`burger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
          </button>
        </SheetTrigger>
      </nav>

      <SheetContent
        side="left"
        showCloseButton={false}
        className="menu-overlay open !w-full !max-w-none border-none p-[clamp(40px,10vw,80px)]"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        <SheetClose asChild>
          <button
            className="burger open absolute top-5 right-[clamp(20px,5vw,60px)]"
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>
        </SheetClose>

        <SheetClose asChild>
          <Link href="/" className="nav-item" style={jakarta}>Home</Link>
        </SheetClose>

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen}>
            <CollapsibleTrigger className="nav-item" style={jakarta}>
              Projects
            </CollapsibleTrigger>
            <CollapsibleContent
              className="menu-accordion-content overflow-hidden data-[state=closed]:animate-[collapsible-up_0.3s_var(--ease)] data-[state=open]:animate-[collapsible-down_0.3s_var(--ease)]"
              style={{ marginTop: 16, marginBottom: 16 }}
            >
              {projects.map((p) => (
                <SheetClose asChild key={p.id}>
                  <Link href={`/projects/${p.id}`}>
                    {p.title}
                  </Link>
                </SheetClose>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>

        <SheetClose asChild>
          <Link href="/about" className="nav-item" style={jakarta}>About</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/contact" className="nav-item" style={jakarta}>Contact</Link>
        </SheetClose>

        <div
          className="menu-bottom"
          style={{
            right: "clamp(40px, 10vw, 80px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>emilck@live.dk</span>
          <ThemeToggle labels="short" className="text-[var(--fg-3)] hover:text-[var(--brand)]" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
