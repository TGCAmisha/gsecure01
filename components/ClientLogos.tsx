"use client";

import { motion } from "framer-motion";

// Real client mentions from the existing G'Secure site, plus designed
// "[Confidential]" cards that look intentional rather than placeholder-y.

type Client = {
  name: string;
  monogram: string;
  sector: string;
  confidential?: boolean;
};

const clients: Client[] = [
  { name: "Adani", monogram: "AD", sector: "Energy & Infrastructure" },
  { name: "Tata", monogram: "TT", sector: "Conglomerate" },
  { name: "American Express", monogram: "AX", sector: "Financial Services" },
  { name: "Kotak Mahindra", monogram: "KM", sector: "Banking" },
  { name: "Confidential client", monogram: "★", sector: "Telecommunications", confidential: true },
  { name: "Confidential client", monogram: "★", sector: "Healthcare", confidential: true }
];

export function ClientLogos() {
  return (
    <section className="border-y border-white/5 py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-mono text-signal/85 mb-3">
            <span className="w-6 h-px bg-signal/60" /> Selected clients
          </div>
          <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-tight text-inkSoft">
            <span className="font-mono text-gradient-signal">20+</span> Fortune 500 customers ·{" "}
            <span className="font-mono text-gradient-signal">30+</span> countries ·{" "}
            <span className="font-mono text-gradient-signal">100+</span> active engagements
          </h2>
          <p className="text-sm text-inkSoft/55 mt-3 leading-relaxed">
            A selection of organizations our practice has secured. Some clients are not publicly named per engagement terms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {clients.map((c, i) => (
            <motion.div
              key={`${c.name}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group relative glass rounded-xl p-5 h-[120px] flex flex-col justify-between hover:border-signal/30 transition border border-white/8"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-11 h-11 rounded-md grid place-items-center font-mono text-base font-semibold ${
                    c.confidential
                      ? "bg-white/5 border border-white/15 text-inkSoft/70"
                      : "bg-signal/10 border border-signal/30 text-signal"
                  }`}
                >
                  {c.monogram}
                </div>
                {c.confidential && (
                  <span className="text-[9px] font-mono uppercase tracking-wider text-inkSoft/45 mt-1">
                    NDA
                  </span>
                )}
              </div>
              <div>
                <div
                  className={`text-sm font-semibold leading-tight ${
                    c.confidential ? "text-inkSoft/65 italic" : "text-inkSoft"
                  }`}
                >
                  {c.name}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-inkSoft/45 mt-0.5 truncate">
                  {c.sector}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
