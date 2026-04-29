import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  Menu,
  X,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Solutions", "Pricing", "Resources", "About"];

const COMPANY_LOGOS = ["Stripe", "Notion", "Linear", "Figma", "Vercel"];

const PIPELINE_STAGES = [
  { label: "Applied", count: 48, colorClass: "bg-slate-300" },
  { label: "Review", count: 23, colorClass: "bg-indigo-300" },
  { label: "Interview", count: 11, colorClass: "bg-indigo-500" },
  { label: "Offer", count: 4, colorClass: "bg-indigo-700" },
];

const CANDIDATES = [
  {
    initials: "AK",
    name: "Aisha Kumar",
    role: "Senior Engineer",
    stage: "Interview",
    avatarClass: "bg-violet-100 text-violet-700",
    badgeClass: "bg-violet-100 text-violet-700",
  },
  {
    initials: "JR",
    name: "James Rivera",
    role: "Product Designer",
    stage: "Offer",
    avatarClass: "bg-emerald-100 text-emerald-700",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  {
    initials: "SM",
    name: "Sara Müller",
    role: "Data Analyst",
    stage: "Review",
    avatarClass: "bg-amber-100 text-amber-700",
    badgeClass: "bg-amber-100 text-amber-700",
  },
];

const BAR_HEIGHTS = [30, 48, 38, 62, 50, 68, 74, 60, 82, 71, 88, 80];

// ─── Animation variants ───────────────────────────────────────────────────────

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function HRHeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg" aria-label="PeopleOS home">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 shadow-sm">
                <Zap className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <span className="text-[15px] font-bold tracking-tight text-slate-900">PeopleOS</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
              >
                Book a Demo
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-100 bg-white px-6 pb-5"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50 last:border-0 hover:text-indigo-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#"
                className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-700 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </motion.nav>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Dot-grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Vignette to soften grid edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 20%, rgba(255,255,255,0.92) 75%, rgba(255,255,255,1) 100%)",
          }}
        />
        {/* Soft accent blobs */}
        <div
          aria-hidden="true"
          className="absolute right-[15%] top-[20%] h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-[20%] bottom-[15%] h-[280px] w-[280px] rounded-full bg-violet-100/35 blur-3xl pointer-events-none"
        />

        <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-14 lg:gap-20 items-center">

            {/* ── Left column ─────────────────────────────────────────────── */}
            <motion.div
              className="flex flex-col gap-7"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Trust badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 select-none">
                  <span className="text-amber-400 leading-none" aria-hidden="true">★★★★★</span>
                  Trusted by 2,000+ growing teams worldwide
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                id="hero-heading"
                variants={fadeUp}
                className="text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]"
              >
                Hire smarter.{" "}
                <span className="text-indigo-600">Manage</span>
                {" "}better.{" "}
                <span className="relative whitespace-nowrap">
                  Grow faster.
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 w-full overflow-visible"
                    height="7"
                    viewBox="0 0 320 7"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5C55 1.5 130 0.5 318 4"
                      stroke="#6366f1"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                variants={fadeUp}
                className="text-lg text-slate-500 leading-relaxed max-w-xl"
              >
                PeopleOS brings your entire talent lifecycle into one platform — recruiting, onboarding, performance, and retention — so your HR team can focus on people, not paperwork.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 32px rgba(99,102,241,0.28)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 flex-shrink-0" aria-hidden="true">
                    <Play className="h-2.5 w-2.5 text-white fill-white ml-0.5" />
                  </span>
                  Watch Demo
                </motion.a>
              </motion.div>

              {/* Social proof logos */}
              <motion.div variants={fadeUp} className="pt-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3.5">
                  Trusted by leading teams worldwide
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3" role="list" aria-label="Trusted companies">
                  {COMPANY_LOGOS.map((name) => (
                    <span
                      key={name}
                      role="listitem"
                      className="text-[15px] font-extrabold tracking-tight text-slate-300 select-none"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right column — Dashboard mockup ─────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 32, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:block"
              aria-hidden="true"
            >
              {/* Padded wrapper so overflowing float cards aren't clipped */}
              <div className="relative mx-auto max-w-[360px] pt-6 pb-8 pr-10 pl-3">

                {/* ── Main card ──────────────────────────────────────────── */}
                <div className="rounded-2xl bg-white border border-slate-200/70 shadow-2xl shadow-slate-300/25 overflow-hidden">

                  {/* Header row */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Hiring Pipeline
                      </p>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        Q4 Engineering Roles
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-medium text-slate-400">Live</span>
                    </div>
                  </div>

                  <div className="px-5 pt-4 pb-0">
                    {/* Pipeline stage counters */}
                    <div className="grid grid-cols-4 gap-2.5 mb-5">
                      {PIPELINE_STAGES.map(({ label, count, colorClass }) => (
                        <div key={label} className="text-center">
                          <p className="text-lg font-bold text-slate-800">{count}</p>
                          <div className="mt-1.5 h-[3px] w-full rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${colorClass}`}
                              style={{ width: `${(count / 48) * 100}%` }}
                            />
                          </div>
                          <p className="mt-1 text-[9px] font-semibold text-slate-400 uppercase tracking-wide">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Candidate rows */}
                    <div className="space-y-2 pb-4">
                      {CANDIDATES.map(({ initials, name, role, stage, avatarClass, badgeClass }) => (
                        <div
                          key={name}
                          className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5"
                        >
                          <div
                            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${avatarClass}`}
                          >
                            {initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-slate-800 truncate">{name}</p>
                            <p className="text-[10px] text-slate-400">{role}</p>
                          </div>
                          <span className={`flex-shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full ${badgeClass}`}>
                            {stage}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini bar chart */}
                  <div className="px-5 pt-3.5 pb-5 border-t border-slate-50">
                    <div className="flex items-end gap-0.5 h-9">
                      {BAR_HEIGHTS.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-[2px]"
                          style={{
                            height: `${h}%`,
                            backgroundColor:
                              i >= BAR_HEIGHTS.length - 3 ? "#6366f1" : "#e0e7ff",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[9px] text-slate-400">Jan</span>
                      <span className="text-[9px] font-semibold text-indigo-500">↑ 34% YoY</span>
                      <span className="text-[9px] text-slate-400">Dec</span>
                    </div>
                  </div>
                </div>

                {/* ── Floating stat card — top right ──────────────────────── */}
                <motion.div
                  className="absolute -top-1 -right-1 z-10"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/70 px-3.5 py-2.5 min-w-[136px]">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                      <TrendingUp className="h-4 w-4 text-indigo-600" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none">+45%</p>
                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Faster Hiring</p>
                    </div>
                  </div>
                </motion.div>

                {/* ── Floating stat card — bottom left ────────────────────── */}
                <motion.div
                  className="absolute -bottom-3 -left-3 z-10"
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/70 px-3.5 py-2.5 min-w-[136px]">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none">98%</p>
                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Retention Rate</p>
                    </div>
                  </div>
                </motion.div>

                {/* ── Floating stat card — mid right ──────────────────────── */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 -right-5 z-10"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div className="flex items-center gap-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/70 px-3.5 py-2.5 min-w-[136px]">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50">
                      <Users className="h-4 w-4 text-violet-600" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none">24</p>
                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">New Hires / Month</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
            {/* ── /Right column ───────────────────────────────────────────── */}

          </div>
        </div>
      </section>
    </div>
  );
}
