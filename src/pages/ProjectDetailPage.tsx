import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS } from '../data/projects';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const project = PROJECTS.find((p) => p.slug === slug);
  const [activeDrawingTab, setActiveDrawingTab] = useState<number>(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-36 pb-24 px-4 text-center">
        <h1 className="text-3xl font-serif text-[#20221F] dark:text-white mb-4">Study Not Found</h1>
        <p className="text-sm text-[#20221F]/70 dark:text-white/60 mb-6">The architectural study you requested does not exist.</p>
        <button
          onClick={() => navigate('/projects')}
          className="px-5 py-2.5 bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] text-xs font-mono uppercase tracking-wider font-semibold rounded-sm"
        >
          Return to Projects
        </button>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      
      {/* 1. Hero Image */}
      <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden bg-[#121311]">
        <img
          src={project.heroImage}
          alt={project.heroImageAlt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-90 scale-[1.01]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        
        {/* Back Link & Label */}
        <div className="absolute top-28 left-4 md:left-12 z-20 flex items-center gap-3">
          <button
            onClick={() => navigate('/projects')}
            className="px-3 py-1.5 bg-black/60 hover:bg-black/90 backdrop-blur-md text-[#F4F1EB] text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
          >
            ← All studies
          </button>
          <span className="px-3 py-1.5 bg-[#977B58]/90 text-white text-xs font-mono uppercase tracking-wider rounded-sm">
            Concept Study
          </span>
        </div>

        {/* Hero Title */}
        <div className="absolute bottom-10 left-4 md:left-12 right-4 md:right-12 z-10 max-w-5xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D8D0C3] block mb-2">
            {project.categoryLabel} · {project.location}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl text-white/85 font-sans font-light max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Metadata Ribbon */}
      <section className="border-b border-[#D8D0C3] dark:border-white/10 bg-[#FAF8F5] dark:bg-[#161815] py-6 px-4 md:px-8 lg:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <span className="block uppercase text-[#20221F]/50 dark:text-white/40 mb-1">Status</span>
            <span className="font-semibold text-[#20221F] dark:text-white">{project.status}</span>
          </div>
          <div>
            <span className="block uppercase text-[#20221F]/50 dark:text-white/40 mb-1">Proposed Year</span>
            <span className="font-semibold text-[#20221F] dark:text-white">{project.year}</span>
          </div>
          <div>
            <span className="block uppercase text-[#20221F]/50 dark:text-white/40 mb-1">Spatial Area</span>
            <span className="font-semibold text-[#20221F] dark:text-white">{project.area}</span>
          </div>
          <div>
            <span className="block uppercase text-[#20221F]/50 dark:text-white/40 mb-1">Location Context</span>
            <span className="font-semibold text-[#20221F] dark:text-white">{project.location}</span>
          </div>
        </div>
      </section>

      {/* 3. Narrative & Spatial Sequence (Spacious, airy editorial layout) */}
      <section className="py-28 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
                01 / The Inception
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#20221F] dark:text-white leading-tight">
                The Client Brief
              </h2>
              <p className="text-base sm:text-lg text-[#20221F]/80 dark:text-white/70 leading-relaxed font-sans font-light max-w-3xl">
                {project.brief}
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
                02 / Topography & Microclimate
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#20221F] dark:text-white leading-tight">
                Site & Environmental Context
              </h2>
              <p className="text-base sm:text-lg text-[#20221F]/80 dark:text-white/70 leading-relaxed font-sans font-light max-w-3xl">
                {project.context}
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
                03 / Form & Apertures
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#20221F] dark:text-white leading-tight">
                The Design Response
              </h2>
              <p className="text-base sm:text-lg text-[#20221F]/80 dark:text-white/70 leading-relaxed font-sans font-light max-w-3xl">
                {project.designResponse}
              </p>
            </div>

            <div className="p-10 bg-[#FAF8F5] dark:bg-[#161815] border border-[#D8D0C3] dark:border-white/10 space-y-6">
              <h3 className="text-2xl font-serif text-[#20221F] dark:text-white">Spatial Choreography</h3>
              <div className="space-y-5 text-sm sm:text-base text-[#20221F]/80 dark:text-white/70 leading-relaxed font-sans font-light">
                {project.spatialStory.map((paragraph, idx) => (
                  <p key={idx} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-[#977B58] mt-1 shrink-0 font-medium">
                      0{idx + 1}.
                    </span>
                    <span>{paragraph}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="p-8 bg-[#FAF8F5] dark:bg-[#161815] border border-[#D8D0C3] dark:border-white/10 space-y-6">
              <h3 className="text-xl font-serif text-[#20221F] dark:text-white pb-3 border-b border-[#D8D0C3] dark:border-white/10">
                Tactile Material Palette
              </h3>
              <div className="space-y-5">
                {project.materials.map((mat, i) => (
                  <div key={i} className="space-y-1.5">
                    <span className="font-semibold text-[#20221F] dark:text-white block font-mono text-xs">{mat.name}</span>
                    <p className="text-xs text-[#20221F]/70 dark:text-white/60 leading-relaxed font-light">{mat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-[#20221F] dark:bg-[#1A1C19] text-[#F4F1EB] border border-white/10 space-y-4">
              <h3 className="text-2xl font-serif text-white leading-snug">
                Envisaging a similar home?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light font-sans">
                We would be glad to discuss how these principles of light, proportion, and courtyard privacy could apply to your site.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3.5 bg-[#F4F1EB] text-[#20221F] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#D8D0C3] transition-colors rounded-sm cursor-pointer"
                >
                  Inquire about this study →
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Visual Gallery */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-[#FAF8F5] dark:bg-[#161815] border-t border-[#D8D0C3] dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="pb-4 border-b border-[#D8D0C3] dark:border-white/10 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#20221F] dark:text-white">
              Visual Study Gallery
            </h2>
            <span className="text-xs font-mono text-[#20221F]/60 dark:text-white/50">
              {project.gallery.length} Archival Views
            </span>
          </div>

          <div className="space-y-12">
            {project.gallery.map((item, idx) => (
              <figure key={idx} className="space-y-3">
                <div className="border border-[#D8D0C3] dark:border-white/10 overflow-hidden bg-[#20221F]">
                  <ImageWithFallback
                    src={item.url}
                    alt={item.alt}
                    fallbackTitle={project.title}
                    aspectRatioClass={item.aspectRatio === '16:9' ? 'aspect-[16/9]' : 'aspect-[16/10]'}
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-xs text-[#20221F]/70 dark:text-white/60 flex items-center justify-between px-1">
                  <span className="font-serif italic">{item.caption}</span>
                  <span className="font-mono text-[10px] uppercase text-[#977B58]">{item.type}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Architectural Drawings */}
      {project.drawings && project.drawings.length > 0 && (
        <section className="py-20 px-4 md:px-8 lg:px-12 bg-[#F4F1EB] dark:bg-[#121311] border-t border-[#D8D0C3] dark:border-white/10 transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#977B58] block mb-2">
                Technical Drafts
              </span>
              <h2 className="text-3xl font-serif text-[#20221F] dark:text-white mb-4">
                Architectural Plans & Sections
              </h2>
            </div>

            <div className="flex gap-2 mb-6 border-b border-[#D8D0C3] dark:border-white/10 pb-3">
              {project.drawings.map((drawing, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDrawingTab(i)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                    activeDrawingTab === i
                      ? 'bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311]'
                      : 'bg-[#EAE5DC] dark:bg-[#1A1C19] text-[#20221F]/70 dark:text-white/70'
                  }`}
                >
                  {drawing.type}
                </button>
              ))}
            </div>

            <div className="border border-[#D8D0C3] dark:border-white/10 bg-white dark:bg-[#1A1C19] p-6 sm:p-12 overflow-x-auto">
              <div className="min-w-[600px] flex flex-col items-center justify-center">
                <div className="text-xs font-mono text-[#977B58] mb-4">
                  DREAMBUILT ARCHITECTURAL DRAWING · {project.drawings[activeDrawingTab].title}
                </div>
                
                <svg className="w-full max-w-3xl h-80" viewBox="0 0 800 350" fill="none">
                  <line x1="50" y1="50" x2="750" y2="50" stroke="#888" strokeOpacity="0.2" strokeDasharray="4 4" />
                  <line x1="50" y1="175" x2="750" y2="175" stroke="#888" strokeOpacity="0.2" strokeDasharray="4 4" />
                  <line x1="50" y1="300" x2="750" y2="300" stroke="#888" strokeOpacity="0.2" strokeDasharray="4 4" />
                  
                  <rect x="80" y="80" width="640" height="200" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
                  <rect x="280" y="140" width="220" height="140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.6" />
                  <text x="350" y="215" fill="#977B58" fontSize="11" fontFamily="monospace" letterSpacing="2">COURTYARD</text>
                  
                  <rect x="80" y="80" width="200" height="200" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <text x="135" y="180" fill="currentColor" fontSize="12" fontFamily="monospace" fontWeight="600">LIVING HALL</text>
                  <text x="135" y="196" fill="#977B58" fontSize="10" fontFamily="monospace">+0.000 DATUM</text>
                  
                  <rect x="280" y="80" width="220" height="60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <text x="340" y="115" fill="currentColor" fontSize="11" fontFamily="monospace">KITCHEN</text>

                  <rect x="500" y="80" width="220" height="200" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <text x="560" y="180" fill="currentColor" fontSize="12" fontFamily="monospace" fontWeight="600">PRIVATE SUITE</text>

                  <line x1="80" y1="315" x2="720" y2="315" stroke="#977B58" strokeWidth="1" />
                  <text x="380" y="332" fill="#977B58" fontSize="10" fontFamily="monospace">28.40 METRES</text>
                </svg>

                <div className="mt-4 flex items-center justify-between w-full text-[11px] text-[#20221F]/60 dark:text-white/40 border-t border-[#D8D0C3] dark:border-white/10 pt-3 font-mono">
                  <span>SCALE: 1:100 @ A1 (INDICATIVE CONCEPT)</span>
                  <span>ORIENTATION: SOUTH-FACING SOLAR ENVELOPE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Related Projects */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-[#FAF8F5] dark:bg-[#161815] border-t border-[#D8D0C3] dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-serif text-[#20221F] dark:text-white">
              Further Studies
            </h2>
            <button
              onClick={() => navigate('/projects')}
              className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white hover:text-[#977B58] transition-colors border-b border-[#20221F] dark:border-white pb-0.5"
            >
              All Projects →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => navigate(`/projects/${rel.slug}`)}
                className="group cursor-pointer border border-[#D8D0C3] dark:border-white/10 bg-white dark:bg-[#1A1C19] p-4 transition-colors"
              >
                <div className="relative overflow-hidden bg-[#20221F] mb-4">
                  <ImageWithFallback
                    src={rel.heroImage}
                    alt={rel.heroImageAlt}
                    fallbackTitle={rel.title}
                    aspectRatioClass="aspect-[16/10]"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="text-xs font-mono text-[#20221F]/60 dark:text-white/50 mb-1">
                  {rel.categoryLabel} · {rel.location}
                </div>
                <h3 className="text-xl font-serif text-[#20221F] dark:text-white group-hover:text-[#977B58] transition-colors">
                  {rel.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
};
