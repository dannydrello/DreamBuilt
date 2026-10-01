import React from 'react';
import { useRouter } from '../context/RouterContext';
import { InteractiveLightSlider } from '../components/InteractiveLightSlider';
import { Signature3DExperience } from '../components/Signature3DExperience';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  const services = [
    {
      num: '01',
      title: 'ARCHITECTURAL DESIGN',
      description: 'Custom home concepts tailored to your lifestyle, site, and vision. From first sketches to full project documentation.'
    },
    {
      num: '02',
      title: 'TURNKEY CONSTRUCTION',
      description: 'We handle the entire build — planning, materials, and execution — delivering a ready-to-live home with zero hassle.'
    },
    {
      num: '03',
      title: 'PROJECT MANAGEMENT',
      description: 'Full control over timelines, budget, and quality — ensuring every stage runs smoothly and meets the highest standards.'
    },
    {
      num: '04',
      title: 'INTERIOR FINISHING',
      description: 'Thoughtfully designed interiors with high-quality materials, precise detailing, and a cohesive modern look.'
    }
  ];

  const steps = [
    {
      word: 'one',
      title: 'CONCEPT & PLANNING',
      description: 'We define your vision, develop layouts, and create a clear project roadmap with timelines and budget.'
    },
    {
      word: 'two',
      title: 'DESIGN & DEVELOPMENT',
      description: 'Detailed architectural and engineering solutions are prepared, ensuring precision before construction begins.'
    },
    {
      word: 'three',
      title: 'BUILD & DELIVERY',
      description: 'We manage the full construction process and deliver a fully finished, move-in ready home.'
    }
  ];

  const projects = [
    {
      id: 'p1',
      title: 'Mountain Glass Retreat',
      description: 'A modern open frame villa with panoramic views, where raw nature meets clean lines.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
      slug: 'epe-lagoon-villa'
    },
    {
      id: 'p2',
      title: 'Forest Reading Nook',
      description: 'A quiet, light-filled sanctuary for deep contemplation nestled in native pines.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      slug: 'ikoyi-courtyard-villa'
    },
    {
      id: 'p3',
      title: 'Warm Stone Living Room',
      description: 'A cosy, grounded space with dry-joint limestone and ambient comfort.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      slug: 'koto-house'
    },
    {
      id: 'p4',
      title: 'Modern Open Residence',
      description: 'A spacious cantilevered home with seamless raw natural materials and refined execution.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      slug: 'monolith-hill'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E1013] text-[#F3F4F6] selection:bg-white/20 selection:text-white font-sans overflow-x-hidden">
      
      {/* =========================================================================
          HERO SECTION: 3D DEPTH EFFECT (TEXT BEHIND HOUSE) + PICTURE IN MOTION
          ========================================================================= */}
      <section className="relative w-full min-h-[96vh] md:min-h-screen flex flex-col justify-between pt-24 pb-14 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#0B0C0E]">
        
        {/* LAYER 1 (z-0): BACKGROUND PICTURE WITH CONTINUOUS SUBTLE MOTION */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=85"
            alt="Modern architectural villa at dusk with warm glowing interior lights"
            className="w-full h-full object-cover object-center animate-picture-motion"
          />
          {/* Sky gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/80 via-transparent to-[#0E1013]" />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* LAYER 2 (z-10): REDUCED TITLE TEXT "DREAMBUILT" WITH FLOAT ANIMATION (BEHIND THE HOUSE) */}
        <div className="relative z-10 w-full text-center pt-8 md:pt-4 select-none pointer-events-none">
          <div className="animate-text-behind inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-[0.14em] text-white/95 leading-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]">
              DREAMBUILT
            </h1>
          </div>
        </div>

        {/* LAYER 3 (z-20): FOREGROUND HOUSE LAYER CLIPPED TO ROOFLINE SO TEXT IS PARTIALLY BEHIND IT */}
        <div 
          className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
          style={{
            clipPath: 'polygon(0% 36%, 14% 34%, 28% 35%, 44% 31%, 64% 30%, 82% 33%, 100% 34%, 100% 100%, 0% 100%)'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=85"
            alt="Foreground villa architectural structure"
            className="w-full h-full object-cover object-center animate-picture-motion"
          />
          {/* Subtle ground gradient for deep integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* LAYER 4 (z-30): HERO LOWER CONTENT (SLOGAN, CTAs, METRIC STATS) */}
        <div className="relative z-30 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end pt-12 md:pt-24">
          
          {/* Left Column: Slogan & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              DESIGN. BUILD.<br />
              MOVE IN.
            </h2>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => navigate('/projects')}
                className="px-7 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/90 rounded-xs transition-colors cursor-pointer shadow-lg"
              >
                Explore catalog
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-7 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-white bg-black/40 hover:bg-black/60 border border-white/30 rounded-xs transition-colors cursor-pointer backdrop-blur-xs"
              >
                Book project
              </button>
            </div>
          </div>

          {/* Right Column: Mission Paragraph & The 3 Vertical Metric Dividers */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-white/90 font-medium tracking-wide">
                Seamless, precise, and built to last — your home, done right.
              </p>
              <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-xl">
                Crafted from concept to completion, we design and build homes that feel truly yours. Every detail is thoughtfully executed — from the first sketch to the final finish.
              </p>
            </div>

            {/* The 3 Metric Dividers */}
            <div className="flex items-center gap-8 md:gap-12 pt-3 border-t border-white/15">
              <div className="border-l-2 border-white/80 pl-3">
                <span className="text-2xl md:text-3xl font-bold text-white block">200+</span>
                <span className="text-[11px] text-white/60 block tracking-normal">ready-made projects</span>
              </div>
              <div className="border-l-2 border-white/80 pl-3">
                <span className="text-2xl md:text-3xl font-bold text-white block">180+</span>
                <span className="text-[11px] text-white/60 block tracking-normal">completed buildings</span>
              </div>
              <div className="border-l-2 border-white/80 pl-3">
                <span className="text-2xl md:text-3xl font-bold text-white block">90+</span>
                <span className="text-[11px] text-white/60 block tracking-normal">buildings in operation</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: ALL SERVICES (What we provide + 4 Columns with 01 02 03 04)
          ========================================================================= */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-t border-white/10">
        <div className="space-y-12">
          
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono block">
              What we provide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
              ALL SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.map((item) => (
              <div key={item.num} className="relative group space-y-4">
                {/* Big faint watermark number in background */}
                <div className="text-6xl md:text-7xl font-mono font-black text-white/5 group-hover:text-white/10 transition-colors select-none">
                  {item.num}
                </div>

                <div className="space-y-2 relative -mt-6">
                  <h3 className="text-sm font-bold tracking-wide text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THREE-STEP ORDER (Steps + one, two, three)
          ========================================================================= */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-t border-white/10">
        <div className="space-y-12">
          
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono block">
              Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
              TREE-STEP ORDER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((st) => (
              <div key={st.word} className="space-y-3 relative group">
                <span className="text-2xl md:text-3xl font-serif italic text-white/30 block select-none">
                  {st.word}.
                </span>
                <h3 className="text-sm font-bold tracking-wide text-white uppercase">
                  {st.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {st.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR PROJECTS (Portfolio + 4 Tall Vertical Image Cards)
          ========================================================================= */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-t border-white/10">
        <div className="space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono block">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                OUR PROJECTS
              </h2>
            </div>
            
            <button
              onClick={() => navigate('/projects')}
              className="text-xs uppercase tracking-wider text-white/80 hover:text-white px-4 py-2 border border-white/20 hover:border-white/50 rounded-xs transition-colors cursor-pointer self-start sm:self-auto"
            >
              View full gallery
            </button>
          </div>

          {/* 4 Vertical Architectural Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => navigate(`/projects/${proj.slug}`)}
                className="group cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black/50 border border-white/10 rounded-xs">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Subtle Title Badge on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-sm font-bold text-white block">
                      {proj.title}
                    </span>
                    <span className="text-[11px] text-white/70 line-clamp-2 font-light">
                      {proj.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: BELOVED DAY / NIGHT DUAL CURTAIN INTERACTIVE STUDY
          ========================================================================= */}
      <InteractiveLightSlider />

      {/* =========================================================================
          SECTION 6: SIGNATURE 3D LIVING EXPERIENCE
          ========================================================================= */}
      <Signature3DExperience />

      {/* =========================================================================
          SECTION 7: CLOSING CALL TO ACTION
          ========================================================================= */}
      <section className="py-28 px-6 md:px-12 lg:px-16 bg-[#0B0C0E] border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-white/40 font-mono block">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Ready to build your dream home?
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            From architectural feasibility to turnkey construction, we guide you every step of the way.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-xs hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
            >
              Book consultation
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="px-8 py-3.5 bg-transparent border border-white/25 text-white font-medium text-xs uppercase tracking-wider rounded-xs hover:bg-white/10 transition-colors cursor-pointer"
            >
              Browse catalog
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
