import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet";
import {
  FileText,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Plus,
  Copy,
  Trash2,
  Building2,
} from "lucide-react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail, EmailTemplates } from "@/lib/email";

// 🔥 Firestore
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/** ========= THEME TOKENS (align to CorpTalents.solutions) =============
 * Using brand colors: primary #0376bb and secondary #68c8fe
 */
const COLOR_ACCENT = "hsl(201, 97%, 37%)"; // CorpTalents primary blue
const COLOR_ACCENT_HOVER = "hsl(201, 97%, 32%)";
const COLOR_HEADER_FROM = "rgb(6, 15, 32)"; // deep navy
const COLOR_HEADER_TO = "rgb(14, 30, 62)";
const CARD_SHADOW = "0 10px 30px rgba(11,31,71,0.10)";

/** ==================== ZOD SCHEMA ==================== */
const contactSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required"),
  contactPerson: z.string().trim().min(1, "Contact person is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(6, "Enter a valid phone"),
  country: z.string().trim().min(1, "Please select a country"),
});

const positionSchema = z
  .object({
    jobRole: z.string().trim().min(1, "Job role is required"),
    description: z.string().trim().min(10, "Describe the role (min 10 chars)"),
    experience: z.enum(["Intern", "Fresher (1–2 years)", "Medium (2–4 years)", "Pro (4+ years)"], {
      required_error: "Select experience level",
    }),
    skills: z.string().trim().min(1, "List core skills"),
    numHires: z.coerce.number().int().positive().min(1, "At least 1"),
    employmentType: z.enum(["Full-time", "Part-time", "Contract", "Freelance"], {
      required_error: "Select employment type",
    }),
    locationMode: z.enum(["Remote", "Hybrid", "Onsite"], { required_error: "Select location mode" }),
    locationCity: z.string().optional().default(""),
    timeline: z.string().optional().default(""),
    budgetMin: z.coerce.number().optional(),
    budgetMax: z.coerce.number().optional(),
    currency: z.enum(["USD", "EUR", "GBP", "AUD", "NPR", "INR"]).default("USD"),
  })
  .refine(
    (p) => {
      if ((p.budgetMin ?? null) === null && (p.budgetMax ?? null) === null) return true;
      if ((p.budgetMin ?? 0) > (p.budgetMax ?? 0)) return false;
      return true;
    },
    { message: "Budget min should be ≤ budget max", path: ["budgetMin"] },
  );

const reviewSchema = z.object({
  gdprConsent: z.boolean().refine((v) => v === true, "You must agree to proceed"),
  website: z.string().optional(), // honeypot
});

const formSchema = z.object({
  contact: contactSchema,
  positions: z.array(positionSchema).min(1, "Add at least one position"),
  review: reviewSchema,
});

type FormValues = z.infer<typeof formSchema>;

