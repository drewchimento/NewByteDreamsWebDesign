import React from 'react';
import { ScrambleText } from './ui/ScrambleText';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center px-6 pt-28">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

        {/* ASCII Art Hero - Hidden on very small screens */}
        <div className="hidden md:block text-[6px] md:text-[8px] lg:text-[10px] leading-none text-accent opacity-80 mb-12 select-none whitespace-pre text-center font-mono" aria-hidden="true">
          {` ███████████              █████                ██████████                                                       
░░███░░░░░███            ░░███                ░░███░░░░███                                                      
 ░███    ░███ █████ ████ ███████    ██████     ░███   ░░███ ████████   ██████   ██████   █████████████    █████ 
 ░██████████ ░░███ ░███ ░░░███░    ███░░███    ░███    ░███░░███░░███ ███░░███ ░░░░░███ ░░███░░███░░███  ███░░  
 ░███░░░░░███ ░███ ░███   ░███    ░███████     ░███    ░███ ░███ ░░░ ░███████   ███████  ░███ ░███ ░███ ░░█████ 
 ░███    ░███ ░███ ░███   ░███ ███░███░░░      ░███    ███  ░███     ░███░░░   ███░░███  ░███ ░███ ░███  ░░░░███
 ███████████  ░░███████   ░░█████ ░░██████     ██████████   █████    ░░██████ ░░████████ █████░███ █████ ██████ 
░░░░░░░░░░░    ░░░░░███    ░░░░░   ░░░░░░     ░░░░░░░░░░   ░░░░░      ░░░░░░   ░░░░░░░░ ░░░░░ ░░░ ░░░░░ ░░░░░░  
               ███ ░███                                                                                         
              ░░██████                                                                                          
               ░░░░░░`}
        </div>

        <div className="text-center w-full relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-tight mb-12 tracking-normal mx-auto cursor-default font-heading">
            <span className="block hover:text-accent transition-colors duration-200">We build AI</span>
            <span className="block hover:text-accent transition-colors duration-200">that <span className="inline-block bg-white text-black px-2 transform -skew-x-12 hover:skew-x-0 transition-transform">grows</span></span>
            <span className="block">your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">business<span className="animate-blink text-accent">_</span></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start w-full max-w-5xl mx-auto mt-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <p className="text-2xl md:text-3xl font-bold border-l-4 border-accent pl-6 text-white/80 font-heading">
              Custom AI assistants, workflow automations, and intelligent tools — built specifically for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#services"
                className="bg-white text-black px-8 py-4 font-black uppercase text-lg hover:bg-accent transition-colors clip-path-button relative group overflow-hidden cursor-pointer"
              >
                <span className="relative z-10"><ScrambleText text="SEE SERVICES" /></span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 font-black uppercase text-lg transition-all cursor-pointer border-2"
                style={{ borderColor: 'var(--accent-warm)', color: 'var(--accent-warm)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-warm)'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent-warm)'; }}
              >
                BOOK A CALL →
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-col justify-center h-full p-6 border border-white/10 bg-black/40 backdrop-blur-sm text-xs font-mono text-accent/80 space-y-2">
            <p>[ STATUS: READY_TO_DEPLOY ]</p>
            <p>&gt; BUSINESSES_SERVED: 50+</p>
            <p>&gt; AVG_TIME_SAVED: 20hrs/week</p>
            <p>&gt; SATISFACTION: [||||||||||||||||||] 98%</p>
            <p>&gt; RESPONSE_TIME: &lt;24hrs</p>
            <p className="animate-pulse">&gt; AWAITING_YOUR_PROJECT...</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 w-full max-w-3xl mx-auto border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center text-white/40 text-sm font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2 cursor-default">
              <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_6px_var(--accent-color)]"></div>
              50+ Businesses Served
            </div>
            <div className="flex items-center gap-2 cursor-default">
              <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_6px_var(--accent-color)]"></div>
              98% Satisfaction Rate
            </div>
            <div className="flex items-center gap-2 cursor-default">
              <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_6px_var(--accent-color)]"></div>
              24hr Response Time
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};