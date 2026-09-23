import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'O que é a BLACKWAVE?',
    a: 'A BLACKWAVE é uma experiência de entretenimento digital apresentada de forma simples e moderna.',
  },
  {
    q: 'Quais são os planos?',
    a: 'Atualmente estão disponíveis os planos mensal de R$ 25 e anual de R$ 100.',
  },
  {
    q: 'Como faço para contratar?',
    a: 'Escolha o plano desejado e fale com nossa equipe pelo WhatsApp.',
  },
  {
    q: 'Como funciona a ativação?',
    a: 'Após a contratação, nossa equipe fornece as orientações necessárias para começar.',
  },
  {
    q: 'Posso tirar dúvidas antes de contratar?',
    a: 'Sim. Você pode falar diretamente com nossa equipe pelo WhatsApp.',
  },
  {
    q: 'Como entro em contato?',
    a: 'Utilize qualquer botão de WhatsApp disponível na página.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E5092F]/06 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#E5092F] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-3 text-base text-neutral-400 font-normal">
            Encontre respostas claras para as dúvidas mais comuns sobre a BLACKWAVE.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[20px] transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#141414] border-[#E5092F]/40 shadow-[0_8px_25px_rgba(0,0,0,0.5)]'
                    : 'bg-[#111111]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5092F] rounded-[20px]"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#E5092F] text-white rotate-180'
                        : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
