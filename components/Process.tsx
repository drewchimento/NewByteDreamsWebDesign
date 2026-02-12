import React from 'react';
import { Search, Code, Rocket, LifeBuoy, Sliders } from 'lucide-react';
import { FlickeringGrid } from './ui/flickering-grid';

const ProcessStep = ({ icon: Icon, title, desc, positionClass, delay }: any) => (
  <div className={`absolute w-[180px] p-6 bg-black/90 border border-white/10 backdrop-blur-md text-center group hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300 z-10 cursor-pointer ${positionClass}`}>
    <div className="absolute left-1/2 -top-3 -translate-x-1/2 w-3 h-3 bg-black border-2 border-white/50 rounded-full group-hover:bg-accent group-hover:border-white transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.8)] z-20" />
    <div className="mb-4 flex justify-center text-white/50 group-hover:text-accent transition-colors duration-300">
      <Icon size={32} />
    </div>
    <h3 className="text-sm font-black uppercase text-white tracking-wider mb-2 font-heading">{title}</h3>
    <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 overflow-hidden transition-all duration-500 text-[10px] text-gray-400 font-mono text-left leading-tight space-y-1 pl-2 border-l border-accent/20">
      {desc.map((d: string, i: number) => (
        <div key={i}>&gt; {d}</div>
      ))}
    </div>
  </div>
);

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6 bg-[#030303] backdrop-blur-lg border-b border-white/10 relative overflow-hidden" aria-labelledby="process-heading">
      {/* Flickering Grid Background (moved from UseCases) */}
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#00FF41"
        maxOpacity={0.4}
        flickerChance={0.15}
      />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[600px]">
        <div className="text-center mb-24">
          <div className="text-sm font-mono text-accent/60 mb-2 uppercase tracking-widest">Our Process</div>
          <h2 id="process-heading" className="text-5xl md:text-7xl font-black text-accent font-heading tracking-normal uppercase">
            How It Works
          </h2>
        </div>

        {/* Desktop Process Viz */}
        <div className="hidden lg:block relative w-full h-[400px] max-w-5xl">
          {/* SVG Arc */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible" aria-hidden="true">
            <path
              d="M 50,350 Q 512,50 974,350"
              fill="none"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="path-animate"
            />
          </svg>

          <ProcessStep
            icon={Search}
            title="DISCOVERY"
            desc={["Understand your needs", "Map current workflows", "Identify AI opportunities"]}
            positionClass="bottom-[15%] left-[0%]"
          />

          <ProcessStep
            icon={Sliders}
            title="DESIGN"
            desc={["Blueprint your solution", "Define integrations", "Plan user experience"]}
            positionClass="bottom-[45%] left-[20%]"
          />

          <ProcessStep
            icon={Code}
            title="BUILD"
            desc={["Develop your AI tools", "Train custom models", "Test & optimize"]}
            positionClass="bottom-[70%] left-[50%] -translate-x-1/2 !border-accent !shadow-[0_0_15px_rgba(0,255,65,0.15)]"
          />

          <ProcessStep
            icon={Rocket}
            title="LAUNCH"
            desc={["Deploy to production", "Team onboarding", "Go live with support"]}
            positionClass="bottom-[45%] right-[20%]"
          />

          <ProcessStep
            icon={LifeBuoy}
            title="SUPPORT"
            desc={["Ongoing maintenance", "Performance reports", "Continuous improvement"]}
            positionClass="bottom-[15%] right-[0%]"
          />
        </div>

        {/* Mobile Process List */}
        <div className="grid grid-cols-1 gap-4 lg:hidden w-full max-w-md">
          {[
            { t: 'DISCOVERY', i: Search, sub: 'We learn about your business' },
            { t: 'DESIGN', i: Sliders, sub: 'We blueprint the solution' },
            { t: 'BUILD', i: Code, sub: 'We develop your AI tools' },
            { t: 'LAUNCH', i: Rocket, sub: 'We deploy and go live' },
            { t: 'SUPPORT', i: LifeBuoy, sub: 'We keep things running' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-4 flex items-center gap-4 cursor-pointer hover:border-accent hover:bg-accent/5 transition-all duration-300">
              <item.i className="text-accent flex-shrink-0" size={20} />
              <div>
                <span className="font-bold font-heading block">{item.t}</span>
                <span className="text-sm text-white/50 font-mono">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};