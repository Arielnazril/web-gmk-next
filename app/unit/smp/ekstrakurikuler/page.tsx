"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SmpEkskul() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();
  
  // State untuk Filter Kategori
  const [activeFilter, setActiveFilter] = useState("all");

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

  // ==========================================
  // DATABASE EKSKUL & PROGRAM UNGGULAN
  // ==========================================
  const ekskulReguler = [
    { id: 1, cat: 'sport', title: 'Surviving Skills', badge: 'Olahraga', subBadge: 'Outdoor & Life Skills', img: '/images/surviving_smp.jpeg', icon: 'fa-compass', desc: 'Mempelajari teknik navigasi darat, membaca alam, pertolongan pertama, dan keterampilan bertahan hidup di situasi darurat.', bg: 'bg-emerald-500', bgLight: 'bg-emerald-50', text: 'text-emerald-600', gradient: 'from-emerald-900/80' },
    { id: 2, cat: 'sport', title: 'Basket', badge: 'Olahraga', subBadge: 'Team Performance', img: '/images/basket_smp.PNG', icon: 'fa-basketball-ball', desc: 'Melatih disiplin, kerjasama tim, dan ketangkasan fisik di lapangan indoor berstandar nasional.', bg: 'bg-indigo-500', bgLight: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-indigo-900/80' },
    { id: 3, cat: 'art', title: 'Seni Musik', badge: 'Seni Budaya', subBadge: 'Artistic Expression', img: '/images/gitar_smp.jpeg', icon: 'fa-music', desc: 'Eksplorasi harmoni melalui alat musik modern dan tradisional dalam studio musik kedap suara.', bg: 'bg-amber-500', bgLight: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-900/80' },
    { id: 4, cat: 'sport', title: 'Pramuka', badge: 'Kegiatan', subBadge: 'Character Building', img: '/images/pramuka_smp.PNG', icon: 'fa-campground', desc: 'Membentuk karakter tangguh, kedisiplinan, kepemimpinan, serta tali-temali dan berkemah di alam terbuka.', bg: 'bg-indigo-500', bgLight: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-slate-900/80' },
    { id: 5, cat: 'art', title: 'Dancing Club', badge: 'Seni Budaya', subBadge: 'Artistic Expression', img: '/images/dancing.png', icon: 'fa-music', desc: 'Meningkatkan kemampuan menari serta kreativitas dalam mengekspresikan diri melalui seni gerak ritmis yang indah.', bg: 'bg-amber-500', bgLight: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-900/80' }
  ];

  const programUnggulan = [
    { id: 1, cat: 'tech', title: 'Entrepreneurship', badge: 'Sains & Tech', subBadge: 'Business & Leadership', img: '/images/enterpreneur_smp.PNG', icon: 'fa-lightbulb', desc: 'Menumbuhkan jiwa wirausaha muda melalui simulasi bisnis, perencanaan keuangan kreatif, dan pameran karya mandiri.', bg: 'bg-blue-500', bgLight: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-900/80' },
    { id: 2, cat: 'art', title: 'Art Performance', badge: 'Arts & Culture', subBadge: 'Creativity & Expression', img: '/images/art_performance_smp.PNG', icon: 'fa-theater-masks', desc: 'Wadah ekspresi kreativitas siswa untuk mengembangkan bakat di bidang seni, dan tampil percaya diri di panggung.', bg: 'bg-blue-500', bgLight: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-900/80' },
    { id: 3, cat: 'sport', title: 'Aerobik', badge: 'Olahraga', subBadge: 'Healthy Lifestyle', img: '/images/aerobik.jpeg', icon: 'fa-heartbeat', desc: 'Meningkatkan kebugaran fisik, kelenturan tubuh, dan koordinasi motorik lewat gerakan ritmik yang dinamis.', bg: 'bg-indigo-500', bgLight: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-indigo-900/80' },
    { id: 4, cat: 'art', title: 'Cooking Class', badge: 'Seni Budaya', subBadge: 'Culinary Arts', img: '/images/cooking_smp.jpeg', icon: 'fa-utensils', desc: 'Eksplorasi seni kuliner nusantara dan internasional, mempelajari higienitas pangan, tata boga, dan penyajian.', bg: 'bg-amber-500', bgLight: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-900/80' },
    { id: 5, cat: 'tech', title: 'Bahasa Korea', badge: 'Sains & Tech', subBadge: 'Global Language', img: 'https://images.unsplash.com/photo-1538681105587-85640961bf8b?q=80&w=1974', icon: 'fa-globe-asia', desc: 'Menguasai tata bahasa, huruf Hangeul, percakapan harian, serta pengenalan budaya pop dan tradisional Korea.', bg: 'bg-blue-500', bgLight: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-900/80' },
    { id: 6, cat: 'tech', title: 'Bahasa Mandarin', badge: 'Sains & Tech', subBadge: 'International Comm', img: '/images/mandarin.png', icon: 'fa-language', desc: 'Mempelajari aksara Hanzi, pelafalan Pinyin, serta keterampilan komunikasi bisnis internasional.', bg: 'bg-blue-500', bgLight: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-900/80' },
    { id: 7, cat: 'tech', title: 'Outing Class', badge: 'Sains & Tech', subBadge: 'Experiential Learning', img: '/images/outing_smp.PNG', icon: 'fa-graduation-cap', desc: 'Pembelajaran kontekstual di luar ruang kelas melalui kunjungan edukatif ke situs sejarah dan industri kreatif.', bg: 'bg-blue-500', bgLight: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-900/80' }
  ];

  // Logic Penyaringan (Filtration) Akurat
  const displayReguler = ekskulReguler.filter(item => activeFilter === 'all' || item.cat === activeFilter);
  const displayUnggulan = programUnggulan.filter(item => activeFilter === 'all' || item.cat === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen">
      <audio ref={audioRef} loop>
        <source src="/audio/audio_SMP.mpeg" type="audio/mpeg" />
      </audio>

      {/* HERO SECTION */}
      <div className="relative bg-slate-900 pt-28 pb-24 md:pt-40 md:pb-44 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#3b82f6 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }}></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-500/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-2xl mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Self Development & Creativity</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                <span className="block mb-2">Ekstrakurikuler</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 uppercase">SMP</span>
              </h1>
              <p className="mt-6 text-slate-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium mb-16">
                Temukan potensi terbaikmu melalui program ekstrakurikuler unggulan yang dirancang untuk membangun karakter, kreativitas, dan jiwa kompetitif siswa SMP Global Maju.
              </p>
            </div>

            <div className="hidden lg:block w-1/3 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-[80px] rounded-full animate-pulse duration-4000"></div>
              <div className="relative bg-slate-900/40 border border-white/10 p-5 rounded-[2.5rem] backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-700 ease-out group/card">
                <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-slate-800 flex items-center justify-center shadow-inner">
                  <img src="/images/basket_smp.PNG" alt="Ekskul SMP" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md border border-slate-100 py-2.5 px-4 rounded-2xl shadow-xl shadow-slate-900/10 group-hover/card:-translate-y-1 transition-all duration-500 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                  <span className="text-[10px] font-black tracking-wider text-slate-800 uppercase">Bakat & Minat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Floating Menu Panel */}
          <div className="relative group mt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[24px] md:rounded-[32px] blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl p-4 md:px-8 md:py-6 rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl">
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
                      <Link key={idx} href={item.url} className={`group/item flex-shrink-0 flex items-center gap-4 md:flex-col md:items-start p-3 md:p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden min-w-[145px] md:min-w-0 ${isActive ? 'bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/10' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}`}>
                          <i className={`fas ${item.icon} absolute -right-2 -bottom-2 text-3xl transition-all duration-500 ${isActive ? 'text-blue-500/40 rotate-12 scale-110' : 'text-white/5 group-hover/item:text-blue-500/20 group-hover/item:rotate-12'}`}></i>
                          <div className={`w-8 h-8 md:hidden rounded-lg flex items-center justify-center text-xs ${isActive ? 'bg-blue-500 text-slate-900' : 'bg-white/10 text-slate-400'}`}>
                              <i className={`fas ${item.icon}`}></i>
                          </div>
                          <div className="relative z-10">
                              <span className={`hidden md:block text-[9px] font-black uppercase tracking-tighter mb-1 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover/item:text-blue-400'}`}>Lihat Detail</span>
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
                    <span className="relative z-10 flex items-center justify-center gap-2">Daftar Sekarang <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left"><h4 className="text-3xl md:text-4xl font-black text-slate-900">10+</h4><p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Pilihan Ekskul</p></div>
            <div className="text-center md:text-left"><h4 className="text-3xl md:text-4xl font-black text-blue-500">50+</h4><p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Medali Nasional</p></div>
            <div className="text-center md:text-left"><h4 className="text-3xl md:text-4xl font-black text-slate-900">100%</h4><p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Pembina Ahli</p></div>
            <div className="text-center md:text-left"><h4 className="text-3xl md:text-4xl font-black text-indigo-500">Gold</h4><p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Akreditasi Ekskul</p></div>
          </div>
        </div>
      </div>

      {/* SECTION 1: EKSTRAKURIKULER REGULER */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-3 block">Ekstrakurikuler</span>
              <h2 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight italic uppercase">SMP <br /> GLOBAL MAJU KHATULISTIWA</h2>
            </div>
            
            {/* Filter Buttons */}
            <div className="relative group mt-4 md:mt-0 w-full md:w-auto">
              <div className="flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 px-1">
                <button onClick={() => setActiveFilter('all')} className={`flex-shrink-0 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 active:scale-95 ${activeFilter === 'all' ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 scale-105 border-slate-900' : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200'}`}>Semua</button>
                <button onClick={() => setActiveFilter('tech')} className={`flex-shrink-0 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 active:scale-95 ${activeFilter === 'tech' ? 'bg-blue-500 text-white shadow-lg shadow-blue-100 scale-105 border-blue-500' : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200'}`}>Sains & Tech</button>
                <button onClick={() => setActiveFilter('sport')} className={`flex-shrink-0 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 active:scale-95 ${activeFilter === 'sport' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105 border-indigo-600' : 'bg-white text-slate-500 border-slate-100 hover:border-indigo-200'}`}>Olahraga</button>
                <button onClick={() => setActiveFilter('art')} className={`flex-shrink-0 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 active:scale-95 ${activeFilter === 'art' ? 'bg-purple-600 text-white shadow-lg shadow-purple-100 scale-105 border-purple-600' : 'bg-white text-slate-500 border-slate-100 hover:border-purple-200'}`}>Seni & Budaya</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tampilan Jika Kosong */}
            {displayReguler.length === 0 && (
              <div className="col-span-full py-10 text-center text-slate-400 font-bold border-2 border-dashed border-slate-200 rounded-3xl">
                Tidak ada ekstrakurikuler reguler di kategori ini. Silakan cek bagian Program Unggulan di bawah.
              </div>
            )}

            {/* Loop Data Ekstrakurikuler Reguler */}
            {displayReguler.map((item) => (
              <div key={`reg-${item.id}`} className="group relative bg-white p-2 rounded-[42px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="relative h-64 rounded-[36px] overflow-hidden mb-6">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-95 group-hover:brightness-100" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8`}>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{item.subBadge}</span>
                  </div>
                  <div className={`absolute top-4 right-4 ${item.bg} text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                    {item.badge}
                  </div>
                </div>
                <div className="px-6 pb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 ${item.bgLight} ${item.text} rounded-2xl flex items-center justify-center text-2xl group-hover:${item.bg} group-hover:text-white transition-all duration-500 shadow-inner`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PROGRAM UNGGULAN */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-3 block">Program Unggulan</span>
              <h2 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight italic uppercase">SMP <br /> GLOBAL MAJU KHATULISTIWA</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tampilan Jika Kosong */}
            {displayUnggulan.length === 0 && (
              <div className="col-span-full py-10 text-center text-slate-400 font-bold border-2 border-dashed border-slate-200 rounded-3xl">
                Tidak ada Program Unggulan di kategori ini.
              </div>
            )}

            {/* Loop Data Program Unggulan */}
            {displayUnggulan.map((item) => (
              <div key={`ung-${item.id}`} className="group relative bg-white p-2 rounded-[42px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="relative h-64 rounded-[36px] overflow-hidden mb-6">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-95 group-hover:brightness-100" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8`}>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{item.subBadge}</span>
                  </div>
                  <div className={`absolute top-4 right-4 ${item.bg} text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                    {item.badge}
                  </div>
                </div>
                <div className="px-6 pb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 ${item.bgLight} ${item.text} rounded-2xl flex items-center justify-center text-2xl group-hover:${item.bg} group-hover:text-white transition-all duration-500 shadow-inner`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `
      }} />
    </div>
  );
}