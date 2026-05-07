import Link from "next/link";

// Real G'Secure Labs brand mark — horizontal lockup, white-on-transparent.
// Designed for placement on dark surfaces (navbar, footer).

export function Logo({ height = 36 }: { height?: number }) {
  return (
    <Link
      href="/"
      className="flex items-center group shrink-0"
      aria-label="G'Secure Labs — home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/gsecure-logo.svg"
        alt="G'Secure Labs"
        height={height}
        style={{ height, width: "auto" }}
        className="block transition-opacity group-hover:opacity-90"
      />
    </Link>
  );
}
