import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(201 97% 37%) 0%, hsl(201 70% 25%) 50%, hsl(201 97% 37%) 100%)'
    }}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 20% 50%, hsl(201 98% 70% / 0.3) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-full h-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 50%, hsl(201 98% 70% / 0.3) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Light sweep animation */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, hsl(0 0% 100% / 0.1) 50%, transparent 70%)',
        }}
        animate={{
          x: ['-150%', '250%'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
      />

      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Build Your Global Team?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'hsl(201 50% 85%)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join 60+ companies worldwide who trust CorpTalents for their talent needs. Let's discuss how we can help you scale.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                asChild
                className="group text-lg px-8 py-6 h-auto font-semibold"
                style={{
                  background: 'hsl(201 98% 70%)',
                  color: 'hsl(201 97% 15%)',
                  boxShadow: '0 15px 40px hsl(201 98% 70% / 0.3)',
                }}
              >
                <Link to="/hire-talent">
                  Book a Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group text-lg px-8 py-6 h-auto border-2 font-semibold transition-all duration-300"
                style={{
                  borderColor: 'hsl(201 50% 70%)',
                  color: 'white',
                  background: 'hsl(201 97% 37% / 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};