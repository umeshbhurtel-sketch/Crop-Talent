import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  FileSearch, 
  Network, 
  ClipboardCheck, 
  UserCheck, 
  Handshake,
  Shield,
  TrendingUp,
  HeartHandshake
} from "lucide-react";

const processSteps = [
  {
    icon: FileSearch,
    title: "Refining Job Requirements",
    description: "We collaborate closely with clients to define precise needs, matching technical skills with behavioral and cultural fits.",
    highlight: "Compliance"
  },
  {
    icon: Network,
    title: "Sourcing Top Talent",
    description: "Drawing from a network spanning 5 countries and over 100,000 IT professionals, with a strong emphasis on Nepal's skilled workforce.",
    highlight: "Global Network"
  },
  {
    icon: ClipboardCheck,
    title: "Rigorous Screening",
    description: "Multi-stage assessments including technical tests, behavioral interviews, and cultural evaluations.",
    highlight: "Screening Rigor"
  },
  {
    icon: UserCheck,
    title: "Candidate Presentation",
    description: "Detailed reports, skill summaries, and interview recordings for the top 2 candidates.",
    highlight: "Cultural Fit"
  },
  {
    icon: Handshake,
    title: "Onboarding & Support",
    description: "Personalized plans ensure smooth transitions, with ongoing HR services like performance tracking and continuous training.",
    highlight: "Ongoing HR Support"
  },
];

const postHireServices = [
  { icon: Shield, label: "Compliant Payroll" },
  { icon: HeartHandshake, label: "Conflict Resolution" },
  { icon: TrendingUp, label: "Performance Tracking" },
  { icon: UserCheck, label: "Employee Engagement" },
];

export const HRProcessFlow = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            HR-Focused Hiring & Talent Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive recruitment and HR process designed to source and manage exceptional IT talent from Nepal for global clients.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full p-6 bg-card border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Highlight Badge */}
                    <span className="inline-block px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded mb-3">
                      {step.highlight}
                    </span>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Post-Hire Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-5xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                  Key Differentiator
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Post-Hire Talent Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Once hired, we handle full talent management: seamless payroll compliant with local regulations, proactive
                  conflict resolution, monthly feedback sessions with dedicated account managers, employee engagement
                  initiatives, and customized development programs to keep your Nepalese-sourced team motivated, updated,
                  and productive.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 lg:w-80">
                {postHireServices.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center text-center p-4 bg-background/80 rounded-xl border border-border/50"
                  >
                    <service.icon className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm font-medium text-foreground">{service.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
