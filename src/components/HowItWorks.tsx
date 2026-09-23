import React from 'react';
import { CheckCircle2, MessageSquare, Compass } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'ESCOLHA SEU PLANO',
    desc: 'Selecione entre o plano mensal ou anual de acordo com sua preferência e necessidade.',
  },
  {
    step: '02',
    title: 'FALE COM NOSSA EQUIPE',
    desc: 'Clique no botão de WhatsApp e seja atendido por nossa equipe para tirar qualquer dúvida.',
  },
  {
    step: '03',
    title: 'RECEBA AS ORIENTAÇÕES',
    desc: 'Receba rapidamente o passo a passo completo para iniciar e usufruir da sua experiência.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28 bg-[#0B0B0B] border-y border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(229,9,47,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#E5092F] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>PASSO A PASSO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            COMO COMEÇAR?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 font-normal">
            Três passos diretos para você ter acesso à experiência BLACKWAVE.
          </p>
        </div>

        {/* Timeline Grid: Desktop horizontal line, Mobile vertical */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-[#E5092F]/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-24 h-24 rounded-3xl bg-[#141414] border-2 border-white/15 group-hover:border-[#E5092F] flex items-center justify-center shadow-xl group-hover:shadow-[0_0_30px_rgba(229,9,47,0.3)] transition-all duration-300 mb-6">
                  <span className="text-2xl font-black text-white group-hover:text-[#E5092F] transition-colors tabular-nums">
                    {item.step}
                  </span>

                  {/* Corner indicator */}
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E5092F] border-2 border-[#141414]" />
                </div>

                {/* Step Title & Details */}
                <h3 className="text-xl font-extrabold text-white tracking-tight uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 max-w-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
