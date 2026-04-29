import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const heroSlides = [
    {
        title: "Hire Global Talent in Days, Not Months",
        subtitle: "Access a vetted pool of 50,000+ skilled professionals worldwide",
        cta: "Hire Talent",
        icon: "🌍",
    },
    {
        title: "Talent as a Service (TaaS)",
        subtitle: "Scale your team instantly with pre-vetted, experienced professionals",
        cta: "Explore TaaS",
        icon: "👥",
    },
    {
        title: "Employer of Record (EOR)",
        subtitle: "Hire and manage international teams with full compliance & support",
        cta: "Learn EOR",
        icon: "🏢",
    },
];

export default function CorpTalentsHero() {
    const [index, setIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [autoplay]);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % heroSlides.length);
        setAutoplay(false);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setAutoplay(false);
    };

    const currentSlide = heroSlides[index];

    return (
        <section className="relative w-full min-h-screen overflow-hidden pt-20 flex items-center">
            {/* Animated Background Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(20 100% 97%) 100%)",
                }}
            />

            {/* Decorative Elements */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
                style={{ backgroundColor: "hsl(20 96% 54%)" }}
            />
            <div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
                style={{ backgroundColor: "hsl(225 49% 13%)", animationDelay: "-3s" }}
            />

            <div className="relative w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex flex-col items-center justify-center relative">
                        {/* Carousel Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`slide-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center w-full"
                            >
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <span className="text-4xl">{currentSlide.icon}</span>
                                    <div
                                        className="h-1 w-12 rounded-full"
                                        style={{
                                            background: "linear-gradient(90deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                                        }}
                                    />
                                </div>

                                <h1
                                    className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                                    style={{ color: "hsl(225 49% 13%)" }}
                                >
                                    {currentSlide.title}
                                </h1>

                                <p
                                    className="text-xl mb-8 leading-relaxed"
                                    style={{ color: "hsl(210 22% 33%)" }}
                                >
                                    {currentSlide.subtitle}
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link
                                            to="/hire-talent-intake"
                                            className="px-8 py-4 text-white rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                                            style={{
                                                backgroundColor: "hsl(20 96% 54%)",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(20 90% 45%)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(20 96% 54%)";
                                            }}
                                        >
                                            {currentSlide.cta}
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </motion.div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 border-2 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
                                        style={{
                                            borderColor: "hsl(20 96% 54%)",
                                            color: "hsl(20 96% 54%)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "hsl(20 100% 97%)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                        }}
                                    >
                                        Book Consultation
                                        <ChevronRight className="w-5 h-5" />
                                    </motion.button>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-8 mt-16 pt-8" style={{ borderTopColor: "hsl(220 13% 91%)", borderTopWidth: "1px" }}>
                                    {[
                                        { label: "Global Talents", value: "50K+" },
                                        { label: "Countries", value: "150+" },
                                        { label: "Success Rate", value: "98%" },
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div
                                                className="text-3xl font-bold mb-2"
                                                style={{ color: "hsl(20 96% 54%)" }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div className="text-sm" style={{ color: "hsl(210 22% 33%)" }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Controls */}
                        <div className="flex gap-4 mt-16 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors absolute left-4"
                                style={{
                                    backgroundColor: "hsl(0 0% 100%)",
                                    color: "hsl(20 96% 54%)",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "hsl(20 100% 97%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "hsl(0 0% 100%)";
                                }}
                            >
                                ←
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all absolute right-4"
                                style={{
                                    backgroundColor: "hsl(20 96% 54%)",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "hsl(20 90% 45%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "hsl(20 96% 54%)";
                                }}
                            >
                                →
                            </motion.button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex justify-center gap-2 mt-20">
                            {heroSlides.map((_, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => {
                                        setIndex(i);
                                        setAutoplay(false);
                                    }}
                                    className="h-3 rounded-full transition-all"
                                    animate={{
                                        width: i === index ? 32 : 12,
                                    }}
                                    style={{
                                        backgroundColor:
                                            i === index
                                                ? "hsl(20 96% 54%)"
                                                : "hsl(220 13% 91%)",
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
