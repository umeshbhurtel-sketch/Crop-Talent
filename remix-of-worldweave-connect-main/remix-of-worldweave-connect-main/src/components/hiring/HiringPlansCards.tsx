import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Zap, Users, Target, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import eorGlobeIcon from "@/assets/icons/eor-globe.png";

type PlanItem = {
  icon?: typeof Globe;
  customIcon?: string;
  title: string;
  tagline: string;
  bestFor: string;
  useCase: string;
  outcomes: string[];
  href: string;
  isRecommended?: boolean;
};

const plans: PlanItem[] = [
  {
    customIcon: eorGlobeIcon,
    title: "Employer of Record (EOR)",
    tagline: "Hire globally without legal entities",
    bestFor: "Enterprises expanding internationally",
    useCase: "Global Expansion",
    outcomes: [
      "Full payroll & benefits compliance",
      "Zero legal entity setup needed",
      "Risk-free international hiring",
      "Local labor law expertise",
    ],
    href: "/services/eor",
    isRecommended: true,
  },
  {
    icon: Zap,
    title: "Talent-as-a-Service (TaaS)",
    tagline: "On-demand experts, rapid deployment",
    bestFor: "Startups & scale-ups needing speed",
    useCase: "Fast Scaling",
    outcomes: [
      "Deploy talent in 48-72 hours",
      "Flexible team scaling",
      "Pre-vetted specialists only",
      "No long-term commitments",
    ],
    href: "/services/taas",
  },
  {
    icon: Target,
    title: "Global Talent Sourcing",
    tagline: "Strategic multi-country recruitment",
    bestFor: "Companies building distributed teams",
    useCase: "Strategic Hiring",
    outcomes: [
      "Access 100k+ IT professionals",
      "Multi-country talent pools",
      "Cultural fit assessment",
      "Reduced time-to-hire",
    ],
    href: "/services/global-sourcing",
  },
  {
    icon: Users,
    title: "Talent Management",
    tagline: "End-to-end workforce optimization",
    bestFor: "Teams focused on retention & growth",
    useCase: "Team Excellence",
    outcomes: [
      "Performance tracking systems",
      "Continuous upskilling programs",
      "Employee engagement tools",
      "Retention optimization",
    ],
    href: "/services/talent-management",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const HiringPlansCards = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={item}
              className="group relative"
            >
              <Link to={plan.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`relative h-full rounded-2xl p-8 lg:p-10 bg-card border-2 transition-all duration-300 ${
                    plan.isRecommended
                      ? "border-primary/40 shadow-[0_8px_40px_rgba(29,75,167,0.15)]"
                      : "border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {/* Recommended badge */}
                  {plan.isRecommended && (
                    <div className="absolute -top-3 left-8 flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  )}

                  {/* Use case badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-5">
                    {plan.useCase}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {plan.customIcon ? (
                        <img src={plan.customIcon} alt="" className="w-8 h-8 object-contain" />
                      ) : plan.icon ? (
                        <plan.icon className="w-7 h-7 text-primary" />
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="mb-6 pb-6 border-b border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Best for:</span> {plan.bestFor}
                    </p>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-3 mb-8">
                    {plan.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    className="w-full group/btn"
                    variant={plan.isRecommended ? "default" : "outline"}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
