import { motion } from "framer-motion";
import { Users, CheckCircle2, Brain, Rocket, TrendingUp } from "lucide-react";

const hiringSteps = [
  {
    title: "Sourcing",
    description:
      "Access to 100,000+ pre-vetted IT professionals across Nepal, India, Argentina, Nicaragua, and Ukraine.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-[hsl(201_97%_37%)] to-[hsl(201_98%_70%)]",
  },
  {
    title: "Vetting",
    description: "Technical assessments, background checks, and culture-fit evaluations for every candidate.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-[hsl(201_80%_45%)] to-[hsl(201_98%_65%)]",
  },
  {
    title: "Matching",
    description: "AI-powered algorithms combined with human expertise to find your perfect fit.",
    icon: Brain,
    image: "https://plus.unsplash.com/premium_photo-1683121495558-e7e8cac2268e?q=80&w=1740&auto=format&fit=crop",
    gradient: "from-[hsl(201_97%_37%)] to-[hsl(201_70%_50%)]",
  },
  {
    title: "Onboarding",
    description: "Seamless integration from day one with comprehensive onboarding support.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-[hsl(201_98%_70%)] to-[hsl(201_97%_37%)]",
  },
  {
    title: "Performance Management",
    description: "Continuous monitoring, feedback loops, and optimization for long-term success.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-[hsl(201_85%_50%)] to-[hsl(201_98%_70%)]",
  },
];

const HiringDifferenceShowcase = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[hsl(210_40%_98%)] to-[hsl(201_30%_96%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            <span className="h-[2px] w-6 sm:w-8 rounded" style={{ background: "hsl(201 97% 37%)" }} />
            <span
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold"
              style={{
                background: "hsl(201 97% 37% / 0.1)",
                color: "hsl(201 97% 37%)",
              }}
            >
              Our Process
            </span>
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3"
            style={{ color: "hsl(201 97% 37%)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Makes CorpTalents Hiring Different
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base lg:text-lg max-w-2xl"
            style={{ color: "hsl(201 30% 40%)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our proven methodology combines cutting-edge technology with human expertise.
          </motion.p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: "linear-gradient(180deg, hsl(201 97% 37%) 0%, hsl(201 98% 70%) 100%)" }}
          />

          {/* Steps */}
          <div className="space-y-8 sm:space-y-12">
            {hiringSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step number badge - positioned on timeline for desktop */}
                  <motion.div
                    className="absolute left-0 sm:left-2 top-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl z-10"
                    style={{
                      background: "linear-gradient(135deg, hsl(201 97% 37%) 0%, hsl(201 98% 70%) 100%)",
                      boxShadow: "0 4px 20px hsl(201 97% 37% / 0.4)",
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className={`ml-16 sm:ml-20 md:ml-24 rounded-2xl md:rounded-3xl border-2 overflow-hidden bg-white transition-all duration-300 flex flex-col min-h-[320px] md:min-h-[400px] lg:min-h-[450px] ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{
                      borderColor: "hsl(201 30% 90%)",
                    }}
                    whileHover={{
                      borderColor: "hsl(201 97% 37%)",
                      boxShadow: "0 25px 80px rgba(3,118,187,0.2), 0 0 0 1px rgba(3,118,187,0.1)",
                    }}
                  >
                    {/* Image */}
                    <div className="md:w-1/2 h-56 sm:h-64 md:h-auto relative overflow-hidden">
                      <motion.img
                        src={step.image}
                        alt={`${step.title} — hiring process illustration`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(135deg, hsl(201 97% 37% / 0.2) 0%, transparent 60%)",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <motion.div
                          className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${step.gradient}`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <h3
                          className="text-xl sm:text-2xl lg:text-3xl font-bold"
                          style={{ color: "hsl(201 50% 15%)" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="text-sm sm:text-base lg:text-lg leading-relaxed"
                        style={{ color: "hsl(201 20% 45%)" }}
                      >
                        {step.description}
                      </p>

                      {/* Decorative element */}
                      <div className="mt-4 sm:mt-6 flex items-center gap-2">
                        <div
                          className="h-1 w-8 sm:w-12 rounded-full"
                          style={{
                            background: "linear-gradient(90deg, hsl(201 97% 37%) 0%, hsl(201 98% 70%) 100%)",
                          }}
                        />
                        <span className="text-xs sm:text-sm font-medium" style={{ color: "hsl(201 97% 37%)" }}>
                          Step {index + 1} of {hiringSteps.length}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringDifferenceShowcase;
