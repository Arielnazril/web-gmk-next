"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TkFasilitas() {
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

  const fasilitasData = [
    { icon: "fa-shapes", title: "Ruang Serba Guna", bgLight: "bg-rose-50", textMain: "text-rose-500", hoverBgMain: "group-hover:bg-rose-500", desc: "Area bermain dalam ruangan yang aman, nyaman, dan ber-AC untuk eksplorasi anak." },
    { icon: "fa-child", title: "Ruang Bermain Outdoor", bgLight: "bg-emerald-50", textMain: "text-emerald-500", hoverBgMain: "group-hover:bg-emerald-500", desc: "Area bermain luar ruangan yang luas untuk melatih motorik kasar dan ketangkasan." },
    { icon: "fa-swimming-pool", title: "Kolam Renang", bgLight: "bg-blue-50", textMain: "text-blue-500", hoverBgMain: "group-hover:bg-blue-500", desc: "Fasilitas kolam renang khusus anak dengan pengawasan instruktur berpengalaman." },
    { icon: "fa-shopping-cart", title: "Minimarket", bgLight: "bg-purple-50", textMain: "text-purple-500", hoverBgMain: "group-hover:bg-purple-500", desc: "Laboratorium simulasi jual-beli untuk melatih kemandirian dan numerasi dasar." },
    { icon: "fa-book-reader", title: "Perpustakaan", bgLight: "bg-pink-50", textMain: "text-pink-500", hoverBgMain: "group-hover:bg-pink-500", desc: "Koleksi buku cerita edukatif untuk menumbuhkan minat baca dan literasi sejak dini." },
    { icon: "fa-heartbeat", title: "UKS", bgLight: "bg-yellow-50", textMain: "text-yellow-500", hoverBgMain: "group-hover:bg-yellow-500", desc: "Ruang kesehatan sekolah untuk penanganan medis pertama yang bersih dan nyaman." },
    { icon: "fa-restroom", title: "Toilet Bersih", bgLight: "bg-indigo-50", textMain: "text-indigo-500", hoverBgMain: "group-hover:bg-indigo-500", desc: "Fasilitas saniter higienis yang dirancang khusus agar mudah digunakan anak-anak." },
    { icon: "fa-hands-wash", title: "Tempat Cuci Tangan", bgLight: "bg-cyan-50", textMain: "text-cyan-500", hoverBgMain: "group-hover:bg-cyan-500", desc: "Wastafel di area strategis untuk membiasakan pola hidup bersih dan sehat (PHBS)." },
    { icon: "fa-landmark", title: "Gazebo", bgLight: "bg-teal-50", textMain: "text-teal-500", hoverBgMain: "group-hover:bg-teal-500", desc: "Area terbuka yang nyaman untuk kegiatan belajar santai dan interaksi sosial di luar kelas." },
    { icon: "fa-leaf", title: "Halaman Rumput", bgLight: "bg-lime-50", textMain: "text-lime-500", hoverBgMain: "group-hover:bg-lime-500", desc: "Area terbuka hijau yang asri untuk aktivitas fisik, upacara, dan eksplorasi alam bagi anak." },
  ];

  const galleries = [
    { img: "fasilitas-sd5.jpeg", title: "Interactive Flat Panel", label: "Learning Space" },
    { img: "fasilitas-tk2.jpeg", title: "Ruang Kelas Nyaman", label: "Playground" },
    { img: "fasilitas-tk3.jpeg", title: "Fasilitas Kreativitas", label: "Creative Hub" },
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

      <div className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50 md:-skew-x-12 md:translate-x-20 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4">Safe & Fun Environment</span>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                  Lingkungan <span className="text-yellow-500 underline decoration-yellow-200">Nyaman</span>,<br className="hidden md:block"/> Bermain Aman.
                </h2>
              </div>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Kami menyediakan sarana prasarana yang dirancang khusus untuk mendukung keamanan dan kreativitas anak dalam mengeksplorasi minat bakat mereka secara optimal.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4">
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 bg-white shadow-xl shadow-slate-100 rounded-2xl border border-slate-50 hover:border-yellow-400 transition-colors duration-300">
                  <i className="fas fa-shield-alt text-emerald-500 text-lg md:text-xl"></i>
                  <span className="font-bold text-slate-700 text-xs md:text-sm tracking-tight">CCTV Monitoring</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 bg-white shadow-xl shadow-slate-100 rounded-2xl border border-slate-50 hover:border-yellow-400 transition-colors duration-300">
                  <i className="fas fa-leaf text-blue-500 text-lg md:text-xl"></i>
                  <span className="font-bold text-slate-700 text-xs md:text-sm tracking-tight">Eco-Friendly</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center mt-10 lg:mt-0 w-full">
              <div className="relative w-full max-w-md md:max-w-5xl group">
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-[40px] md:rounded-[60px] rotate-1 transition-transform group-hover:rotate-2 duration-500"></div>
                <div className="relative bg-white p-4 md:p-6 rounded-[35px] md:rounded-[50px] shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    
                    {/* GAMBAR 1 */}
                    <div className="overflow-hidden rounded-[24px] md:rounded-[36px] aspect-[4/3] md:aspect-auto md:h-[420px] md:row-span-2 relative shadow-md">
                      <img src="/images/kurikulum1.PNG" alt="Visual Fasilitas" className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                        <div className="inline-block bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md">
                          <p className="font-black text-slate-800 text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Premium Infrastructure</p>
                        </div>
                      </div>
                    </div>

                    {/* GAMBAR 2 */}
                    <div className="overflow-hidden rounded-[24px] md:rounded-[32px] aspect-[4/3] md:h-[200px] relative shadow-md">
                      <img src="/images/lab_tk.jpeg" alt="Laboratorium TK" className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                        <div className="inline-block bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md">
                          <p className="font-black text-slate-800 text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Laboratorium TK</p>
                        </div>
                      </div>
                    </div>

                    {/* GAMBAR 3 */}
                    <div className="overflow-hidden rounded-[24px] md:rounded-[32px] aspect-[4/3] md:h-[200px] relative shadow-md">
                      <img src="/images/pentas_seni.jpeg" alt="Pentas Seni" className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                        <div className="inline-block bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md">
                          <p className="font-black text-slate-800 text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Pentas Seni</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Showcase Galeri */}
      <div className="bg-white pb-24 md:pb-32 relative">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
          <svg width="400" height="400" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="black" strokeWidth="1" fill="none" strokeDasharray="5 5"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs">Visual Tour</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">Eksplorasi Ruang Belajar</h2>
            <div className="w-20 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {galleries.map((g, index) => (
              <div key={index} className="group relative rounded-[45px] p-6 bg-white border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_30px_80px_-15px_rgba(255,193,7,0.2)] hover:-translate-y-4 hover:border-yellow-100">
                <div className="relative aspect-[4/5] rounded-[35px] overflow-hidden mb-6 shadow-inner">
                  <img src={`/images/${g.img}`} alt={g.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2 brightness-100 group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-3">
                  <span className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-3 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    {g.label}
                  </span>
                  <h4 className="text-slate-950 text-2xl font-black uppercase tracking-tight group-hover:text-yellow-600 transition-colors">{g.title}</h4>
                </div>
                <div className="absolute inset-4 border border-yellow-300/30 rounded-[40px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-95 group-hover:scale-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sarana & Prasarana (Grid Ikon) */}
      <div className="bg-slate-50 py-20 md:py-32 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Sarana & Prasarana</h3>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {fasilitasData.map((item, idx) => (
              <div key={idx} className="group bg-white p-8 md:p-12 rounded-[40px] md:rounded-[55px] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-yellow-200 transition-all duration-500 flex flex-col items-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${item.bgLight} ${item.textMain} rounded-3xl flex items-center justify-center mb-6 md:mb-8 ${item.hoverBgMain} group-hover:text-white transition-all duration-500 shadow-sm`}>
                  <i className={`fas ${item.icon} text-xl md:text-3xl`}></i>
                </div>
                <h4 className="font-black text-slate-800 text-sm md:text-xl mb-2 uppercase tracking-tight text-center">{item.title}</h4>
                <p className="text-slate-500 text-[9px] md:text-[11px] font-bold leading-relaxed uppercase tracking-widest text-center">{item.desc}</p>
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