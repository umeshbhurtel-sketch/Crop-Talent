// import { Layout } from "@/components/layout/Layout";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Helmet } from "react-helmet";
// import { FileText, Briefcase, CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { toast } from "@/hooks/use-toast";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { sendEmail, EmailTemplates } from "@/lib/email";

// // 🔥 Firestore
// import { db } from "@/lib/firebase"; // adjust path to where you export `db`
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// const step1Schema = z.object({
//   companyName: z.string().min(1, "Company name is required"),
//   contactPerson: z.string().min(1, "Contact person is required"),
//   email: z.string().email("Please enter a valid email address"),
//   phone: z.string().min(1, "Phone number is required"),
//   country: z.string().min(1, "Please select a country"),
// });

// const step2Schema = z.object({
//   jobRole: z.string().min(1, "Job role is required"),
//   experience: z.string().min(1, "Please select experience level"),
//   numberOfHires: z.string().optional(),
//   requiredSkills: z.string().min(1, "Required skills are required"),
//   timeline: z.string().optional(),
// });

// const step3Schema = z.object({
//   gdprConsent: z.boolean().refine((val) => val === true, {
//     message: "You must agree to the terms to continue",
//   }),
//   // Honeypot (hidden)
//   website: z.string().optional(),
// });

// type Step1Data = z.infer<typeof step1Schema>;
// type Step2Data = z.infer<typeof step2Schema>;
// type Step3Data = z.infer<typeof step3Schema>;

// const HireTalent = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<Partial<Step1Data & Step2Data & Step3Data>>({});

//   const step1Form = useForm<Step1Data>({
//     resolver: zodResolver(step1Schema),
//     defaultValues: formData as Step1Data,
//   });

//   const step2Form = useForm<Step2Data>({
//     resolver: zodResolver(step2Schema),
//     defaultValues: formData as Step2Data,
//   });

//   const step3Form = useForm<Step3Data>({
//     resolver: zodResolver(step3Schema),
//     defaultValues: { gdprConsent: false, website: "" },
//   });

//   const onStep1Submit = (data: Step1Data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setCurrentStep(2);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const onStep2Submit = (data: Step2Data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setCurrentStep(3);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const onStep3Submit = async (data: Step3Data) => {
//     // 🚫 Honeypot: if filled, silently ignore
//     if (data.website && data.website.trim().length > 0) return;

//     const finalData = { ...formData, ...data };
//     setIsSubmitting(true);

//     try {
//       // Map to Firestore schema (clientLeads)
//       const payload = {
//         companyName: String(finalData.companyName || "").trim(),
//         contactPerson: String(finalData.contactPerson || "").trim(),
//         email: String(finalData.email || "").trim(),
//         phone: String(finalData.phone || "").trim(),
//         countryRegion: String(finalData.country || "").trim(), // rules expect countryRegion (string)
//         jobRole: String(finalData.jobRole || "").trim(),
//         experience: String(finalData.experience || "").trim(),
//         numberOfHires:
//           finalData.numberOfHires && String(finalData.numberOfHires).trim() !== ""
//             ? parseInt(String(finalData.numberOfHires), 10)
//             : null, // int or null as per rules
//         requiredSkills: String(finalData.requiredSkills || "").trim(),
//         timeline: String(finalData.timeline || "").trim(),
//         gdprConsent: Boolean(finalData.gdprConsent),
//         createdAt: serverTimestamp(),
//         source: window.location.href,
//         userAgent: navigator.userAgent,
//       };

//       await addDoc(collection(db, "clientLeads"), payload);

//       // 📧 EmailJS admin notification (non-blocking)
//       sendEmail(EmailTemplates.HIRE, {
//         companyName: payload.companyName,
//         contactPerson: payload.contactPerson,
//         email: payload.email,
//         phone: payload.phone,
//         countryRegion: payload.countryRegion,
//         jobRole: payload.jobRole,
//         experience: payload.experience,
//         numberOfHires: payload.numberOfHires ?? "N/A",
//         requiredSkills: payload.requiredSkills,
//         timeline: payload.timeline || "Not specified",
//         time: new Date().toLocaleString(),
//         source: window.location.href,
//         userAgent: navigator.userAgent,
//       });

