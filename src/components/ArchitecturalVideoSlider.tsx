import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';

interface HouseVideoSlide {
  id: string;
  name: string;
  category: string;
  location: string;
  area: string;
  videoUrl: string;
  posterUrl: string;
  architecturalNote: string;
  slug?: string;
  materials: string;
}

const HOUSE_SLIDES: HouseVideoSlide[] = [
  {
    id: 'epe-lagoon',
    name: 'The Epe Lagoon Pavilion',
    category: 'Waterside Residence',
    location: 'Epe Waterfront, Lagos, Nigeria',
    area: '520 m² GIA',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-exterior-view-of-a-luxurious-modern-house-42866-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80',
    architecturalNote: 'A cantilevered tropical pavilion hovering over mangrove water with operable iroko louvres and infinity reflection pool.',
    slug: 'epe-lagoon-villa',
    materials: 'Warm Laterite Earth · Oiled Nigerian Iroko'
  },
  {
    id: 'koto-house',
    name: 'The Koto Pavilion',
    category: 'Courtyard Residence',
    location: 'Surrey Hills, England',
    area: '340 m² GIA',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-view-of-the-garden-42867-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
    architecturalNote: 'An L-shaped single-storey pavilion organized around an ancient beech woodland courtyard with a Purbeck limestone datum.',
    slug: 'koto-house',
    materials: 'Purbeck Limestone · Western Red Cedar'
  },
  {
    id: 'ikoyi-villa',
    name: 'The Ikoyi Courtyard Villa',
    category: 'Urban Sanctuary',
    location: 'Ikoyi, Lagos, Nigeria',
    area: '640 m² GIA',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sun-rays-passing-through-a-window-in-a-cozy-living-room-43403-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80',
    architecturalNote: 'Fluted terracotta brise-soleil screens protecting double-height botanical courtyards with basalt water stepping stones.',
    slug: 'ikoyi-courtyard-villa',
    materials: 'Terracotta Brise-Soleil · Basalt Flags'
  },
  {
    id: 'monolith-house',
    name: 'The Monolith House',
    category: 'Coastal Cantilever',
    location: 'Cornwall, UK',
    area: '280 m² GIA',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-building-with-many-windows-and-a-blue-sky-42869-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
    architecturalNote: 'Charred larch and board-formed concrete volume cantilevered over steep granite bedrock and maritime ferns.',
    slug: 'monolith-hill',
    materials: 'Yakisugi Charred Larch · Douglas Fir Concrete'
  },
  {
    id: 'courtyard-sanctuary',
    name: 'The Reflection Sanctuary',
    category: 'Landscape Water Court',
    location: 'Victoria Island, Lagos',
    area: '480 m² GIA',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-leaves-falling-in-a-serene-garden-pool-42868-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    architecturalNote: 'Rainwater harvesting reflection basin framing changing tropical skies and passive courtyard air conditioning.',
    slug: 'epe-lagoon-villa',
    materials: 'Polished Abeokuta Granite · Slaked Lime Plaster'
  }
];

export const ArchitecturalVideoSlider: React.FC = () => {
  const { navigate } = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeSlide = HOUSE_SLIDES[currentIdx];

  // Auto-advance video slides every 7.5 seconds
  useEffect(() => {
    if (!isAutoAdvancing) return;

    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HOUSE_SLIDES.length);
    }, 7500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoAdvancing, currentIdx]);

  // Ensure active video is playing
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIdx];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }
  }, [currentIdx]);

  const goToSlide = (idx: number) => {
    setCurrentIdx(idx);
    setIsAutoAdvancing(false); // User took manual control
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % HOUSE_SLIDES.length);
    setIsAutoAdvancing(false);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + HOUSE_SLIDES.length) % HOUSE_SLIDES.length);
    setIsAutoAdvancing(false);
  };

  return (
    <section className="relative w-full bg-[#121311] text-white py-16 px-4 md:px-8 lg:px-12 border-y border-white/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#977B58] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#977B58]">
                Cinematic House Video Reel
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
              Moving Architectural Studies
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-sans mt-2 max-w-xl font-light">
              Video slides of contemporary residences, tropical waterside pavilions, and urban sanctuaries in Lagos, Abuja, and beyond.
            </p>
          </div>

          {/* Controls Header */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoAdvancing(!isAutoAdvancing)}
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center gap-2 text-white"
            >
              <span>{isAutoAdvancing ? '⏸ Pause Slides' : '▶ Autoplay Slides'}</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer font-mono"
                aria-label="Previous house video"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer font-mono"
                aria-label="Next house video"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* The Main Video Slide Viewport */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-sm border border-white/20 bg-black shadow-2xl group">
          
          {/* Active House Videos */}
          {HOUSE_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIdx;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <video
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  src={slide.videoUrl}
                  poster={slide.posterUrl}
                  muted
                  loop
                  playsInline
                  autoPlay={isActive}
                  className="w-full h-full object-cover scale-[1.01]"
                />
                
                {/* Atmospheric Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

                {/* Top Corner Metadata */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
                  <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-[#D8D0C3] border border-white/15 rounded-xs">
                    House 0{idx + 1} / 0{HOUSE_SLIDES.length}
                  </span>
                  <span className="px-3 py-1 bg-[#977B58]/90 text-white text-xs font-mono uppercase tracking-wider rounded-xs">
                    {slide.category}
                  </span>
                </div>

                {/* Bottom Architectural Story Overlay */}
                <div className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
                  <div className="max-w-2xl space-y-2">
                    <span className="text-xs font-mono text-[#D8D0C3] tracking-widest uppercase block">
                      {slide.location} · {slide.area}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
                      {slide.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-sans font-light leading-relaxed max-w-xl">
                      {slide.architecturalNote}
                    </p>
                    <div className="text-[11px] font-mono text-[#977B58] pt-1">
                      Materials: {slide.materials}
                    </div>
                  </div>

                  {slide.slug && (
                    <button
                      onClick={() => navigate(`/projects/${slide.slug}`)}
                      className="pointer-events-auto px-5 py-2.5 bg-[#F4F1EB] hover:bg-[#D8D0C3] text-[#121311] text-xs font-mono uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer whitespace-nowrap shadow-lg self-start md:self-end"
                    >
                      Explore This House →
                    </button>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Slide Thumbnails / Indicator Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {HOUSE_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIdx;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`p-3 text-left border rounded-sm transition-all cursor-pointer relative overflow-hidden group ${
                  isActive
                    ? 'border-[#977B58] bg-white/10 shadow-md'
                    : 'border-white/10 hover:border-white/30 bg-black/40 hover:bg-white/5'
                }`}
              >
                {/* Auto-Advance Progress Line on Active Slide */}
                {isActive && isAutoAdvancing && (
                  <div className="absolute top-0 left-0 bottom-0 bg-[#977B58]/20 w-full animate-progress" />
                )}

                <div className="relative z-10 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className={isActive ? 'text-[#977B58] font-bold' : 'text-white/40'}>
                      0{idx + 1}
                    </span>
                    <span className="text-white/40 text-[9px] uppercase">
                      {slide.category.split(' ')[0]}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-serif text-white truncate group-hover:text-[#D8D0C3]">
                    {slide.name}
                  </h4>
                  <div className="text-[10px] text-white/50 truncate font-mono">
                    {slide.location.split(',')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
