import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { partners } from "@/lib/content";

export const metadata = { title: "Technology Partners — G'Secure Labs" };

export default function PartnersPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Partners" }]} />
          <Reveal>
            <div className="max-w-3xl mt-6">
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                The platforms behind our{" "}
                <span className="text-gradient-signal">practice.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-inkSoft/70 leading-relaxed">
                Our engineering and detection capabilities are built on partnerships with the security industry&apos;s most trusted platforms. We invest heavily in certification, integration, and joint engineering with each.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="glass card-hover rounded-xl p-7 h-full">
                  <div className="w-11 h-11 rounded-md bg-cyan/10 border border-cyan/25 grid place-items-center text-cyan mb-4">
                    <Handshake size={19} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-semibold text-inkSoft text-xl mb-1.5">{p.name}</h3>
                  <div className="text-xs text-cyan/85 font-mono uppercase tracking-wider mb-3">{p.category}</div>
                  <p className="text-sm text-inkSoft/65 leading-relaxed">
                    Strategic alliance — joint engineering, certified delivery, and integrated support across our managed services.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn btn-secondary">
              Become a partner <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
