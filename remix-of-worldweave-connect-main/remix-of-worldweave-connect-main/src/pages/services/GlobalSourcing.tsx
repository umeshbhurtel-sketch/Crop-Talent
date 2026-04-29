import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe, ChevronRight, ArrowRight, ArrowLeft,
  Search, Users, FileCheck, TrendingUp, Map, Star,
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
  { label: "Talent Management",      href: "/services/talent-management" },
];

const FEATURES = [
  { icon: Search,      title: "50K+ Pre-Screened Professionals", body: "Active talent across 80+ job categories, all background-checked and reference-verified." },
  { icon: Map,         title: "Multi-Country Sourcing",           body: "Simultaneous sourcing across multiple geographies for distributed team builds." },
  { icon: FileCheck,   title: "Rigorous Vetting",                 body: "Technical assessments, behavioral interviews, and cultural evaluations for every candidate." },
  { icon: Star,        title: "Cultural Fit Scoring",             body: "Proprietary scoring model ensures alignment between candidate and company culture." },
  { icon: TrendingUp,  title: "Market Intelligence Reports",     body: "Talent availability, salary benchmarks, and competitive landscape data for your target market." },
  { icon: Users,       title: "Pipeline Management",              body: "Ongoing talent pipeline maintained so you always have pre-qualified candidates ready." },
];

const PROCESS = [
  { n: "01", title: "Deep Requirements Workshop",  body: "We go beyond the job description to understand your team culture, technical stack, and growth trajectory." },
  { n: "02", title: "Global Search & Outreach",    body: "Proactive sourcing across job boards, professional networks, and our proprietary talent database." },
  { n: "03", title: "Multi-Stage Screening",       body: "Technical tests, behavioral interviews, and cultural evaluations to surface only the best candidates." },
  { n: "04", title: "Shortlist & Handoff",         body: "Detailed candidate reports with skill summaries, interview recordings, and hiring recommendations." },
];

const FAQS = [
  { q: "How large is your talent network?",                    a: "Our active talent database includes 50,000+ pre-screened professionals across 150+ countries and 80+ job categories." },
  { q: "What industries do you source for?",                   a: "We specialize in technology and IT but also cover finance, operations, marketing, and executive roles." },
  { q: "How long does sourcing typically take?",               a: "For standard roles, expect a first shortlist within 5–10 business days. Complex or niche roles may take up to 3 weeks." },
  { q: "Do you handle international background checks?",       a: "Yes. We partner with background check providers in all major markets to verify employment history, criminal records, and professional credentials." },
  { q: "What if we need to hire in a new country quickly?",    a: "Global Sourcing pairs naturally with our EOR service for fast, compliant hiring in any market without entity setup." },
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

export default function GlobalSourcing() {
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
              <span>Global Talent Sourcing</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:opacity-80" style={{ color: O }}>
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                  </Link>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: OT }}>
                    <Globe className="w-4 h-4" style={{ color: O }} />
                    <span className="text-sm font-semibold" style={{ color: O }}>GLOBAL TALENT SOURCING</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: N }}>
                    50,000+ Vetted Professionals.<br />
                    <span style={{ color: O }}>One Platform.</span>
                  </h1>
                  <p className="text-sm font-medium mb-4" style={{ color: BD }}>Best for: Companies building distributed teams</p>
                  <p className="text-xl leading-relaxed mb-8" style={{ color: BD }}>
                    Our global sourcing team finds and qualifies talent across every timezone, industry, and skill set.
                    Whether you need a data scientist in Eastern Europe or a designer in Southeast Asia, we source it.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link to="/hire-talent-intake"
                        className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white rounded-xl shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                        Start Sourcing <ArrowRight className="w-4 h-4" />
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
                    { label: "Talent Pool",         value: "50K+" },
                    { label: "Countries",            value: "150+" },
                    { label: "Job Categories",       value: "80+" },
                    { label: "First Shortlist",      value: "5–10 Days" },
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
                  <Globe className="w-8 h-8 mb-3" style={{ color: O }} />
                  <h3 className="font-bold mb-2">Find your next hire</h3>
                  <p className="text-sm mb-4" style={{ color: "hsl(210 22% 60%)" }}>Tell us the role and we'll source globally.</p>
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
                <span className="text-sm font-semibold" style={{ color: O }}>WHAT WE DELIVER</span>
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>World-Class Talent, Globally Sourced</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>A full-stack sourcing engine that finds the right people wherever they are.</p>
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Who This Is For</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>Ideal for any organization seeking specialized talent beyond their local market.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Distributed-First Companies",  body: "Build remote-first teams with the best talent from every time zone without geographic constraints." },
                { title: "Technical Hiring at Scale",    body: "Source niche engineers, data scientists, and architects faster than internal recruiting can." },
                { title: "Market Expansion Projects",    body: "Hire specialized local talent in new geographies to support regional launches." },
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: N }}>Our Sourcing Process</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>A rigorous, repeatable process that consistently surfaces the best candidates.</p>
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
              <Globe className="w-12 h-12 mx-auto mb-6" style={{ color: O }} />
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Source Globally?</h2>
              <p className="text-xl mb-8" style={{ color: "hsl(210 22% 65%)" }}>
                Tell us your role and target markets. We'll build your talent pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/hire-talent-intake"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-xl shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}>
                    Start Sourcing <ArrowRight className="w-5 h-5" />
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
