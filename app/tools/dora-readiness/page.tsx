"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Sparkles,
  RotateCcw,
  Send
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ParticleNetwork } from "@/components/ParticleNetwork";

type Question = {
  id: string;
  pillar: string;
  text: string;
  helper: string;
};

const questions: Question[] = [
  {
    id: "ictrm",
    pillar: "ICT Risk Management",
    text: "Have you formally documented your ICT risk management framework, with board oversight?",
    helper: "DORA Article 5 requires explicit board accountability for ICT risk."
  },
  {
    id: "incident",
    pillar: "Incident Reporting",
    text: "Can you classify and report a major ICT incident to your competent authority within 4 hours?",
    helper: "The 4-hour initial-notification window is non-negotiable under DORA Article 19."
  },
  {
    id: "testing",
    pillar: "Resilience Testing",
    text: "Do you run regular threat-led penetration testing (TLPT) on critical systems?",
    helper: "TLPT is mandatory for significant entities — at least every three years."
  },
  {
    id: "third-party",
    pillar: "Third-Party Risk",
    text: "Do you maintain a register of all ICT third-party arrangements with criticality flags?",
    helper: "DORA mandates a continuously-updated register supplied to regulators on demand."
  },
  {
    id: "exit",
    pillar: "Third-Party Risk",
    text: "Do your contracts with critical ICT providers include exit strategies and data portability clauses?",
    helper: "Exit testing is part of operational resilience — paper-only clauses don't pass scrutiny."
  },
  {
    id: "info-sharing",
    pillar: "Information Sharing",
    text: "Are you participating in cyber-threat information-sharing arrangements with peer institutions?",
    helper: "Encouraged under DORA, expected by supervisors in regulated sectors."
  },
  {
    id: "biz-continuity",
    pillar: "Business Continuity",
    text: "Have your ICT business-continuity plans been tested under realistic scenarios in the last 12 months?",
    helper: "Tabletop exercises must include severe-but-plausible scenarios, not just outages."
  },
  {
    id: "evidence",
    pillar: "Evidence Readiness",
    text: "Could you produce a complete evidence pack for DORA compliance within 5 business days if requested?",
    helper: "Continuous-evidence pipelines distinguish mature programmes from paper-thin ones."
  }
];

type Answer = "yes" | "partial" | "no";

const scoreMap: Record<Answer, number> = { yes: 2, partial: 1, no: 0 };

function scoreToBand(pct: number) {
  if (pct >= 80) return { label: "Resilient", color: "signal", desc: "Your programme is in strong shape. Use this position to deepen testing and third-party governance.", icon: CheckCircle2 };
  if (pct >= 50) return { label: "Developing", color: "cyan", desc: "Foundations are in place, but specific articles are not yet evidenced. Targeted uplift will close the gap quickly.", icon: AlertCircle };
  return { label: "At Risk", color: "cta", desc: "Material gaps in core DORA articles. A 90-day acceleration programme is the right starting point.", icon: XCircle };
}

