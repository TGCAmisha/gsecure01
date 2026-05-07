"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Cloud,
  Server,
  Network,
  Mail,
  Brain,
  ShieldCheck,
  AlertTriangle,
  Eye,
  Sparkles
} from "lucide-react";

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  Icon: any;
};

const sources: Node[] = [
  { id: "endpoint", x: 60, y: 60, label: "Endpoints", sub: "EDR telemetry", Icon: Laptop },
  { id: "network", x: 60, y: 160, label: "Network", sub: "NDR · NetFlow", Icon: Network },
  { id: "cloud", x: 60, y: 260, label: "Cloud", sub: "AWS · Azure · GCP", Icon: Cloud },
  { id: "identity", x: 60, y: 360, label: "Identity", sub: "Entra · Okta · AD", Icon: Server },
  { id: "email", x: 60, y: 460, label: "Email", sub: "M365 · Workspace", Icon: Mail }
];

const platform: Node = { id: "platform", x: 380, y: 260, label: "G'Secure SOC", sub: "AI-augmented detection", Icon: Brain };

const outputs: Node[] = [
  { id: "detect", x: 720, y: 110, label: "Detect", sub: "≤ 60s", Icon: Eye },
  { id: "investigate", x: 720, y: 260, label: "Investigate", sub: "≤ 10m", Icon: AlertTriangle },
  { id: "respond", x: 720, y: 410, label: "Respond", sub: "≤ 45m", Icon: ShieldCheck }
];

export function MdrArchitecture() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 820 540"
        className="w-full h-auto"
        role="img"
        aria-label="G'Secure MDR architecture diagram"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5A0" stopOpacity="1" />
            <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00C2FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="platformGlow">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00E5A0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Source -> Platform lines */}
        {sources.map((s, i) => {
          const path = `M ${s.x + 60} ${s.y + 30} C ${(s.x + platform.x) / 2 + 40} ${s.y + 30}, ${
            (s.x + platform.x) / 2 - 40
          } ${platform.y + 30}, ${platform.x - 30} ${platform.y + 30}`;
          return (
            <g key={`in-${s.id}`}>
              <path d={path} stroke="rgba(0,194,255,0.18)" strokeWidth="1" fill="none" />
              <motion.path
                d={path}
                stroke="url(#flowGrad)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
              />
            </g>
          );
        })}

        {/* Platform -> Outputs lines */}
        {outputs.map((o, i) => {
          const path = `M ${platform.x + 90} ${platform.y + 30} C ${(platform.x + o.x) / 2 + 40} ${
            platform.y + 30
          }, ${(platform.x + o.x) / 2 - 40} ${o.y + 30}, ${o.x - 30} ${o.y + 30}`;
          return (
            <g key={`out-${o.id}`}>
              <path d={path} stroke="rgba(255,107,53,0.18)" strokeWidth="1" fill="none" />
              <motion.path
                d={path}
                stroke="url(#flowGrad2)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 + i * 0.35, ease: "easeInOut" }}
              />
            </g>
          );
        })}

        {/* Platform glow */}
        <circle cx={platform.x + 30} cy={platform.y + 30} r="120" fill="url(#platformGlow)" />

        {/* Source nodes */}
        {sources.map((s, i) => (
          <motion.g
            key={s.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <foreignObject x={s.x} y={s.y} width="160" height="60">
              <div className="glass rounded-lg px-3 py-2 h-[60px] flex items-center gap-2">
                <div className="w-9 h-9 rounded-md bg-cyan/10 border border-cyan/25 grid place-items-center text-cyan shrink-0">
                  <s.Icon size={16} strokeWidth={1.6} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-inkSoft leading-tight truncate">{s.label}</div>
                  <div className="text-[10px] text-inkSoft/55 font-mono uppercase tracking-wider truncate">
                    {s.sub}
                  </div>
                </div>
              </div>
            </foreignObject>
          </motion.g>
        ))}

        {/* Platform node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <foreignObject x={platform.x - 30} y={platform.y - 10} width="180" height="80">
            <div className="glass-strong rounded-xl px-3 py-3 h-[80px] flex items-center gap-3 border border-signal/30 relative">
              <Sparkles
                size={11}
                className="absolute top-2 right-2 text-signal animate-pulse"
                strokeWidth={2}
              />
              <div className="w-12 h-12 rounded-lg bg-signal/15 border border-signal/40 grid place-items-center text-signal shrink-0">
                <platform.Icon size={22} strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-signal/85 font-mono">Core</div>
                <div className="text-[13px] font-semibold text-inkSoft leading-tight">{platform.label}</div>
                <div className="text-[10px] text-inkSoft/55 leading-tight mt-0.5">{platform.sub}</div>
              </div>
            </div>
          </foreignObject>
        </motion.g>

        {/* Output nodes */}
        {outputs.map((o, i) => (
          <motion.g
            key={o.id}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          >
            <foreignObject x={o.x} y={o.y} width="140" height="60">
              <div className="glass rounded-lg px-3 py-2 h-[60px] flex items-center gap-2 border border-cta/20">
                <div className="w-9 h-9 rounded-md bg-cta/10 border border-cta/30 grid place-items-center text-cta shrink-0">
                  <o.Icon size={16} strokeWidth={1.6} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-inkSoft leading-tight">{o.label}</div>
                  <div className="text-[11px] text-cta/85 font-mono leading-tight">{o.sub}</div>
                </div>
              </div>
            </foreignObject>
          </motion.g>
        ))}

        {/* Column labels */}
        <text x="120" y="35" fill="rgba(241,245,249,0.4)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">
          TELEMETRY SOURCES
        </text>
        <text x="430" y="240" fill="rgba(241,245,249,0.4)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">
          DETECTION CORE
        </text>
        <text x="740" y="85" fill="rgba(241,245,249,0.4)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">
          OUTCOMES
        </text>
      </svg>
    </div>
  );
}
