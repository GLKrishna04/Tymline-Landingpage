import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Cpu, 
  Palette, 
  FlaskConical, 
  Video, 
  Newspaper, 
  GraduationCap, 
  Cloud, 
  Brain, 
  MessageCircle, 
  Gamepad2, 
  ShoppingBag 
} from "lucide-react";

const subBrandsData = {
  tech: {
    icon: Cpu,
    title: "Tymline Tech",
    tagline: "Engineering modern digital platforms.",
    description: "Building the infrastructure that powers the digital future. From scalable architectures to cutting-edge development practices, Tymline Tech is where innovation meets engineering excellence.",
    features: ["Modern Architecture", "Scalable Solutions", "Enterprise Systems", "API Development"],
    color: "primary",
  },
  studio: {
    icon: Palette,
    title: "Tymline Studio",
    tagline: "Designing premium digital identities.",
    description: "Crafting visual experiences that captivate and inspire. Our design philosophy combines aesthetics with functionality to create brands that stand out in the digital landscape.",
    features: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Visual Systems"],
    color: "secondary",
  },
  labs: {
    icon: FlaskConical,
    title: "Tymline Labs",
    tagline: "Researching future digital ideas.",
    description: "Exploring the frontier of technology and innovation. Labs is our experimental division where we prototype tomorrow's solutions today.",
    features: ["R&D Projects", "Prototype Development", "Innovation Research", "Future Tech"],
    color: "primary",
  },
  media: {
    icon: Video,
    title: "Tymline Media",
    tagline: "Digital storytelling and smart content.",
    description: "Creating compelling narratives through digital media. From video production to interactive content, we tell stories that resonate and engage.",
    features: ["Video Production", "Content Strategy", "Digital Publishing", "Interactive Media"],
    color: "accent",
  },
  news: {
    icon: Newspaper,
    title: "Tymline News",
    tagline: "All updates and announcements.",
    description: "Your source for the latest from the Tymline ecosystem. Stay informed about launches, updates, and the future of digital innovation.",
    features: ["Product Updates", "Industry Insights", "Company News", "Event Coverage"],
    color: "primary",
  },
  academy: {
    icon: GraduationCap,
    title: "Tymline Academy",
    tagline: "Knowledge for the new generation.",
    description: "Empowering the next generation of digital creators. Through courses, workshops, and resources, we share knowledge that shapes the future.",
    features: ["Online Courses", "Workshops", "Certifications", "Learning Resources"],
    color: "secondary",
  },
  cloud: {
    icon: Cloud,
    title: "Tymline Cloud",
    tagline: "Scalable cloud infrastructure.",
    description: "Powering applications with reliable, scalable cloud infrastructure. Built for performance, designed for growth.",
    features: ["Cloud Hosting", "Data Storage", "CDN Services", "DevOps Tools"],
    color: "primary",
  },
  ai: {
    icon: Brain,
    title: "Tymline AI",
    tagline: "Intelligent digital solutions.",
    description: "Harnessing the power of artificial intelligence to solve complex problems and create intelligent experiences.",
    features: ["Machine Learning", "NLP Solutions", "Computer Vision", "Predictive Analytics"],
    color: "accent",
  },
  connect: {
    icon: MessageCircle,
    title: "Tymline Connect",
    tagline: "Social and communication tools.",
    description: "Building bridges in the digital world. Connect brings people together through innovative communication platforms.",
    features: ["Messaging Platform", "Social Features", "Collaboration Tools", "Community Building"],
    color: "secondary",
  },
  play: {
    icon: Gamepad2,
    title: "Tymline Play",
    tagline: "Interactive and gaming experiences.",
    description: "Where entertainment meets innovation. Play delivers immersive gaming and interactive experiences for the modern audience.",
    features: ["Game Development", "Interactive Experiences", "VR/AR Content", "Entertainment Apps"],
    color: "accent",
  },
  store: {
    icon: ShoppingBag,
    title: "Tymline Store",
    tagline: "A digital marketplace for premium assets.",
    description: "Your destination for premium digital assets. From templates to tools, find everything you need to create exceptional digital experiences.",
    features: ["Digital Assets", "Templates", "Tools & Plugins", "Premium Resources"],
    color: "primary",
  },
};

const SubBrandPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const brand = slug ? subBrandsData[slug as keyof typeof subBrandsData] : null;

  if (!brand) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Brand not found</h1>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const Icon = brand.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background patterns */}
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        {/* Gradient orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${brand.color}/15 rounded-full blur-[128px] animate-glow-pulse`} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        
        <div className="container relative z-10 px-6">
          {/* Back link */}
          <Link 
            to="/#ecosystem" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ecosystem
          </Link>

          <div className="max-w-4xl">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Icon className="w-10 h-10 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text">{brand.title}</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {brand.tagline}
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {brand.description}
            </p>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            What to Expect
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.features.map((feature, index) => (
              <div
                key={feature}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm opacity-0 animate-fade-in hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative z-10 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Be the first to know when {brand.title} launches.
          </p>
          <Button variant="hero" size="xl" onClick={() => {
            const el = document.getElementById("coming-soon");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/#coming-soon";
            }
          }}>
            Get Notified
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubBrandPage;
