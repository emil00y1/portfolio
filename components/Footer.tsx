"use client";

import { useTheme } from "@/lib/useTheme";

export default function Footer() {
  const { theme, toggle } = useTheme();

  return (
    <footer>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span>Emil Kristensen © 2026</span>
        <span style={{ color: "var(--fg-3)" }}>·</span>
        <button
          onClick={toggle}
          style={{
            background: "none",
            border: "none",
            color: "var(--fg-2)",
            fontSize: 12,
            fontFamily: "inherit",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: 0,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              Light Mode
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              Dark Mode
            </>
          )}
        </button>
      </div>
      <span>Copenhagen, Denmark</span>
    </footer>
  );
}
