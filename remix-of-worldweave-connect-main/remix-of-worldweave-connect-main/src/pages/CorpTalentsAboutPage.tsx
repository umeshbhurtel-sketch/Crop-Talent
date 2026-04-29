import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe, Users, Target, Eye, ChevronRight, ArrowRight,
  ShieldCheck, TrendingUp, Heart, BookOpen, Star, Award,
} from "lucide-react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const N2 = "hsl(225 49% 20%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";
const BR = "hsl(220 13% 91%)";

const STATS = [
  { label: "Years Experience",       value: "13+" },
  { label: "Countries Served",       value: "8+" },
  { label: "IT Professionals",       value: "100K+" },
  { label: "Successful Placements",  value: "500+" },
];

const PROCESS_STEPS = [
  {
    n: "01", icon: ShieldCheck, label: "Compliance",
    title: "Refining Job Requirements",
    body: "We collaborate closely with clients to define precise needs, matching technical skills with behavioral and cultural fits.",
  },
  {
    n: "02", icon: Globe, label: "Global Network",
    title: "Sourcing Top Talent",
    body: "Drawing from a network spanning 5 countries and over 100,000 IT professionals, with a strong emphasis on Nepal's skilled workforce.",
  },
  {
    n: "03", icon: Star, label: "Screening Rigor",
    title: "Rigorous Screening",
    body: "Multi-stage assessments including technical tests, behavioral interviews, and cultural evaluations.",
  },
  {
    n: "04", icon: Users, label: "Cultural Fit",
    title: "Candidate Presentation",
    body: "Detailed reports, skill summaries, and interview recordings for the top 2 candidates.",
  },
  {
    n: "05", icon: Heart, label: "Ongoing HR Support",
    title: "Onboarding & Support",
    body: "Personalized plans ensure smooth transitions, with ongoing HR services like performance tracking and continuous training.",
  },
];

const WHY_CARDS = [
  {
    icon: Award,
    title: "Deep HR Expertise",
    body: "Extensive recruitment and management experience minimizes risks in remote hiring, from sourcing Nepal's top talent to global retention.",
  },
  {
    icon: BookOpen,
    title: "Commitment to Talent Growth",
    body: "Continuous training and development, fostering high morale and career advancement for sustained performance.",
  },
  {
    icon: Globe,
    title: "Global Reach with Personalized Support",
    body: "Access Nepal's diverse, cost-effective talent pools while enjoying single-point coordination through dedicated managers.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    body: "Successfully staffed teams for Mangtas, Argus, and projects in health tech and ed tech sectors.",
  },
  {
    icon: ShieldCheck,
    title: "Cost-Effective and Compliant",
    body: "Advanced payroll, compliance, and proactive management ensure value without the HR overhead.",
  },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CorpTalentsAboutPage() {
  return (
    <>
      <CorpTalentsHeader />
      <main>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${N} 0%, hsl(225 49% 18%) 100%)` }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: O }} />
            <div className="absolute -bottom-20 left-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: O }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm mb-10" style={{ color: "hsl(210 22% 55%)" }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">About Us</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <motion.div variants={stagger} initial="hidden" animate="visible">
                <motion.div variants={fadeUp()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: N2 }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                  <span className="text-sm font-semibold" style={{ color: O }}>● Trusted HR Partner Since 2011</span>
                </motion.div>

                <motion.h1 variants={fadeUp(0.08)} className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Global HR & Talent Solutions<br />
                  <span style={{ color: O }}>from Nepal</span>
                </motion.h1>

                <motion.p variants={fadeUp(0.16)} className="text-lg leading-relaxed mb-5" style={{ color: "hsl(210 22% 65%)" }}>
                  At CorpTalents, we provide top talent from Nepal to global businesses, specializing in talent
                  acquisition and HR management to source, hire, and nurture exceptional IT professionals for reliable
                  remote solutions worldwide.
                </motion.p>

                <motion.p variants={fadeUp(0.24)} className="text-base leading-relaxed mb-8" style={{ color: "hsl(210 22% 55%)" }}>
                  With over 13 years of dedicated experience in IT recruitment and HR services, our team has successfully
                  placed and managed talent for international projects across the USA, UK, Australia, Switzerland,
                  Singapore, China, India, and more. Registered in Kathmandu, Nepal, and Virginia, USA.
                </motion.p>

                <motion.div variants={fadeUp(0.32)}>
                  <Link to="/hire-talent-intake"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                    Start Hiring Globally <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — stats grid */}
              <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <motion.div key={i} variants={fadeUp(i * 0.08)}
                    className="rounded-2xl p-8 text-center"
                    style={{ backgroundColor: N2, border: `1px solid hsl(225 49% 25%)` }}>
                    <div className="text-4xl font-bold mb-2" style={{ color: O }}>{s.value}</div>
                    <div className="text-sm font-medium" style={{ color: "hsl(210 22% 55%)" }}>{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ─────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: OT }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>PURPOSE</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: N }}>What Drives Us</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target, label: "Our Mission",
                  heading: "Deliver excellence by connecting businesses with top-tier IT professionals from Nepal.",
                  body: "Our HR-focused, client-centric approach ensures we exceed expectations through quality hires, robust training, and sustained employee engagement.",
                },
                {
                  icon: Eye, label: "Our Vision",
                  heading: "Provide reliable IT solutions through exceptional people from Nepal.",
                  body: "Guaranteeing successful integration of remote IT professionals and ultimate client satisfaction via superior HR practices.",
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="rounded-2xl p-10 relative overflow-hidden"
                    style={{ backgroundColor: N, border: `1px solid hsl(225 49% 25%)` }}>
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: N2 }}>
                        <Icon className="w-7 h-7" style={{ color: O }} />
                      </div>
                      <div className="text-sm font-semibold mb-3" style={{ color: O }}>{card.label}</div>
                      <h3 className="text-2xl font-bold text-white mb-4 leading-snug">{card.heading}</h3>
                      <p className="leading-relaxed" style={{ color: "hsl(210 22% 55%)" }}>{card.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: OT }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "hsl(20 96% 54% / 0.12)" }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>OUR PROCESS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: N }}>
                HR-Focused Hiring & Talent Management
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: BD }}>
                A comprehensive recruitment and HR process designed to source and manage exceptional IT talent from Nepal for global clients.
              </p>
            </motion.div>

            <div className="mt-14 space-y-4 max-w-4xl mx-auto">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="flex items-start gap-5 bg-white rounded-2xl p-6 border"
                    style={{ borderColor: BR }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-white text-sm shadow-md"
                      style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                    >
                      {step.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4" style={{ color: O }} />
                        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: O }}>{step.label}</span>
                      </div>
                      <h3 className="font-bold mb-1.5" style={{ color: N }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: BD }}>{step.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Post-Hire Differentiator ──────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-3xl p-10 lg:p-14 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${N}, hsl(225 49% 22%))` }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: N2 }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                  <span className="text-sm font-semibold" style={{ color: O }}>KEY DIFFERENTIATOR</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-5">Post-Hire Talent Management</h2>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: "hsl(210 22% 65%)" }}>
                  Once hired, we handle full talent management: seamless payroll compliant with local regulations, proactive
                  conflict resolution, monthly feedback sessions with dedicated account managers, employee engagement
                  initiatives, and customized development programs to keep your Nepalese-sourced team motivated, updated,
                  and productive.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Compliant Payroll", "Conflict Resolution", "Performance Tracking", "Employee Engagement"].map((tag, i) => (
                    <span key={i} className="text-sm px-4 py-2 rounded-full font-semibold text-white"
                      style={{ backgroundColor: "hsl(20 96% 54% / 0.25)", border: "1px solid hsl(20 96% 54% / 0.4)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why Choose Us ────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: OT }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "hsl(20 96% 54% / 0.12)" }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: N }}>Your Trusted HR Partner</h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: BD }}>
                We're your trusted HR partner in sourcing and sustaining high-performing remote IT teams from Nepal.
                Discover how our talent-focused solutions can elevate your business.
              </p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CARDS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div key={i} variants={fadeUp()} whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl p-7 border transition-all" style={{ borderColor: BR }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: OT }}>
                      <Icon className="w-6 h-6" style={{ color: O }} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: N }}>{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BD }}>{c.body}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="rounded-3xl p-14 text-white relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${N} 0%, hsl(225 49% 22%) 100%)` }}>
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ backgroundColor: O }} />
              <div className="relative z-10">
                <div className="text-sm font-semibold mb-4" style={{ color: O }}>JOIN 500+ COMPANIES</div>
                <h2 className="text-4xl font-bold mb-4">Ready to hire globally?</h2>
                <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsl(210 22% 65%)" }}>
                  Let's talk about your hiring goals. Our team will design a tailored talent strategy for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/hire-talent-intake"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                      Start Hiring Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold border transition-all"
                      style={{ borderColor: "hsl(225 49% 40%)", color: "hsl(210 22% 75%)" }}>
                      Talk to Us <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <CorpTalentsFooter />
    </>
  );
}
