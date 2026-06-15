"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SmpFasilitas() {
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
    { url: '/unit/smp', label: 'Metode Belajar', icon: 'fa-book-open' },      
    { url: '/unit/smp/fasilitas', label: 'Fasilitas', icon: 'fa-school' },
    { url: '/unit/smp/ekstrakurikuler', label: 'Ekstrakurikuler', icon: 'fa-users' },
    { url: '/unit/smp/pendaftaran', label: 'Pendaftaran', icon: 'fa-edit' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <audio ref={audioRef} loop>
        <source src="/audio/audio_SMP.mpeg" type="audio/mpeg" />
      </audio>

      {/* HERO SECTION (Sama dengan Base) */}
      <div className="relative bg-slate-900 pt-28 pb-24 md:pt-40 md:pb-44 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#3b82f6 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }}></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-500/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Section: Content */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-2xl mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">SMP Infrastructures</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                <span className="block mb-2">Fasilitas</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 uppercase">
                  Terbaik SMP
                </span>
              </h1>

              <p className="mt-6 text-slate-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium mb-16">
                Menyediakan ekosistem pembelajaran digital yang dinamis dan modern untuk mendukung transisi siswa SMP menuju masa depan yang cerdas teknologi.
              </p>
            </div>

            {/* Right Section: Card Image */}
            <div className="hidden lg:block w-1/3 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-[80px] rounded-full animate-pulse duration-4000"></div>
              <div className="relative bg-slate-900/40 border border-white/10 p-5 rounded-[2.5rem] backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-700 ease-out group/card">
                <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-slate-800 flex items-center justify-center shadow-inner">
                  <img src="/images/murid - smp.jpeg" alt="Fasilitas SMP" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md border border-slate-100 py-2.5 px-4 rounded-2xl shadow-xl shadow-slate-900/10 group-hover/card:-translate-y-1 transition-all duration-500 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                  <span className="text-[10px] font-black tracking-wider text-slate-800 uppercase">Modern Infra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Floating Menu Panel */}
          <div className="relative group mt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[24px] md:rounded-[32px] blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>
            
            <div className="relative bg-slate-800/90 backdrop-blur-xl p-4 md:px-8 md:py-6 rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-4 md:hidden px-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Menu Navigasi</p>
                </div>
                <span className="text-slate-500 text-[9px] italic flex items-center gap-1 animate-pulse">Geser <i className="fas fa-arrow-right"></i></span>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-8">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/30">
                    <i className="fas fa-th-large text-lg"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest leading-none mb-1">Eksplorasi</p>
                    <p className="text-white font-bold text-base tracking-tight">Menu SMP</p>
                  </div>
                </div>

                <div className="flex flex-row overflow-x-auto md:overflow-visible items-center gap-3 md:gap-6 lg:gap-8 w-full lg:w-auto no-scrollbar pb-2 md:pb-0">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.url;
                    return (
                      <Link key={idx} href={item.url} 
                         className={`group/item flex-shrink-0 flex items-center gap-4 md:flex-col md:items-start p-3 md:p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden min-w-[145px] md:min-w-0 ${isActive ? 'bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/10' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}`}>
                          <i className={`fas ${item.icon} absolute -right-2 -bottom-2 text-3xl transition-all duration-500 ${isActive ? 'text-blue-500/40 rotate-12 scale-110' : 'text-white/5 group-hover/item:text-blue-500/20 group-hover/item:rotate-12'}`}></i>
                          <div className={`w-8 h-8 md:hidden rounded-lg flex items-center justify-center text-xs ${isActive ? 'bg-blue-500 text-slate-900' : 'bg-white/10 text-slate-400'}`}>
                              <i className={`fas ${item.icon}`}></i>
                          </div>
                          <div className="relative z-10">
                              <span className={`hidden md:block text-[9px] font-black uppercase tracking-tighter mb-1 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover/item:text-blue-400'}`}>
                                  Lihat Detail
                              </span>
                              <span className="text-white font-bold text-sm md:text-base whitespace-nowrap flex items-center gap-2">
                                  {item.label}
                                  <i className={`fas fa-chevron-right text-[10px] hidden md:block transition-all ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0'}`}></i>
                              </span>
                          </div>
                          <div className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover/item:w-full'}`}></div>
                      </Link>
                    )
                  })}
                </div>

                <div className="w-full lg:w-auto pt-2 md:pt-0">
                  <Link href="/unit/smp/pendaftaran" className="relative overflow-hidden group/btn bg-blue-500 hover:bg-blue-400 text-slate-900 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-center block w-full">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Daftar Sekarang
                        <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KONTEN BAWAH (Grid Facilities & Tour) */}
      <div className="bg-slate-50 py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Infrastruktur & Sarana</span>
                </div>
                <h2 className="text-slate-900 text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight uppercase italic">
                    Eksplorasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fasilitas Kelas</span>
                </h2>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Setiap sudut ruang dirancang secara spesifik untuk memicu rasa ingin tahu, kreativitas, dan kolaborasi nyata siswa dalam ekosistem belajar yang aman dan modern.
                </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { tag: 'Kesehatan', tag_bg: 'bg-amber-500', title: 'Ruang UKS', desc: 'Fasilitas kesehatan sekolah yang bersih dan nyaman, dilengkapi dengan peralatan medis dasar untuk penanganan pertama siswa.', img: '/images/fasilitas-sd1.jpeg', gradient: 'from-amber-950/90 via-amber-900/30 to-transparent' },
                { tag: 'Literasi', tag_bg: 'bg-emerald-600', title: 'Class', desc: 'Ruang perpustakaan yang nyaman dengan koleksi buku lengkap, area baca komunal, serta akses literasi digital bagi siswa.', img: '/images/fasilitas-sd2.jpeg', gradient: 'from-emerald-950/90 via-emerald-900/30 to-transparent' },
                { tag: 'Kreativitas', tag_bg: 'bg-purple-600', title: 'Smart Library', desc: 'Ruang ekspresi seni dan musik yang dilengkapi dengan berbagai instrumen keyboard modern untuk mengasah bakat musikal siswa.', img: '/images/fasilitas-sd3.jpeg', gradient: 'from-purple-950/90 via-purple-900/30 to-transparent' },
                { tag: 'Teknologi', tag_bg: 'bg-blue-600', title: 'Music Room', desc: 'Ruang kelas futuristik yang mendukung metode Blended Learning, dilengkapi dengan papan tulis interaktif dan Smart TV digital.', img: '/images/fasilitas-sd4.jpeg', gradient: 'from-slate-950/90 via-slate-900/30 to-transparent' },
                { tag: 'Eksperimen', tag_bg: 'bg-indigo-500', title: 'Science Lab', desc: 'Laboratorium sains yang mendukung kegiatan praktikum fisika, kimia, dan biologi siswa dengan fasilitas mikroskop modern.', img: '/images/murid - smp.jpeg', gradient: 'from-blue-950/90 via-blue-900/30 to-transparent' },
              ].map((fac, idx) => (
                <div key={idx} className="flex flex-col md:flex-row rounded-[24px] md:rounded-[32px] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 md:h-[240px]">
                  <div className="relative w-full md:w-2/5 h-[200px] md:h-full overflow-hidden flex-shrink-0">
                    <img src={fac.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt={fac.title} />
                    <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${fac.gradient} opacity-30 mix-blend-multiply`}></div>
                  </div>
                  <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white">
                    <div>
                      <span className={`${fac.tag_bg} text-white px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-3 inline-block shadow-sm`}>
                        {fac.tag}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight mt-1">{fac.title}</h3>
                    <p className="text-slate-500 mt-2.5 text-xs md:text-sm leading-relaxed max-w-xl">{fac.desc}</p>
                  </div>
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