/** ==================== COMPONENT ==================== */
const HireTalentMulti = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      contact: {
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
      },
      positions: [
        {
          jobRole: "",
          description: "",
          experience: "Medium (2–4 years)",
          skills: "",
          numHires: 1,
          employmentType: "Full-time",
          locationMode: "Remote",
          locationCity: "",
          timeline: "",
          budgetMin: undefined,
          budgetMax: undefined,
          currency: "USD",
        },
      ],
      review: { gdprConsent: false, website: "" },
    },
  });

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: "positions",
  });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const goto = async (next: 1 | 2 | 3) => {
    // Validate step before moving forward
    if (step === 1 && next > 1) {
      const ok = await trigger("contact");
      if (!ok) return toast({ title: "Please complete Contact Info", variant: "destructive" });
    }
    if (step === 2 && next > 2) {
      const ok = await trigger("positions");
      if (!ok) return toast({ title: "Please fix Position Details", variant: "destructive" });
    }
    setStep(next);
    scrollTop();
  };

  const onSubmit = async (data: FormValues) => {
    // Honeypot
    if (data.review.website && data.review.website.trim() !== "") return;

    setIsSubmitting(true);
    try {
      const toNumberOrNull = (v: any) => {
        if (v === undefined || v === "" || v === null) return null;
        const n = Number(v);
        return Number.isNaN(n) ? null : n;
      };

      const sanitizeStr = (v: any) => (typeof v === "string" ? v.trim() : (v ?? null));

      const payload = {
        companyName: sanitizeStr(data.contact.companyName),
        contactPerson: sanitizeStr(data.contact.contactPerson),
        email: sanitizeStr(data.contact.email),
        phone: sanitizeStr(data.contact.phone),
        countryRegion: sanitizeStr(data.contact.country),
        positions: data.positions.map((p) => {
          const min = toNumberOrNull(p.budgetMin);
          const max = toNumberOrNull(p.budgetMax);
          return {
            jobRole: sanitizeStr(p.jobRole),
            description: sanitizeStr(p.description),
            experience: p.experience,
            requiredSkills: sanitizeStr(p.skills),
            numberOfHires: toNumberOrNull(p.numHires) ?? 1,
            employmentType: p.employmentType,
            locationMode: p.locationMode,
            locationCity: sanitizeStr(p.locationCity),
            timeline: sanitizeStr(p.timeline),
            // ensure budget object contains only plain numbers or nulls
            budget: min !== null || max !== null ? { min, max, currency: p.currency ?? null } : null,
          };
        }),
        gdprConsent: !!data.review.gdprConsent,
        // Use concrete timestamp instead of serverTimestamp
        createdAt: new Date(),
        // plain strings for diagnostics
        source: typeof window !== "undefined" ? window.location.href : null,
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      };

      // Debug logging
      console.log("=== FORM SUBMISSION START ===");
      console.log("Prepared payload:", JSON.stringify(payload, null, 2));

      console.log("TOP KEYS:", Object.keys(payload));

      console.log("createdAt raw:", payload.createdAt, " instanceof Date?", payload.createdAt instanceof Date);

      payload.positions.forEach((p: any, i: number) => {
        console.log("POS KEYS", i, Object.keys(p));
        console.log("budget value", i, p.budget);
      });

      // Attempt write to clientLeads collection
      const docRef = await addDoc(collection(db, "clientLeadsMulti"), payload);
      console.log("✅ SUCCESS! Document ID:", docRef.id);

      // Build roles summary for email (non-blocking)
      const rolesTable = payload.positions
        .map((r: any, i: number) => {
          const budget =
            r.budget && (r.budget.min || r.budget.max)
              ? `${r.budget.min ?? ""}${r.budget.min ? " - " : ""}${r.budget.max ?? ""} ${r.budget.currency}`
              : "N/A";
          const loc = [r.locationMode, r.locationCity].filter(Boolean).join(" • ");
          return [
            `#${i + 1}: ${r.jobRole}`,
            `Experience: ${r.experience}`,
            `Hires: ${r.numberOfHires}`,
            `Type: ${r.employmentType}`,
            `Location: ${loc || r.locationMode}`,
            `Budget: ${budget}`,
            `Skills: ${r.requiredSkills}`,
            `Timeline: ${r.timeline || "N/A"}`,
            `Desc: ${r.description}`,
          ].join("\n");
        })
        .join("\n\n");

      try {
        sendEmail(EmailTemplates.HIRE, {
          companyName: payload.companyName,
          contactPerson: payload.contactPerson,
          email: payload.email,
          phone: payload.phone,
          countryRegion: payload.countryRegion,
          time: new Date().toLocaleString(),
          source: payload.source,
          userAgent: payload.userAgent,
          rolesSummary: rolesTable,
          totalRoles: String(payload.positions.length),
        });
      } catch (e) {
        console.warn("sendEmail failed (non-blocking):", e);
      }

      setSubmitted(true);
      toast({ title: "Application submitted!", description: "We’ll reach out shortly." });
      reset();
      setStep(1);
      scrollTop();
    } catch (err: any) {
      console.error("=== FIREBASE SUBMISSION ERROR ===");
      console.error("Error code:", err.code);
      console.error("Error message:", err.message);
      console.error("Full error object:", err);

      toast({
        title: "Submission failed",
        description: `${err.code || "Error"}: ${err.message || "Please check console for details"}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const onSubmit = async (data: FormValues) => {
  //   // Honeypot
  //   if (data.review.website && data.review.website.trim() !== "") return;

  //   setIsSubmitting(true);
  //   try {
  //     const payload = {
  //       companyName: data.contact.companyName.trim(),
  //       contactPerson: data.contact.contactPerson.trim(),
  //       email: data.contact.email.trim(),
  //       phone: data.contact.phone.trim(),
  //       countryRegion: data.contact.country.trim(),
  //       positions: data.positions.map((p) => ({
  //         jobRole: p.jobRole.trim(),
  //         description: p.description.trim(),
  //         experience: p.experience,
  //         requiredSkills: p.skills.trim(),
  //         numberOfHires: p.numHires,
  //         employmentType: p.employmentType,
  //         locationMode: p.locationMode,
  //         locationCity: p.locationCity?.trim() || null,
  //         timeline: p.timeline?.trim() || null,
  //         budget: (p.budgetMin ?? null) || (p.budgetMax ?? null)
  //           ? {
  //               min: p.budgetMin ?? null,
  //               max: p.budgetMax ?? null,
  //               currency: p.currency,
  //             }
  //           : null,
  //       })),
  //       gdprConsent: data.review.gdprConsent,
  //       createdAt: serverTimestamp(),
  //       source: window.location.href,
  //       userAgent: navigator.userAgent,
  //     };

  //     await addDoc(collection(db, "clientLeads"), payload);

  //     // Build roles summary for email
  //     const rolesTable = payload.positions
  //       .map((r, i) => {
  //         const budget =
  //           r.budget && (r.budget.min || r.budget.max)
  //             ? `${r.budget.min ?? ""}${r.budget.min ? " - " : ""}${r.budget.max ?? ""} ${r.budget.currency}`
  //             : "N/A";
  //         const loc = [r.locationMode, r.locationCity].filter(Boolean).join(" • ");
  //         return [
  //           `#${i + 1}: ${r.jobRole}`,
  //           `Experience: ${r.experience}`,
  //           `Hires: ${r.numberOfHires}`,
  //           `Type: ${r.employmentType}`,
  //           `Location: ${loc || r.locationMode}`,
  //           `Budget: ${budget}`,
  //           `Skills: ${r.requiredSkills}`,
  //           `Timeline: ${r.timeline || "N/A"}`,
  //           `Desc: ${r.description}`,
  //         ].join("\n");
  //       })
  //       .join("\n\n");

  //     // 📧 Admin email (non-blocking)
  //     sendEmail(EmailTemplates.HIRE, {
  //       companyName: payload.companyName,
  //       contactPerson: payload.contactPerson,
  //       email: payload.email,
  //       phone: payload.phone,
  //       countryRegion: payload.countryRegion,
  //       time: new Date().toLocaleString(),
  //       source: window.location.href,
  //       userAgent: navigator.userAgent,
  //       rolesSummary: rolesTable,
  //       totalRoles: String(payload.positions.length),
  //     });

  //     setSubmitted(true);
  //     toast({ title: "Application submitted!", description: "We’ll reach out shortly." });
  //     reset();
  //     setStep(1);
  //     scrollTop();
  //   } catch (err: any) {
  //     console.error(err);
  //     toast({
  //       title: "Submission failed",
  //       description: err?.message || "Please try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  /** ---------- Small helpers ---------- */
  const duplicateAt = (idx: number) => {
    const current = getValues(`positions.${idx}`);
    insert(idx + 1, { ...current, jobRole: `${current.jobRole} (Copy)` });
  };

  /** ---------- UI ---------- */
  return (
    <Layout>
      <Helmet>
        <title>Hire Talent | CorpTalents</title>
        <meta
          name="description"
          content="Share your hiring plan once—even for multiple roles. CorpTalents will source, vet, and match top talent globally."
        />
      </Helmet>

      {/* Header */}
      <section
        className="section-padding text-primary-foreground"
        style={{
          background: `linear-gradient(135deg, ${COLOR_HEADER_FROM}, ${COLOR_HEADER_TO})`,
        }}
      >
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <Building2 className="w-4 h-4" />
              Talent Acquisition Intake
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mt-5 mb-4">Hire Global Talent</h1>
            <p className="text-lg opacity-90">
              Add one or many roles in a single request. We’ll handle sourcing, vetting, and matching.
            </p>
          </div>
        </div>
      </section>

      {/* Progress / Stepper */}
      <section className="sticky top-0 z-30 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto container-padding py-3">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[
                { n: 1, label: "Contact", icon: FileText },
                { n: 2, label: "Roles", icon: Briefcase },
                { n: 3, label: "Review", icon: CheckCircle2 },
              ].map(({ n, label, icon: Icon }) => (
                <div key={n} className="flex-1 flex flex-col items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                      step >= n ? "text-white" : "text-muted-foreground"
                    }`}
                    style={{ background: step >= n ? COLOR_ACCENT : "var(--muted)" }}
                    animate={{ scale: step === n ? [1, 1.08, 1] : 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span className="text-xs">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 text-center text-xs text-muted-foreground">Step {step} of 3</div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <FormProvider {...methods}>
                <Form {...methods}>
                  <AnimatePresence mode="wait">
                    {/* STEP 1: CONTACT */}
                    {step === 1 && (
                      <motion.div
                        key="contact"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="p-8 rounded-[24px]" style={{ boxShadow: CARD_SHADOW }}>
                          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={control}
                              name="contact.companyName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your company name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={control}
                              name="contact.contactPerson"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Contact Person *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Full name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={control}
                              name="contact.email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="name@company.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={control}
                              name="contact.phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone *</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="+1 555 000 0000" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="md:col-span-2">
                              <FormField
                                control={control}
                                name="contact.country"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Country / Region *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select country" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {["US", "UK", "CA", "AU", "DE", "FR", "IN", "NP", "OTHER"].map((c) => (
                                          <SelectItem key={c} value={c}>
                                            {c === "US"
                                              ? "United States"
                                              : c === "UK"
                                                ? "United Kingdom"
                                                : c === "CA"
                                                  ? "Canada"
                                                  : c === "AU"
                                                    ? "Australia"
                                                    : c === "DE"
                                                      ? "Germany"
                                                      : c === "FR"
                                                        ? "France"
                                                        : c === "IN"
                                                          ? "India"
                                                          : c === "NP"
                                                            ? "Nepal"
                                                            : "Other"}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          <div className="mt-8">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                onClick={() => goto(2)}
                                size="lg"
                                className="w-full text-white"
                                style={{ background: COLOR_ACCENT }}
                              >
                                Next — Add Roles
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    )}

                    {/* STEP 2: POSITIONS */}
                    {step === 2 && (
                      <motion.div
                        key="roles"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="p-8 rounded-[24px]" style={{ boxShadow: CARD_SHADOW }}>
                          <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Positions to Fill</h2>
                            <div className="flex gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() =>
                                  append({
                                    jobRole: "",
                                    description: "",
                                    experience: "Medium (2–4 years)",
                                    skills: "",
                                    numHires: 1,
                                    employmentType: "Full-time",
                                    locationMode: "Remote",
                                    locationCity: "",
                                    timeline: "",
                                    budgetMin: undefined,
                                    budgetMax: undefined,
                                    currency: "USD",
                                  })
                                }
                              >
                                <Plus className="w-4 h-4 mr-1" /> Add Role
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-6">
                            {fields.map((field, idx) => (
                              <motion.div
                                key={field.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="border rounded-2xl p-6 relative"
                              >
                                <div className="flex items-center justify-between mb-4">
                                  <div className="font-semibold">Role #{idx + 1}</div>
                                  <div className="flex gap-2">
                                    <Button type="button" variant="secondary" onClick={() => duplicateAt(idx)}>
                                      <Copy className="w-4 h-4 mr-1" /> Duplicate
                                    </Button>
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      onClick={() => remove(idx)}
                                      disabled={fields.length === 1}
                                    >
                                      <Trash2 className="w-4 h-4 mr-1" />
                                      Remove
                                    </Button>
                                  </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.jobRole`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Job Role *</FormLabel>
                                        <FormControl>
                                          <Input placeholder="e.g., Senior Full Stack Developer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.experience`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Experience Level *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            <SelectItem value="Intern">Intern</SelectItem>
                                            <SelectItem value="Fresher (1–2 years)">Fresher (1–2 years)</SelectItem>
                                            <SelectItem value="Medium (2–4 years)">Medium (2–4 years)</SelectItem>
                                            <SelectItem value="Pro (4+ years)">Pro (4+ years)</SelectItem>
                                          </SelectContent>
                                        </Select>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.skills`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Required Skills *</FormLabel>
                                        <FormControl>
                                          <Input placeholder="React, Node.js, TypeScript, AWS…" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.numHires`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Number of Hires *</FormLabel>
                                        <FormControl>
                                          <Input type="number" min={1} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />

                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.employmentType`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Employment Type *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            <SelectItem value="Full-time">Full-time</SelectItem>
                                            <SelectItem value="Part-time">Part-time</SelectItem>
                                            <SelectItem value="Contract">Contract</SelectItem>
                                            <SelectItem value="Freelance">Freelance</SelectItem>
                                          </SelectContent>
                                        </Select>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.locationMode`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Location Mode *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Remote / Hybrid / Onsite" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            <SelectItem value="Remote">Remote</SelectItem>
                                            <SelectItem value="Hybrid">Hybrid</SelectItem>
                                            <SelectItem value="Onsite">Onsite</SelectItem>
                                          </SelectContent>
                                        </Select>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />

                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.locationCity`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>City / Time Zone</FormLabel>
                                        <FormControl>
                                          <Input placeholder="e.g., Kathmandu (GMT+5:45), Berlin (CET)" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={control}
                                    name={`positions.${idx}.timeline`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Timeline</FormLabel>
                                        <FormControl>
                                          <Input placeholder="ASAP, within 2 weeks, specific date…" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />

                                  <div className="grid grid-cols-3 gap-4 md:col-span-2">
                                    <FormField
                                      control={control}
                                      name={`positions.${idx}.budgetMin`}
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Budget Min</FormLabel>
                                          <FormControl>
                                            <Input type="number" min={0} {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={control}
                                      name={`positions.${idx}.budgetMax`}
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Budget Max</FormLabel>
                                          <FormControl>
                                            <Input type="number" min={0} {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={control}
                                      name={`positions.${idx}.currency`}
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Currency</FormLabel>
                                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                              <SelectTrigger>
                                                <SelectValue />
                                              </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                              {["USD", "EUR", "GBP", "AUD", "NPR", "INR"].map((c) => (
                                                <SelectItem key={c} value={c}>
                                                  {c}
                                                </SelectItem>
                                              ))}
                                            </SelectContent>
                                          </Select>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>

                                  <div className="md:col-span-2">
                                    <FormField
                                      control={control}
                                      name={`positions.${idx}.description`}
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Role Description *</FormLabel>
                                          <FormControl>
                                            <Textarea
                                              rows={5}
                                              placeholder="Scope, responsibilities, tech stack, deliverables…"
                                              {...field}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          <div className="mt-8 flex gap-4">
                            <Button type="button" variant="outline" onClick={() => goto(1)} className="flex-1">
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Back
                            </Button>
                            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                type="button"
                                onClick={() => goto(3)}
                                className="w-full text-white"
                                style={{ background: COLOR_ACCENT }}
                              >
                                Next — Review
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    )}

                    {/* STEP 3: REVIEW & SUBMIT */}
                    {step === 3 && (
                      <motion.div
                        key="review"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="p-8 rounded-[24px]" style={{ boxShadow: CARD_SHADOW }}>
                          <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>

                          <div className="space-y-6 mb-8">
                            <div className="border rounded-2xl p-4">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">Contact</h3>
                                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                                  Edit
                                </Button>
                              </div>
                              <dl className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <dt className="text-muted-foreground">Company</dt>
                                  <dd className="font-medium">{getValues("contact.companyName")}</dd>
                                </div>
                                <div>
                                  <dt className="text-muted-foreground">Contact Person</dt>
                                  <dd className="font-medium">{getValues("contact.contactPerson")}</dd>
                                </div>
                                <div>
                                  <dt className="text-muted-foreground">Email</dt>
                                  <dd className="font-medium">{getValues("contact.email")}</dd>
                                </div>
                                <div>
                                  <dt className="text-muted-foreground">Phone</dt>
                                  <dd className="font-medium">{getValues("contact.phone")}</dd>
                                </div>
                                <div className="md:col-span-2">
                                  <dt className="text-muted-foreground">Country / Region</dt>
                                  <dd className="font-medium">{getValues("contact.country")}</dd>
                                </div>
                              </dl>
                            </div>

                            <div className="border rounded-2xl p-4">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">Positions ({getValues("positions").length})</h3>
                                <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                                  Edit
                                </Button>
                              </div>
                              <div className="space-y-4">
                                {getValues("positions").map((p, i) => (
                                  <div key={i} className="rounded-xl border p-4">
                                    <div className="font-medium mb-2">
                                      #{i + 1} — {p.jobRole} ({p.experience}) • {p.employmentType}
                                    </div>
                                    <div className="text-sm grid md:grid-cols-2 gap-2">
                                      <div>
                                        <span className="text-muted-foreground">Skills:</span> {p.skills}
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Hires:</span> {p.numHires}
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Location:</span>{" "}
                                        {[p.locationMode, p.locationCity].filter(Boolean).join(" • ")}
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Timeline:</span> {p.timeline || "N/A"}
                                      </div>
                                      <div className="md:col-span-2">
                                        <span className="text-muted-foreground">Budget:</span>{" "}
                                        {p.budgetMin || p.budgetMax
                                          ? `${p.budgetMin ?? ""}${p.budgetMin ? " - " : ""}${p.budgetMax ?? ""} ${p.currency}`
                                          : "N/A"}
                                      </div>
                                      <div className="md:col-span-2 whitespace-pre-wrap">
                                        <span className="text-muted-foreground">Description:</span> {p.description}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Honeypot */}
                          <input
                            type="text"
                            autoComplete="off"
                            tabIndex={-1}
                            className="hidden"
                            {...methods.register("review.website")}
                          />

                          <FormField
                            control={control}
                            name="review.gdprConsent"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    I consent to CorpTalents processing my data and agree to be contacted per
                                    the Privacy Policy. *
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />

                          <div className="mt-6 flex gap-4">
                            <Button type="button" variant="outline" onClick={() => goto(2)} className="flex-1">
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Back
                            </Button>
                            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                type="button"
                                disabled={isSubmitting}
                                onClick={handleSubmit(onSubmit)}
                                className="w-full text-white"
                                style={{ background: COLOR_ACCENT }}
                              >
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting…
                                  </>
                                ) : (
                                  "Submit Application"
                                )}
                              </Button>
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Form>
              </FormProvider>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <Card className="p-12 text-center rounded-[24px]" style={{ boxShadow: CARD_SHADOW }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 240 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(245,130,32,0.12)" }}
                  >
                    <CheckCircle2 className="w-10 h-10" style={{ color: COLOR_ACCENT }} />
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                    We’ve received your hiring brief. Our team will contact you shortly to confirm details and next
                    steps.
                  </p>
                  <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HireTalentMulti;
