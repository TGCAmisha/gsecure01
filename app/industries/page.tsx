import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { industries } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const metadata = { title: "Industries — G'Secure Labs" };

export default function IndustriesIndex() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <Reveal>
            <div className="max-w-3xl mt-6">
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                Industry practices, <span className="text-gradient-signal">not playbooks.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-inkSoft/70 leading-relaxed">
                Dedicated sector teams for the regulated industries where security and compliance are existential.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => {
              const Icon = getIcon(ind.icon);
              return (
                <Reveal key={ind.slug} delay={i * 0.06}>
                  <Link href={`/industries/${ind.slug}`} className="group glass card-hover rounded-xl p-6 h-full block relative overflow-hidden">
                    <div className="w-11 h-11 rounded-md bg-cyan/10 border border-cyan/25 grid place-items-center text-cyan mb-4 group-hover:scale-105 transition">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold text-inkSoft text-lg mb-1.5 leading-tight">{ind.name}</h3>
                    <p className="text-sm text-inkSoft/60 leading-relaxed mb-4">{ind.hero}</p>
                    <span className="text-sm text-signal/85 group-hover:text-signal flex items-center gap-1.5">
                      Explore practice <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
