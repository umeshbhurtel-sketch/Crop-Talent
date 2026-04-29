import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CorpTalents transformed our hiring process! We filled 5 critical roles in under 3 weeks with top-quality developers. Their screening process is second to none.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Tech Corp",
  },
  {
    quote: "Fast deployment, great cultural fit. The candidates we received weren't just technically skilled—they integrated seamlessly with our existing team culture.",
    author: "Michael Chen",
    role: "VP of Engineering",
    company: "HealthTech Co",
  },
  {
    quote: "Reliable, compliant, seamless. CorpTalents handles all the legal complexities of global hiring so we can focus on building our product. Game changer for us!",
    author: "Emily Rodriguez",
    role: "Head of HR",
    company: "FinTech Group",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

export const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(201 97% 37% / 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -30, 0],
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
            Testimonials
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by leading companies worldwide for exceptional talent acquisition.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 h-full group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500">
                {/* Hover gradient overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(201 97% 37% / 0.03) 0%, hsl(201 98% 70% / 0.05) 100%)',
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-10 h-10 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-500" />
                  </motion.div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};