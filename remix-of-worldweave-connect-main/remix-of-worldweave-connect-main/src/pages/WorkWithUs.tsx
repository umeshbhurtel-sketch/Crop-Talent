import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet";
import { User, Briefcase, CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 Firestore
import { db } from "@/lib/firebase"; // adjust path to where you export `db`
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  currentRole: z.string().optional(),
  country: z.string().min(1, "Please select a country"),
});

const step2Schema = z.object({
  skills: z.string().min(1, "Skills are required"),
  experienceLevel: z.string().min(1, "Please select experience level"),
  preferredIndustries: z.array(z.string()).min(1, "Select at least one industry"),
});

const step3Schema = z.object({
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms to continue",
  }),
  // Honeypot (hidden)
  website: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

const industries = ["InsurTech", "HealthTech", "EdTech", "E-Commerce", "FinTech", "SaaS", "Other"];

const WorkWithUs = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Step1Data & Step2Data & Step3Data>>({
    preferredIndustries: [],
  });

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: formData as Step1Data,
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      skills: (formData as Step2Data)?.skills || "",
      experienceLevel: (formData as Step2Data)?.experienceLevel || "",
      preferredIndustries: (formData as Step2Data)?.preferredIndustries || [],
    },
  });

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: { gdprConsent: false, website: "" },
  });

  const onStep1Submit = (data: Step1Data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onStep2Submit = (data: Step2Data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onStep3Submit = async (data: Step3Data) => {
    // 🚫 Honeypot: if filled, silently ignore
    if (data.website && data.website.trim().length > 0) return;

    const finalData = { ...formData, ...data };
    setIsSubmitting(true);

    try {
      // Map to Firestore schema (candidateLeads)
      const payload = {
        name: String(finalData.name || "").trim(),
        email: String(finalData.email || "").trim(),
        phone: String(finalData.phone || "").trim(),
        currentRole: finalData.currentRole ? String(finalData.currentRole).trim() : null,
        countryRegion: String(finalData.country || "").trim(), // rules expect `countryRegion`
        skills: String(finalData.skills || "").trim(),
        experienceLevel: String(finalData.experienceLevel || "").trim(),
        preferredIndustries: Array.isArray(finalData.preferredIndustries) ? finalData.preferredIndustries : [],
        gdprConsent: Boolean(finalData.gdprConsent),
        createdAt: serverTimestamp(),
        source: window.location.href,
        userAgent: navigator.userAgent,
      };

      await addDoc(collection(db, "candidateLeads"), payload);

      setIsSubmitted(true);
      toast({
        title: "Application submitted successfully!",
        description: "We'll be in touch with you soon.",
      });

      // Reset forms & local state
      step1Form.reset();
      step2Form.reset({ skills: "", experienceLevel: "", preferredIndustries: [] });
      step3Form.reset({ gdprConsent: false, website: "" });
      setFormData({ preferredIndustries: [] });
      setCurrentStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Submission failed",
        description: err?.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleIndustry = (industry: string, currentValue: string[]) => {
    if (currentValue.includes(industry)) {
      return currentValue.filter((i) => i !== industry);
    } else {
      return [...currentValue, industry];
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Work With Us | CorpTalents</title>
        <meta
          name="description"
          content="Join our global network of IT professionals. Apply now to work with leading companies worldwide through CorpTalents."
        />
      </Helmet>

      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Talent Network</h1>
            <p className="text-xl opacity-90">
              Work with leading companies worldwide. Complete our application to join our curated network of IT
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <motion.div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      currentStep >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > 1 ? <CheckCircle2 className="w-6 h-6" /> : <User className="w-6 h-6" />}
                  </div>
                  <span className="text-sm font-medium">Personal Info</span>
                </div>
                <div
                  className={`h-0.5 flex-1 mx-4 transition-all duration-300 ${
                    currentStep >= 2 ? "bg-primary" : "bg-border"
                  }`}
                ></div>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      currentStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > 2 ? <CheckCircle2 className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                  </div>
                  <span className="text-sm font-medium">Experience</span>
                </div>
                <div
                  className={`h-0.5 flex-1 mx-4 transition-all duration-300 ${
                    currentStep >= 3 ? "bg-primary" : "bg-border"
                  }`}
                ></div>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      currentStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">Review & Submit</span>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">Step {currentStep} of 3</div>
            </motion.div>

            {!isSubmitted ? (
              <Card className="p-8 shadow-[0_10px_30px_rgba(11,31,71,0.08)] rounded-[24px]">
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                      <Form {...step1Form}>
                        <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6">
                          <FormField
                            control={step1Form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={step1Form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="your.email@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={step1Form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone *</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={step1Form.control}
                            name="currentRole"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Current Role</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Full Stack Developer" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={step1Form.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Country / Region *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="np">Nepal</SelectItem>
                                    <SelectItem value="in">India</SelectItem>
                                    <SelectItem value="ar">Argentina</SelectItem>
                                    <SelectItem value="ni">Nicaragua</SelectItem>
                                    <SelectItem value="ua">Ukraine</SelectItem>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button type="submit" size="lg" className="w-full">
                            Next — Skills
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  )}

                  {/* Step 2: Experience Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Experience Details</h2>
                      <Form {...step2Form}>
                        <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
                          <FormField
                            control={step2Form.control}
                            name="skills"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Skills *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="e.g., React, Node.js, Python, AWS, DevOps, Project Management"
                                    rows={4}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={step2Form.control}
                            name="experienceLevel"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Experience Level *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select experience level" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Entry (0–2 years)">Entry (0–2 years)</SelectItem>
                                    <SelectItem value="Mid (2–5 years)">Mid (2–5 years)</SelectItem>
                                    <SelectItem value="Senior (5+ years)">Senior (5+ years)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={step2Form.control}
                            name="preferredIndustries"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Industries *</FormLabel>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                                  {industries.map((industry) => (
                                    <div key={industry} className="flex items-center space-x-2">
                                      <Checkbox
                                        checked={Array.isArray(field.value) ? field.value.includes(industry) : false}
                                        onCheckedChange={() => {
                                          const current = Array.isArray(field.value) ? field.value : [];
                                          const next = current.includes(industry)
                                            ? current.filter((i) => i !== industry)
                                            : [...current, industry];
                                          field.onChange(next);
                                        }}
                                      />
                                      <label className="text-sm font-medium leading-none">{industry}</label>
                                    </div>
                                  ))}
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex gap-4">
                            <Button type="button" variant="outline" onClick={goBack} className="flex-1">
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Back
                            </Button>
                            <Button type="submit" className="flex-1">
                              Next — Review & Submit
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </motion.div>
                  )}

                  {/* Step 3: Review & Submit */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>

                      <div className="space-y-6 mb-8">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">Personal Information</h3>
                            <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                              Edit
                            </Button>
                          </div>
                          <dl className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <dt className="text-muted-foreground">Name</dt>
                              <dd className="font-medium">{formData.name}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Email</dt>
                              <dd className="font-medium">{formData.email}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Phone</dt>
                              <dd className="font-medium">{formData.phone}</dd>
                            </div>
                            {formData.currentRole && (
                              <div>
                                <dt className="text-muted-foreground">Current Role</dt>
                                <dd className="font-medium">{formData.currentRole}</dd>
                              </div>
                            )}
                            <div>
                              <dt className="text-muted-foreground">Country / Region</dt>
                              <dd className="font-medium">{formData.country}</dd>
                            </div>
                          </dl>
                        </div>

                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">Experience Details</h3>
                            <Button variant="ghost" size="sm" onClick={() => setCurrentStep(2)}>
                              Edit
                            </Button>
                          </div>
                          <dl className="space-y-3 text-sm">
                            <div>
                              <dt className="text-muted-foreground">Skills</dt>
                              <dd className="font-medium whitespace-pre-wrap">{formData.skills}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Experience Level</dt>
                              <dd className="font-medium capitalize">{formData.experienceLevel}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Preferred Industries</dt>
                              <dd className="font-medium">{(formData.preferredIndustries || []).join(", ")}</dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <Form {...step3Form}>
                        <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-6">
                          {/* Honeypot (hidden) */}
                          <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                            {...step3Form.register("website")}
                          />

                          <FormField
                            control={step3Form.control}
                            name="gdprConsent"
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

                          <div className="flex gap-4">
                            <Button type="button" variant="outline" onClick={goBack} className="flex-1">
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Back
                            </Button>
                            <Button type="submit" className="flex-1" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                "Submit Application"
                              )}
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ) : (
              <Card className="p-12 text-center animate-fade-in">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for applying! We'll review your profile and be in touch with you soon about opportunities
                  that match your skills.
                </p>
                <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
              </Card>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkWithUs;
