import { motion } from "framer-motion";
import { Users, CheckCircle2, Brain, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Users,
    title: "Sourcing",
    description: "Access to 100,000+ pre-vetted IT professionals across Nepal, India, Argentina, Nicaragua, and Ukraine.",
    color: "#FF6B4A",
    side: "left",
  },
  {
    number: 2,
    icon: CheckCircle2,
    title: "Vetting",
    description: "Technical assessments, background checks, and culture-fit evaluations for every candidate.",
    color: "#D4A055",
    side: "right",
  },
  {
    number: 3,
    icon: Brain,
    title: "Matching",
    description: "AI-powered algorithms combined with human expertise to find your perfect fit.",
    color: "#14B8A6",
    side: "left",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Onboarding",
    description: "Seamless integration from day one with comprehensive onboarding support.",
    color: "#6B8E7D",
    side: "right",
  },
  {
    number: 5,
    icon: TrendingUp,
    title: "Performance Management",
    description: "Continuous monitoring, feedback loops, and optimization for long-term success.",
    color: "#FF8F6B",
    side: "left",
  },
];

const SourcingProcessTimeline = () => {
  return (
    <section className="py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Journey to <span className="text-[#FF6B4A]">Success</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Follow our proven 5-stage roadmap from sourcing to long-term success
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Curved Path SVG */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none"
            style={{ minHeight: "100%" }}
          >
            <motion.path
              d="M 50% 40 Q 40% 180, 50% 240 T 50% 440 T 50% 640 T 50% 840 T 50% 1000"
              stroke="#D1D5DB"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Timeline Steps */}
          <div className="relative space-y-8 py-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className={`flex items-center gap-8 ${step.side === "right" ? "flex-row-reverse" : ""}`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${step.side === "left" ? "text-right md:pr-4" : "text-left md:pl-4"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block bg-white rounded-xl p-5 shadow-sm border border-gray-200/50"
                    >
                      <div className={`flex items-start gap-3 ${step.side === "left" ? "flex-row-reverse" : ""}`}>
                        {/* Icon */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${step.color}20` }}
                        >
                          <step.icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={2} />
                        </div>
                        
                        {/* Content */}
                        <div className={step.side === "left" ? "text-right" : "text-left"}>
                          <h3 className="text-lg font-bold mb-1" style={{ color: step.color }}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.15 + 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white z-10 shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
            className="relative left-1/2 -translate-x-1/2 w-16 h-16 mt-8 rounded-full bg-[#6B8E7D] flex items-center justify-center text-white shadow-lg"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SourcingProcessTimeline;
