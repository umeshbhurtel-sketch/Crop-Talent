import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ServicePromoTiles = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 -mt-12 relative z-10">
      <div className="grid md:grid-cols-2 gap-6">
        {/* EOR Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Card className="group p-8 bg-gradient-to-br from-background to-muted/30 border-2 hover:border-primary transition-all duration-500 hover-lift overflow-hidden relative">
            {/* Hover gradient overlay */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, hsl(201 97% 37% / 0.05) 0%, hsl(201 98% 70% / 0.08) 100%)',
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Shield className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Employer of Record (EOR)</h3>
              <p className="text-muted-foreground mb-6">
                Hire globally without setting up local entities—we handle legal, payroll, and compliance for you.
              </p>
              
              <Button variant="link" asChild className="p-0 h-auto">
                <Link to="/hire-talent" className="group/link">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* TaaS Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Card className="group p-8 bg-gradient-to-br from-background to-muted/30 border-2 hover:border-secondary transition-all duration-500 hover-lift overflow-hidden relative">
            {/* Hover gradient overlay */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, hsl(201 98% 70% / 0.05) 0%, hsl(201 97% 37% / 0.08) 100%)',
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-all duration-500"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                >
                  <Zap className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </motion.div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Talent-as-a-Service (TaaS)</h3>
              <p className="text-muted-foreground mb-6">
                Flexible, on-demand access to top professionals. Scale your team instantly without long-term commitments.
              </p>
              
              <Button variant="link" asChild className="p-0 h-auto">
                <Link to="/hire-talent" className="group/link">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};