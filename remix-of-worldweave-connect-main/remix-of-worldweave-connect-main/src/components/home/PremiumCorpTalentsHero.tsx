import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";
import mardiLabLogo from "@/assets/icons/mardi_lab_logo.png";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";

const stats = [
  { icon: Users,      value: "50K+",  label: "Global Professionals" },
  { icon: Globe,      value: "150+",  label: "Countries" },
  { icon: TrendingUp, value: "98%",   label: "Client Satisfaction" },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

export default function PremiumCorpTalentsHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* ── Background image with ken-burns + overlay ─────────────────── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=80&fit=crop"
            alt="Professional team collaborating"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.91) 40%, rgba(255,255,255,0.82) 65%, rgba(255,255,255,0.70) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 60%, rgba(255,255,255,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Floating particles ────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: `hsl(20 96% 54% / ${0.15 + (i % 4) * 0.07})`,
              left: `${8 + (i * 7.3) % 84}%`,
              top:  `${10 + (i * 11.7) % 80}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* ── "Powered by Mardi Lab LLC" pill ──────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="inline-flex mb-8"
        >
          <a
            href="https://mardilab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 rounded-full group/ml transition-all duration-200 hover:shadow-md hover:opacity-90"
            style={{
              backgroundColor: OT,
              border: "1px solid hsl(20 96% 54% / 0.25)",
            }}
            aria-label="Mardi Lab"
          >
            <img
              src={mardiLabLogo}
              alt="Mardi Lab"
              className="h-7 w-auto flex-shrink-0"
            />
          </a>
        </motion.div>

        {/* ── Headline ─────────────────────────────────────────────── */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            variants={fadeUp(0.08)}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
            style={{ color: N }}
          >
            Build Your Global Team.
          </motion.h1>
          <motion.div
            variants={fadeUp(0.22)}
            initial="hidden"
            animate="visible"
          >
            <span
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
              style={{ color: O }}
            >
              Without Limits.
            </span>
          </motion.div>
        </div>

        {/* ── Subheadline ──────────────────────────────────────────── */}
        <motion.p
          variants={fadeUp(0.38)}
          initial="hidden"
          animate="visible"
          className="text-xl leading-relaxed mx-auto mb-10 max-w-2xl"
          style={{ color: BD }}
        >
          Access pre-vetted global professionals, remote teams, and scalable hiring
          solutions designed for modern businesses.
        </motion.p>

        {/* ── CTAs ─────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0.52)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/hire-talent-intake"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-xl"
              style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
            >
              Hire Talent
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 bg-white/60 backdrop-blur-sm"
              style={{ borderColor: O, color: O }}
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Stat cards ───────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(0.62 + i * 0.1)}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6, boxShadow: "0 20px 40px hsl(20 96% 54% / 0.15)" }}
                className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white shadow-lg border"
                style={{ borderColor: "hsl(220 13% 91%)", minWidth: "180px" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: OT }}
                >
                  <Icon className="w-6 h-6" style={{ color: O }} />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-extrabold leading-none" style={{ color: O }}>{s.value}</p>
                  <p className="text-sm mt-0.5" style={{ color: BD }}>{s.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Scroll indicator — subtle (30% opacity), restores on hover ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-[0.32] hover:opacity-100 transition-opacity duration-400">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-4 h-7 border-2 rounded-full flex items-center justify-center"
            style={{ borderColor: "hsl(210 15% 72%)" }}
          >
            <motion.div
              className="w-0.5 h-1.5 rounded-full"
              style={{ background: "hsl(210 15% 72%)" }}
              animate={{ y: [0, 4, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
