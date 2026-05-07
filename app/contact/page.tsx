"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { offices } from "@/lib/content";

export default function ContactPage() {
  const [path, setPath] = useState<"sales" | "consult" | "general">("sales");

  const paths = [
    { id: "sales", label: "Talk to Sales", icon: MessageCircle, desc: "Pricing, scoping, RFP support" },
    { id: "consult", label: "Book a Consultation", icon: Calendar, desc: "30-minute discovery, no commitment" },
    { id: "general", label: "General Inquiry", icon: Search, desc: "Press, partnerships, careers" }
  ] as const;

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <Reveal>
            <div className="max-w-3xl mt-6">
              <h1 className="text-display-lg lg:text-display-xl font-semibold tracking-tight leading-[1.02] text-inkSoft">
                Let&apos;s talk about your{" "}
                <span className="text-gradient-signal">cyber programme.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-inkSoft/70 max-w-2xl leading-relaxed">
                Choose the path that fits — our team responds within one business day, in your timezone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PATH SELECTOR */}
      <section className="pb-12">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-3 mb-10">
            {paths.map((p, i) => {
              const Icon = p.icon;
              const active = path === p.id;
              return (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setPath(p.id)}
                  className={`glass rounded-xl p-5 text-left transition border ${
                    active ? "border-signal/50 bg-signal/5" : "border-white/8 hover:border-white/15"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-md grid place-items-center mb-3 transition ${
                      active ? "bg-signal/20 text-signal" : "bg-white/5 text-inkSoft/70"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <div className="font-semibold text-inkSoft">{p.label}</div>
                  <div className="text-sm text-inkSoft/60 mt-1">{p.desc}</div>
                </motion.button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <Reveal>
              <div className="glass-strong rounded-xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
                <form className="relative space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="First name" placeholder="Jane" />
                    <Field label="Last name" placeholder="Doe" />
                  </div>
                  <Field label="Work email" type="email" placeholder="jane@company.com" />
                  <Field label="Company" placeholder="Acme Corp" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Country" placeholder="Sweden" />
                    <Field label="Industry" placeholder="Healthcare" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-inkSoft/65 font-mono">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you're trying to achieve..."
                      className="mt-2 w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-inkSoft placeholder:text-inkSoft/35 focus:border-signal/50 focus:outline-none focus:ring-2 focus:ring-signal/20 transition"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-xs text-inkSoft/60 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 accent-signal" />
                    <span>
                      I agree to G&apos;Secure Labs&apos; Privacy Policy and consent to being contacted about my inquiry.
                    </span>
                  </label>
                  <button type="submit" className="btn btn-primary">
                    Send message <Send size={15} />
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="glass rounded-xl p-6">
                  <div className="text-xs uppercase tracking-wider text-signal/85 font-mono mb-3">Reach us directly</div>
                  <div className="space-y-3">
                    <a href="mailto:consult@gsecurelabs.com" className="flex items-center gap-3 text-inkSoft hover:text-signal transition">
                      <Mail size={16} /> consult@gsecurelabs.com
                    </a>
                    <a href="tel:+46733690899" className="flex items-center gap-3 text-inkSoft hover:text-signal transition">
                      <Phone size={16} /> +46 733 690 899 (EU)
                    </a>
                    <a href="tel:+14084775654" className="flex items-center gap-3 text-inkSoft hover:text-signal transition">
                      <Phone size={16} /> +1 (408) 477 5654 (US)
                    </a>
                    <a href="tel:+912685254" className="flex items-center gap-3 text-inkSoft hover:text-signal transition">
                      <Phone size={16} /> +91 79 2685 2554 (Asia)
                    </a>
                  </div>
                </div>
                <div className="glass rounded-xl p-6">
                  <div className="text-xs uppercase tracking-wider text-signal/85 font-mono mb-3">Response time</div>
                  <div className="font-mono text-3xl text-gradient-signal">≤ 1 business day</div>
                  <p className="text-xs text-inkSoft/60 mt-2 leading-relaxed">
                    All inquiries triaged within one business day, in your timezone, by a named human.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-navy-deep">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Visit us" title="14 offices across 5 continents." />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {offices.map((o, i) => (
              <Reveal key={`${o.city}-${o.country}`} delay={i * 0.03}>
                <div className="glass rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-signal mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-inkSoft">
                        {o.city}, {o.country}
                      </div>
                      <div className="text-xs text-inkSoft/55 mt-1.5 leading-relaxed">{o.address}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-inkSoft/65 font-mono">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-inkSoft placeholder:text-inkSoft/35 focus:border-signal/50 focus:outline-none focus:ring-2 focus:ring-signal/20 transition"
      />
    </div>
  );
}
