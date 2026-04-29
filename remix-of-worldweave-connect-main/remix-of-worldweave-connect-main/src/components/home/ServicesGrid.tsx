import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Globe, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Employer of Record (EOR)",
    description: "Hire globally with full legal, compliance, and payroll support.",
    href: "/services/eor",
  },
  {
    icon: Zap,
    title: "Talent-as-a-Service (TaaS)",
    description: "Flexible, on-demand access to top professionals.",
    href: "/services/taas",
  },
  {
    icon: Globe,
    title: "Global Talent Sourcing",
    description: "Multi-country, targeted candidate search.",
    href: "/services/global-talent-sourcing",
  },
  {
    icon: Users,
    title: "Talent Management",
    description: "Engage, manage, and grow remote teams.",
    href: "/services/talent-management",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive talent solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <Button variant="link" asChild className="p-0 h-auto group/link">
                <Link to={service.href}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
