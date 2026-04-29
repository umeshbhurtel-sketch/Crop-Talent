import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Heart, Users, Eye, DollarSign, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Deep HR Expertise",
    description: "Extensive recruitment and management experience minimizes risks in remote hiring, from sourcing Nepal's top talent to global retention.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Heart,
    title: "Commitment to Talent Growth",
    description: "Continuous training and development, fostering high morale and career advancement for sustained performance.",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: Users,
    title: "Global Reach with Personalized Support",
    description: "Access Nepal's diverse, cost-effective talent pools while enjoying single-point coordination through dedicated managers.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Eye,
    title: "Proven Track Record",
    description: "Successfully staffed teams for Mangtas, Argus, and projects in health tech and ed tech sectors.",
    color: "from-violet-500 to-violet-600"
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Your Trusted HR Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're your trusted HR partner in sourcing and sustaining high-performing remote IT teams from Nepal.
            Discover how our talent-focused solutions can elevate your business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-8 bg-card hover:shadow-xl transition-all duration-300 group border-border/50 hover:border-primary/30">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Cost-Effective Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="max-w-4xl mx-auto p-6 lg:p-8 bg-gradient-to-r from-primary to-primary/90 border-0 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 text-primary-foreground">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cost-Effective and Compliant</h3>
                  <p className="text-primary-foreground/90">Advanced payroll, compliance, and proactive management ensure value without the HR overhead.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary-foreground/80" />
                <CheckCircle className="w-5 h-5 text-primary-foreground/80" />
                <CheckCircle className="w-5 h-5 text-primary-foreground/80" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
