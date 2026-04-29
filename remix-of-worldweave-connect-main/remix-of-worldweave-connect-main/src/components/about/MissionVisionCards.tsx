import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

export const MissionVisionCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8 lg:p-10 bg-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver excellence by connecting businesses with top-tier IT professionals from Nepal. Our
                HR-focused, client-centric approach ensures we exceed expectations through quality hires, robust
                training, and sustained employee engagement.
              </p>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full p-8 lg:p-10 bg-card border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide reliable IT solutions through exceptional people from Nepal, guaranteeing successful
                integration of remote IT professionals and ultimate client satisfaction via superior HR practices.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
