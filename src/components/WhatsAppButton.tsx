import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../lib/whatsapp';
import { trackLead } from '../lib/analytics';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    trackLead('Floating WhatsApp Button');
    openWhatsApp(WHATSAPP_MESSAGES.DEFAULT);
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex items-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-[#111111]/95 text-white text-xs font-semibold shadow-xl border border-white/10 whitespace-nowrap transition-all duration-200 pointer-events-none ${
          showTooltip
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
        role="tooltip"
      >
        <span>Fale com a BLACKWAVE</span>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleClick}
        aria-label="Fale com a BLACKWAVE pelo WhatsApp"
        className="relative w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] hover:from-[#2bf075] hover:to-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] flex items-center justify-center cursor-pointer transition-transform duration-200 active:scale-90 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        {/* Pulse beacon rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon (SVG for highest precision) */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 fill-current text-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
    </div>
  );
}
