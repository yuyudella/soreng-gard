import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Navigation,
  Cloud,
  Sun,
  CloudRain,
  Snowflake
} from 'lucide-react';

const LocationSection = () => {
  const [showContact, setShowContact] = useState(false);
  const [currentWeather] = useState({
    condition: 'sunny',
    temperature: '18°C',
    description: 'Perfect for outdoor activities'
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Søreng Gård, Norway',
      action: () => window.open('https://goo.gl/maps/mFMcc8ik4rXJGWez8', '_blank')
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+47 973 47 639',  
      action: () => window.open('tel:+4797347639')
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'thomas.soreng.m@gmail.com',
      action: () => window.open('mailto:thomas.soreng.m@gmail.com')
    }
  ];

  const getWeatherIcon = () => {
    switch (currentWeather.condition) {
      case 'sunny': return Sun;
      case 'cloudy': return Cloud;
      case 'rainy': return CloudRain;
      case 'snowy': return Snowflake;
      default: return Sun;
    }
  };

  const WeatherIcon = getWeatherIcon();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 glass rounded-full animate-float opacity-20" />
      <div className="absolute bottom-40 right-20 w-32 h-32 glass rounded-full animate-float opacity-15" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 text-outline">
            Find Us in Nature
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Nestled in the peaceful hills of Søreng, where wild beauty meets easy access
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start w-full justify-center">
          {/* Map Section */}
          <div className="space-y-6">
            <div className="glass-strong rounded-3xl overflow-hidden">
              {/* Embedded Map */}
              <div className="relative h-80 bg-gradient-to-br from-primary/20 to-nature-green/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.123456789!2d10.123456!3d60.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDA3JzI0LjQiTiAxMMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sno!4v1234567890123!5m2!1sen!2sno"
                  width="100%"
                  height="320"
                  style={{ border: 0, filter: 'sepia(20%) saturate(80%) hue-rotate(160deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                />
                
                {/* Custom Map Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 glass rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary animate-bounce-gentle" />
                      <span className="text-sm font-medium">Søreng Gård</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Get Here */}
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-primary" />
                How to Get Here
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>By car: Drive 2.5 hours north from Oslo via E6, exit to Øyer/Søreng</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>By train: Train to Lillehammer, then local bus or taxi (30 min)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>By air: Fly to Oslo Airport, then 2.5-hour drive north to Søreng</span>
                </div>
              </div>
              
              <Button 
                variant="hero" 
                size="sm" 
                className="mt-4"
                onClick={() => window.open('https://goo.gl/maps/mFMcc8ik4rXJGWez8', '_blank')}
              >
                Open in Maps
                <Navigation className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Contact & Weather */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <div className="glass-strong rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <WeatherIcon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Current Weather</h3>
                <p className="text-3xl font-bold text-primary mb-2">{currentWeather.temperature}</p>
                <p className="text-muted-foreground">{currentWeather.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center glass rounded-lg p-3">
                  <Sun className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-xs font-medium">Sunrise</p>
                  <p className="text-sm">05:30</p>
                </div>
                <div className="text-center glass rounded-lg p-3">
                  <Cloud className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs font-medium">Humidity</p>
                  <p className="text-sm">65%</p>
                </div>
                <div className="text-center glass rounded-lg p-3">
                  <Sun className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-xs font-medium">Sunset</p>
                  <p className="text-sm">21:45</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={contact.label}
                    className={`glass rounded-xl p-4 interactive-icon transition-all duration-300 cursor-pointer ${
                      showContact ? 'scale-105' : ''
                    }`}
                    onClick={contact.action}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-semibold">{contact.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Ready to start your adventure?
                </p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => setShowContact(!showContact)}
                >
                  Contact Us Today
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;