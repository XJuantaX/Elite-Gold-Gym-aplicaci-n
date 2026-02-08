
import React, { useState } from 'react';

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  tip: string;
}

interface Workout {
  title: string;
  duration: string;
  intensity: string;
  category: string;
  image: string;
  exercises: Exercise[];
}

const workouts: Workout[] = [
  {
    title: "Entrenamiento de Pecho",
    duration: "60 min",
    intensity: "Alta",
    category: "Hipertrofia",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400",
    exercises: [
      { name: "Press de Banca Plano", sets: "3", reps: "8-10", tip: "Mantén las escápulas retraídas y el core activo." },
      { name: "Press Inclinado con Mancuernas", sets: "3", reps: "8-10", tip: "Enfócate en la parte superior del pectoral." },
      { name: "Aperturas en Polea", sets: "3", reps: "8-10", tip: "Aprieta al final del movimiento para máxima contracción." },
      { name: "Fondos en Paralelas", sets: "3", reps: "8-10", tip: "Inclina el torso hacia adelante para enfatizar el pecho." },
      { name: "Peck Deck (Contractora)", sets: "3", reps: "8-10", tip: "Mantén un ritmo constante y evita el rebote." },
      { name: "Press Declinado con Mancuernas", sets: "3", reps: "8-10", tip: "Controla el descenso para activar la parte baja del pecho." },
      { name: "Flexiones con Diamante", sets: "3", reps: "8-10", tip: "Baja hasta tocar el suelo con el pecho." }
    ]
  },
  {
    title: "Entrenamiento de Pecho + Biceps",
    duration: "65 min",
    intensity: "Máxima",
    category: "Fuerza y Estética",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400",
    exercises: [
      { name: "Press de Banca con Mancuernas", sets: "3", reps: "8-10", tip: "Controla el descenso de forma lenta." },
      { name: "Crossover de Pecho", sets: "3", reps: "8-10", tip: "Siente el estiramiento en cada repetición." },
      { name: "Press Inclinado con Barra", sets: "3", reps: "8-10", tip: "Baja la barra hasta la parte alta del pectoral." },
      { name: "Curl de Biceps con Barra Z", sets: "3", reps: "8-10", tip: "No utilices el balanceo del cuerpo." },
      { name: "Curl Martillo", sets: "3", reps: "8-10", tip: "Trabaja el braquial para un brazo más grueso." },
      { name: "Curl Predicador", sets: "3", reps: "8-10", tip: "Extensión completa sin llegar a bloquear el codo." },
      { name: "Curl Concentrado", sets: "3", reps: "8-10", tip: "Aísla el bíceps apoyando el codo en el muslo." }
    ]
  },
  {
    title: "Entrenamiento de Espalda",
    duration: "60 min",
    intensity: "Alta",
    category: "V-Taper",
    image: "https://images.unsplash.com/photo-1603287611630-4e2db9ca062d?auto=format&fit=crop&q=80&w=400",
    exercises: [
      { name: "Dominadas", sets: "3", reps: "8-10", tip: "Lleva el pecho a la barra, no solo la barbilla." },
      { name: "Remo con Barra", sets: "3", reps: "8-10", tip: "Mantén la espalda recta en un ángulo de 45 grados." },
      { name: "Jalón al Pecho", sets: "3", reps: "8-10", tip: "Enfócate en tirar con los codos hacia abajo." },
      { name: "Remo Gironda", sets: "3", reps: "8-10", tip: "Aguanta un segundo la contracción final apretando escápulas." },
      { name: "Remo con Mancuerna a una mano", sets: "3", reps: "8-10", tip: "Sigue una trayectoria hacia la cadera." },
      { name: "Pull-over con Mancuerna", sets: "3", reps: "8-10", tip: "Abre la caja torácica y estira los dorsales." },
      { name: "Extensiones Lumbares", sets: "3", reps: "8-10", tip: "Fortalece la cadena posterior sin hiperextender el cuello." }
    ]
  },
  {
    title: "Entrenamiento de Espalda + Triceps",
    duration: "65 min",
    intensity: "Media-Alta",
    category: "Definición",
    image: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?auto=format&fit=crop&q=80&w=400",
    exercises: [
      { name: "Peso Muerto Convencional", sets: "3", reps: "8-10", tip: "Técnica perfecta por encima de todo. Espalda neutra." },
      { name: "Remo en T", sets: "3", reps: "8-10", tip: "Agarre estrecho para mayor densidad central." },
      { name: "Pull-over en Polea Alta", sets: "3", reps: "8-10", tip: "Brazos casi rectos para aislar el dorsal." },
      { name: "Press Francés con Barra Z", sets: "3", reps: "8-10", tip: "Codos cerrados apuntando al techo." },
      { name: "Extensiones en Polea con Cuerda", sets: "3", reps: "8-10", tip: "Abre la cuerda al final para mayor contracción." },
      { name: "Patada de Tríceps", sets: "3", reps: "8-10", tip: "Mantén el brazo paralelo al suelo." },
      { name: "Dips entre bancos", sets: "3", reps: "8-10", tip: "Mantén los codos pegados al cuerpo." }
    ]
  },
  {
    title: "Entrenamiento de Torso",
    duration: "60 min",
    intensity: "Alta",
    category: "Push/Pull",
    image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=400",
    exercises: [
      { name: "Press Militar con Barra", sets: "3", reps: "8-10", tip: "Glúteos apretados para proteger la zona lumbar." },
      { name: "Remo con Mancuerna", sets: "3", reps: "8-10", tip: "Tracción explosiva hacia la cadera." },
      { name: "Press de Pecho Inclinado", sets: "3", reps: "8-10", tip: "Control total en la fase negativa (bajada)." },
      { name: "Elevaciones Laterales", sets: "3", reps: "8-10", tip: "No subas más allá de la línea de los hombros." },
      { name: "Jalón al pecho agarre V", sets: "3", reps: "8-10", tip: "Lleva el agarre a la parte baja del esternón." },
      { name: "Face Pulls", sets: "3", reps: "8-10", tip: "Mejora tu postura y salud del hombro posterior." },
      { name: "Cruce de Poleas Bajas", sets: "3", reps: "8-10", tip: "Enfócate en la parte superior del pecho." }
    ]
  }
];

