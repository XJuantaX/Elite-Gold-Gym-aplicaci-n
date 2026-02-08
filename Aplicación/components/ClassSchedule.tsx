
import React, { useState, useMemo } from 'react';

type Activity = 'Crosstraining' | 'Pilates' | 'Hyrox' | 'Halterofilia';
type Day = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado';

const scheduleData: Record<Activity, string[]> = {
  'Crosstraining': ['08:30 - 09:30', '10:00 - 11:00', '11:30 - 12:30', '17:30 - 18:30', '19:00 - 20:00', '20:30 - 21:30'],
  'Pilates': ['09:00 - 10:00', '11:00 - 12:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'],
  'Hyrox': ['08:20 - 09:30', '09:45 - 10:45', '18:30 - 19:30', '20:00 - 21:00'],
  'Halterofilia': ['10:30 - 11:30', '12:00 - 13:00', '16:30 - 17:30', '18:00 - 19:00', '21:00 - 22:00']
};

const days: Day[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const ClassSchedule: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity>('Crosstraining');
  const [selectedDay, setSelectedDay] = useState<Day>('Lunes');
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [isDayMenuOpen, setIsDayMenuOpen] = useState(false);

  const availableTimes = useMemo(() => {
    const times = scheduleData[selectedActivity];
    if (selectedDay === 'Sábado') {
      return times.filter(t => {
        const hour = parseInt(t.split(':')[0], 10);
        return hour < 14;
      });
    }
    return times;
  }, [selectedActivity, selectedDay]);

  const toggleClass = (time: string) => {
    const classId = `${selectedDay}-${selectedActivity}-${time}`;
    setSelectedClasses(prev => 
      prev.includes(classId) 
        ? prev.filter(id => id !== classId) 
        : [...prev, classId]
    );
  };

  return (
    <div className="px-6 pb-20 animate-fadeIn">
      <div className="mb-10">
        <h3 className="text-3xl font-serif font-bold uppercase tracking-tight leading-none mb-2">HORARIOS</h3>
        <p className="text-zinc-500 text-sm font-medium">Reserva tus sesiones de élite.</p>
      </div>

      {/* Custom Day Selector (More Eye-Catching) */}
      <div className="mb-10 relative">
        <label className="block text-[11px] uppercase tracking-[0.3em] text-zinc-600 font-black mb-3 ml-1">Calendario Semanal</label>
        <button
          onClick={() => setIsDayMenuOpen(!isDayMenuOpen)}
          className={`w-full glass-panel border rounded-[2rem] px-8 py-6 flex items-center justify-between transition-all duration-300 shadow-xl ${isDayMenuOpen ? 'border-gold-500 bg-zinc-900 ring-4 ring-gold-500/10' : 'border-white/5'}`}
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center text-black shadow-lg shadow-gold-500/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-black text-gold-500 tracking-widest mb-0.5">Día Seleccionado</span>
              <span className="text-xl font-serif font-bold text-white uppercase tracking-tighter">{selectedDay}</span>
            </div>
          </div>
          <svg className={`w-6 h-6 text-gold-500 transition-transform duration-500 ${isDayMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Panel for Days */}
        {isDayMenuOpen && (
          <div className="absolute z-50 top-[calc(100%+12px)] left-0 right-0 glass-panel rounded-[2.5rem] border border-gold-500/30 overflow-hidden animate-fadeIn shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
            <div className="grid grid-cols-1 divide-y divide-white/5">
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setIsDayMenuOpen(false);
                  }}
                  className={`w-full px-8 py-5 flex items-center justify-between transition-all hover:bg-gold-500/10 ${selectedDay === day ? 'bg-gold-500/20' : ''}`}
                >
                  <span className={`text-base font-bold uppercase tracking-widest ${selectedDay === day ? 'text-gold-500' : 'text-zinc-400'}`}>
                    {day}
                  </span>
                  {selectedDay === day && (
                    <div className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Activities Menu */}
      <div className="flex overflow-x-auto gap-4 pb-10 no-scrollbar -mx-6 px-6">
        {(Object.keys(scheduleData) as Activity[]).map((activity) => (
          <button
            key={activity}
            onClick={() => setSelectedActivity(activity)}
            className={`whitespace-nowrap px-8 py-4 rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] border transition-all duration-300 ${
              selectedActivity === activity 
                ? 'gold-gradient text-black border-transparent shadow-[0_10px_20px_rgba(212,175,55,0.25)] scale-105' 
                : 'border-zinc-800 text-zinc-500 bg-zinc-900/40 opacity-70'
            }`}
          >
            {activity}
          </button>
        ))}
      </div>

      {/* Grid de Clases */}
      <div className="space-y-5">
        {availableTimes.length > 0 ? (
          availableTimes.map((time, index) => {
            const isSelected = selectedClasses.includes(`${selectedDay}-${selectedActivity}-${time}`);
            return (
              <button 
                key={index}
                onClick={() => toggleClass(time)}
                className={`w-full text-left p-7 rounded-[2rem] flex items-center justify-between border transition-all duration-500 active:scale-[0.96] ${
                  isSelected 
                    ? 'border-gold-500 bg-gold-500/10 shadow-[0_15px_30px_rgba(212,175,55,0.15)] ring-1 ring-gold-500/30' 
                    : 'border-white/5 bg-zinc-900/60'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-[10px] uppercase tracking-[0.3em] font-black mb-2 ${isSelected ? 'text-gold-500' : 'text-zinc-600'}`}>
                    {isSelected ? '✓ Reservado' : `Sesión ${index + 1}`}
                  </span>
                  <span className={`text-2xl font-serif font-bold ${isSelected ? 'gold-text-gradient' : 'text-zinc-200'}`}>
                    {time}
                  </span>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isSelected ? 'gold-gradient text-black shadow-lg shadow-gold-500/20' : 'bg-zinc-800 text-zinc-600'}`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isSelected ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    )}
                  </svg>
                </div>
              </button>
            );
          })
        ) : (
          <div className="text-center py-16 glass-panel rounded-[2.5rem] border border-white/5">
            <svg className="w-12 h-12 text-zinc-800 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-zinc-500 text-sm font-medium">No hay sesiones este día para la actividad seleccionada.</p>
          </div>
        )}
      </div>

      {selectedClasses.length > 0 && (
        <div className="mt-12 p-8 glass-panel rounded-[2.5rem] border-l-4 border-gold-500 animate-fadeIn shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-gold-500/10 group-hover:text-gold-500/20 transition-colors">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7.305 4.5 3.5 8.305 3.5 13c0 4.695 3.805 8.5 8.5 8.5s8.5-3.805 8.5-8.5c0-4.695-3.805-8.5-8.5-8.5zm0 15c-3.585 0-6.5-2.915-6.5-6.5s2.915-6.5 6.5-6.5 6.5 2.915 6.5 6.5-2.915 6.5-6.5 6.5z"/></svg>
          </div>
          <p className="text-[10px] uppercase font-black text-gold-500 tracking-[0.3em] mb-2">Estado de Reserva</p>
          <p className="text-lg text-white font-serif font-bold">Has seleccionado <span className="gold-text-gradient">{selectedClasses.length}</span> sesiones exclusivas.</p>
        </div>
      )}
    </div>
  );
};

export default ClassSchedule;
