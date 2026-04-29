import { motion } from "framer-motion";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";

const sections = [
    {
        title: "Information We Collect",
        body: "We gather personal details (name, email, phone, and company information), technical data (IP address, browser type, pages visited, and time spent on our platform), and usage information regarding your interactions with our services.",
    },
    {
        title: "How We Use Your Information",
        body: "Your data is used to deliver and enhance our services, respond to inquiries, analyze usage trends, optimize user experience, and send relevant communications related to our talent solutions and platform updates.",
    },
    {
        title: "Sharing Your Information",
        body: "We do not sell, rent, or lease your personal information to third parties. Data may be shared with trusted service providers under strict confidentiality agreements where necessary to support our business operations.",
    },
    {
        title: "Data Security",
        body: "We employ industry-standard security measures to protect your personal information. While we strive to use commercially acceptable means to protect your data, no online system is 100% secure.",
    },
    {
        title: "Cookies & Tracking",
        body: "Our website uses cookies and similar technologies to enhance your user experience and analyze platform usage. You may disable cookies through your browser settings, though some features may be affected.",
    },
    {
        title: "Your Rights",
        body: "You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, please contact us at the details provided below.",
    },
    {
        title: "Changes to This Policy",
        body: "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the revised policy.",
    },
    {
        title: "Contact Us",
        body: "If you have any questions about this Privacy Policy or how we handle your data, please contact us at info@mardilab.com or write to us at Glen Allen, VA 23059, United States.",
    },
];

const fadeUp = (delay = 0) => ({
    hidden:  { opacity: 0, y: 20 },
    show:    { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function CorpTalentsPrivacy() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(0 0% 99%)" }}>
            <CorpTalentsHeader />

            <main className="flex-1 pt-28 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <motion.div
                        variants={fadeUp(0)}
                        initial="hidden"
                        animate="show"
                        className="mb-12"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                            style={{ backgroundColor: "hsl(20 100% 97%)", border: "1px solid hsl(20 96% 54% / 0.25)" }}
                        >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
                            <span className="text-sm font-semibold" style={{ color: O }}>LEGAL</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: N }}>
                            Privacy Policy
                        </h1>
                        <p className="text-base mb-4" style={{ color: BD }}>
                            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                        <p className="text-base leading-relaxed" style={{ color: BD }}>
                            At CorpTalents, we are committed to protecting your privacy. This document outlines our data collection, usage, disclosure, and safeguarding practices for website visitors and service users.
                        </p>
                    </motion.div>

                    {/* Sections */}
                    <div className="space-y-10">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp(0.08 + i * 0.05)}
                                initial="hidden"
                                animate="show"
                                className="rounded-2xl p-8 border"
                                style={{
                                    borderColor: "hsl(220 13% 91%)",
                                    backgroundColor: "hsl(0 0% 100%)",
                                    boxShadow: "0 1px 3px hsl(220 13% 91% / 0.8)",
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5"
                                        style={{ backgroundColor: "hsl(20 100% 97%)", color: O }}
                                    >
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold mb-3" style={{ color: N }}>
                                            {section.title}
                                        </h2>
                                        <p className="text-base leading-relaxed" style={{ color: BD }}>
                                            {section.body}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <CorpTalentsFooter />
        </div>
    );
}
