"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.4
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min(1, (ts - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function CountdownTrio() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {[
        { label: "Detect", value: "60s", note: "Mean time to detect" },
        { label: "Investigate", value: "10m", note: "Mean time to investigate" },
        { label: "Respond", value: "45m", note: "Mean time to respond" }
      ].map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass rounded-lg p-4 sm:p-5"
        >
          <div className="text-[11px] uppercase tracking-wider text-signal/85 font-mono">{m.label}</div>
          <div className="font-mono text-3xl sm:text-4xl font-semibold text-inkSoft mt-2">{m.value}</div>
          <div className="text-[11px] text-inkSoft/55 mt-1.5">{m.note}</div>
        </motion.div>
      ))}
    </div>
  );
}
