
import React, { useState, useEffect } from 'react';
import { MembershipTier, UserProfile } from '../types';
import { getFitnessAdvice } from '../services/geminiService';

interface RegistrationFormProps {
  selectedTier: MembershipTier;
  onTierChange: (tier: MembershipTier) => void;
}

const planDetails = {
  [MembershipTier.BASIC]: { name: 'Plan Mensual Silver', price: '39€' },
  [MembershipTier.PRO]: { name: 'Plan Mensual Gold', price: '59€' },
  [MembershipTier.ELITE]: { name: 'Plan Mensual Platinum', price: '149€' },
};

const goals = [
  { value: "Perder peso", icon: "⚖️" },
  { value: "Ganar masa muscular", icon: "💪" },
  { value: "Estética", icon: "💎" },
  { value: "Mejorar resistencia", icon: "🏃" },
  { value: "Flexibilidad y Salud", icon: "🧘" },
  { value: "Alto Rendimiento / Competición", icon: "🏆" }
];

const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedTier, onTierChange }) => {
  const [formData, setFormData] = useState<UserProfile>({
    name: '',
    email: '',
    age: 25,
    goal: 'Mantenimiento',
    address: '',
    postalCode: '',
    medicalInfo: '',
    paymentMethod: 'Tarjeta de Crédito',
    tier: selectedTier
  });
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isGoalMenuOpen, setIsGoalMenuOpen] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, tier: selectedTier }));
  }, [selectedTier]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const advice = await getFitnessAdvice(formData);
    setAiResponse(advice);
    setLoading(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTierSelection = (tier: MembershipTier) => {
    setFormData({ ...formData, tier });
    onTierChange(tier);
  };

  if (submitted) {
    return (
      <div className="px-6 py-10 animate-fadeIn">
        <div className="glass-panel p-10 rounded-[3rem] text-center border-t-4 border-gold-500 shadow-2xl">
          <div className="w-24 h-24 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-white uppercase tracking-tighter leading-tight">¡Bienvenido a la <span className="gold-text-gradient">Élite</span>!</h2>
          <div className="bg-zinc-900/80 p-8 rounded-[2rem] mb-10 border border-white/5 text-left">
            <h3 className="text-gold-500 text-[10px] uppercase font-black tracking-widest mb-4">Consejo Pro Gemini</h3>
            <p className="text-zinc-300 italic text-base leading-relaxed font-medium">
                "{aiResponse}"
            </p>
          </div>
          <button 
            onClick={() => { setSubmitted(false); window.location.reload(); }}
            className="w-full gold-gradient text-black font-black uppercase tracking-[0.2em] py-6 rounded-3xl active:scale-95 transition-all shadow-xl"
          >
            Dashboard de Socio
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="join" className="px-6 pb-20 animate-fadeIn">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-serif font-bold mb-3 uppercase tracking-tighter leading-none">ÚNETE A LA <br/><span className="gold-text-gradient">ÉLITE</span></h2>
        <p className="text-zinc-500 text-sm font-medium">Membresía exclusiva Elite Gold Gym.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-gold-500"></div>
            <h3 className="text-[11px] uppercase font-black tracking-[0.3em] text-gold-500">Datos Personales</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[11px] uppercase text-zinc-600 font-black ml-1 tracking-widest">Nombre Completo</label>
              <input 
                required
                type="text" 
                className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-2xl px-6 py-5 focus:border-gold-500 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] outline-none transition-all text-white placeholder-zinc-700 text-base"
                placeholder="Ej. Juan Tilve"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] uppercase text-zinc-600 font-black ml-1 tracking-widest">Email de Contacto</label>
              <input 
                required
                type="email" 
                className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-2xl px-6 py-5 focus:border-gold-500 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] outline-none transition-all text-white placeholder-zinc-700 text-base"
                placeholder="email@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Custom Objective Selector */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-gold-500"></div>
            <h3 className="text-[11px] uppercase font-black tracking-[0.3em] text-gold-500">Tu Objetivo</h3>
          </div>
          <div className="space-y-2 relative">
            <label className="text-[11px] uppercase text-zinc-600 font-black ml-1 tracking-widest">Selecciona tu meta principal</label>
            <button
              type="button"
              onClick={() => setIsGoalMenuOpen(!isGoalMenuOpen)}
              className={`w-full bg-zinc-900/50 border rounded-2xl px-6 py-5 flex items-center justify-between transition-all duration-300 ${isGoalMenuOpen ? 'border-gold-500 bg-zinc-900 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-zinc-800/50'}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  {goals.find(g => g.value === formData.goal)?.icon || '✨'}
                </span>
                <span className="text-white font-bold text-base">{formData.goal}</span>
              </div>
              <svg className={`w-5 h-5 text-gold-500 transition-transform duration-300 ${isGoalMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu Panel */}
            {isGoalMenuOpen && (
              <div className="absolute z-50 top-[calc(100%+8px)] left-0 right-0 glass-panel rounded-3xl border border-gold-500/30 overflow-hidden animate-fadeIn shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="max-h-[300px] overflow-y-auto no-scrollbar py-2">
                  {goals.map((goal) => (
                    <button
                      key={goal.value}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, goal: goal.value});
                        setIsGoalMenuOpen(false);
                      }}
                      className={`w-full px-6 py-4 flex items-center gap-4 transition-all hover:bg-gold-500/10 ${formData.goal === goal.value ? 'bg-gold-500/20' : ''}`}
                    >
                      <span className="text-2xl w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform">
                        {goal.icon}
                      </span>
                      <div className="flex flex-col items-start">
                        <span className={`text-sm font-bold tracking-tight ${formData.goal === goal.value ? 'text-gold-500' : 'text-zinc-300'}`}>
                          {goal.value}
                        </span>
                      </div>
                      {formData.goal === goal.value && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_10px_#D4AF37]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-gold-500"></div>
            <h3 className="text-[11px] uppercase font-black tracking-[0.3em] text-gold-500">Ubicación</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[11px] uppercase text-zinc-600 font-black ml-1 tracking-widest">Dirección completa</label>
              <input 
                required
                type="text" 
                className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-2xl px-6 py-5 focus:border-gold-500 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] outline-none transition-all text-white placeholder-zinc-700 text-base"
                placeholder="Calle, Número, Piso"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] uppercase text-zinc-600 font-black ml-1 tracking-widest">Código Postal</label>
              <input 
                required
                type="text" 
                className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-2xl px-6 py-5 focus:border-gold-500 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] outline-none transition-all text-white placeholder-zinc-700 text-base"
                placeholder="Ej. 36820"
                value={formData.postalCode}
                onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-gold-500"></div>
            <h3 className="text-[11px] uppercase font-black tracking-[0.3em] text-gold-500">Suscripción</h3>
          </div>
          
          <div className="space-y-3">
            {[MembershipTier.BASIC, MembershipTier.PRO, MembershipTier.ELITE].map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => handleTierSelection(tier)}
                className={`w-full glass-panel p-6 rounded-3xl border-l-4 transition-all duration-300 flex justify-between items-center ${
                  formData.tier === tier ? 'border-gold-500 bg-gold-500/10 scale-[1.02] shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-zinc-800 opacity-40 grayscale'
                }`}
              >
                <div className="text-left">
                  <p className={`text-[10px] uppercase font-black tracking-widest ${formData.tier === tier ? 'text-gold-500' : 'text-zinc-500'}`}>
                    {tier === MembershipTier.PRO ? 'Plan Recomendado' : 'Membresía'}
                  </p>
                  <p className="text-xl font-serif font-bold text-white tracking-tight">{planDetails[tier].name}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white tracking-tighter">{planDetails[tier].price}</span>
                  <span className="text-zinc-500 text-[10px] block font-black uppercase">/ Mes</span>
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <label className="text-[11px] uppercase text-zinc-600 font-black ml-1 tracking-widest">Método de Pago</label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => setFormData({...formData, paymentMethod: 'Tarjeta de Crédito'})}
                className={`py-5 rounded-3xl border font-black text-[11px] uppercase tracking-[0.2em] transition-all ${formData.paymentMethod === 'Tarjeta de Crédito' ? 'border-gold-500 bg-gold-500/10 text-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-zinc-800/50 text-zinc-600'}`}
              >
                Tarjeta
              </button>
              <button 
                type="button"
                onClick={() => setFormData({...formData, paymentMethod: 'PayPal'})}
                className={`py-5 rounded-3xl border font-black text-[11px] uppercase tracking-[0.2em] transition-all ${formData.paymentMethod === 'PayPal' ? 'border-gold-500 bg-gold-500/10 text-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-zinc-800/50 text-zinc-600'}`}
              >
                PayPal
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full gold-gradient text-black font-black py-7 rounded-[2.5rem] uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(212,175,55,0.3)] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-4 text-sm"
          >
            {loading ? (
              <span className="animate-spin h-6 w-6 border-[3px] border-black border-t-transparent rounded-full"></span>
            ) : "FINALIZAR INSCRIPCIÓN"}
          </button>
          <p className="text-center text-zinc-600 text-[10px] mt-8 uppercase font-black tracking-[0.3em] leading-relaxed">
            ACCESO INSTANTÁNEO 24/7 <br/> TRAS LA CONFIRMACIÓN
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
