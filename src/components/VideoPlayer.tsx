import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Upload, RotateCcw } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../lib/whatsapp';
import { trackLead } from '../lib/analytics';

export default function VideoPlayer() {
  const defaultVideo = import.meta.env.VITE_VIDEO_URL || '/assets/video/blackwave-demo.mp4';
  const [videoSrc, setVideoSrc] = useState(defaultVideo);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setVideoSrc(localUrl);
      setIsPlaying(false);
      trackLead('Video Upload Custom File');
    }
  };

  const resetToDefault = () => {
    setVideoSrc(defaultVideo);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!videoSrc) {
      trackLead('Video Placeholder Play Click');
      openWhatsApp(WHATSAPP_MESSAGES.DEFAULT);
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="como-funciona-video" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E5092F]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#E5092F] mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>APRESENTAÇÃO EM VÍDEO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            VEJA COMO FUNCIONA
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-normal">
            Conheça na prática a experiência moderna e cinematográfica da BLACKWAVE.
          </p>
        </div>

        {/* 16:9 Cinema Container */}
        <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#181818] via-[#111111] to-[#0A0A0A] p-2 sm:p-3 border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(229,9,47,0.15)]">
          <div className="relative rounded-[16px] sm:rounded-[22px] aspect-[16/9] w-full bg-[#080808] overflow-hidden flex items-center justify-center border border-white/10 group">
            {videoSrc ? (
              <>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Big Center Play Overlay Button when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    aria-label="Reproduzir vídeo"
                    className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#E5092F] to-[#b80624] hover:from-[#FF1744] hover:to-[#E5092F] shadow-[0_0_40px_rgba(229,9,47,0.6)] flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E5092F]"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                  </button>
                )}

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 sm:p-6 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex items-center justify-between text-xs font-semibold text-white/90">
                    <span className="tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E5092F] animate-pulse" />
                      BLACKWAVE CINEMA
                    </span>
                    <span className="text-[#E5092F] font-bold px-2 py-0.5 rounded bg-black/40 border border-[#E5092F]/30">
                      FULL HD 60FPS
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-3 rounded-full bg-white/20 hover:bg-[#E5092F] text-white transition-colors cursor-pointer pointer-events-auto"
                        aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer pointer-events-auto"
                        aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <button
                      onClick={handleFullScreen}
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer pointer-events-auto"
                      aria-label="Tela cheia"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Visual Placeholder */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,47,0.18)_0%,transparent_70%)]" />
                <button
                  onClick={togglePlay}
                  className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E5092F] flex items-center justify-center cursor-pointer shadow-lg"
                  aria-label="Assistir apresentação em vídeo"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                </button>
                <div className="relative z-10 mt-6 space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-white uppercase">
                    SEU VÍDEO AQUI
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video switcher / upload helper bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092F]" />
            <span>Vídeo de demonstração ativo</span>
          </div>

          <div className="flex items-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Carregue outro arquivo de vídeo do seu dispositivo"
            >
              <Upload className="w-3.5 h-3.5 text-[#E5092F]" />
              <span>Trocar vídeo</span>
            </button>

            {videoSrc !== defaultVideo && (
              <button
                onClick={resetToDefault}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Voltar ao vídeo padrão"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restaurar</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
