import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none perspective-1000">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#111_0%,#000_100%)]" />
      
      {/* Moving Grid */}
      <div className="absolute w-[200%] height-[200%] -top-[50%] -left-[50%] animate-grid-flow"
           style={{
             backgroundImage: `
               linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
             `,
             backgroundSize: '50px 50px',
             transform: 'rotateX(60deg)',
           }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_90%)]" />
    </div>
  );
};