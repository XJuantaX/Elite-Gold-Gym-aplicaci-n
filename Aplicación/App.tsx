
import React, { useState } from 'react';
import Hero from './components/Hero';
import MembershipPlans from './components/MembershipPlans';
import RegistrationForm from './components/RegistrationForm';
import ClassSchedule from './components/ClassSchedule';
import WorkoutSection from './components/WorkoutSection';
import AccessQR from './components/AccessQR';
import BottomNav from './components/BottomNav';
import { MembershipTier } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedTier, setSelectedTier] = useState<MembershipTier>(MembershipTier.PRO);

  const handleSelectPlan = (tier: MembershipTier) => {
    setSelectedTier(tier);
    setActiveTab('join');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="animate-fadeIn pb-24 space-y-12">
            <Hero />
            
            {/* Quick Stats Grid */}
            <section className="px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-2 gap-4">
                    <div className="glass-panel p-5 rounded-3xl text-center border-b-2 border-gold-500 shadow-xl">
                        <span className="text-gold-500 text-3xl font-bold font-serif">24/7</span>
                        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em] mt-2">Acceso Total</p>
                    </div>
                    <div className="glass-panel p-5 rounded-3xl text-center border-b-2 border-gold-500 shadow-xl">
                        <span className="text-gold-500 text-3xl font-bold font-serif">50+</span>
                        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em] mt-2">Clases / Sem</p>
                    </div>
                </div>
            </section>

            {/* Motivational Quote */}
            <section className="px-6">
                <div className="glass-panel p-8 rounded-[2.5rem] border-t border-gold-500/30 relative overflow-hidden group">
                    <div className="absolute -right-6 -top-6 text-gold-500/10 opacity-20 pointer-events-none">
                        <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 6.79086 2.79086 5 5 5H7C8.10457 5 9 5.89543 9 7V8C9 9.10457 8.10457 10 7 10H4C3.44772 10 3 10.4477 3 11V15C3 15.5523 3.44772 16 4 16H7C8.10457 16 9 16.8954 9 18V21H7C3.13401 21 0 17.866 0 14V7C0 4.79086 1.79086 3 4 3H7C9.20914 3 11 4.79086 11 7V15C11 18.866 7.866 22 4 22H2V21C2.55228 21 3 20.5523 3 20V18C3 16.8954 2.10457 16 1 16L1 15Z" /></svg>
                    </div>
                    <p className="text-2xl font-serif italic text-white leading-tight mb-8 relative z-10 tracking-tight">
                        "Es una vergüenza para un hombre envejecer sin ver la belleza y la fuerza de la que su cuerpo es capaz."
                    </p>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="h-[2px] w-12 bg-gold-500"></div>
                        <span className="text-gold-500 uppercase tracking-[0.3em] text-[11px] font-black">Sócrates</span>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-6 space-y-8">
                <div className="space-y-3">
                    <h3 className="text-gold-500 text-[11px] uppercase tracking-[0.4em] font-black">Contacto Elite</h3>
                    <h2 className="text-4xl font-serif font-bold leading-none uppercase tracking-tighter text-white">ESTAMOS <br/><span className="gold-text-gradient italic">PARA TI</span></h2>
                </div>

                <div className="space-y-4">
                    <div className="glass-panel p-6 rounded-3xl border border-white/5 flex items-center gap-6">
                        <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-gold-500 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-black text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Ubicación</h4>
                            <p className="text-white text-sm font-bold">36820 Ponte Caldelas, Pontevedra</p>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-3xl border border-white/5 flex items-center gap-6">
                        <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-gold-500 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-black text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Teléfono</h4>
                            <p className="text-white text-sm font-bold">633 888 442</p>
                        </div>
                    </div>
                </div>

                <div className="pt-6">
                    <button 
                        onClick={() => { setActiveTab('access'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="w-full gold-gradient text-black font-black py-6 rounded-3xl uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(212,175,55,0.25)] active:scale-95 transition-all text-xs"
                    >
                        Acceder Ahora
                    </button>
                </div>
            </section>
          </div>
        );
      case 'classes':
        return <div className="pt-8 pb-24 animate-fadeIn"><ClassSchedule /></div>;
      case 'workouts':
        return <div className="pt-8 pb-24 animate-fadeIn"><WorkoutSection /></div>;
      case 'access':
        return <div className="pt-8 pb-24 animate-fadeIn"><AccessQR /></div>;
      case 'plans':
        return (
          <div className="pt-8 pb-24 animate-fadeIn">
            <MembershipPlans onSelectPlan={handleSelectPlan} />
          </div>
        );
      case 'join':
        return (
          <div className="pt-8 pb-24 animate-fadeIn">
            <RegistrationForm selectedTier={selectedTier} onTierChange={setSelectedTier} />
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass-panel h-20 border-b border-white/5">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <span className="text-black font-black text-sm">E</span>
            </div>
            <div className="flex flex-col -gap-1">
                <span className="font-serif text-lg font-bold tracking-tighter text-white leading-none">ELITE <span className="gold-text-gradient">GOLD</span></span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Premium Fitness Club</span>
            </div>
        </div>
        <button 
          onClick={() => setActiveTab('access')}
          className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 active:text-gold-500 transition-colors"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 11v1m4-12h-8m8 0a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4zm8 16h-8m8 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4zM6 10h12M6 14h12" /></svg>
        </button>
      </header>

      <main className="pt-20 min-h-screen">
        {renderContent()}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
    </div>
  );
};

export default App;
