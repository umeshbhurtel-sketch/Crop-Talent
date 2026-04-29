import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion, useScroll, useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight, ChevronRight,
  ClipboardList, Target, CheckCircle2, TrendingUp,
} from "lucide-react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";
const BR = "hsl(220 13% 91%)";

// ─── Step data ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "Requirement Analysis",
    day: "Day 1",
    description: "We sit down (virtually) to understand exactly what your team needs — from role requirements to culture fit and budget.",
    bullets: [
      "Define technical skills & seniority level",
      "Agree on interview stages & timeline",
      "Set budget, contract type, and location preferences",
      "Receive a talent brief for your approval",
    ],
    mockup: <RequirementMockup />,
  },
  {
    number: "02",
    Icon: Target,
    title: "Talent Matching",
    day: "Day 2–3",
    description: "Our AI-powered engine scans 50,000+ pre-vetted professionals and shortlists the top 3–5 candidates for your role.",
    bullets: [
      "AI scoring against 40+ skill dimensions",
      "Manual review by a senior recruiter",
      "Video profiles & availability confirmed",
      "Top candidates presented within 48 hours",
    ],
    mockup: <MatchingMockup />,
  },
  {
    number: "03",
    Icon: CheckCircle2,
    title: "Onboarding & Setup",
    day: "Day 5–7",
    description: "Once you select a candidate, we handle all the paperwork — contracts, compliance, payroll, and benefits — so you're ready on Day 1.",
    bullets: [
      "Employment contracts drafted & signed",
      "Payroll & tax compliance configured",
      "Equipment & access provisioned",
      "Team introductions and onboarding scheduled",
    ],
    mockup: <OnboardingMockup />,
  },
  {
    number: "04",
    Icon: TrendingUp,
    title: "Scaling & Support",
    day: "Day 30+",
    description: "Your dedicated account manager monitors performance, handles issues, and helps you scale the team up or down as your needs evolve.",
    bullets: [
      "Monthly performance check-ins",
      "24/7 HR & payroll support",
      "Easy team expansion in any country",
      "Transparent reporting dashboard",
    ],
    mockup: <ScalingMockup />,
  },
];

