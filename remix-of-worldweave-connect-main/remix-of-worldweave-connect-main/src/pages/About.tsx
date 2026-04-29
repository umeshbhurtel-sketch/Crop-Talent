import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import heroGlobalTeam from "@/assets/hero-global-team.jpg";

import { TrustIndicators } from "@/components/about/TrustIndicators";
import { MissionVisionCards } from "@/components/about/MissionVisionCards";
import { HRProcessFlow } from "@/components/about/HRProcessFlow";
import { WhyChooseUsSection } from "@/components/about/WhyChooseUsSection";
import { AdvisorsGrid } from "@/components/about/AdvisorsGrid";
import { AboutCTA } from "@/components/about/AboutCTA";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Crop Talent - Global HR & Talent Solutions from Canada</title>
        <meta
          name="description"
          content="CorpTalents connects global businesses with top-tier IT professionals from Nepal. 13+ years of HR expertise, 8+ countries served, 100K+ IT professionals network."
        />
      </Helmet>

      {/* Hero Section - Modern HR-Centric Design */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-32">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Trusted HR Partner Since 2011
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Global HR & Talent Solutions{" "}
                <span className="text-primary">from Nepal</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4">
                At Crop Talent, we provide top talent from Canda to global businesses, specializing in talent
                acquisition and HR management to source, hire, and nurture exceptional IT professionals for reliable
                remote solutions worldwide.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With over 13 years of dedicated experience in IT recruitment and HR services, our team has successfully
                placed and managed talent for international projects across the USA, UK, Australia, Switzerland,
                Singapore, China, India, and more. Registered in Kathmandu, Nepal, and Virginia, USA.
              </p>

              {/* Trust Indicators */}
              <TrustIndicators />
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={heroGlobalTeam}
                    alt="Global team collaboration - diverse professionals working together"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-xl border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">✓</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Successful Placements</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <MissionVisionCards />

      {/* HR Process Flow */}
      <HRProcessFlow />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Board of Advisors */}
      <AdvisorsGrid />

      {/* CTA Section */}
      <AboutCTA />
    </Layout>
  );
};

export default About;
