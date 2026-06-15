"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TkOverviewPage() {
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

  const philosophies = [
    { icon: "fa-hand-holding-heart", title: "Learn by Doing", bgLight: "bg-emerald-50", textMain: "text-emerald-500", bgMain: "bg-emerald-500", hoverBgMain: "group-hover:bg-emerald-500", desc: "Peserta didik belajar melalui pengalaman nyata, proyek konkret, dan simulasi kehidupan nyata yang relevan dengan konteks mereka." },
    { icon: "fa-wine-glass-empty", title: "Grow by Falling", bgLight: "bg-blue-50", textMain: "text-blue-500", bgMain: "bg-blue-500", hoverBgMain: "group-hover:bg-blue-500", desc: "Kegagalan dipandang sebagai guru terbaik. Anak-anak diajarkan untuk bangkit, berefleksi, dan mencoba kembali dengan strategi yang lebih matang." },
    { icon: "fa-hands-praying", title: "Lead by Example", bgLight: "bg-amber-50", textMain: "text-amber-500", bgMain: "bg-amber-500", hoverBgMain: "group-hover:bg-amber-500", desc: "Pendidik bukan sekadar pengajar, melainkan model nyata dari karakter entrepreneur yang ingin kami bangun pada peserta didik." },
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
      <div className="relative bg-[#FFFF00] border-y border-black/10 z-40 shadow-md transition-all duration-300 overflow-x-auto no-scrollbar">
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

      {/* Main Introduction Section */}
      <div className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50 md:-skew-x-12 md:translate-x-20 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4">Learning Focus</span>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                  Belajar Sambil Bermain <span className="text-yellow-500 underline decoration-yellow-200"> Bermain Sambil Berkarya </span><br className="hidden md:block" />
                </h2>
              </div>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Di <strong className="text-slate-900">Global Maju</strong>, kami menerapkan Kurikulum Nasional yang dipadukan dengan kurikulum unggulan Sekolah Global Maju Khatulistiwa yaitu Entrepreneurship (Kewirausahaan)
              </p>
              <div className="flex flex-row justify-center lg:justify-start gap-2 md:gap-4 pt-4">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-white shadow-xl shadow-slate-100 rounded-2xl border border-slate-50">
                  <i className="fas fa-check-circle text-emerald-500 text-base md:text-xl"></i>
                  <span className="font-bold text-slate-700 text-[10px] md:text-sm tracking-tight uppercase">Kurikulum Nasional</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center mt-10 lg:mt-0">
              <div className="relative w-full max-w-xs md:max-w-lg group">
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-[40px] md:rounded-[60px] rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="relative bg-white p-3 md:p-4 rounded-[35px] md:rounded-[50px] shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-slate-50">
                  <div className="rounded-[30px] md:rounded-[40px] aspect-[4/3] overflow-hidden relative border-2 md:border-4 border-yellow-100">
                    <img src="/images/kurikulum1.PNG" alt="Kurikulum Global Maju" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 md:pb-8">
                      <p className="font-black text-white text-[10px] md:text-[12px] uppercase tracking-[0.3em]">Active & Joyful Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Unggulan */}
      <div className="bg-white py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
                <div className="animate-floating-slow group relative overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-emerald-200/40">
                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg"><i className="fas fa-store text-lg"></i></div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">Mini Market<br/>Kecilku</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Simulasi jual-beli yang melatih komunikasi dan dasar berhitung.</p>
                  </div>
                </div>
                <div className="animate-floating group relative mt-0 lg:mt-8 overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-blue-200/40">
                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg"><i className="fas fa-paint-brush text-lg"></i></div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">Tangan<br/>Kreatif</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Kreasi produk dari bahan sederhana untuk membangun imajinasi.</p>
                  </div>
                </div>
                <div className="animate-floating-fast group relative overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-amber-200/40">
                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg"><i className="fas fa-star text-lg"></i></div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">Tokoh<br/>Inspiratif</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Mengenal sosok entrepreneur muda sebagai teladan nyata.</p>
                  </div>
                </div>
                <div className="animate-floating-slow group relative overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-indigo-200/40">
                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-lg"><i className="fas fa-flag text-lg"></i></div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">Puncak<br/>Tema</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Kegiatan ekspresi diri untuk meningkatkan kemampuan menyimak.</p>
                  </div>
                </div>
                <div className="animate-floating group relative mt-0 lg:mt-8 overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-lime-200/40">
                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-500 text-white shadow-lg"><i className="fas fa-seedling text-lg"></i></div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">Kebun<br/>Sekolah</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Menanamkan nilai tanggung jawab melalui aktivitas berkebun.</p>
                  </div>
                </div>
                <div className="animate-floating-fast group relative overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-orange-200/40">
                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg"><i className="fas fa-utensils text-lg"></i></div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">Cooking<br/>Class</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Belajar mandiri dan keamanan alat dapur melalui memasak.</p>
                  </div>
                </div>
                <div className="animate-floating-slow group relative overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-sky-200/40">
                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg"><i className="fas fa-swimmer text-lg"></i></div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight mb-2">Swimming<br/>Class</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Fokus bermain air untuk membangun keberanian dan keamanan.</p>
                  </div>
                </div>
                <div className="animate-floating group relative md:col-span-2 lg:col-span-2 overflow-hidden rounded-[35px] bg-white p-6 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-rose-200/40">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-rose-50 rounded-full opacity-50"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg"><i className="fas fa-campground text-lg"></i></div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight">Colourful Camp</h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-1">Meningkatkan kemandirian melalui pengalaman berkemah.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-slate-50 px-4 py-2 border border-slate-100 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Unggulan Global Maju Khatulistiwa</span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase">
                  Program <br/> <span className="text-blue-600">Unggulan</span> <br/>
                </h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Kami merancang keterampilan dasar yang sesuai dengan kodrat zaman, mempersiapkan anak-anak untuk menghadapi tantangan masa depan dengan mentalitas juara dan karakter yang kuat.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start">
                <Link href="/unit/tk/fasilitas" className="group relative inline-flex items-center gap-4 py-1 pr-6 pl-1 rounded-full bg-slate-950 text-white hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-slate-200">
                  <span className="h-10 w-10 rounded-full bg-white text-slate-950 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Eksplorasi Sekarang</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Pilar Section */}
      <div className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-500/20">
            <i className="fas fa-fingerprint text-xs"></i> Our Education DNA
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 md:mb-24 uppercase tracking-tighter leading-none">
            Filosofi <span className="text-emerald-600">Pendidikan</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {philosophies.map((item, idx) => (
              <div key={idx} className="group bg-white p-10 md:p-14 rounded-[50px] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden">
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.bgLight} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className={`w-24 h-24 ${item.bgLight} ${item.textMain} rounded-[35px] flex items-center justify-center mb-10 ${item.hoverBgMain} group-hover:text-white transition-all duration-500 shadow-inner relative z-10`}>
                  {item.icon === "fa-wine-glass-empty" ? (
                    <div className="relative transform -rotate-[35deg] group-hover:rotate-0 transition-transform duration-700">
                      <i className="fas fa-wine-glass-empty text-4xl"></i>
                      <svg className={`absolute inset-0 w-full h-full ${item.textMain} group-hover:text-white transition-colors duration-500 scale-75`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <path d="M12 4l1 3-2 2 2 3" />
                      </svg>
                    </div>
                  ) : (
                    <i className={`fas ${item.icon} text-4xl`}></i>
                  )}
                </div>

                <h4 className="font-black text-slate-900 text-2xl md:text-3xl mb-6 uppercase tracking-tight relative z-10">{item.title}</h4>
                <div className={`w-12 h-1.5 ${item.bgMain} rounded-full mb-8 opacity-20 group-hover:w-28 group-hover:opacity-100 transition-all duration-500`}></div>
                <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium relative z-10">{item.desc}</p>
                <div className={`absolute bottom-0 left-0 w-full h-1.5 ${item.bgMain} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulir Unduhan */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-black rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl"></div>
              
              <div className="text-center md:text-left relative z-10">
                <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Registration Files</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
                  Formulir Unit <br/> <span className="text-yellow-500">PAUD (KB & TK)</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm">Silakan unduh formulir pendaftaran resmi untuk melengkapi berkas administrasi calon siswa.</p>
              </div>

              <div className="relative z-10 w-full md:w-auto">
                <a href="/pdf/form-paud&tk.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group/btn">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-[2rem] flex items-center justify-center mb-4 shadow-2xl group-hover/btn:scale-110 group-hover/btn:rotate-6 transition-all duration-500">
                    <i className="fas fa-file-pdf text-[#FFFF00] text-3xl md:text-4xl"></i>
                  </div>
                  <div className="bg-black text-white px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-xl group-hover/btn:bg-yellow-400 group-hover/btn:text-black transition-colors">
                    Lihat PDF
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          @keyframes floating { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .animate-floating { animation: floating 6s ease-in-out infinite; }
          .animate-floating-slow { animation: floating 8s ease-in-out infinite; animation-delay: 1s; }
          .animate-floating-fast { animation: floating 5s ease-in-out infinite; animation-delay: 2s; }
          .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        `
      }} />
    </div>
  );
}