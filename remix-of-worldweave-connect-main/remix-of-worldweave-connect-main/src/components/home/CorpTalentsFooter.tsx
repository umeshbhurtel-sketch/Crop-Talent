import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp, Loader2 } from "lucide-react";
import { toast } from "sonner";
import cropLogoCompact from "@/assets/icons/Crop_logo.png";

const policyLinks = [
    { name: "Terms & Conditions",          href: "/terms" },
    { name: "Privacy Policy",              href: "/privacy" },
    { name: "Information Security Policy", href: "/information-security" },
];

const socialLinks = [
    { icon: Facebook,  href: "#facebook",  label: "Facebook"  },
    { icon: Twitter,   href: "#twitter",   label: "Twitter"   },
    { icon: Linkedin,  href: "#linkedin",  label: "LinkedIn"  },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
];

const MUTED = "hsl(210 22% 40%)";
const O     = "hsl(20 96% 54%)";
const N     = "hsl(225 49% 13%)";

export default function CorpTalentsFooter() {
    const [email,     setEmail]     = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = email.trim();
        if (!trimmed) { toast.error("Please enter your email address."); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { toast.error("Please enter a valid email address."); return; }
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        setIsLoading(false);
        setEmail("");
        toast.success("You're subscribed! Welcome to the CorpTalents community.", {
            description: "Expect hiring tips and insights in your inbox weekly.",
        });
    };

    const fade = {
        hidden: { opacity: 0, y: 20 },
        show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    const stagger = {
        hidden: { opacity: 0 },
        show:   { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    return (
        <footer className="relative">
            <div style={{ backgroundColor: N }} className="relative">

                {/* Scroll-to-top FAB */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center z-40 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                >
                    <ArrowUp className="w-6 h-6 text-white" />
                </motion.button>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* ── Newsletter ──────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16 rounded-2xl p-12 border-t-2 relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, hsl(225 49% 18%), hsl(225 49% 20%))",
                            borderTopColor: O,
                        }}
                    >
                        <div
                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                            style={{ backgroundColor: O }}
                        />
                        <div className="relative z-10 max-w-2xl mx-auto text-center">
                            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
                            <p className="text-lg mb-8" style={{ color: MUTED }}>
                                Subscribe to get the latest updates on hiring tips, industry insights, and exclusive offers.
                            </p>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3" noValidate>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    disabled={isLoading}
                                    className="flex-1 px-6 py-3 rounded-lg text-white focus:outline-none transition-all"
                                    style={{ backgroundColor: N }}
                                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 3px ${O}`; }}
                                    onBlur={(e)  => { e.target.style.boxShadow = "none"; }}
                                />
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                                    className="px-8 py-3 font-bold rounded-lg text-white whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70"
                                    style={{ background: `linear-gradient(135deg, ${O}, hsl(20 90% 45%))` }}
                                >
                                    {isLoading ? <><Loader2 className="w-4 h-4 animate-spin" /> Subscribing...</> : "Subscribe"}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* ── Main content: brand + policy links ──────────────────── */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b"
                        style={{ borderBottomColor: "hsl(225 49% 25%)" }}
                    >
                        {/* Brand */}
                        <motion.div variants={fade} className="md:col-span-2">
                            <Link to="/" className="inline-block mb-6">
                                <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center shadow-lg">
                                    <img src={cropLogoCompact} alt="CorpTalents" className="h-10 w-auto" />
                                </div>
                            </Link>

                            <p className="text-sm mb-6 leading-relaxed max-w-sm" style={{ color: MUTED }}>
                                Transforming how companies hire globally. Connect with top talent from 150+ countries.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 flex-shrink-0" style={{ color: O }} />
                                    <a href="tel:+1234567890" className="text-sm text-orange-200 hover:text-orange-100 transition-colors">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 flex-shrink-0" style={{ color: O }} />
                                    <a href="mailto:hello@corptalents.com" className="text-sm text-orange-200 hover:text-orange-100 transition-colors">
                                        hello@corptalents.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: O }} />
                                    <span className="text-sm text-orange-200">
                                        Glen Allen, VA 23059<br />United States
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Policy links */}
                        <motion.div variants={fade}>
                            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                                Legal
                            </h4>
                            <ul className="space-y-4">
                                {policyLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            to={link.href}
                                            className="text-sm transition-colors duration-200"
                                            style={{ color: MUTED }}
                                            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = O; }}
                                            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = MUTED; }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* ── Bottom bar ──────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="py-8 flex flex-col md:flex-row gap-6 items-center justify-between"
                    >
                        <p className="text-sm" style={{ color: MUTED }}>
                            © {new Date().getFullYear()} CorpTalents. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.2, backgroundColor: O }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                                        style={{ backgroundColor: "hsl(225 49% 25%)", color: O }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            style={{ color: O }}
                        >
                            Back to top ↑
                        </button>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
