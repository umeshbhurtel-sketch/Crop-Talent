import { motion } from "framer-motion";

const tags = [
  "Databricks Engineers",
  "Snowflake Developers & Data Engineers",
  "Generative AI & AI/ML Talent",
  "Workday Extend Engineers",
  "Salesforce Developers & Architects",
  "Sitecore Developers",
  "Kentico / Xperience Developers",
  "MuleSoft Developers",
  "Zapier Automation Engineers",
  "Workato Integration Consultants",
];

export const MarqueeFocus = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section id="hiring-focus" className="section-padding overflow-hidden">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Focus</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We know that the hiring process and job search can be challenging. That is why we're here to assist you every step of the way.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* First line - moves left to right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={prefersReducedMotion ? {} : {
                x: ["-50%", "0%"],
              }}
              transition={prefersReducedMotion ? {} : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              whileHover={prefersReducedMotion ? {} : { animationPlayState: "paused" }}
            >
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 px-8 py-4 rounded-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-primary hover:border-primary hover:bg-primary/5 hover:shadow-lg transition-all duration-300 cursor-default whitespace-nowrap font-medium"
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second line - moves right to left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={prefersReducedMotion ? {} : {
                x: ["0%", "-50%"],
              }}
              transition={prefersReducedMotion ? {} : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              whileHover={prefersReducedMotion ? {} : { animationPlayState: "paused" }}
            >
              {[...tags.reverse(), ...tags, ...tags].map((tag, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 px-8 py-4 rounded-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-primary hover:border-primary hover:bg-primary/5 hover:shadow-lg transition-all duration-300 cursor-default whitespace-nowrap font-medium"
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};