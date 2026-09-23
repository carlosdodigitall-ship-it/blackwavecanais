import React, { useState } from 'react';
import { MessageCircle, Shield, FileText, X } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../lib/whatsapp';
import { trackLead } from '../lib/analytics';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'termos' | 'privacidade' | null>(null);

  const handleContactWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    trackLead('Footer Contact WhatsApp');
    openWhatsApp(WHATSAPP_MESSAGES.DEFAULT);
  };

  return (
    <>
      <footer className="relative bg-[#050505] text-neutral-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <a href="#" className="inline-block">
                <span className="text-2xl font-black text-white tracking-tight">
                  BLACK<span className="text-[#E5092F]">WAVE</span>
                </span>
              </a>
              <p className="text-sm text-neutral-400 max-w-sm font-normal leading-relaxed">
                Entretenimento digital com uma experiência simples e moderna.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleContactWhatsApp}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E5092F]/50 hover:bg-[#E5092F]/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E5092F]" />
                  <span>Fale no WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-white transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-white transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleContactWhatsApp}
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Institucional
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => setActiveModal('termos')}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Termos de Uso</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('privacidade')}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <Shield className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Política de Privacidade</span>
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleContactWhatsApp}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Atendimento WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 BLACKWAVE. Todos os direitos reservados.</p>
            <p className="text-neutral-500 text-center sm:text-right">
              Experiência digital voltada para entretenimento e praticidade.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal for Termos de Uso and Política de Privacidade */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[24px] bg-[#111111] border border-white/15 p-6 sm:p-8 text-neutral-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                {activeModal === 'termos' ? 'Termos de Uso' : 'Política de Privacidade'}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm font-normal leading-relaxed text-neutral-300">
              {activeModal === 'termos' ? (
                <>
                  <p>
                    Bem-vindo aos Termos de Uso da <strong>BLACKWAVE</strong>. Ao utilizar nossa landing page e canais de atendimento, você concorda com as diretrizes descritas a seguir.
                  </p>
                  <h4 className="font-bold text-white text-base mt-2">1. Objeto</h4>
                  <p>
                    A BLACKWAVE fornece acesso a informações sobre planos de entretenimento digital e canal direto para contato via WhatsApp.
                  </p>
                  <h4 className="font-bold text-white text-base mt-2">2. Contratação e Ativação</h4>
                  <p>
                    Todas as orientações sobre planos, formas de pagamento e ativação são fornecidas diretamente pela nossa equipe de atendimento autorizada no número oficial de WhatsApp.
                  </p>
                  <h4 className="font-bold text-white text-base mt-2">3. Uso Responsável</h4>
                  <p>
                    O usuário se compromete a fornecer informações verídicas durante o atendimento e a respeitar as orientações técnicas para pleno aproveitamento dos serviços.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Esta Política de Privacidade descreve como a <strong>BLACKWAVE</strong> trata informações quando você interage com nossa página e canais de comunicação.
                  </p>
                  <h4 className="font-bold text-white text-base mt-2">1. Coleta de Dados</h4>
                  <p>
                    Coletamos dados anônimos de navegação através de cookies e pixels analíticos para mensuração de tráfego, além de dados que você voluntariamente compartilha ao iniciar conversa via WhatsApp.
                  </p>
                  <h4 className="font-bold text-white text-base mt-2">2. Finalidade</h4>
                  <p>
                    Os dados são utilizados exclusivamente para responder suas solicitações de atendimento, fornecer orientações sobre os planos e aprimorar a experiência de navegação do site em conformidade com a LGPD.
                  </p>
                  <h4 className="font-bold text-white text-base mt-2">3. Seus Direitos</h4>
                  <p>
                    Você pode solicitar a qualquer momento informações sobre seus dados ou requerer sua exclusão entrando em contato pelo nosso WhatsApp oficial.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
