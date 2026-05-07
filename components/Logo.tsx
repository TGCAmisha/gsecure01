import Link from "next/link";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const fg = variant === "light" ? "#F1F5F9" : "#0A1628";
  const accent = "#00E5A0";
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="G'Secure Labs home">
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M20 3 L34 9 V20 C34 28 28 34 20 37 C12 34 6 28 6 20 V9 Z"
          stroke={accent}
          strokeWidth="2"
          fill="rgba(0,229,160,0.08)"
        />
        <path
          d="M25 16 C25 13.5 22.8 11.5 20 11.5 C17.2 11.5 15 13.5 15 16 V20.5 H21 V18.5 H17 V16 C17 14.5 18.3 13.5 20 13.5 C21.7 13.5 23 14.5 23 16"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="20" cy="24" r="1.6" fill={accent} />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-semibold tracking-tight text-[17px]" style={{ color: fg }}>
          G&apos;Secure <span className="text-gradient-signal">Labs</span>
        </span>
        <span className="text-[10px] tracking-wider uppercase mt-0.5 opacity-60" style={{ color: fg }}>
          A Gateway Group Company
        </span>
      </div>
    </Link>
  );
}
