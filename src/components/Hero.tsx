import React from 'react';
import { ArrowUpRight, MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../lib/whatsapp';
import { trackLead } from '../lib/analytics';
import DeviceMockups from './DeviceMockups';
import BlackwaveWave from './BlackwaveWave';

export default function Hero() {
  const handleStartNow = () => {
    trackLead('Hero Main CTA');
    openWhatsApp(WHATSAPP_MESSAGES.DEFAULT);
  };

  const handleScrollToPlans = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const plansElem = document.getElementById('planos');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle radial red glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[600px] bg-gradient-to-b from-[#E5092F]/15 via-[#E5092F]/05 to-transparent rounded-full blur-[120px] opacity-80" />

        {/* Digital Grid Lines - Ultra subtle */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Radial vignette mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)]" />
      </div>

      {/* Main Hero Header Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-8 flex flex-col items-center">
        {/* Brand Big Ambient Entrance Title */}
        <div className="relative mb-3 sm:mb-4 group">
          {/* Subtle Glow behind logo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[#E5092F]/25 to-transparent blur-2xl opacity-60 animate-pulse-subtle pointer-events-none" />
          
          <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white select-none transition-all duration-700 animate-in fade-in zoom-in-95">
            BLACK<span className="text-[#E5092F] drop-shadow-[0_0_25px_rgba(229,9,47,0.45)]">WAVE</span>
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase max-w-3xl leading-tight">
          ENTRETENIMENTO <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            SEM COMPLICAÇÃO.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed text-balance">
          Uma experiência digital moderna, simples e feita para acompanhar você.
        </p>

        {/* Trust Badges (Anti-slop: clean typography, not bloated pills) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-semibold text-neutral-300">
          <span className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092F]" />
            EXPERIÊNCIA PREMIUM
          </span>
          <span className="text-neutral-600 hidden sm:inline">/</span>
          <span className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092F]" />
            PLANOS FLEXÍVEIS
          </span>
          <span className="text-neutral-600 hidden sm:inline">/</span>
          <span className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/5 border border-white/10">
            <MessageCircle className="w-3.5 h-3.5 text-[#E5092F]" />
            ATENDIMENTO VIA WHATSAPP
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleStartNow}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#E5092F] to-[#b80624] hover:from-[#FF1744] hover:to-[#E5092F] shadow-xl shadow-[#E5092F]/30 hover:shadow-[#E5092F]/50 transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5092F]"
          >
            <span>COMEÇAR AGORA</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#planos"
            onClick={handleScrollToPlans}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>VER PLANOS</span>
            <ChevronDown className="w-4 h-4 text-[#E5092F]" />
          </a>
        </div>
      </div>

      {/* Interactive Digital Wave */}
      <div className="relative w-full my-4">
        <BlackwaveWave intensity="medium" />
      </div>

      {/* Central Device Mockups Showcase */}
      <div className="relative z-10 w-full">
        <DeviceMockups />
      </div>

      {/* Bottom Subtle Indicator */}
      <div className="relative z-10 text-center pt-4">
        <a
          href="#transicao"
          className="inline-flex flex-col items-center text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-widest font-semibold"
        >
          <span>Role para explorar</span>
          <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#E5092F]" />
        </a>
      </div>
    </section>
  );
}
