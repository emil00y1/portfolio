import Image from "next/image";

/**
 * A faux browser-chrome frame around a product screenshot — traffic-light dots
 * and an address bar — so screenshots read as a live product rather than a
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
    <div className="browser-frame">
      <div className="browser-frame-bar">
        <span className="browser-frame-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-frame-url">{url}</span>
      </div>
      <div className="browser-frame-viewport" style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
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
