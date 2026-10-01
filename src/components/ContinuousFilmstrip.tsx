import React from 'react';

interface FilmstripItem {
  id: string;
  image: string;
  location: string;
  title: string;
  tag: string;
}

const ITEMS: FilmstripItem[] = [
  {
    id: 'epe_lagoon',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    location: 'Epe Waterfront, Lagos',
    title: 'The Epe Lagoon Pavilion',
    tag: 'Nigerian Coastal Architecture'
  },
  {
    id: 'ikoyi_court',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    location: 'Ikoyi, Lagos',
    title: 'The Ikoyi Courtyard Villa',
    tag: 'Tropical Brise-Soleil'
  },
  {
    id: 'koto_study',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    location: 'Surrey Hills',
    title: 'The Koto Pavilion',
    tag: 'Limestone Plinth'
  },
  {
    id: 'resort_palms',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    location: 'Lekki Peninsula, Lagos',
    title: 'Jara Lagoon Retreat',
    tag: 'Infinity Reflection Basin'
  },
  {
    id: 'monolith_cliff',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    location: 'Atlantic Coast',
    title: 'The Monolith House',
    tag: 'Charred Timber Cantilever'
  },
  {
    id: 'interior_oak',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    location: 'Victoria Island, Lagos',
    title: 'The Botanical Living Court',
    tag: 'Oiled Iroko Joinery'
  }
];

export const ContinuousFilmstrip: React.FC = () => {
  return (
    <div className="w-full bg-[#161815] dark:bg-[#0D0E0C] py-8 border-y border-white/10 overflow-hidden select-none">
      
      {/* Top Header Line */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4 flex items-center justify-between text-xs font-mono text-[#D8D0C3]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#977B58] animate-ping" />
          <span className="uppercase tracking-widest text-[#977B58]">Continuous Motion Filmstrip</span>
          <span className="hidden sm:inline text-white/50">· Gliding Architectural Studies</span>
        </div>
        <div className="text-[11px] text-white/50 hidden sm:inline">
          Lagos · Abuja · Surrey · Atlantic Topography
        </div>
      </div>

      {/* Moving Track Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Double track for seamless infinite horizontal loop */}
        <div className="flex shrink-0 animate-marquee space-x-6 hover:[animation-play-state:paused] py-2">
          {ITEMS.concat(ITEMS).map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative w-72 sm:w-80 md:w-96 aspect-[16/10] shrink-0 overflow-hidden border border-white/15 bg-[#20221F] group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-[10px] font-mono uppercase text-[#D8D0C3] px-2 py-0.5 border border-white/10">
                {item.tag}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-mono text-[#977B58] block mb-0.5">
                  {item.location}
                </span>
                <h4 className="text-base font-serif text-white group-hover:text-[#D8D0C3] transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
