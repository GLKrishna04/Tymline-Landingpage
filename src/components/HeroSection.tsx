import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DigitalWorldAnimation from "./DigitalWorldAnimation";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Digital World Animation - Background */}
      <DigitalWorldAnimation />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Tymline</span>
            <span className="gradient-text"> — </span>
            <span className="text-foreground">A Digital Universe</span>
            <br />
            <span className="text-foreground">in the Making</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            We are building a future-ready ecosystem of technology, creativity, media, cloud and intelligent digital solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection("coming-soon")}>
              Notify Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => scrollToSection("ecosystem")}>
              Explore Sub-Brands
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
