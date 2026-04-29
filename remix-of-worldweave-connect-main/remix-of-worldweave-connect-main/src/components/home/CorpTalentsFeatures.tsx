import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Clock, Globe, DollarSign, ShieldCheck, Users } from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "Fast Hiring",
        description: "Hire talent in days, not months. Our streamlined process gets you matched with professionals quickly.",
        benefit: "3-5 days average",
    },
    {
        icon: DollarSign,
        title: "Cost Savings",
        description: "Save up to 60% on hiring costs compared to traditional recruitment agencies.",
        benefit: "60% savings",
    },
    {
        icon: Globe,
        title: "Global Access",
        description: "Access to 50,000+ professionals across 150+ countries and all major industries.",
        benefit: "50K+ professionals",
    },
    {
        icon: ShieldCheck,
        title: "Full Compliance",
        description: "We handle all compliance, legal, payroll, and HR responsibilities for you.",
        benefit: "100% compliant",
    },
    {
        icon: Zap,
        title: "Instant Scaling",
        description: "Scale your team up or down instantly based on your business needs.",
        benefit: "Flexible scaling",
    },
    {
        icon: Users,
        title: "Dedicated Support",
        description: "24/7 dedicated support to manage your team and handle any issues.",
        benefit: "Always available",
    },
];

export default function CorpTalentsFeatures() {
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
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(20 100% 97%) 50%, hsl(0 0% 100%) 100%)",
            }}
        >
            {/* Decorative Background */}
            <div
                className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: "hsl(20 96% 54%)" }}
            />
            <div
                className="absolute -bottom-20 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: "hsl(20 96% 54%)" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                            WHY CHOOSE US
                        </span>
                    </div>

                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        style={{ color: "hsl(225 49% 13%)" }}
                    >
                        Built for Modern Teams
                    </h2>
                    <p
                        className="text-xl max-w-2xl mx-auto"
                        style={{ color: "hsl(210 22% 33%)" }}
                    >
                        Experience the fastest, most reliable talent solution in the market
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -8 }}
                                className="rounded-2xl p-8 border transition-all duration-300 h-full relative overflow-hidden"
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
                                    e.target.style.boxShadow = "none";
                                }}
                            >
                                {/* Background Gradient */}
                                <div
                                    className="absolute -top-12 -right-12 w-32 h-32 opacity-5 rounded-full"
                                    style={{
                                        backgroundColor: "hsl(20 96% 54%)",
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all"
                                        style={{
                                            backgroundColor: "hsl(20 100% 97%)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "hsl(20 96% 54%)";
                                            e.target.querySelector('svg').style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "hsl(20 100% 97%)";
                                            e.target.querySelector('svg').style.color = "hsl(20 96% 54%)";
                                        }}
                                    >
                                        <Icon
                                            className="w-7 h-7"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        />
                                    </motion.div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors"
                                        style={{ color: "hsl(225 49% 13%)" }}
                                    >
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm mb-4 leading-relaxed"
                                        style={{ color: "hsl(210 22% 33%)" }}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Benefit Badge */}
                                    <div
                                        className="inline-flex items-center px-3 py-1 rounded-full"
                                        style={{
                                            backgroundColor: "hsl(20 100% 97%)",
                                        }}
                                    >
                                        <span
                                            className="text-xs font-semibold"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        >
                                            {feature.benefit}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 rounded-3xl p-12 text-white text-center relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                    }}
                >
                    {/* Decorative Elements */}
                    <div
                        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl opacity-10"
                        style={{ backgroundColor: "hsl(0 0% 100%)" }}
                    />
                    <div
                        className="absolute -bottom-20 left-0 w-40 h-40 rounded-full blur-2xl opacity-10"
                        style={{ backgroundColor: "hsl(0 0% 100%)" }}
                    />

                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Team?</h3>
                        <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
                            Join 500+ companies already using CorpTalents to build their global teams
                        </p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/hire-talent-intake"
                                className="inline-block px-8 py-3 font-bold rounded-lg hover:shadow-xl transition-all"
                                style={{ backgroundColor: "hsl(0 0% 100%)", color: "hsl(20 96% 54%)" }}
                            >
                                GET STARTED FREE
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
