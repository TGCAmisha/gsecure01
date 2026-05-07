import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBlock({
  title = "Ready to redefine your security outcomes?",
  subtitle = "Talk to our team about a tailored programme. 30-minute discovery, no commitment.",
  primary = { label: "Talk to Sales", href: "/contact" },
  secondary = { label: "Book a Consultation", href: "/contact" }
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        <div className="relative rounded-2xl glass-strong p-10 md:p-14 overflow-hidden">
          <div className="aurora" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-signal/85 font-mono mb-4">
              <span className="w-6 h-px bg-signal/60" /> Get started
            </div>
            <h2 className="text-display-md md:text-display-lg font-semibold tracking-tight leading-[1.05] text-inkSoft">
              {title}
            </h2>
            <p className="mt-5 text-base md:text-lg text-inkSoft/70 max-w-xl">{subtitle}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href={primary.href} className="btn btn-primary">
                {primary.label}
                <ArrowRight size={16} />
              </Link>
              <Link href={secondary.href} className="btn btn-secondary">
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
