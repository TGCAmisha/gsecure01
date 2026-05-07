import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { BrandImage } from "@/components/BrandImage";
import { caseImage } from "@/lib/images";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const related = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.industry }]} />
          <Reveal>
            <div className="max-w-4xl mt-6">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1.5 rounded-full glass text-xs font-mono text-signal/90 uppercase tracking-wider">
                  {cs.industry}
                </span>
                <span className="px-3 py-1.5 rounded-full glass text-xs font-mono text-cyan/90 uppercase tracking-wider">
                  {cs.service}
                </span>
              </div>
              <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.05] text-inkSoft">
                {cs.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-inkSoft/70 leading-relaxed max-w-3xl">{cs.summary}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12">
              <BrandImage
                src={caseImage(cs.slug)}
                alt={cs.title}
                className="aspect-[21/9] w-full"
                rounded="rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section -mt-8">
        <div className="container-x">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-signal/85 font-mono mb-4">Results</div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {cs.results.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="glass-strong rounded-xl p-6 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-glow opacity-40" />
                  <div className="relative">
                    <div className="font-mono text-display-sm font-semibold text-gradient-signal leading-tight mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-base text-inkSoft/85 leading-relaxed">{r.metric}</p>
                    {r.placeholder && (
                      <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-cta/85 font-mono">
                        Placeholder · awaiting client confirmation
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION — editorial */}
      <section className="section bg-cream text-navy editorial">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-cta font-mono mb-3">The challenge</div>
            <h2 className="text-display-sm md:text-display-md font-semibold tracking-tight leading-[1.1] mb-5">
              The challenge
            </h2>
            <p className="text-base md:text-lg text-navy/80 leading-relaxed">{cs.problem}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-[11px] uppercase tracking-[0.18em] text-cta font-mono mb-3">Our approach</div>
            <h2 className="text-display-sm md:text-display-md font-semibold tracking-tight leading-[1.1] mb-5">
              How we delivered
            </h2>
            <p className="text-base md:text-lg text-navy/80 leading-relaxed">{cs.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="glass-strong rounded-2xl p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden">
              <div className="aurora" />
              <Quote size={36} className="text-signal/40 mb-6 relative" strokeWidth={1.5} />
              <p className="text-2xl md:text-3xl text-inkSoft leading-relaxed font-light tracking-tight relative">
                {cs.quote?.text ??
                  "[Placeholder quote — to be replaced with a named, attributable client quote upon publication approval. The current G'Secure case study library does not yet include client quotes; this is a redesign demonstration.]"}
              </p>
              <div className="mt-8 flex items-center gap-4 relative">
                <div className="w-12 h-12 rounded-full bg-signal/10 border border-signal/30 grid place-items-center text-signal font-mono text-sm">
                  {cs.quote ? cs.quote.attrib.split(" ").map((w) => w[0]).slice(0, 2).join("") : "AC"}
                </div>
                <div>
                  <div className="text-sm font-semibold text-inkSoft">
                    {cs.quote?.attrib ?? "[Client name — placeholder]"}
                  </div>
                  <div className="text-xs text-inkSoft/55 font-mono uppercase tracking-wider mt-0.5">{cs.industry}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Related" title="More client outcomes." />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link href={`/case-studies/${r.slug}`} className="glass card-hover rounded-xl p-6 block group h-full">
                  <div className="text-[11px] uppercase tracking-wider text-signal/85 font-mono mb-2">
                    {r.industry} · {r.service}
                  </div>
                  <h3 className="font-semibold text-inkSoft leading-snug group-hover:text-signal transition mb-3">
                    {r.title}
                  </h3>
                  <span className="text-sm text-signal/85 group-hover:text-signal flex items-center gap-1.5">
                    Read <ArrowUpRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock title="Want this kind of outcome for your team?" />
    </>
  );
}
