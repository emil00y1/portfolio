import Image from "next/image";

/**
 * A faux browser-chrome frame around a product screenshot - traffic-light dots
 * and an address bar - so screenshots read as a live product rather than a
 * cropped image. The image keeps its natural aspect ratio (no hard crop).
 */
export default function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
}: {
  src: string;
  alt: string;
  /** Text shown in the faux address bar, e.g. "estatenews.dk". */
  url: string;
  priority?: boolean;
}) {
  return (
    <div className="browser-frame rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-off)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)] animate-[frame-in_0.7s_var(--ease)_both] hover:shadow-[0_32px_72px_-24px_rgba(0,0,0,0.34)] hover:-translate-y-[3px] transition-[box-shadow,transform] duration-[400ms] motion-reduce:animate-none motion-reduce:hover:transform-none">
      <div className="flex items-center gap-[14px] px-4 py-[11px] bg-[var(--bg-off)] border-b border-[var(--border)]">
        <span className="flex gap-[7px] shrink-0" aria-hidden="true">
          <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
          <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
          <i className="w-[11px] h-[11px] rounded-full bg-[var(--border)] not-italic" />
        </span>
        <span className="flex-1 text-[12px] text-[var(--fg-3)] bg-[var(--bg)] rounded-md px-3 py-[5px] text-center tracking-[0.01em] overflow-hidden text-ellipsis whitespace-nowrap">{url}</span>
      </div>
      <div className="bg-[var(--bg)] leading-[0] relative" style={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 1200px"
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority={priority}
        />
      </div>
    </div>
  );
}
