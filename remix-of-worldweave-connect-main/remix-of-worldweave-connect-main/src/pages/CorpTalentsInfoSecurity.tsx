import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";

const commitments = [
    "Deploy appropriate technology and infrastructure to safeguard information assets.",
    "Ensure compliance with all applicable legal and regulatory requirements.",
    "Establish robust security management systems and controls.",
    "Meet contractual security obligations to our clients and partners.",
    "Provide ongoing employee awareness training on information security.",
    "Address security incidents and vulnerabilities promptly and appropriately.",
    "Foster a cyber-security-conscious culture across the organization.",
];

const fadeUp = (delay = 0) => ({
    hidden:  { opacity: 0, y: 20 },
    show:    { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function CorpTalentsInfoSecurity() {
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
                            Information Security Policy
                        </h1>
                        <p className="text-base" style={{ color: BD }}>
                            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                    </motion.div>

                    {/* Intro card */}
                    <motion.div
                        variants={fadeUp(0.08)}
                        initial="hidden"
                        animate="show"
                        className="rounded-2xl p-8 mb-10 border"
                        style={{
                            borderColor: "hsl(220 13% 91%)",
                            backgroundColor: "hsl(0 0% 100%)",
                            boxShadow: "0 1px 3px hsl(220 13% 91% / 0.8)",
                        }}
                    >
                        <p className="text-base leading-relaxed mb-4" style={{ color: BD }}>
                            CorpTalents maintains a firm commitment to preserving the confidentiality, integrity, and availability of information for all operational needs — across our customers, partners, and stakeholders.
                        </p>
                        <p className="text-base leading-relaxed" style={{ color: BD }}>
                            We have implemented an Information Security Management System (ISMS) comprising security policies, procedures, and processes to effectively safeguard data and information from security risks.
                        </p>
                    </motion.div>

                    {/* Commitments */}
                    <motion.div
                        variants={fadeUp(0.15)}
                        initial="hidden"
                        animate="show"
                        className="rounded-2xl p-8 border"
                        style={{
                            borderColor: "hsl(220 13% 91%)",
                            backgroundColor: "hsl(0 0% 100%)",
                            boxShadow: "0 1px 3px hsl(220 13% 91% / 0.8)",
                        }}
                    >
                        <h2 className="text-xl font-bold mb-6" style={{ color: N }}>Our Security Commitments</h2>
                        <ul className="space-y-4">
                            {commitments.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={fadeUp(0.2 + i * 0.05)}
                                    initial="hidden"
                                    animate="show"
                                    className="flex items-start gap-3"
                                >
                                    <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: O }} />
                                    <span className="text-base leading-relaxed" style={{ color: BD }}>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Forward direction */}
                    <motion.div
                        variants={fadeUp(0.55)}
                        initial="hidden"
                        animate="show"
                        className="mt-10 rounded-2xl p-8 border-l-4"
                        style={{
                            backgroundColor: "hsl(225 49% 13%)",
                            borderLeftColor: O,
                        }}
                    >
                        <h2 className="text-xl font-bold mb-4 text-white">Continuous Improvement</h2>
                        <p className="text-base leading-relaxed text-orange-100">
                            CorpTalents commits to the continuous improvement of its information security posture through ongoing diligence and excellence — protecting organizational information assets for all those who place their trust in us.
                        </p>
                    </motion.div>
                </div>
            </main>

            <CorpTalentsFooter />
        </div>
    );
}
