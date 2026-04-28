import React, { useRef } from 'react';
import type { App } from '../types';
import { useI18n } from '../i18n';

interface CarouselProps {
  apps: App[];
  onAppSelect: (app: App) => void;
}

const Carousel: React.FC<CarouselProps> = ({ apps, onAppSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  if (apps.length === 0) {
    return null;
  }

  return (
    <section className="bg-white dark:bg-gray-800/50 py-12 sm:py-16 relative group" aria-labelledby="featured-apps-heading">
      <div className="container mx-auto px-6">
        <h2 id="featured-apps-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-left">
          {t('featuredAppsHeading')}
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mb-4 scrollbar-hide"
          >
            {apps.map((app) => (
              <div key={app.name} className="snap-start shrink-0 w-[80%] sm:w-[40%] md:w-[30%] lg:w-1/4">
                <button
                  onClick={() => onAppSelect(app)}
                  className="w-full text-left block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={`View details for ${app.name}`}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={app.screenshot || app.thumbnail}
                      alt={`${app.name} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white">{app.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{app.description}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 bg-white/80 dark:bg-gray-900/80 rounded-full p-2 text-gray-700 dark:text-gray-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            aria-label="Previous app"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 bg-white/80 dark:bg-gray-900/80 rounded-full p-2 text-gray-700 dark:text-gray-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            aria-label="Next app"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
       <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .aspect-w-16 { position: relative; padding-bottom: 56.25%; }
        .aspect-h-9 { }
        .aspect-w-16 > * { position: absolute; height: 100%; width: 100%; top: 0; right: 0; bottom: 0; left: 0; }
      `}</style>
    </section>
  );
};

export default Carousel;
