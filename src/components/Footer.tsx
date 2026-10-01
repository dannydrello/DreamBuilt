import React from 'react';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#0B0C0E] text-white pt-20 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 h-6">
                <span className="w-1.5 h-6 bg-white rounded-xs" />
                <span className="w-1.5 h-5 bg-white/80 rounded-xs" />
                <span className="w-1.5 h-6 bg-white rounded-xs" />
              </div>
              <span className="text-2xl font-bold tracking-wider text-white uppercase select-none">
                DreamBuilt
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-sm leading-relaxed">
              Design. Build. Move In. Crafted from concept to completion, we design and build homes that feel truly yours.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono block">
              Menu
            </span>
            <ul className="space-y-2 text-xs md:text-sm text-white/80">
              <li>
                <button onClick={() => navigate('/studio')} className="hover:text-white transition-colors cursor-pointer">
                  About Practice
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects')} className="hover:text-white transition-colors cursor-pointer">
                  Project Catalog
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/journal')} className="hover:text-white transition-colors cursor-pointer">
                  Journal & Insights
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors cursor-pointer">
                  Book Project
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Office & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono block">
              Contacts
            </span>
            <div className="space-y-2 text-xs md:text-sm text-white/70 font-light">
              <p>Email: <a href="mailto:contact@dreambuilt.com" className="text-white hover:underline">contact@dreambuilt.com</a></p>
              <p>Direct: +234 (0) 800 228 8674 / +44 (0) 20 7946 0912</p>
              <p className="text-white/50 text-[11px] pt-1">
                Mon – Fri: 09:00 – 18:00 · Consultations by appointment
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4 font-light">
          <div>
            © {new Date().getFullYear()} DreamBuilt Architecture & Construction. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/projects')} className="hover:text-white transition-colors cursor-pointer">
              Catalog
            </button>
            <button onClick={() => navigate('/studio')} className="hover:text-white transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors cursor-pointer">
              Contacts
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
