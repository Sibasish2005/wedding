'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function PeacockTerraceHero() {
  const [whiteFlashFade, setWhiteFlashFade] = useState(true);

  useEffect(() => {
    // Smoothly dissolve the heavenly white light on page enter
    const timer = setTimeout(() => {
      setWhiteFlashFade(false);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#140e0a] select-none py-12 px-4 sm:px-8">
      {/* ========================================================
          INITIAL DIVINE WHITE LIGHT SCREEN (Dissolves on mount)
          Provides a seamless bridge from the door opening
          ======================================================== */}
      <div
        className={`fixed inset-0 pointer-events-none z-50 bg-white transition-opacity duration-1000 ease-out ${
          whiteFlashFade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, #ffffff 0%, #fffef7 60%, #fff8e7 100%)',
        }}
      />

      {/* ========================================================
          FULLSCREEN PEACOCK TERRACE BACKGROUND
          Scalloped arches, lotus pond, royal blue peacock
          ======================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heavenly_palace_terrace_wide.jpg"
          alt="Heavenly Palace Terrace with Royal Peacock"
          fill
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          priority
        />
        {/* Natural gentle warm ambient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/30 pointer-events-none" />
      </div>

      {/* ========================================================
          PEACOCK SECTION CONTENT (Matches User's Reference)
          ======================================================== */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center text-[#2b1d14] py-8 my-auto">
        {/* Top Ganesh Invocation */}
        <div className="flex flex-col items-center">
          <div className="w-12 sm:w-14 h-12 sm:h-14 text-amber-700/85 mb-1 drop-shadow-md">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <path d="M50 15 C45 15, 38 20, 38 28 C38 34, 42 38, 45 40 C38 41, 30 46, 30 55 C30 65, 40 70, 48 70 C48 75, 45 80, 40 85 C42 86, 48 85, 52 80 C54 77, 55 72, 55 70 C62 70, 72 65, 72 55 C72 46, 64 41, 57 40 C60 38, 64 34, 64 28 C64 20, 57 15, 50 15 Z M50 22 C53 22, 57 24, 57 28 C57 32, 53 34, 50 34 C47 34, 43 32, 43 28 C43 24, 47 22, 50 22 Z M47 46 C48 46, 52 46, 53 46 C60 47, 65 50, 65 56 C65 62, 58 64, 50 64 C42 64, 35 62, 35 56 C35 50, 40 47, 47 46 Z" />
            </svg>
          </div>
          <p className="font-hindi-royal text-base sm:text-lg text-[#8C6228] font-bold tracking-widest drop-shadow-sm">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p className="mt-1 text-xs sm:text-sm tracking-wide text-[#5C3B1A] max-w-md font-hindi font-medium">
            परम पिता परमात्मा की असीम अनुकम्पा एवं पूज्य पूर्वजों के शुभाशीर्वाद से मांगलिक परिणय उत्सव
          </p>
        </div>

        {/* Couple Announcement with Gold Monogram */}
        <div className="flex flex-col items-center mt-5 w-full">
          {/* Circular Gold Wreath Monogram */}
          <div className="relative w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center my-2">
            <div className="absolute inset-0 rounded-full border border-amber-400/60 scale-95 shadow-[0_0_25px_rgba(212,175,55,0.45)]" />
            <div className="absolute inset-1 rounded-full border-2 border-dashed border-[#C5A059]/50 animate-[spin_60s_linear_infinite]" />
            <span className="font-serif text-3xl sm:text-4xl text-[#B38728] font-bold tracking-tight drop-shadow-md">
              RP
            </span>
          </div>

          {/* Groom Details */}
          <div className="flex flex-col items-center mt-1">
            <h1 className="font-hindi-royal text-3xl sm:text-5xl text-[#821927] font-bold tracking-wide drop-shadow-md">
              आयु. राकेश यादव
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#3E2C1E] font-hindi font-bold">
              सुपुत्र: <span className="text-[#821927]">श्रीमती नीलम देवी</span> एवं <span className="text-[#821927]">श्री रामचन्द्र यादव</span>
            </p>
            <p className="text-[11px] sm:text-xs text-[#6B4B27] font-hindi font-medium mt-0.5">
              ग्राम - पठखौली, पोस्ट - शिवली राशिद गंज, जिला - आजमगढ़
            </p>
          </div>

          {/* संग Connector */}
          <div className="flex items-center gap-4 my-2.5">
            <span className="w-12 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <span className="font-hindi-royal text-sm sm:text-base text-[#8C6228] font-bold">
              संग
            </span>
            <span className="w-12 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          </div>

          {/* Bride Details */}
          <div className="flex flex-col items-center">
            <h2 className="font-hindi-royal text-3xl sm:text-5xl text-[#821927] font-bold tracking-wide drop-shadow-md">
              आयु. पूजा यादव
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#3E2C1E] font-hindi font-bold">
              सुपुत्री: <span className="text-[#821927]">श्रीमती खुशी देवी</span> एवं <span className="text-[#821927]">श्री कर्मजीत यादव</span>
            </p>
            <p className="text-[11px] sm:text-xs text-[#6B4B27] font-hindi font-medium mt-0.5">
              ग्राम - नाहूपुर, पोस्ट - सोडरी, जिला - आजमगढ़
            </p>
          </div>

          <div className="text-amber-800/70 tracking-widest text-sm mt-3">
            ✦ ✦ ✦
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt for Ceremonies */}
      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-black/50 backdrop-blur-md border border-amber-400/40 text-[#F8E7B4] shadow-xl">
          <span className="font-hindi text-xs sm:text-sm tracking-wide font-medium">
            मांगलिक कार्यक्रम देखने के लिए नीचे स्क्रॉल करें
          </span>
          <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