// ─── Visual mockup components ─────────────────────────────────────────────────
function RequirementMockup() {
  return (
    <div className="rounded-xl border p-5 space-y-3 text-xs" style={{ borderColor: BR, backgroundColor: "hsl(0 0% 100%)" }}>
      <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: O }}>New Role Brief</p>
      {[["Role", "Senior Full-Stack Engineer"], ["Team", "Product (Remote)"], ["Timeline", "ASAP"], ["Budget", "$80–100K / yr"]].map(([k, v]) => (
        <div key={k} className="flex justify-between items-center">
          <span style={{ color: BD }}>{k}</span>
          <span className="font-semibold" style={{ color: N }}>{v}</span>
        </div>
      ))}
      <div className="pt-2 flex gap-1.5 flex-wrap">
        {["React", "Node.js", "TypeScript", "AWS"].map(s => (
          <span key={s} className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ backgroundColor: OT, color: O }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function MatchingMockup() {
  const candidates = [
    { name: "Alex K.", role: "Full-Stack", match: 97, color: "bg-violet-100 text-violet-700" },
    { name: "Priya M.", role: "React Lead", match: 94, color: "bg-emerald-100 text-emerald-700" },
    { name: "James T.", role: "Node.js", match: 91, color: "bg-amber-100 text-amber-700" },
  ];
  return (
    <div className="rounded-xl border p-5 space-y-3" style={{ borderColor: BR, backgroundColor: "hsl(0 0% 100%)" }}>
      <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: O }}>Top Matches</p>
      {candidates.map((c) => (
        <div key={c.name} className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${c.color}`}>
            {c.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold" style={{ color: N }}>{c.name}</p>
            <p className="text-[10px]" style={{ color: BD }}>{c.role}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: BR }}>
              <div className="h-full rounded-full" style={{ width: `${c.match}%`, backgroundColor: O }} />
            </div>
            <span className="text-[10px] font-bold" style={{ color: O }}>{c.match}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function OnboardingMockup() {
  const items = ["Contract signed", "Payroll configured", "Access provisioned", "Team intro done"];
  return (
    <div className="rounded-xl border p-5 space-y-2.5" style={{ borderColor: BR, backgroundColor: "hsl(0 0% 100%)" }}>
      <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: O }}>Onboarding Checklist</p>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: O }}>
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 12 10">
              <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xs font-medium" style={{ color: N }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ScalingMockup() {
  const bars = [30, 42, 38, 55, 50, 65, 72, 68, 80, 76, 88, 92];
  return (
    <div className="rounded-xl border p-5" style={{ borderColor: BR, backgroundColor: "hsl(0 0% 100%)" }}>
      <div className="flex justify-between items-center mb-3">
        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: O }}>Team Growth</p>
        <span className="text-[10px] font-bold" style={{ color: "hsl(142 72% 45%)" }}>↑ 47% YoY</span>
      </div>
      <div className="flex items-end gap-0.5 h-10">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{
            height: `${h}%`,
            backgroundColor: i >= bars.length - 3 ? O : OT,
          }} />
        ))}
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[9px]" style={{ color: BD }}>Jan</span>
        <span className="text-[9px]" style={{ color: BD }}>Dec</span>
      </div>
    </div>
  );
}

// ─── Step card ────────────────────────────────────────────────────────────────
function StepCard({ step, index, stepRef }: {
  step: typeof STEPS[0];
  index: number;
  stepRef: (el: HTMLDivElement | null) => void;
}) {
  const isEven  = index % 2 === 0;
  const Icon    = step.Icon;

  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? -40 : 40 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const childStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };
  const childFade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div ref={stepRef} className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 ${isEven ? "" : "md:[direction:rtl]"}`}>
      {/* Content side */}
      <motion.div
        className={isEven ? "" : "md:[direction:ltr]"}
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={childStagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {/* Day badge */}
          <motion.div variants={childFade} className="inline-flex items-center gap-2 mb-4">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ backgroundColor: OT, color: O }}>
              {step.day}
            </span>
          </motion.div>

          {/* Number + icon row */}
          <motion.div variants={childFade} className="flex items-center gap-4 mb-4">
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
              whileHover={{ rotate: 8, scale: 1.05 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
            <motion.span
              className="text-5xl font-black leading-none select-none"
              style={{ color: OT }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
            >
              {step.number}
            </motion.span>
          </motion.div>

          <motion.h2 variants={childFade} className="text-3xl font-bold mb-3" style={{ color: N }}>
            {step.title}
          </motion.h2>
          <motion.p variants={childFade} className="text-base leading-relaxed mb-5" style={{ color: BD }}>
            {step.description}
          </motion.p>

          <motion.ul variants={childFade} className="space-y-2.5">
            {step.bullets.map((b, j) => (
              <motion.li
                key={j}
                className="flex items-start gap-3 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + j * 0.08 }}
                style={{ color: BD }}
              >
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: O }} />
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Visual side */}
      <motion.div
        className={`md:[direction:ltr] ${isEven ? "" : ""}`}
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
      >
        <div
          className="rounded-3xl p-1 shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
        >
          <div className="rounded-3xl p-6" style={{ backgroundColor: "hsl(0 0% 99%)" }}>
            {step.mockup}
          </div>
        </div>
      </motion.div>

      {/* Center connector dot (desktop) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 bg-white hidden md:block z-10"
        style={{ borderColor: O }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HowItWorks() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const stepRefs      = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll-driven vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.2"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Active step detection via scroll position
  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      let current = 0;
      stepRefs.current.forEach((ref, i) => {
        if (ref) {
          const { top } = ref.getBoundingClientRect();
          if (top < h * 0.6) current = i;
        }
      });
      setActiveIdx(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToStep = (i: number) => {
    stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <CorpTalentsHeader />
      <main>

        {/* ── Page Hero ─────────────────────────────────────────────────── */}
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
              <span>How It Works</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: OT }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                <span className="text-sm font-semibold" style={{ color: O }}>OUR PROCESS</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: N }}>
                From requirement to results in days.
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: BD }}>
                Four focused steps that take you from "we need to hire" to "they start Monday" — handled end-to-end by our team.
              </p>

              {/* Day 1 → Day 30 indicator */}
              <div className="mt-10 flex items-center gap-3">
                {STEPS.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="px-3 py-1.5 rounded-full text-sm font-bold cursor-pointer transition-all"
                      onClick={() => scrollToStep(i)}
                      style={{
                        backgroundColor: activeIdx === i ? O : OT,
                        color: activeIdx === i ? "white" : O,
                        transform: activeIdx === i ? "scale(1.08)" : "scale(1)",
                      }}
                    >
                      {s.day}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="h-px w-6" style={{ backgroundColor: BR }} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Timeline ───────────────────────────────────────────────────── */}
        <section className="py-8 relative" ref={containerRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

            {/* Vertical progress line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: BR }} />
            <motion.div
              className="hidden md:block absolute left-1/2 top-0 w-px -translate-x-1/2 origin-top"
              style={{ scaleY: lineScaleY, backgroundColor: O, height: "100%" }}
            />

            {/* Step dot navigation (sticky sidebar on desktop) */}
            <div className="hidden lg:flex flex-col gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-20">
              {STEPS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => scrollToStep(i)}
                  title={s.title}
                  className="group flex items-center gap-3"
                >
                  <AnimatePresence>
                    <motion.div
                      className="w-3 h-3 rounded-full border-2 transition-all"
                      animate={{
                        scale: activeIdx === i ? 1.4 : 1,
                        backgroundColor: activeIdx === i ? O : "white",
                        borderColor: activeIdx === i ? O : BR,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </AnimatePresence>
                  <span
                    className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    style={{ color: activeIdx === i ? O : BD }}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Step cards */}
            {STEPS.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
                stepRef={(el) => { stepRefs.current[i] = el; }}
              />
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${N} 0%, hsl(225 49% 20%) 50%, ${N} 100%)` }}
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to run the process?
              </h2>
              <p className="text-xl" style={{ color: "hsl(20 100% 85%)" }}>
                Tell us what you need and we'll have your first candidates ready within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/hire-talent-intake"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-xl shadow-2xl transition-all"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                  >
                    Start Hiring Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl border-2 transition-all"
                    style={{ borderColor: O, color: O }}
                  >
                    Talk to an Expert
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
