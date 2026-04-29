import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, ChevronRight, ArrowRight, ArrowLeft,
  Zap, Clock, DollarSign, RefreshCw, Star, Shield,
  CheckCircle2, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import CorpTalentsHeader from "../../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../../components/home/CorpTalentsFooter";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const N2 = "hsl(225 49% 20%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";
const BR = "hsl(220 13% 91%)";

const OTHER_SERVICES = [
  { label: "Employer of Record",      href: "/services/eor" },
  { label: "Global Talent Sourcing",  href: "/services/global-sourcing" },
  { label: "Talent Management",       href: "/services/talent-management" },
];

const FEATURES = [
  { icon: Clock,      title: "Deploy in 3–5 Days",     body: "Interview-ready professionals matched to your requirements within business days, not months." },
  { icon: DollarSign, title: "No Placement Fees",       body: "Transparent flat-rate pricing with zero hidden charges or agency markup." },
  { icon: RefreshCw,  title: "Flexible Engagement",     body: "Part-time, full-time, or project-based — adjust scope at any time." },
  { icon: Star,       title: "Pre-Vetted Talent",       body: "Every professional passes technical assessments, behavioral screens, and reference checks." },
  { icon: Shield,     title: "Replace Guarantee",       body: "If a match doesn't work out, we replace them at no extra cost within the guarantee period." },
  { icon: Zap,        title: "Instant Scaling",         body: "Add new team members or reduce headcount based on project demands." },
];

const PROCESS = [
  { n: "01", title: "Share Your Requirements",  body: "Tell us the skills, experience level, timezone, and engagement model you need." },
  { n: "02", title: "We Source & Screen",       body: "Our team matches you with pre-vetted candidates from our active talent network." },
  { n: "03", title: "You Interview & Approve",  body: "Meet the top candidates and choose who you want on your team." },
  { n: "04", title: "Onboard & Start",          body: "We handle contracts and onboarding. Your new team member starts within days." },
];

const FAQS = [
  { q: "What types of professionals are available?",         a: "Software engineers, designers, data scientists, product managers, DevOps engineers, QA specialists, and more across 80+ job categories." },
  { q: "How is TaaS different from traditional staffing?",   a: "TaaS gives you on-demand access to a pre-vetted talent network with no placement fees, flexible engagement terms, and a replacement guarantee — traditional staffing typically involves large fees and rigid contracts." },
  { q: "Can we hire TaaS professionals full-time later?",    a: "Yes. Many clients convert TaaS engagements to permanent hires. We support this transition with straightforward conversion terms." },
  { q: "What happens if the match isn't right?",             a: "We offer a replacement guarantee. If a professional isn't working out within the agreed period, we find a replacement at no additional charge." },
  { q: "Do you support multiple time zones?",               a: "Yes. Our global talent network spans every major timezone, and we can match you with professionals who overlap with your team's working hours." },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b cursor-pointer" style={{ borderColor: BR }} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between py-5">
        <span className="font-semibold pr-4" style={{ color: N }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: O }} />
        </motion.div>
      </div>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="pb-5 text-sm leading-relaxed" style={{ color: BD }}>{a}</p>
      </motion.div>
    </div>
  );
}

