'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function AudioPlayer({ isPlaying, onTogglePlay }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().then(() => {
        setHasStarted(true);
      }).catch((e) => {
        console.warn('Autoplay prevented or pending user interaction:', e);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/shehnai.mp3"
        loop
        preload="auto"
      />

      {/* Floating Audio Controller */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        <button
          onClick={onTogglePlay}
          className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg hover:border-[#D4AF37] transition-all duration-300"
          title={isPlaying ? "Pause Shehnai Music" : "Play Shehnai Music"}
        >
          {/* Animated sound wave bars */}
          <div className="flex items-end gap-0.5 h-4 w-4">
            <span className={`w-0.5 bg-[#D4AF37] rounded-full ${isPlaying && !isMuted ? 'sound-bar-1' : 'h-1'}`} />
            <span className={`w-0.5 bg-[#D4AF37] rounded-full ${isPlaying && !isMuted ? 'sound-bar-2' : 'h-2'}`} />
            <span className={`w-0.5 bg-[#D4AF37] rounded-full ${isPlaying && !isMuted ? 'sound-bar-3' : 'h-1.5'}`} />
            <span className={`w-0.5 bg-[#D4AF37] rounded-full ${isPlaying && !isMuted ? 'sound-bar-4' : 'h-2.5'}`} />
          </div>

          <span className="text-xs uppercase tracking-widest text-[#F8E7B4] font-medium hidden sm:inline-block">
            {isPlaying ? "Shehnai Playing" : "Play Shehnai"}
          </span>

          <span className="relative flex h-2 w-2">
            {isPlaying && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
            )}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-[#D4AF37]' : 'bg-stone-500'}`} />
          </span>
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-[#F8E7B4] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all shadow-lg"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        )}
      </div>
    </>
  );
}
