import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { HiringStrategyHero } from "@/components/hiring/HiringStrategyHero";
import { HiringStaircaseProcess } from "@/components/hiring/HiringStaircaseProcess";
import { StrategyImpactSection } from "@/components/hiring/StrategyImpactSection";
import { WhoThisIsFor } from "@/components/hiring/WhoThisIsFor";
import { StrategyCTA } from "@/components/hiring/StrategyCTA";

const HiringStrategy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Hiring Strategy | CorpTalents</title>
        <meta
          name="description"
          content="Discover how CorpTalents transforms global hiring with our proven 5-step process: sourcing, vetting, matching, onboarding, and performance management."
        />
        <meta property="og:title" content="Our Hiring Strategy | CorpTalents" />
        <meta
          property="og:description"
          content="Learn about our strategic approach to global talent acquisition and management."
        />
      </Helmet>

      {/* Hero Section */}
      <HiringStrategyHero />

      {/* Who This Is For */}
      <WhoThisIsFor />

      {/* Hiring Staircase Process */}
      <HiringStaircaseProcess />

      {/* Business Impact Section */}
      <StrategyImpactSection />

      {/* CTA Section */}
      <StrategyCTA />
    </Layout>
  );
};

export default HiringStrategy;
