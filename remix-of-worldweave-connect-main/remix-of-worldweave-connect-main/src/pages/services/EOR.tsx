import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase, ChevronRight, ArrowRight, ArrowLeft,
  ShieldCheck, CreditCard, Building2, Scale,
  CheckCircle2, Globe2, Users, FileCheck, ChevronDown,
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
  { label: "Talent as a Service",     href: "/services/taas" },
  { label: "Global Talent Sourcing",  href: "/services/global-sourcing" },
  { label: "Talent Management",       href: "/services/talent-management" },
];

const FEATURES = [
  { icon: Scale,       title: "Full Legal Compliance",   body: "We handle all employment laws, tax obligations, and regulatory requirements in each country." },
  { icon: CreditCard,  title: "Seamless Payroll",        body: "Complete payroll processing, benefits administration, and local currency payments." },
  { icon: Building2,   title: "No Entity Required",      body: "Hire in any country without the cost and complexity of setting up a local subsidiary." },
  { icon: ShieldCheck, title: "Risk Protection",         body: "Eliminate misclassification risks and ensure robust worker protections." },
  { icon: Globe2,      title: "150+ Countries Covered",  body: "Active EOR coverage across every major business market and emerging economies." },
  { icon: FileCheck,   title: "Contract Management",     body: "Locally compliant employment contracts, IP agreements, and NDA templates." },
];

const PROCESS = [
  { n: "01", title: "Understand Your Needs",     body: "We assess your requirements and target country compliance to design your EOR setup." },
  { n: "02", title: "Legal Employment Setup",    body: "Establish a secure legal employer relationship in target countries." },
  { n: "03", title: "Onboarding & Orientation",  body: "Comprehensive onboarding for new team members — smooth integration guaranteed." },
  { n: "04", title: "Ongoing Compliance",        body: "Continuous compliance tracking and regulatory updates to keep your team fully compliant." },
];

const FAQS = [
  { q: "What is an Employer of Record?",                          a: "An EOR is a third-party organization that legally employs workers on behalf of another company. The EOR handles all compliance, payroll, and HR administration while you retain full operational control of the employee's work." },
  { q: "How quickly can we hire through EOR?",                   a: "Typically within 1–2 weeks depending on the target country. We handle all setup — you just approve the candidate and we manage everything else." },
  { q: "Do we lose control of our employees?",                   a: "No. You retain full day-to-day management and direction of your employees. The EOR relationship is purely administrative and legal." },
  { q: "Which countries do you cover?",                          a: "We currently operate EOR services in 150+ countries. Contact us for coverage in specific markets." },
  { q: "What's the pricing model?",                              a: "We charge a flat monthly fee per employee that covers all HR administration, compliance, and payroll processing. Contact us for a custom quote." },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: BR }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5">
        <span className="font-semibold pr-4" style={{ color: N }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: O }} />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed" style={{ color: BD }}>{a}</p>
      </motion.div>
    </div>
  );
}

export default function EOR() {
  return (
    <>
      <CorpTalentsHeader />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: `linear-gradient(135deg, hsl(0 0% 100%) 0%, ${OT} 100%)` }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm mb-6" style={{ color: BD }}>
              <Link to="/" className="hover:underline" style={{ color: O }}>Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/services" className="hover:underline" style={{ color: O }}>Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Employer of Record</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Main content */}
              <div className="lg:col-span-2">
                <motion.div variants={fadeUp(0)} initial="hidden" animate="visible">
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:opacity-80" style={{ color: O }}>
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                  </Link>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: OT }}>
                    <Briefcase className="w-4 h-4" style={{ color: O }} />
                    <span className="text-sm font-semibold" style={{ color: O }}>EMPLOYER OF RECORD</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: N }}>
                    Hire Globally with<br />
                    <span style={{ color: O }}>Full Legal Clarity</span>
                  </h1>
                  <p className="text-sm font-medium mb-4" style={{ color: BD }}>
                    Best for: Compliance, payroll, and legal employer coverage
                  </p>
                  <p className="text-xl leading-relaxed mb-8" style={{ color: BD }}>
                    Expand into new markets without setting up local entities. We become the legal employer,
                    handling all compliance, payroll, and HR administration — while you retain full operational control.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link to="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white rounded-xl shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                        Talk to an EOR Expert <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link to="/how-it-works"
                        className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl border-2"
                        style={{ borderColor: O, color: O }}>
                        See How It Works <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="lg:sticky lg:top-28 space-y-4"
              >
                {/* Quick stats card */}
                <div className="rounded-2xl p-6 border" style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: BR }}>
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: BD }}>At a Glance</h3>
                  {[
                    { label: "Countries", value: "150+" },
                    { label: "Avg Setup Time", value: "1–2 Weeks" },
                    { label: "Compliance Rate", value: "100%" },
                    { label: "Client Satisfaction", value: "98%" },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b last:border-0" style={{ borderColor: BR }}>
                      <span className="text-sm" style={{ color: BD }}>{s.label}</span>
                      <span className="font-bold text-sm" style={{ color: O }}>{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Other services */}
                <div className="rounded-2xl p-6 border" style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: BR }}>
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: BD }}>Other Services</h3>
                  <ul className="space-y-2">
                    {OTHER_SERVICES.map((s, i) => (
                      <li key={i}>
                        <Link to={s.href}
                          className="flex items-center gap-2 text-sm py-1.5 hover:opacity-80 transition-opacity"
                          style={{ color: N }}>
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: O }} />
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div
                  className="rounded-2xl p-6 text-white"
                  style={{ background: `linear-gradient(135deg, ${N}, ${N2})` }}
                >
                  <Users className="w-8 h-8 mb-3" style={{ color: O }} />
                  <h3 className="font-bold mb-2">Ready to expand?</h3>
                  <p className="text-sm mb-4" style={{ color: "hsl(210 22% 60%)" }}>
                    Get a free consultation with our EOR specialists.
                  </p>
                  <Link to="/contact"
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
                <span className="text-sm font-semibold" style={{ color: O }}>WHAT EOR COVERS</span>
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Complete Employment Infrastructure</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>Everything you need to hire internationally without the complexity.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl p-6 border transition-all" style={{ borderColor: BR }}>
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Is EOR Right for You?</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>EOR is ideal for organizations that need to hire international talent quickly and compliantly.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Companies Expanding Globally", body: "Want to hire in new markets without setting up legal entities — no expensive subsidiary setup needed." },
                { title: "Startups & Scale-ups",          body: "Need to onboard international talent quickly and compliantly without a large HR team." },
                { title: "Remote-First Organizations",    body: "Building distributed teams across multiple countries with consistent compliance and payroll." },
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>How EOR Works</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>From brief to hired in weeks, not months.</p>
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
            <div className="bg-white rounded-2xl px-8 divide-y" style={{ borderColor: BR, border: `1px solid ${BR}` }}>
              {FAQS.map((f, i) => <FAQ key={i} {...f} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${N} 0%, hsl(225 49% 20%) 100%)` }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Users className="w-12 h-12 mx-auto mb-6" style={{ color: O }} />
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Hire Globally?</h2>
              <p className="text-xl mb-8" style={{ color: "hsl(210 22% 65%)" }}>
                Our EOR experts will walk you through the entire process — no obligations, no setup fees to explore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-xl shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                    Talk to an HR Expert <ArrowRight className="w-5 h-5" />
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
