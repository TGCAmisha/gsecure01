import Link from "next/link";
import { ArrowRight, Globe2, Building2, Award, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { stats, leaders, offices, partners } from "@/lib/content";

export const metadata = { title: "About — G'Secure Labs" };

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "About" }]} />
          <Reveal>
            <div className="max-w-4xl mt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-signal/90 tracking-wider uppercase mb-6">
                A Gateway Group Company
              </div>
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                27 years securing the world&apos;s most demanding{" "}
                <span className="text-gradient-signal">enterprises.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-inkSoft/70 leading-relaxed max-w-3xl">
                G&apos;Secure Labs is the cybersecurity practice of the Gateway Group — a global enterprise serving 100+ clients across 30+ countries with a right-sized model that combines specialist depth and global reach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section -mt-8">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="glass rounded-lg p-5 h-full">
                  <div className="font-mono text-3xl md:text-[34px] font-semibold text-gradient-signal">{s.value}</div>
                  <div className="text-xs text-inkSoft/60 mt-1.5">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY — editorial */}
      <section className="section bg-cream text-navy editorial">
        <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] font-mono text-cta mb-4">Our story</div>
            <h2 className="text-display-md md:text-display-lg font-semibold tracking-tight leading-[1.05]">
              Founded on a different model.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base md:text-lg text-navy/80 leading-relaxed">
              <p>
                G&apos;Secure Labs was founded inside the Gateway Group on a deliberate principle — the cybersecurity industry was over-supplied with global integrators and under-supplied with specialist partners that combined depth, agility, and accountability.
              </p>
              <p>
                Twenty-seven years later, the company has grown into a global cybersecurity practice operating across 5 continents, with 14 offices, 7 development centres, and a multi-disciplinary workforce drawn from 14 nationalities.
              </p>
              <p>
                What hasn&apos;t changed is the operating principle: zero debt, zero outside investors, zero liabilities — a fully owned, fully accountable practice answering to its customers, not its capital structure.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <div className="font-mono text-3xl text-cta">80%+</div>
                  <div className="text-sm text-navy/60 mt-1">Repeat business rate</div>
                </div>
                <div>
                  <div className="font-mono text-3xl text-cta">Zero</div>
                  <div className="text-sm text-navy/60 mt-1">Debt · Investors · Liabilities</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="The people behind the practice."
              subtitle="A leadership team blending decades of cyber-operations experience with deep regulatory and engineering expertise."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.06}>
                <div className="glass rounded-xl p-6 h-full">
                  <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-navy-mid to-navy-deep mb-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-20 h-20 rounded-full bg-signal/10 border border-signal/30 grid place-items-center text-signal text-2xl font-mono">
                        {l.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")
                          .replace(/[\[\]]/g, "•")
                          .slice(0, 2)}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-inkSoft text-lg leading-tight">{l.name}</h3>
                  <div className="text-xs text-signal/85 font-mono uppercase tracking-wider mt-1">{l.role}</div>
                  <p className="text-sm text-inkSoft/65 mt-3 leading-relaxed">{l.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Global presence"
              title={<>14 offices. 5 continents. <span className="text-gradient-signal">One team.</span></>}
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {offices.map((o, i) => (
              <Reveal key={`${o.city}-${o.country}`} delay={i * 0.03}>
                <div className="glass rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-inkSoft">{o.city}</div>
                      <div className="text-xs text-signal/85 font-mono uppercase tracking-wider mt-0.5">{o.country}</div>
                    </div>
                    <Globe2 size={16} className="text-inkSoft/40" />
                  </div>
                  <div className="text-xs text-inkSoft/55 leading-relaxed">{o.address}</div>
                  {("phone" in o && o.phone) && <div className="text-xs text-inkSoft/55 font-mono mt-1">{o.phone}</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
              <SectionHeading
                eyebrow="Technology partners"
                title="The platforms we deploy, the relationships we maintain."
              />
              <Link href="/partners" className="btn btn-ghost text-sm">
                See all partners <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {partners.slice(0, 8).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <div className="glass rounded-lg px-4 py-5 text-center hover:border-signal/30 border border-white/8 transition">
                  <div className="font-semibold text-inkSoft">{p.name}</div>
                  <div className="text-[11px] text-inkSoft/55 font-mono uppercase tracking-wider mt-1">
                    {p.category}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
