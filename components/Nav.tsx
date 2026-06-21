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
import { cn } from "@/lib/utils";

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
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[200] h-16 flex items-center justify-between px-[clamp(20px,5vw,60px)] transition-[background,border-color] duration-300 border-b border-transparent",
        scrolled && !menuOpen && "bg-[var(--bg)] border-[var(--border)]",
        menuOpen && "!bg-transparent !border-transparent"
      )}>
        <Link href="/" className="font-bold text-[17px] text-[var(--fg)] no-underline tracking-[-0.02em] flex items-center gap-2 transition-colors" style={jakarta}>
          Emil Kristensen
        </Link>

        <ul className="hidden md:flex gap-9 items-center list-none">
          <li className="group relative">
            <Link
              href="/#work"
              className="flex items-center gap-[5px] text-sm text-[var(--fg-2)] no-underline transition-colors hover:text-[var(--fg)] relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[var(--brand)] after:transition-[width] after:duration-[250ms] hover:after:w-full"
            >
              Work
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 opacity-60 group-hover:rotate-180 group-hover:opacity-100"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="absolute top-full left-1/2 pt-[14px] opacity-0 pointer-events-none transition-[opacity,transform] duration-[180ms] -translate-x-1/2 -translate-y-1 z-[300] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-1.5 min-w-[200px] shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                {projects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="flex items-center gap-2.5 px-3 py-[9px] rounded-[5px] text-[13px] text-[var(--fg-2)] no-underline transition-[background,color] hover:bg-[var(--bg-off)] hover:text-[var(--fg)] whitespace-nowrap"
                  >
                    <span className="text-[11px] text-[var(--fg-3)] font-mono w-5 shrink-0">{p.eyebrow.split(" - ")[0]}</span>
                    <span>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm text-[var(--fg-2)] no-underline transition-colors hover:text-[var(--fg)] relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[var(--brand)] after:transition-[width] after:duration-[250ms] hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[13px]! font-medium! text-[var(--brand-fg)]! bg-[var(--brand)] px-[18px] py-2 rounded-[3px] transition-[background] hover:!bg-[var(--fg)] no-underline"
            >
              Contact
            </Link>
          </li>
        </ul>

        <SheetTrigger asChild>
          <button
            className={`burger flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1 z-[200] items-center justify-center${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="block h-0.5 bg-[var(--fg)] rounded-sm w-[22px]" />
            <span className="block h-0.5 bg-[var(--fg)] rounded-sm w-[22px]" />
          </button>
        </SheetTrigger>
      </nav>

      <SheetContent
        side="left"
        showCloseButton={false}
        className="menu-overlay open !inset-0 !w-full !max-w-none border-none flex flex-col justify-center items-start p-[clamp(40px,10vw,80px)] bg-[var(--bg)] dark:bg-[#111111] z-[190] opacity-100 pointer-events-auto gap-0 transition-opacity duration-[400ms]"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        <SheetClose asChild>
          <button
            className="burger open absolute top-5 right-[clamp(20px,5vw,60px)] flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1 items-center justify-center"
            aria-label="Close menu"
          >
            <span className="block h-0.5 bg-[var(--fg)] rounded-sm w-[22px]" />
            <span className="block h-0.5 bg-[var(--fg)] rounded-sm w-[22px]" />
          </button>
        </SheetClose>

        <SheetClose asChild>
          <Link href="/" className="nav-item font-bold text-[clamp(32px,8vw,56px)] text-[var(--fg-3)] leading-[1.3] tracking-[-0.03em] no-underline cursor-pointer block w-full hover:!text-[var(--brand)]" style={jakarta}>
            Home
          </Link>
        </SheetClose>

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen}>
            <CollapsibleTrigger className="nav-item font-bold text-[clamp(32px,8vw,56px)] text-[var(--fg-3)] leading-[1.3] tracking-[-0.03em] no-underline cursor-pointer block w-full text-left hover:!text-[var(--brand)]" style={jakarta}>
              Projects
            </CollapsibleTrigger>
            <CollapsibleContent
              className="menu-accordion-content overflow-hidden pl-[clamp(16px,4vw,32px)] flex flex-col gap-3 data-[state=closed]:animate-[collapsible-up_0.3s_var(--ease)] data-[state=open]:animate-[collapsible-down_0.3s_var(--ease)]"
              style={{ marginTop: 16, marginBottom: 16 }}
            >
              {projects.map((p) => (
                <SheetClose asChild key={p.id}>
                  <Link
                    href={`/projects/${p.id}`}
                    className="text-[clamp(24px,6vw,40px)] font-semibold text-[var(--fg)] no-underline block hover:text-[var(--brand)] transition-colors"
                    style={jakarta}
                  >
                    {p.title}
                  </Link>
                </SheetClose>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>

        <SheetClose asChild>
          <Link href="/about" className="nav-item font-bold text-[clamp(32px,8vw,56px)] text-[var(--fg-3)] leading-[1.3] tracking-[-0.03em] no-underline cursor-pointer block w-full hover:!text-[var(--brand)]" style={jakarta}>
            About
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/contact" className="nav-item font-bold text-[clamp(32px,8vw,56px)] text-[var(--fg-3)] leading-[1.3] tracking-[-0.03em] no-underline cursor-pointer block w-full hover:!text-[var(--brand)]" style={jakarta}>
            Contact
          </Link>
        </SheetClose>

        <div
          className="menu-bottom absolute bottom-10 left-[clamp(40px,10vw,80px)] text-[13px] text-[var(--fg-3)] flex justify-between items-center"
          style={{ right: "clamp(40px, 10vw, 80px)" }}
        >
          <span>emilck@live.dk</span>
          <ThemeToggle labels="short" className="text-[var(--fg-3)] hover:text-[var(--brand)]" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
