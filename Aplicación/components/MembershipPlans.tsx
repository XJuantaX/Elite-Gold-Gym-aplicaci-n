
import React from 'react';
import { MembershipTier } from '../types';

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  tier: MembershipTier;
  recommended?: boolean;
  onSelect: (tier: MembershipTier) => void;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, features, tier, recommended, onSelect }) => (
  <div className={`p-6 rounded-3xl flex flex-col border ${recommended ? 'border-gold-500 bg-gold-500/5' : 'border-zinc-800 bg-zinc-900/30'}`}>
    <div className="flex justify-between items-start mb-4">
        <div>
            <h3 className="text-xl font-serif font-bold tracking-tight">{name}</h3>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-zinc-500 text-xs">/ Mes</span>
            </div>
        </div>
        {recommended && <span className="bg-gold-500 text-black text-[10px] px-2 py-1 rounded font-black uppercase tracking-tighter">Recomendado</span>}
    </div>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-zinc-400 text-[11px] leading-snug">
          <svg className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {f}
        </li>
      ))}
    </ul>
    <button 
      onClick={() => onSelect(tier)}
      className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 ${recommended ? 'gold-gradient text-black shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border border-gold-500 text-gold-500 hover:bg-gold-500/10'}`}
    >
      Suscribirse
    </button>
  </div>
);

interface MembershipPlansProps {
  onSelectPlan: (tier: MembershipTier) => void;
}

const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  return (
    <div className="px-6 space-y-8">
      <div className="mb-2">
        <h3 className="text-2xl font-serif font-bold uppercase tracking-tighter">TARIFAS</h3>
        <p className="text-zinc-500 text-sm">Escoge el nivel de tu excelencia.</p>
      </div>
      
      <div className="space-y-6">
        <PlanCard 
          tier={MembershipTier.BASIC}
          onSelect={onSelectPlan}
          name="Silver"
          price="39€"
          features={[
            "Acceso ilimitado a sala de fitness",
            "Vestuarios premium",
            "App de entrenamiento",
            "1 Sesión de valoración inicial",
            "Wifi de alta velocidad"
          ]}
        />
        <PlanCard 
          tier={MembershipTier.PRO}
          onSelect={onSelectPlan}
          name="Gold"
          price="59€"
          recommended
          features={[
            "Todo lo incluido en Silver",
            "Acceso a todas las clases dirigidas",
            "Servicio de toallas incluido",
            "Acceso a zona de Sauna y Spa",
            "Asesoramiento nutricional básico"
          ]}
        />
        <PlanCard 
          tier={MembershipTier.ELITE}
          onSelect={onSelectPlan}
          name="Platinum"
          price="149€"
          features={[
            "Todo lo incluido en Gold",
            "4 Sesiones de Personal Training/mes",
            "Plan nutricional personalizado",
            "Acceso a eventos VIP Elite",
            "Lavandería de ropa deportiva"
          ]}
        />
      </div>
    </div>
  );
};

export default MembershipPlans;
