import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase, Users, Globe, Settings,
  ArrowRight, ShieldCheck, Zap, Clock, Star,
  ChevronRight,
} from "lucide-react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const N2 = "hsl(225 49% 20%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";
const BR = "hsl(220 13% 91%)";

const PLANS = [
  {
    icon:    Briefcase,
    title:   "Employer of Record (EOR)",
    tag:     "Global Expansion",
    popular: true,
    tagline: "Hire globally without legal entities",
    bestFor: "Enterprises expanding internationally",
    href:    "/services/eor",
    bullets: [
      "Full payroll & benefits compliance",
      "Zero legal entity setup needed",
      "Risk-free international hiring",
      "Local labor law expertise",
    ],
  },
  {
    icon:    Users,
    title:   "Talent-as-a-Service (TaaS)",
    tag:     "Fast Scaling",
    popular: false,
    tagline: "On-demand experts, rapid deployment",
    bestFor: "Startups & scale-ups needing speed",
    href:    "/services/taas",
    bullets: [
      "Deploy talent in 48–72 hours",
      "Flexible team scaling",
      "Pre-vetted specialists only",
      "No long-term commitments",
    ],
  },
  {
    icon:    Globe,
    title:   "Global Talent Sourcing",
    tag:     "Strategic Hiring",
    popular: false,
    tagline: "Strategic multi-country recruitment",
    bestFor: "Companies building distributed teams",
    href:    "/services/global-sourcing",
    bullets: [
      "Access 100K+ IT professionals",
      "Multi-country talent pools",
      "Cultural fit assessment",
      "Reduced time-to-hire",
    ],
  },
  {
    icon:    Settings,
    title:   "Talent Management",
    tag:     "Team Excellence",
    popular: false,
    tagline: "End-to-end workforce optimization",
    bestFor: "Teams focused on retention & growth",
    href:    "/services/talent-management",
    bullets: [
      "Performance tracking systems",
      "Continuous upskilling programs",
      "Employee engagement tools",
      "Retention optimization",
    ],
  },
];

type DotRating = { label: string; score: number };
interface ComparisonCard {
  title:   string;
  ratings: DotRating[];
}

const COMPARISON: ComparisonCard[] = [
  {
    title:   "Speed",
    ratings: [
      { label: "TaaS",           score: 5 },
      { label: "Global Sourcing", score: 4 },
      { label: "EOR",            score: 3 },
      { label: "Talent Mgmt",    score: 2 },
    ],
  },
  {
    title:   "Compliance",
    ratings: [
      { label: "EOR",            score: 5 },
      { label: "Talent Mgmt",    score: 5 },
      { label: "TaaS",           score: 3 },
      { label: "Global Sourcing", score: 3 },
    ],
  },
  {
    title:   "Flexibility",
    ratings: [
      { label: "TaaS",           score: 5 },
      { label: "Global Sourcing", score: 4 },
      { label: "Talent Mgmt",    score: 4 },
      { label: "EOR",            score: 3 },
    ],
  },
  {
    title:   "Engagement",
    ratings: [
      { label: "EOR",            score: 5 },
      { label: "Talent Mgmt",    score: 5 },
      { label: "TaaS",           score: 3 },
      { label: "Global Sourcing", score: 3 },
    ],
  },
];

const SCENARIOS = [
  {
    scenario: "Hiring one developer quickly",
    plan:     "TaaS",
    body:     "Get a pre-vetted expert deployed in 48 hours with flexible terms.",
    href:     "/services/taas",
  },
  {
    scenario: "Building a long-term remote team",
    plan:     "EOR + Talent Management",
    body:     "Compliant employment with ongoing performance optimization.",
    href:     "/services/eor",
  },
  {
    scenario: "Expanding into a new country",
    plan:     "EOR",
    body:     "Hire legally without setting up a local entity. Full compliance included.",
    href:     "/services/eor",
  },
];

const TRUST_BAR = [
  { icon: ShieldCheck, title: "100% Compliant",       sub: "Legal in every country" },
  { icon: Clock,       title: "Fast Deployment",      sub: "First match in 48hrs" },
  { icon: Star,        title: "Dedicated HR Support", sub: "Account managers included" },
  { icon: Zap,         title: "Quality Guaranteed",   sub: "Pre-vetted talent only" },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Dots({ score }: { score: number }) {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.3 }}
          className="h-2 rounded-full"
          style={{
            width: "18px",
            backgroundColor: i <= score ? O : BR,
          }}
        />
      ))}
    </div>
  );
}

