import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { caseStudies } from "@/lib/content";
import { BrandImage } from "@/components/BrandImage";
import { caseImage } from "@/lib/images";

export const metadata = { title: "Case Studies — G'Secure Labs" };

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />
          <Reveal>
            <div className="max-w-3xl mt-6">
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                Outcomes our clients{" "}
                <span className="text-gradient-signal">measure.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-inkSoft/70 leading-relaxed">
                A selection of client engagements across MDR, EDR, GRC, VAPT, and Threat Intelligence — from European critical infrastructure to global Fortune 500.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.06}>
                <Link href={`/case-studies/${cs.slug}`} className="glass card-hover rounded-xl block h-full overflow-hidden group">
                  <div className="relative">
                    <BrandImage
                      src={caseImage(cs.slug)}
                      alt={cs.title}
                      className="aspect-[16/9]"
                      rounded="rounded-none"
                    />
                    <div className="absolute inset-0 grid place-items-center pointer-events-none">
                      <div className="text-center">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-signal font-mono mb-2 drop-shadow">
                          {cs.industry}
                        </div>
                        <div className="text-display-sm font-semibold text-gradient-signal font-mono">
                          {cs.service}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-inkSoft leading-snug group-hover:text-signal transition mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-inkSoft/60 leading-relaxed line-clamp-3">{cs.summary}</p>
                    <div className="mt-4 flex items-center text-sm text-signal/85 group-hover:text-signal">
                      Read case study <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
