import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { 
  ArrowUp, 
  Mail,
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/4797347639', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:hello@soreng-gard.no', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Seasons', id: 'seasons' },
    { name: 'Activities', id: 'activities' },
    { name: 'Accommodation', id: 'accommodation' },
    { name: 'Location', id: 'location' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-foreground to-foreground/90 text-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-background/20"
              style={{ 
                opacity: Math.random() * 0.5 + 0.1,
                transform: `translate(${Math.sin(i) * 2}px, ${Math.cos(i) * 2}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-nature-green/20 rounded-full animate-float opacity-25" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Søreng Gård
              </h3>
              <p className="text-background/80 leading-relaxed">
                Where nature embraces you. Creating unforgettable adventures and meaningful connections in Norway’s serene landscapes
              </p>
            </div>

            <div className="flex items-center gap-2 text-background/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Søreng Gård, Norway</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-background">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-background/80 hover:text-background transition-colors duration-300 hover:translate-x-2"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-background">Connect With Us</h4>
            
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-background group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="space-y-2 text-background/80 text-sm">
              <p>thomas.soreng.m@gmail.com</p>
              <p>+47 973 47  639</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent animate-glow" />
              <span>for nature-loving children</span>
            </div>

            <div className="text-background/60 text-sm">
              © 2024 Søreng Gård. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          variant="hero"
          size="icon"
          className="fixed bottom-8 right-8 z-50 animate-bounce-gentle"
          onClick={scrollToTop}
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
          }}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Mouse Trail Effect */}
      <div 
        className="fixed w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-50 animate-glow"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      />
    </footer>
  );
};

export default Footer;