export default function HiringPlans() {
  return (
    <>
      <CorpTalentsHeader />
      <main>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: `linear-gradient(135deg, hsl(0 0% 100%) 0%, ${OT} 100%)` }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm mb-8" style={{ color: BD }}>
              <Link to="/" className="hover:underline" style={{ color: O }}>Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Hiring Plans</span>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center max-w-4xl mx-auto">
              <motion.div variants={fadeUp()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: OT }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>● Compliant · Fast · Flexible</span>
              </motion.div>

              <motion.h1 variants={fadeUp(0.08)} className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: N }}>
                Flexible Hiring Models for{" "}
                <span style={{ color: O }}>Every Growth Stage</span>
              </motion.h1>

              <motion.p variants={fadeUp(0.16)} className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: BD }}>
                Whether you need quick contractor access, compliant global employment, or strategic talent partnerships —
                choose the hiring model that fits your business needs.
              </motion.p>

              <motion.div variants={fadeUp(0.24)} className="flex flex-wrap justify-center gap-3">
                {["8+ Countries", "48hrs First Match", "100% Compliant", "500+ Placements"].map((pill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold border"
                    style={{ borderColor: O, color: O, backgroundColor: "hsl(20 96% 54% / 0.07)" }}>
                    {pill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Trust Bar ──────────────────────────────────────────────── */}
        <section className="py-12 bg-white border-b" style={{ borderColor: BR }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {TRUST_BAR.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: OT }}>
                      <Icon className="w-5 h-5" style={{ color: O }} />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: N }}>{t.title}</p>
                      <p className="text-xs" style={{ color: BD }}>{t.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Plans Grid ─────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: OT }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>CHOOSE YOUR MODEL</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: N }}>Our Hiring Plans</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>Four proven hiring models, each designed for a different growth challenge.</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PLANS.map((plan, i) => {
                const Icon = plan.icon;
                return (
                  <motion.div key={i} variants={fadeUp(i * 0.08)}
                    whileHover={{ y: -8, boxShadow: "0 24px 48px hsl(20 96% 54% / 0.12)" }}
                    className="relative rounded-3xl p-8 border flex flex-col transition-all duration-300"
                    style={{ borderColor: plan.popular ? O : BR, backgroundColor: "hsl(0 0% 100%)" }}>
                    {plan.popular && (
                      <motion.span
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: O }}>
                        MOST POPULAR
                      </motion.span>
                    )}

                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-1"
                          style={{ backgroundColor: OT, color: O }}>
                          {plan.tag}
                        </div>
                        <h3 className="font-bold text-lg leading-tight" style={{ color: N }}>{plan.title}</h3>
                        <p className="text-sm font-medium mt-0.5" style={{ color: O }}>{plan.tagline}</p>
                      </div>
                    </div>

                    <p className="text-sm mb-2" style={{ color: BD }}>
                      <span className="font-semibold">Best for:</span> {plan.bestFor}
                    </p>

                    <ul className="space-y-2 mb-7 flex-1">
                      {plan.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm" style={{ color: BD }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: O }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Link to={plan.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Comparison ─────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: OT }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: "hsl(20 96% 54% / 0.12)" }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>COMPARE</span>
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>How These Plans Differ</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>
                Each plan excels in different areas. Choose based on your priority.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPARISON.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 border" style={{ borderColor: BR }}>
                  <h3 className="font-bold mb-5" style={{ color: N }}>{c.title}</h3>
                  <div className="space-y-4">
                    {c.ratings.map((r, j) => (
                      <div key={j}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs font-medium" style={{ color: BD }}>{r.label}</span>
                        </div>
                        <Dots score={r.score} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Decision Helper ─────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Not Sure Which Plan is Right for You?</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>
                Here's a quick guide based on common hiring scenarios.
              </p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {SCENARIOS.map((s, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.1)} whileHover={{ y: -6 }}
                  className="rounded-2xl p-7 border transition-all" style={{ borderColor: BR }}>
                  <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: BD }}>
                    If you're…
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: N }}>"{s.scenario}"</h3>
                  <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 text-white" style={{ backgroundColor: O }}>
                    → {s.plan}
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: BD }}>{s.body}</p>
                  <Link to={s.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: O }}>
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────────── */}
        <section className="py-24 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${N} 0%, hsl(225 49% 20%) 100%)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-3" style={{ color: "hsl(210 22% 65%)" }}>
                Our HR experts will help you choose the perfect solution for your hiring needs.
              </p>
              <p className="text-sm mb-10" style={{ color: "hsl(210 22% 50%)" }}>
                No obligation · Free consultation included
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/hire-talent-intake"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-xl shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                    Start Hiring <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl border-2"
                    style={{ borderColor: O, color: O }}>
                    Talk to an HR Expert <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <CorpTalentsFooter />
    </>
  );
}
