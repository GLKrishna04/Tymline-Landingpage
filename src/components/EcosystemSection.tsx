import { Link } from "react-router-dom";
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
  ShoppingBag,
  ArrowRight
} from "lucide-react";

const subBrands = [
  {
    icon: Cpu,
    title: "Tymline Tech",
    description: "Engineering modern digital platforms.",
    slug: "tech",
  },
  {
    icon: Palette,
    title: "Tymline Studio",
    description: "Designing premium digital identities.",
    slug: "studio",
  },
  {
    icon: FlaskConical,
    title: "Tymline Labs",
    description: "Researching future digital ideas.",
    slug: "labs",
  },
  {
    icon: Video,
    title: "Tymline Media",
    description: "Digital storytelling and smart content.",
    slug: "media",
  },
  {
    icon: Newspaper,
    title: "Tymline News",
    description: "All updates and announcements.",
    slug: "news",
  },
  {
    icon: GraduationCap,
    title: "Tymline Academy",
    description: "Knowledge for the new generation.",
    slug: "academy",
  },
  {
    icon: Cloud,
    title: "Tymline Cloud",
    description: "Scalable cloud infrastructure.",
    slug: "cloud",
  },
  {
    icon: Brain,
    title: "Tymline AI",
    description: "Intelligent digital solutions.",
    slug: "ai",
  },
  {
    icon: MessageCircle,
    title: "Tymline Connect",
    description: "Social and communication tools.",
    slug: "connect",
  },
  {
    icon: Gamepad2,
    title: "Tymline Play",
    description: "Interactive and gaming experiences.",
    slug: "play",
  },
  {
    icon: ShoppingBag,
    title: "Tymline Store",
    description: "A digital marketplace for premium assets.",
    slug: "store",
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Tymline <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of digital solutions designed to power the future.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {subBrands.map((brand, index) => (
            <Link
              key={brand.title}
              to={`/brand/${brand.slug}`}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-[0_0_40px_hsl(228_100%_59%_/_0.1)] cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <brand.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {brand.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {brand.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary/70 flex items-center gap-1 group-hover:text-primary transition-colors">
                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
