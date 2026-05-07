import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Service } from "@/lib/content";
import { services, caseStudies } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Reveal, SectionHeading } from "./Section";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBlock } from "./CtaBlock";
import { ParticleNetwork } from "./ParticleNetwork";

export function ServiceDetail({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedCases = caseStudies.filter((cs) => cs.service.toLowerCase().includes(service.short.toLowerCase())).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Services", href: "/services/mdr" }, { label: service.name }]} />
          <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-signal/90 tracking-wider uppercase mb-5">
                <Icon size={13} />
                {service.short}
              </div>
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                {service.name}
              </h1>
              <p className="mt-5 text-xl md:text-2xl text-signal/90 font-light leading-snug">
                {service.tagline}
              </p>
              <p className="mt-5 text-base md:text-lg text-inkSoft/70 leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn btn-primary">
                  Talk to Sales <ArrowRight size={16} />
                </Link>
                <Link href="/case-studies" className="btn btn-secondary">
                  See proof
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-strong rounded-xl p-7 lg:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-glow opacity-60" />
                <div className="relative">
                  <div className="text-[11px] uppercase tracking-[0.18em] font-mono text-signal/85 mb-5">
                    Outcomes you can measure
                  </div>
                  <div className="space-y-4">
                    {service.outcomes.map((o) => (
                      <div key={o.label} className="flex items-baseline justify-between border-b border-white/5 pb-3 last:border-0">
                        <span className="text-sm text-inkSoft/65">{o.label}</span>
                        <span className="font-mono text-lg text-gradient-signal font-semibold">{o.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title={<>Inside the <span className="text-gradient-signal">{service.short}</span> service.</>}
              subtitle="Every engagement combines elite analysts, proven tooling, and operational discipline."
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
            {service.capabilities.map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <div className="glass rounded-lg p-5 flex items-start gap-3 h-full">
                  <Check size={18} className="text-signal mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm text-inkSoft/85 leading-relaxed">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORKS (only GRC) */}
      {service.frameworks && (
        <section className="section bg-navy-deep">
          <div className="container-x">
            <Reveal>
              <SectionHeading
                eyebrow="Frameworks we operate under"
                title="Mapped, audited, evidenced — across every regime."
              />
            </Reveal>
            <div className="flex flex-wrap gap-2 mt-10">
              {service.frameworks.map((f, i) => (
                <Reveal key={f} delay={i * 0.03}>
                  <span className="px-4 py-2 rounded-md glass text-sm font-mono text-inkSoft/85 hover:text-signal hover:border-signal/30 transition border border-white/5">
                    {f}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED CASES */}
      {relatedCases.length > 0 && (
        <section className="section">
          <div className="container-x">
            <Reveal>
              <SectionHeading eyebrow="Proof" title={<>{service.short} in the field.</>} />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {relatedCases.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 0.08}>
                  <Link href={`/case-studies/${cs.slug}`} className="glass card-hover rounded-xl p-7 block group h-full">
                    <div className="text-[11px] uppercase tracking-wider text-signal/85 font-mono mb-2">
                      {cs.industry} · {cs.service}
                    </div>
                    <h3 className="font-semibold text-inkSoft text-lg leading-snug group-hover:text-signal transition mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-inkSoft/65 leading-relaxed">{cs.summary}</p>
                    <div className="mt-5 flex items-center text-sm text-signal/85 group-hover:text-signal">
                      Read case study <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Related" title="Continue exploring." />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {related.map((s, i) => {
              const RIcon = getIcon(s.icon);
              return (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <Link href={`/services/${s.slug}`} className="glass card-hover rounded-xl p-6 block h-full group">
                    <div className="w-10 h-10 rounded-md bg-signal/10 border border-signal/25 grid place-items-center text-signal mb-4">
                      <RIcon size={18} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold text-inkSoft mb-1.5">{s.name}</h3>
                    <p className="text-sm text-inkSoft/60 leading-relaxed mb-4">{s.tagline}</p>
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

      <CtaBlock title={`Ready to deploy ${service.short}?`} />
    </>
  );
}
