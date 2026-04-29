import { motion } from "framer-motion";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";

const sections = [
    {
        title: "Acceptance of Terms",
        body: "By accessing or using our services, you acknowledge that you have read and agree to be bound by these terms. If you do not agree to these terms, please refrain from using the services.",
    },
    {
        title: "Services Provided",
        body: "CorpTalents offers global talent solutions encompassing recruitment, talent management, employer of record (EOR), and cloud-based hiring services. We reserve the discretion to modify or discontinue any service component at any time.",
    },
    {
        title: "User Responsibilities",
        body: "Users commit to lawful use only. You must maintain the confidentiality of your account credentials and refrain from any unauthorized access attempts to our systems or data.",
    },
    {
        title: "Intellectual Property",
        body: "All content, trademarks, logos, and intellectual property displayed on our platform are the property of CorpTalents or its licensors. Reproduction, distribution, or exploitation of any such material requires prior written permission.",
    },
    {
        title: "Limitation of Liability",
        body: "CorpTalents bears no responsibility for direct, indirect, incidental, or consequential damages arising from service use or unavailability, regardless of prior notification of the possibility of such damages.",
    },
    {
        title: "Termination",
        body: "CorpTalents may suspend or terminate your access immediately and without prior notice or liability upon violation of these terms.",
    },
    {
        title: "Governing Law",
        body: "These terms are governed by and construed in accordance with applicable law, without regard to conflict of law principles.",
    },
    {
        title: "Changes to Terms",
        body: "We may update these terms from time to time. Updates will appear on this page, and continued use of the service constitutes acceptance of any modifications.",
    },
    {
        title: "Contact Us",
        body: "If you have any questions about these Terms & Conditions, please contact us at info@mardilab.com or write to us at Glen Allen, VA 23059, United States.",
    },
];

const fadeUp = (delay = 0) => ({
    hidden:  { opacity: 0, y: 20 },
    show:    { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function CorpTalentsTerms() {
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
                            Terms &amp; Conditions
                        </h1>
                        <p className="text-base" style={{ color: BD }}>
                            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
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
