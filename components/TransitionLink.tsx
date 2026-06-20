"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type Direction = "forward" | "back";

type TransitionLinkProps = ComponentProps<typeof Link> & {
  /**
   * Direction of travel. Sets a `data-vt` attribute on <html> during the
   * transition so CSS can slide content the right way (forward = deeper,
   * back = returning). Progressive enhancement: browsers without the View
   * Transitions API just navigate normally.
   */
  direction?: Direction;
};

export default function TransitionLink({
  direction = "forward",
  href,
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;

    // Let the browser handle modified clicks, external/new-tab, and hash-only links.
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      typeof href !== "string"
    ) {
      return;
    }

    const supportsVT =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsVT) return; // default <Link> navigation

    e.preventDefault();
    const root = document.documentElement;
    root.dataset.vt = direction;

    // router.push() is async and resolves before the new route paints, so we
    // hold the transition's snapshot open until React has committed and laid
    // out the new tree (two animation frames). These routes are statically
    // prerendered, so the new view is ready almost immediately.
    const transition = document.startViewTransition(async () => {
      router.push(href);
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      );
    });

    transition.finished.finally(() => {
      delete root.dataset.vt;
    });
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
