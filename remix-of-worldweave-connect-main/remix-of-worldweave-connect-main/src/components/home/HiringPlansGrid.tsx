import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Globe, Users, ArrowRight, LucideIcon } from "lucide-react";
import eorGlobeIcon from "@/assets/icons/eor-globe.png";

type PlanItem = {
  icon?: LucideIcon;
  customIcon?: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  id: string;
};

const plans: PlanItem[] = [
  {
    customIcon: eorGlobeIcon,
    badge: "Global Compliance",
    title: "EOR",
    description: "Hire globally with full legal & payroll compliance.",
    href: "/services/eor",
    id: "eor",
  },
  {
    icon: Zap,
    badge: "Instant Access",
    title: "TaaS",
    description: "Flexible, on-demand experts with rapid onboarding.",
    href: "/services/taas",
    id: "taas",
  },
  {
    icon: Globe,
    badge: "Multi-Country",
    title: "Global Talent Sourcing",
    description: "Multi-country, targeted candidate search.",
    href: "/services/global-sourcing",
    id: "global-sourcing",
  },
  {
    icon: Users,
    badge: "Team Growth",
    title: "Talent Management",
    description: "Engagement, performance, and continuous training.",
    href: "/services/talent-management",
    id: "talent-mgmt",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { 
    opacity: 1, 
    scale: 1,
  },
};

export const HiringPlansGrid = () => {
  return (
    <section 
      id="hiring-plans" 
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(210 40% 98%) 0%, hsl(201 50% 97%) 100%)" }}
    >
      {/* Animated background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Hiring Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Hiring Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible solutions tailored to your unique needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              id={plan.id}
              variants={item}
              whileHover={{ 
                y: -12,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className="group relative"
            >
              <Link to={plan.href}>
                <motion.div
                  className="relative rounded-[24px] p-8 lg:p-10 overflow-hidden bg-card/80 backdrop-blur-sm shadow-[0_8px_30px_rgba(29,75,167,0.12)] hover:shadow-[0_20px_60px_rgba(29,75,167,0.25)] border-2 border-primary/10 hover:border-primary/30 transition-all duration-500"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, hsla(197, 100%, 36%, 0.08) 0%, hsla(195, 100%, 46%, 0.05) 50%, hsla(197, 100%, 36%, 0.08) 100%)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                      {plan.badge}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      {plan.customIcon ? (
                        <img src={plan.customIcon} alt={plan.title} className="w-10 h-10 object-contain" />
                      ) : plan.icon ? (
                        <plan.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      ) : null}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">
                      {plan.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Arrow button */}
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md"
                      whileHover={{
                        x: 8,
                        rotate: 45,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};