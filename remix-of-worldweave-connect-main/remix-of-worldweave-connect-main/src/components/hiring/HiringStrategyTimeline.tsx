import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, CheckCircle2, Zap, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Sourcing",
    description: "Access to 100,000+ pre-vetted IT professionals across Nepal, India, Argentina, Nicaragua, and Ukraine.",
    whyMatters: "Scale & Reach: Tap into global talent pools instantly",
  },
  {
    number: 2,
    icon: CheckCircle2,
    title: "Vetting",
    description: "Technical assessments, background checks, and culture-fit evaluations for every candidate.",
    whyMatters: "Risk Reduction: Only top 5% of applicants pass our screening",
  },
  {
    number: 3,
    icon: Zap,
    title: "Matching",
    description: "AI-powered algorithms combined with human expertise to find your perfect fit.",
    whyMatters: "Fit & Retention: 95% placement success rate",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Onboarding",
    description: "Seamless integration from day one with comprehensive onboarding support and compliance.",
    whyMatters: "Speed & Compliance: Productive in week one, fully compliant",
  },
  {
    number: 5,
    icon: TrendingUp,
    title: "Performance Management",
    description: "Continuous monitoring, feedback loops, and optimization for long-term success.",
    whyMatters: "Long-term Success: Ongoing growth and optimization",
  },
];

export const HiringStrategyTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Makes CorpTalents Hiring Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven 5-step methodology designed for speed, quality, and long-term success
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-lg z-10"
                  >
                    {step.number}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Why it matters */}
                    <div className="inline-flex items-center px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-lg">
                      <span className="text-sm font-medium text-primary">
                        {step.whyMatters}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
