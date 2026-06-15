"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SmpOverviewPage() {
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

      {/* Section 1: Hero Banner */}
      <div className="relative bg-slate-900 pt-28 pb-24 md:pt-40 md:pb-44 overflow-hidden">
        {/* Blue Blueprint Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#3b82f6 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }}></div>
        
        {/* Dynamic Blue Glow Effects */}
        <div className="absolute -top-24 -right-24 w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-500/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
              
            {/* Left Section: Content */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              {/* Live Indicator Badge */}
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-2xl mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Excellence in Secondary Education</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                <span className="block mb-2">Selamat Datang di</span>
                <span className="relative inline-block">
                  SMP GLOBAL MAJU
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/30 -z-10 transform -rotate-1"></div>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 uppercase">
                  Khatulistiwa
                </span>
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-16">
                <Link href="/unit/smp/ekstrakurikuler" className="group relative px-8 py-4 bg-blue-600 rounded-2xl overflow-hidden transition-all shadow-2xl shadow-blue-900/40 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative text-white font-black uppercase tracking-widest text-sm flex items-center gap-2">
                    Program Unggulan
                    <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </Link>
                
                <div className="flex items-center gap-4 px-6 border-l border-white/10 hidden md:flex">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold italic">GM</div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-500 flex items-center justify-center text-[10px] text-slate-900 font-bold italic">21</div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
                    Global Ready<br />Curriculum
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Interactive Card Display */}
            <div className="hidden lg:block w-1/3 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-[80px] rounded-full animate-pulse duration-4000"></div>
              
              <div className="relative bg-slate-900/40 border border-white/10 p-5 rounded-[2.5rem] backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-700 ease-out group/card">
                <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-slate-800 flex items-center justify-center shadow-inner">
                  <img src="/images/smp.jpeg" alt="SMP Global Maju" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md border border-slate-100 py-2.5 px-4 rounded-2xl shadow-xl shadow-slate-900/10 group-hover/card:-translate-y-1 transition-all duration-500 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                  <span className="text-[10px] font-black tracking-wider text-slate-800 uppercase">Kurikulum Nasional</span>
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
                    // Logic aktif: Menyala jika pathname persis sama dengan url
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

      {/* Section 2: Profil Karakter Lulusan */}
      <div className="bg-slate-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Graduate Profile
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                Profil Karakter <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Lulusan </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
                Membentuk generasi masa depan yang siap memimpin, berinovasi, dan membawa dampak positif bagi masyarakat global.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">1. Tangguh & Resilien</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Mampu menghadapi tekanan, kegagalan, dan ketidakpastian dengan sikap tenang, positif, dan produktif.</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">2. Cerdas Peluang</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Terlatih membaca tren, mengamati kebutuhan masyarakat, dan mengidentifikasi celah nilai sejak dini.</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-chess"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">3. Pemikir Strategis</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Mampu menyusun rencana jangka panjang dan mengeksekusi keputusan dengan pertimbangan matang.</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">4. Komunikatif</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Menguasai seni berbicara dan mendengar. Mampu mempresentasikan ide dengan meyakinkan.</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">5. Karakter Adaptif</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Fleksibel dalam menghadapi perubahan, terampil dalam belajar hal baru, dan tidak terjebak zona nyaman.</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-user-check"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">6. Berintegritas</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Menghargai komitmen, menjunjung tinggi kejujuran, dan berani menanggung konsekuensi keputusan.</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">7. Sehat Holistik</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Menjaga keseimbangan fisik, mental, dan emosional sebagai pondasi produktivitas belajar.</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-500 group relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors">8. Berdampak Sosial</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Memiliki kepedulian sosial tinggi untuk menciptakan perubahan positif bagi lingkungan.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section 3: Bottom Call to Action */}
      <div className="bg-white pb-20 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[32px] md:rounded-[48px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-black text-white mb-6 uppercase tracking-wider leading-tight">Mulai Perjalanan Global Anda</h2>
            <p className="text-blue-100 mb-8 md:mb-12 font-medium text-base md:text-lg max-w-xl mx-auto">Kami mengundang putra-putri terbaik untuk bergabung dalam komunitas belajar yang beragam dan penuh prestasi.</p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="https://wa.me/6289694224226" target="_blank" className="inline-flex flex-col items-center justify-center bg-white text-blue-700 px-6 md:px-10 py-4 rounded-2xl md:rounded-3xl hover:bg-blue-50 transition-all shadow-xl active:scale-95 group">
                <span className="text-[10px] font-black uppercase tracking-tighter opacity-60 mb-1">Unit SMP</span>
                <div className="flex items-center gap-3">
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span className="font-black uppercase tracking-widest text-xs">Hubungi Admin</span>
                </div>
              </a>
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
    </div>
  );
}