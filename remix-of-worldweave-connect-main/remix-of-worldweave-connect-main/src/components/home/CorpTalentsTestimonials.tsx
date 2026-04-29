import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Steve Sully",
        title: "CTO, US-based EdTech Company",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        rating: 5,
        quote:
            "Mardi Lab have been an invaluable partner for our company over the past eight months. Their talented developers seamlessly integrated into our teams, delivering high-quality solutions with unparalleled professionalism. Their proactive approach, innovative ideas, and commitment to deadlines make them a standout choice. We highly recommend Mardi Lab for their exceptional contributions to our success.",
        company: "US-based EdTech Company",
    },
    {
        name: "Gabriel Santos",
        title: "COO, Singapore-based Tech Company",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
        rating: 5,
        quote:
            "I have been partnering with Mardi Lab for the past year, and I must say, their commitment to excellence is truly commendable. Not only have they consistently delivered top-tier developers for our global tech recruitment needs, but what sets them apart is their unwavering accountability. Mardi Lab not only fosters a conducive and progressive work environment for their developers but goes the extra mile in ensuring their mental and overall well-being. It's a pleasure to collaborate with a company that prioritizes both quality service and the holistic growth of its team.",
        company: "Singapore-based Tech Company",
    },
];

const stats = [
    { label: "Client Satisfaction", value: "98%" },
    { label: "Avg. Time Saved", value: "70%" },
    { label: "Growth Rate", value: "3.5x" },
];

export default function CorpTalentsTestimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    React.useEffect(() => {
        if (!autoplay) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [autoplay]);

    const nextSlide = () => {
        setAutoplay(false);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setAutoplay(false);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "hsl(225 49% 13%)" }}
        >
            {/* Decorative Background */}
            <div
                className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ backgroundColor: "hsl(20 96% 54%)" }}
            />
            <div
                className="absolute -bottom-20 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
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
                            backgroundColor: "hsl(225 49% 20%)",
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
                            SUCCESS STORIES
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                        Loved by Industry Leaders
                    </h2>
                    <p className="text-xl text-orange-200 max-w-2xl mx-auto">
                        See how companies worldwide are transforming their hiring with CorpTalents
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Carousel */}
                    <div className="lg:col-span-2">
                        <div
                            className="relative h-96 rounded-2xl overflow-hidden"
                            onMouseEnter={() => setAutoplay(false)}
                            onMouseLeave={() => setAutoplay(true)}
                        >
                            <AnimatePresence mode="wait">
                                {[testimonials[activeIndex]].map((testimonial, idx) => (
                                    <motion.div
                                        key={`${activeIndex}-${idx}`}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 p-10 rounded-2xl flex flex-col justify-between"
                                        style={{
                                            backgroundColor: "hsl(0 0% 100%)",
                                        }}
                                    >
                                        {/* Quote */}
                                        <div>
                                            {/* Stars */}
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 fill-current"
                                                        style={{ color: "hsl(20 96% 54%)" }}
                                                    />
                                                ))}
                                            </div>

                                            <p
                                                className="text-lg font-medium mb-6 leading-relaxed"
                                                style={{ color: "hsl(225 49% 13%)" }}
                                            >
                                                "{testimonial.quote}"
                                            </p>
                                        </div>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <p
                                                    className="font-bold"
                                                    style={{ color: "hsl(225 49% 13%)" }}
                                                >
                                                    {testimonial.name}
                                                </p>
                                                <p
                                                    className="text-sm"
                                                    style={{ color: "hsl(210 22% 33%)" }}
                                                >
                                                    {testimonial.title}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all"
                                style={{
                                    backgroundColor: "hsl(20 96% 54%)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "hsl(20 90% 45%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "hsl(20 96% 54%)";
                                }}
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all"
                                style={{
                                    backgroundColor: "hsl(20 96% 54%)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "hsl(20 90% 45%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "hsl(20 96% 54%)";
                                }}
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </motion.button>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => {
                                        setAutoplay(false);
                                        setActiveIndex(idx);
                                    }}
                                    className="h-2 rounded-full transition-all"
                                    animate={{
                                        width: activeIndex === idx ? 24 : 8,
                                    }}
                                    style={{
                                        backgroundColor:
                                            activeIndex === idx
                                                ? "hsl(20 96% 54%)"
                                                : "hsl(225 49% 30%)",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Stats Side Panel */}
                    <div className="space-y-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="rounded-xl p-6 border-l-4"
                                style={{
                                    backgroundColor: "hsl(225 49% 20%)",
                                    borderLeftColor: "hsl(20 96% 54%)",
                                }}
                            >
                                <div
                                    className="text-3xl font-bold mb-2"
                                    style={{ color: "hsl(20 96% 54%)" }}
                                >
                                    {stat.value}
                                </div>
                                <p className="text-orange-100">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* All Testimonials Grid (Mobile/Tablet View) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="rounded-xl p-6"
                            style={{
                                backgroundColor: "hsl(225 49% 20%)",
                                borderLeft: "4px solid hsl(20 96% 54%)",
                            }}
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-current"
                                        style={{ color: "hsl(20 96% 54%)" }}
                                    />
                                ))}
                            </div>
                            <p className="text-white text-sm mb-4 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-xs text-orange-200">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
