import { motion } from "framer-motion";
import { Clock, Shield, Shuffle, Handshake } from "lucide-react";

const comparisonFactors = [
  {
    icon: Clock,
    label: "Speed",
    items: [
      { name: "TaaS", level: 5 },
      { name: "Global Sourcing", level: 4 },
      { name: "EOR", level: 3 },
      { name: "Talent Mgmt", level: 2 },
    ],
  },
  {
    icon: Shield,
    label: "Compliance",
    items: [
      { name: "EOR", level: 5 },
      { name: "Talent Mgmt", level: 4 },
      { name: "TaaS", level: 3 },
      { name: "Global Sourcing", level: 3 },
    ],
  },
  {
    icon: Shuffle,
    label: "Flexibility",
    items: [
      { name: "TaaS", level: 5 },
      { name: "Global Sourcing", level: 4 },
      { name: "Talent Mgmt", level: 4 },
      { name: "EOR", level: 3 },
    ],
  },
  {
    icon: Handshake,
    label: "Engagement",
    items: [
      { name: "EOR", level: 5 },
      { name: "Talent Mgmt", level: 5 },
      { name: "TaaS", level: 3 },
      { name: "Global Sourcing", level: 3 },
    ],
  },
];

export const PlansComparisonStrip = () => {
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
            How These Plans Differ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each plan excels in different areas. Choose based on your priority.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {comparisonFactors.map((factor, index) => (
            <motion.div
              key={factor.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border/50"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <factor.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{factor.label}</h3>
              </div>
              
              <div className="space-y-3">
                {factor.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            dot <= item.level ? "bg-primary" : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
