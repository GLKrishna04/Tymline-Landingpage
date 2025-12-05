const DigitalWorldAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Main container */}
      <div className="relative w-[900px] h-[900px] md:w-[1200px] md:h-[1200px]">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Particle field */}
        <svg
          viewBox="0 0 1000 1000"
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.6 }}
        >
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(228 100% 59% / 0.3)" />
              <stop offset="50%" stopColor="hsl(262 100% 63% / 0.1)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="particleGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background glow circle */}
          <circle cx="500" cy="500" r="400" fill="url(#centerGlow)" />

          {/* Animated rings */}
          <g className="animate-rotate-slow" style={{ transformOrigin: '500px 500px' }}>
            <circle
              cx="500"
              cy="500"
              r="350"
              fill="none"
              stroke="hsl(228 100% 59% / 0.15)"
              strokeWidth="1"
              strokeDasharray="8 16"
            />
          </g>
          
          <g className="animate-rotate-slow" style={{ transformOrigin: '500px 500px', animationDirection: 'reverse', animationDuration: '40s' }}>
            <circle
              cx="500"
              cy="500"
              r="280"
              fill="none"
              stroke="hsl(262 100% 63% / 0.12)"
              strokeWidth="1"
              strokeDasharray="4 12"
            />
          </g>

          <g className="animate-rotate-slow" style={{ transformOrigin: '500px 500px', animationDuration: '50s' }}>
            <circle
              cx="500"
              cy="500"
              r="420"
              fill="none"
              stroke="hsl(228 100% 59% / 0.08)"
              strokeWidth="0.5"
              strokeDasharray="2 8"
            />
          </g>

          {/* Floating particles with connections */}
          {[
            { x: 350, y: 300, size: 4, delay: 0 },
            { x: 650, y: 320, size: 3, delay: 0.5 },
            { x: 420, y: 550, size: 5, delay: 1 },
            { x: 580, y: 480, size: 3, delay: 1.5 },
            { x: 300, y: 500, size: 4, delay: 2 },
            { x: 700, y: 550, size: 3, delay: 2.5 },
            { x: 450, y: 350, size: 4, delay: 3 },
            { x: 550, y: 650, size: 3, delay: 3.5 },
            { x: 380, y: 420, size: 2, delay: 4 },
            { x: 620, y: 380, size: 2, delay: 4.5 },
          ].map((particle, i) => (
            <g key={i} filter="url(#particleGlow)">
              <circle
                cx={particle.x}
                cy={particle.y}
                r={particle.size}
                fill="hsl(228 100% 65%)"
                className="animate-float"
                style={{ animationDelay: `${particle.delay}s` }}
              />
            </g>
          ))}

          {/* Connection lines */}
          <g style={{ opacity: 0.3 }}>
            <line x1="350" y1="300" x2="450" y2="350" stroke="hsl(228 100% 59%)" strokeWidth="0.5" />
            <line x1="450" y1="350" x2="580" y2="480" stroke="hsl(228 100% 59%)" strokeWidth="0.5" />
            <line x1="580" y1="480" x2="650" y2="320" stroke="hsl(262 100% 63%)" strokeWidth="0.5" />
            <line x1="420" y1="550" x2="580" y2="480" stroke="hsl(228 100% 59%)" strokeWidth="0.5" />
            <line x1="300" y1="500" x2="380" y2="420" stroke="hsl(262 100% 63%)" strokeWidth="0.5" />
            <line x1="620" y1="380" x2="700" y2="550" stroke="hsl(228 100% 59%)" strokeWidth="0.5" />
            <line x1="550" y1="650" x2="700" y2="550" stroke="hsl(262 100% 63%)" strokeWidth="0.5" />
          </g>

          {/* Red accent dots */}
          <circle cx="500" cy="500" r="6" fill="hsl(352 100% 62%)" filter="url(#particleGlow)" className="animate-glow-pulse" />
          <circle cx="380" cy="360" r="3" fill="hsl(352 100% 62%)" filter="url(#particleGlow)" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="620" cy="600" r="3" fill="hsl(352 100% 62%)" filter="url(#particleGlow)" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />

          {/* Hexagonal network pattern */}
          <g style={{ opacity: 0.1 }} className="animate-rotate-slow" transform-origin="500 500">
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 500 + Math.cos(rad) * 200;
              const y1 = 500 + Math.sin(rad) * 200;
              const x2 = 500 + Math.cos(rad) * 350;
              const y2 = 500 + Math.sin(rad) * 350;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(228 100% 59%)"
                  strokeWidth="0.5"
                />
              );
            })}
          </g>
        </svg>

        {/* Outer ambient particles */}
        <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-primary/40 animate-float" />
        <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 rounded-full bg-secondary/50 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-1 h-1 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] right-[20%] w-2 h-2 rounded-full bg-accent/40 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] left-[10%] w-1.5 h-1.5 rounded-full bg-primary/25 animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[60%] right-[12%] w-1 h-1 rounded-full bg-secondary/35 animate-float" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
};

export default DigitalWorldAnimation;
