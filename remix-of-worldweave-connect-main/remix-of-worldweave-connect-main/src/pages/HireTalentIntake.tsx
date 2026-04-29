import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowLeft,
    User,
    Briefcase,
    CheckCircle2,
    Plus,
    X,
    ChevronRight,
    Building2,
    Mail,
    Phone,
    Globe,
} from "lucide-react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

interface ContactData {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    country: string;
    website: string;
}

interface RoleData {
    jobTitle: string;
    positions: string;
    employmentType: string;
    experienceLevel: string;
    skills: string;
    timezone: string;
    startDate: string;
    budget: string;
    description: string;
}

export default function HireTalentIntake() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<ContactData>({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        website: "",
    });

    const [roles, setRoles] = useState<RoleData[]>([
        {
            jobTitle: "",
            positions: "",
            employmentType: "",
            experienceLevel: "",
            skills: "",
            timezone: "",
            startDate: "",
            budget: "",
            description: "",
        },
    ]);

    const [additionalNotes, setAdditionalNotes] = useState("");
    const [agreeContact, setAgreeContact] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRoleChange = (
        index: number,
        field: keyof RoleData,
        value: string
    ) => {
        const updatedRoles = [...roles];
        updatedRoles[index][field] = value;
        setRoles(updatedRoles);
    };

    const addRole = () => {
        setRoles([
            ...roles,
            {
                jobTitle: "",
                positions: "",
                employmentType: "",
                experienceLevel: "",
                skills: "",
                timezone: "",
                startDate: "",
                budget: "",
                description: "",
            },
        ]);
    };

    const removeRole = (index: number) => {
        setRoles(roles.filter((_, i) => i !== index));
    };

    const validateStep = () => {
        if (currentStep === 1) {
            return (
                formData.companyName.trim() &&
                formData.contactPerson.trim() &&
                formData.email.trim() &&
                formData.phone.trim() &&
                formData.country
            );
        }
        if (currentStep === 2) {
            return roles.every(
                (role) =>
                    role.jobTitle.trim() &&
                    role.positions &&
                    role.employmentType &&
                    role.experienceLevel &&
                    role.skills.trim()
            );
        }
        return true;
    };

    const handleSubmit = () => {
        if (!agreeContact) {
            alert("Please agree to be contacted.");
            return;
        }
        setIsSubmitted(true);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 500);
    };

    const steps = [
        { label: "Contact", icon: User },
        { label: "Roles", icon: Briefcase },
        { label: "Review", icon: CheckCircle2 },
    ];

    if (isSubmitted) {
        return (
            <>
                <CorpTalentsHeader />
                <main className="min-h-screen flex items-center" style={{ backgroundColor: "hsl(0 0% 99%)" }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            <motion.div
                                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                style={{ background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))" }}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 0.6 }}
                            >
                                <CheckCircle2 className="w-10 h-10 text-white" />
                            </motion.div>

                            <h1
                                className="text-4xl font-bold mb-4"
                                style={{ color: "hsl(225 49% 13%)" }}
                            >
                                Thank You!
                            </h1>
                            <p
                                className="text-xl mb-8"
                                style={{ color: "hsl(210 22% 33%)" }}
                            >
                                Your hiring request has been successfully submitted.
                            </p>
                            <p
                                className="text-lg mb-8"
                                style={{ color: "hsl(210 22% 33%)" }}
                            >
                                Our team will analyze your requirements and contact you shortly with matched candidates.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setCurrentStep(1);
                                    setFormData({
                                        companyName: "",
                                        contactPerson: "",
                                        email: "",
                                        phone: "",
                                        country: "",
                                        website: "",
                                    });
                                    setRoles([
                                        {
                                            jobTitle: "",
                                            positions: "",
                                            employmentType: "",
                                            experienceLevel: "",
                                            skills: "",
                                            timezone: "",
                                            startDate: "",
                                            budget: "",
                                            description: "",
                                        },
                                    ]);
                                }}
                                className="px-8 py-4 rounded-lg font-bold text-white text-lg"
                                style={{
                                    background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                                }}
                            >
                                Submit Another Request
                            </motion.button>
                        </motion.div>
                    </div>
                </main>
                <CorpTalentsFooter />
            </>
        );
    }

    return (
        <>
            <CorpTalentsHeader />
            <main>
                {/* Hero Section */}
                <section
                    className="relative py-16 md:py-24 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, hsl(225 49% 13%) 0%, hsl(225 49% 20%) 100%)",
                    }}
                >
                    <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(20 96% 54%), transparent 50%),
                                radial-gradient(circle at 80% 80%, hsl(225 49% 13%), transparent 50%)`,
                        }}
                    />

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md border border-white/20"
                                style={{ background: "rgba(255, 255, 255, 0.1)" }}
                            >
                                <Briefcase className="w-4 h-4" style={{ color: "hsl(20 96% 54%)" }} />
                                <span className="text-sm font-semibold text-white">
                                    Talent Acquisition Intake
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Hire Global Talent
                            </h1>
                            <p className="text-lg text-orange-200 max-w-2xl mx-auto">
                                Add one or many roles in a single request. We'll handle sourcing, vetting, and matching.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Step Progress */}
                <section
                    className="sticky top-20 z-40 py-8"
                    style={{ backgroundColor: "hsl(0 0% 99%)" }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            {steps.map((step, idx) => {
                                const StepIcon = step.icon;
                                const isActive = currentStep === idx + 1;
                                const isComplete = currentStep > idx + 1;

                                return (
                                    <div key={idx} className="flex-1 flex items-center">
                                        <motion.div
                                            className="flex flex-col items-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <motion.div
                                                className="w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all"
                                                style={{
                                                    background: isActive || isComplete
                                                        ? "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))"
                                                        : "hsl(220 13% 91%)",
                                                    color: isActive || isComplete ? "white" : "hsl(210 22% 33%)",
                                                }}
                                                whileScale={{ scale: isActive ? [1, 1.1, 1] : 1 }}
                                            >
                                                {isComplete ? (
                                                    <CheckCircle2 className="w-6 h-6" />
                                                ) : (
                                                    <StepIcon className="w-6 h-6" />
                                                )}
                                            </motion.div>
                                            <p
                                                className="text-sm font-semibold hidden md:block"
                                                style={{
                                                    color: isActive || isComplete ? "hsl(20 96% 54%)" : "hsl(210 22% 33%)",
                                                }}
                                            >
                                                {step.label}
                                            </p>
                                            <p
                                                className="text-xs mt-1"
                                                style={{ color: "hsl(210 22% 33%)" }}
                                            >
                                                Step {idx + 1} of 3
                                            </p>
                                        </motion.div>

                                        {idx < steps.length - 1 && (
                                            <div
                                                className="flex-1 h-1 mx-4 rounded-full"
                                                style={{
                                                    background: isComplete
                                                        ? "linear-gradient(90deg, hsl(20 96% 54%), hsl(20 90% 45%))"
                                                        : "hsl(220 13% 91%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Form Content */}
                <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(0 0% 99%)" }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
                        >
                            {/* Step 1: Contact Information */}
                            {currentStep === 1 && (
                                <div>
                                    <h2 className="text-3xl font-bold mb-8" style={{ color: "hsl(225 49% 13%)" }}>
                                        Contact Information
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { name: "companyName", label: "Company Name", icon: Building2 },
                                            { name: "contactPerson", label: "Contact Person", icon: User },
                                            { name: "email", label: "Email", icon: Mail },
                                            { name: "phone", label: "Phone", icon: Phone },
                                            { name: "country", label: "Country/Region", icon: Globe, isSelect: true },
                                            { name: "website", label: "Company Website", icon: Globe },
                                        ].map((field) => {
                                            const Icon = field.icon;
                                            return (
                                                <motion.div
                                                    key={field.name}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 }}
                                                    className={field.name === "country" ? "md:col-span-2" : ""}
                                                >
                                                    <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: "hsl(225 49% 13%)" }}>
                                                        <Icon className="w-4 h-4" style={{ color: "hsl(20 96% 54%)" }} />
                                                        {field.label} {field.name !== "website" && "*"}
                                                    </label>
                                                    {field.isSelect ? (
                                                        <select
                                                            name={field.name}
                                                            value={formData[field.name as keyof ContactData]}
                                                            onChange={handleContactChange}
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
                                                        >
                                                            <option value="">Select a country</option>
                                                            <option value="US">United States</option>
                                                            <option value="UK">United Kingdom</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="IN">India</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    ) : (
                                                        <input
                                                            type={field.name === "email" ? "email" : "text"}
                                                            name={field.name}
                                                            value={formData[field.name as keyof ContactData]}
                                                            onChange={handleContactChange}
                                                            placeholder={`Enter ${field.label.toLowerCase()}`}
                                                            className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                                                            style={{
                                                                borderColor: "hsl(220 13% 91%)",
                                                                backgroundColor: "hsl(0 0% 100%)",
                                                            }}
                                                            onFocus={(e) => {
                                                                e.currentTarget.style.borderColor = "hsl(20 96% 54%)";
                                                                e.currentTarget.style.boxShadow = "0 0 0 3px hsl(20 100% 97%)";
                                                            }}
                                                            onBlur={(e) => {
                                                                e.currentTarget.style.borderColor = "hsl(220 13% 91%)";
                                                                e.currentTarget.style.boxShadow = "none";
                                                            }}
                                                        />
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Role Requirements */}
                            {currentStep === 2 && (
                                <div>
                                    <h2 className="text-3xl font-bold mb-8" style={{ color: "hsl(225 49% 13%)" }}>
                                        Role Requirements
                                    </h2>

                                    <div className="space-y-8">
                                        {roles.map((role, roleIndex) => (
                                            <motion.div
                                                key={roleIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: roleIndex * 0.1 }}
                                                className="p-6 rounded-xl border-2"
                                                style={{
                                                    borderColor: "hsl(220 13% 91%)",
                                                    background: "hsl(0 0% 100%)",
                                                }}
                                            >
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="text-lg font-bold" style={{ color: "hsl(225 49% 13%)" }}>
                                                        Role {roleIndex + 1}
                                                    </h3>
                                                    {roles.length > 1 && (
                                                        <button
                                                            onClick={() => removeRole(roleIndex)}
                                                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                        >
                                                            <X className="w-5 h-5 text-red-500" />
                                                        </button>
                                                    )}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {[
                                                        { field: "jobTitle", label: "Job Title" },
                                                        { field: "positions", label: "Number of Positions" },
                                                        {
                                                            field: "employmentType",
                                                            label: "Employment Type",
                                                            isSelect: true,
                                                            options: ["Full-Time", "Part-Time", "Contract", "Dedicated Resource", "Employer of Record"],
                                                        },
                                                        {
                                                            field: "experienceLevel",
                                                            label: "Experience Level",
                                                            isSelect: true,
                                                            options: ["Junior", "Mid-Level", "Senior", "Lead"],
                                                        },
                                                        { field: "skills", label: "Required Skills", isLarge: true },
                                                        { field: "timezone", label: "Preferred Time Zone" },
                                                        { field: "startDate", label: "Expected Start Date" },
                                                        { field: "budget", label: "Budget Range" },
                                                    ].map((item: any) => (
                                                        <motion.div
                                                            key={item.field}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className={item.isLarge ? "md:col-span-2" : ""}
                                                        >
                                                            <label className="text-sm font-semibold block mb-2" style={{ color: "hsl(225 49% 13%)" }}>
                                                                {item.label} *
                                                            </label>
                                                            {item.isSelect ? (
                                                                <select
                                                                    value={role[item.field as keyof RoleData]}
                                                                    onChange={(e) =>
                                                                        handleRoleChange(roleIndex, item.field as keyof RoleData, e.target.value)
                                                                    }
                                                                    className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all text-sm"
                                                                    style={{
                                                                        borderColor: "hsl(220 13% 91%)",
                                                                        backgroundColor: "hsl(0 0% 100%)",
                                                                    }}
                                                                >
                                                                    <option value="">Select {item.label.toLowerCase()}</option>
                                                                    {item.options.map((opt: string) => (
                                                                        <option key={opt} value={opt}>
                                                                            {opt}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            ) : (
                                                                <input
                                                                    type={item.field === "startDate" ? "date" : "text"}
                                                                    value={role[item.field as keyof RoleData]}
                                                                    onChange={(e) =>
                                                                        handleRoleChange(roleIndex, item.field as keyof RoleData, e.target.value)
                                                                    }
                                                                    placeholder={`Enter ${item.label.toLowerCase()}`}
                                                                    className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all text-sm"
                                                                    style={{
                                                                        borderColor: "hsl(220 13% 91%)",
                                                                        backgroundColor: "hsl(0 0% 100%)",
                                                                    }}
                                                                />
                                                            )}
                                                        </motion.div>
                                                    ))}

                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="md:col-span-2"
                                                    >
                                                        <label className="text-sm font-semibold block mb-2" style={{ color: "hsl(225 49% 13%)" }}>
                                                            Job Description / Details
                                                        </label>
                                                        <textarea
                                                            value={role.description}
                                                            onChange={(e) =>
                                                                handleRoleChange(roleIndex, "description", e.target.value)
                                                            }
                                                            placeholder="Enter job description and key requirements..."
                                                            rows={4}
                                                            className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all text-sm resize-none"
                                                            style={{
                                                                borderColor: "hsl(220 13% 91%)",
                                                                backgroundColor: "hsl(0 0% 100%)",
                                                            }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={addRole}
                                        className="mt-8 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 w-full md:w-auto border-2"
                                        style={{
                                            borderColor: "hsl(20 96% 54%)",
                                            color: "hsl(20 96% 54%)",
                                            background: "hsl(20 100% 97%)",
                                        }}
                                    >
                                        <Plus className="w-5 h-5" />
                                        Add Another Role
                                    </motion.button>
                                </div>
                            )}

                            {/* Step 3: Review & Submit */}
                            {currentStep === 3 && (
                                <div>
                                    <h2 className="text-3xl font-bold mb-8" style={{ color: "hsl(225 49% 13%)" }}>
                                        Review & Submit
                                    </h2>

                                    {/* Contact Summary */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-6 rounded-xl mb-6"
                                        style={{ backgroundColor: "hsl(20 100% 97%)" }}
                                    >
                                        <h3 className="font-bold mb-4" style={{ color: "hsl(225 49% 13%)" }}>
                                            Contact Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p style={{ color: "hsl(210 22% 33%)" }}>Company: {formData.companyName}</p>
                                                <p style={{ color: "hsl(210 22% 33%)" }}>Contact: {formData.contactPerson}</p>
                                            </div>
                                            <div>
                                                <p style={{ color: "hsl(210 22% 33%)" }}>Email: {formData.email}</p>
                                                <p style={{ color: "hsl(210 22% 33%)" }}>Phone: {formData.phone}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Roles Summary */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-6 rounded-xl mb-6"
                                        style={{ backgroundColor: "hsl(20 100% 97%)" }}
                                    >
                                        <h3 className="font-bold mb-4" style={{ color: "hsl(225 49% 13%)" }}>
                                            Roles ({roles.length})
                                        </h3>
                                        <div className="space-y-3">
                                            {roles.map((role, idx) => (
                                                <p key={idx} style={{ color: "hsl(210 22% 33%)" }} className="text-sm">
                                                    <span className="font-semibold">{role.jobTitle}</span> (
                                                    {role.positions} positions, {role.employmentType}, {role.experienceLevel})
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Additional Notes */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6"
                                    >
                                        <label className="text-sm font-semibold block mb-2" style={{ color: "hsl(225 49% 13%)" }}>
                                            Additional Notes
                                        </label>
                                        <textarea
                                            value={additionalNotes}
                                            onChange={(e) => setAdditionalNotes(e.target.value)}
                                            placeholder="Any additional information about your hiring needs..."
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all resize-none"
                                            style={{
                                                borderColor: "hsl(220 13% 91%)",
                                                backgroundColor: "hsl(0 0% 100%)",
                                            }}
                                        />
                                    </motion.div>

                                    {/* Agreement Checkbox */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-start gap-3 mb-8 p-4 rounded-lg"
                                        style={{ backgroundColor: "hsl(0 0% 99%)" }}
                                    >
                                        <input
                                            type="checkbox"
                                            id="agree"
                                            checked={agreeContact}
                                            onChange={(e) => setAgreeContact(e.target.checked)}
                                            className="w-5 h-5 rounded mt-1 cursor-pointer"
                                            style={{ accentColor: "hsl(20 96% 54%)" }}
                                        />
                                        <label htmlFor="agree" className="text-sm cursor-pointer" style={{ color: "hsl(210 22% 33%)" }}>
                                            I agree to be contacted by CorpTalents regarding my hiring requirements and receive updates about my application.
                                        </label>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 mt-8">
                            <motion.button
                                whileHover={{ scale: currentStep > 1 ? 1.05 : 1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                                disabled={currentStep === 1}
                                className="px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all"
                                style={{
                                    background: currentStep > 1 ? "hsl(220 13% 91%)" : "hsl(220 13% 96%)",
                                    color: "hsl(225 49% 13%)",
                                    opacity: currentStep === 1 ? 0.5 : 1,
                                }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    if (currentStep < 3) {
                                        if (validateStep()) {
                                            setCurrentStep(currentStep + 1);
                                        } else {
                                            alert("Please fill in all required fields.");
                                        }
                                    } else {
                                        handleSubmit();
                                    }
                                }}
                                className="flex-1 px-8 py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2"
                                style={{
                                    background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))",
                                }}
                            >
                                {currentStep < 3 ? (
                                    <>
                                        Next
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                ) : (
                                    <>
                                        Submit Request
                                        <CheckCircle2 className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </section>
            </main>
            <CorpTalentsFooter />
        </>
    );
}
