import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home,
  Users,
  ChefHat,
  Bath,
  Bed,
  MapPin,
  Flame,
  UtensilsCrossed
} from 'lucide-react';

const AccommodationSection = () => {
  const [activeView, setActiveView] = useState<'exterior' | 'floorplan'>('exterior');
  const [hoveredFacility, setHoveredFacility] = useState<string | null>(null);

  const facilities = [
    { id: 'kitchen', name: 'Full Kitchen', icon: ChefHat, description: 'Modern cooking facilities' },
    { id: 'bathrooms', name: 'Bathrooms', icon: Bath, description: 'Clean, private facilities' },
    { id: 'bedrooms', name: 'Cozy Bedrooms', icon: Bed, description: 'Comfortable sleeping quarters' },
    { id: 'common', name: 'Common Areas', icon: Users, description: 'Spaces for gathering' }
  ];

  const bbqFeatures = [
    { name: 'Outdoor Grill', icon: Flame },
    { name: 'Picnic Tables', icon: UtensilsCrossed },
    { name: 'Fire Pit', icon: Flame },
    { name: 'Seating Area', icon: Users }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-foreground/10" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 text-outline">
            Your Home Away From Home
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Comfortable accommodation designed for memorable stays in nature
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* House Visualization */}
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <Button
                variant={activeView === 'exterior' ? 'seasonal' : 'glass'}
                onClick={() => setActiveView('exterior')}
              >
                <Home className="w-4 h-4 mr-2" />
                Exterior View
              </Button>
              <Button
                variant={activeView === 'floorplan' ? 'seasonal' : 'glass'}
                onClick={() => setActiveView('floorplan')}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Floor Plan
              </Button>
            </div>

            {/* House Image/3D View */}
            <div className="glass-strong rounded-3xl overflow-hidden">
              {activeView === 'exterior' ? (
                <div className="relative h-80 bg-gradient-winter flex items-center justify-center">
                  {/* Simple House Illustration */}
                  <div className="relative">
                    {/* House Body */}
                    <div className="w-48 h-32 bg-nature-brown rounded-lg relative">
                      {/* Roof */}
                      <div className="absolute -top-8 -left-4 w-56 h-16 bg-accent/80 transform -skew-x-12 rounded-t-lg" />
                      
                      {/* Windows */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-primary-light rounded border-2 border-foreground/20" />
                      <div className="absolute top-4 right-4 w-8 h-8 bg-primary-light rounded border-2 border-foreground/20" />
                      
                      {/* Door */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-20 bg-nature-brown border-2 border-foreground/30 rounded-t-lg" />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-x-3 w-1 h-1 bg-foreground rounded-full" />
                      
                      {/* Chimney */}
                      <div className="absolute -top-6 right-8 w-4 h-12 bg-foreground/60 rounded-t" />
                      
                      {/* Smoke Animation */}
                      <div className="absolute -top-4 right-6 w-2 h-8 opacity-60">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-float opacity-80" />
                        <div className="w-1 h-1 bg-muted-foreground rounded-full animate-float ml-1 mt-1" style={{ animationDelay: '0.5s' }} />
                        <div className="w-1 h-1 bg-muted-foreground rounded-full animate-float mt-1" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                    
                    {/* Trees */}
                    <div className="absolute -left-16 top-8 w-6 h-20 bg-nature-green rounded-full opacity-60" />
                    <div className="absolute -right-12 top-12 w-8 h-16 bg-nature-green rounded-full opacity-70" />
                  </div>
                </div>
              ) : (
                <div className="relative h-80 bg-muted/30 flex items-center justify-center p-8">
                  {/* Floor Plan */}
                  <div className="relative w-full max-w-sm">
                    {/* Main Structure */}
                    <div className="border-2 border-foreground/30 rounded-lg p-4 bg-background/80">
                      {/* Rooms */}
                      <div className="grid grid-cols-2 gap-2 h-full">
                        {facilities.map((facility) => (
                          <div
                            key={facility.id}
                            className={`glass rounded p-3 cursor-pointer transition-all duration-300 ${
                              hoveredFacility === facility.id ? 'scale-105 bg-primary/20' : ''
                            }`}
                            onMouseEnter={() => setHoveredFacility(facility.id)}
                            onMouseLeave={() => setHoveredFacility(null)}
                          >
                            <facility.icon className="w-6 h-6 text-primary mb-1" />
                            <p className="text-xs font-medium">{facility.name}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Entrance */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-foreground/30 rounded-t" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Facility Icons */}
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className={`glass rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                    hoveredFacility === facility.id ? 'scale-105 bg-primary/10' : ''
                  }`}
                  onMouseEnter={() => setHoveredFacility(facility.id)}
                  onMouseLeave={() => setHoveredFacility(null)}
                >
                  <facility.icon className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{facility.name}</h4>
                  <p className="text-xs text-muted-foreground">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BBQ & Outdoor Area */}
          <div className="space-y-8">
            <div className="glass-strong rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                  <Flame className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Outdoor BBQ Area</h3>
                <p className="text-muted-foreground">
                  Perfect for group meals and evening gatherings under the Nordic sky
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {bbqFeatures.map((feature, index) => (
                  <div 
                    key={feature.name}
                    className="glass rounded-lg p-4 interactive-icon"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <feature.icon className="w-5 h-5 text-accent mb-2" />
                    <p className="text-sm font-medium">{feature.name}</p>
                  </div>
                ))}
              </div>

              {/* BBQ Animation */}
              <div className="relative bg-gradient-autumn rounded-2xl h-32 flex items-end justify-center overflow-hidden">
                <div className="relative">
                  {/* Grill */}
                  <div className="w-16 h-8 bg-foreground/60 rounded-lg" />
                  <div className="absolute -top-2 left-2 w-12 h-4 bg-foreground/80 rounded" />
                  
                  {/* Smoke */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-4 bg-muted-foreground/40 animate-float" />
                    <div className="w-1 h-3 bg-muted-foreground/30 animate-float ml-1" style={{ animationDelay: '0.5s' }} />
                    <div className="w-1 h-2 bg-muted-foreground/20 animate-float ml-2" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4">Accommodation Features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Ideal for up to 12 guests, with dedicated male and female sleeping areas.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Full kitchen with modern appliances</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Cozy common areas for group activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Outdoor spaces for all seasons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;