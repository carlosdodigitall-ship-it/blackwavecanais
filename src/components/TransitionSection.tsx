import React from 'react';
import BlackwaveWave from './BlackwaveWave';

export default function TransitionSection() {
  return (
    <section
      id="transicao"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#050505] via-[#120407] to-[#050505]"
    >
      {/* Cinematic Ambient Beam */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[85vw] max-w-5xl h-48 bg-gradient-to-r from-transparent via-[#E5092F]/20 to-transparent blur-[90px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E5092F]">
            BLACKWAVE ECOSYSTEM
          </span>
        </div>

        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight">
          UMA EXPERIÊNCIA. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-[#FF4D6D]">
            VÁRIAS POSSIBILIDADES.
          </span>
        </h3>

        <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-normal">
          Tecnologia e simplicidade trabalhando juntos para entregar conveniência em qualquer tela.
        </p>
      </div>

      {/* Dynamic Wave crossing the section */}
      <div className="relative w-full mt-8">
        <BlackwaveWave intensity="high" />
      </div>
    </section>
  );
}
