
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[75vh] flex items-end justify-start overflow-hidden px-6 pb-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200" 
          alt="Gym Background"
          className="w-full h-full object-cover opacity-70 grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 w-full animate-fadeIn">
        <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gold-500"></div>
            <h2 className="text-gold-500 uppercase tracking-[0.4em] text-[11px] font-black">
                ESTÁNDAR DE ORO
            </h2>
        </div>
        <h1 className="text-6xl font-serif font-bold mb-8 leading-[0.85] uppercase tracking-tighter text-white">
            FORJA <br />
            TU <span className="gold-text-gradient italic block">PODER</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-[280px] leading-snug mb-2 font-medium">
            Entrenamiento de élite en Ponte Caldelas. Instalaciones exclusivas 24/7.
        </p>
      </div>
    </section>
  );
};

export default Hero;
