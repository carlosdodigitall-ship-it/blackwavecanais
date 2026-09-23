import React from 'react';

interface BlackwaveWaveProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'high';
}

export default function BlackwaveWave({
  className = '',
  intensity = 'medium',
}: BlackwaveWaveProps) {
  const intensityMap = {
    subtle: { p: 0.15, s: 0.08, t: 0.04 },
    medium: { p: 0.25, s: 0.12, t: 0.06 },
    high: { p: 0.35, s: 0.18, t: 0.09 },
  };

  const current = intensityMap[intensity];

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80vw] h-[180px] bg-gradient-to-r from-transparent via-[#E5092F]/15 to-transparent blur-3xl opacity-75" />
      </div>

      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full min-h-[140px] max-h-[260px] preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Primary wave gradient */}
          <linearGradient id="waveGradPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5092F" stopOpacity="0" />
            <stop offset="25%" stopColor="#E5092F" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#FF1744" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E5092F" stopOpacity="0" />
          </linearGradient>

          {/* Secondary wave gradient */}
          <linearGradient id="waveGradSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5092F" stopOpacity="0" />
            <stop offset="35%" stopColor="#E5092F" stopOpacity="0.4" />
            <stop offset="65%" stopColor="#FF4D6D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E5092F" stopOpacity="0" />
          </linearGradient>

          {/* Tertiary wave gradient */}
          <linearGradient id="waveGradTertiary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#E5092F" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Tertiary Wave (Background, slowest, lowest opacity 0.06) */}
        <path
          d="M-200 120 C 120 40, 360 200, 720 120 C 1080 40, 1320 200, 1640 120"
          stroke="url(#waveGradTertiary)"
          strokeWidth="1.5"
          fill="none"
          opacity={current.t}
          className="animate-wave-drift"
          style={{ animationDuration: '18s' }}
        />

        {/* Secondary Wave (Midground, opacity 0.12) */}
        <path
          d="M-100 130 C 200 200, 520 60, 800 140 C 1080 210, 1360 70, 1540 130"
          stroke="url(#waveGradSecondary)"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          fill="none"
          opacity={current.s}
          className="animate-wave-drift"
          style={{ animationDuration: '14s', animationDirection: 'reverse' }}
        />

        {/* Primary Main Energy Wave (Foreground, sharp, glowing, opacity 0.25) */}
        <path
          d="M-150 110 C 180 50, 480 180, 760 100 C 1040 30, 1260 170, 1590 110"
          stroke="url(#waveGradPrimary)"
          strokeWidth="3.5"
          fill="none"
          filter="url(#waveGlow)"
          opacity={current.p}
          className="animate-wave-drift"
          style={{ animationDuration: '9s' }}
        />

        {/* Subtle luminous nodes on the wave */}
        <circle cx="760" cy="100" r="3" fill="#FFFFFF" opacity={current.p * 2.5} className="animate-pulse" />
        <circle cx="480" cy="180" r="2.5" fill="#E5092F" opacity={current.p * 2.5} />
        <circle cx="1040" cy="30" r="2.5" fill="#E5092F" opacity={current.p * 2.5} />
      </svg>

      {/* Subtle bottom edge fade */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
}
