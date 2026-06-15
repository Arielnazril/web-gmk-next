"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function SdFasilitas() {
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
              <Link href="/unit/sd/fasilitas" className="text-rose-900 border-b-[2px] md:border-b-[3px] border-rose-900 pb-1 transition-all">Fasilitas</Link>
              <Link href="/unit/sd/ekstrakurikuler" className="text-slate-400 hover:text-rose-900 pb-1 transition-all">Ekstrakurikuler</Link>
              <Link href="/unit/sd/pendaftaran" className="text-slate-400 hover:text-rose-900 pb-1 transition-all hidden sm:inline">Pendaftaran</Link>
            </div>
            <Link href="/unit/sd/pendaftaran" className="bg-rose-900 text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-rose-100 whitespace-nowrap">
              Daftar
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#7A122E]">
        {/* Hero & Header Section Fasilitas */}
        <div className="relative py-24 overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6 animate-pulse">
                School Infrastructure
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6 leading-none">
                Eksplorasi <span className="text-yellow-400 underline decoration-yellow-400/30">Sarana</span> Terbaik
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed">
                Kami mendesain setiap sudut sekolah untuk menumbuhkan rasa ingin tahu, menjaga kesehatan, dan mengasah kreativitas tanpa batas bagi setiap siswa SD Global Maju.
              </p>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full blur-[120px]"></div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="text-center border-r border-white/10">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">Ruang Ber-AC</div>
            </div>
            <div className="text-center md:border-r border-white/10">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">24/7</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">Keamanan CCTV</div>
            </div>
            <div className="text-center border-r border-white/10">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">Fiber</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">High Speed WiFi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">Modern</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">Science Labs</div>
            </div>
          </div>
        </div>

        {/* Bento Grid System */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            
            {/* Gambar 1: Ruang Kesehatan */}
            <div className="md:col-span-4 group relative bg-white/5 rounded-[3.5rem] overflow-hidden border border-white/10 min-h-[420px] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-2">
              <img src="/images/fasilitas-sd1.jpeg" alt="Ruang Kesehatan" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-95 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white z-10">
                <div className="w-14 h-14 bg-yellow-400 text-black rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-transform group-hover:rotate-6">
                  <i className="fas fa-hand-holding-medical text-xl"></i>
                </div>
                <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-wide">RUANG KESEHATAN & UKS</h3>
                <p className="text-white/80 max-w-xl font-medium md:text-base text-sm leading-relaxed">Kenyamanan fisik siswa adalah prioritas. Kami menyediakan ruang istirahat yang bersih dan standar medis dasar yang lengkap.</p>
              </div>
            </div>

            {/* Gambar 2: Perpustakaan */}
            <div className="md:col-span-2 group relative bg-white/5 rounded-[3.5rem] overflow-hidden border border-white/10 min-h-[420px] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-2">
              <img src="/images/fasilitas-sd2.jpeg" alt="Perpustakaan" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-95 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-yellow-400">
                  <i className="fas fa-book-reader text-lg"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight">LITERASI UNGGUL</h3>
                <p className="text-sm font-medium text-white/80 leading-relaxed">Koleksi buku cerita dan ensiklopedia lengkap untuk memicu kreativitas serta wawasan global siswa.</p>
              </div>
            </div>

            {/* Gambar 3: Lab Komputer */}
            <div className="md:col-span-2 group relative bg-white/5 rounded-[3.5rem] overflow-hidden border border-white/10 min-h-[380px] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-2">
              <img src="/images/fasilitas-sd3.jpeg" alt="Lab Komputer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-95 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-yellow-400">
                  <i className="fas fa-laptop text-lg"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tight">CLASS CENTER</h3>
                <p className="text-sm font-medium text-white/80 leading-relaxed">Pengenalan dunia teknologi dan digital sejak dini dengan fasilitas komputer terintegrasi.</p>
              </div>
            </div>

            {/* Gambar 4: Area Musik */}
            <div className="md:col-span-4 group relative bg-white/5 rounded-[3.5rem] overflow-hidden border border-white/10 min-h-[380px] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-2">
              <img src="/images/fasilitas-sd4.jpeg" alt="Ruang Musik" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-95 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white flex justify-between items-end w-full z-10">
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-wide">STUDIO MUSIK</h3>
                  <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">Dilengkapi keyboard dan instrumen seni untuk mengasah kecerdasan musikal dan kepercayaan diri siswa di depan publik.</p>
                </div>
                <div className="hidden md:flex w-16 h-16 bg-yellow-400 rounded-full items-center justify-center text-black shadow-lg transition-transform group-hover:scale-110">
                  <i className="fas fa-music text-xl"></i>
                </div>
              </div>
            </div>

            {/* Gambar 5: Smart Board */}
            <div className="md:col-span-6 group relative bg-white/5 rounded-[3.5rem] overflow-hidden border border-white/10 min-h-[450px] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative overflow-hidden min-h-[250px] md:min-h-full">
                  <img src="/images/fasilitas-sd5.jpeg" alt="Smart Board" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center bg-white/10 backdrop-blur-md border-t md:border-t-0 md:border-l border-white/10 text-white">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-2xl flex items-center justify-center mb-8 shadow-md">
                    <i className="fas fa-chalkboard text-2xl"></i>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">IFP CLASS </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium mb-8">
                    Setiap kelas didukung teknologi visual layar lebar dan papan interaktif, memungkinkan visualisasi materi pelajaran menjadi lebih nyata, interaktif, dan menyenangkan bagi anak-anak.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-400">Multimedia</span>
                    <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-400">Visual Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gambar 6: Kolam Renang */}
            <div className="md:col-span-6 group relative bg-white/5 rounded-[3.5rem] overflow-hidden border border-white/10 min-h-[450px] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative overflow-hidden min-h-[250px] md:min-h-full">
                  <img src="/images/berenang_sd.PNG" alt="Kolam Renang" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center bg-white/10 backdrop-blur-md border-t md:border-t-0 md:border-l border-white/10 text-white">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-2xl flex items-center justify-center mb-8 shadow-md">
                    <i className="fas fa-swimming-pool text-2xl"></i>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">KOLAM RENANG</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium mb-8">
                    Fasilitas kolam renang khusus yang dirancang aman untuk anak-anak, berfungsi melatih motorik kasar, keberanian, serta kebugaran fisik dengan pengawasan penuh dari instruktur berpengalaman.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-400">Sports & Fun</span>
                    <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-400">Motoric Skills</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gambar 7: Laboratorium */}
            <div className="md:col-span-6 group relative bg-rose-950 rounded-[3.5rem] overflow-hidden border border-white/5 min-h-[450px] shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative overflow-hidden min-h-[250px] md:min-h-full">
                  <img src="/images/lab_sd.PNG" alt="Laboratorium" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 group-hover:brightness-100" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center bg-rose-950 border-t md:border-t-0 md:border-l border-white/5 text-white">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-yellow-400/10">
                    <i className="fas fa-laptop text-2xl"></i>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-white">Laboratorium</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium mb-8">
                    Fasilitas laboratorium komputer modern yang dirancang untuk mengenalkan teknologi digital sejak dini, melatih kemampuan literasi digital, serta mendukung pembelajaran berbasis multimedia secara interaktif.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-400 shadow-sm">Digital Literacy</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-400 shadow-sm">Tech & Skills</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Layanan Pendukung */}
        <div className="bg-black/10 py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                <div className="shrink-0 w-14 h-14 bg-yellow-400 shadow-lg rounded-2xl flex items-center justify-center text-black text-2xl">
                  <i className="fas fa-utensils"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Kantin Sehat</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">Penyediaan menu bergizi seimbang higienis yang dipantau ketat untuk mendukung tumbuh kembang anak.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                <div className="shrink-0 w-14 h-14 bg-yellow-400 shadow-lg rounded-2xl flex items-center justify-center text-black text-2xl">
                  <i className="fas fa-book-reader"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Pojok Baca & Relaksasi</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">Area santai yang estetis untuk meningkatkan minat baca literasi dan pembentukan karakter positif.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                <div className="shrink-0 w-14 h-14 bg-yellow-400 shadow-lg rounded-2xl flex items-center justify-center text-black text-2xl">
                  <i className="fas fa-bus"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Layanan Antar-Jemput</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">Armada khusus sekolah yang aman, nyaman, dan terpantau demi kemudahan transportasi buah hati Anda.</p>
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