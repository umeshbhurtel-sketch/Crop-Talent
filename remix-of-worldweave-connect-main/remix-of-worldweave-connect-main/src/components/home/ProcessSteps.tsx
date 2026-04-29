import { Search, UserCheck, ClipboardCheck, Presentation, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand Client Needs",
    description: "Deep dive into your requirements, culture, and project goals.",
  },
  {
    icon: UserCheck,
    title: "Source & Vet Talent",
    description: "Access our global network of pre-screened IT professionals.",
  },
  {
    icon: ClipboardCheck,
    title: "Rigorous Screening",
    description: "Technical assessments, culture fit, and accountability checks.",
  },
  {
    icon: Presentation,
    title: "Present Candidates",
    description: "Shortlisted top candidates with detailed profiles and recommendations.",
  },
  {
    icon: Rocket,
    title: "Seamless Onboarding",
    description: "Comprehensive onboarding process for quick integration.",
  },
  {
    icon: BarChart,
    title: "Manage & Optimize Performance",
    description: "Ongoing support, feedback, and continuous improvement.",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Universal Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven 6-step methodology that ensures the perfect match every time.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Icon Circle */}
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-background border-4 border-primary flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-center mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg flex-shrink-0">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 pb-6">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-2">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2 text-lg">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
