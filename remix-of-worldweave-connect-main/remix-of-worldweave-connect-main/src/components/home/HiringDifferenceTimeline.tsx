import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, CheckCircle2, Zap, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Sourcing",
    description: "Access to 100,000+ pre-vetted IT professionals across Nepal, India, Argentina, Nicaragua, and Ukraine.",
    color: "from-[#18B9C3] to-[#16A5AE]",
    side: "left"
  },
  {
    number: 2,
    icon: CheckCircle2,
    title: "Vetting",
    description: "Technical assessments, background checks, and culture-fit evaluations for every candidate.",
    color: "from-[#FF7A1A] to-[#E66A10]",
    side: "right"
  },
  {
    number: 3,
    icon: Zap,
    title: "Matching",
    description: "AI-powered algorithms combined with human expertise to find your perfect fit.",
    color: "from-[#6AB7A8] to-[#5AA598]",
    side: "left"
  },
  {
    number: 4,
    icon: Rocket,
    title: "Onboarding",
    description: "Seamless integration from day one with comprehensive onboarding support.",
    color: "from-[#18B9C3] to-[#16A5AE]",
    side: "right"
  },
  {
    number: 5,
    icon: TrendingUp,
    title: "Performance Management",
    description: "Continuous monitoring, feedback loops, and optimization for long-term success.",
    color: "from-[#FF7A1A] to-[#E66A10]",
    side: "left"
  }
];

export default function HiringDifferenceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-24 px-4 bg-[#F8F5EF] overflow-hidden"
      aria-labelledby="hiring-difference-title"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 
            id="hiring-difference-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E1324] mb-4"
          >
            What Makes CorpTalents Hiring Different
          </h2>
          <p className="text-lg md:text-xl text-[#0E1324]/70 max-w-3xl mx-auto">
            Our proven methodology combines cutting-edge technology with human expertise to deliver exceptional hiring results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#18B9C3] via-[#FF7A1A] to-[#6AB7A8] opacity-20" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                  step.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-60px)] ${
                  step.side === "left" ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                } text-center md:text-${step.side === "left" ? "right" : "left"}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${
                      step.side === "left" ? "md:justify-end" : "md:justify-start"
                    } justify-center`}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                        <step.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0E1324]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-[#0E1324]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.color} 
                    flex items-center justify-center text-white font-bold text-xl md:text-2xl 
                    shadow-lg hover:shadow-2xl cursor-pointer ring-4 ring-white`}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Curved connector to next step */}
                  {index < steps.length - 1 && (
                    <svg
                      className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 pointer-events-none"
                      width="120"
                      height="100"
                      viewBox="0 0 120 100"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d={
                          step.side === "left"
                            ? "M 60 0 Q 100 30, 60 100"
                            : "M 60 0 Q 20 30, 60 100"
                        }
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="3"
                        strokeDasharray="8 6"
                        opacity="0.4"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#18B9C3" />
                          <stop offset="100%" stopColor="#FF7A1A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-[calc(50%-60px)]" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: steps.length * 0.15 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-lg md:text-xl text-[#0E1324]/70 mb-6">
            Ready to experience the CorpTalents difference?
          </p>
          <motion.a
            href="/hire-talent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#18B9C3] to-[#FF7A1A] 
            text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl 
            transition-shadow"
          >
            Start Your Hiring Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
