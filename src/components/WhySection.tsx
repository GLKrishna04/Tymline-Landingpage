import { 
  Cpu, 
  Palette, 
  FlaskConical, 
  Video, 
  Cloud, 
  Brain, 
  Gamepad2, 
  ShoppingBag
} from "lucide-react";

const icons = [Cpu, Palette, FlaskConical, Video, Cloud, Brain, Gamepad2, ShoppingBag];

const WhySection = () => {
  return (
    <section id="why" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual - Connected world */}
            <div className="relative h-80 lg:h-[400px] order-2 lg:order-1">
              {/* Central globe outline */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(228 100% 59% / 0.4)" />
                      <stop offset="100%" stopColor="hsl(262 100% 63% / 0.4)" />
                    </linearGradient>
                  </defs>
                  {/* Globe circles */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="url(#globeGradient)" strokeWidth="1" />
                  <ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
                  <ellipse cx="100" cy="100" rx="30" ry="80" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="url(#globeGradient)" strokeWidth="0.5" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="url(#globeGradient)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Floating brand icons */}
              {icons.map((Icon, i) => {
                const angle = (i / icons.length) * 360;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center animate-float"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                );
              })}

              {/* Connecting lines to center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="connectLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(228 100% 59% / 0.2)" />
                    <stop offset="100%" stopColor="hsl(262 100% 63% / 0.2)" />
                  </linearGradient>
                </defs>
                {icons.map((_, i) => {
                  const angle = (i / icons.length) * 360;
                  const radius = 140;
                  const centerX = 160;
                  const centerY = 200;
                  const x = centerX + Math.cos((angle * Math.PI) / 180) * radius;
                  const y = centerY + Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <line
                      key={i}
                      x1={centerX}
                      y1={centerY}
                      x2={x}
                      y2={y}
                      stroke="url(#connectLine)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                One Brand.{" "}
                <span className="gradient-text">Many Experiences.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our ecosystem is designed to evolve — one innovation at a time. Every Tymline division supports another, creating a digital world without limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
