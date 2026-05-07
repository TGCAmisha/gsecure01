import Link from "next/link";
import { ArrowRight, Sparkles, Globe2, GraduationCap, Heart } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";

export const metadata = { title: "Careers — G'Secure Labs" };

const roles = [
  { title: "Senior SOC Analyst (L3)", location: "Stockholm · Hybrid", team: "Managed Services", type: "Full-time" },
  { title: "Detection Engineer", location: "Espoo · Remote-friendly", team: "Engineering", type: "Full-time" },
  { title: "GRC Consultant — DORA & NIS2", location: "Hanover", team: "Advisory", type: "Full-time" },
  { title: "Penetration Tester", location: "Pune", team: "Offensive Security", type: "Full-time" },
  { title: "Cloud Security Architect", location: "Austin", team: "Engineering", type: "Full-time" },
  { title: "Customer Success Manager", location: "Oslo", team: "Customer Success", type: "Full-time" }
];

const benefits = [
  { icon: Globe2, title: "Global by default", body: "14 offices, 14 nationalities, hybrid-first culture." },
  { icon: GraduationCap, title: "Continuous learning", body: "Certifications, conferences, internal labs — fully sponsored." },
  { icon: Sparkles, title: "Real ownership", body: "Zero-debt, zero-investor company — long-term thinking, real autonomy." },
  { icon: Heart, title: "Take care of yourself", body: "Generous time off, mental-health support, family-friendly policies." }
];

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <Reveal>
            <div className="max-w-3xl mt-6">
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                Build a career in cybersecurity{" "}
                <span className="text-gradient-signal">that actually moves the needle.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-inkSoft/70 leading-relaxed">
                Join 300+ practitioners across 14 offices defending the world&apos;s most demanding enterprises. Real customer impact, deep technical work, no corporate theatre.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Why G'Secure" title="A different kind of cyber career." />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="glass rounded-xl p-6 h-full">
                  <div className="w-11 h-11 rounded-md bg-signal/10 border border-signal/25 grid place-items-center text-signal mb-4">
                    <b.icon size={19} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-semibold text-inkSoft mb-1.5">{b.title}</h3>
                  <p className="text-sm text-inkSoft/65 leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Open roles" title="Currently hiring." />
          </Reveal>
          <div className="mt-10 space-y-2">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <Link
                  href="/contact"
                  className="glass card-hover rounded-lg p-5 flex flex-wrap items-center gap-4 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-inkSoft group-hover:text-signal transition">{r.title}</div>
                    <div className="text-xs text-inkSoft/55 font-mono uppercase tracking-wider mt-1">
                      {r.team} · {r.type}
                    </div>
                  </div>
                  <div className="text-sm text-inkSoft/70">{r.location}</div>
                  <ArrowRight size={16} className="text-inkSoft/40 group-hover:text-signal group-hover:translate-x-1 transition" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title="Don't see your role?"
        subtitle="We're always interested in hearing from exceptional cyber practitioners. Send us a note."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "About G'Secure", href: "/about" }}
      />
    </>
  );
}
