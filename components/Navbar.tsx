import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'ПОРТФОЛИО', href: '#works' },
  { label: 'УСЛУГИ', href: '#services' },
  { label: 'КОНТАКТЫ', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-brand-purple/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-darkPurple flex items-center justify-center rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.5)] overflow-hidden">
             <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="nav-logo-mask">
                    <rect width="100" height="100" fill="white" />
                    <text x="50" y="88" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="110" textAnchor="middle" fill="black">a</text>
                </mask>
                <g mask="url(#nav-logo-mask)">
                    <rect x="0" y="0" width="12" height="100" fill="white" />
                    <rect x="18" y="0" width="8" height="100" fill="white" />
                    <rect x="32" y="0" width="14" height="100" fill="white" />
                    <rect x="52" y="0" width="8" height="100" fill="white" />
                    <rect x="66" y="0" width="10" height="100" fill="white" />
                    <rect x="82" y="0" width="18" height="100" fill="white" />
                </g>
             </svg>
          </div>
          <span className="font-bold text-lg md:text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            design-alekseev.ru
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-neon transition-colors tracking-widest relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-white/5 hover:bg-brand-purple text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-brand-purple/30 hover:border-brand-purple">
            Связаться
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-brand-purple transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-brand-purple/20 py-8 px-6 flex flex-col gap-6 animate-fade-in">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-bold text-white hover:text-brand-purple transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-brand-neon font-bold mt-4">
            НАЧАТЬ ПРОЕКТ →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;