import React, { useState, useEffect, useRef } from 'react';
import { Play, Sparkles, Compass, Film, Tv, Smartphone, Laptop } from 'lucide-react';

interface DeviceMockupsProps {
  className?: string;
}

export default function DeviceMockups({ className = '' }: DeviceMockupsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if mouse parallax should be enabled
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
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  // Parallax multipliers
  const tvMoveX = isDesktop ? offset.x * 12 : 0;
  const tvMoveY = isDesktop ? offset.y * 12 : 0;

  const phoneMoveX = isDesktop ? offset.x * 28 : 0;
  const phoneMoveY = isDesktop ? offset.y * 28 : 0;

  const laptopMoveX = isDesktop ? offset.x * 18 : 0;
  const laptopMoveY = isDesktop ? offset.y * 18 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-6xl mx-auto px-4 py-8 select-none ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-gradient-to-r from-[#E5092F]/10 via-[#FF1744]/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[500px] md:min-h-[580px]">
        {/* ======================================================== */}
        {/* 1. SMART TV (CENTRAL HERO ELEMENT) */}
        {/* ======================================================== */}
        <div
          className="relative z-10 w-full max-w-[760px] animate-float-tv transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${tvMoveX}px, ${tvMoveY}px, 0)`,
          }}
        >
          {/* TV Outer Chassis */}
          <div className="relative rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3.5 bg-gradient-to-b from-[#262626] via-[#141414] to-[#0A0A0A] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(229,9,47,0.15)] border border-white/15">
            {/* TV Screen Glass */}
            <div className="relative rounded-[16px] sm:rounded-[20px] aspect-[16/9] bg-[#0A0A0A] overflow-hidden border border-white/10 flex flex-col justify-between p-3.5 sm:p-6 text-white">
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5092F] shadow-[0_0_8px_#E5092F]" />
                    <span>BLACKWAVE</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-[11px] text-neutral-400 font-medium">
                    <span className="text-white">Início</span>
                    <span>Séries</span>
                    <span>Filmes</span>
                    <span>Originais</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#E5092F] to-white/40 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                    BW
                  </div>
                </div>
              </div>

              {/* Screen Hero Showcase Content */}
              <div className="my-auto z-10 max-w-sm sm:max-w-md pt-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-extrabold uppercase bg-[#E5092F] text-white tracking-widest shadow-sm">
                    DESTAQUE
                  </span>
                  <span className="text-[10px] sm:text-xs text-neutral-300 font-semibold tracking-wide">
                    ORIGINAL BLACKWAVE
                  </span>
                </div>
                <h4 className="text-base sm:text-2xl md:text-3xl font-black tracking-tight leading-tight text-white drop-shadow-md">
                  CYBER ODYSSEY 4K
                </h4>
                <p className="text-[10px] sm:text-xs text-neutral-300 line-clamp-2 mt-1 hidden sm:block max-w-xs sm:max-w-sm">
                  Uma jornada imersiva com áudio espacial e fidelidade cinematográfica de ponta.
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-bold text-[10px] sm:text-xs shadow-md">
                    <Play className="w-3 h-3 fill-black" />
                    <span>Assistir</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-white font-medium text-[10px] sm:text-xs border border-white/15 hidden xs:block">
                    Detalhes
                  </div>
                </div>
              </div>

              {/* Screen Horizontal Cards Rail */}
              <div className="z-10 pt-2 border-t border-white/10">
                <div className="text-[10px] sm:text-xs font-semibold text-neutral-300 mb-2 flex items-center justify-between">
                  <span>CONTINUAR ASSISTINDO</span>
                  <span className="text-neutral-500 text-[10px]">ULTRA HD</span>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {/* Card 1: FEATURED */}
                  <div className="group relative rounded-lg aspect-[16/10] bg-gradient-to-br from-[#2a1215] to-[#121212] border border-white/10 overflow-hidden p-2 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <span className="relative text-[9px] sm:text-[11px] font-bold text-white truncate">
                      FEATURED
                    </span>
                    <div className="w-full h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                      <div className="w-3/4 h-full bg-[#E5092F]" />
                    </div>
                  </div>

                  {/* Card 2: PREMIUM */}
                  <div className="relative rounded-lg aspect-[16/10] bg-gradient-to-br from-[#1b1b22] to-[#0d0d12] border border-white/10 overflow-hidden p-2 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <span className="relative text-[9px] sm:text-[11px] font-bold text-white truncate">
                      PREMIUM
                    </span>
                    <div className="w-full h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                      <div className="w-1/2 h-full bg-[#E5092F]" />
                    </div>
                  </div>

                  {/* Card 3: ORIGINAL */}
                  <div className="relative rounded-lg aspect-[16/10] bg-gradient-to-br from-[#201015] to-[#0f0a0c] border border-white/10 overflow-hidden p-2 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <span className="relative text-[9px] sm:text-[11px] font-bold text-white truncate">
                      ORIGINAL
                    </span>
                    <div className="w-full h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                      <div className="w-5/6 h-full bg-[#E5092F]" />
                    </div>
                  </div>

                  {/* Card 4: EXPLORE */}
                  <div className="relative rounded-lg aspect-[16/10] bg-gradient-to-br from-[#151d20] to-[#0c1012] border border-white/10 overflow-hidden p-2 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <span className="relative text-[9px] sm:text-[11px] font-bold text-white truncate">
                      EXPLORE
                    </span>
                    <div className="w-full h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                      <div className="w-1/4 h-full bg-[#E5092F]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient screen reflection gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E5092F]/10 via-transparent to-white/5 pointer-events-none" />
            </div>

            {/* TV Stand Base */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-3 bg-gradient-to-b from-[#222] to-[#111] rounded-b-md border-b border-white/10 shadow-lg" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-[#E5092F]/30 blur-sm rounded-full" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. SMARTPHONE (OVERLAID AT -8deg ROTATION) */}
        {/* ======================================================== */}
        <div
          className="absolute -bottom-4 sm:-bottom-8 -left-2 sm:left-4 md:left-8 z-30 w-36 sm:w-48 md:w-56 animate-float-phone transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${phoneMoveX}px, ${phoneMoveY}px, 0) rotate(-8deg)`,
          }}
        >
          {/* Phone Body */}
          <div className="relative rounded-[28px] sm:rounded-[36px] p-2 bg-[#1A1A1A] border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(229,9,47,0.25)]">
            {/* Phone Screen */}
            <div className="relative rounded-[22px] sm:rounded-[30px] aspect-[9/19.5] bg-[#0A0A0A] overflow-hidden border border-white/10 p-2.5 flex flex-col justify-between text-white">
              {/* Dynamic Island / Notch */}
              <div className="flex justify-center mb-1">
                <div className="w-14 sm:w-20 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-between px-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5092F]" />
                </div>
              </div>

              {/* Phone Content Header */}
              <div className="mt-1">
                <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-bold">
                  <span className="text-white">BLACKWAVE</span>
                  <span className="text-[#E5092F]">AO VIVO</span>
                </div>
              </div>

              {/* Phone Featured Poster Card */}
              <div className="relative rounded-xl aspect-[4/3] bg-gradient-to-br from-[#3b0d14] via-[#1c080b] to-[#0f0f0f] border border-white/15 p-2 flex flex-col justify-end overflow-hidden my-auto">
                <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-[#E5092F] text-[7px] font-black text-white">
                  4K
                </div>
                <span className="text-[9px] sm:text-[11px] font-black leading-tight text-white">
                  NOVIDADES
                </span>
                <span className="text-[7px] text-neutral-400">Assista agora no celular</span>
              </div>

              {/* Phone Quick Rail */}
              <div className="space-y-1 mb-1">
                <div className="text-[7px] sm:text-[8px] font-bold text-neutral-400 uppercase">
                  Coleção
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-10 rounded-lg bg-white/5 border border-white/10 p-1 flex flex-col justify-end">
                    <span className="text-[7px] font-semibold truncate">Séries</span>
                  </div>
                  <div className="h-10 rounded-lg bg-white/5 border border-white/10 p-1 flex flex-col justify-end">
                    <span className="text-[7px] font-semibold truncate">Filmes</span>
                  </div>
                </div>
              </div>

              {/* Phone Bottom Home Indicator */}
              <div className="flex justify-center pt-1">
                <div className="w-12 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. NOTEBOOK (OVERLAID AT 6deg ROTATION) */}
        {/* ======================================================== */}
        <div
          className="absolute -bottom-2 sm:-bottom-6 -right-2 sm:right-4 md:right-8 z-20 w-44 sm:w-60 md:w-72 animate-float-laptop transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${laptopMoveX}px, ${laptopMoveY}px, 0) rotate(6deg)`,
          }}
        >
          {/* Laptop Screen Assembly */}
          <div className="relative rounded-t-[14px] sm:rounded-t-[18px] p-2 bg-[#1C1C1C] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="relative rounded-[8px] sm:rounded-[12px] aspect-[16/10] bg-[#0A0A0A] overflow-hidden border border-white/10 p-2.5 text-white flex flex-col justify-between">
              {/* Laptop Web Player Header */}
              <div className="flex items-center justify-between text-[8px] sm:text-[10px] border-b border-white/10 pb-1.5">
                <div className="flex items-center gap-1.5 font-bold">
                  <Tv className="w-2.5 h-2.5 text-[#E5092F]" />
                  <span>BLACKWAVE WEB</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Laptop Main Display Area */}
              <div className="grid grid-cols-3 gap-1.5 my-auto">
                <div className="col-span-2 rounded-lg bg-gradient-to-r from-[#21090d] to-[#111115] border border-white/10 p-2 flex flex-col justify-between h-14 sm:h-20">
                  <span className="text-[7px] sm:text-[8px] font-bold text-[#E5092F]">REPRODUZINDO</span>
                  <div>
                    <p className="text-[8px] sm:text-[11px] font-black text-white leading-tight">
                      BLACKWAVE ULTRA
                    </p>
                    <p className="text-[6px] sm:text-[8px] text-neutral-400">Transmissão contínua</p>
                  </div>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-1.5 flex flex-col justify-center items-center text-center">
                  <Film className="w-3.5 h-3.5 text-[#E5092F] mb-0.5" />
                  <span className="text-[6px] sm:text-[8px] font-bold text-white">COLLECTION</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-[#E5092F]" />
              </div>
            </div>
          </div>

          {/* Laptop Base & Keyboard Shelf */}
          <div className="relative h-3.5 bg-gradient-to-b from-[#2E2E2E] via-[#1E1E1E] to-[#121212] rounded-b-[10px] border-t border-white/20 shadow-xl flex items-center justify-center">
            <div className="w-12 h-1 bg-black/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Devices legend info */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-neutral-400 font-medium">
        <span className="flex items-center gap-1.5">
          <Tv className="w-3.5 h-3.5 text-[#E5092F]" /> Smart TV
        </span>
        <span className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-[#E5092F]" /> Smartphone
        </span>
        <span className="flex items-center gap-1.5">
          <Laptop className="w-3.5 h-3.5 text-[#E5092F]" /> Computador & Tablet
        </span>
      </div>
    </div>
  );
}
