"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Office locations approximated to lat/long, projected onto a 2D circle
const OFFICES: { city: string; lat: number; lng: number }[] = [
  { city: "Stockholm", lat: 59.3, lng: 18.0 },
  { city: "Espoo", lat: 60.2, lng: 24.6 },
  { city: "Oslo", lat: 59.9, lng: 10.7 },
  { city: "Copenhagen", lat: 55.6, lng: 12.5 },
  { city: "Reykjavik", lat: 64.1, lng: -21.9 },
  { city: "Hanover", lat: 52.3, lng: 9.7 },
  { city: "Brussels", lat: 50.8, lng: 4.3 },
  { city: "Paris", lat: 48.8, lng: 2.3 },
  { city: "Hampshire", lat: 51.3, lng: -0.9 },
  { city: "Zoetermeer", lat: 52.0, lng: 4.5 },
  { city: "Ahmedabad", lat: 23.0, lng: 72.5 },
  { city: "Pune", lat: 18.5, lng: 73.8 },
  { city: "Dubai", lat: 25.2, lng: 55.2 },
  { city: "Johannesburg", lat: -26.2, lng: 28.0 },
  { city: "Saint John", lat: 45.2, lng: -66.0 },
  { city: "Austin", lat: 30.2, lng: -97.7 }
];

function project(lat: number, lng: number, radius: number) {
  // Simple orthographic projection
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 0) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return { x, y, z };
}

export function HeroGlobe() {
  const radius = 180;
  const points = useMemo(
    () => OFFICES.map((o) => ({ ...o, ...project(o.lat, o.lng, radius) })),
    []
  );

  // Generate latitude/longitude wireframe lines
  const longitudes = useMemo(() => {
    const lines: string[] = [];
    for (let lng = -180; lng <= 180; lng += 30) {
      const path: string[] = [];
      for (let lat = -90; lat <= 90; lat += 6) {
        const p = project(lat, lng, radius);
        path.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
      }
      lines.push("M " + path.join(" L "));
    }
    return lines;
  }, []);

  const latitudes = useMemo(() => {
    const lines: string[] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const path: string[] = [];
      for (let lng = -180; lng <= 180; lng += 6) {
        const p = project(lat, lng, radius);
        path.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
      }
      lines.push("M " + path.join(" L "));
    }
    return lines;
  }, []);

  // Pre-compute connection arcs between offices (subset to avoid clutter)
  const arcs = useMemo(() => {
    const a: { d: string; key: string }[] = [];
    const pairs = [
      [0, 7], [0, 10], [7, 10], [10, 13], [10, 15], [15, 16],
      [3, 13], [12, 10], [11, 13], [4, 16], [1, 7]
    ];
    pairs.forEach(([i, j]) => {
      const p1 = points[i];
      const p2 = points[j];
      if (!p1 || !p2) return;
      const mx = (p1.x + p2.x) / 2;
      const my = (p1.y + p2.y) / 2;
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      const lift = Math.min(60, len * 0.4);
      a.push({
        d: `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} Q ${mx.toFixed(1)} ${(my - lift).toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`,
        key: `${i}-${j}`
      });
    });
    return a;
  }, [points]);

  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto globe-glow">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(0,229,160,0.18) 0%, rgba(0,194,255,0.05) 40%, transparent 70%)"
        }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        viewBox="-220 -220 440 440"
        className="relative w-full h-full"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="globeFill" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#13243D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0A1628" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5A0" stopOpacity="1" />
            <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx="0" cy="0" r="180" fill="url(#globeFill)" stroke="rgba(0,194,255,0.15)" strokeWidth="1" />

        {longitudes.map((d, i) => (
          <path key={`lng-${i}`} d={d} fill="none" stroke="rgba(0,194,255,0.12)" strokeWidth="0.6" />
        ))}
        {latitudes.map((d, i) => (
          <path key={`lat-${i}`} d={d} fill="none" stroke="rgba(0,194,255,0.12)" strokeWidth="0.6" />
        ))}

        {arcs.map((a, i) => (
          <motion.path
            key={a.key}
            d={a.d}
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}

        {points.map((p, i) => (
          <g key={p.city}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={3}
              fill={p.z > 0 ? "#00E5A0" : "rgba(0,229,160,0.35)"}
              animate={{ r: [3, 5, 3] }}
              transition={{ duration: 2, repeat: Infinity, delay: (i % 6) * 0.3 }}
            />
            {p.z > 0 && (
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={3}
                fill="none"
                stroke="#00E5A0"
                strokeWidth="1"
                animate={{ r: [3, 14], opacity: [0.6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: (i % 6) * 0.3 }}
              />
            )}
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
