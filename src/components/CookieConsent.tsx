import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('bw_cookie_consent');
      if (!consent) {
        // Show banner after brief delay
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In restricted environments, do not crash
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('bw_cookie_consent', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('bw_cookie_consent', 'declined');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Consentimento de Cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#121212]/95 backdrop-blur-md border border-white/15 rounded-[22px] p-4 sm:p-5 shadow-2xl text-white animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#E5092F]/10 border border-[#E5092F]/20 flex items-center justify-center shrink-0 text-[#E5092F] mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>

        <div className="flex-1 space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            Privacidade & Cookies
          </h4>
          <p className="text-xs text-neutral-300 leading-relaxed font-normal">
            Utilizamos cookies essenciais e métricas anônimas para melhorar sua experiência na BLACKWAVE de acordo com a LGPD.
          </p>

          <div className="pt-3 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#E5092F] hover:bg-[#FF1744] transition-colors cursor-pointer"
            >
              Aceitar
            </button>
            <button
              onClick={handleDecline}
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Recusar
            </button>
          </div>
        </div>

        <button
          onClick={handleDecline}
          aria-label="Fechar banner de cookies"
          className="text-neutral-500 hover:text-neutral-300 p-1 -mr-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
