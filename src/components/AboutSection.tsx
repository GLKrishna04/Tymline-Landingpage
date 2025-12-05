const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                A New Vision for the{" "}
                <span className="gradient-text">Digital World</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tymline is a digital ecosystem designed to connect technology, intelligence, creativity and content into one unified experience. Our goal is to shape the future of modern digital life — accessible, powerful, and beautifully simple.
              </p>
            </div>

            {/* Visual - Network nodes */}
            <div className="relative h-80 lg:h-96">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_40px_hsl(228_100%_59%_/_0.4)]">
                <div className="w-4 h-4 rounded-full bg-foreground" />
              </div>

              {/* Orbital nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-muted border border-primary/30 animate-glow-pulse"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                );
              })}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(228 100% 59% / 0.3)" />
                    <stop offset="100%" stopColor="hsl(262 100% 63% / 0.3)" />
                  </linearGradient>
                </defs>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const radius = 120;
                  const x = 200 + Math.cos((angle * Math.PI) / 180) * radius;
                  const y = 200 + Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                    />
                  );
                })}
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
