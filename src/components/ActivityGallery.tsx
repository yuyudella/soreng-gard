import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Filter } from 'lucide-react';
import summer from '@/assets/summer.jpg';
import summer2 from '@/assets/summer2.jpg';
import summer3 from '@/assets/summer3.jpg';
import summer4 from '@/assets/summer4.jpg';
import springMeadow from '@/assets/spring-meadow.jpg';
import spring2 from '@/assets/spring2.jpg';
import winterLodge from '@/assets/winter-lodge.jpg';
import winter2 from '@/assets/winter2.jpg';
import winter3 from '@/assets/winter3.jpg';
import autumnCamp from '@/assets/autumn-camp.jpg';

const activities = [
  {
    id: 1,
    title: 'Cliffside Ocean View',
    season: 'summer',
    image: summer,
    type: 'image',
    description: 'A scenic cliffside overlooking the ocean in Sorenggard.'
  },
  {
    id: 2,
    title: 'Another Cliffside View',
    season: 'summer',
    image: summer2,
    type: 'image',
    description: 'Another beautiful view of the ocean from the cliffs.'
  },
  {
    id: 3,
    title: 'Swim Day with Owner',
    season: 'summer',
    image: summer3,
    type: 'image',
    description: 'A day of swimming with the service owner and their child.'
  },
  {
    id: 4,
    title: 'Outdoor Pool',
    season: 'summer',
    image: summer4,
    type: 'image',
    description: 'A natural outdoor swimming pool in the resort area.'
  },
  {
    id: 5,
    title: 'Spring Meadow',
    season: 'spring',
    image: springMeadow,
    type: 'image',
    description: 'A blooming hillside meadow during the spring season.'
  },
  {
    id: 6,
    title: 'Spring Hillside',
    season: 'spring',
    image: spring2,
    type: 'image',
    description: 'A vibrant hillside view in the spring.'
  },
  {
    id: 7,
    title: 'Winter Lodge',
    season: 'winter',
    image: winterLodge,
    type: 'image',
    description: 'A cozy lodge surrounded by snowy hills during winter.'
  },
  {
    id: 8,
    title: 'Winter Village View',
    season: 'winter',
    image: winter2,
    type: 'image',
    description: 'A picturesque winter scene in the village area.'
  },
  {
    id: 9,
    title: 'Snow Melts in Spring',
    season: 'winter',
    image: winter3,
    type: 'image',
    description: 'Melting snow signaling the end of winter.'
  },
  {
    id: 10,
    title: 'Falling Maple Leaves',
    season: 'autumn',
    image: autumnCamp,
    type: 'image',
    description: 'Maple leaves falling gently in the autumn breeze.'
  }
];

const seasons = ['all', 'summer', 'autumn', 'winter', 'spring'];

const ActivityGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState('all');

  const filteredActivities = selectedSeason === 'all'
    ? activities
    : activities.filter(activity => activity.season === selectedSeason);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredActivities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredActivities.length) % filteredActivities.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredActivities]);

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 text-outline">
            Activity Gallery
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Discover the adventures that await throughout the year
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {seasons.map((season) => (
              <Button
                key={season}
                variant={selectedSeason === season ? 'seasonal' : 'glass'}
                size="sm"
                onClick={() => {
                  setSelectedSeason(season);
                  setCurrentSlide(0);
                }}
                className="capitalize"
              >
                <Filter className="w-4 h-4 mr-2" />
                {season === 'all' ? 'All Seasons' : season}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative h-[360px] flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-[240px] flex items-center justify-center">
            {filteredActivities.map((activity, index) => {
              const distance = (index - currentSlide + filteredActivities.length) % filteredActivities.length;
              const isActive = index === currentSlide;
              const isPrev = (index === (currentSlide - 1 + filteredActivities.length) % filteredActivities.length);
              const isNext = (index === (currentSlide + 1) % filteredActivities.length);

              let translateX = 0;
              let scale = 0.8;
              let zIndex = 0;
              let opacity = 0;

              if (isActive) {
                translateX = 0;
                scale = 1;
                zIndex = 10;
                opacity = 1;
              } else if (isPrev) {
                translateX = '-120%';
                scale = 0.85;
                zIndex = 5;
                opacity = 0.6;
              } else if (isNext) {
                translateX = '120%';
                scale = 0.85;
                zIndex = 5;
                opacity = 0.6;
              } else {
                translateX = '200%';
                scale = 0.7;
                zIndex = 0;
                opacity = 0;
              }

              return (
                <div
                  key={activity.id}
                  className="absolute w-[320px] h-full glass-strong rounded-2xl overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    zIndex,
                    opacity
                  }}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                    <span className="text-sm font-semibold capitalize">
                      {activity.season}
                    </span>
                    <h3 className="text-lg font-bold">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            variant="glass"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="glass"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {filteredActivities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? 'bg-primary'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityGallery;
