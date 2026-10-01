import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS } from '../data/projects';
import { ProjectCategory } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const ProjectsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filterOptions: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'New Homes', value: 'new-homes' },
    { label: 'Renovations & Additions', value: 'renovations-extensions' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-36 pb-32 px-4 md:px-8 lg:px-12 text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header (Airy & uncluttered) */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
            Nigerian Residential Architecture
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#20221F] dark:text-white tracking-tight leading-[1.1]">
            Houses & Bespoke Pavilions
          </h1>
          <p className="text-base sm:text-lg text-[#20221F]/75 dark:text-white/70 font-sans leading-relaxed font-light pt-2 max-w-2xl">
            We transform dreams into houses. Each residential commission in Lagos, Abuja, and beyond embodies our preoccupation with equatorial natural illumination, passive cross-ventilation, and tactile Nigerian materiality.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-[#D8D0C3] dark:border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedCategory(opt.value)}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === opt.value
                    ? 'bg-[#20221F] dark:bg-[#F4F1EB] text-[#F4F1EB] dark:text-[#121311] shadow-xs'
                    : 'bg-[#EAE5DC] dark:bg-[#1A1C19] text-[#20221F]/70 dark:text-white/70 hover:text-[#20221F] dark:hover:text-white hover:bg-[#D8D0C3] dark:hover:bg-white/10'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#20221F]/60 dark:text-white/50 font-mono">
            Showing {filteredProjects.length} of {PROJECTS.length} Studies
          </div>
        </div>

        {/* Projects Grid with generous spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0;
            return (
              <article
                key={project.slug}
                onClick={() => navigate(`/projects/${project.slug}`)}
                className={`group cursor-pointer flex flex-col justify-between space-y-6 ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden bg-[#20221F] border border-[#D8D0C3] dark:border-white/10">
                  <ImageWithFallback
                    src={project.heroImage}
                    alt={project.heroImageAlt}
                    fallbackTitle={project.title}
                    aspectRatioClass={isWide ? 'aspect-[21/9]' : 'aspect-[16/10]'}
                    className="object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-xs text-[#F4F1EB] text-[10px] font-mono uppercase tracking-wider px-3 py-1">
                    Concept Study
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-xs text-[#20221F] dark:text-white text-xs font-mono px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Study →
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-[#20221F]/60 dark:text-white/50 font-mono">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.area}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif text-[#20221F] dark:text-white group-hover:text-[#977B58] transition-colors leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-sm text-[#20221F]/75 dark:text-white/70 font-sans leading-relaxed font-light line-clamp-2 max-w-3xl">
                    {project.subtitle}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
};
