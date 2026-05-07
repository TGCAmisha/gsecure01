import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParticleNetwork } from "@/components/ParticleNetwork";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center pt-20 overflow-hidden">
      <ParticleNetwork />
      <div className="aurora" />
      <div className="container-x relative text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] font-mono text-signal/85 mb-4">404</div>
        <h1 className="text-display-md md:text-display-lg font-semibold text-inkSoft tracking-tight">
          That page <span className="text-gradient-signal">doesn&apos;t exist.</span>
        </h1>
        <p className="mt-4 text-inkSoft/65 max-w-md mx-auto">
          The link may be outdated, or you may have typed the address. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <Link href="/" className="btn btn-primary">
            Back to home <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
