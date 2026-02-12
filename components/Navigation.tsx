import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isOverride: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isOverride }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-40 bg-black/80 backdrop-blur-md border border-white/20 rounded-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="font-heading text-accent text-2xl md:text-3xl tracking-wider hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none" aria-label="Byte Dreams - Home">
            BYTE DREAMS
          </a>
          <span className="hidden md:inline text-[10px] opacity-50 animate-pulse text-accent font-mono">
            AI_SYSTEMS_ONLINE
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase font-bold tracking-widest">
          <a href="#services" className="group relative overflow-hidden cursor-pointer">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full text-white/70 group-hover:text-accent">
              /SERVICES
            </span>
            <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-accent">
              /SERVICES
            </span>
          </a>



          <a href="#process" className="group relative overflow-hidden cursor-pointer">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full text-white/70 group-hover:text-accent">
              /PROCESS
            </span>
            <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-accent">
              /PROCESS
            </span>
          </a>

          <a
            href="#contact"
            className="border-2 border-accent-warm bg-accent-warm/10 text-accent-warm px-6 py-2 hover:bg-accent-warm hover:text-black hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)] transition-all duration-200 active:translate-y-1 active:shadow-none cursor-pointer font-black"
            style={{ borderColor: 'var(--accent-warm)', color: 'var(--accent-warm)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-warm)'; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,107,44,0.1)'; e.currentTarget.style.color = 'var(--accent-warm)'; }}
          >
            BOOK A CALL
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 py-6 space-y-4 text-sm uppercase font-bold tracking-widest animate-fade-up">
          <a href="#services" onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-accent transition-colors cursor-pointer border-b border-white/5">
            /SERVICES
          </a>

          <a href="#process" onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-accent transition-colors cursor-pointer border-b border-white/5">
            /PROCESS
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block py-4 text-center font-black text-black cursor-pointer"
            style={{ backgroundColor: 'var(--accent-warm)' }}
          >
            BOOK A CALL
          </a>
        </div>
      )}
    </nav>
  );
};