import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const StudioPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-36 pb-32 px-4 md:px-8 lg:px-12 text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Studio Hero (Airy, spacious) */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
            About the Practice
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#20221F] dark:text-white tracking-tight leading-[1.1]">
            Architecture grounded in human scale, natural light, and quiet materials.
          </h1>
          <p className="text-lg md:text-xl text-[#20221F]/75 dark:text-white/70 font-light leading-relaxed max-w-2xl font-sans pt-2">
            DreamBuilt is an architectural studio conceived to demystify the commissioning process and shape homes that celebrate the unhurried rituals of daily living.
          </p>
        </div>

        {/* Full Width Studio Atmosphere Image */}
        <div className="relative border border-[#D8D0C3] dark:border-white/10 overflow-hidden bg-white dark:bg-[#1A1C19] shadow-xs">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
            alt="Physical basswood study models and tracing paper in the design workshop"
            fallbackTitle="The Workshop"
            aspectRatioClass="aspect-[21/9]"
            className="object-cover"
          />
          <div className="p-5 bg-[#FAF8F5] dark:bg-[#161815] border-t border-[#D8D0C3] dark:border-white/10 flex items-center justify-between text-xs text-[#20221F]/70 dark:text-white/60 font-mono">
            <span className="font-serif italic font-normal text-sm text-[#20221F] dark:text-white">Our physical modeling table: testing proportion, massing, and shadow</span>
            <span className="text-[10px] uppercase text-[#977B58]">STUDIO CRAFT</span>
          </div>
        </div>

        {/* Philosophy & Working Culture (Un-clogged, spacious) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start border-t border-[#D8D0C3] dark:border-white/10 pt-20">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
              Our Ethos
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#20221F] dark:text-white leading-tight">
              Quiet Restraint over Spectacle
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#20221F]/80 dark:text-white/70 leading-relaxed font-sans font-light">
            <p>
              We believe a home should not shout at its surroundings or demand constant attention from its occupants. The most powerful spaces are often the quietest: a room that receives morning sun exactly where you sit with coffee; a doorway aligned so your eye travels through three rooms into a wild garden; a wall textured just enough to catch the late afternoon glow.
            </p>
            <p>
              Rather than rushing into glossy computerized renderings, our studio begins with physical exploration: cardboard massing studies, sketch sections on butter paper, and material boards composed of real stone, lime plaster, and timber samples.
            </p>
            <div className="p-8 bg-[#FAF8F5] dark:bg-[#161815] border-l-2 border-[#977B58] text-sm text-[#20221F]/90 dark:text-white/80 space-y-2">
              <span className="font-serif font-medium block text-base text-[#20221F] dark:text-white">
                Transparency & Positioning
              </span>
              <p className="leading-relaxed font-light">
                We treat our portfolio of studies as an open exploration of how people want to live. We guide you through feasibility, concept options, planning approvals, and technical documentation, collaborating directly with trusted builders to bring the design to life.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars (Airy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[#D8D0C3] dark:border-white/10 pt-20">
          <div className="p-8 bg-[#FAF8F5] dark:bg-[#161815] border border-[#D8D0C3] dark:border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase text-[#977B58]">Pillar 01</span>
            <h3 className="text-2xl font-serif text-[#20221F] dark:text-white">Physical Model-Making</h3>
            <p className="text-sm text-[#20221F]/70 dark:text-white/60 leading-relaxed font-sans font-light">
              Holding a physical model in your hands reveals daylight angles, spatial flow, and roof profiles in a tactile way that screens can never replicate.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] dark:bg-[#161815] border border-[#D8D0C3] dark:border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase text-[#977B58]">Pillar 02</span>
            <h3 className="text-2xl font-serif text-[#20221F] dark:text-white">Sensory Listening</h3>
            <p className="text-sm text-[#20221F]/70 dark:text-white/60 leading-relaxed font-sans font-light">
              We interview clients about their waking routines, cooking habits, and tolerance for sound before drawing a single wall.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] dark:bg-[#161815] border border-[#D8D0C3] dark:border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase text-[#977B58]">Pillar 03</span>
            <h3 className="text-2xl font-serif text-[#20221F] dark:text-white">Material Honesty</h3>
            <p className="text-sm text-[#20221F]/70 dark:text-white/60 leading-relaxed font-sans font-light">
              We specify materials that welcome the patina of touch: untreated cedar, fluted limestone, oiled oak, and unlacquered bronze.
            </p>
          </div>
        </div>

        {/* Studio Consultation CTA */}
        <div className="border border-[#D8D0C3] dark:border-white/10 p-10 md:p-16 bg-[#20221F] dark:bg-[#161815] text-[#F4F1EB] flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-xl space-y-3">
            <h3 className="text-3xl font-serif text-white leading-snug">
              Interested in visiting our workshop?
            </h3>
            <p className="text-sm text-white/70 font-sans leading-relaxed font-light">
              We welcome clients for in-person project consultations surrounded by material samples and physical models.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 text-xs font-mono uppercase tracking-wider font-semibold text-[#20221F] bg-[#F4F1EB] hover:bg-[#D8D0C3] transition-colors rounded-sm cursor-pointer whitespace-nowrap shadow-md"
          >
            Schedule a Conversation →
          </button>
        </div>

      </div>
    </div>
  );
};
