"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("gs-cookie-ack")) setVisible(true);
  }, []);
  const ack = (v: "all" | "essential") => {
    localStorage.setItem("gs-cookie-ack", v);
    setVisible(false);
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-4 md:max-w-md z-[60] glass-strong rounded-xl p-5 shadow-2xl"
        >
          <button
            onClick={() => ack("essential")}
            className="absolute top-3 right-3 text-inkSoft/50 hover:text-inkSoft"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          <div className="text-xs uppercase tracking-wider text-signal/80 font-mono mb-2">Privacy</div>
          <p className="text-sm text-inkSoft/80 leading-relaxed">
            We use cookies to improve your experience and analyze site usage. You can accept all or only the cookies essential to operate this site.
          </p>
          <div className="flex gap-2 mt-4">
            <button onClick={() => ack("essential")} className="btn btn-secondary text-xs flex-1 justify-center">
              Essential only
            </button>
            <button onClick={() => ack("all")} className="btn btn-primary text-xs flex-1 justify-center">
              Accept all
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
