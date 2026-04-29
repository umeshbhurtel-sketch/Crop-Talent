import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Shield, TrendingUp } from "lucide-react";

export default function CorpTalentsTrustIndicators() {
    const indicators = [
        {
            icon: Award,
            label: "ISO Certified",
            description: "Industry-leading compliance standards",
        },
        {
            icon: Shield,
            label: "Data Secure",
            description: "Enterprise-grade security & encryption",
        },
        {
            icon: TrendingUp,
            label: "98% Success",
            description: "98% hiring success rate",
        },
        {
            icon: CheckCircle2,
            label: "24/7 Support",
            description: "24/7 dedicated customer support",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section
            className="py-16"
            style={{
                background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(20 100% 97%) 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-3xl font-bold mb-4"
                        style={{ color: "hsl(225 49% 13%)" }}
                    >
                        Trusted by Global Companies
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: "hsl(210 22% 33%)" }}
                    >
                        CorpTalents is backed by industry leaders and certified across compliance standards
                    </p>
                </motion.div>

                {/* Trust Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {indicators.map((indicator, index) => {
                        const Icon = indicator.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                style={{
                                    backgroundColor: "hsl(0 0% 100%)",
                                    border: "1px solid hsl(220 13% 91%)",
                                }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                        style={{
                                            backgroundColor: "hsl(20 100% 97%)",
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        />
                                    </div>
                                    <h3
                                        className="font-bold mb-1"
                                        style={{ color: "hsl(225 49% 13%)" }}
                                    >
                                        {indicator.label}
                                    </h3>
                                    <p
                                        className="text-sm"
                                        style={{ color: "hsl(210 22% 33%)" }}
                                    >
                                        {indicator.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Logo Showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-12"
                    style={{ borderTopColor: "hsl(220 13% 91%)", borderTopWidth: "1px" }}
                >
                    <p
                        className="text-center text-sm font-semibold mb-8"
                        style={{ color: "hsl(210 22% 33%)" }}
                    >
                        TRUSTED BY LEADING COMPANIES
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                        {[
                            "Acme Corp",
                            "TechStart",
                            "Global Inc",
                            "Future Labs",
                            "Prime Solutions",
                        ].map((company, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="h-12 rounded-lg flex items-center justify-center text-sm font-semibold transition-all"
                                style={{
                                    backgroundColor: "hsl(0 0% 96%)",
                                    color: "hsl(210 22% 33%)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "hsl(220 13% 91%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "hsl(0 0% 96%)";
                                }}
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
