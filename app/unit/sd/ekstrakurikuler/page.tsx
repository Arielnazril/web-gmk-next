"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function SdEkskul() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          document.removeEventListener("click", playAudio);
          document.removeEventListener("scroll", playAudio);
          document.removeEventListener("touchstart", playAudio);
        }).catch(err => console.log("Autoplay ditahan browser:", err));
      }
    };

    document.addEventListener("click", playAudio);
    document.addEventListener("scroll", playAudio);
    document.addEventListener("touchstart", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("scroll", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/audio_SD.mpeg" type="audio/mpeg" />
      </audio>

      {/* Hero Section */}
      <div className="bg-rose-900 pt-16 md:pt-24 pb-10 md:pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-6 animate-pulse">
            Elementary Level Methodology
          </span>
          <h1 className="w-full text-2xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase break-words">
            Selamat Datang di Halaman <br className="hidden md:block" />
            <span className="bg-white text-rose-900 px-4 py-1 inline-block mt-2">Unit Sekolah Dasar (SD)</span>
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <div className="h-[2px] w-8 md:w-12 bg-white/20"></div>
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/70 leading-none">Global Maju Khatulistiwa</p>
            <div className="h-[2px] w-8 md:w-12 bg-white/20"></div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="bg-white border-y border-slate-100 relative z-30 shadow-md transition-all duration-300 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between min-w-max md:min-w-0">
          <div className="flex items-center gap-2 md:gap-3 mr-8 md:mr-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-rose-900 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-rose-100">
              <i className="fas fa-graduation-cap text-white text-xs md:text-sm"></i>
            </div>
            <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.1em] text-slate-900 whitespace-nowrap">Unit SD Global Maju</span>
          </div>

          <div className="flex items-center gap-4 md:gap-8 pr-6 md:pr-0">
            <div className="flex space-x-4 md:space-x-8 text-[10px] md:text-[12px] font-bold uppercase tracking-widest whitespace-nowrap">
              <Link href="/unit/sd/" className="text-slate-400 hover:text-rose-900 pb-1 transition-all">Metode Belajar</Link>
              <Link href="/unit/sd/fasilitas" className="text-slate-400 hover:text-rose-900 pb-1 transition-all">Fasilitas</Link>
              <Link href="/unit/sd/ekstrakurikuler" className="text-rose-900 border-b-[2px] md:border-b-[3px] border-rose-900 pb-1 transition-all">Ekstrakurikuler</Link>
              <Link href="/unit/sd/pendaftaran" className="text-slate-400 hover:text-rose-900 pb-1 transition-all hidden sm:inline">Pendaftaran</Link>
            </div>
            <Link href="/unit/sd/pendaftaran" className="bg-rose-900 text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-rose-100 whitespace-nowrap">
              Daftar
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#7A122E]">
        {/* Hero Section Ekskul */}
        <div className="relative py-24 bg-[#7A122E] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full mb-8">
              Unleash Your Talent
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
              Wadah <span className="text-amber-400">Kreativitas</span> & <span className="text-emerald-400">Bakat</span> Siswa.
            </h2>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Di SD Global Maju, kami percaya setiap anak memiliki potensi unik. Program ekstrakurikuler kami dirancang untuk mengasah kepemimpinan, fisik, dan jiwa seni anak.
            </p>
          </div>
        </div>

        {/* Main Content: Ekskul List */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          
          {/* Row 1: Religi & Karakter (Wajib) */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pramuka */}
              <div className="group flex flex-col md:flex-row bg-slate-50 rounded-[3rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
                <div className="p-10 flex flex-col justify-center w-full">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2">Ekskul Wajib</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">PRAMUKA</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">Membentuk jiwa kemandirian, kedisiplinan, dan cinta alam melalui kegiatan kepramukaan yang interaktif.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white text-slate-400 rounded-full text-[10px] font-bold border border-slate-200 uppercase">Setiap Jumat</span>
                  </div>
                </div>
              </div>

              {/* Bahasa Inggris / Karakter */}
              <div className="group flex flex-col md:flex-row bg-slate-50 rounded-[3rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
                <div className="p-10 flex flex-col justify-center w-full">
                  <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest mb-2">Pendidikan Karakter</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">BAHASA INGGRIS</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">Membentuk landasan spiritual dan moral yang kuat melalui pengenalan nilai-nilai universal, toleransi, dan refleksi diri yang positif bagi setiap siswa.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white text-slate-400 rounded-full text-[10px] font-bold border border-slate-200 uppercase">Universal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Minat & Bakat */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Futsal */}
              <div className="group bg-white rounded-[3rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all">
                <div className="pb-2">
                  <h4 className="text-xl font-black text-slate-900 mb-2">FUTSAL</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">Melatih teknik dasar, kerja sama tim, dan sportivitas di lapangan.</p>
                  <div className="w-full h-px bg-slate-100 mb-6"></div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-blue-600">
                    <span>Coach Profesional</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Menggambar */}
              <div className="group bg-white rounded-[3rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all">
                <div className="pb-2">
                  <h4 className="text-xl font-black text-slate-900 mb-2">MENGGAMBAR</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">Mengekspresikan imajinasi melalui kuas dan warna di atas kanvas.</p>
                  <div className="w-full h-px bg-slate-100 mb-6"></div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-emerald-600">
                    <span>Kreativitas</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Basket */}
              <div className="group bg-white rounded-[3rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all">
                <div className="pb-2">
                  <h4 className="text-xl font-black text-slate-900 mb-2">BASKET</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">Belajar teknik fundamental bola basket yang melatih ketangkasan dan kekompakan.</p>
                  <div className="w-full h-px bg-slate-100 mb-6"></div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-purple-600">
                    <span>Tim Solid</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Badminton */}
              <div className="group bg-white rounded-[3rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all">
                <div className="pb-2">
                  <h4 className="text-xl font-black text-slate-900 mb-2">BADMINTON</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">Mengembangkan ketangkasan dan koordinasi mata-tangan siswa.</p>
                  <div className="w-full h-px bg-slate-100 mb-6"></div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-red-600">
                    <span>Olahraga</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Public Speaking */}
              <div className="group bg-white rounded-[3rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all">
                <div className="pb-2">
                  <h4 className="text-xl font-black text-slate-900 mb-2">PUBLIC SPEAKING</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">Melatih seni berbicara di depan umum untuk menumbuhkan rasa percaya diri.</p>
                  <div className="w-full h-px bg-slate-100 mb-6"></div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-cyan-600">
                    <span>Eksplorasi</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `
      }} />
    </>
  );
}