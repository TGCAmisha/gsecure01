import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { insights } from "@/lib/content";

export const metadata = { title: "Insights — G'Secure Labs" };

export default function InsightsPage() {
  const featured = insights[0];
  const rest = insights.slice(1);
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Insights" }]} />
          <Reveal>
            <div className="max-w-3xl mt-6">
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                Insights & <span className="text-gradient-signal">research.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-inkSoft/70 leading-relaxed">
                Practitioner thinking on cyber resilience, regulatory compliance, managed detection, and the modern security operations centre.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED — editorial */}
      <section className="bg-cream text-navy editorial py-20">
        <div className="container-x">
          <Reveal>
            <Link href={`/insights/${featured.slug}`} className="grid md:grid-cols-[1fr_1.2fr] gap-10 group">
              <div className="aspect-[4/3] bg-navy rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-radial-glow" />
                <div className="absolute bottom-5 left-5 text-[11px] font-mono uppercase tracking-wider text-signal/90">
                  {featured.category}
                </div>
              </div>
              <div className="self-center">
                <div className="text-xs uppercase tracking-wider text-cta font-mono mb-3">
                  Featured · {featured.date}
                </div>
                <h2 className="text-display-sm md:text-display-md font-semibold tracking-tight leading-[1.1] group-hover:text-cta transition">
                  {featured.title}
                </h2>
                <p className="mt-5 text-lg text-navy/75 leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                  <span>{featured.author}</span> · <span className="text-navy/55">Read article</span>
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="section">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((it, i) => (
              <Reveal key={it.slug} delay={i * 0.05}>
                <Link href={`/insights/${it.slug}`} className="block group h-full">
                  <div className="aspect-[16/10] bg-navy-mid rounded-lg overflow-hidden mb-4 relative border border-white/5 group-hover:border-signal/30 transition">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 bg-radial-glow opacity-60" />
                    <div className="absolute bottom-4 left-4 text-[11px] font-mono uppercase tracking-wider text-signal/90">
                      {it.category}
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-inkSoft/55 font-mono mb-2">
                    {it.date} · {it.author}
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-inkSoft group-hover:text-signal transition mb-2">
                    {it.title}
                  </h3>
                  <p className="text-sm text-inkSoft/65 leading-relaxed line-clamp-3">{it.excerpt}</p>
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
