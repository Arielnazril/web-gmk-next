"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SmpKurikulum() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();

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

  const navItems = [
    { url: '/unit/smp/kurikulum', label: 'Kurikulum', icon: 'fa-book-open' },
    { url: '/unit/smp/fasilitas', label: 'Fasilitas', icon: 'fa-school' },
    { url: '/unit/smp/ekstrakurikuler', label: 'Ekstrakurikuler', icon: 'fa-users' },
    { url: '/unit/smp/pendaftaran', label: 'Pendaftaran', icon: 'fa-edit' },
  ];

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/audio_SMP.mpeg" type="audio/mpeg" />
      </audio>

      {/* HERO SECTION */}
      <div className="bg-emerald-600 pt-16 md:pt-24 pb-10 md:pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-6 animate-pulse">
            SMP Academic Program
          </span>
          
          <h1 className="w-full text-2xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase break-words">
            Eksplorasi <br className="hidden md:block" /> 
            <span className="bg-white text-emerald-600 px-4 py-1 inline-block mt-2">Kurikulum Nasional Unggulan SMP</span>
          </h1>

          <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <div className="h-[2px] w-8 md:w-12 bg-white/20"></div>
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/70 leading-none">Global Maju Khatulistiwa</p>
            <div className="h-[2px] w-8 md:w-12 bg-white/20"></div>
          </div>
        </div>
      </div>

      {/* NAVIGATION SECTION */}
      <div className="relative bg-slate-900 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[24px] md:rounded-[32px] blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>
            
            <div className="relative bg-slate-800/90 backdrop-blur-xl p-4 md:px-8 md:py-6 rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-8">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                    <i className="fas fa-th-large text-lg"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest leading-none mb-1">Eksplorasi</p>
                    <p className="text-white font-bold text-base tracking-tight">Menu SMP</p>
                  </div>
                </div>

                <div className="flex flex-row overflow-x-auto md:overflow-visible items-center gap-3 md:gap-6 lg:gap-8 w-full lg:w-auto no-scrollbar pb-2 md:pb-0">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.url;
                    return (
                      <Link key={idx} href={item.url} 
                        className={`group/item flex-shrink-0 flex items-center gap-4 md:flex-col md:items-start p-3 md:p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden min-w-[145px] md:min-w-0 ${isActive ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                        <div className="relative z-10">
                          <span className={`hidden md:block text-[9px] font-black uppercase tracking-tighter mb-1 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>Navigasi</span>
                          <span className="text-white font-bold text-sm md:text-base whitespace-nowrap">{item.label}</span>
                        </div>
                        <div className={`absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover/item:w-full'}`}></div>
                      </Link>
                    );
                  })}
                </div>

                <div className="w-full lg:w-auto">
                  <Link href="/unit/smp/pendaftaran" className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all block text-center shadow-lg shadow-emerald-500/20 hover:scale-105">
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES: 3 PILAR */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-xl mb-6 font-black group-hover:bg-emerald-600 group-hover:text-white transition-all">01</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight uppercase">Inovasi Digital</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Pengenalan dasar pemrograman, desain grafis, dan pemanfaatan AI secara etis untuk menunjang tugas akademik.</p>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl mb-6 font-black group-hover:bg-blue-600 group-hover:text-white transition-all">02</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight uppercase">Etika & Karakter</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Program penguatan nilai moral, kedisiplinan, dan integritas sebagai fondasi spiritual remaja.</p>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-xl mb-6 font-black group-hover:bg-amber-600 group-hover:text-white transition-all">03</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight uppercase">Global Talk</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Penerapan English Day dan diskusi aktif untuk membangun kepercayaan diri dalam berkomunikasi global.</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPLORATION SECTION */}
      <div className="bg-slate-50 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">Focus Level: Junior High</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">Fase Eksplorasi <br/><span className="text-emerald-500">Minat & Bakat</span></h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Kurikulum Nasional kami mendorong siswa berani mencoba berbagai disiplin ilmu melalui proyek kolaboratif, riset, dan eksperimen nyata.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0"><i className="fas fa-microscope text-xs"></i></div>
                  <span className="font-bold text-slate-800 text-sm">Science Inquiry</span>
                </div>
                <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0"><i className="fas fa-users text-xs"></i></div>
                  <span className="font-bold text-slate-800 text-sm">Leadership Project</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-emerald-600 h-64 rounded-[2.5rem] flex items-center justify-center p-8 text-white shadow-xl shadow-emerald-500/20">
                  <p className="text-center font-bold italic leading-relaxed text-sm">"Menemukan panggilan hidup sejak dini."</p>
                </div>
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=500" className="w-full h-48 object-cover rounded-[2.5rem] shadow-lg" alt="SMP Learning" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500" className="w-full h-48 object-cover rounded-[2.5rem] shadow-lg" alt="Collaboration" />
                <div className="bg-slate-900 h-64 rounded-[2.5rem] p-8 flex flex-col justify-end border border-white/10">
                  <h4 className="text-4xl font-black text-emerald-500">12+</h4>
                  <p className="text-white font-bold text-xs uppercase tracking-widest mt-2">Ekstrakurikuler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF DOCUMENT CARD */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-slate-900 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-20 h-20 bg-emerald-500 text-slate-900 rounded-3xl flex items-center justify-center text-3xl shadow-xl shadow-emerald-500/20">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Dokumen Kurikulum</h3>
                  <p className="text-slate-400 text-sm mt-1">Unduh detail pendaftaran dan panduan akademik SMP.</p>
                </div>
              </div>
              <a href="/pdf/form-smp.pdf" target="_blank" className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                Lihat Dokumen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-emerald-600 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight uppercase">Siap Menjadi Bagian Dari <br/>Global Maju Khatulistiwa?</h2>
          <Link href="/unit/smp/pendaftaran" className="inline-block px-12 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform shadow-2xl">
            Konsultasi Pendaftaran SMP
          </Link>
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