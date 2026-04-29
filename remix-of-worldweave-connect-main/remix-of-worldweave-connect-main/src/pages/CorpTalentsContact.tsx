import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, Loader2, Send } from "lucide-react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
    website?: string; // honeypot
}

const contact_info = [
    {
        icon: Phone,
        title: "Phone",
        value: "+1 (234) 567-890",
        desc: "Mon-Fri 9am-6pm EST",
    },
    {
        icon: Mail,
        title: "Email",
        value: "hello@corptalents.com",
        desc: "We'll reply within 24 hours",
    },
    {
        icon: MapPin,
        title: "Address",
        value: "San Francisco, CA",
        desc: "United States",
    },
];

export default function CorpTalentsContact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData.website && formData.website.trim().length > 0) {
            setIsSubmitted(true);
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log("Form submitted:", {
                name: formData.name,
                email: formData.email,
                company: formData.company,
                message: formData.message,
            });

            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                message: "",
                website: "",
            });

            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        } catch (err: any) {
            setError(err?.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const messageLen = (formData.message || "").length;

    return (
        <>
            <CorpTalentsHeader />
            <main>
                {/* Hero Section */}
                <section
                    className="relative py-20 md:py-32 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(20 100% 97%) 100%)",
                    }}
                >
                    {/* Decorative Background */}
                    <div
                        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ backgroundColor: "hsl(20 96% 54%)" }}
                    />
                    <div
                        className="absolute -bottom-20 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ backgroundColor: "hsl(225 49% 13%)" }}
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h1
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ color: "hsl(225 49% 13%)" }}
                            >
                                Get in Touch
                            </h1>
                            <p
                                className="text-xl max-w-2xl mx-auto"
                                style={{ color: "hsl(210 22% 33%)" }}
                            >
                                Have questions about our hiring solutions? We'd love to hear from you. Our team is here to help.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 md:py-32 relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2
                                    className="text-3xl font-bold mb-8"
                                    style={{ color: "hsl(225 49% 13%)" }}
                                >
                                    Contact Information
                                </h2>

                                <div className="space-y-8">
                                    {contact_info.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                className="flex gap-4"
                                            >
                                                <div
                                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        backgroundColor: "hsl(20 100% 97%)",
                                                    }}
                                                >
                                                    <Icon
                                                        className="w-6 h-6"
                                                        style={{ color: "hsl(20 96% 54%)" }}
                                                    />
                                                </div>
                                                <div>
                                                    <p
                                                        className="font-bold mb-1"
                                                        style={{ color: "hsl(225 49% 13%)" }}
                                                    >
                                                        {item.title}
                                                    </p>
                                                    <p
                                                        className="font-medium mb-1"
                                                        style={{ color: "hsl(20 96% 54%)" }}
                                                    >
                                                        {item.value}
                                                    </p>
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

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="mt-12 pt-12 border-t"
                                    style={{ borderTopColor: "hsl(220 13% 91%)" }}
                                >
                                    <p
                                        className="font-semibold mb-4"
                                        style={{ color: "hsl(225 49% 13%)" }}
                                    >
                                        Follow Us
                                    </p>
                                    <div className="flex gap-4">
                                        {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                                            <motion.a
                                                key={social}
                                                href="#"
                                                whileHover={{ scale: 1.1 }}
                                                className="w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors"
                                                style={{
                                                    backgroundColor: "hsl(20 100% 97%)",
                                                    color: "hsl(20 96% 54%)",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = "hsl(20 96% 54%)";
                                                    e.target.style.color = "white";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = "hsl(20 100% 97%)";
                                                    e.target.style.color = "hsl(20 96% 54%)";
                                                }}
                                            >
                                                {social.charAt(0)}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                                        style={{
                                            backgroundColor: "hsl(20 100% 97%)",
                                            borderLeft: "4px solid hsl(20 96% 54%)",
                                        }}
                                    >
                                        <CheckCircle2
                                            className="w-16 h-16 mb-4"
                                            style={{ color: "hsl(20 96% 54%)" }}
                                        />
                                        <h3
                                            className="text-2xl font-bold mb-2"
                                            style={{ color: "hsl(225 49% 13%)" }}
                                        >
                                            Message Sent!
                                        </h3>
                                        <p style={{ color: "hsl(210 22% 33%)" }}>
                                            Thank you for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <label
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: "hsl(225 49% 13%)" }}
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                                                style={{
                                                    borderColor: "hsl(220 13% 91%)",
                                                    backgroundColor: "hsl(0 0% 100%)",
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = "hsl(20 96% 54%)";
                                                    e.target.style.boxShadow = "0 0 0 3px hsl(20 100% 97%)";
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = "hsl(220 13% 91%)";
                                                    e.target.style.boxShadow = "none";
                                                }}
                                            />
                                        </motion.div>

                                        {/* Email */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1, duration: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <label
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: "hsl(225 49% 13%)" }}
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                                                style={{
                                                    borderColor: "hsl(220 13% 91%)",
                                                    backgroundColor: "hsl(0 0% 100%)",
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = "hsl(20 96% 54%)";
                                                    e.target.style.boxShadow = "0 0 0 3px hsl(20 100% 97%)";
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = "hsl(220 13% 91%)";
                                                    e.target.style.boxShadow = "none";
                                                }}
                                            />
                                        </motion.div>

                                        {/* Company */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <label
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: "hsl(225 49% 13%)" }}
                                            >
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                                                style={{
                                                    borderColor: "hsl(220 13% 91%)",
                                                    backgroundColor: "hsl(0 0% 100%)",
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = "hsl(20 96% 54%)";
                                                    e.target.style.boxShadow = "0 0 0 3px hsl(20 100% 97%)";
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = "hsl(220 13% 91%)";
                                                    e.target.style.boxShadow = "none";
                                                }}
                                            />
                                        </motion.div>

                                        {/* Message */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <label
                                                className="block text-sm font-semibold mb-2 flex justify-between"
                                            >
                                                <span style={{ color: "hsl(225 49% 13%)" }}>Message *</span>
                                                <span
                                                    style={{
                                                        color:
                                                            messageLen > 1000
                                                                ? "hsl(0 84% 60%)"
                                                                : "hsl(210 22% 33%)",
                                                    }}
                                                >
                                                    {messageLen}/1000
                                                </span>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                maxLength={1000}
                                                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all resize-none"
                                                style={{
                                                    borderColor: "hsl(220 13% 91%)",
                                                    backgroundColor: "hsl(0 0% 100%)",
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = "hsl(20 96% 54%)";
                                                    e.target.style.boxShadow = "0 0 0 3px hsl(20 100% 97%)";
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = "hsl(220 13% 91%)";
                                                    e.target.style.boxShadow = "none";
                                                }}
                                            />
                                        </motion.div>

                                        {/* Honeypot */}
                                        <input
                                            type="text"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            style={{ display: "none" }}
                                            tabIndex={-1}
                                        />

                                        {/* Error Message */}
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="p-4 rounded-lg"
                                                style={{ backgroundColor: "hsl(0 84% 97%)", color: "hsl(0 84% 40%)" }}
                                            >
                                                {error}
                                            </motion.div>
                                        )}

                                        {/* Submit Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all"
                                            style={{
                                                background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                                                opacity: isSubmitting ? 0.7 : 1,
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>

                                        <p
                                            className="text-sm text-center"
                                            style={{ color: "hsl(210 22% 33%)" }}
                                        >
                                            We'll get back to you within 24 hours.
                                        </p>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <CorpTalentsFooter />
        </>
    );
}
