import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ClipboardList, Target, CheckCircle2, TrendingUp } from "lucide-react";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";

const steps = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "Requirement Analysis",
    description: "Tell us about your hiring needs, roles, and team expectations.",
    bullets: ["Define role requirements & skills", "Set budget & timeline", "Identify team structure"],
    day: "Day 1",
  },
  {
    number: "02",
    Icon: Target,
    title: "Talent Matching",
    description: "We match you with pre-vetted professionals from our 50K+ pool.",
    bullets: ["AI-powered candidate screening", "Skills & culture fit assessment", "Top 3–5 profiles delivered"],
    day: "Day 2–3",
  },
  {
    number: "03",
    Icon: CheckCircle2,
    title: "Onboarding & Setup",
    description: "Quick onboarding with compliance, contracts, and payroll setup.",
    bullets: ["Contract & compliance handled", "Payroll & benefits configured", "Team introductions arranged"],
    day: "Day 5–7",
  },
  {
    number: "04",
    Icon: TrendingUp,
    title: "Scaling & Support",
    description: "Scale your team seamlessly with 24/7 support and management.",
    bullets: ["Dedicated account manager", "Performance monitoring", "Easy scale-up or scale-down"],
    day: "Day 30+",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function CorpTalentsProcess() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.85", "end 0.3"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 overflow-hidden" style={{ backgroundColor: "hsl(0 0% 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: OT }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
            <span className="text-sm font-semibold" style={{ color: O }}>HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: N }}>
            Simple 4-Step Process
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-2" style={{ color: BD }}>
            From requirement to results in days, not months
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-semibold mt-2" style={{ color: BD }}>
            <span className="px-3 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: O }}>Day 1</span>
            <div className="w-16 h-0.5" style={{ backgroundColor: "hsl(220 13% 88%)" }} />
            <span className="px-3 py-1 rounded-full border text-xs font-bold" style={{ borderColor: O, color: O }}>Day 30+</span>
          </div>
        </motion.div>

        {/* Desktop scroll-line + grid */}
        <div className="hidden md:block" ref={lineRef}>
          {/* Track + animated fill */}
          <div className="relative mb-12 mx-8">
            <div className="h-1 rounded-full" style={{ backgroundColor: "hsl(220 13% 91%)" }} />
            <motion.div
              className="absolute top-0 left-0 h-1 rounded-full origin-left"
              style={{ width: lineWidth, backgroundColor: O }}
            />
            {/* Dot markers */}
            <div className="absolute inset-0 flex justify-between items-center">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 rounded-full border-2 bg-white"
                  style={{ borderColor: O }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.Icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: `0 20px 40px hsl(20 96% 54% / 0.15)` }}
                  className="rounded-2xl p-6 border transition-all duration-300 cursor-default"
                  style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: "hsl(220 13% 91%)" }}
                >
                  {/* Number badge + icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ rotate: 8 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.span
                      className="text-3xl font-black"
                      style={{ color: "hsl(220 13% 91%)" }}
                      whileHover={{ color: O }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.number}
                    </motion.span>
                  </div>

                  <div
                    className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-3"
                    style={{ backgroundColor: OT, color: O }}
                  >
                    {step.day}
                  </div>

                  <h3 className="text-lg font-bold mb-2" style={{ color: N }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: BD }}>{step.description}</p>

                  <ul className="space-y-1.5">
                    {step.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs" style={{ color: BD }}>
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: O }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-16"
              >
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-5 top-12 w-0.5 h-12"
                    style={{ background: `linear-gradient(180deg, ${O}, hsl(20 100% 97%))` }}
                  />
                )}
                <div
                  className="absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                >
                  {step.number}
                </div>
                <div className="rounded-2xl p-5 border" style={{ borderColor: "hsl(220 13% 91%)" }}>
                  <div className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2" style={{ backgroundColor: OT, color: O }}>{step.day}</div>
                  <h3 className="font-bold mb-1" style={{ color: N }}>{step.title}</h3>
                  <p className="text-sm mb-3" style={{ color: BD }}>{step.description}</p>
                  <ul className="space-y-1">
                    {step.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs" style={{ color: BD }}>
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: O }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/hire-talent-intake"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl shadow-xl transition-all"
              style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
            >
              Start Your Hiring Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl border-2 transition-all"
              style={{ borderColor: O, color: O }}
            >
              See Full Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
