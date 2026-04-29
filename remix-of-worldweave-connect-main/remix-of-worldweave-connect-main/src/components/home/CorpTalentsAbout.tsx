import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target } from "lucide-react";

export default function CorpTalentsAbout() {
    return (
        <section
            id="about"
            className="py-24"
            style={{
                background: "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(0 0% 100%) 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
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
                                ABOUT CORPTALENTS
                            </span>
                        </div>

                        <h2
                            className="text-4xl lg:text-5xl font-bold mb-6"
                            style={{ color: "hsl(225 49% 13%)" }}
                        >
                            Your Global Workforce Partner
                        </h2>

                        <p
                            className="text-lg mb-6 leading-relaxed"
                            style={{ color: "hsl(210 22% 33%)" }}
                        >
                            CorpTalents is a leading talent solution provider connecting top global
                            professionals with innovative companies. We've built a platform that
                            simplifies hiring, compliance, and team management across borders.
                        </p>

                        <p
                            className="mb-8 leading-relaxed"
                            style={{ color: "hsl(210 22% 33%)" }}
                        >
                            Our mission is to make global hiring accessible, affordable, and hassle-free
                            for businesses of all sizes. We partner with companies to build diverse,
                            talented teams that drive growth and innovation.
                        </p>

                        {/* Mission & Vision */}
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Our Mission",
                                    desc: "Democratize access to global talent for companies worldwide",
                                },
                                {
                                    icon: Zap,
                                    title: "Our Vision",
                                    desc: "A world where talent and opportunity connect instantly",
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4"
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{
                                                backgroundColor: "hsl(20 100% 97%)",
                                            }}
                                        >
                                            <Icon
                                                className="w-5 h-5"
                                                style={{ color: "hsl(20 96% 54%)" }}
                                            />
                                        </div>
                                        <div>
                                            <h3
                                                className="font-bold mb-1"
                                                style={{ color: "hsl(225 49% 13%)" }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p
                                                className="text-sm"
                                                style={{ color: "hsl(210 22% 33%)" }}
                                            >
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/about"
                                className="inline-block px-8 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                style={{ backgroundColor: "hsl(20 96% 54%)" }}
                            >
                                Learn Our Story
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Card */}
                        <div
                            className="rounded-3xl p-1 shadow-2xl"
                            style={{
                                background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                            }}
                        >
                            <div
                                className="rounded-3xl p-12 h-96 flex flex-col items-center justify-center relative overflow-hidden"
                                style={{ backgroundColor: "hsl(0 0% 100%)" }}
                            >
                                {/* Decorative Elements */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                                    style={{
                                        backgroundColor: "hsl(20 100% 97%)",
                                    }}
                                />
                                <div
                                    className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                                    style={{
                                        backgroundColor: "hsl(20 100% 97%)",
                                    }}
                                />

                                <div className="relative z-10 text-center">
                                    <div className="text-6xl mb-4">🌍</div>
                                    <h3
                                        className="text-2xl font-bold mb-3"
                                        style={{ color: "hsl(225 49% 13%)" }}
                                    >
                                        Global Talent Network
                                    </h3>
                                    <p
                                        className="text-sm"
                                        style={{ color: "hsl(210 22% 33%)" }}
                                    >
                                        Connecting 50,000+ professionals across 150+ countries
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-8 -left-8 rounded-2xl shadow-xl p-6 max-w-xs"
                            style={{
                                backgroundColor: "hsl(0 0% 100%)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(20 100% 97%), hsl(20 100% 85%))",
                                    }}
                                >
                                    <CheckCircle2
                                        className="w-6 h-6"
                                        style={{ color: "hsl(20 96% 54%)" }}
                                    />
                                </div>
                                <div>
                                    <div
                                        className="font-bold"
                                        style={{ color: "hsl(225 49% 13%)" }}
                                    >
                                        500+
                                    </div>
                                    <div
                                        className="text-sm"
                                        style={{ color: "hsl(210 22% 33%)" }}
                                    >
                                        Companies Served
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
