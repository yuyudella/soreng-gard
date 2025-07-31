import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sun, 
  Leaf, 
  Snowflake, 
  Flower,
  Mountain,
  Waves,
  Trees,
  Flame
} from 'lucide-react';
import summerImage from '@/assets/summer-activities.jpg';
import autumnImage from '@/assets/autumn-camp.jpg';
import winterImage from '@/assets/winter-lodge.jpg';
import springImage from '@/assets/spring-meadow.jpg';

const seasons = [
  {
    id: 'summer',
    name: 'Summer',
    tagline: 'Adventure & Discovery',
    description: 'Kayaking through crystal waters, hiking mountain trails, and outdoor games under the endless Nordic sun.',
    image: summerImage,
    bgClass: 'bg-gradient-summer',
    icon: Sun,
    activities: ['Kayaking', 'Hiking', 'Outdoor Games', 'Swimming'],
    activityIcons: [Waves, Mountain, Sun, Waves]
  },
  {
    id: 'autumn',
    name: 'Autumn',
    tagline: 'Warmth & Reflection',
    description: 'Gathering around crackling campfires, forest exploration, and cozy evenings filled with stories.',
    image: autumnImage,
    bgClass: 'bg-gradient-autumn',
    icon: Leaf,
    activities: ['Campfire Stories', 'Forest Walks', 'Craft Making', 'Stargazing'],
    activityIcons: [Flame, Trees, Leaf, Sun]
  },
  {
    id: 'winter',
    name: 'Winter',
    tagline: 'Magic & Wonder',
    description: 'Snow adventures, cozy cabin life, and the enchanting beauty of Norwegian winter landscapes.',
    image: winterImage,
    bgClass: 'bg-gradient-winter',
    icon: Snowflake,
    activities: ['Snow Play', 'Cabin Life', 'Winter Crafts', 'Aurora Watching'],
    activityIcons: [Snowflake, Mountain, Trees, Sun]
  },
  {
    id: 'spring',
    name: 'Spring',
    tagline: 'Growth & Renewal',
    description: 'Nature awakening, flower gathering, and celebrating new beginnings in blooming meadows.',
    image: springImage,
    bgClass: 'bg-gradient-spring',
    icon: Flower,
    activities: ['Nature Walks', 'Gardening', 'Flower Picking', 'Bird Watching'],
    activityIcons: [Flower, Trees, Leaf, Sun]
  }
];

const SeasonSection = () => {
  const [activeSeason, setActiveSeason] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSeasonChange = (index: number) => {
    if (index === activeSeason || isAnimating) return;
    
    setIsAnimating(true);
    setActiveSeason(index);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentSeason = seasons[activeSeason];

  return (
    <section id="seasons" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background with Current Season */}
      <div 
        className={`absolute inset-0 ${currentSeason.bgClass} transition-all duration-1000`}
      />
      <div className="absolute inset-0 bg-background/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 text-outline">
            Seasonal Adventures
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Experience the magic of Norwegian nature through every season
          </p>
        </div>

        {/* Season Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {seasons.map((season, index) => {
            const IconComponent = season.icon;
            return (
              <Button
                key={season.id}
                variant={index === activeSeason ? 'seasonal' : 'glass'}
                className={`season-card ${index === activeSeason ? 'scale-110' : ''}`}
                onClick={() => handleSeasonChange(index)}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {season.name}
              </Button>
            );
          })}
        </div>

        {/* Season Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {currentSeason.name}
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                {currentSeason.tagline}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {currentSeason.description}
              </p>
            </div>

            {/* Activities */}
            <div className="grid grid-cols-2 gap-4">
              {currentSeason.activities.map((activity, index) => {
                const IconComponent = currentSeason.activityIcons[index];
                return (
                  <div 
                    key={activity}
                    className="glass rounded-xl p-4 interactive-icon hover:scale-105"
                  >
                    <IconComponent className="w-6 h-6 text-primary mb-2" />
                    <p className="text-sm font-medium text-foreground">{activity}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'} transition-all duration-500`}>
            <div className="glass-strong rounded-3xl overflow-hidden">
              <img 
                src={currentSeason.image} 
                alt={`${currentSeason.name} activities`}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Icon */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 animate-float">
              <currentSeason.icon className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonSection;