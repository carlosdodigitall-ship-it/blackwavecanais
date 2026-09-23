import React from 'react';
import { Tv, Smartphone, Monitor, ShieldCheck, Check } from 'lucide-react';

export default function DeviceShowcase() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#050505] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5092F]/08 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#E5092F] mb-3">
            <Tv className="w-3.5 h-3.5" />
            <span>MULTIDISPOSITIVOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            UMA EXPERIÊNCIA EM <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              DIFERENTES TELAS
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal max-w-2xl mx-auto">
            Uma experiência moderna pensada para diferentes dispositivos compatíveis.
          </p>
        </div>

        {/* 3 Distinct Device Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Device 1: Smart TV */}
          <div className="group rounded-[26px] p-6 sm:p-8 bg-[#111111]/80 backdrop-blur-md border border-white/10 hover:border-[#E5092F]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5092F]">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5">
                  SALA & QUARTO
                </span>
              </div>

              <h3 className="text-xl font-bold text-white uppercase mb-2">
                SMART TV
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                Aproveite na tela grande com alta definição e navegação prática pelo controle remoto.
              </p>

              {/* Fictional TV Screen Card */}
              <div className="rounded-xl aspect-[16/10] bg-[#171717] border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative shadow-inner">
                <div className="flex items-center justify-between text-[10px] text-neutral-400">
                  <span className="font-bold text-white">BLACKWAVE TV</span>
                  <span className="text-[#E5092F]">4K READY</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 my-auto">
                  <div className="aspect-[4/3] rounded bg-gradient-to-tr from-[#2c0b11] to-[#141414] border border-white/10 flex items-end p-1">
                    <span className="text-[8px] font-bold text-white">CANAL 01</span>
                  </div>
                  <div className="aspect-[4/3] rounded bg-gradient-to-tr from-[#1b1b22] to-[#141414] border border-white/10 flex items-end p-1">
                    <span className="text-[8px] font-bold text-white">CANAL 02</span>
                  </div>
                  <div className="aspect-[4/3] rounded bg-gradient-to-tr from-[#221016] to-[#141414] border border-white/10 flex items-end p-1">
                    <span className="text-[8px] font-bold text-white">CANAL 03</span>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full" />
              </div>
            </div>

            <ul className="mt-6 pt-6 border-t border-white/5 space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E5092F]" /> Resolução adaptativa
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E5092F]" /> Layout otimizado para controle
              </li>
            </ul>
          </div>

          {/* Device 2: Smartphone */}
          <div className="group rounded-[26px] p-6 sm:p-8 bg-[#111111]/80 backdrop-blur-md border border-[#E5092F]/30 hover:border-[#E5092F]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_rgba(229,9,47,0.1)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#E5092F]/10 border border-[#E5092F]/30 flex items-center justify-center text-[#E5092F]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#E5092F] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#E5092F]/10 border border-[#E5092F]/20">
                  ONDE VOCÊ ESTIVER
                </span>
              </div>

              <h3 className="text-xl font-bold text-white uppercase mb-2">
                SMARTPHONE
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                Sua experiência disponível no bolso para acompanhar viagens, deslocamentos e momentos de lazer.
              </p>

              {/* Fictional Phone Screen Card */}
              <div className="rounded-xl aspect-[16/10] bg-[#171717] border border-white/10 p-3 flex items-center justify-center overflow-hidden relative shadow-inner">
                <div className="w-28 rounded-lg aspect-[9/16] bg-black border border-white/15 p-1.5 flex flex-col justify-between text-[7px] text-white">
                  <div className="w-6 h-1 bg-white/30 rounded-full mx-auto" />
                  <div className="p-1 rounded bg-gradient-to-r from-[#E5092F] to-[#790518] font-bold text-center">
                    BLACKWAVE MOBILE
                  </div>
                  <div className="w-8 h-0.5 bg-white/20 rounded-full mx-auto" />
                </div>
              </div>
            </div>

            <ul className="mt-6 pt-6 border-t border-white/5 space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E5092F]" /> Carregamento veloz
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E5092F]" /> Compatível com conexões móveis
              </li>
            </ul>
          </div>

          {/* Device 3: Notebook & PC */}
          <div className="group rounded-[26px] p-6 sm:p-8 bg-[#111111]/80 backdrop-blur-md border border-white/10 hover:border-[#E5092F]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5092F]">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5">
                  WEB & TABLETS
                </span>
              </div>

              <h3 className="text-xl font-bold text-white uppercase mb-2">
                COMPUTADOR & TABLET
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                Acesse diretamente pelo navegador sem burocracia ou downloads complicados.
              </p>

              {/* Fictional Laptop Screen Card */}
              <div className="rounded-xl aspect-[16/10] bg-[#171717] border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative shadow-inner">
                <div className="flex items-center gap-1.5 border-b border-white/10 pb-1.5 text-[8px] text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-[#E5092F]" />
                  <span>blackwave.digital/player</span>
                </div>
                <div className="flex items-center gap-2 my-auto">
                  <div className="w-1/3 aspect-[4/3] rounded bg-white/5 border border-white/10" />
                  <div className="w-2/3 space-y-1">
                    <div className="w-full h-2 bg-white/10 rounded" />
                    <div className="w-3/4 h-2 bg-white/5 rounded" />
                  </div>
                </div>
                <div className="w-full h-1 bg-[#E5092F]/30 rounded-full" />
              </div>
            </div>

            <ul className="mt-6 pt-6 border-t border-white/5 space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E5092F]" /> Acesso direto via web
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E5092F]" /> Múltiplas abas e resolução total
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
