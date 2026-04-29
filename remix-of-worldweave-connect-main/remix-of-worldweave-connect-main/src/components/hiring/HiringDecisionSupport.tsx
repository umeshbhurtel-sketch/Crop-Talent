import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Users, Globe, ArrowRight, MessageCircle } from "lucide-react";

const scenarios = [
  {
    icon: User,
    scenario: "Hiring one developer quickly",
    recommendation: "TaaS",
    description: "Get a pre-vetted expert deployed in 48 hours with flexible terms.",
    link: "/services/taas",
  },
  {
    icon: Users,
    scenario: "Building a long-term remote team",
    recommendation: "EOR + Talent Management",
    description: "Compliant employment with ongoing performance optimization.",
    link: "/services/eor",
  },
  {
    icon: Globe,
    scenario: "Expanding into a new country",
    recommendation: "EOR",
    description: "Hire legally without setting up a local entity. Full compliance included.",
    link: "/services/eor",
  },
];

export const HiringDecisionSupport = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Plan is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a quick guide based on common hiring scenarios
            </p>
          </motion.div>

          {/* Scenario Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {scenarios.map((item, index) => (
              <motion.div
                key={item.scenario}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={item.link} className="block h-full group">
                  <div className="h-full bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">When you're...</p>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      "{item.scenario}"
                    </h3>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        → {item.recommendation}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our HR experts will help you choose the perfect solution for your hiring needs.
              <span className="block mt-2 text-sm text-primary font-medium">No obligation · Free consultation included</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/hire-talent">
                  Start Hiring
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Talk to an HR Expert
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
