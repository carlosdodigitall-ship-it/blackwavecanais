import React, { useState, useRef, useEffect } from 'react';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';

interface PricingCardProps {
  title: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  ctaText: string;
  isFeatured?: boolean;
  onSelect: () => void;
}

export default function PricingCard({
  title,
  badge,
  price,
  period,
  description,
  benefits,
  ctaText,
  isFeatured = false,
  onSelect,
}: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotations, setRotations] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isWide = window.innerWidth >= 1024;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsDesktop(!isTouch && isWide && !prefersReduced);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Constrain rotateX and rotateY between -5deg and +5deg
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = -((y / rect.height) - 0.5) * 10;

    setRotations({ x: rotateX, y: rotateY });
    setGlowPos({ x: percentX, y: percentY });
  };

  const handleMouseEnter = () => {
    if (isDesktop) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotations({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full flex justify-center"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isDesktop && isHovered
            ? `rotateX(${rotations.x}deg) rotateY(${rotations.y}deg) translateZ(12px)`
            : 'none',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
        }}
        className={`relative w-full max-w-md rounded-[26px] sm:rounded-[30px] p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
          isFeatured
            ? 'bg-gradient-to-b from-[#191919] via-[#121212] to-[#0A0A0A] border-2 border-[#E5092F]/60 shadow-[0_20px_50px_rgba(229,9,47,0.25)] text-white'
            : 'bg-[#111111]/90 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-white/20 text-white'
        } ${!isDesktop ? 'active:scale-[1.01]' : ''}`}
      >
        {/* Cursor radial light follower for desktop */}
        {isDesktop && isHovered && (
          <div
            className="absolute inset-0 rounded-[26px] sm:rounded-[30px] pointer-events-none opacity-40 transition-opacity"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(229, 9, 47, 0.25) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Featured Badge */}
        {badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#FF1744] via-[#E5092F] to-[#b80624] shadow-[0_4px_15px_rgba(229,9,47,0.5)] border border-white/20 animate-pulse-subtle">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>{badge}</span>
            </div>
          </div>
        )}

        <div>
          {/* Card Title & Description */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {title}
            </h3>
            {isFeatured && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5092F] shadow-[0_0_10px_#E5092F]" />
            )}
          </div>

          <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
            {description}
          </p>

          {/* Price Block */}
          <div className="mt-6 sm:mt-8 pb-6 border-b border-white/10">
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                {price}
              </span>
              <span className="text-sm font-semibold text-neutral-400">
                {period}
              </span>
            </div>
          </div>

          {/* Benefits Check List */}
          <div className="mt-6 sm:mt-8 space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              O que está incluído:
            </span>
            <ul className="space-y-3 text-sm text-neutral-300">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E5092F]/15 border border-[#E5092F]/30 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#E5092F] stroke-[3]" />
                  </div>
                  <span className="font-medium text-neutral-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 pt-4">
          <button
            onClick={onSelect}
            className={`w-full py-4 rounded-2xl text-xs sm:text-sm font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E5092F] focus-visible:ring-offset-black ${
              isFeatured
                ? 'bg-gradient-to-r from-[#E5092F] to-[#b80624] hover:from-[#FF1744] hover:to-[#E5092F] text-white shadow-xl shadow-[#E5092F]/30 hover:shadow-[#E5092F]/50'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>{ctaText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
