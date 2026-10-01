import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';

interface FoldPanel {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  material: string;
  slug: string;
}

const PANELS: FoldPanel[] = [
  {
    id: 'p1',
    title: 'The Epe Lagoon Villa',
    subtitle: 'Waterfront Pavilion & Mangrove Deck',
    location: 'Epe Waterfront, Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    material: 'Laterite Earth & Oiled Iroko Hardwood',
    slug: 'epe-lagoon-villa'
  },
  {
    id: 'p2',
    title: 'The Ikoyi Courtyard Villa',
    subtitle: 'Botanical Sanctuary & Terracotta Screen',
    location: 'Ikoyi, Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    material: 'Terracotta Brise-Soleil & Basalt Steps',
    slug: 'ikoyi-courtyard-villa'
  },
  {
    id: 'p3',
    title: 'The Koto Pavilion',
    subtitle: 'Single-Storey Courtyard Residence',
    location: 'Surrey Hills',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    material: 'Purbeck Limestone & Western Red Cedar',
    slug: 'koto-house'
  },
  {
    id: 'p4',
    title: 'The Monolith House',
    subtitle: 'Hovering Coastal Ravine Residence',
    location: 'Cornwall, UK',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    material: 'Charred Larch & Board-Formed Concrete',
    slug: 'monolith-hill'
  }
];

export const FoldingPictureGallery: React.FC = () => {
  const { navigate } = useRouter();
  // foldAngle: 0 = completely flat, 45 = accordion Z-fold, 70 = deep origami wrap
  const [foldAngle, setFoldAngle] = useState(38);
  const [isAutoFolding, setIsAutoFolding] = useState(true);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  // Auto-folding gentle breath motion
  useEffect(() => {
    if (!isAutoFolding) return;
    let step = 0;
    const interval = setInterval(() => {
      step += 0.035;
      // Oscillate smoothly between 20deg and 48deg
      const dynamicAngle = 34 + Math.sin(step) * 14;
      setFoldAngle(Math.round(dynamicAngle));
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoFolding]);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-[#FAF8F5] dark:bg-[#151614] border-y border-[#D8D0C3] dark:border-white/10 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header with Fold Preset Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#D8D0C3] dark:border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#977B58] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#977B58]">
                Interactive 3D Spatial Origami
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#20221F] dark:text-white">
              Folding Architectural Screens
            </h2>
            <p className="text-xs sm:text-sm text-[#20221F]/70 dark:text-white/60 font-sans mt-2 max-w-xl">
              Like Japanese Shoji screens and traditional Nigerian Iroko folding partitions, these studies fold and wrap in 3D perspective to reveal shifting sightlines.
            </p>
          </div>

          {/* Interactive Folding Angle Slider & Buttons */}
          <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-[#1A1C19] p-3 border border-[#D8D0C3] dark:border-white/10 rounded-sm shadow-xs font-mono text-xs">
            <span className="text-[#20221F]/60 dark:text-white/50 text-[11px]">Fold Angle:</span>
            
            <button
              onClick={() => { setIsAutoFolding(false); setFoldAngle(0); }}
              className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                foldAngle === 0 ? 'bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] font-semibold' : 'hover:bg-black/5 dark:hover:bg-white/10 text-[#20221F] dark:text-white'
              }`}
            >
              Flat 180°
            </button>

            <button
              onClick={() => { setIsAutoFolding(false); setFoldAngle(40); }}
              className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                foldAngle >= 30 && foldAngle <= 50 && !isAutoFolding ? 'bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] font-semibold' : 'hover:bg-black/5 dark:hover:bg-white/10 text-[#20221F] dark:text-white'
              }`}
            >
              Accordion Fold
            </button>

            <button
              onClick={() => { setIsAutoFolding(false); setFoldAngle(65); }}
              className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                foldAngle >= 60 && !isAutoFolding ? 'bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] font-semibold' : 'hover:bg-black/5 dark:hover:bg-white/10 text-[#20221F] dark:text-white'
              }`}
            >
              Origami Wrap
            </button>

            <button
              onClick={() => setIsAutoFolding(!isAutoFolding)}
              className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer border border-[#977B58] ${
                isAutoFolding ? 'bg-[#977B58] text-white' : 'text-[#977B58] hover:bg-[#977B58]/10'
              }`}
            >
              {isAutoFolding ? 'Auto Breathing On' : 'Auto Breath'}
            </button>
          </div>
        </div>

        {/* 3D Perspective Folding Viewport Container */}
        <div 
          className="relative w-full py-8 overflow-x-auto flex justify-center items-center select-none"
          style={{ perspective: '1600px' }}
        >
          <div 
            className="flex items-center justify-center transition-transform duration-500 ease-out py-6"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {PANELS.map((panel, index) => {
              // Alternate sign for accordion z-folding
              const direction = index % 2 === 0 ? 1 : -1;
              const angle = direction * foldAngle;
              const isHovered = hoveredPanel === index;

              return (
                <div
                  key={panel.id}
                  onClick={() => navigate(`/projects/${panel.slug}`)}
                  onMouseEnter={() => {
                    setHoveredPanel(index);
                    setIsAutoFolding(false);
                  }}
                  onMouseLeave={() => setHoveredPanel(null)}
                  className="relative w-64 sm:w-72 md:w-80 h-[480px] bg-[#121311] border border-[#D8D0C3] dark:border-white/20 shrink-0 cursor-pointer overflow-hidden transition-all duration-700 shadow-2xl origin-left"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${isHovered ? '40px' : '0px'}) scale(${isHovered ? 1.05 : 1})`,
                    transformStyle: 'preserve-3d',
                    marginRight: foldAngle > 10 ? '-22px' : '8px'
                  }}
                >
                  {/* Photo with Ken Burns slow zoom */}
                  <img
                    src={panel.image}
                    alt={panel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-110"
                  />

                  {/* 3D Folding Crease Shadow */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: direction > 0 
                        ? 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)' 
                        : 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)',
                      opacity: Math.min(1, foldAngle / 45)
                    }}
                  />

                  {/* Gradient Overlay for Typography */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />

                  {/* Top Badge: Number and Material */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-xs">
                      Panel 0{index + 1}
                    </span>
                    <span className="text-[#977B58] font-semibold text-[10px] uppercase tracking-wider">
                      Fold {Math.abs(angle)}°
                    </span>
                  </div>

                  {/* Bottom Content Card */}
                  <div className="absolute bottom-5 left-4 right-4 text-white space-y-1.5 pointer-events-none">
                    <span className="text-[10px] font-mono text-[#D8D0C3] block uppercase tracking-wider">
                      {panel.location}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight leading-snug">
                      {panel.title}
                    </h3>
                    <p className="text-xs text-white/70 font-sans font-light line-clamp-1">
                      {panel.subtitle}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#977B58] border-t border-white/15">
                      <span>{panel.material}</span>
                      <span className="underline">Unfold Project →</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Interaction Hint */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#20221F]/60 dark:text-white/50 font-mono pt-2">
          <span>* Click any folded panel to unfold its full architectural study.</span>
          <span>Fold Angle dynamically rotates panels along their vertical hinge.</span>
        </div>

      </div>
    </section>
  );
};
