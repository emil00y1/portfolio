"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/useTheme";
import { cn } from "@/lib/utils";

export default function ThemeToggle({
  className,
  labels = "long",
}: {
  className?: string;
  /** "long" → "Light Mode" / "Dark Mode" (footer); "short" → "Light" / "Dark" (nav menu). */
  labels?: "long" | "short";
}) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const word = isDark ? "Light" : "Dark";
  const label = labels === "long" ? `${word} Mode` : word;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-xs transition-colors",
        className
      )}
    >
      {isDark ? <Sun className="size-3" /> : <Moon className="size-3" />}
      {label}
    </button>
  );
}
