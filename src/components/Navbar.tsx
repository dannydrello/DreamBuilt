import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', path: '/studio' },
    { label: 'Catalog', path: '/projects' },
    { label: 'Gallery', path: '/projects' },
    { label: 'Services', path: '/#services' },
    { label: 'Contacts', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = path.replace('/#', '');
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: 3-Bar Architectural Logo Icon + Brand Name */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Minimalist 3-Pillar Architectural Icon as shown in screenshot */}
            <div className="flex items-center gap-1.5 h-6">
              <span className="w-1.5 h-6 bg-white rounded-xs transform transition-transform group-hover:scale-y-110" />
              <span className="w-1.5 h-5 bg-white/80 rounded-xs transform transition-transform group-hover:scale-y-110" />
              <span className="w-1.5 h-6 bg-white rounded-xs transform transition-transform group-hover:scale-y-110" />
            </div>
            <span className="hidden md:inline text-xl md:text-2xl font-bold tracking-wider text-white uppercase select-none">
              DreamBuilt
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 text-xs md:text-sm font-normal text-white/80 tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.path)}
                className="hover:text-white transition-colors cursor-pointer capitalize"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action / Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xs transition-colors cursor-pointer"
            >
              Book Project
            </button>
          </div>

          {/* Mobile Right Controls: Contacts link + Hamburger */}
          <div className="flex md:hidden items-center gap-4 text-white">
            <button
              onClick={() => handleNavClick('/contact')}
              className="text-xs uppercase tracking-wider text-white/90 hover:text-white"
            >
              Contacts
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`} />
                <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#0E1013] border-l border-white/10 p-8 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 h-5">
                    <span className="w-1 h-5 bg-white rounded-xs" />
                    <span className="w-1 h-4 bg-white/80 rounded-xs" />
                    <span className="w-1 h-5 bg-white rounded-xs" />
                  </div>
                  <span className="font-bold text-lg text-white uppercase tracking-wider">DreamBuilt</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white text-xl p-2">✕</button>
              </div>

              <div className="flex flex-col space-y-6">
                <button
                  onClick={() => handleNavClick('/')}
                  className="text-left text-2xl font-light text-white"
                >
                  Home
                </button>
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.path)}
                    className="text-left text-2xl font-light text-white/80 hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4 text-xs">
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full py-4 bg-white text-black font-semibold text-center rounded-xs uppercase tracking-wider"
              >
                Book project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
