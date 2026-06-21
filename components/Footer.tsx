"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer>
      <div className="footer-cta-block">
        <p className="footer-cta-label section-label">Get in touch</p>
        <h2 className="footer-cta-heading" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
          Let&apos;s build something.
        </h2>
        <Button
          asChild
          className="btn btn-brand h-auto gap-2 rounded-lg text-[15px]"
          style={{ padding: "14px 28px" }}
        >
          <a href="mailto:emilck@live.dk">
            Send me an email
            <ArrowUpRight className="size-[15px]" strokeWidth={2.5} />
          </a>
        </Button>
        <div className="footer-social">
          <a href="https://linkedin.com/in/emilkristensen" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/emil00y1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Emil Kristensen © 2026</span>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ color: "var(--fg-3)" }}>Copenhagen, Denmark</span>
          <span style={{ color: "var(--fg-3)" }}>·</span>
          <ThemeToggle
            labels="long"
            className="text-[var(--fg-2)] hover:text-[var(--brand)]"
          />
        </div>
      </div>
    </footer>
  );
}
