
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-panel">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xl">E</span>
        </div>
        <span className="font-serif text-2xl font-bold tracking-tighter text-white">
          ELITE <span className="gold-text-gradient">GOLD</span> GYM
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-semibold text-zinc-400">
        <a href="#home" className="hover:text-gold-500 transition-colors">Inicio</a>
        <a href="#plans" className="hover:text-gold-500 transition-colors">Planes</a>
        <a href="#classes" className="hover:text-gold-500 transition-colors">Clases</a>
        <a href="#join" className="text-gold-500 hover:text-white transition-colors">Únete Ahora</a>
      </div>
    </nav>
  );
};

export default Navbar;
