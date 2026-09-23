import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TransitionSection from './components/TransitionSection';
import VideoPlayer from './components/VideoPlayer';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import DeviceShowcase from './components/DeviceShowcase';
import Pricing from './components/Pricing';
import { MidPageCTA, FinalCTA } from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import { ThemeProvider } from './context/ThemeContext';
import {
  initMetaPixel,
  initGoogleAnalytics,
  trackPageView,
  trackViewContent,
} from './lib/analytics';

function LandingPageContent() {
  useEffect(() => {
    // Initialize tracking scripts safely
    initMetaPixel();
    initGoogleAnalytics();
    trackPageView();

    // Section view observer for ViewContent
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            trackViewContent(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const trackedSections = document.querySelectorAll(
      '#beneficios, #como-funciona, #como-funciona-video, #planos, #faq'
    );
    trackedSections.forEach((sec) => observer.observe(sec));

    return () => {
      trackedSections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#E5092F] selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
      {/* 1. HEADER */}
      <Header />

      <main>
        {/* 2, 3, 4. HERO CINEMATOGRÁFICO + BLACKWAVE WAVE + MOCKUPS TV + SMARTPHONE + NOTEBOOK */}
        <Hero />

        {/* 5. CTA DE MEIO DE PÁGINA */}
        <MidPageCTA />

        {/* 6. TRANSIÇÃO CINEMATOGRÁFICA */}
        <TransitionSection />

        {/* 7. VÍDEO */}
        <VideoPlayer />

        {/* 8. BENEFÍCIOS */}
        <Benefits />

        {/* 9. COMO FUNCIONA */}
        <HowItWorks />

        {/* 10. MOCKUPS / DISPOSITIVOS */}
        <DeviceShowcase />

        {/* 11. PLANOS 3D */}
        <Pricing />

        {/* 12. CTA */}
        <MidPageCTA />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. CTA FINAL */}
        <FinalCTA />
      </main>

      {/* 15. FOOTER */}
      <Footer />

      {/* Floating Interactive Elements */}
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LandingPageContent />
    </ThemeProvider>
  );
}
