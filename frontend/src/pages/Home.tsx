import CtaSection from "../components/components/CtaSection";
import FeatureSection from "../components/components/FeatureSection";
import HeroSection from "../components/components/HeroSection";
import HowItWorksSection from "../components/components/HowItWorksSection";
import ImpactSection from "../components/components/ImpactSection";

function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <ImpactSection />
        <CtaSection />
      </div>
    </>
  );
}

export default Home;
