import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, AlertTriangle } from "lucide-react";
import type { Industry } from "@/lib/content";
import { industries, services } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Reveal, SectionHeading } from "./Section";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBlock } from "./CtaBlock";
import { ParticleNetwork } from "./ParticleNetwork";
import { IndustryScene } from "./IndustryScene";
import { BrandImage } from "./BrandImage";
import { pic } from "@/lib/images";

export function IndustryDetail({ industry }: { industry: Industry }) {
  const Icon = getIcon(industry.icon);
  const related = industries.filter((i) => i.slug !== industry.slug);
  const offerSlugs = ["mdr", "soc", "grc", "vapt"];
  const offers = services.filter((s) => offerSlugs.includes(s.slug));

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Industries" }, { label: industry.name }]} />
          <div className="mt-6 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-cyan/90 tracking-wider uppercase mb-5">
                <Icon size={13} /> Industry practice
              </div>
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                {industry.name}
              </h1>
              <p className="mt-5 text-xl md:text-2xl text-cyan/90 font-light leading-snug">
                {industry.hero}
              </p>
              <p className="mt-5 text-base md:text-lg text-inkSoft/70 leading-relaxed max-w-2xl">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn btn-primary">
                  Talk to a sector lead <ArrowRight size={16} />
                </Link>
                <Link href="/case-studies" className="btn btn-secondary">
                  Sector case studies
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4">
                <BrandImage
                  src={pic(`gsecure-industry-${industry.slug}-hero`, 1200, 800)}
                  alt={`${industry.name} sector`}
                  className="aspect-[3/2]"
                  rounded="rounded-2xl"
                  intensity="medium"
                />
                <IndustryScene slug={industry.slug} />
                <div className="glass-strong rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-glow opacity-40" />
                  <div className="relative">
                    <div className="text-[11px] uppercase tracking-[0.18em] font-mono text-cyan/85 mb-3">
                      Frameworks we operate under
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.regulations.map((r) => (
                        <span key={r} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs font-mono text-inkSoft/85">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THREATS */}
      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cta font-mono mb-3">
                <span className="w-6 h-px bg-cta/60" /> Sector threats
              </div>
              <h2 className="text-display-md font-semibold tracking-tight leading-[1.05] text-inkSoft">
                What we see, where we see it.
              </h2>
              <p className="text-inkSoft/70 mt-5 leading-relaxed">
                A condensed view of the threats most consistently observed in {industry.name.toLowerCase()} environments — and where our practice teams concentrate effort.
              </p>
            </Reveal>
            <div className="space-y-3">
              {industry.threats.map((t, i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="glass rounded-lg p-4 flex items-start gap-3">
                    <AlertTriangle size={18} className="text-cta mt-0.5 shrink-0" strokeWidth={1.8} />
                    <span className="text-sm text-inkSoft/85 leading-relaxed">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Outcomes"
              title={<>What our <span className="text-gradient-signal">{industry.name.toLowerCase()}</span> clients walk away with.</>}
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {industry.outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 0.05}>
                <div className="glass rounded-lg p-5 flex items-start gap-3 h-full">
                  <Check size={18} className="text-signal mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm text-inkSoft/85 leading-relaxed">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELEVANT SERVICES */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Most relevant services" title="What we typically deploy in this sector." />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {offers.map((s, i) => {
              const SI = getIcon(s.icon);
              return (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link href={`/services/${s.slug}`} className="glass card-hover rounded-xl p-5 block h-full group">
                    <div className="w-10 h-10 rounded-md bg-signal/10 border border-signal/25 grid place-items-center text-signal mb-4">
                      <SI size={17} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold text-inkSoft text-base mb-1.5">{s.name}</h3>
                    <p className="text-sm text-inkSoft/60 leading-relaxed">{s.tagline}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES */}
      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Other industry practices" title="Continue exploring." />
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {related.map((i, idx) => {
              const RI = getIcon(i.icon);
              return (
                <Reveal key={i.slug} delay={idx * 0.06}>
                  <Link href={`/industries/${i.slug}`} className="glass card-hover rounded-xl p-6 block group h-full">
                    <div className="w-10 h-10 rounded-md bg-cyan/10 border border-cyan/25 grid place-items-center text-cyan mb-3">
                      <RI size={17} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold text-inkSoft mb-1.5">{i.name}</h3>
                    <p className="text-sm text-inkSoft/60 leading-relaxed mb-3">{i.hero}</p>
                    <span className="text-sm text-signal/85 group-hover:text-signal flex items-center gap-1.5">
                      Explore <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBlock title={`Bring our ${industry.name.toLowerCase()} practice into your programme.`} />
    </>
  );
}
