import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-lake.jpg';

const HeroSection = () => {
  const fullText = "Where Adventure Begins";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // kecepatan ketik

    return () => clearInterval(interval);
  }, []);

  const scrollToSeasons = () => {
    document.getElementById('seasons')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'scale(1.1)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80" />

      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 glass rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 right-20 w-24 h-24 glass rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 glass rounded-full animate-float opacity-25" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4 text-outline">
            SØRENG GÅRD
          </h1>
          <div className="w-24 h-2 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        {/* Typing Tagline */}
        <div className="mb-12 h-20 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-dm-sans font-light text-blue-200">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </h2>
        </div>

        {/* CTA Button */}
        <div className="mb-16 animate-slide-in-up" style={{ animationDelay: '0s' }}>
          <Button 
            variant="hero" 
            size="hero" 
            onClick={scrollToSeasons}
            className="group"
          >
            Explore the Seasons
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
