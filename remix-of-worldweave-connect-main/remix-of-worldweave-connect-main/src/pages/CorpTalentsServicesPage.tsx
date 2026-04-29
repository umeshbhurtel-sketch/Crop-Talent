import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, Briefcase, Globe, Settings, ArrowRight, ChevronRight,
  Clock, DollarSign, ShieldCheck, Zap,
} from "lucide-react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";
const BR = "hsl(220 13% 91%)";

const SERVICES = [
  {
    id:    "taas",
    href:  "/services/taas",
    Icon:  Users,
    label: "TaaS",
    title: "Talent as a Service",
    tagline: "On-demand experts, rapid deployment.",
    description:
      "Get instant access to pre-vetted professionals exactly when you need them. Scale your team up or down in days — no long-term commitments.",
    highlights: ["Deploy in 3–5 business days", "No placement fees", "Flexible engagement models"],
    tag: "Fast Scaling",
  },
  {
    id:    "eor",
    href:  "/services/eor",
    Icon:  Briefcase,
    label: "EOR",
    title: "Employer of Record",
    tagline: "Hire globally without legal entities.",
    description:
      "Expand your workforce into 150+ countries without setting up a local entity. We manage payroll, taxes, benefits, and full compliance.",
    highlights: ["150+ countries covered", "Full legal compliance", "Local currency payroll"],
    tag: "Global Expansion",
    popular: true,
  },
  {
    id:    "global-sourcing",
    href:  "/services/global-sourcing",
    Icon:  Globe,
    label: "Global Sourcing",
    title: "Global Talent Sourcing",
    tagline: "Strategic multi-country recruitment.",
    description:
      "Our sourcing team finds and qualifies talent across every timezone, industry, and skill set from a pool of 50,000+ vetted professionals.",
    highlights: ["50K+ pre-screened professionals", "Background & reference checks", "Cultural fit scoring"],
    tag: "Strategic Hiring",
  },
  {
    id:    "talent-management",
    href:  "/services/talent-management",
    Icon:  Settings,
    label: "Management",
    title: "Talent Management",
    tagline: "End-to-end workforce optimization.",
    description:
      "Hiring is just the beginning. Performance tracking, team communication, payroll continuity, and ongoing HR support — all in one place.",
    highlights: ["30/60/90-day onboarding", "Performance monitoring", "Conflict resolution"],
    tag: "Team Excellence",
  },
];

const WHY = [
  { icon: Clock,       title: "3–5 Day Hiring",  body: "Match with interview-ready professionals faster than any agency." },
  { icon: DollarSign,  title: "60% Cost Savings", body: "Avoid recruitment agency fees and unnecessary overhead." },
  { icon: Globe,       title: "150+ Countries",   body: "Hire anywhere with full local compliance included." },
  { icon: ShieldCheck, title: "100% Compliant",   body: "We handle all legal, payroll, and HR responsibilities." },
  { icon: Zap,         title: "Instant Scaling",  body: "Add or remove team members based on project demands." },
  { icon: Users,       title: "Dedicated Support", body: "24/7 account managers available for every client." },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CorpTalentsServicesPage() {
  return (
    <>
      <CorpTalentsHeader />
      <main>

        {/* ── Page Hero ───────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: `linear-gradient(135deg, hsl(0 0% 100%) 0%, ${OT} 100%)` }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm mb-8"
              style={{ color: BD }}
            >
              <Link to="/" className="hover:underline" style={{ color: O }}>Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Services</span>
            </motion.div>

            <motion.div variants={fadeUp()} initial="hidden" animate="visible" className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: OT }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>OUR SERVICES</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: N }}>
                Comprehensive Talent Solutions
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: BD }}>
                Four integrated services that cover every stage of your global hiring journey — from sourcing to long-term management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Services Grid ───────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {SERVICES.map((svc, i) => {
                const Icon = svc.Icon;
                return (
                  <motion.div
                    key={svc.id}
                    variants={fadeUp(i * 0.08)}
                    whileHover={{ y: -8, boxShadow: "0 24px 48px hsl(20 96% 54% / 0.12)" }}
                    className="relative rounded-3xl p-8 border transition-all duration-300 flex flex-col"
                    style={{ borderColor: BR, backgroundColor: "hsl(0 0% 100%)" }}
                  >
                    {svc.popular && (
                      <span
                        className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: O }}
                      >
                        MOST POPULAR
                      </span>
                    )}

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div
                          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-1"
                          style={{ backgroundColor: OT, color: O }}
                        >
                          {svc.tag}
                        </div>
                        <h2 className="text-xl font-bold leading-tight" style={{ color: N }}>{svc.title}</h2>
                        <p className="text-sm font-medium mt-0.5" style={{ color: O }}>{svc.tagline}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: BD }}>
                      {svc.description}
                    </p>

                    <ul className="space-y-2 mb-7">
                      {svc.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm" style={{ color: BD }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: O }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        to={svc.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Why CorpTalents ─────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: OT }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "hsl(20 96% 54% / 0.12)" }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: N }}>
                Built for Modern Teams
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>
                The fastest, most reliable global talent solution on the market
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {WHY.map((w, i) => {
                const Icon = w.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp()}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 border transition-all"
                    style={{ borderColor: BR }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: OT }}>
                      <Icon className="w-5 h-5" style={{ color: O }} />
                    </div>
                    <h3 className="font-bold mb-1.5" style={{ color: N }}>{w.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BD }}>{w.body}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────────── */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${N} 0%, hsl(225 49% 20%) 100%)` }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Not sure which service fits?</h2>
              <p className="text-xl" style={{ color: "hsl(20 100% 85%)" }}>
                Talk to our team. We'll recommend the right solution for your stage and hiring goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-xl shadow-2xl"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                  >
                    Talk to an Expert
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/hiring-plans"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl border-2"
                    style={{ borderColor: O, color: O }}
                  >
                    View Hiring Plans
                    <ArrowRight className="w-5 h-5" />
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
