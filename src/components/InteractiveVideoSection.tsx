import React, { useRef, useEffect } from 'react';

interface InteractiveVideoSectionProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  subtitle: string;
  quote?: string;
  aspectRatioClass?: string;
  autoPlay?: boolean;
}

export const InteractiveVideoSection: React.FC<InteractiveVideoSectionProps> = ({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  quote,
  aspectRatioClass = 'aspect-[16/9] md:aspect-[21/9]',
  autoPlay = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Pause when offscreen to conserve CPU / GPU resources
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        } else if (entry.isIntersecting && autoPlay && video.paused) {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoPlay]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#121311] border-y border-[#D8D0C3]/30 dark:border-white/10 group ${aspectRatioClass}`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        className="w-full h-full object-cover transition-opacity duration-700 pointer-events-none"
      />

      {/* Atmospheric Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 pointer-events-none" />

      {/* Overlaid Title & Architectural Prose (Clean, distraction-free) */}
      <div className="absolute bottom-8 left-4 md:left-12 right-4 md:right-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D8D0C3] block mb-2">
            Atmospheric Film Record
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-white/80 font-sans font-light leading-relaxed">
            {subtitle}
          </p>
          {quote && (
            <p className="text-xs md:text-sm font-serif italic text-[#D8D0C3] mt-2">
              "{quote}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
