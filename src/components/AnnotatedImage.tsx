import React, { useState } from 'react';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

interface AnnotatedImageProps {
  src: string;
  alt: string;
  caption: string;
  hotspots: Hotspot[];
}

export const AnnotatedImage: React.FC<AnnotatedImageProps> = ({
  src,
  alt,
  caption,
  hotspots
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <div className="relative w-full overflow-hidden border border-[#D8D0C3] dark:border-white/10 group">
      {/* Main Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#20221F]">
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Interactive Hotspots */}
        {hotspots.map((spot) => {
          const isActive = activeHotspot?.id === spot.id;
          return (
            <div
              key={spot.id}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                onClick={() => setActiveHotspot(isActive ? null : spot)}
                onMouseEnter={() => setActiveHotspot(spot)}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-[#977B58] text-white scale-110 shadow-lg ring-4 ring-white/30'
                    : 'bg-white/80 hover:bg-white text-[#20221F] shadow-md backdrop-blur-xs'
                }`}
                aria-label={`Inspect detail: ${spot.title}`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
              </button>

              {/* Tooltip Card */}
              {isActive && (
                <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-64 bg-[#20221F]/90 dark:bg-[#121311]/95 text-white p-3.5 rounded-sm border border-white/20 shadow-2xl backdrop-blur-md z-30 pointer-events-auto">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#977B58] mb-1">
                    Design Detail
                  </div>
                  <h4 className="text-sm font-serif font-normal text-white mb-1">
                    {spot.title}
                  </h4>
                  <p className="text-[11px] text-white/70 leading-relaxed font-sans font-light">
                    {spot.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Interactive Tip Banner */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#20221F]/70 backdrop-blur-md px-3 py-1 text-white text-[11px] font-mono rounded-sm border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#977B58] animate-ping" />
          <span>Interactive Hotspots: Click markers to inspect spatial details</span>
        </div>

        {/* Caption */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/80 font-mono">
          <span className="bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-sm">{caption}</span>
          <span className="hidden sm:inline bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-sm text-[#D8D0C3]">
            Purbeck Limestone & Cedar Study
          </span>
        </div>
      </div>
    </div>
  );
};
