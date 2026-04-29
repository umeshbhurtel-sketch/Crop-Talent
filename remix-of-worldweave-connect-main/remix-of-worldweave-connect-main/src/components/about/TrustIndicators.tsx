import { motion } from "framer-motion";
import { Globe2, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "13+", label: "Years Experience" },
  { icon: Globe2, value: "8+", label: "Countries Served" },
  { icon: Users, value: "100K+", label: "IT Professionals" },
  { icon: Award, value: "500+", label: "Successful Placements" },
];

export const TrustIndicators = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
        >
          <stat.icon className="w-6 h-6 text-primary mb-2" />
          <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};
