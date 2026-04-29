import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, UserCheck, Target, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Sourcing",
    description: "Access to 100,000+ pre-vetted IT professionals across Nepal, India, Argentina, Nicaragua, and Ukraine.",
  },
  {
    icon: UserCheck,
    title: "Vetting",
    description: "Technical assessments, background checks, and culture fit evaluations for every candidate.",
  },
  {
    icon: Target,
    title: "Matching",
    description: "AI-powered algorithms combined with human expertise to find your perfect fit.",
  },
  {
    icon: Rocket,
    title: "Onboarding",
    description: "Seamless integration from day one with comprehensive onboarding support.",
  },
  {
    icon: BarChart,
    title: "Performance Management",
    description: "Continuous monitoring, feedback loops, and optimization for long-term success.",
  },
];

export const HiringJourney = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="hiring-journey" 
      className="relative overflow-hidden py-20 px-4 md:px-8"
      style={{ 
        background: "linear-gradient(180deg, hsl(210 40% 98%) 0%, hsl(0 0% 100%) 100%)" 
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes CorpTalents Hiring Different
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Our proven methodology combines cutting-edge technology with human expertise to deliver exceptional hiring results.
          </p>
        </motion.div>

        {/* Vertical Stacked Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (index * 0.1),
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};