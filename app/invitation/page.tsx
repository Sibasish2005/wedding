'use client';

import React, { useState, useEffect } from 'react';
import LenisProvider from '@/components/LenisProvider';
import AudioPlayer from '@/components/AudioPlayer';
import PeacockTerraceHero from '@/components/PeacockTerraceHero';
import EventCards from '@/components/EventCards';

export default function InvitationPage() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  // Auto-play audio when navigating from the door button
  useEffect(() => {
    setIsPlayingAudio(true);

    const handleFirstInteraction = () => {
      setIsPlayingAudio(true);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('scroll', handleFirstInteraction, { passive: true, once: true });
    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true, once: true });

    return () => {
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <LenisProvider>
      <main className="relative min-h-screen bg-[#150f0b] flex flex-col items-center justify-start overflow-x-hidden selection:bg-amber-200 selection:text-amber-900">
        {/* Floating Shehnai Audio Controller */}
        <AudioPlayer
          isPlaying={isPlayingAudio}
          onTogglePlay={() => setIsPlayingAudio(!isPlayingAudio)}
        />

        {/* Ambient Subtle Background Pattern */}
        <div className="fixed inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        {/* Ambient Warm Golden Glow */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1000px] bg-gradient-radial from-amber-600/12 via-amber-950/8 to-transparent blur-3xl pointer-events-none" />

        {/* 1. PEACOCK PALACE TERRACE (The Main Wedding Announcement) */}
        <div className="w-full">
          <PeacockTerraceHero />
        </div>

        {/* 2. CEREMONIES STREAM: Connected natural ceremony sections with Lenis */}
        <div className="w-full flex flex-col items-center">
          <EventCards />
        </div>

        {/* Elegant Footer */}
        <footer className="relative z-10 w-full py-12 text-center text-[#C5A059]/75 font-hindi text-[12px] tracking-wider uppercase border-t border-[#C5A059]/15 mt-8">
          <p className="font-bold text-[#F8E7B4] text-sm">राकेश संग पूजा (Rakesh &amp; Pooja)</p>
          <p className="text-[11px] text-[#C5A059]/60 mt-1">
            समस्त यादव परिवार • ग्राम पठखौली, आजमगढ़
          </p>
          <p className="text-[9px] text-[#C5A059]/40 mt-3 font-sans tracking-widest">
            MADE WITH BLESSINGS FOR SHUBH VIVAAH
          </p>
        </footer>
      </main>
    </LenisProvider>
  );
}
