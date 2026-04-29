import React from "react";
import CorpTalentsHeader from "../components/layout/CorpTalentsHeader";
import PremiumCorpTalentsHero from "../components/home/PremiumCorpTalentsHero";
import CorpTalentsServices from "../components/home/CorpTalentsServices";
import CorpTalentsTechRolesMarquee from "../components/home/CorpTalentsTechRolesMarquee";
import CorpTalentsAbout from "../components/home/CorpTalentsAbout";
import CorpTalentsProcess from "../components/home/CorpTalentsProcess";
import CorpTalentsFeatures from "../components/home/CorpTalentsFeatures";
import CorpTalentsTestimonials from "../components/home/CorpTalentsTestimonials";
import CorpTalentsClients from "../components/home/CorpTalentsClients";
import CorpTalentsCTA from "../components/home/CorpTalentsCTA";
import CorpTalentsFooter from "../components/home/CorpTalentsFooter";

export default function CorpTalentsHome() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "CorpTalents - Global Talent Solutions for Modern Companies";
    }, []);

    return (
        <div style={{ scrollBehavior: "smooth" }}>
            <CorpTalentsHeader />
            <main>
                <PremiumCorpTalentsHero />
                <CorpTalentsServices />
                <CorpTalentsTechRolesMarquee />
                <CorpTalentsAbout />
                <CorpTalentsProcess />
                <CorpTalentsFeatures />
                <CorpTalentsTestimonials />
                <CorpTalentsClients />
                <CorpTalentsCTA />
            </main>
            <CorpTalentsFooter />
        </div>
    );
}
