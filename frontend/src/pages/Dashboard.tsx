import CtaSection from "../components/ui/CtaSection";
import FeatureSection from "../components/ui/FeatureSection";
import HeroSection from "../components/ui/HeroSection";
import HowItWorksSection from "../components/ui/HowItWorksSection";
import ImpactSection from "../components/ui/ImpactSection";

function Dashboard() {
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

export default Dashboard;
