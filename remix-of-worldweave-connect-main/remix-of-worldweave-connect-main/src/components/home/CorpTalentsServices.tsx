import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Briefcase, Globe, Settings, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Users,
        title: "Talent as a Service (TaaS)",
        description: "Scale your team instantly with pre-vetted, experienced professionals. Get the right talent for your specific needs without long-term commitments.",
        features: ["Pre-vetted experts", "Flexible scaling", "Cost-effective"],
        href: "/services/taas",
    },
    {
        icon: Briefcase,
        title: "Employer of Record (EOR)",
        description: "Hire and manage employees in any country with full compliance, benefits, and payroll support. We handle all HR responsibilities.",
        features: ["Global compliance", "Benefits & payroll", "HR management"],
        href: "/services/eor",
    },
    {
        icon: Globe,
        title: "Global Sourcing",
        description: "Access to 50,000+ vetted professionals worldwide. Find the perfect match for your unique requirements across all industries.",
        features: ["50K+ talent pool", "Multi-country access", "Quality assured"],
        href: "/services/global-sourcing",
    },
    {
        icon: Settings,
        title: "Talent Management",
        description: "End-to-end talent management from recruitment to retention. Our platform handles onboarding, performance tracking, and scaling.",
        features: ["Onboarding support", "Performance tracking", "Team scaling"],
        href: "/services/talent-management",
    },
];

export default function CorpTalentsServices() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="py-24" style={{ backgroundColor: "hsl(0 0% 100%)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            backgroundColor: "hsl(20 100% 97%)",
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "hsl(20 96% 54%)" }}
                        />
                        <span
                            className="text-sm font-semibold"
                            style={{ color: "hsl(20 96% 54%)" }}
                        >
                            OUR SERVICES
                        </span>
                    </div>

                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        style={{ color: "hsl(225 49% 13%)" }}
                    >
                        Comprehensive Talent Solutions
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto"
                        style={{ color: "hsl(210 22% 33%)" }}
                    >
                        From recruitment to management, we offer end-to-end solutions tailored to your business needs
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -10 }}
                                className="h-full rounded-2xl p-8 border transition-all duration-300 overflow-hidden relative"
                                style={{
                                    backgroundColor: "hsl(0 0% 100%)",
                                    borderColor: "hsl(220 13% 91%)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.borderColor = "hsl(20 96% 54%)";
                                    e.target.style.boxShadow = "0 20px 25px rgba(245, 130, 32, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.borderColor = "hsl(220 13% 91%)";
                                    e.target.style.boxShadow = "0 4px 6px rgba(15, 23, 42, 0.08)";
                                }}
                            >
                                {/* Background Gradient Accent */}
                                <div
                                    className="absolute -top-20 -right-20 w-40 h-40 opacity-10 rounded-full blur-3xl"
                                    style={{
                                        backgroundColor: "hsl(20 96% 54%)",
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors"
                                        style={{ color: "hsl(225 49% 13%)" }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm mb-6 leading-relaxed"
                                        style={{ color: "hsl(210 22% 33%)" }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "hsl(210 22% 33%)" }}>
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{
                                                        backgroundColor: "hsl(20 96% 54%)",
                                                    }}
                                                />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <motion.div whileHover={{ x: 5 }}>
                                        <Link
                                            to={service.href}
                                            className="flex items-center gap-2 font-semibold text-sm transition-colors"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
