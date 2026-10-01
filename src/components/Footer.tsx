import React from 'react';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#20221F] dark:bg-[#0D0E0C] text-[#F4F1EB] pt-20 pb-12 px-4 md:px-8 lg:px-12 border-t border-[#343833] dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-5 space-y-6">
            <button
              onClick={() => navigate('/')}
              className="text-3xl md:text-4xl font-serif text-white hover:text-[#D8D0C3] transition-colors text-left tracking-tight cursor-pointer"
            >
              DreamBuilt
            </button>
            <p className="text-sm font-sans text-white/70 max-w-md leading-relaxed font-light">
              Thoughtful residential architecture for the way you want to live. An unhurried dialogue between light, tactile materials, and native topography.
            </p>
            <div className="p-4 bg-[#2A2E28] dark:bg-[#161815] border border-white/5 rounded-sm max-w-md">
              <span className="text-[11px] font-mono text-[#D8D0C3] uppercase tracking-wider block mb-1">
                Studio Transparency Notice
              </span>
              <p className="text-xs text-white/60 leading-normal">
                DreamBuilt is an architectural design practice. We provide concept design, statutory planning coordination, and architectural detailing. We are not a building contractor, property developer, or estate agency.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#977B58]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li>
                <button onClick={() => navigate('/projects')} className="hover:text-white transition-colors cursor-pointer">
                  Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/studio')} className="hover:text-white transition-colors cursor-pointer">
                  The Studio
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/journal')} className="hover:text-white transition-colors cursor-pointer">
                  Journal & Essays
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors cursor-pointer">
                  Start Your Project
                </button>
              </li>
            </ul>
          </div>

          {/* Projects Linklist */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#977B58]">
              Featured Studies
            </h4>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li>
                <button onClick={() => navigate('/projects/koto-house')} className="hover:text-white transition-colors cursor-pointer">
                  The Koto Pavilion
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects/monolith-hill')} className="hover:text-white transition-colors cursor-pointer">
                  The Monolith House
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects/highland-sanctuary')} className="hover:text-white transition-colors cursor-pointer">
                  The Glass Barn
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects/harbour-terrace')} className="hover:text-white transition-colors cursor-pointer">
                  The Terraced Villa
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#977B58]">
              Begin a Conversation
            </h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              We welcome exploratory discussions regarding new residential commissions, site appraisals, and additions.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#20221F] bg-[#F4F1EB] hover:bg-[#D8D0C3] transition-colors rounded-sm text-center cursor-pointer shadow-md"
              >
                Start your project →
              </button>
            </div>
            <div className="text-xs text-white/60 pt-2 space-y-1 font-mono">
              <div>Enquiries: <span className="text-white/80">conversations@dreambuilt-architecture.com</span></div>
              <div>Consultations arranged by appointment</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-light">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} DreamBuilt Architecture</span>
            <span aria-hidden="true">·</span>
            <span>All conceptual studies reserved</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/asset-licence')}
              className="hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Media Assets & Licence Record
            </button>
            <button
              onClick={() => navigate('/privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy & Cookies
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
