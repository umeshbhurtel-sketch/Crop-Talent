import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Settings, ChevronRight, ArrowRight, ArrowLeft,
  BarChart2, Users, Heart, BookOpen, Shield, RefreshCw,
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
  { label: "Employer of Record",     href: "/services/eor" },
  { label: "Talent as a Service",    href: "/services/taas" },
  { label: "Global Talent Sourcing", href: "/services/global-sourcing" },
];

const FEATURES = [
  { icon: BarChart2,  title: "Performance Tracking",   body: "Monthly feedback sessions, KPI dashboards, and quarterly performance reviews managed end-to-end." },
  { icon: BookOpen,   title: "Continuous Training",    body: "Customized upskilling programs, certification support, and learning pathways for every team member." },
  { icon: Heart,      title: "Employee Engagement",    body: "Regular pulse surveys, recognition initiatives, and team-building programs to maintain high morale." },
  { icon: Shield,     title: "Compliant Payroll",      body: "Accurate, on-time payroll compliant with local regulations, tax filings, and statutory contributions." },
  { icon: RefreshCw,  title: "Conflict Resolution",    body: "Dedicated HR account managers handle disputes, grievances, and disciplinary processes professionally." },
  { icon: Users,      title: "Retention Optimization", body: "Data-driven retention strategies that identify at-risk employees before they disengage." },
];

const PROCESS = [
  { n: "01", title: "Onboarding Program Design",   body: "We build a structured 30/60/90-day plan tailored to each hire's role and your company's processes." },
  { n: "02", title: "Performance Framework Setup", body: "Define KPIs, reporting cadences, and review structures aligned to your business objectives." },
  { n: "03", title: "Ongoing HR Management",       body: "Monthly check-ins, payroll continuity, conflict resolution, and compliance monitoring throughout." },
  { n: "04", title: "Growth & Retention Planning", body: "Career mapping, upskilling programs, and succession planning to keep your team motivated." },
];

const FAQS = [
  { q: "What does Talent Management include?",                  a: "A full post-hire HR service covering performance tracking, payroll compliance, conflict resolution, employee engagement, training programs, and retention strategies." },
  { q: "Can we use Talent Management without other services?",  a: "Yes. Talent Management works as a standalone service for teams already in place. It also pairs naturally with TaaS and EOR for end-to-end workforce management." },
  { q: "How are performance reviews structured?",               a: "We follow a 30/60/90-day onboarding cadence and then quarterly reviews with your account manager, including written reports and recommendations." },
  { q: "Do you handle payroll for internationally hired teams?", a: "Yes. Our payroll team manages multi-country payroll, local tax filings, and statutory benefits — fully compliant with local regulations." },
  { q: "How do you handle conflict between an employee and our company?", a: "Our dedicated HR account managers act as neutral mediators. We follow documented escalation protocols to resolve issues professionally and in compliance with local labor law." },
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

export default function TalentManagement() {
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
              <span>Talent Management</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:opacity-80" style={{ color: O }}>
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                  </Link>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: OT }}>
                    <Settings className="w-4 h-4" style={{ color: O }} />
                    <span className="text-sm font-semibold" style={{ color: O }}>TALENT MANAGEMENT</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: N }}>
                    From Onboarding to<br />
                    <span style={{ color: O }}>Long-Term Retention.</span>
                  </h1>
                  <p className="text-sm font-medium mb-4" style={{ color: BD }}>Best for: Teams focused on retention & growth</p>
                  <p className="text-xl leading-relaxed mb-8" style={{ color: BD }}>
                    Hiring is just the beginning. Our talent management service handles performance tracking, team
                    communication, payroll continuity, and ongoing HR support — through a dedicated account manager.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link to="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white rounded-xl shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                        Get Started <ArrowRight className="w-4 h-4" />
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
              <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
                className="lg:sticky lg:top-28 space-y-4">
                <div className="rounded-2xl p-6 border" style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: BR }}>
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: BD }}>At a Glance</h3>
                  {[
                    { label: "Onboarding Plan",    value: "30/60/90 Day" },
                    { label: "Review Cadence",     value: "Monthly + Quarterly" },
                    { label: "Payroll Compliance", value: "100%" },
                    { label: "Account Manager",    value: "Dedicated" },
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
                  <Settings className="w-8 h-8 mb-3" style={{ color: O }} />
                  <h3 className="font-bold mb-2">Retain your best people</h3>
                  <p className="text-sm mb-4" style={{ color: "hsl(210 22% 60%)" }}>Let us handle HR so you can focus on growth.</p>
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
                <span className="text-sm font-semibold" style={{ color: O }}>WHAT WE MANAGE</span>
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>End-to-End Workforce Optimization</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>Everything your team needs to perform, grow, and stay.</p>
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Who Benefits Most</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>Talent Management adds the most value for growing distributed teams.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Remote Teams Across Time Zones",      body: "Keep distributed employees engaged, aligned, and productive regardless of geography." },
                { title: "Companies After Rapid Hiring",        body: "Stabilize and optimize teams built quickly through TaaS or EOR with structured HR support." },
                { title: "Organizations Focused on Retention",  body: "Reduce churn through proactive engagement, development plans, and satisfaction tracking." },
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>How Talent Management Works</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>A structured lifecycle approach from day one through long-term retention.</p>
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

        {/* ── Differentiator callout ────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: OT }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${N}, hsl(225 49% 22%))` }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Post-Hire Talent Management</h2>
                <p className="text-lg mb-6" style={{ color: "hsl(210 22% 65%)" }}>
                  Once hired, we handle full talent management: seamless payroll compliant with local regulations,
                  proactive conflict resolution, monthly feedback sessions with dedicated account managers,
                  employee engagement initiatives, and customized development programs to keep your team
                  motivated, updated, and productive.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Compliant Payroll", "Conflict Resolution", "Performance Tracking", "Employee Engagement"].map((tag, i) => (
                    <span key={i} className="text-sm px-3 py-1.5 rounded-full font-semibold text-white"
                      style={{ backgroundColor: "hsl(20 96% 54% / 0.25)", border: "1px solid hsl(20 96% 54% / 0.4)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Frequently Asked Questions</h2>
            </motion.div>
            <div className="rounded-2xl px-8" style={{ border: `1px solid ${BR}` }}>
              {FAQS.map((f, i) => <FAQ key={i} {...f} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${N} 0%, hsl(225 49% 20%) 100%)` }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: O }} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Settings className="w-12 h-12 mx-auto mb-6" style={{ color: O }} />
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Team?</h2>
              <p className="text-xl mb-8" style={{ color: "hsl(210 22% 65%)" }}>
                Let our HR experts design a talent management program that fits your team's unique needs.
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
