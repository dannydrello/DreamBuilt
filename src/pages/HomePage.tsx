import React, { useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS } from '../data/projects';
import { ARTICLES } from '../data/articles';
import { Signature3DExperience } from '../components/Signature3DExperience';
import { InteractiveLightSlider } from '../components/InteractiveLightSlider';
import { AnnotatedImage } from '../components/AnnotatedImage';
import { ContinuousFilmstrip } from '../components/ContinuousFilmstrip';
import { FoldingPictureGallery } from '../components/FoldingPictureGallery';
import { ArchitecturalVideoSlider } from '../components/ArchitecturalVideoSlider';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const selectedProjects = PROJECTS.slice(0, 4);
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500 overflow-x-hidden">
      
      {/* ============================================================
          STREAM 01: HERO FULL-BLEED ARCHITECTURAL FILM (NO SOUND BUTTON)
          ============================================================ */}
      <section className="relative w-full h-[95vh] min-h-[660px] flex items-end justify-start overflow-hidden bg-[#121311]">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-85 transition-opacity duration-1000 scale-[1.02] pointer-events-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-view-of-the-garden-42867-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Film Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none" />

        {/* Hero Copy (Uncluttered, airy typography) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-20 md:pb-28 w-full">
          <div className="max-w-3xl space-y-8">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8D0C3] block">
              Residential Architectural Practice · Lagos · Abuja · London
            </span>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight leading-[1.08] text-balance">
              Imagine the life.<br />
              <span className="italic font-light text-[#D8D0C3]">We’ll shape the space.</span>
            </h1>

            <p className="text-base sm:text-xl text-white/85 font-sans font-light max-w-xl leading-relaxed">
              Thoughtful residential architecture for the way you want to live. Contemporary waterfront retreats, shaded courtyards, and enduring natural geology.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <button
                onClick={() => navigate('/projects')}
                className="px-8 py-4 text-xs font-mono uppercase tracking-widest font-semibold text-[#121311] bg-[#F4F1EB] hover:bg-[#D8D0C3] transition-all rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
              >
                Explore our work
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 text-xs font-mono uppercase tracking-widest font-semibold text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all rounded-sm cursor-pointer"
              >
                Start your project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-4 md:right-12 z-10 text-[11px] font-mono uppercase tracking-widest text-white/50 flex items-center gap-2">
          <span>Scroll to explore moving studies</span>
          <span className="animate-bounce">↓</span>
        </div>
      </section>

      {/* ============================================================
          STREAM 02: CONTINUOUS MOVING FILMSTRIP
          ============================================================ */}
      <ContinuousFilmstrip />

      {/* ============================================================
          STREAM 03: BEAUTIFUL NIGERIAN ARCHITECTURAL STUDY 01 (EPE LAGOON)
          ============================================================ */}
      <section className="py-28 px-4 md:px-8 lg:px-12 bg-[#FAF8F5] dark:bg-[#161815] transition-colors duration-500">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#D8D0C3] dark:border-white/10 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#977B58] animate-ping" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#977B58]">
                  Nigerian Waterfront Commission Study · Lagos
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#20221F] dark:text-white leading-tight">
                The Epe Lagoon Pavilion
              </h2>
            </div>
            <div className="text-xs font-mono text-[#20221F]/70 dark:text-white/60">
              Laterite Earth Plaster · Floating Iroko Boardwalks · Epe, Lagos
            </div>
          </div>

          <AnnotatedImage
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury contemporary waterside villa with tropical palms, reflecting pool and deep overhangs in Lagos Nigeria"
            caption="The Epe Lagoon Pavilion: Elevating tropical residential living along the mangrove lagoon."
            hotspots={[
              {
                id: 'laterite_plaster',
                x: 28,
                y: 65,
                title: 'Warm Laterite Earth Plaster',
                description: 'Local terracotta clay plaster offering natural thermal cooling and rich textural warmth under equatorial sunlight.'
              },
              {
                id: 'iroko_louvres',
                x: 64,
                y: 35,
                title: 'Operable Iroko Brise-Soleil',
                description: 'Rot-resistant West African hardwood louvres deflect blinding midday water reflection while welcoming maritime breezes.'
              },
              {
                id: 'infinity_basin',
                x: 75,
                y: 78,
                title: 'Convective Reflection Pool',
                description: 'Shallow water mirror cools prevailing ocean breezes before they circulate into double-height sleeping pavilions.'
              }
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 items-center">
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl font-serif text-[#20221F] dark:text-[#D8D0C3] italic leading-relaxed">
                “In the tropical climate of Lagos, architecture is not an enclosure to trap cool air, but a shaded instrument that breathes with the water and the trees.”
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <button
                onClick={() => navigate('/projects/epe-lagoon-villa')}
                className="px-7 py-3.5 bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] text-xs font-mono uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              >
                Inspect Epe Study →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          STREAM 04: PICTURES FOLDING & WRAPPING 3D INTERACTIVE GALLERY
          ============================================================ */}
      <FoldingPictureGallery />

      {/* ============================================================
          STREAM 05: ARCHITECTURAL MULTI-HOUSE VIDEO SLIDER
          ============================================================ */}
      <ArchitecturalVideoSlider />

      {/* ============================================================
          STREAM 06: PURBECK LIMESTONE & CEDAR DAY/NIGHT CURTAIN SLIDER
          ============================================================ */}
      <InteractiveLightSlider />

      {/* ============================================================
          STREAM 07: BEAUTIFUL NIGERIAN ARCHITECTURAL STUDY 02 (IKOYI)
          ============================================================ */}
      <section className="py-28 px-4 md:px-8 lg:px-12 bg-[#F4F1EB] dark:bg-[#121311] transition-colors duration-500">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#977B58] block">
              Lagos Urban Sanctuary · Study 02
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#20221F] dark:text-white leading-tight">
              The Ikoyi Courtyard Villa
            </h2>
            <p className="text-base text-[#20221F]/70 dark:text-white/70 font-sans font-light leading-relaxed">
              Fluted terracotta brise-soleil, floating volcanic basalt steps, and double-height botanical courts in prime Ikoyi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            
            {/* Left: Ikoyi Villa Architectural View */}
            <div 
              onClick={() => navigate('/projects/ikoyi-courtyard-villa')}
              className="md:col-span-7 group cursor-pointer border border-[#D8D0C3] dark:border-white/10 bg-white dark:bg-[#1A1C19] p-6 flex flex-col justify-between transition-transform duration-500 hover:shadow-xl space-y-6"
            >
              <div className="relative overflow-hidden bg-[#20221F] aspect-[16/10]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80"
                  alt="Modern luxury architectural residence in tropical Ikoyi Lagos Nigeria"
                  fallbackTitle="Ikoyi Villa"
                  aspectRatioClass="aspect-[16/10]"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono uppercase px-3 py-1 tracking-wider">
                  Ikoyi Sanctuary · Lagos
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#20221F] dark:text-white group-hover:text-[#977B58] transition-colors leading-snug">
                  Secluded Botanical Courtyard
                </h3>
                <p className="text-sm text-[#20221F]/70 dark:text-white/60 font-sans leading-relaxed font-light">
                  Deep terracotta louvres grant complete acoustic privacy from the metropolis while allowing sea breezes from Lagos lagoon to circulate.
                </p>
              </div>
            </div>

            {/* Right: Tactile Materiality Detail */}
            <div className="md:col-span-5 border border-[#D8D0C3] dark:border-white/10 bg-white dark:bg-[#1A1C19] p-6 flex flex-col justify-between space-y-6">
              <div className="relative overflow-hidden bg-[#20221F] aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80"
                  alt="Tropical palm resort pavilion and reflecting water"
                  fallbackTitle="Tropical Water Basin"
                  aspectRatioClass="aspect-[4/3]"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono uppercase px-3 py-1 tracking-wider">
                  Atmosphere
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-[#20221F] dark:text-white leading-snug">
                  Water & Canopy Integration
                </h3>
                <p className="text-sm text-[#20221F]/70 dark:text-white/60 font-sans leading-relaxed font-light">
                  Reflective water basins inspired by traditional Nigerian compound courtyards, creating micro-climates that lower ambient temperature by up to 4°C.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          STREAM 08: SIGNATURE 3D INTERACTIVE HOUSE PROGRESSION
          ============================================================ */}
      <Signature3DExperience />

      {/* ============================================================
          STREAM 09: CURATED PORTFOLIO ARCHIVE
          ============================================================ */}
      <section className="py-28 px-4 md:px-8 lg:px-12 bg-[#FAF8F5] dark:bg-[#161815] transition-colors duration-500">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#D8D0C3] dark:border-white/10 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#977B58] block">
                Curated Portfolio Archive
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#20221F] dark:text-white leading-tight">
                Selected Works & Studies
              </h2>
            </div>
            <button
              onClick={() => navigate('/projects')}
              className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white hover:text-[#977B58] transition-colors border-b border-[#20221F] dark:border-white pb-1 cursor-pointer"
            >
              View complete archive →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20">
            {selectedProjects.map((project, idx) => (
              <article
                key={project.slug}
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="group cursor-pointer flex flex-col justify-between space-y-5"
              >
                <div className="relative overflow-hidden bg-[#20221F] border border-[#D8D0C3] dark:border-white/10">
                  <ImageWithFallback
                    src={project.heroImage}
                    alt={project.heroImageAlt}
                    fallbackTitle={project.title}
                    aspectRatioClass={idx === 0 || idx === 3 ? 'aspect-[16/10]' : 'aspect-[4/3]'}
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono uppercase px-3 py-1 tracking-wider">
                    {project.status}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-[#20221F]/60 dark:text-white/50 font-mono">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.area}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#20221F] dark:text-white group-hover:text-[#977B58] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#20221F]/75 dark:text-white/70 font-sans leading-relaxed line-clamp-2 font-light">
                    {project.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          STREAM 10: EDITORIAL ESSAY HIGHLIGHTS
          ============================================================ */}
      <section className="py-28 px-4 md:px-8 lg:px-12 bg-[#F4F1EB] dark:bg-[#121311] border-t border-[#D8D0C3] dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#D8D0C3] dark:border-white/10 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#977B58] block">
                Thought Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#20221F] dark:text-white leading-tight">
                From the Journal
              </h2>
            </div>
            <button
              onClick={() => navigate('/journal')}
              className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white hover:text-[#977B58] transition-colors border-b border-[#20221F] dark:border-white pb-1 cursor-pointer"
            >
              All Essays →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                onClick={() => navigate(`/journal/${article.slug}`)}
                className="group cursor-pointer border border-[#D8D0C3] dark:border-white/10 bg-white dark:bg-[#1A1C19] p-6 flex flex-col justify-between transition-colors hover:border-[#977B58] space-y-6"
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden aspect-[16/10] bg-[#20221F]">
                    <img
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="text-[11px] font-mono text-[#20221F]/60 dark:text-white/50">
                    {article.category} · {article.readTime}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#20221F] dark:text-white group-hover:text-[#977B58] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20221F]/70 dark:text-white/60 font-sans line-clamp-2 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3] dark:border-white/10 text-xs font-mono text-[#977B58]">
                  Read Essay →
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          STREAM 11: FULL-BLEED CLOSING INVITATION (CINEMATIC)
          ============================================================ */}
      <section className="relative py-32 px-4 md:px-8 lg:px-12 bg-[#121311] text-white text-center overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80"
            alt="Dusk waterside pavilion in tropical Nigeria"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8D0C3] block">
            Begin the Journey
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-tight tracking-tight">
            Your next chapter begins with a conversation.
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto font-sans font-light leading-relaxed">
            Whether you have secured land in Lagos, Abuja, or the countryside, or are reimagining your current home, we welcome an exploratory dialogue with physical models and material samples.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-9 py-4 text-xs font-mono uppercase tracking-widest font-semibold text-[#121311] bg-[#F4F1EB] hover:bg-[#D8D0C3] transition-all rounded-sm cursor-pointer shadow-xl"
            >
              Start your project
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
