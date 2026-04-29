import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Award } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "100k+",
    label: "Pre-Vetted Professionals",
    description: "Global talent pool ready for deployment",
  },
  {
    icon: Clock,
    value: "48hrs",
    label: "First Candidate Match",
    description: "Faster than traditional recruiting",
  },
  {
    icon: Award,
    value: "95%",
    label: "Client Satisfaction",
    description: "Based on post-placement surveys",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Cost Savings",
    description: "Compared to in-house hiring",
  },
];

export const StrategyImpactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-muted/30 to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Results That Matter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Our Strategy Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable outcomes that drive ROI, efficiency, and long-term retention
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-foreground mb-2">
                {metric.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
