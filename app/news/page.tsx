import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";

export const metadata = { title: "News Room — G'Secure Labs" };

const news = [
  { date: "April 2026", title: "G'Secure Labs expands MDR capacity in the Nordics with new Stockholm SOC tier", category: "Press release" },
  { date: "March 2026", title: "G'Secure Labs joins the European Cyber Resilience Initiative as a contributing partner", category: "Announcement" },
  { date: "February 2026", title: "Recognized in IDC Marketscape: Managed Detection and Response Services 2026", category: "Recognition" },
  { date: "January 2026", title: "Strategic alliance announced with LogPoint for unified SIEM-XDR delivery in EMEA", category: "Partnership" },
  { date: "December 2025", title: "G'Secure Labs achieves ISO 27001 recertification across all global delivery centres", category: "Milestone" },
  { date: "November 2025", title: "Speaking at the Nordic Cybersecurity Summit on DORA operational resilience patterns", category: "Event" },
  { date: "October 2025", title: "Launch of dedicated Healthcare Cybersecurity practice across Nordics & DACH", category: "Practice launch" },
  { date: "September 2025", title: "Recognized at the European Security Awards for innovation in MDR delivery", category: "Recognition" }
];

export default function NewsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "News Room" }]} />
          <Reveal>
            <div className="max-w-3xl mt-6">
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                News & <span className="text-gradient-signal">announcements.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-inkSoft/70 leading-relaxed">
                Press releases, recognition, partnerships, and milestones across the G&apos;Secure Labs practice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="space-y-2">
            {news.map((n, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Link href="/contact" className="glass card-hover rounded-lg p-5 flex flex-wrap items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-md bg-cyan/10 border border-cyan/25 grid place-items-center text-cyan">
                    <Newspaper size={17} strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-cyan/85 font-mono uppercase tracking-wider mb-1">
                      {n.date} · {n.category}
                    </div>
                    <div className="font-semibold text-inkSoft leading-snug group-hover:text-signal transition">
                      {n.title}
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-inkSoft/40 group-hover:text-signal group-hover:translate-x-1 transition mt-2" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock title="Press inquiries?" subtitle="For media requests, interviews, and analyst briefings, please contact our communications team." primary={{ label: "Press contact", href: "/contact" }} secondary={{ label: "About G'Secure", href: "/about" }} />
    </>
  );
}
