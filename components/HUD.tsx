import React from 'react';

interface HUDProps {
  isOverride: boolean;
  setIsOverride: (val: boolean) => void;
}

export const HUD: React.FC<HUDProps> = ({ isOverride, setIsOverride }) => {
  return (
    <>
      {/* Left Sidebar HUD */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:flex flex-col gap-8 font-mono pointer-events-auto" aria-label="System HUD" role="complementary">

        {/* Override Toggle */}
        <div className="border-l-2 border-accent pl-4 backdrop-blur-sm bg-black/20 p-2">
          <div className="text-[10px] text-white opacity-60 mb-2 uppercase tracking-wider">Manual Override</div>
          <div className="flex items-center gap-4">
            <label className="relative inline-block w-14 h-7 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isOverride}
                onChange={(e) => setIsOverride(e.target.checked)}
                aria-label="Toggle manual override mode"
              />
              <div className="w-full h-full bg-gray-900 border-2 border-gray-700 peer-checked:border-accent transition-all clip-path-switch"></div>
              <div className="absolute left-1 top-1 bg-gray-500 w-4 h-4 peer-checked:translate-x-7 peer-checked:bg-accent transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
            </label>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-2 h-2 rounded-full ${isOverride ? 'bg-accent animate-pulse-fast shadow-[0_0_8px_var(--accent-color)]' : 'bg-green-500 shadow-[0_0_8px_#00ff41]'}`} />
                <span className={`text-[10px] font-bold tracking-widest ${isOverride ? 'text-accent' : 'text-green-500'}`}>
                  STATUS: {isOverride ? 'OVERRIDE' : 'STABLE'}
                </span>
              </div>
              <div className="text-[9px] opacity-40 font-mono">
                {isOverride ? 'CAUTION: HIGH_VOLT' : 'SYS_NORMAL'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Stats */}
      <div className="fixed right-0 top-20 bottom-0 w-12 border-l border-white/10 bg-black/80 backdrop-blur-sm z-30 hidden xl:flex flex-col items-center py-8 font-mono text-[9px] text-accent overflow-hidden" aria-hidden="true">
        <div className="writing-vertical-rl rotate-180 uppercase font-black tracking-widest mb-8 text-white">SYS_HEALTH</div>
        <div className="flex-1 w-full overflow-hidden relative opacity-50">
          <div className="absolute top-0 left-0 w-full animate-marquee-vertical text-center leading-tight space-y-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="space-y-1">
                <p className="opacity-50">0x{Math.floor(Math.random() * 16777215).toString(16).toUpperCase().slice(0, 4)}</p>
                <p>CPU:{Math.floor(Math.random() * 10)}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-2 text-center w-full">
          <div className="w-1.5 h-1.5 bg-accent mx-auto animate-pulse"></div>
          <div className="border-t border-white/20 w-6 mx-auto"></div>
          <div>V.3.1</div>
        </div>
      </div>
    </>
  );
};