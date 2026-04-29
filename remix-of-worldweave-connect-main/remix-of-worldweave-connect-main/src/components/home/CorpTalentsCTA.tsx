import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Clock, Users, ArrowRight } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Instant Access",
        description: "Start interviewing within 24 hours",
    },
    {
        icon: Clock,
        title: "Fast Hiring",
        description: "Average hire in 3-5 business days",
    },
    {
        icon: Users,
        title: "Global Talent",
        description: "50,000+ professionals worldwide",
    },
];

export default function CorpTalentsCTA() {
    // Floating animation variants
    const float = (delay: number) => ({
        initial: { y: 0 },
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    });

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, hsl(225 49% 13%) 0%, hsl(225 49% 20%) 50%, hsl(225 49% 13%) 100%)",
            }}
        >
            {/* Decorative Floating Elements */}
            <motion.div
                variants={float(0)}
                initial="initial"
                animate="animate"
                className="absolute top-20 right-10 w-32 h-32 rounded-full border-2 opacity-10 pointer-events-none lg:block hidden"
                style={{
                    borderColor: "hsl(20 96% 54%)",
                }}
            />
            <motion.div
                variants={float(1)}
                initial="initial"
                animate="animate"
                className="absolute bottom-32 left-10 w-40 h-40 rounded-full border-2 opacity-10 pointer-events-none lg:block hidden"
                style={{
                    borderColor: "hsl(20 96% 54%)",
                }}
            />

            {/* Gradient Blur */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: "hsl(20 96% 54%)" }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                            style={{
                                backgroundColor: "hsl(225 49% 25%)",
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
                                READY TO GET STARTED?
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                            Find Your Perfect Team Today
                        </h2>

                        <p
                            className="text-lg mb-8 leading-relaxed"
                            style={{ color: "hsl(210 22% 40%)" }}
                        >
                            Join the thousands of companies that have already transformed their hiring with CorpTalents. Get access to the world's best talent pool and start building your dream team.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-12">
                            {benefits.map((benefit, idx) => {
                                const Icon = benefit.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4"
                                    >
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                            style={{
                                                backgroundColor: "hsl(20 96% 54%)",
                                            }}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">{benefit.title}</p>
                                            <p
                                                className="text-sm"
                                                style={{ color: "hsl(210 22% 40%)" }}
                                            >
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/hire-talent-intake"
                                    className="px-8 py-4 font-bold rounded-lg transition-all text-white flex items-center justify-center gap-2"
                                    style={{ background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))" }}
                                >
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 font-bold rounded-lg border-2 transition-all flex items-center justify-center gap-2"
                                    style={{ borderColor: "hsl(20 96% 54%)", color: "hsl(20 96% 54%)" }}
                                >
                                    Schedule a Demo
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-sm mt-6"
                            style={{ color: "hsl(210 22% 40%)" }}
                        >
                            ✓ No credit card required · ✓ 14-day free trial · ✓ Cancel anytime
                        </motion.p>
                    </motion.div>

                    {/* Right Side - Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Floating Stats Card */}
                        <motion.div
                            variants={float(0.2)}
                            initial="initial"
                            animate="animate"
                            className="relative"
                        >
                            <div
                                className="rounded-2xl p-8 border-2 relative"
                                style={{
                                    backgroundColor: "hsl(225 49% 20%)",
                                    borderColor: "hsl(20 96% 54%)",
                                }}
                            >
                                {/* Gradient background decoration */}
                                <div
                                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                                    }}
                                />

                                <div className="relative z-10 space-y-8">
                                    {/* Stat 1 */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div
                                            className="text-4xl font-bold mb-2"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        >
                                            50K+
                                        </div>
                                        <p className="text-orange-200">Vetted Professionals</p>
                                    </motion.div>

                                    {/* Stat 2 */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div
                                            className="text-4xl font-bold mb-2"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        >
                                            150+
                                        </div>
                                        <p className="text-orange-200">Countries Covered</p>
                                    </motion.div>

                                    {/* Stat 3 */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div
                                            className="text-4xl font-bold mb-2"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        >
                                            3.5x
                                        </div>
                                        <p className="text-orange-200">Average Team Growth</p>
                                    </motion.div>

                                    {/* Divider */}
                                    <div
                                        className="h-px w-full"
                                        style={{ backgroundColor: "hsl(225 49% 30%)" }}
                                    />

                                    {/* Quote */}
                                    <p
                                        className="text-sm italic"
                                        style={{ color: "hsl(210 22% 40%)" }}
                                    >
                                        "The best decision we made for scaling our startup. Highly recommend!"
                                    </p>
                                    <p className="text-xs" style={{ color: "hsl(20 96% 54%)" }}>
                                        — CEO, Fortune 500 Company
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative circles */}
                        <div
                            className="absolute -z-10 w-full h-full opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: `radial-gradient(circle, hsl(20 96% 54%) 1px, transparent 1px)`,
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
