'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import AudioPlayer from '@/components/AudioPlayer';

export default function DoorEntrancePage() {
  const router = useRouter();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Prefetch invitation page so the transition is instant
    router.prefetch('/invitation');
  }, [router]);

  const handleOpenDoor = () => {
    if (isOpening) return;
    setIsOpening(true);
    setIsPlayingAudio(true);

    // Play the AI door opening video forward
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Redirect to the Invitation Page (Peacock Terrace & Ceremonies)
    // right as the white light flash reaches peak bloom (~1.5s)
    setTimeout(() => {
      router.push('/invitation?music=1');
    }, 1500);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#140e0a] select-none flex items-center justify-center">
      {/* Floating Shehnai Audio Player */}
      <AudioPlayer
        isPlaying={isPlayingAudio}
        onTogglePlay={() => setIsPlayingAudio(!isPlayingAudio)}
      />

      {/* ========================================================
          FULLSCREEN REALISTIC AI PALACE DOOR ENTRANCE
          ======================================================== */}
      <div
        onClick={handleOpenDoor}
        className="absolute inset-0 w-full h-full z-10 cursor-pointer overflow-hidden bg-[#140e0a]"
      >
        <video
          ref={videoRef}
          src="/video/door_opening_realistic.mp4"
          poster="/images/royal_palace_doors_wide.jpg"
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Warm Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

        {/* Top Ganesh & Couple Header Badge on Closed Door */}
        <div
          className={`absolute top-8 sm:top-12 inset-x-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4 transition-all duration-500 ${
            isOpening ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="bg-black/80 backdrop-blur-md px-7 py-3 rounded-full border border-amber-400/50 shadow-2xl">
            <p className="font-hindi-royal text-sm sm:text-base text-[#F8E7B4] tracking-wider text-center">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="font-hindi text-xs sm:text-sm tracking-widest text-[#D4AF37] uppercase font-bold mt-0.5 text-center">
              राकेश संग पूजा
            </p>
          </div>
        </div>

        {/* Prominent Royal Interactive Button - Compact, Elegant & Perfectly Sized */}
        <div
          className={`absolute bottom-8 sm:bottom-12 inset-x-0 flex flex-col items-center justify-center z-30 px-4 transition-all duration-500 pb-safe ${
            isOpening ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <button
            id="open-door-btn"
            onClick={handleOpenDoor}
            className="group relative flex flex-col items-center justify-center gap-0.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#A87922] via-[#F3CE65] to-[#A87922] border border-[#FFF2CF] shadow-[0_4px_24px_rgba(212,175,55,0.55),0_0_12px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer max-w-[88vw] sm:max-w-none"
          >
            {/* Outer subtle pulsating golden aura */}
            <span className="absolute -inset-0.5 rounded-full bg-amber-400/30 blur-sm group-hover:bg-amber-400/50 animate-pulse pointer-events-none" />

            {/* Button Main Text - Fits cleanly on one line */}
            <div className="relative z-10 flex items-center gap-2 text-[#241304] whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-950 animate-spin" />
              <span className="font-hindi text-sm sm:text-base font-bold tracking-wide drop-shadow-sm">
                द्वार खोलें • निमंत्रण पत्र देखें
              </span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-950 animate-spin" />
            </div>

            {/* Subtitle / Hint */}
            <span className="relative z-10 text-[10px] sm:text-xs font-hindi text-amber-950/85 font-semibold tracking-wider whitespace-nowrap">
              (Tap to Open • शहनाई के साथ)
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================
          DIVINE WHITE LIGHT FLASH OVERLAY
          Flares up when button is clicked, connecting to /invitation
          ======================================================== */}
      <div
        className={`fixed inset-0 pointer-events-none z-40 bg-white transition-opacity duration-700 ease-in ${
          isOpening ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, #ffffff 0%, #fffef7 60%, #fff8e7 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-amber-100/90 via-white to-transparent" />
      </div>
    </main>
  );
}