export default function DoraReadinessPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [done, setDone] = useState(false);

  const total = questions.length;
  const answered = Object.keys(answers).length;
  const progress = done ? 100 : (answered / total) * 100;

  const score = Object.values(answers).reduce((s, a) => s + scoreMap[a], 0);
  const maxScore = total * 2;
  const pct = Math.round((score / maxScore) * 100);
  const band = scoreToBand(pct);
  const BIcon = band.icon;

  const answer = (a: Answer) => {
    setAnswers((prev) => ({ ...prev, [questions[step].id]: a }));
    if (step < total - 1) setTimeout(() => setStep((s) => s + 1), 200);
    else setTimeout(() => setDone(true), 250);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleNetwork />
        <div className="aurora" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Tools" }, { label: "DORA Readiness Checker" }]} />

          {!done ? (
            <div className="mt-10 max-w-3xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-signal/90 tracking-wider uppercase mb-5">
                  <Sparkles size={13} /> Free assessment · 2 minutes
                </div>
                <h1 className="text-display-md md:text-display-lg font-semibold tracking-tight leading-[1.05] text-inkSoft">
                  DORA Readiness <span className="text-gradient-signal">Checker</span>
                </h1>
                <p className="mt-4 text-base md:text-lg text-inkSoft/70 max-w-xl mx-auto">
                  Eight quick questions across the five DORA pillars. Get an instant readiness band and a tailored next step.
                </p>
              </div>

              {/* Progress */}
              <div className="glass-strong rounded-2xl p-7 lg:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-glow opacity-40" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-2 text-xs font-mono uppercase tracking-wider">
                    <span className="text-signal/85">
                      Question {step + 1} of {total}
                    </span>
                    <span className="text-inkSoft/60">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-8">
                    <motion.div
                      className="h-full bg-gradient-to-r from-signal to-cyan"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-[11px] uppercase tracking-[0.18em] text-cyan/85 font-mono mb-3">
                        {questions[step].pillar}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-inkSoft mb-3">
                        {questions[step].text}
                      </h2>
                      <p className="text-sm text-inkSoft/55 leading-relaxed mb-8">{questions[step].helper}</p>

                      <div className="grid sm:grid-cols-3 gap-3">
                        {(["yes", "partial", "no"] as Answer[]).map((a) => (
                          <button
                            key={a}
                            onClick={() => answer(a)}
                            className={`group relative rounded-xl p-5 text-left border transition ${
                              a === "yes"
                                ? "border-signal/30 hover:border-signal/60 hover:bg-signal/5"
                                : a === "partial"
                                ? "border-cyan/30 hover:border-cyan/60 hover:bg-cyan/5"
                                : "border-cta/30 hover:border-cta/60 hover:bg-cta/5"
                            }`}
                          >
                            <div className="font-semibold text-inkSoft text-base mb-1 capitalize">{a === "partial" ? "Somewhat" : a}</div>
                            <div className="text-xs text-inkSoft/55 leading-relaxed">
                              {a === "yes"
                                ? "Documented, evidenced, regularly tested."
                                : a === "partial"
                                ? "In progress, partial coverage, or untested."
                                : "Not in place, or unknown."}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      className="mt-6 text-sm text-inkSoft/55 hover:text-signal flex items-center gap-1.5"
                    >
                      <ArrowLeft size={14} /> Previous
                    </button>
                  )}
                </div>
              </div>

              <p className="text-center text-xs text-inkSoft/45 mt-6">
                Designed assessment · responses are not stored in this preview build
              </p>
            </div>
          ) : (
            // RESULT
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-10 max-w-3xl mx-auto"
            >
              <div className="glass-strong rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                <div className="aurora" />
                <div className="relative">
                  <div className="text-center">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-wider mb-5 ${
                        band.color === "signal"
                          ? "text-signal/90"
                          : band.color === "cyan"
                          ? "text-cyan/90"
                          : "text-cta/90"
                      }`}
                    >
                      <BIcon size={13} /> Your DORA readiness
                    </div>
                    <div className="font-mono text-[80px] md:text-[120px] font-semibold leading-none text-gradient-signal tracking-tighter">
                      {pct}%
                    </div>
                    <div className="mt-3 text-2xl md:text-3xl font-semibold text-inkSoft">{band.label}</div>
                    <p className="mt-4 text-base md:text-lg text-inkSoft/70 max-w-xl mx-auto leading-relaxed">
                      {band.desc}
                    </p>
                  </div>

                  {/* Pillar breakdown */}
                  <div className="mt-10 pt-10 border-t border-white/8">
                    <div className="text-[11px] uppercase tracking-[0.18em] font-mono text-signal/85 mb-4">
                      Your responses
                    </div>
                    <div className="space-y-2">
                      {questions.map((q) => {
                        const a = answers[q.id];
                        const Color =
                          a === "yes" ? "text-signal" : a === "partial" ? "text-cyan" : "text-cta";
                        const Label = a === "yes" ? "Yes" : a === "partial" ? "Somewhat" : "No";
                        return (
                          <div
                            key={q.id}
                            className="flex items-start gap-3 text-sm py-2 border-b border-white/5 last:border-0"
                          >
                            <span
                              className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                                a === "yes"
                                  ? "bg-signal/15 text-signal"
                                  : a === "partial"
                                  ? "bg-cyan/15 text-cyan"
                                  : "bg-cta/15 text-cta"
                              }`}
                            >
                              {Label}
                            </span>
                            <span className="text-inkSoft/75 flex-1">{q.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-10 grid sm:grid-cols-2 gap-3">
                    <Link href="/contact" className="btn btn-primary justify-center">
                      Discuss with our DORA team <Send size={15} />
                    </Link>
                    <button onClick={reset} className="btn btn-secondary justify-center">
                      <RotateCcw size={14} /> Run again
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-inkSoft/45 mt-6 leading-relaxed max-w-md mx-auto">
                    This is an indicative readiness signal, not a regulatory opinion. Send your full results to a G&apos;Secure DORA lead for a calibrated assessment.
                  </p>
                </div>
              </div>

              {/* Related */}
              <div className="mt-12 grid md:grid-cols-3 gap-4">
                <Link href="/services/grc" className="glass card-hover rounded-xl p-5 group">
                  <div className="text-xs font-mono uppercase tracking-wider text-signal/85 mb-1">Service</div>
                  <div className="font-semibold text-inkSoft group-hover:text-signal transition">
                    Governance, Risk & Compliance
                  </div>
                </Link>
                <Link href="/industries/finance" className="glass card-hover rounded-xl p-5 group">
                  <div className="text-xs font-mono uppercase tracking-wider text-signal/85 mb-1">Industry</div>
                  <div className="font-semibold text-inkSoft group-hover:text-signal transition">
                    Financial Services Practice
                  </div>
                </Link>
                <Link
                  href="/insights/dora-cyber-resilience-2025"
                  className="glass card-hover rounded-xl p-5 group"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-signal/85 mb-1">Insight</div>
                  <div className="font-semibold text-inkSoft group-hover:text-signal transition">
                    DORA Governance Strategies for 2025
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
