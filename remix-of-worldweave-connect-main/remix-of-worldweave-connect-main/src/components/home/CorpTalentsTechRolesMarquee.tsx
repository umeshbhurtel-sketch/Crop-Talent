import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Brain,
  Briefcase,
  Users,
  Code,
  FileCode,
  GitMerge,
  Zap,
  Network,
} from "lucide-react";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";
const OT = "hsl(20 100% 97%)";

const roles: { name: string; Icon: React.ElementType }[] = [
  { name: "Databricks Engineers",                   Icon: Database  },
  { name: "Snowflake Developers & Data Engineers",  Icon: Cloud     },
  { name: "Generative AI & AI/ML Talent",           Icon: Brain     },
  { name: "Workday Extend Engineers",               Icon: Briefcase },
  { name: "Salesforce Developers & Architects",     Icon: Users     },
  { name: "Sitecore Developers",                    Icon: Code      },
  { name: "Kentico / Xperience Developers",         Icon: FileCode  },
  { name: "MuleSoft Developers",                    Icon: GitMerge  },
  { name: "Zapier Automation Engineers",            Icon: Zap       },
  { name: "Workato Integration Consultants",        Icon: Network   },
];

/* Four copies → animate 0% → -50% (seamlessly loops through 2 copies) */
const tileSet = [...roles, ...roles, ...roles, ...roles];

function Pill({ name, Icon }: { name: string; Icon: React.ElementType }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white select-none flex-shrink-0 transition-all duration-200 cursor-default"
      style={{
        border: `1px solid ${hovered ? O : "hsl(20 96% 54% / 0.22)"}`,
        boxShadow: hovered
          ? "0 8px 20px rgba(245,130,32,0.18)"
          : "0 2px 8px rgba(15,23,42,0.07)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        className="w-4 h-4 flex-shrink-0 transition-colors duration-200"
        style={{ color: hovered ? O : BD }}
      />
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: N }}>
        {name}
      </span>
    </div>
  );
}

interface MarqueeRowProps {
  direction: "rtl" | "ltr";
  /** Duration in seconds for one full loop cycle */
  duration: number;
}

function MarqueeRow({ direction, duration }: MarqueeRowProps) {
  const [paused, setPaused] = useState(false);

  const animStyle: React.CSSProperties = {
    display: "flex",
    gap: "14px",
    width: "max-content",
    willChange: "transform",
    animation: `${direction === "rtl" ? "marquee-rtl" : "marquee-ltr"} ${duration}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[10%] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(0 0% 100%), transparent)" }}
      />
      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[10%] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(0 0% 100%), transparent)" }}
      />

      <div style={animStyle}>
        {tileSet.map((role, idx) => (
          <Pill key={idx} name={role.name} Icon={role.Icon} />
        ))}
      </div>
    </div>
  );
}

export default function CorpTalentsTechRolesMarquee() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "hsl(0 0% 100%)" }}>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ backgroundColor: OT }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
          <span className="text-sm font-semibold" style={{ color: O }}>
            OUR HIRING FOCUS
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: N }}>
          Specialized Tech Talent We Place
        </h2>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>
          We know that the hiring process and job search can be challenging. That&apos;s why we&apos;re
          here to assist you every step of the way — sourcing the world&apos;s most in-demand specialists.
        </p>
      </motion.div>

      {/* Marquee rows */}
      <div className="space-y-5">
        {/* Row 1: right-to-left, normal speed */}
        <MarqueeRow direction="rtl" duration={40} />

        {/* Row 2: left-to-right, slower */}
        <MarqueeRow direction="ltr" duration={50} />

        {/* Row 3: right-to-left, fastest — hidden on mobile (2-row layout) */}
        <div className="hidden md:block">
          <MarqueeRow direction="rtl" duration={30} />
        </div>
      </div>
    </section>
  );
}
