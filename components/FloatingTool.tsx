"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight, ShieldCheck } from "lucide-react";

const STORAGE_KEY = "gs-floating-tool-dismissed";

export function FloatingTool() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const [pulseDone, setPulseDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const flag = sessionStorage.getItem(STORAGE_KEY);
    setDismissed(flag === "1");
    // Stop the attention pulse after 12s
    const t = window.setTimeout(() => setPulseDone(true), 12000);
    return () => window.clearTimeout(t);
  }, []);

  // Hide on the tool page itself
  const onToolPage = pathname?.startsWith("/tools/");
  if (!mounted || dismissed || onToolPage) return null;

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2.5rem)]">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="mb-3 w-[340px] sm:w-[360px] glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="relative px-5 py-4 border-b border-white/8 bg-gradient-to-br from-navy-mid to-navy-deep">
              <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
              <div className="relative flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-signal/15 border border-signal/40 grid place-items-center text-signal shrink-0">
                  <ShieldCheck size={18} strokeWidth={1.6} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-signal/85 mb-0.5">
                    Free interactive tool
                  </div>
                  <div className="text-sm font-semibold text-inkSoft leading-tight">
                    DORA Readiness Checker
                  </div>
                </div>
                <button
                  onClick={close}
                  aria-label="Dismiss"
                  className="text-inkSoft/55 hover:text-inkSoft transition shrink-0"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4">
              <p className="text-sm text-inkSoft/75 leading-relaxed">
                Eight quick questions across the five DORA pillars. Get an instant readiness band and a tailored next step.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[11px] text-inkSoft/55 font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                ≈ 2 minutes · No sign-up
              </div>
              <Link
                href="/tools/dora-readiness"
                className="btn btn-primary w-full justify-center mt-4 text-sm"
                onClick={() => setOpen(false)}
              >
                Start the assessment <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close tool widget" : "Open tool widget"}
        className="relative ml-auto flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-gradient-to-br from-navy-mid to-navy-deep border border-signal/30 shadow-2xl hover:border-signal/60 transition group"
      >
        {/* Pulse ring */}
        {!pulseDone && !open && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full border border-signal/50"
              animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-signal/40"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
            />
          </>
        )}
        <div className="w-8 h-8 rounded-full bg-signal/15 border border-signal/40 grid place-items-center text-signal shrink-0">
          <Sparkles size={15} strokeWidth={2} />
        </div>
        <span className="text-sm font-semibold text-inkSoft pr-1 hidden sm:inline">
          {open ? "Hide" : "Free DORA tool"}
        </span>
      </motion.button>
    </div>
  );
}
