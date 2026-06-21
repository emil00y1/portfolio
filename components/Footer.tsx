"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const jakarta = { fontFamily: "var(--font-jakarta), sans-serif" };

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-off)] border-t border-[var(--border)]">
      <div className="px-[clamp(20px,5vw,60px)] pt-[clamp(64px,10vh,100px)] pb-[clamp(48px,8vh,80px)] flex justify-between items-end gap-[clamp(40px,6vw,80px)] flex-wrap">
        <div className="flex flex-col items-start gap-7">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--fg-3)] font-medium">Get in touch</p>
          <h2
            className="text-[clamp(40px,7vw,80px)] font-extrabold tracking-[-0.04em] leading-none text-[var(--fg)]"
            style={jakarta}
          >
            Let&apos;s build<br />something.
          </h2>
          <Button
            asChild
            className="h-auto gap-2 rounded-lg text-[15px]"
            style={{ padding: "14px 28px" }}
          >
            <a href="mailto:emilck@live.dk">
              Send me an email
              <ArrowUpRight className="size-[15px]" strokeWidth={2.5} />
            </a>
          </Button>
        </div>
        <div className="flex flex-col gap-4 pb-1">
          <a href="mailto:emilck@live.dk" className="flex items-center gap-2.5 text-sm text-[var(--fg-2)] no-underline hover:text-[var(--brand)] transition-colors">
            <Mail className="size-4 shrink-0" strokeWidth={1.5} />
            emilck@live.dk
          </a>
          <a
            href="https://linkedin.com/in/emilkristensen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm text-[var(--fg-2)] no-underline hover:text-[var(--brand)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
              <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 6.5v5M4 4.5v.01M7 11.5V8.5c0-1.1.9-2 2-2s2 .9 2 2v3M7 6.5v5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/emil00y1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm text-[var(--fg-2)] no-underline hover:text-[var(--brand)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M8 1.5a6.5 6.5 0 00-2.056 12.675c.325.06.444-.141.444-.313v-1.094c-1.806.393-2.187-.875-2.187-.875-.295-.75-.72-.95-.72-.95-.588-.402.044-.394.044-.394.65.046 1 .669 1 .669.578.994 1.519.706 1.888.54.059-.42.226-.706.41-.869-1.443-.163-2.96-.721-2.96-3.206 0-.709.253-1.288.669-1.741-.067-.164-.29-.824.063-1.719 0 0 .546-.174 1.787.667A6.22 6.22 0 018 5.906c.55.003 1.106.075 1.625.219 1.24-.841 1.785-.667 1.785-.667.356.895.132 1.555.065 1.719.418.453.669 1.032.669 1.741 0 2.492-1.52 3.04-2.966 3.2.234.2.443.597.443 1.204v1.784c0 .174.118.376.447.313A6.5 6.5 0 008 1.5z"
                fill="currentColor" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div className="px-[clamp(20px,5vw,60px)] py-5 border-t border-[var(--border)] flex justify-between items-center flex-wrap gap-2.5 text-[12px] text-[var(--fg-3)]">
        <span>Emil Kristensen © 2026</span>
        <div className="flex gap-3 items-center">
          <span className="text-[var(--fg-3)]">Copenhagen, Denmark</span>
          <span className="text-[var(--fg-3)]">·</span>
          <ThemeToggle
            labels="long"
            className="text-[var(--fg-2)] hover:text-[var(--brand)]"
          />
        </div>
      </div>
    </footer>
  );
}
