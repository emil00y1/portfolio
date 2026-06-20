"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span>Emil Kristensen © 2026</span>
        <span style={{ color: "var(--fg-3)" }}>·</span>
        <ThemeToggle
          labels="long"
          className="text-[var(--fg-2)] hover:text-[var(--brand)]"
        />
      </div>
      <span>Copenhagen, Denmark</span>
    </footer>
  );
}
