import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Linkedin, Twitter } from "lucide-react";
import { insights } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = insights.find((i) => i.slug === params.slug);
  if (!article) notFound();
  const related = insights.filter((i) => i.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        {/* HERO — editorial light */}
        <section className="bg-cream text-navy editorial pt-28 md:pt-36 pb-16">
          <div className="container-x max-w-4xl">
            <Breadcrumbs items={[{ label: "Insights", href: "/insights" }, { label: article.category }]} />
            <Reveal>
              <div className="mt-6">
                <div className="text-xs uppercase tracking-wider text-cta font-mono mb-4">
                  {article.category} · {article.date}
                </div>
                <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.05]">
                  {article.title}
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-navy/70 leading-relaxed font-light">
                  {article.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4 pb-8 border-b border-navy/10">
                  <div className="w-12 h-12 rounded-full bg-cta/15 border border-cta/30 grid place-items-center text-cta font-mono text-sm">
                    {article.author.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{article.author}</div>
                    <div className="text-xs text-navy/55 mt-0.5">G&apos;Secure Labs</div>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="w-9 h-9 rounded-md border border-navy/15 grid place-items-center text-navy/70 hover:text-cta hover:border-cta/40 transition">
                      <Linkedin size={15} />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-md border border-navy/15 grid place-items-center text-navy/70 hover:text-cta hover:border-cta/40 transition">
                      <Twitter size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-cream text-navy editorial pb-20">
          <div className="container-x max-w-3xl">
            <div className="aspect-[16/9] bg-navy rounded-xl overflow-hidden relative mb-12">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 bg-radial-glow" />
              <div className="absolute bottom-5 left-5 text-[11px] font-mono uppercase tracking-wider text-signal/90">
                {article.category}
              </div>
            </div>
            <Reveal>
              <div className="prose prose-lg max-w-none">
                {article.body.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-navy/85 mb-6">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <div className="mt-12 pt-8 border-t border-navy/10 flex items-center justify-between">
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-cta">
                <ArrowLeft size={14} /> All insights
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cta">
                Talk about this <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Continue reading" title="Related insights." />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link href={`/insights/${r.slug}`} className="block group h-full glass card-hover rounded-xl overflow-hidden">
                  <div className="aspect-[16/10] bg-navy-mid relative">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 bg-radial-glow" />
                    <div className="absolute bottom-4 left-4 text-[11px] font-mono uppercase tracking-wider text-signal/90">
                      {r.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-wider text-inkSoft/55 font-mono mb-2">
                      {r.date} · {r.author}
                    </div>
                    <h3 className="font-semibold text-inkSoft leading-snug group-hover:text-signal transition">
                      {r.title}
                    </h3>
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
