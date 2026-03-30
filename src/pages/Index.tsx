import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import DrawExplainer from "@/components/DrawExplainer";
import ScorePreview from "@/components/ScorePreview";
import CharitySpotlight from "@/components/CharitySpotlight";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ScorePreview />
      <DrawExplainer />
      <CharitySpotlight />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
