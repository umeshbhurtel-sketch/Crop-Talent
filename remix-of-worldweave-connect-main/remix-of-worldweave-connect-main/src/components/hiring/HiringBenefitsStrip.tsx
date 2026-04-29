import { motion } from "framer-motion";
import { Shield, Clock, HeartHandshake, Award } from "lucide-react";

const benefits = [
  { icon: Shield, label: "100% Compliant", description: "Legal in every country" },
  { icon: Clock, label: "Fast Deployment", description: "First match in 48hrs" },
  { icon: HeartHandshake, label: "Dedicated HR Support", description: "Account managers included" },
  { icon: Award, label: "Quality Guaranteed", description: "Pre-vetted talent only" },
];

export const HiringBenefitsStrip = () => {
  return (
    <section className="py-10 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{benefit.label}</div>
                <div className="text-xs text-muted-foreground">{benefit.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
