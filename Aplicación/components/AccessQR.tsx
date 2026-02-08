
import React, { useState, useEffect } from 'react';

const AccessQR: React.FC = () => {
  const [qrData, setQrData] = useState<string>(Math.random().toString(36).substring(7));
  const [timeLeft, setTimeLeft] = useState<number>(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setQrData(Math.random().toString(36).substring(7));
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrData}&color=D4AF37&bgcolor=000000`;

  return (
    <div className="px-6 pb-20 animate-fadeIn flex flex-col items-center justify-center min-h-[60vh]">
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-serif font-bold uppercase tracking-tight leading-none mb-2">PASE DE <span className="gold-text-gradient">ACCESO</span></h3>
        <p className="text-zinc-500 text-sm font-medium">Escanea este código en el torno de entrada.</p>
      </div>

      <div className="relative group">
        {/* Decorative Glow */}
        <div className="absolute -inset-4 bg-gold-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="glass-panel p-8 rounded-[3rem] border border-gold-500/30 relative flex flex-col items-center">
          <div className="bg-black p-4 rounded-2xl border border-white/5 mb-6">
            <img 
              src={qrUrl} 
              alt="Gym Access QR" 
              className="w-48 h-48 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            />
          </div>
          
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center px-2">
              <span className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Sincronizando...</span>
              <span className="text-[10px] uppercase font-black text-gold-500 tracking-widest">{timeLeft}s</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div 
                className="h-full gold-gradient transition-all duration-1000 ease-linear"
                style={{ width: `${(timeLeft / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center space-y-4 max-w-xs">
        <div className="flex items-center justify-center gap-2 text-gold-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[10px] uppercase font-black tracking-widest">Conexión Encriptada</span>
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed italic">
          Por motivos de seguridad, el código se actualiza automáticamente. No compartas tu pase con terceros.
        </p>
      </div>
    </div>
  );
};

export default AccessQR;