//       setIsSubmitted(true);
//       toast({
//         title: "Application submitted successfully!",
//         description: "Our team will reach out to you shortly.",
//       });
//       // Reset forms & local state
//       step1Form.reset();
//       step2Form.reset();
//       step3Form.reset();
//       setFormData({});
//       setCurrentStep(1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } catch (err: any) {
//       console.error(err);
//       toast({
//         title: "Submission failed",
//         description: err?.message || "Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const goBack = () => {
//     setCurrentStep((prev) => prev - 1);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <Layout>
//       <Helmet>
//         <title>Hire Talent | CorpTalents</title>
//         <meta
//           name="description"
//           content="Find and hire top-tier IT professionals globally. Complete our multi-step form to get started with CorpTalents."
//         />
//       </Helmet>

//       {/* Header */}
//       <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground">
//         <div className="container mx-auto container-padding">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Hire Global Talent</h1>
//             <p className="text-xl opacity-90">
//               Complete the form below to tell us about your hiring needs. We'll match you with top-tier professionals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="section-padding">
//         <div className="container mx-auto container-padding">
//           <div className="max-w-3xl mx-auto">
//             {/* Progress Indicator */}
//             <motion.div className="mb-12">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex flex-col items-center flex-1">
//                   <motion.div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
//                       currentStep >= 1 ? "bg-[hsl(24,93%,54%)] text-white" : "bg-muted text-muted-foreground"
//                     }`}
//                     animate={{ scale: currentStep === 1 ? [1, 1.1, 1] : 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {currentStep > 1 ? <CheckCircle2 className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
//                   </motion.div>
//                   <span className="text-sm font-medium">Contact Info</span>
//                 </div>
//                 <motion.div
//                   className="h-0.5 flex-1 mx-4 bg-border relative overflow-hidden rounded-full"
//                   initial={false}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-[hsl(24,93%,54%)]"
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: currentStep >= 2 ? 1 : 0 }}
//                     transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//                     style={{ transformOrigin: "left" }}
//                   />
//                 </motion.div>
//                 <div className="flex flex-col items-center flex-1">
//                   <motion.div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
//                       currentStep >= 2 ? "bg-[hsl(24,93%,54%)] text-white" : "bg-muted text-muted-foreground"
//                     }`}
//                     animate={{ scale: currentStep === 2 ? [1, 1.1, 1] : 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {currentStep > 2 ? <CheckCircle2 className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
//                   </motion.div>
//                   <span className="text-sm font-medium">Position Details</span>
//                 </div>
//                 <motion.div
//                   className="h-0.5 flex-1 mx-4 bg-border relative overflow-hidden rounded-full"
//                   initial={false}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-[hsl(24,93%,54%)]"
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: currentStep >= 3 ? 1 : 0 }}
//                     transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//                     style={{ transformOrigin: "left" }}
//                   />
//                 </motion.div>
//                 <div className="flex flex-col items-center flex-1">
//                   <motion.div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
//                       currentStep >= 3 ? "bg-[hsl(24,93%,54%)] text-white" : "bg-muted text-muted-foreground"
//                     }`}
//                     animate={{ scale: currentStep === 3 ? [1, 1.1, 1] : 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <CheckCircle2 className="w-6 h-6" />
//                   </motion.div>
//                   <span className="text-sm font-medium">Review & Submit</span>
//                 </div>
//               </div>
//               <div className="text-center text-sm text-muted-foreground">Step {currentStep} of 3</div>
//             </motion.div>

//             {!isSubmitted ? (
//               <Card className="p-8 shadow-[0_10px_30px_rgba(11,31,71,0.08)] rounded-[24px]">
//                 <AnimatePresence mode="wait">
//                   {/* Step 1: Contact Information */}
//                   {currentStep === 1 && (
//                     <motion.div
//                       key="step1"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                     >
//                       <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//                       <Form {...step1Form}>
//                         <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6">
//                           <FormField
//                             control={step1Form.control}
//                             name="companyName"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel>Company Name *</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="Your company name" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <FormField
//                             control={step1Form.control}
//                             name="contactPerson"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel>Contact Person *</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="Full name" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <div className="grid md:grid-cols-2 gap-6">
//                             <FormField
//                               control={step1Form.control}
//                               name="email"
//                               render={({ field }) => (
//                                 <FormItem>
//                                   <FormLabel>Email *</FormLabel>
//                                   <FormControl>
//                                     <Input type="email" placeholder="your.email@company.com" {...field} />
//                                   </FormControl>
//                                   <FormMessage />
//                                 </FormItem>
//                               )}
//                             />

