import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServicePromoTiles } from "@/components/home/ServicePromoTiles";
import { WhyUs } from "@/components/home/WhyUs";
import HiringDifferenceShowcase from "@/components/home/HiringDifferenceShowcase";
import { HiringPlansGrid } from "@/components/home/HiringPlansGrid";
import { MarqueeFocus } from "@/components/home/MarqueeFocus";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Global Talent Solutions | CorpTalents</title>
        <meta
          name="description"
          content="Access top-tier IT professionals worldwide with CorpTalents. Fast, compliant, and cost-effective global talent recruitment and management."
        />
        <meta property="og:title" content="Global Talent Solutions | CorpTalents" />
        <meta
          property="og:description"
          content="Access top-tier IT professionals worldwide. EOR, TaaS, and global talent sourcing services."
        />
      </Helmet>

      <Hero />
      <ServicePromoTiles />
      <WhyUs />
      <HiringDifferenceShowcase />
      <MarqueeFocus />
      <HiringPlansGrid />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
