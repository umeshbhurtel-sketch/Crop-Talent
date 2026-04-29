import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail, EmailTemplates } from "@/lib/email";


// 🔥 Firestore
import { db } from "@/lib/firebase"; // <-- adjust this import path to where your firebase.ts exports `db`
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
  // honeypot (hidden)
  website: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "", // honeypot
    },
  });

  const contactsRef = collection(db, "contacts");
  const messageLen = (form.watch("message") || "").length; // avoids undefined on first render

  const onSubmit = async (data: FormData) => {
    // 🚫 Honeypot: if bot filled the hidden field, silently ignore
    if (data.website && data.website.trim().length > 0) return;

    setIsSubmitting(true);
    try {
      await addDoc(contactsRef, {
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
        createdAt: serverTimestamp(),
        source: window.location.href,
        // userAgent: navigator.userAgent,
      });

       // 2) Send EmailJS notification (doesn't block UI)
    //    If you prefer to await, add `await` in front of sendEmail.
    sendEmail(EmailTemplates.CONTACT, {
      name: data.name,
      email: data.email,
      message: data.message,
      time: new Date().toLocaleString(),
      source: window.location.href,
      // userAgent: navigator.userAgent,
    });

      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll reply within 24 hours.",
      });
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

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | CorpTalents</title>
        <meta
          name="description"
          content="Get in touch with CorpTalents. We're here to help you find the perfect talent or answer any questions you may have."
        />
      </Helmet>

      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90">
              Have questions? We're here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out through any of these channels and our team will get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@CorpTalents.solutions"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@CorpTalents.solutions
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Global Headquarters
                        <br />
                        New York, USA
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="p-8 shadow-[0_10px_30px_rgba(11,31,71,0.08)]">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Honeypot (hidden) */}
                        <input
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          className="hidden"
                          {...form.register("website")}
                        />

                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage className="animate-fade-in" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage className="animate-fade-in" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us how we can help..."
                                  rows={6}
                                  maxLength={1000}
                                  {...field}
                                />
                              </FormControl>
                              <p className="text-xs text-muted-foreground mt-2">{messageLen}/1000 characters</p>
                              <FormMessage className="animate-fade-in" />
                            </FormItem>
                          )}
                        />

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[0_0_24px_hsla(201,97%,37%,0.35)] transition-all duration-300"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              "Send Message"
                            )}
                          </Button>
                        </motion.div>

                        <p className="text-xs text-muted-foreground text-center">
                          We'll reply within 24 hours. By submitting this form, you agree to our Privacy Policy.
                        </p>
                      </form>
                    </Form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We'll reply within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
