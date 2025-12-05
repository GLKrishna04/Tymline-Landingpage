import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import WhySection from "@/components/WhySection";
import ComingSoonSection from "@/components/ComingSoonSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <WhySection />
      <ComingSoonSection />
      <Footer />
    </main>
  );
};

export default Index;
