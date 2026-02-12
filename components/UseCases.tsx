import React, { useRef, useState } from 'react';
import { ShoppingCart, BarChart3, Stethoscope, Factory, Megaphone, Building2, Truck, Gavel } from 'lucide-react';
import { FlickeringGrid } from './ui/flickering-grid';

interface TiltCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ id, icon, title, desc }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[400px] perspective-1000 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div
        className="w-full h-full bg-black/80 text-white border border-white/20 p-8 flex flex-col justify-between hover:bg-accent/10 hover:text-white hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,65,0.15)] transition-all duration-300 ease-out group backdrop-blur-sm"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transition: 'transform 0.1s ease-out, background-color 0.3s, color 0.3s'
        }}
      >
        <div>
          <div className="font-mono text-sm font-bold opacity-60 mb-6 group-hover:text-accent transition-colors">[{id}]</div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-black uppercase leading-none font-heading">{title}</h3>
            <div className="text-white/50 group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110">
              {icon}
            </div>
          </div>
          <div className="h-[2px] w-12 bg-white/30 group-hover:bg-accent mb-6 transition-colors duration-300" />
          <p className="text-base font-bold leading-relaxed opacity-80">{desc}</p>
        </div>

        <div className="font-mono text-[10px] uppercase opacity-40 group-hover:opacity-100 transition-opacity text-accent">
          &gt; LEARN_MORE
        </div>

        {/* Background Icon Watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none transform scale-[3] text-white" aria-hidden="true">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-32 px-6 bg-[#030303] text-white relative z-10 overflow-hidden" aria-labelledby="usecases-heading">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#00FF41"
        maxOpacity={0.4}
        flickerChance={0.15}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="text-sm font-mono text-accent/60 mb-2 uppercase tracking-widest">Industry Solutions</div>
            <h2 id="usecases-heading" className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter max-w-4xl font-heading">
              AI FOR ANY<br />INDUSTRY
            </h2>
          </div>
          <div className="text-right font-black text-xs space-y-1 font-mono">
            <div>[ KERNEL: ACTIVE ]</div>
            <div>[ UPTIME: 99.999% ]</div>
            <div className="bg-accent text-black px-2 py-1 mt-2 inline-block">VERSION_2.0.4</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TiltCard
            id="APP_01"
            icon={<ShoppingCart size={32} />}
            title="E-COMMERCE"
            desc="Personalize marketing, streamline orders, and improve customer support with AI-powered assistants."
          />
          <TiltCard
            id="APP_02"
            icon={<BarChart3 size={32} />}
            title="FINANCE"
            desc="Automate risk analysis, portfolio reporting, and client communications for better decisions."
          />
          <TiltCard
            id="APP_03"
            icon={<Stethoscope size={32} />}
            title="HEALTHCARE"
            desc="Automate billing, improve diagnostics workflows, and streamline electronic health records."
          />
          <TiltCard
            id="APP_04"
            icon={<Factory size={32} />}
            title="MANUFACTURING"
            desc="Predictive maintenance, production planning, and demand forecasting to cut downtime."
          />
          <TiltCard
            id="APP_05"
            icon={<Megaphone size={32} />}
            title="MARKETING"
            desc="AI-driven content creation, ad targeting, and social media management that converts."
          />
          <TiltCard
            id="APP_06"
            icon={<Building2 size={32} />}
            title="REAL ESTATE"
            desc="Smart property matching, automated lead nurturing, and client follow-up systems."
          />
          <TiltCard
            id="APP_07"
            icon={<Truck size={32} />}
            title="LOGISTICS"
            desc="Inventory optimization, demand forecasting, and route planning for leaner operations."
          />
          <TiltCard
            id="APP_08"
            icon={<Gavel size={32} />}
            title="LEGAL"
            desc="Document review automation, case management, and client intake streamlining."
          />
        </div>
      </div>
    </section>
  );
};