import React, { useState, useRef, useCallback, useEffect } from 'react';

export const InteractiveLightSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoAnimating, setIsAutoAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-swaying animation: gently shifts the curtain so the landing page visibly MOVES
  useEffect(() => {
    if (!isAutoAnimating || isDragging) return;
    let step = 0;
    const interval = setInterval(() => {
      step += 0.025;
      // Oscillate smoothly between 22% and 78%
      const newPos = 50 + Math.sin(step) * 28;
      setSliderPosition(parseFloat(newPos.toFixed(1)));
    }, 40);

    return () => clearInterval(interval);
  }, [isAutoAnimating, isDragging]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    setIsAutoAnimating(false);
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full bg-[#1A1C19] dark:bg-[#0E0F0D] py-20 px-4 md:px-8 border-y border-white/10 text-white select-none">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#977B58] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#977B58]">
                Interactive Dual-Illumination Study
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif text-white">
              Purbeck Limestone Plinth · Deep Cedar Soffits
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-sans mt-2 max-w-xl font-light">
              Watch the architecture transform from raking horizontal morning sunlight into intimate amber hearth illumination.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoAnimating(!isAutoAnimating)}
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isAutoAnimating ? '⏸ Pause Auto-Sweep' : '▶ Auto-Sweep Light'}</span>
            </button>
            <div className="text-xs font-mono text-white/50 hidden lg:inline">
              Drag the divider or let it sweep
            </div>
          </div>
        </div>

        {/* The Comparison Viewport */}
        <div
          ref={containerRef}
          onMouseDown={() => {
            setIsDragging(true);
            setIsAutoAnimating(false);
          }}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsAutoAnimating(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] select-none overflow-hidden rounded-sm cursor-ew-resize border border-white/20 shadow-2xl group"
        >
          {/* Night Image (Background full) */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Courtyard residence in evening warm lighting"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-6 right-6 z-10 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/15 text-xs font-mono text-[#D8D0C3]">
            🌙 Dusk · Interior Hearth Glow & Ambient Cedar Soffits
          </div>

          {/* Day Image (Clipped by slider position) */}
          <div
            style={{ width: `${sliderPosition}%` }}
            className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#F4F1EB] shadow-[0_0_25px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
          >
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
                alt="Courtyard residence in morning sunlight"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-[100vw] max-w-none h-full object-cover"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
                }}
              />
            </div>
            <div className="absolute bottom-6 left-6 z-10 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/15 text-xs font-mono text-[#D8D0C3]">
              ☀️ Day · Raking Morning Solar Wash on Limestone Datum
            </div>
          </div>

          {/* Interactive Draggable Handle */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute inset-y-0 -ml-5 w-10 flex items-center justify-center z-30 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#F4F1EB] text-[#20221F] shadow-2xl flex items-center justify-center border-2 border-[#20221F] hover:scale-110 transition-transform">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
              </svg>
            </div>
          </div>

        </div>

        {/* Footnote */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 font-mono pt-2">
          <span>Purbeck Limestone Plinth · Deep Cedar Soffits · Thermally Broken Glazing</span>
          <span className="text-[#977B58]">Sweep divider: {sliderPosition.toFixed(0)}% Day / {(100 - sliderPosition).toFixed(0)}% Dusk</span>
        </div>

      </div>
    </div>
  );
};
