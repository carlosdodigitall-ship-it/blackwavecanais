import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../lib/whatsapp';
import { trackLead } from '../lib/analytics';
import BlackwaveWave from './BlackwaveWave';

/**
 * Mid-Page CTA Section
 */
export function MidPageCTA() {
  const handleClick = () => {
    trackLead('Mid Page CTA');
    openWhatsApp(WHATSAPP_MESSAGES.DEFAULT);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,47,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
          PRONTO PARA COMEÇAR?
        </h3>
        <p className="mt-3 text-base sm:text-lg text-neutral-400 font-normal max-w-xl mx-auto">
          Escolha seu plano e fale com nossa equipe para receber as orientações.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-[#E5092F] to-[#b80624] hover:from-[#FF1744] hover:to-[#E5092F] shadow-xl shadow-[#E5092F]/25 hover:shadow-[#E5092F]/45 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5092F]"
          >
            <span>COMEÇAR AGORA</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * Final Cinematic CTA Section
 */
export function FinalCTA() {
  const handleClick = () => {
    trackLead('Final Page CTA');
    openWhatsApp(WHATSAPP_MESSAGES.FINAL_CTA);
  };

  return (
    <section className="relative py-24 sm:py-36 bg-[#050505] overflow-hidden">
      {/* Background glow and atmospheric lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-5xl h-[450px] bg-gradient-to-r from-[#E5092F]/15 via-[#FF1744]/20 to-[#E5092F]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Big Mark */}
        <div className="mb-2">
          <span className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase select-none">
            BLACK<span className="text-[#E5092F]">WAVE</span>
          </span>
        </div>

        {/* Big Impact Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase max-w-3xl leading-tight">
          SEU PRÓXIMO MOMENTO DE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#FF4D6D]">
            ENTRETENIMENTO COMEÇA AQUI.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal max-w-xl mx-auto">
          Atendimento ágil, ativação orientada e suporte via WhatsApp para você aproveitar sem complicação.
        </p>

        {/* Big Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleClick}
            className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#E5092F] via-[#FF1744] to-[#E5092F] hover:shadow-[0_0_50px_rgba(229,9,47,0.6)] shadow-2xl shadow-[#E5092F]/40 transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E5092F]/50"
          >
            <span>QUERO ASSINAR</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400">
          <MessageCircle className="w-4 h-4 text-[#E5092F]" />
          <span>Fale diretamente com nossa equipe no WhatsApp</span>
        </div>
      </div>

      {/* Decorative Wave at the base */}
      <div className="relative w-full mt-12">
        <BlackwaveWave intensity="medium" />
      </div>
    </section>
  );
}

export default function CTASection() {
  return <MidPageCTA />;
}
