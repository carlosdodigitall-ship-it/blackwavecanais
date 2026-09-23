import React from 'react';
import {
  Sparkles,
  Tv,
  MessageCircle,
  Zap,
  Calendar,
  Layers,
  ArrowRight,
} from 'lucide-react';

const BENEFITS = [
  {
    icon: Sparkles,
    title: 'EXPERIÊNCIA SIMPLES',
    description: 'Interface intuitiva e fácil de utilizar.',
    detail: 'Navegação fluida sem complicações.',
  },
  {
    icon: Tv,
    title: 'DISPOSITIVOS COMPATÍVEIS',
    description: 'Experiência adaptada aos dispositivos compatíveis.',
    detail: 'Acesse em sua TV, celular ou computador.',
  },
  {
    icon: MessageCircle,
    title: 'ATENDIMENTO',
    description: 'Fale diretamente com nossa equipe pelo WhatsApp.',
    detail: 'Suporte humano pronto para responder suas dúvidas.',
  },
  {
    icon: Zap,
    title: 'ATIVAÇÃO RÁPIDA',
    description: 'Após a contratação, receba as orientações necessárias para começar.',
    detail: 'Processo ágil sem etapas desnecessárias.',
  },
  {
    icon: Calendar,
    title: 'PLANOS FLEXÍVEIS',
    description: 'Escolha entre mensal e anual.',
    detail: 'Liberdade total com o melhor custo-benefício.',
  },
  {
    icon: Layers,
    title: 'EXPERIÊNCIA BLACKWAVE',
    description: 'Uma experiência criada para quem valoriza praticidade.',
    detail: 'Desenvolvido sob medida para seu dia a dia.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#E5092F]/08 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#E5092F] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092F]" />
            <span>VANTAGENS EXCLUSIVAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            TUDO O QUE VOCÊ PRECISA <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              EM UM SÓ LUGAR
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal">
            Qualidade, velocidade e suporte dedicado em cada detalhe.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 bg-[#111111]/70 backdrop-blur-md border border-white/10 hover:border-[#E5092F]/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(229,9,47,0.15)] flex flex-col justify-between overflow-hidden"
              >
                {/* Glow highlight on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E5092F]/10 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5092F] group-hover:bg-[#E5092F] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm mb-6">
                    <IconComponent className="w-6 h-6 transition-transform" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtext info */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                  <span>{benefit.detail}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5092F] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
