"use client";

import { motion } from "framer-motion";

type Slug = "healthcare" | "finance" | "energy" | "telecom";

export function IndustryScene({ slug }: { slug: string }) {
  const Comp = scenes[slug as Slug] ?? scenes.healthcare;
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-strong">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <Comp />
    </div>
  );
}

const scenes: Record<Slug, () => JSX.Element> = {
  healthcare: function HealthcareScene() {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="hc-pulse" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5A0" stopOpacity="1" />
            <stop offset="100%" stopColor="#00E5A0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* ECG line */}
        <motion.path
          d="M 0 150 L 80 150 L 95 150 L 110 110 L 125 190 L 140 150 L 200 150 L 215 150 L 230 110 L 245 190 L 260 150 L 400 150"
          fill="none"
          stroke="url(#hc-pulse)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M 0 150 L 80 150 L 95 150 L 110 110 L 125 190 L 140 150 L 200 150 L 215 150 L 230 110 L 245 190 L 260 150 L 400 150"
          fill="none"
          stroke="rgba(0,229,160,0.15)"
          strokeWidth="1"
        />
        {/* Cross / shield */}
        <g transform="translate(170 100)">
          <motion.g
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "30px", originY: "30px" }}
          >
            <rect x="20" y="0" width="20" height="60" rx="3" fill="rgba(0,229,160,0.15)" stroke="#00E5A0" strokeOpacity="0.5" />
            <rect x="0" y="20" width="60" height="20" rx="3" fill="rgba(0,229,160,0.15)" stroke="#00E5A0" strokeOpacity="0.5" />
          </motion.g>
        </g>
        {/* Floating data dots */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + (i * 30) % 350}
            cy={40 + ((i * 17) % 220)}
            r="2"
            fill="#00E5A0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>
    );
  },
  finance: function FinanceScene() {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="fin-bar" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5A0" />
            <stop offset="100%" stopColor="#00C2FF" />
          </linearGradient>
        </defs>
        {/* Candlestick chart */}
        {[
          [60, 100, 60, 220, 130, 210],
          [100, 80, 60, 180, 100, 220],
          [140, 60, 30, 140, 80, 230],
          [180, 90, 50, 160, 110, 235],
          [220, 50, 70, 130, 70, 200],
          [260, 70, 50, 150, 80, 220],
          [300, 40, 60, 120, 60, 215],
          [340, 30, 50, 110, 50, 230]
        ].map(([x, top, h1, mid, h2, bot], i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <line x1={x} x2={x} y1={top} y2={top + h1 + mid + h2 + bot - top} stroke="rgba(0,194,255,0.3)" strokeWidth="1" />
            <rect
              x={x - 8}
              y={top + h1}
              width="16"
              height={mid}
              fill="url(#fin-bar)"
              fillOpacity={i % 2 === 0 ? 0.85 : 0.5}
              rx="1"
            />
          </motion.g>
        ))}
        {/* Trend line */}
        <motion.path
          d="M 60 210 L 100 200 L 140 195 L 180 175 L 220 165 L 260 155 L 300 140 L 340 130"
          fill="none"
          stroke="#00E5A0"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
    );
  },
  energy: function EnergyScene() {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="en-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Power grid network */}
        {[
          [80, 80], [200, 60], [320, 80], [80, 220], [200, 240], [320, 220], [200, 150]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" fill="url(#en-glow)" />
            <motion.circle
              cx={cx}
              cy={cy}
              r="6"
              fill="rgba(0,229,160,0.18)"
              stroke="#00E5A0"
              strokeWidth="1.5"
              animate={{ r: [6, 8, 6] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          </g>
        ))}
        {/* Connection lines */}
        {[
          [80, 80, 200, 150],
          [200, 60, 200, 150],
          [320, 80, 200, 150],
          [80, 220, 200, 150],
          [200, 240, 200, 150],
          [320, 220, 200, 150]
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#00C2FF"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            strokeDasharray="3 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}
        {/* Lightning accent */}
        <motion.path
          d="M 195 130 L 205 145 L 197 145 L 210 170"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </svg>
    );
  },
  telecom: function TelecomScene() {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        {/* Tower */}
        <line x1="200" y1="50" x2="200" y2="240" stroke="rgba(0,194,255,0.6)" strokeWidth="2" />
        <line x1="180" y1="240" x2="220" y2="240" stroke="rgba(0,194,255,0.6)" strokeWidth="2" />
        <line x1="200" y1="50" x2="170" y2="240" stroke="rgba(0,194,255,0.3)" strokeWidth="1" />
        <line x1="200" y1="50" x2="230" y2="240" stroke="rgba(0,194,255,0.3)" strokeWidth="1" />
        <circle cx="200" cy="48" r="4" fill="#00E5A0" />
        {/* Signal arcs */}
        {[40, 70, 100, 130].map((r, i) => (
          <motion.path
            key={i}
            d={`M ${200 - r} 48 A ${r} ${r} 0 0 1 ${200 + r} 48`}
            fill="none"
            stroke="#00E5A0"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.7, 0], scale: [0.6, 1.1, 1.3] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "200px 48px" }}
          />
        ))}
        {/* Data nodes */}
        {[
          [60, 100], [340, 100], [60, 200], [340, 200], [120, 250], [280, 250]
        ].map(([cx, cy], i) => (
          <motion.g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="rgba(0,194,255,0.18)" stroke="#00C2FF" strokeWidth="1" />
            <motion.line
              x1={cx}
              y1={cy}
              x2="200"
              y2="48"
              stroke="#00E5A0"
              strokeOpacity="0.25"
              strokeWidth="0.8"
              strokeDasharray="2 4"
              animate={{ strokeDashoffset: [0, -12] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.g>
        ))}
      </svg>
    );
  }
};
