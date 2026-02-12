import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { HUD } from './components/HUD';
import { Background } from './components/Background';
import { Footer } from './components/Footer';

export default function App() {
  const [isOverride, setIsOverride] = useState(false);

  // Sync state with body class for CSS variable handling
  useEffect(() => {
    if (isOverride) {
      document.body.classList.add('override-mode');
    } else {
      document.body.classList.remove('override-mode');
    }
  }, [isOverride]);

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-black custom-cursor">
      <Background />
      <div className="relative z-10">
        <Navigation isOverride={isOverride} />
        <main>
          <Hero />
          <Services />

          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
      <HUD isOverride={isOverride} setIsOverride={setIsOverride} />
      <div className="scanline" />
    </div>
  );
}