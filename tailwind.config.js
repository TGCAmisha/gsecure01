/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          deep: "#060F1C",
          mid: "#13243D",
          soft: "#1B2D49"
        },
        signal: { DEFAULT: "#00E5A0", dim: "#0FB382" },
        cyan: { DEFAULT: "#00C2FF", dim: "#0098CC" },
        cta: { DEFAULT: "#FF6B35", hover: "#FF8255" },
        cream: "#F8F8F4",
        ink: "#0F1419",
        inkSoft: "#F1F5F9"
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["56px", { lineHeight: "1.08", letterSpacing: "-0.022em" }],
        "display-md": ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["32px", { lineHeight: "1.15", letterSpacing: "-0.018em" }]
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "marquee": "marquee 40s linear infinite",
        "spin-slow": "spin 60s linear infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(0,229,160,0.12) 0%, transparent 60%)"
      },
      backgroundSize: { grid: "32px 32px" }
    }
  },
  plugins: []
};
