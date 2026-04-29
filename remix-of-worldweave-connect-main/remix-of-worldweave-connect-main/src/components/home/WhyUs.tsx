import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Handshake, DollarSign, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Global Talent Pool",
    description: "Access a curated network of 100,000+ IT pros from Nepal, India, Argentina, Nicaragua, and Ukraine, rigorously screened for skill, accountability, and culture fit.",
  },
  {
    icon: TrendingUp,
    title: "Streamlined Processes",
    description: "End-to-end recruitment, assessments, onboarding, HR—managed by CorpTalents for rapid ramp-up.",
  },
  {
    icon: Handshake,
    title: "Accountable Support",
    description: "Dedicated account manager, monthly performance feedback, continuous skills training.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "World-class expertise at a fraction of in-house cost—no admin or compliance burden.",
  },
  {
    icon: Award,
    title: "Quality & Trust",
    description: "60+ global clients in InsurTech/HealthTech/EdTech/E-Commerce/FinTech. 96% customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Employee Wellbeing",
    description: "Engagement, career development, supportive remote-first culture → higher retention and performance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    }
  },
};

export const WhyUs = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(201 97% 37% / 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(201 98% 70% / 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deliver exceptional talent solutions through a proven combination of expertise, technology, and dedicated support.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 h-full group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500">
                {/* Hover gradient overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(201 97% 37% / 0.03) 0%, hsl(201 98% 70% / 0.05) 100%)',
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-500"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};