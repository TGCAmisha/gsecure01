// Branded image wrapper — applies navy/green duotone overlay + grain so photos
// look intentional and cohesive against our dark UI.

type Props = {
  src: string;
  alt: string;
  className?: string;
  intensity?: "soft" | "medium" | "strong";
  rounded?: string;
};

export function BrandImage({
  src,
  alt,
  className = "",
  intensity = "medium",
  rounded = "rounded-xl"
}: Props) {
  const overlay =
    intensity === "soft"
      ? "from-navy-deep/60 via-navy/40 to-transparent"
      : intensity === "strong"
      ? "from-navy-deep/90 via-navy-deep/70 to-navy/50"
      : "from-navy-deep/80 via-navy/55 to-navy/30";

  const tint =
    intensity === "strong"
      ? "mix-blend-multiply opacity-70"
      : "mix-blend-luminosity opacity-90";

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${tint}`}
      />
      {/* Brand duotone tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,22,40,0.55) 0%, rgba(0,229,160,0.06) 50%, rgba(0,194,255,0.10) 100%)"
        }}
      />
      {/* Bottom legibility gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlay} pointer-events-none`} />
      {/* Subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.6'/></svg>\")"
        }}
      />
    </div>
  );
}