//                             <FormField
//                               control={step1Form.control}
//                               name="phone"
//                               render={({ field }) => (
//                                 <FormItem>
//                                   <FormLabel>Phone *</FormLabel>
//                                   <FormControl>
//                                     <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
//                                   </FormControl>
//                                   <FormMessage />
//                                 </FormItem>
//                               )}
//                             />
//                           </div>

//                           <FormField
//                             control={step1Form.control}
//                             name="country"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel>Country / Region *</FormLabel>
//                                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                   <FormControl>
//                                     <SelectTrigger>
//                                       <SelectValue placeholder="Select a country" />
//                                     </SelectTrigger>
//                                   </FormControl>
//                                   <SelectContent>
//                                     <SelectItem value="US">United States</SelectItem>
//                                     <SelectItem value="UK">United Kingdom</SelectItem>
//                                     <SelectItem value="CA">Canada</SelectItem>
//                                     <SelectItem value="AU">Australia</SelectItem>
//                                     <SelectItem value="DE">Germany</SelectItem>
//                                     <SelectItem value="FR">France</SelectItem>
//                                     <SelectItem value="IN">India</SelectItem>
//                                     <SelectItem value="NP">Nepal</SelectItem>
//                                     <SelectItem value="OTHER">Other</SelectItem>
//                                   </SelectContent>
//                                 </Select>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               size="lg"
//                               className="w-full bg-[hsl(24,93%,54%)] hover:bg-[hsl(24,93%,48%)] text-white shadow-lg hover:shadow-[0_0_24px_rgba(245,130,32,0.35)] transition-all duration-300"
//                             >
//                               Next — Hiring Needs
//                               <ArrowRight className="ml-2 h-4 w-4" />
//                             </Button>
//                           </motion.div>
//                         </form>
//                       </Form>
//                     </motion.div>
//                   )}

//                   {/* Step 2: Position Details */}
//                   {currentStep === 2 && (
//                     <motion.div
//                       key="step2"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                     >
//                       <h2 className="text-2xl font-bold mb-6">Position Details</h2>
//                       <Form {...step2Form}>
//                         <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
//                           <FormField
//                             control={step2Form.control}
//                             name="jobRole"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel>Job Role *</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="e.g., Senior Full Stack Developer" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <div className="grid md:grid-cols-2 gap-6">
//                             <FormField
//                               control={step2Form.control}
//                               name="experience"
//                               render={({ field }) => (
//                                 <FormItem>
//                                   <FormLabel>Experience Level *</FormLabel>
//                                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                     <FormControl>
//                                       <SelectTrigger>
//                                         <SelectValue placeholder="Select experience level" />
//                                       </SelectTrigger>
//                                     </FormControl>
//                                     <SelectContent>
//                                       <SelectItem value="Interns">Intern</SelectItem>
//                                       <SelectItem value="Fresher (1–2 years)">Fresher (1–2 years)</SelectItem>
//                                       <SelectItem value="Medium (2–4 years)">Medium (2–4 years)</SelectItem>
//                                       <SelectItem value="Pro (4+ years)">Pro (4+ years)</SelectItem>
//                                     </SelectContent>
//                                   </Select>
//                                   <FormMessage />
//                                 </FormItem>
//                               )}
//                             />

//                             <FormField
//                               control={step2Form.control}
//                               name="numberOfHires"
//                               render={({ field }) => (
//                                 <FormItem>
//                                   <FormLabel>Number of Hires</FormLabel>
//                                   <FormControl>
//                                     <Input type="number" min="1" placeholder="e.g., 3" {...field} />
//                                   </FormControl>
//                                   <FormMessage />
//                                 </FormItem>
//                               )}
//                             />
//                           </div>

//                           <FormField
//                             control={step2Form.control}
//                             name="requiredSkills"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel>Required Skills *</FormLabel>
//                                 <FormControl>
//                                   <Textarea
//                                     placeholder="e.g., React, Node.js, TypeScript, AWS, PostgreSQL"
//                                     rows={4}
//                                     {...field}
//                                   />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <FormField
//                             control={step2Form.control}
//                             name="timeline"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel>Timeline</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="e.g., ASAP or Start in 2 weeks" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <div className="flex gap-4">
//                             <Button type="button" variant="outline" onClick={goBack} className="flex-1">
//                               <ArrowLeft className="mr-2 h-4 w-4" />
//                               Back
//                             </Button>
//                             <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 className="w-full bg-[hsl(24,93%,54%)] hover:bg-[hsl(24,93%,48%)] text-white shadow-lg hover:shadow-[0_0_24px_rgba(245,130,32,0.35)] transition-all duration-300"
//                               >
//                                 Next — Review & Submit
//                                 <ArrowRight className="ml-2 h-4 w-4" />
//                               </Button>
//                             </motion.div>
//                           </div>
//                         </form>
//                       </Form>
//                     </motion.div>
//                   )}