export default function TaaS() {
  return (
    <>
      <CorpTalentsHeader />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: `linear-gradient(135deg, hsl(0 0% 100%) 0%, ${OT} 100%)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm mb-6" style={{ color: BD }}>
              <Link to="/" className="hover:underline" style={{ color: O }}>Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/services" className="hover:underline" style={{ color: O }}>Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Talent as a Service</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:opacity-80" style={{ color: O }}>
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                  </Link>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: OT }}>
                    <Users className="w-4 h-4" style={{ color: O }} />
                    <span className="text-sm font-semibold" style={{ color: O }}>TALENT AS A SERVICE</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: N }}>
                    On-Demand Experts,<br />
                    <span style={{ color: O }}>Rapid Deployment.</span>
                  </h1>
                  <p className="text-sm font-medium mb-4" style={{ color: BD }}>Best for: Startups & scale-ups needing speed</p>
                  <p className="text-xl leading-relaxed mb-8" style={{ color: BD }}>
                    Get instant access to pre-vetted professionals exactly when you need them.
                    No long-term commitments, no recruitment delays — scale your team in days, not months.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link to="/hire-talent-intake"
                        className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white rounded-xl shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                        Start Hiring <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link to="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl border-2"
                        style={{ borderColor: O, color: O }}>
                        Talk to Us <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
                className="lg:sticky lg:top-28 space-y-4">
                <div className="rounded-2xl p-6 border" style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: BR }}>
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: BD }}>At a Glance</h3>
                  {[
                    { label: "Average Deploy Time", value: "3–5 Days" },
                    { label: "Job Categories",      value: "80+" },
                    { label: "Placement Fees",      value: "$0" },
                    { label: "Replace Guarantee",   value: "Included" },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b last:border-0" style={{ borderColor: BR }}>
                      <span className="text-sm" style={{ color: BD }}>{s.label}</span>
                      <span className="font-bold text-sm" style={{ color: O }}>{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl p-6 border" style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: BR }}>
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: BD }}>Other Services</h3>
                  <ul className="space-y-2">
                    {OTHER_SERVICES.map((s, i) => (
                      <li key={i}>
                        <Link to={s.href} className="flex items-center gap-2 text-sm py-1.5 hover:opacity-80" style={{ color: N }}>
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: O }} /> {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl p-6 text-white" style={{ background: `linear-gradient(135deg, ${N}, ${N2})` }}>
                  <Zap className="w-8 h-8 mb-3" style={{ color: O }} />
                  <h3 className="font-bold mb-2">Ready to scale fast?</h3>
                  <p className="text-sm mb-4" style={{ color: "hsl(210 22% 60%)" }}>Tell us what you need and get matched in 48 hours.</p>
                  <Link to="/hire-talent-intake"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-bold rounded-xl text-white text-sm"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: OT }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>WHAT YOU GET</span>
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Everything Included in TaaS</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>No hidden fees, no long-term lock-in. Just exceptional talent when you need it.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5 }} className="rounded-2xl p-6 border transition-all" style={{ borderColor: BR }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: OT }}>
                      <Icon className="w-6 h-6" style={{ color: O }} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: N }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BD }}>{f.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Use Cases ─────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: OT }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Who Uses TaaS?</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>TaaS works for any organization that values speed, flexibility, and quality.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Fast-Growing Startups",    body: "Spin up engineering teams quickly to ship your product without the long hiring cycle." },
                { title: "Project-Based Teams",      body: "Engage specialists for a defined scope, then scale back when the project wraps up." },
                { title: "Enterprises Needing Flex", body: "Supplement your core team with specialized skills during peak demand periods." },
              ].map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-7 border" style={{ borderColor: BR }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: OT }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: O }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: N }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: BD }}>{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>How TaaS Works</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>From brief to onboarded in as little as 5 business days.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROCESS.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-5 p-6 rounded-2xl border" style={{ borderColor: BR }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-white text-sm"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                    {p.n}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5" style={{ color: N }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BD }}>{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: OT }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Frequently Asked Questions</h2>
            </motion.div>
            <div className="bg-white rounded-2xl px-8" style={{ border: `1px solid ${BR}` }}>
              {FAQS.map((f, i) => <FAQ key={i} {...f} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${N} 0%, hsl(225 49% 20%) 100%)` }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Zap className="w-12 h-12 mx-auto mb-6" style={{ color: O }} />
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Deploy Your Team?</h2>
              <p className="text-xl mb-8" style={{ color: "hsl(210 22% 65%)" }}>Tell us what you need. We'll match you with the right professionals within 48 hours.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/hire-talent-intake"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-xl shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                    Start Hiring Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/hiring-plans"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl border-2"
                    style={{ borderColor: O, color: O }}>
                    Compare All Plans <ArrowRight className="w-5 h-5" />
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
