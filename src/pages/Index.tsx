import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SeasonSection from '@/components/SeasonSection';
import ActivityGallery from '@/components/ActivityGallery';
import AccommodationSection from '@/components/AccommodationSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling polyfill for better browser support
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-based animations observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-up');
        }
      });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section - Full Screen */}
      <HeroSection />
      
      {/* Seasonal Adventures */}
      <SeasonSection />
      
      {/* Activity Gallery */}
      <div id="activities">
        <ActivityGallery />
      </div>
      
      {/* Accommodation */}
      <div id="accommodation">
        <AccommodationSection />
      </div>
      
      {/* Location & Contact */}
      <div id="location">
        <LocationSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
