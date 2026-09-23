import React from 'react';
import { CreditCard, Sparkles, ShieldCheck } from 'lucide-react';
import PricingCard from './PricingCard';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../lib/whatsapp';
import { trackInitiateCheckout, trackLead } from '../lib/analytics';

export default function Pricing() {
  const handleSelectMonthly = () => {
    trackInitiateCheckout('Plano Mensal', 25);
    trackLead('Plano Mensal');
    openWhatsApp(WHATSAPP_MESSAGES.MONTHLY);
  };

  const handleSelectAnnual = () => {
    trackInitiateCheckout('Plano Anual', 100);
    trackLead('Plano Anual');
    openWhatsApp(WHATSAPP_MESSAGES.ANNUAL);
  };

  return (
    <section id="planos" className="relative py-20 sm:py-28 bg-[#050505] overflow-hidden">
      {/* Background glow behind plans */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-transparent via-[#E5092F]/12 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#E5092F] mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            ESCOLHA SEU PLANO
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 font-normal">
            Escolha a opção que combina com você.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-4xl mx-auto">
          {/* Card Mensal */}
          <PricingCard
            title="MENSAL"
            price="R$ 25"
            period="/mês"
            description="Para quem prefere flexibilidade."
            benefits={[
              'Plano mensal',
              'Atendimento via WhatsApp',
              'Ativação após contratação',
              'Suporte',
            ]}
            ctaText="ASSINAR MENSAL"
            isFeatured={false}
            onSelect={handleSelectMonthly}
          />

          {/* Card Anual */}
          <PricingCard
            title="ANUAL"
            badge="MAIOR ECONOMIA"
            price="R$ 100"
            period="/ano"
            description="Mais praticidade para quem prefere um período maior."
            benefits={[
              'Plano anual',
              'Atendimento via WhatsApp',
              'Ativação após contratação',
              'Suporte',
            ]}
            ctaText="ASSINAR ANUAL"
            isFeatured={true}
            onSelect={handleSelectAnnual}
          />
        </div>

        {/* Reassurance Footer */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#E5092F]" />
            Atendimento direto e sem burocracia
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#E5092F]" />
            Sem surpresas ou taxas escondidas
          </span>
        </div>
      </div>
    </section>
  );
}
