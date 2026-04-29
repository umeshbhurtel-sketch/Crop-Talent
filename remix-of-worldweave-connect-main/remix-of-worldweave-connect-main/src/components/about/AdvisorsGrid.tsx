import { motion } from "framer-motion";

import anunayaPandey from "@/assets/advisors/anunaya-pandey.jpg";
import batsalDevkota from "@/assets/advisors/batsal-devkota.jpg";
import rajibSharma from "@/assets/advisors/rajib-sharma.jpg";
import ruchiPandey from "@/assets/advisors/ruchi-pandey.jpg";

const advisors = [
  {
    name: "Rajib Sharma",
    role: "Board Advisor — HR Governance & People Strategy",
    image: rajibSharma,
    bio: "Rajib Sharma serves on the Board of Advisors, bringing over 15 years of leadership in human resource management, organizational development, and people strategy. He advises on building strong HR governance frameworks, leadership capability development, workforce planning, and change management. His strategic guidance supports the company in delivering structured, compliant, and scalable HR solutions that align people practices with long-term business performance.",
  },
  {
    name: "Anunaya Pandey",
    role: "Board Advisor — Technical Talent & Organizational Design",
    image: anunayaPandey,
    bio: "Anunaya Pandey is a member of the Board of Advisors, contributing deep insight from more than a decade of experience working with technology-driven and engineering-focused teams. He advises on talent evaluation, team structuring, and performance optimization in complex and fast-growing organizations. His perspective helps ensure HR strategies remain aligned with evolving technical roles, modern workforce models, and future-ready organizational design.",
  },
  {
    name: "Dr. Batsal Devkota",
    role: "Board Advisor — Research Leadership & High-Skill Talent",
    image: batsalDevkota,
    bio: "Dr. Batsal Devkota serves on the Board of Advisors, offering over 12 years of experience in research leadership, medical genetics, and data-driven decision-making. He provides strategic input on managing high-skill talent, designing workforce models for research-intensive industries, and mentoring specialized professionals. His guidance strengthens the company's capability to support organizations operating in healthcare, science, and innovation-led sectors.",
  },
  {
    name: "Ruchi Pandey",
    role: "Board Advisor — Employer Branding & Strategic Communications",
    image: ruchiPandey,
    bio: "Ruchi Pandey is a Board Advisor specializing in employer branding, strategic communications, and organizational reputation. With more than 10 years of experience, she advises on strengthening employer value propositions, leadership visibility, and people-focused brand strategy. Her expertise supports HR initiatives that enhance talent attraction, employee engagement, and trust-building across internal and external stakeholders.",
  },
];

export const AdvisorsGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our Board of Advisors
          </h2>
        </motion.div>

        {/* Advisors - Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
          {advisors.map((advisor, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image */}
                <div className={`${isEven ? "lg:order-1" : "lg:order-2"} flex items-start`}>
                  <div className="relative group w-full max-w-[280px] mx-auto lg:mx-0">
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Decorative accent */}
                    <div 
                      className={`absolute -z-10 w-full h-full rounded-2xl bg-primary/10 top-3 ${
                        isEven ? "-right-3" : "-left-3"
                      }`} 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-6">
                    {advisor.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                    {advisor.bio}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
