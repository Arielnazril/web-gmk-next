"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TkEkskul() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const playPaudAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          document.removeEventListener("click", playPaudAudio);
          document.removeEventListener("scroll", playPaudAudio);
          document.removeEventListener("touchstart", playPaudAudio);
        }).catch(err => console.log("Autoplay ditahan browser:", err));
      }
    };

    document.addEventListener("click", playPaudAudio);
    document.addEventListener("scroll", playPaudAudio);
    document.addEventListener("touchstart", playPaudAudio);

    return () => {
      document.removeEventListener("click", playPaudAudio);
      document.removeEventListener("scroll", playPaudAudio);
      document.removeEventListener("touchstart", playPaudAudio);
    };
  }, []);

  const ekskuls = [
    { icon: "fa-book-reader", title: "Bercerita", bgLight: "bg-pink-50", textMain: "text-pink-500", desc: "Melatih kemampuan bahasa, rasa percaya diri, dan daya imajinasi anak." },
    { icon: "fa-icons", title: "Gerak Dan Lagu", bgLight: "bg-amber-50", textMain: "text-amber-500", desc: "Mengembangkan koordinasi tubuh dan keceriaan melalui irama musik." },
    { icon: "fa-microphone-alt", title: "Bernyanyi", bgLight: "bg-purple-50", textMain: "text-purple-500", desc: "Mengasah bakat vokal, pendengaran nada, dan ekspresi emosi anak." },
    { icon: "fa-child", title: "Senam", bgLight: "bg-emerald-50", textMain: "text-emerald-500", desc: "Meningkatkan kebugaran fisik, kelenturan, dan kebiasaan hidup sehat." },
    { icon: "fa-paint-brush", title: "Mewarnai", bgLight: "bg-blue-50", textMain: "text-blue-500", desc: "Melatih motorik halus, fokus, dan pengenalan komposisi warna." },
    { icon: "fa-user-friends", title: "Menari", bgLight: "bg-rose-50", textMain: "text-rose-500", desc: "Mengenalkan seni budaya dan melatih keseimbangan serta disiplin gerak." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <audio ref={audioRef} loop>
        <source src="/audio/audio_TK.mpeg" type="audio/mpeg" />
      </audio>

      {/* Hero Section */}
      <div className="bg-[#FFFF00] pt-16 md:pt-24 pb-10 md:pb-12 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <span className="inline-block bg-black/5 text-black px-4 py-1.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-6 animate-pulse">
            Official Welcome
          </span>
          <h1 className="w-full text-2xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter uppercase break-words">
            Selamat Datang di<br className="hidden md:block" />
            <span className="bg-black text-[#FFFF00] px-4 py-1 inline-block mt-2">PAUD Global Maju Khatulistiwa</span>
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <div className="h-[2px] w-8 md:w-12 bg-black/20"></div>
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-black/60 leading-none">Kelompok Bermain & Taman Kanak Kanak</p>
            <div className="h-[2px] w-8 md:w-12 bg-black/20"></div>
          </div>
        </div>
      </div>

      {/* Navigation Dinamis (Tanpa Sticky) */}
      <div className="relative bg-[#FFFF00] border-y border-black/10 z-30 shadow-md transition-all duration-300 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between min-w-max md:min-w-0">
          <div className="flex items-center gap-2 md:gap-3 mr-8 md:mr-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-black/20">
              <i className="fas fa-graduation-cap text-[#FFFF00] text-xs md:text-sm"></i>
            </div>
            <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.1em] text-black whitespace-nowrap">Unit PAUD (KB & TK)</span>
          </div>

          <div className="flex items-center gap-4 md:gap-8 pr-6 md:pr-0">
            <div className="flex space-x-4 md:space-x-8 text-[10px] md:text-[12px] font-bold uppercase tracking-widest whitespace-nowrap">
              <Link href="/unit/tk" className={`pb-1 transition-all ${pathname === '/unit/tk' ? 'text-black border-b-[2px] md:border-b-[3px] border-black' : 'text-black/50 hover:text-black'}`}>Metode Belajar</Link>
              <Link href="/unit/tk/fasilitas" className={`pb-1 transition-all ${pathname === '/unit/tk/fasilitas' ? 'text-black border-b-[2px] md:border-b-[3px] border-black' : 'text-black/50 hover:text-black'}`}>Fasilitas</Link>
              <Link href="/unit/tk/ekstrakurikuler" className={`pb-1 transition-all ${pathname === '/unit/tk/ekstrakurikuler' ? 'text-black border-b-[2px] md:border-b-[3px] border-black' : 'text-black/50 hover:text-black'}`}>Ekstrakurikuler</Link>
              <Link href="/unit/tk/pendaftaran" className={`pb-1 transition-all hidden sm:inline ${pathname === '/unit/tk/pendaftaran' ? 'text-black border-b-[2px] md:border-b-[3px] border-black' : 'text-black/50 hover:text-black'}`}>Pendaftaran</Link>
            </div>
            <Link href="/unit/tk/pendaftaran" className="bg-black text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 whitespace-nowrap">
              Daftar
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section with Image */}
      <div className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50 md:-skew-x-12 md:translate-x-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4">Talent Exploration</span>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                  Eksplorasi <span className="text-yellow-500 underline decoration-yellow-200">Bakat</span>,<br className="hidden md:block"/> Sejak Dini.
                </h2>
              </div>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Kegiatan tambahan yang dirancang untuk melatih kepercayaan diri, motorik kasar, serta kreativitas anak di luar jam pelajaran inti.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4">
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 bg-white shadow-xl shadow-slate-100 rounded-2xl border border-slate-50">
                  <i className="fas fa-medal text-emerald-500 text-lg md:text-xl"></i>
                  <span className="font-bold text-slate-700 text-xs md:text-sm tracking-tight">Pelatih Profesional</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 bg-white shadow-xl shadow-slate-100 rounded-2xl border border-slate-50">
                  <i className="fas fa-users-beam text-blue-500 text-lg md:text-xl"></i>
                  <span className="font-bold text-slate-700 text-xs md:text-sm tracking-tight">Karakter</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center mt-10 lg:mt-0">
              <div className="relative w-full max-w-xs md:max-w-lg group">
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-[40px] md:rounded-[60px] rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="relative bg-white p-4 md:p-6 rounded-[35px] md:rounded-[50px] shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-[30px] md:rounded-[40px] aspect-[4/3] flex flex-col items-center justify-center border-2 md:border-4 border-dashed border-yellow-200 overflow-hidden relative">
                    <img src="/images/kurikulum2.PNG" alt="Kegiatan TK" className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent pt-12 pb-5 md:pb-8 text-center px-4">
                      <p className="font-black text-white text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Develop Your Interest</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List Ekskul Section */}
      <div className="bg-slate-50 py-20 md:py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 md:mb-16 uppercase tracking-tighter">Pilihan Ekstrakurikuler</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {ekskuls.map((item, idx) => (
              <div key={idx} className="group bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col items-center">
                <div className={`w-14 h-14 md:w-20 md:h-20 ${item.bgLight} ${item.textMain} rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-sm text-xl md:text-3xl`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4 className="font-black text-slate-800 text-sm md:text-lg mb-2 uppercase tracking-tight text-center">{item.title}</h4>
                <p className="text-slate-500 text-[8px] md:text-[10px] font-medium leading-relaxed uppercase tracking-widest text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `
      }} />
    </div>
  );
}