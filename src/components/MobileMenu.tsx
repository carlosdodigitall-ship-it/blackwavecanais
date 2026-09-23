import React, { useEffect } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onCTAClick: () => void;
}

export default function MobileMenu({ isOpen, onClose, onCTAClick }: MobileMenuProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="fixed inset-x-0 top-[72px] bottom-0 bg-[#0B0B0B]/95 border-t border-white/10 flex flex-col justify-between p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col space-y-4 pt-2">
          <a
            href="#"
            onClick={onClose}
            className="text-lg font-semibold text-white/90 hover:text-white hover:translate-x-1 transition-all py-2 border-b border-white/5"
          >
            Início
          </a>
          <a
            href="#beneficios"
            onClick={onClose}
            className="text-lg font-semibold text-white/90 hover:text-white hover:translate-x-1 transition-all py-2 border-b border-white/5"
          >
            Benefícios
          </a>
          <a
            href="#como-funciona"
            onClick={onClose}
            className="text-lg font-semibold text-white/90 hover:text-white hover:translate-x-1 transition-all py-2 border-b border-white/5"
          >
            Como funciona
          </a>
          <a
            href="#planos"
            onClick={onClose}
            className="text-lg font-semibold text-white/90 hover:text-white hover:translate-x-1 transition-all py-2 border-b border-white/5"
          >
            Planos
          </a>
          <a
            href="#faq"
            onClick={onClose}
            className="text-lg font-semibold text-white/90 hover:text-white hover:translate-x-1 transition-all py-2 border-b border-white/5"
          >
            FAQ
          </a>
        </nav>

        <div className="pt-6 pb-4 space-y-4">
          <div className="flex items-center justify-between py-2 px-1 border-t border-white/5">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Aparência</span>
            <ThemeToggle showLabel={true} />
          </div>

          <button
            onClick={() => {
              onClose();
              onCTAClick();
            }}
            className="w-full py-4 rounded-2xl text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#E5092F] to-[#b80624] shadow-xl shadow-[#E5092F]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform"
          >
            <span>ASSINAR AGORA</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <p className="text-center text-xs text-neutral-500 flex items-center justify-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-[#E5092F]" />
            Atendimento exclusivo e rápido via WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}
