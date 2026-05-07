// Decorative gradient avatar with monogram — designed in lieu of real headshots.

const gradients = [
  ["#0A1628", "#13243D", "#00E5A0"],
  ["#0A1628", "#1B2D49", "#00C2FF"],
  ["#13243D", "#0A1628", "#FF6B35"],
  ["#1B2D49", "#13243D", "#00E5A0"]
];

export function PortraitAvatar({ name, seed = 0 }: { name: string; seed?: number }) {
  const initials = name
    .replace(/[\[\]]/g, "")
    .trim()
    .split(/\s+/)
    .map((p) => p[0] || "")
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || "•";
  const palette = gradients[seed % gradients.length];

  return (
    <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
      <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`bg-${seed}`} cx="50%" cy="35%" r="80%">
            <stop offset="0%" stopColor={palette[1]} />
            <stop offset="100%" stopColor={palette[0]} />
          </radialGradient>
          <linearGradient id={`accent-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette[2]} stopOpacity="0.6" />
            <stop offset="100%" stopColor={palette[2]} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="200" height="250" fill={`url(#bg-${seed})`} />
        {/* Decorative grid */}
        <g opacity="0.18">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" x2="200" y1={i * 32} y2={i * 32} stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`v-${i}`} y1="0" y2="250" x1={i * 40} x2={i * 40} stroke="white" strokeWidth="0.5" />
          ))}
        </g>
        {/* Decorative circle accent */}
        <circle cx="100" cy="140" r="55" fill={`url(#accent-${seed})`} />
        <circle cx="100" cy="140" r="55" fill="none" stroke={palette[2]} strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="100" cy="140" r="80" fill="none" stroke={palette[2]} strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 6" />
        {/* Initials */}
        <text
          x="100"
          y="148"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="48"
          fontWeight="500"
          fill="white"
          fillOpacity="0.95"
        >
          {initials}
        </text>
        {/* Bottom accent stripe */}
        <rect x="0" y="240" width="200" height="2" fill={palette[2]} fillOpacity="0.7" />
      </svg>
    </div>
  );
}
