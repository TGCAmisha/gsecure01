import { fortuneClients } from "@/lib/content";

export function LogoMarquee() {
  const logos = [...fortuneClients, ...fortuneClients];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="flex gap-12 animate-marquee whitespace-nowrap will-change-transform">
        {logos.map((name, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-6 py-2 border border-white/8 rounded-md text-inkSoft/55 hover:text-signal hover:border-signal/30 transition min-w-[180px] text-sm font-medium tracking-wide"
          >
            {name}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent" />
    </div>
  );
}
