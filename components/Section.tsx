"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-signal/85 font-mono mb-4">
          <span className="w-6 h-px bg-signal/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-display-md md:text-display-lg font-semibold text-inkSoft tracking-tight leading-[1.05]">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-base md:text-lg text-inkSoft/70 leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  );
}
