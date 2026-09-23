import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../lib/whatsapp';
import { trackLead } from '../lib/analytics';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    trackLead('Header CTA');
    openWhatsApp(WHATSAPP_MESSAGES.DEFAULT);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80 py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-extrabold tracking-wider text-xl sm:text-2xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5092F] rounded-lg p-1"
            aria-label="BLACKWAVE Início"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-white/15 flex items-center justify-center relative overflow-hidden group-hover:border-[#E5092F]/50 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5092F] shadow-[0_0_12px_#E5092F]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
            <span className="tracking-tight text-white font-black">
              BLACK<span className="text-[#E5092F]">WAVE</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300"
            aria-label="Navegação principal"
          >
            <a
              href="#"
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5092F] hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:text-[#E5092F]"
            >
              Início
            </a>
            <a
              href="#beneficios"
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5092F] hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:text-[#E5092F]"
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5092F] hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:text-[#E5092F]"
            >
              Como funciona
            </a>
            <a
              href="#planos"
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5092F] hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:text-[#E5092F]"
            >
              Planos
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5092F] hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:text-[#E5092F]"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Primary Action (Zone 3) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle showLabel={false} />
            <button
              onClick={handleCTAClick}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-[#E5092F] to-[#b80624] hover:from-[#FF1744] hover:to-[#E5092F] shadow-lg shadow-[#E5092F]/25 hover:shadow-[#E5092F]/40 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E5092F] focus-visible:ring-offset-black"
            >
              <span>ASSINAR AGORA</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Actions: ThemeToggle + Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5092F]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onCTAClick={handleCTAClick}
      />
    </>
  );
}