const WorkoutSection: React.FC = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  if (selectedWorkout) {
    return (
      <div className="px-6 pb-24 animate-fadeIn">
        <button 
          onClick={() => setSelectedWorkout(null)}
          className="flex items-center gap-2 text-gold-500 mb-8 active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          <span className="text-[10px] uppercase font-black tracking-[0.2em]">Volver a Rutinas</span>
        </button>

        <div className="relative h-64 rounded-[3rem] overflow-hidden mb-10 border border-gold-500/20 shadow-2xl">
          <img src={selectedWorkout.image} alt={selectedWorkout.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <h2 className="text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2">
              SESIÓN <br/><span className="gold-text-gradient">{selectedWorkout.title.split('de ')[1]}</span>
            </h2>
            <div className="flex gap-4">
               <span className="text-[10px] uppercase font-bold text-zinc-400">{selectedWorkout.duration}</span>
               <span className="text-[10px] uppercase font-bold text-gold-500">Intensidad {selectedWorkout.intensity}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-6 bg-gold-500"></div>
            <h3 className="text-[11px] uppercase font-black tracking-[0.3em] text-gold-500">Guía de Ejercicios</h3>
          </div>

          {selectedWorkout.exercises.map((ex, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-white/5 space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-zinc-500">
                <span className="text-4xl font-serif italic">{idx + 1}</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-white uppercase tracking-tight">{ex.name}</h4>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-black text-gold-500 tracking-widest">Series</span>
                  <span className="text-lg font-bold text-white">{ex.sets}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-black text-gold-500 tracking-widest">Reps</span>
                  <span className="text-lg font-bold text-white">{ex.reps}</span>
                </div>
              </div>
              <p className="text-zinc-500 text-xs italic leading-relaxed pt-2 border-t border-white/5">
                <span className="text-white not-italic font-bold">Tip:</span> {ex.tip}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button 
            className="w-full gold-gradient text-black font-black py-6 rounded-[2.5rem] uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(212,175,55,0.25)] active:scale-95 transition-all text-xs"
          >
            Completar Sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 pb-20 animate-fadeIn">
      <div className="mb-10">
        <h3 className="text-3xl font-serif font-bold uppercase tracking-tight leading-none mb-2">RUTINAS <span className="gold-text-gradient">ELITE</span></h3>
        <p className="text-zinc-500 text-sm font-medium">Selecciona tu grupo muscular hoy.</p>
      </div>

      <div className="space-y-6">
        {workouts.map((workout, index) => (
          <button 
            key={index} 
            onClick={() => {
              setSelectedWorkout(workout);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full text-left relative h-44 rounded-[2rem] overflow-hidden border border-white/10 group active:scale-[0.98] transition-all duration-300"
          >
            <img src={workout.image} alt={workout.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gold-500 text-[8px] uppercase font-black tracking-[0.2em] bg-gold-500/10 border border-gold-500/20 px-2 py-0.5 rounded">
                    {workout.category}
                  </span>
                  <span className="text-zinc-400 text-[8px] uppercase font-black tracking-[0.2em]">
                    • {workout.intensity}
                  </span>
                </div>
                <h4 className="text-lg font-serif font-bold text-white leading-tight uppercase tracking-tight">{workout.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <svg className="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{workout.duration}</p>
                </div>
              </div>
              <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center text-black shadow-lg shadow-gold-500/20 flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </button>
        ))}
        
        {/* Elite Pro Tip */}
        <div className="glass-panel p-8 rounded-[2.5rem] border-t border-gold-500/30 mt-10 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
            <svg className="w-32 h-32 text-gold-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-6 bg-gold-500"></div>
            <h5 className="text-gold-500 text-[10px] uppercase font-black tracking-[0.3em]">Consejo Elite</h5>
          </div>
          <p className="text-white text-base font-serif italic leading-snug">
            "La maestría de los básicos es el camino más corto hacia lo excepcional. No busques el peso, busca la tensión perfecta."
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSection;