//                   {/* Step 3: Review & Submit */}
//                   {currentStep === 3 && (
//                     <motion.div
//                       key="step3"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                     >
//                       <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>

//                       <div className="space-y-6 mb-8">
//                         <div className="border rounded-lg p-4">
//                           <div className="flex items-center justify-between mb-4">
//                             <h3 className="font-semibold">Contact Information</h3>
//                             <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
//                               Edit
//                             </Button>
//                           </div>
//                           <dl className="grid grid-cols-2 gap-3 text-sm">
//                             <div>
//                               <dt className="text-muted-foreground">Company</dt>
//                               <dd className="font-medium">{formData.companyName}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Contact Person</dt>
//                               <dd className="font-medium">{formData.contactPerson}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Email</dt>
//                               <dd className="font-medium">{formData.email}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Phone</dt>
//                               <dd className="font-medium">{formData.phone}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Country / Region</dt>
//                               <dd className="font-medium">{formData.country}</dd>
//                             </div>
//                           </dl>
//                         </div>

//                         <div className="border rounded-lg p-4">
//                           <div className="flex items-center justify-between mb-4">
//                             <h3 className="font-semibold">Position Details</h3>
//                             <Button variant="ghost" size="sm" onClick={() => setCurrentStep(2)}>
//                               Edit
//                             </Button>
//                           </div>
//                           <dl className="space-y-3 text-sm">
//                             <div>
//                               <dt className="text-muted-foreground">Job Role</dt>
//                               <dd className="font-medium">{formData.jobRole}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Experience Level</dt>
//                               <dd className="font-medium">{formData.experience}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Number of Hires</dt>
//                               <dd className="font-medium">{formData.numberOfHires || "-"}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Required Skills</dt>
//                               <dd className="font-medium whitespace-pre-wrap">{formData.requiredSkills}</dd>
//                             </div>
//                             <div>
//                               <dt className="text-muted-foreground">Timeline</dt>
//                               <dd className="font-medium">{formData.timeline || "-"}</dd>
//                             </div>
//                           </dl>
//                         </div>
//                       </div>

//                       <Form {...step3Form}>
//                         <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-6">
//                           {/* Honeypot (hidden) */}
//                           <input
//                             type="text"
//                             tabIndex={-1}
//                             autoComplete="off"
//                             className="hidden"
//                             {...step3Form.register("website")}
//                           />

//                           <FormField
//                             control={step3Form.control}
//                             name="gdprConsent"
//                             render={({ field }) => (
//                               <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
//                                 <FormControl>
//                                   <Checkbox checked={field.value} onCheckedChange={field.onChange} />
//                                 </FormControl>
//                                 <div className="space-y-1 leading-none">
//                                   <FormLabel>
//                                     I consent to CorpTalents processing my data and agree to be contacted per
//                                     the Privacy Policy. *
//                                   </FormLabel>
//                                   <FormMessage />
//                                 </div>
//                               </FormItem>
//                             )}
//                           />

//                           <div className="flex gap-4">
//                             <Button type="button" variant="outline" onClick={goBack} className="flex-1">
//                               <ArrowLeft className="mr-2 h-4 w-4" />
//                               Back
//                             </Button>
//                             <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 className="w-full bg-[hsl(24,93%,54%)] hover:bg-[hsl(24,93%,48%)] text-white shadow-lg hover:shadow-[0_0_24px_rgba(245,130,32,0.35)] transition-all duration-300"
//                                 disabled={isSubmitting}
//                               >
//                                 {isSubmitting ? (
//                                   <>
//                                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                                     Submitting...
//                                   </>
//                                 ) : (
//                                   "Submit Application"
//                                 )}
//                               </Button>
//                             </motion.div>
//                           </div>
//                         </form>
//                       </Form>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </Card>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, type: "spring" }}
//               >
//                 <Card className="p-12 text-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                     className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
//                   >
//                     <CheckCircle2 className="w-10 h-10 text-primary" />
//                   </motion.div>
//                   <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
//                   <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
//                     Thank you for contacting CorpTalents! Our team will reach out shortly to discuss your hiring
//                     needs.
//                   </p>
//                   <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
//                 </Card>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default HireTalent;
