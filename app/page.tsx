import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, CheckCircle2, Globe2, Users, BarChart3, Sparkles } from "lucide-react";
import { HeroGlobe } from "@/components/HeroGlobe";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { CountdownTrio, AnimatedCounter } from "@/components/AnimatedCounter";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBlock } from "@/components/CtaBlock";
import { services, industries, caseStudies, insights, stats } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="relative container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-signal/90 tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              27 years · 30+ countries · 100+ enterprises
            </div>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-semibold tracking-[-0.025em] leading-[1.02] text-inkSoft">
              Redefining your{" "}
              <span className="text-gradient-signal">cyber security</span>{" "}
              outcomes.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-inkSoft/70 leading-relaxed max-w-xl">
              Managed Detection & Response, SOC, GRC, and VAPT — engineered for the world&apos;s most demanding enterprises. Protecting your business, your brand, and everything in between.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link href="/contact" className="btn btn-primary">
                Talk to Sales <ArrowRight size={16} />
              </Link>
              <Link href="/services/mdr" className="btn btn-secondary">
                Explore MDR
              </Link>
            </div>
            <div className="mt-12">
              <CountdownTrio />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <HeroGlobe />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.18em] font-mono text-inkSoft/50">
              14 offices · 5 continents
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENT LOGO BAR */}
      <section className="border-y border-white/5 py-2">
        <div className="container-x">
          <div className="flex items-center justify-between gap-4 mb-3 px-2">
            <span className="text-[11px] uppercase tracking-[0.18em] font-mono text-inkSoft/50">
              Trusted by Fortune 500 enterprises
            </span>
            <Link href="/case-studies" className="text-xs text-signal/85 hover:text-signal flex items-center gap-1">
              See proof <ArrowUpRight size={12} />
            </Link>
          </div>
          <LogoMarquee />
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="By the numbers"
              title={<>27 years of <span className="text-gradient-signal">measurable outcomes.</span></>}
              subtitle="A right-sized cyber-security partner with the depth of a global firm and the focus of a specialist."
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="glass rounded-lg p-5 h-full">
                  <div className="font-mono text-3xl md:text-[34px] font-semibold text-gradient-signal tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-inkSoft/60 mt-1.5 leading-snug">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section relative">
        <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <SectionHeading
                eyebrow="What we do"
                title={<>A 360° cybersecurity practice — <br className="hidden md:block" />purpose-built for enterprise scale.</>}
              />
              <Link href="/services/mdr" className="btn btn-ghost text-sm hidden md:inline-flex">
                See all services <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Why G'Secure"
                title={<>The right partner is <span className="text-gradient-signal">right-sized</span>, not just big.</>}
                subtitle="Six commitments that show up in every engagement we take on."
              />
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "360° holistic approach", body: "End-to-end coverage across detect, respond, comply, and protect." },
                { icon: Users, title: "Cross-technical teams", body: "Red, Blue, and Forensics, working as one team on your engagement." },
                { icon: BarChart3, title: "Single pane of glass", body: "Consolidated visibility, fewer dashboards, faster decisions." },
                { icon: Sparkles, title: "Lightning-fast detection", body: "Detection in 60s, investigation in 10m, response in 45m." },
                { icon: CheckCircle2, title: "Industry-specific strategies", body: "Calibrated to your sector's regulators, threat actors, and risk appetite." },
                { icon: Globe2, title: "Service across 12+ industries", body: "Deep practice teams in healthcare, finance, energy, telecom, and more." }
              ].map((d, i) => (
                <Reveal key={d.title} delay={i * 0.05}>
                  <div className="glass rounded-lg p-5 h-full">
                    <div className="w-9 h-9 rounded-md bg-signal/10 border border-signal/25 grid place-items-center text-signal mb-3">
                      <d.icon size={17} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold text-inkSoft text-base mb-1.5">{d.title}</h3>
                    <p className="text-sm text-inkSoft/65 leading-relaxed">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOL TEASER */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <Reveal>
            <Link
              href="/tools/dora-readiness"
              className="group relative block rounded-2xl glass-strong p-7 md:p-10 overflow-hidden hover:border-signal/40 transition border border-white/10"
            >
              <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                <div className="hidden md:flex w-14 h-14 rounded-xl bg-signal/10 border border-signal/25 items-center justify-center text-signal shrink-0">
                  <Sparkles size={22} strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-signal/85 font-mono mb-2">
                    Free interactive tool · 2 minutes
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-inkSoft tracking-tight leading-snug">
                    How DORA-ready is your programme? <span className="text-gradient-signal">Find out instantly.</span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-signal group-hover:translate-x-1 transition-transform">
                  Try the checker <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Practices, not just playbooks."
              subtitle="Dedicated sector teams for the regulated industries where security and compliance are existential."
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {industries.map((ind, i) => {
              const Icon = getIcon(ind.icon);
              return (
                <Reveal key={ind.slug} delay={i * 0.06}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group glass card-hover rounded-xl p-6 h-full block relative overflow-hidden"
                  >
                    <div className="w-11 h-11 rounded-md bg-cyan/10 border border-cyan/25 grid place-items-center text-cyan mb-4 group-hover:scale-105 transition">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold text-inkSoft text-lg mb-1.5 leading-tight">{ind.name}</h3>
                    <p className="text-sm text-inkSoft/60 leading-relaxed">{ind.hero}</p>
                    <ArrowUpRight size={15} className="absolute top-5 right-5 text-inkSoft/40 group-hover:text-signal transition" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <SectionHeading
                eyebrow="Proof"
                title={<>Outcomes our clients <span className="text-gradient-signal">measure.</span></>}
              />
              <Link href="/case-studies" className="btn btn-ghost text-sm hidden md:inline-flex">
                All case studies <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-5">
            {caseStudies.slice(0, 3).map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.08}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group glass card-hover rounded-xl overflow-hidden block h-full"
                >
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-navy-mid via-navy to-navy-deep border-b border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="text-center">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-signal/85 font-mono mb-2">
                          {cs.industry}
                        </div>
                        <div className="text-display-sm font-semibold text-gradient-signal font-mono">
                          {cs.service}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-inkSoft leading-snug mb-3 group-hover:text-signal transition">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-inkSoft/60 leading-relaxed line-clamp-2">{cs.summary}</p>
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

      {/* INSIGHTS — editorial preview */}
      <section className="section bg-cream text-navy editorial">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cta font-mono mb-3">
                  <span className="w-6 h-px bg-cta/60" /> Insights
                </div>
                <h2 className="text-display-md md:text-display-lg font-semibold tracking-tight leading-[1.05]">
                  Thinking that moves cyber programmes forward.
                </h2>
              </div>
              <Link href="/insights" className="text-sm font-semibold text-navy hover:text-cta inline-flex items-center gap-1.5">
                All insights <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((it, i) => (
              <Reveal key={it.slug} delay={i * 0.08}>
                <Link href={`/insights/${it.slug}`} className="group block h-full">
                  <div className="aspect-[16/10] bg-navy rounded-lg overflow-hidden mb-4 relative">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 bg-radial-glow" />
                    <div className="absolute bottom-4 left-4 text-[11px] font-mono uppercase tracking-wider text-signal/90">
                      {it.category}
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-navy/55 font-mono mb-2">
                    {it.date} · {it.author}
                  </div>
                  <h3 className="text-lg font-semibold leading-snug group-hover:text-cta transition mb-2">{it.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed">{it.excerpt}</p>
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
