"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SmpPendaftaran() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();
  const [abkStatus, setAbkStatus] = useState("Tidak");

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const namaLengkap = formData.get("nama_lengkap") as string;
    const panggilan = formData.get("nama_panggilan") as string;
    const ttl = formData.get("ttl") as string;
    const usia = formData.get("usia") as string;
    const jk = formData.get("jk") as string;
    const agama = formData.get("agama") as string;
    const asalSekolah = formData.get("asal_sekolah") as string;
    const ayah = formData.get("nama_ayah") as string;
    const ibu = formData.get("nama_ibu") as string;
    
    let hp = formData.get("hp_ortu") as string;
    if (hp.startsWith('0')) hp = '62' + hp.substring(1);

    const alamat = formData.get("alamat") as string;
    const abkJenis = formData.get("jenis_abk") as string || "-";

    const nomorAdmin = "6282154199008";

    const msg = 
`*FORMULIR OBSERVASI SISWA BARU (SMP)*
--------------------------------
Nama: ${namaLengkap}
Panggilan: ${panggilan}
TTL: ${ttl}
Usia: ${usia}
Jenis Kelamin: ${jk}
Agama: ${agama}
Sekolah Asal: ${asalSekolah}
Ayah: ${ayah}
Ibu: ${ibu}
WA: ${hp}
Alamat: ${alamat}
ABK: ${abkStatus}
${abkStatus === 'Iya' ? `Jenis ABK: ${abkJenis}` : ''}`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(msg)}`, '_blank');
  };

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
                <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Admissions 2026/2027</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                <span className="block mb-2">Mari</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 uppercase">
                  Bergabung
                </span>
              </h1>

              <p className="mt-6 text-slate-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium mb-16">
                Langkah awal menuju masa depan gemilang dimulai dari sini. Pilih jalur prestasi atau reguler sekarang untuk bergabung di ekosistem digital terbaik.
              </p>
            </div>

            {/* Right Section: Card Image */}
            <div className="hidden lg:block w-1/3 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-[80px] rounded-full animate-pulse duration-4000"></div>
              <div className="relative bg-slate-900/40 border border-white/10 p-5 rounded-[2.5rem] backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-700 ease-out group/card">
                <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-slate-800 flex items-center justify-center shadow-inner">
                  <img src="/images/smp.jpeg" alt="Pendaftaran SMP" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md border border-slate-100 py-2.5 px-4 rounded-2xl shadow-xl shadow-slate-900/10 group-hover/card:-translate-y-1 transition-all duration-500 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                  <span className="text-[10px] font-black tracking-wider text-slate-800 uppercase">Pendaftaran</span>
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
                  <div className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 text-center block w-full">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Pendaftaran Dibuka
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KONTEN BAWAH (Informasi Pendaftaran & Formulir) */}
      <div className="bg-slate-50 flex-grow py-12 md:py-16 px-5 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter flex items-center gap-3">
                <i className="fas fa-clipboard-list text-blue-600"></i> Mekanisme Pendaftaran
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {['Isi data secara on-line untuk jadwal observasi dan wawancara', 'Observasi dan wawancara', 'Hasil observasi dan wawancara menentukan status diterima atau tidak.', 'Melengkapi administrasi keuangan dan dokumen'].map((teks, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-500 transition-colors">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs">{index + 1}</span>
                    <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">{teks}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter flex items-center gap-3">
                <i className="fas fa-file-signature text-blue-600"></i> Syarat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: 'users', title: 'Kartu Keluarga', desc: 'Fotocopy KK (1 Lembar)' },
                  { icon: 'baby', title: 'Akte Kelahiran', desc: 'Fotocopy Akte (1 Lembar)' },
                  { icon: 'id-card', title: 'KTP Orang Tua', desc: 'Fotocopy KTP Ayah & Ibu (1 Lembar)' },
                  { icon: 'camera', title: 'Pas Foto Anak', desc: 'Ukuran 3x4 (1 Lembar)' },
                  { icon: 'user-friends', title: 'Pas Foto Ortu', desc: 'Ukuran 3x4 (Ayah & Ibu 1 Lembar)' },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                      <i className={`fas fa-${s.icon} text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-[11px] md:text-xs uppercase">{s.title}</h4>
                      <p className="text-slate-500 text-[10px] italic">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl h-fit border border-slate-800">
            <h3 className="text-lg font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3 text-blue-400">
              <i className="fas fa-headset"></i> Pelayanan
            </h3>
            <div className="space-y-3">
              {[
                { hari: 'Senin - Kamis', jam: '08:00 - 14:00' },
                { hari: 'Jumat', jam: '08:00 - 11:00' },
                { hari: 'Sabtu', jam: '08:00 - 12:00' },
              ].map((j, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">{j.hari}</span>
                  <span className="text-blue-400 font-black text-xs">{j.jam}</span>
                </div>
              ))}
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 flex justify-between items-center text-rose-400">
                <span className="font-bold text-[10px] uppercase">Minggu</span>
                <span className="font-black text-[10px] uppercase">Tutup</span>
              </div>
            </div>
            <a href="https://wa.me/6282154199008" target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
              <i className="fab fa-whatsapp text-lg"></i> Chat Admin
            </a>
          </div>
        </div>
      </div>

      <div id="form-observasi" className="bg-slate-50 pb-20 px-5 w-full">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-xl p-6 md:p-16 border border-slate-100 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-10">
              <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[9px] font-black uppercase tracking-widest">Official Form</span>
              <h2 className="text-2xl md:text-5xl font-black text-slate-900 mt-4 mb-2 uppercase italic tracking-tighter">Formulir Observasi</h2>
              <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">1) Nama Lengkap Anak</label>
                  <input type="text" name="nama_lengkap" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">2) Nama Panggilan</label>
                  <input type="text" name="nama_panggilan" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">3) Tempat/Tgl Lahir</label>
                  <input type="text" name="ttl" required placeholder="Contoh: Pontianak, 12 Jan 2013" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">4) Usia per Juli 2026</label>
                  <input type="text" name="usia" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">5) Jenis Kelamin</label>
                  <select name="jk" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm appearance-none cursor-pointer">
                    <option value="">Pilih...</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">6) Agama</label>
                  <input type="text" name="agama" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">7) Asal Sekolah</label>
                  <input type="text" name="asal_sekolah" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">8a) Nama Ayah</label>
                  <input type="text" name="nama_ayah" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">8b) Nama Ibu</label>
                  <input type="text" name="nama_ibu" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">9) No HP Orangtua (WA)</label>
                  <input type="tel" name="hp_ortu" required placeholder="08..." className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">11) Alamat Lengkap</label>
                  <textarea name="alamat" required rows={3} className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">12) Berkebutuhan Khusus?</label>
                  <select 
                    name="is_abk" 
                    value={abkStatus}
                    onChange={(e) => setAbkStatus(e.target.value)}
                    required 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm appearance-none cursor-pointer"
                  >
                    <option value="Tidak">Tidak</option>
                    <option value="Iya">Iya</option>
                  </select>
                </div>
                <div className={`space-y-2 transition-opacity duration-300 ${abkStatus === 'Iya' ? 'opacity-100 block' : 'opacity-40 hidden md:block pointer-events-none'}`}>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">13) Jenis ABK</label>
                  <input 
                    type="text" 
                    name="jenis_abk" 
                    required={abkStatus === 'Iya'}
                    disabled={abkStatus !== 'Iya'}
                    placeholder="Wajib diisi jika 'Iya'"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-700 text-sm" 
                  />
                </div>
              </div>
              <div className="pt-6">
                <button type="submit" className="w-full bg-blue-950 text-white font-black py-5 rounded-2xl shadow-xl transition-all active:scale-95 text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-blue-900">
                  Kirim Data Observasi <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
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