export default function ELogo({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Outer square — fills the viewBox edge to edge */}
      <rect width="32" height="32" rx="5" fill="currentColor" />
      {/* Top cutout */}
      <rect x="8" y="7" width="16" height="4" rx="1" fill="var(--bg)" />
      {/* Middle cutout — shorter to read as the middle bar of E */}
      <rect x="8" y="14" width="11" height="4" rx="1" fill="var(--bg)" />
      {/* Bottom cutout */}
      <rect x="8" y="21" width="16" height="4" rx="1" fill="var(--bg)" />
    </svg>
  );
}
