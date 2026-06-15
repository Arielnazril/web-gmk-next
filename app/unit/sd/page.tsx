"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SdOverviewPage() {
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

      {/* Navigation Dinamis SD (Tanpa Sticky, Active State Auto Pick) */}
      <div className="relative bg-white border-y border-slate-100 z-10 shadow-md transition-all duration-300 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between min-w-max md:min-w-0">
          <div className="flex items-center gap-2 md:gap-3 mr-8 md:mr-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-rose-900 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-rose-100">
              <i className="fas fa-graduation-cap text-white text-xs md:text-sm"></i>
            </div>
            <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.1em] text-slate-900 whitespace-nowrap">Unit SD Global Maju</span>
          </div>

          <div className="flex items-center gap-4 md:gap-8 pr-6 md:pr-0">
            <div className="flex space-x-4 md:space-x-8 text-[10px] md:text-[12px] font-bold uppercase tracking-widest whitespace-nowrap">
              <Link href="/unit/sd" className={`pb-1 transition-all ${pathname === '/unit/sd' ? 'text-rose-900 border-b-[2px] md:border-b-[3px] border-rose-900' : 'text-slate-400 hover:text-rose-900'}`}>Metode Belajar</Link>
              <Link href="/unit/sd/fasilitas" className={`pb-1 transition-all ${pathname === '/unit/sd/fasilitas' ? 'text-rose-900 border-b-[2px] md:border-b-[3px] border-rose-900' : 'text-slate-400 hover:text-rose-900'}`}>Fasilitas</Link>
              <Link href="/unit/sd/ekstrakurikuler" className={`pb-1 transition-all ${pathname === '/unit/sd/ekstrakurikuler' ? 'text-rose-900 border-b-[2px] md:border-b-[3px] border-rose-900' : 'text-slate-400 hover:text-rose-900'}`}>Ekstrakurikuler</Link>
              <Link href="/unit/sd/pendaftaran" className={`pb-1 transition-all hidden sm:inline ${pathname === '/unit/sd/pendaftaran' ? 'text-rose-900 border-b-[2px] md:border-b-[3px] border-rose-900' : 'text-slate-400 hover:text-rose-900'}`}>Pendaftaran</Link>
            </div>
            <Link href="/unit/sd/pendaftaran" className="bg-rose-900 text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-rose-100 whitespace-nowrap">
              Daftar
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Section 1: Intro */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                </span>
                Integrated Learning System
              </div>
              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Membentuk Generasi <span className="text-rose-600">Berakhlak</span> & <span className="text-rose-400">Cerdas Digital</span>.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                "Di SD Global Maju Khatulistiwa, kami tidak hanya mengikuti standar nasional; kami menyempurnakannya dengan pendekatan pembentukan karakter yang kuat dan kesiapan menghadapi tantangan di era teknologi."
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1 min-w-[200px]">
                  <div className="text-rose-600 font-black text-2xl mb-1">100%</div>
                  <div className="text-slate-500 text-xs uppercase font-bold tracking-tighter">Kurikulum Nasional</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-rose-900 rounded-[4rem] rotate-3 absolute inset-0"></div>
              <img src="/images/sd-lab.jpeg" alt="Aktivitas Belajar" className="relative z-10 rounded-[4rem] aspect-square object-cover shadow-2xl -rotate-3 transition-transform hover:rotate-0 duration-700" />
            </div>
          </div>
        </div>

        {/* Section 2: Struktur Organisasi */}
        <div className="bg-slate-50 py-20 border-t border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-200">
              <div className="bg-rose-950 p-8 text-center">
                <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-widest">
                  Struktur Organisasi Sekolah Dasar<br />
                  <span className="text-rose-400">Global Maju Khatulistiwa</span>
                </h3>
              </div>

              <div className="p-10 overflow-x-auto">
                <div className="min-w-[1100px] flex flex-col items-center py-10">
                  {/* Kepala Sekolah */}
                  <div className="flex flex-col items-center mb-10">
                    <div className="bg-rose-400 border-2 border-slate-800 rounded-xl shadow-[6px_6px_0px_0px_rgba(67,10,21,1)] w-64 p-4 text-center">
                      <h4 className="text-sm font-black text-slate-900">Lina Pulungan, S. Pd</h4>
                      <p className="text-[10px] uppercase font-black text-rose-950 bg-white/60 rounded-full mt-2 py-1">Kepala Sekolah</p>
                    </div>
                    <div className="w-0.5 h-10 bg-slate-800"></div>
                  </div>

                  {/* Baris Kedua (Unit-Unit) */}
                  <div className="relative w-full flex justify-center mb-16">
                    <div className="absolute top-0 left-[22%] right-[22%] h-0.5 bg-slate-800"></div>
                    <div className="flex justify-around w-full">
                      <div className="flex flex-col items-center relative">
                        <div className="w-0.5 h-8 bg-slate-800"></div>
                        <div className="bg-rose-400 border-2 border-slate-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(67,10,21,1)] w-48 p-3 text-center transition-transform hover:-translate-y-1">
                          <h4 className="text-[11px] font-black">Septina Isni L, S. Pd</h4>
                          <p className="text-[9px] uppercase font-bold text-rose-950 bg-white/50 rounded mt-1">Unit Perpustakaan</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center relative">
                        <div className="w-0.5 h-8 bg-slate-800"></div>
                        <div className="bg-rose-400 border-2 border-slate-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(67,10,21,1)] w-48 p-3 text-center transition-transform hover:-translate-y-1">
                          <h4 className="text-[11px] font-black">Resdin Tamba</h4>
                          <p className="text-[9px] uppercase font-bold text-rose-950 bg-white/50 rounded mt-1">Komite Sekolah</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center relative">
                        <div className="w-0.5 h-8 bg-slate-800"></div>
                        <div className="bg-rose-400 border-2 border-slate-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(67,10,21,1)] w-48 p-3 text-center transition-transform hover:-translate-y-1">
                          <h4 className="text-[11px] font-black">Mudawamah, S. Pd</h4>
                          <p className="text-[9px] uppercase font-bold text-rose-950 bg-white/50 rounded mt-1">Administrasi</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wali Kelas */}
                  <div className="w-full relative px-4">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-slate-800"></div>
                    <div className="grid grid-cols-6 gap-4">
                      {[
                        { name: "Mardini, S. Pd", class: "Wali Kelas 1" },
                        { name: "Fahmi Kartina, S. Pd", class: "Wali Kelas 3" },
                        { name: "Mariska F Yani, S. Pd", class: "Wali Kelas 1" },
                        { name: "Nurul Sauma R, S. Pd", class: "Wali Kelas 3" },
                        { name: "Jumarni, S. Pd", class: "Wali Kelas 1" },
                        { name: "Raymundus L, S. Pd", class: "Wali Kelas 4" },
                        { name: "Yulita Apra, S. Pd", class: "Wali Kelas 1" },
                        { name: "Wilhelmus S, S. Pd", class: "Wali Kelas 4" },
                        { name: "Nita Savitriani, S. Pd", class: "Wali Kelas 2" },
                        { name: "Muftahatus S, S. Pd", class: "Wali Kelas 5" },
                        { name: "Fahmi Kartina, S. Pd", class: "Wali Kelas 2" },
                        { name: "Lina Pulungan, S. Pd", class: "Wali Kelas 6" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-rose-400 border-2 border-slate-800 rounded-lg shadow-sm p-2 text-center h-fit">
                          <h5 className="text-[10px] font-black">{item.name}</h5>
                          <p className="text-[8px] font-bold text-rose-950 uppercase">{item.class}</p>
                        </div>
                      ))}
                    </div>

                    {/* Guru Mata Pelajaran */}
                    <div className="mt-12 pt-8 border-t-2 border-dashed border-slate-300">
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { name: "Fourtha G, S. Pd", role: "Guru Bahasa Inggris" },
                          { name: "Widia", role: "Guru Agama Kristen" },
                          { name: "Sepkamisa P, S. Pd", role: "Guru PJOK" },
                          { name: "Nur Aisyah, S. Pd", role: "Guru Matematika" },
                          { name: "Garuka K K, S. Ag", role: "Guru Agama Budha" },
                          { name: "Septina Isni L, S. Pd", role: "Guru UKS" },
                          { name: "Anisa Amna, S. Pd", role: "Guru Agama Islam" },
                          { name: "Wilhelmus S, S. Pd", role: "Guru Pramuka" },
                        ].map((item, idx) => (
                          <div key={idx} className="bg-rose-200 border border-slate-800 rounded p-2 text-center h-fit">
                            <h6 className="text-[9px] font-black">{item.name}</h6>
                            <p className="text-[7px] font-bold text-rose-900 italic">{item.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Tiga Pilar Utama Pendidikan */}
        <section className="py-24 md:py-48 px-6 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-rose-100/50 rounded-full blur-[100px] -mr-32 -mt-32"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-10 text-center md:text-left">
              <div className="max-w-2xl">
                <span className="text-rose-700 font-black text-xs uppercase tracking-[0.4em] mb-4 md:mb-6 block">Our Excellence</span>
                <h2 className="text-3xl md:text-6xl font-black text-rose-950 leading-tight">Membentuk Karakter Entrepreneur Unggul</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: "fa-shield-alt", title: "Tangguh dan Resilien", desc: "Mampu menghadapi tekanan, kegagalan, dan ketidakpastian dengan sikap tenang, positif, dan produktif. Setiap rintangan dipandang sebagai tangga pertumbuhan, bukan tembok penghalang." },
                { icon: "fa-lightbulb", title: "Cerdas Melihat Peluang", desc: "Terlatih membaca tren dan melihat peluang menjadi nilai dengan kepekaan pasar yang kuat." },
                { icon: "fa-chess", title: "Pemikir Strategis", desc: "Menyusun rencana matang dan mengambil keputusan dengan analisis yang tepat." },
                { icon: "fa-comments", title: "Komunikatif dan Persuasif", desc: "Mampu menyampaikan ide dengan jelas, membangun relasi, dan memengaruhi secara positif." },
                { icon: "fa-arrows-rotate", title: "Adaptif terhadap Perubahan", desc: "Fleksibel dan cepat beradaptasi dengan perubahan zaman." },
                { icon: "fa-scale-balanced", title: "Bertanggung Jawab dan Berintegritas", desc: "Menjunjung tinggi kejujuran dan tanggung jawab dalam setiap tindakan." }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-rose-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
                  <div className="w-20 h-20 bg-rose-50 text-rose-700 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-rose-900 group-hover:text-white transition-all duration-500">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4 className="text-2xl font-black text-rose-950 mb-5">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
              <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-rose-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
                <div className="w-20 h-20 bg-rose-50 text-rose-700 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-rose-900 group-hover:text-white transition-all duration-500">
                  <i className="fas fa-heart-pulse"></i>
                </div>
                <h4 className="text-2xl font-black text-rose-950 mb-5">Sehat Secara Holistik</h4>
                <p className="text-slate-500 leading-relaxed font-medium">Menjaga keseimbangan fisik, mental, dan emosional.</p>
              </div>

              <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-rose-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
                <div className="w-20 h-20 bg-rose-50 text-rose-700 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-rose-900 group-hover:text-white transition-all duration-500">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4 className="text-2xl font-black text-rose-950 mb-5">Berdampak bagi Masyarakat</h4>
                <p className="text-slate-500 leading-relaxed font-medium">Berorientasi pada kontribusi sosial dan dampak positif bagi lingkungan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Lihat Form PDF (Nuansa Maroon SD) */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="group relative bg-white border-2 border-rose-50 rounded-[3.5rem] p-8 md:p-12 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-slate-100">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-50/50 rounded-full blur-3xl -mr-40 -mt-40 transition-transform group-hover:scale-110 duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 bg-rose-900 text-white rounded-[2rem] flex items-center justify-center text-4xl shadow-xl shadow-rose-200 group-hover:rotate-12 transition-all duration-500">
                    <i className="fas fa-file-invoice"></i>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-rose-400 text-white rounded-full flex items-center justify-center text-xs border-4 border-white">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Formulir Pendaftaran <span className="text-rose-900">SD</span></h3>
                  <p className="text-slate-500 font-medium max-w-md">Pratinjau formulir resmi pendaftaran untuk melihat kelengkapan data yang dibutuhkan secara detail.</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                    <span className="px-4 py-1.5 bg-rose-50 text-rose-700 text-[10px] font-bold uppercase rounded-xl tracking-widest border border-rose-100">
                      <i className="fas fa-eye mr-1.5"></i> Interactive Preview
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <a href="/pdf/form-sd.pdf" target="_blank" className="inline-flex items-center gap-4 bg-rose-950 hover:bg-rose-900 text-white px-12 py-5 rounded-3xl font-black text-lg transition-all duration-300 shadow-xl shadow-rose-100 hover:shadow-rose-300 group/btn">
                  Lihat Formulir
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
        `
      }} />
    </>
  );
}