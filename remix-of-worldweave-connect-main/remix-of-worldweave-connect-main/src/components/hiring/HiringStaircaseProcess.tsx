import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle2, Zap, Rocket, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Sourcing",
    description: "Access to 100,000+ pre-vetted IT professionals globally.",
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: "Vetting",
    description: "Technical assessments and background verification.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Matching",
    description: "AI-powered matching with human expertise.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Onboarding",
    description: "Seamless integration with compliance support.",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Performance",
    description: "Continuous monitoring for long-term success.",
  },
];

export const HiringStaircaseProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Makes CorpTalents Hiring Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven 5-step methodology designed for speed, quality, and long-term success
          </p>
        </motion.div>

        {/* Desktop Staircase - Card Style */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Staircase Cards */}
            <div className="flex items-end justify-center gap-4 min-h-[480px] pb-8">
              {steps.map((step, index) => {
                const isActive = activeStep === step.id;
                const isLast = index === steps.length - 1;
                // Staircase positioning: each card rises higher
                const bottomOffset = index * 60;
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                    style={{ marginBottom: bottomOffset }}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <motion.div
                      animate={{
                        y: isActive ? -8 : 0,
                        scale: isActive ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={cn(
                        "w-[200px] bg-card rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden",
                        isActive
                          ? "shadow-xl shadow-primary/15 border-2 border-primary/30"
                          : "shadow-lg shadow-foreground/5 border border-border"
                      )}
                    >
                      {/* Step Badge */}
                      <div className="mb-5">
                        <span
                          className={cn(
                            "inline-block px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-300",
                            isActive || isLast
                              ? "bg-primary text-primary-foreground"
                              : "bg-primary/10 text-primary"
                          )}
                        >
                          STEP {step.id}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                            : "bg-primary/10 text-primary"
                        )}
                      >
                        <step.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3
                        className={cn(
                          "font-bold text-lg mb-2 transition-colors duration-300",
                          isActive ? "text-primary" : "text-foreground"
                        )}
                      >
                        {step.title}
                      </h3>

                      {/* Description - Always visible */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Accent bar for last step */}
                      {isLast && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeStep === step.id || (activeStep === null && index === steps.length - 1)
                      ? "bg-primary scale-125"
                      : "bg-primary/30"
                  )}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet - Stacked Cards */}
        <div className="lg:hidden">
          <div className="space-y-4 max-w-sm mx-auto">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  style={{ marginLeft: `${index * 8}px` }}
                >
                  <div
                    className={cn(
                      "bg-card rounded-xl p-5 border shadow-md relative overflow-hidden",
                      isLast ? "border-primary/30" : "border-border"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                          isLast
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        )}
                      >
                        <step.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>

                      <div className="flex-1">
                        {/* Step Badge */}
                        <span
                          className={cn(
                            "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full mb-2",
                            isLast
                              ? "bg-primary text-primary-foreground"
                              : "bg-primary/10 text-primary"
                          )}
                        >
                          STEP {step.id}
                        </span>

                        {/* Title */}
                        <h3 className="font-bold text-foreground mb-1">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Accent bar for last step */}
                    {isLast && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === steps.length - 1 ? "bg-primary" : "bg-primary/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
