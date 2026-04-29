import { motion } from "framer-motion";
import { Briefcase, Building2, Globe } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Startups",
    description: "Need to scale fast with limited resources and no HR overhead.",
  },
  {
    icon: Building2,
    title: "Scale-ups",
    description: "Building distributed teams while maintaining culture and quality.",
  },
  {
    icon: Globe,
    title: "Enterprises",
    description: "Expanding globally with compliance-first hiring strategies.",
  },
];

export const WhoThisIsFor = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Who This Strategy Is For
          </h2>
          <p className="text-muted-foreground">
            Our methodology adapts to your growth stage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border/50 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
