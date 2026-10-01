import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Clean, focused navigation without the removed pages
  const navLinks = [
    { label: 'Selected Work', path: '/projects' },
    { label: 'The Studio', path: '/studio' },
    { label: 'Journal', path: '/journal' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F4F1EB]/90 dark:bg-[#121311]/90 backdrop-blur-md border-b border-[#D8D0C3]/80 dark:border-white/10 py-3.5 shadow-sm'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('/')}
            className="text-2xl md:text-3xl font-serif tracking-tight text-[#20221F] dark:text-[#F4F1EB] hover:text-[#977B58] transition-colors focus-visible:ring-1 focus-visible:ring-[#977B58] text-left cursor-pointer"
            aria-label="DreamBuilt Homepage"
          >
            DreamBuilt
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-sans font-medium text-[#20221F]/80 dark:text-[#F4F1EB]/80">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`transition-colors py-1 cursor-pointer whitespace-nowrap text-[13px] tracking-widest uppercase font-mono relative ${
                  isActive(link.path)
                    ? 'text-[#20221F] dark:text-[#F4F1EB] font-semibold'
                    : 'hover:text-[#20221F] dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#977B58]" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Dark / Light Mode Switcher + Primary Action */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[#20221F] dark:text-[#F4F1EB] hover:text-[#977B58] dark:hover:text-[#D8D0C3] transition-colors rounded-sm cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-4 h-4 text-[#D8D0C3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Light</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-[#20221F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Dark</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('/contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-widest font-semibold text-[#F4F1EB] dark:text-[#121311] bg-[#20221F] dark:bg-[#F4F1EB] hover:bg-[#68705C] dark:hover:bg-[#D8D0C3] transition-all rounded-sm cursor-pointer whitespace-nowrap shadow-xs"
            >
              Start your project
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#20221F] dark:text-[#F4F1EB] hover:text-[#977B58] transition-colors rounded-sm cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#121311]/70 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#F4F1EB] dark:bg-[#1A1C19] border-l border-[#D8D0C3] dark:border-white/10 p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D8D0C3] dark:border-white/10 mb-6">
                <span className="font-serif text-2xl text-[#20221F] dark:text-[#F4F1EB]">DreamBuilt</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#20221F] dark:text-[#F4F1EB] hover:text-[#977B58]"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-5">
                <button
                  onClick={() => handleNavClick('/')}
                  className="text-left text-xl font-serif text-[#20221F] dark:text-[#F4F1EB] hover:text-[#977B58] py-1 border-b border-[#D8D0C3]/40 dark:border-white/5"
                >
                  Home
                </button>
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="text-left text-xl font-serif text-[#20221F] dark:text-[#F4F1EB] hover:text-[#977B58] py-1 border-b border-[#D8D0C3]/40 dark:border-white/5 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    {isActive(link.path) && <span className="text-xs text-[#977B58] font-mono">Active</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#D8D0C3] dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between py-2 text-xs font-mono text-[#20221F] dark:text-white">
                <span>Theme Mode:</span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 bg-[#EAE5DC] dark:bg-white/10 rounded-sm"
                >
                  {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
              </div>

              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold text-center text-[#F4F1EB] dark:text-[#121311] bg-[#20221F] dark:bg-[#F4F1EB] rounded-sm"
              >
                Start your project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
