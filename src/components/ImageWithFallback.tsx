import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Architectural project photograph',
  fallbackTitle = 'Architectural Study',
  className = '',
  containerClassName = '',
  aspectRatioClass = 'aspect-4/3',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#E8E2D8] ${aspectRatioClass} ${containerClassName}`}>
      {/* Subtle architectural grain & hairline grid placeholder */}
      <div 
        className={`absolute inset-0 bg-[#E8E2D8] transition-opacity duration-700 pointer-events-none flex flex-col items-center justify-center p-6 text-center ${
          loaded && !error ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-12 h-12 border border-[#D8D0C3] flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-[#977B58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        </div>
        <span className="text-xs uppercase tracking-widest text-[#68705C] font-medium font-sans">
          {fallbackTitle}
        </span>
        <span className="text-[11px] text-[#20221F]/60 mt-1 max-w-[200px] truncate">
          DreamBuilt Architectural Study
        </span>
      </div>

      {src && !error && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
