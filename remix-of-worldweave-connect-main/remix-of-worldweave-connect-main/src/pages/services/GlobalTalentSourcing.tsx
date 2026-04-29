import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const steps = [
  {
    number: 1,
    title: "Understand Job Role & Requirements",
    description: "Deep dive into your specific needs and ideal candidate profile.",
  },
  {
    number: 2,
    title: "Market Research & Talent Mapping",
    description: "Analyze global markets to identify optimal talent sources.",
  },
  {
    number: 3,
    title: "Multi-Country Recruitment Campaigns",
    description: "Launch targeted campaigns across multiple regions.",
  },
  {
    number: 4,
    title: "Candidate Sourcing & Headhunting",
    description: "Proactively identify and attract top-tier professionals.",
  },
  {
    number: 5,
    title: "Screening & Shortlisting",
    description: "Rigorous evaluation to ensure best-fit candidates.",
  },
  {
    number: 6,
    title: "Present Shortlisted Candidates",
    description: "Deliver qualified candidates ready for your final selection.",
  },
];

const benefits = [
  "Tap into multiple countries' talent pools",
  "Highly targeted recruitment campaigns",
  "Client retains full hiring control",
];

const valueCards = [
  {
    title: "Global Reach",
    description: "Access talent pools across Nepal, India, Argentina, Nicaragua, and Ukraine.",
  },
  {
    title: "Precision Matching",
    description: "Highly targeted campaigns ensure you get candidates who truly fit your requirements.",
  },
  {
    title: "Full Control",
    description: "You maintain complete control over final hiring decisions and selection.",
  },
];

const GlobalTalentSourcing = () => {
  return (
    <Layout>
      <Helmet>
        <title>Global Talent Sourcing | CorpTalents</title>
        <meta
          name="description"
          content="Find and attract the best international candidates with multi-country campaigns, precise skill matching, and full hiring control."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Global Talent Sourcing",
            "provider": {
              "@type": "Organization",
              "name": "CorpTalents"
            },
            "areaServed": "Global"
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Global Talent Sourcing</h1>
            <p className="text-xl opacity-90 mb-8">
              Find and attract the best candidates from international markets, tailored to your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/hire-talent">
                  Start Sourcing Talent
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What It Does</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Global Talent Sourcing service leverages our extensive network and deep market knowledge to find the perfect candidates for your specific needs. We go beyond traditional recruiting to identify and attract top talent from our global talent pool.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Advanced candidate identification</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Multi-country recruitment campaigns</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Highly targeted skill matching</span>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step) => (
                <Card key={step.number} className="p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value for Your Business */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Value for Your Business</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {valueCards.map((card, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h4 className="font-semibold text-xl mb-3">{card.title}</h4>
                <p className="text-muted-foreground">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-3xl font-bold">Ready to Find Your Perfect Candidates?</h3>
              <p className="text-lg text-muted-foreground">
                Let us help you discover the best talent from our global network of IT professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services/global-talent-sourcing">Learn More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default GlobalTalentSourcing;
