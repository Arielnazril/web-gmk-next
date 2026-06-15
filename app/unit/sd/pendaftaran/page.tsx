"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function SdPendaftaran() {
  const audioRef = useRef<HTMLAudioElement>(null);
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
    
    const namaLengkap = formData.get("nama_lengkap_sd") as string;
    const panggilan = formData.get("panggilan_sd") as string;
    const ttl = formData.get("ttl_sd") as string;
    const usia = formData.get("usia_sd") as string;
    const jk = formData.get("jk_sd") as string;
    const agama = formData.get("agama_sd") as string;
    const asalSekolah = formData.get("asal_sekolah_sd") as string;
    const ayah = formData.get("ayah_sd") as string;
    const ibu = formData.get("ibu_sd") as string;
    const waOrtu = formData.get("wa_ortu_sd") as string;
    const pekerjaan = formData.get("pekerjaan_sd") as string;
    const alamat = formData.get("alamat_sd") as string;
    const abkJenis = formData.get("abk_jenis_sd") as string || "-";

    const nomorAdmin = "6282154199008"; // Admin SD

    const pesan = 
`*INFO PENDAFTARAN SD - GLOBAL MAJU*

Mohon informasinya mengenai anak untuk jadwal observasi dan wawancara:

1) *Nama Lengkap Anak:* ${namaLengkap}
2) *Nama Panggilan:* ${panggilan}
3) *Tempat/Tanggal Lahir Anak:* ${ttl}
4) *Usia anak per Juli 2026:* ${usia}
5) *Jenis Kelamin:* ${jk}
6) *Agama:* ${agama}
7) *Asal Sekolah:* ${asalSekolah}
8) *Nama Orangtua:*
   - Ayah: ${ayah}
   - Ibu: ${ibu}
9) *No HP Orangtua:* ${waOrtu}
10) *Pekerjaan:* ${pekerjaan}
11) *Alamat di Pontianak:* ${alamat}
12) *Apakah Anak Berkebutuhan Khusus (ABK)?* ${abkStatus}
13) *Jenis berkebutuhan (ABK):* ${abkJenis}`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`, '_blank');
  };

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
              <Link href="/unit/sd/ekstrakurikuler" className="text-slate-400 hover:text-rose-900 pb-1 transition-all">Ekstrakurikuler</Link>
              <Link href="/unit/sd/pendaftaran" className="text-rose-900 border-b-[2px] md:border-b-[3px] border-rose-900 pb-1 transition-all">Pendaftaran</Link>
            </div>
            <a href="#form-minat" className="bg-rose-900 text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-rose-100 whitespace-nowrap">
              Daftar
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 -mt-10 pb-32 relative z-20">
          
          {/* 1. Mekanisme Pendaftaran */}
          <div className="bg-white rounded-[4rem] shadow-2xl shadow-red-900/10 border border-red-50 p-10 md:p-16 mb-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Mekanisme Pendaftaran</h2>
              <p className="text-rose-700 text-xs font-bold uppercase tracking-widest mt-2">Langkah mudah bergabung bersama kami</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-rose-50 text-rose-900 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-rose-900 group-hover:text-white transition-all duration-500 relative">
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md">1</span>
                  <i className="fas fa-laptop-house text-2xl"></i>
                </div>
                <h4 className="font-black text-slate-800 uppercase tracking-tighter text-sm mb-2 leading-tight">Pendaftaran Online</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Isi data secara on-line untuk jadwal observasi dan wawancara.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-rose-50 text-rose-900 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-rose-900 group-hover:text-white transition-all duration-500 relative">
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md">2</span>
                  <i className="fas fa-user-friends text-2xl"></i>
                </div>
                <h4 className="font-black text-slate-800 uppercase tracking-tighter text-sm mb-2 leading-tight">Observasi & Wawancara</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Sesi pertemuan untuk mengenal potensi anak dan diskusi kurikulum Nasional.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-rose-50 text-rose-900 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-rose-900 group-hover:text-white transition-all duration-500 relative">
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md">3</span>
                  <i className="fas fa-file-signature text-2xl"></i>
                </div>
                <h4 className="font-black text-slate-800 uppercase tracking-tighter text-sm mb-2 leading-tight">Status Penerimaan</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Hasil observasi dan wawancara menentukan status diterima atau tidak diterima.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-rose-50 text-rose-900 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-rose-900 group-hover:text-white transition-all duration-500 relative">
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md">4</span>
                  <i className="fas fa-wallet text-2xl"></i>
                </div>
                <h4 className="font-black text-slate-800 uppercase tracking-tighter text-sm mb-2 leading-tight">Administrasi & Dokumen</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Melengkapi administrasi keuangan dan penyerahan dokumen fisik.</p>
              </div>
            </div>
          </div>

          {/* 2. Syarat & Waktu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-rose-900 rounded-[3.5rem] p-10 md:p-12 text-white relative group overflow-hidden">
              <i className="fas fa-file-invoice absolute -right-10 -bottom-10 text-[15rem] text-white opacity-5"></i>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-4 relative z-10">
                <span className="w-10 h-1 bg-yellow-400 rounded-full"></span> Syarat Pendaftaran
              </h3>
              
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-5">
                  <div className="flex-none w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-yellow-400 text-sm shadow-lg">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 leading-none mb-1">Kartu Keluarga</p>
                    <p className="text-sm text-red-100 font-medium">Fotocopy KK (1 Lembar)</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-none w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-yellow-400 text-sm shadow-lg">
                    <i className="fas fa-baby"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 leading-none mb-1">Akte Kelahiran</p>
                    <p className="text-sm text-red-100 font-medium">Fotocopy Akte Kelahiran (1 Lembar)</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-none w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-yellow-400 text-sm shadow-lg">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 leading-none mb-1">Identitas Orangtua</p>
                    <p className="text-sm text-red-100 font-medium">Fotocopy KTP Ayah & Ibu (Masing-masing 1 Lembar)</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-none w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-yellow-400 text-sm shadow-lg">
                    <i className="fas fa-camera-retro"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 leading-none mb-1">Pas Foto Terbaru</p>
                    <p className="text-sm text-red-100 font-medium">Foto Anak & Kedua Orangtua Ukuran 3x4 (Masing-masing 1 Lembar)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full opacity-50"></div>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-10 text-slate-800 flex items-center gap-4 relative z-10">
                <span className="w-10 h-1 bg-rose-900 rounded-full"></span> Waktu Pelayanan
              </h3>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-red-50 text-rose-900 rounded-2xl flex items-center justify-center text-2xl transition-all group-hover:bg-rose-900 group-hover:text-white group-hover:scale-110 duration-300 shadow-sm">
                    <i className="fas fa-calendar-check"></i>
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Hari Kerja</p>
                    <p className="text-2xl font-black text-slate-800 tracking-tight">Senin - Jumat</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl transition-all group-hover:bg-amber-600 group-hover:text-white group-hover:scale-110 duration-300 shadow-sm">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Jam Operasional</p>
                    <p className="text-2xl font-black text-slate-800 tracking-tight">07:00 - 12:00 <span className="text-sm font-bold text-slate-400 ml-1">WIB</span></p>
                  </div>
                </div>
                
                <div className="mt-4 p-5 bg-red-50/50 rounded-2xl border-l-4 border-rose-900">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <i className="fas fa-info-circle text-rose-900 mr-2"></i> Silakan datang ke kantor pelayanan sesuai jadwal di atas untuk menyerahkan berkas fisik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Form Minat SD */}
          <div id="form-minat" className="bg-white rounded-[4rem] shadow-2xl shadow-red-900/10 border border-slate-50 p-10 md:p-16 mb-16 scroll-mt-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="px-4 py-1.5 bg-red-50 text-rose-900 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Form Peminatan</span>
                <h2 className="text-3xl font-black text-slate-800 uppercase italic tracking-tighter mt-4">Daftar Minat Sekarang</h2>
                <p className="text-slate-400 text-sm mt-2">Mohon informasinya mengenai anak untuk jadwal observasi dan wawancara.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">1. Nama Lengkap Anak</label>
                    <input type="text" name="nama_lengkap_sd" required placeholder="Nama Lengkap" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">2. Nama Panggilan</label>
                    <input type="text" name="panggilan_sd" required placeholder="Nama Panggilan" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">3. Tempat/Tanggal Lahir</label>
                    <input type="text" name="ttl_sd" required placeholder="Contoh: Pontianak, 12 Mei 2019" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">4. Usia Anak per Juli 2026</label>
                    <input type="text" name="usia_sd" required placeholder="Contoh: 7 Tahun 2 Bulan" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">5. Jenis Kelamin</label>
                    <select name="jk_sd" required className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700 appearance-none">
                      <option value="">Pilih</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">6. Agama</label>
                    <input type="text" name="agama_sd" required placeholder="Agama" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">7. Asal Sekolah</label>
                    <input type="text" name="asal_sekolah_sd" required placeholder="Nama Sekolah Asal (TK/PAUD)" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">8a. Nama Ayah</label>
                    <input type="text" name="ayah_sd" required placeholder="Nama Ayah" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">8b. Nama Ibu</label>
                    <input type="text" name="ibu_sd" required placeholder="Nama Ibu" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">9. No HP Orangtua</label>
                    <input type="tel" name="wa_ortu_sd" required placeholder="08xxxxxxxx" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">10. Pekerjaan Ayah & Ibu</label>
                    <input type="text" name="pekerjaan_sd" required placeholder="Contoh: Ayah (PNS), Ibu (Swasta)" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">11. Alamat di Pontianak</label>
                    <textarea name="alamat_sd" required rows={2} placeholder="Alamat lengkap" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700"></textarea>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">12. Apakah Anak Berkebutuhan Khusus (ABK)?</label>
                    <select 
                      name="abk_status_sd" 
                      value={abkStatus}
                      onChange={(e) => setAbkStatus(e.target.value)}
                      required 
                      className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700 appearance-none"
                    >
                      <option value="Tidak">Tidak</option>
                      <option value="Iya">Iya</option>
                    </select>
                  </div>
                  <div className={`space-y-3 transition-opacity duration-300 ${abkStatus === 'Tidak' ? 'opacity-50' : 'opacity-100'}`}>
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">13. Jenis berkebutuhan (ABK)</label>
                    <input 
                      type="text" 
                      name="abk_jenis_sd" 
                      disabled={abkStatus === 'Tidak'} 
                      required={abkStatus === 'Iya'}
                      placeholder="Diisi jika 'Iya'" 
                      className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-rose-900 focus:bg-white outline-none transition-all font-bold text-slate-700" 
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-rose-900 hover:bg-rose-950 text-white font-black py-6 rounded-3xl shadow-xl shadow-red-900/20 transition-all uppercase tracking-[0.2em] text-xs">
                  Kirim Via WhatsApp <i className="fab fa-whatsapp ml-2 text-lg"></i>
                </button>
              </form>
            </div>
          </div>

          {/* 4. Footer CTA */}
          <div className="mt-16 bg-rose-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-red-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Butuh Bantuan?</h3>
              <p className="text-red-100 mb-10 font-medium">Hubungi tim administrasi unit terkait melalui WhatsApp.</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/6289694224226" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-rose-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-50 transition-all shadow-lg group">
                  <i className="fab fa-whatsapp text-lg text-emerald-500 group-hover:scale-110 transition-transform"></i> 
                  Admin PAUD
                </a>
                <a href="https://wa.me/6282154199008" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-rose-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-50 transition-all shadow-lg group">
                  <i className="fab fa-whatsapp text-lg text-blue-500 group-hover:scale-110 transition-transform"></i> 
                  Admin SD
                </a>
                <a href="https://wa.me/6289694224226" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-rose-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-50 transition-all shadow-lg group">
                  <i className="fab fa-whatsapp text-lg text-slate-500 group-hover:scale-110 transition-transform"></i> 
                  Admin SMP
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