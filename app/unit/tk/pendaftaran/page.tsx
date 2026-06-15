"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TkPendaftaran() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nomorTujuan = "6289694224226";

    let pesan = "*— DATA OBSERVASI & WAWANCARA (GLOBAL MAJU) —*\n\n";
    pesan += "Mohon informasinya mengenai anak untuk jadwal observasi dan wawancara:\n\n";
    pesan += `1) *Nama Lengkap Anak:* ${formData.get("nama_anak")}\n`;
    pesan += `2) *Nama Panggilan:* ${formData.get("nama_panggilan")}\n`;
    pesan += `3) *Tempat/Tanggal Lahir:* ${formData.get("ttl_anak")}\n`;
    pesan += `4) *Usia per Juli 2026:* ${formData.get("usia_juli")}\n`;
    pesan += `5) *Jenis Kelamin:* ${formData.get("jk_anak")}\n`;
    pesan += `6) *Agama:* ${formData.get("agama_anak")}\n`;
    pesan += `7) *Asal Sekolah:* ${formData.get("asal_sekolah")}\n`;
    pesan += `8) *Nama Orangtua:*\n`;
    pesan += `   - Ayah: ${formData.get("nama_ayah")}\n`;
    pesan += `   - Ibu: ${formData.get("nama_ibu")}\n`;
    pesan += `9) *No HP Orangtua:* ${formData.get("wa_ortu")}\n`;
    pesan += `10) *Pekerjaan:*\n`;
    pesan += `    a) Ayah: ${formData.get("kerja_ayah")}\n`;
    pesan += `    b) Ibu: ${formData.get("kerja_ibu")}\n`;
    pesan += `11) *Alamat di Pontianak:* ${formData.get("alamat_ponti")}\n`;
    pesan += `12) *Apakah ABK?* ${formData.get("is_abk")}\n`;
    pesan += `13) *Jenis Berkebutuhan:* ${formData.get("jenis_abk") || "-"}\n\n`;
    pesan += "Terima kasih. 🙏✨";

    const url = "https://wa.me/" + nomorTujuan + "?text=" + encodeURIComponent(pesan);
    window.open(url, '_blank');
  };

  const steps = [
    { no: '01', title: 'Pendaftaran Online', desc: 'Isi data secara on-line untuk jadwal observasi dan wawancara.' },
    { no: '02', title: 'Observasi & Wawancara', desc: 'Pelaksanaan sesi observasi dan wawancara bersama calon siswa dan orang tua.' },
    { no: '03', title: 'Status Penerimaan', desc: 'Hasil observasi dan wawancara menentukan status diterima atau tidak diterima.' },
    { no: '04', title: 'Administrasi', desc: 'Melengkapi administrasi keuangan dan dokumen pendukung lainnya.' },
  ];

  const persyaratan = [
    'Fotocopy KK 1 lembar',
    'Fotocopy Akte Kelahiran 1 lembar',
    'Fotocopy KTP kedua orangtua masing-masing 1 lembar',
    'Pas foto anak ukuran 3 x 4 sebanyak 1 lembar',
    'Pas foto kedua orangtua ukuran 3 x 4 masing-masing sebanyak 1 lembar'
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
      <div className="relative bg-[#FFFF00] border-y border-black/10 z-10 shadow-md transition-all duration-300 overflow-x-auto no-scrollbar">
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

      {/* Section Content */}
      <div className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50 md:-skew-x-12 md:translate-x-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4">Join Our Community</span>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                  Ayo Sekolah di <span className="text-yellow-500 underline decoration-yellow-200">Global Maju!</span>
                </h2>
              </div>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Penerimaan Peserta Didik Baru (SPMB) Tahun Ajaran 2026/2027 telah dibuka. Berikan fondasi pendidikan terbaik untuk masa depan buah hati Anda.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <a href="#form-pendaftaran" className="flex items-center justify-center gap-3 px-8 py-4 md:py-5 bg-black text-white rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-[12px] hover:scale-105 transition-all shadow-2xl shadow-black/20">
                  Daftar Online Sekarang <i className="fas fa-arrow-right text-[8px] md:text-[10px]"></i>
                </a>
                <a href="https://wa.me/6289694224226" target="_blank" className="flex items-center justify-center gap-3 px-8 py-4 md:py-5 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-[12px] hover:bg-slate-50 transition-all">
                  <i className="fab fa-whatsapp text-emerald-500 text-lg"></i> Tanya Admin
                </a>
              </div>
            </div>

            <div className="relative flex justify-center mt-10 lg:mt-0">
              <div className="relative w-full max-w-xs md:max-w-lg group">
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-[40px] md:rounded-[60px] rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="relative bg-white p-4 md:p-8 rounded-[35px] md:rounded-[50px] shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-slate-50">
                  <div className="bg-slate-900 rounded-[30px] md:rounded-[40px] p-6 md:p-8 text-white relative overflow-hidden">
                    <div className="relative z-10 text-center lg:text-left">
                      <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 md:mb-4">Kuota Terbatas!</h4>
                      <p className="text-slate-400 text-[12px] md:text-sm leading-relaxed mb-6">Pastikan buah hati Anda mendapatkan tempat di lingkungan belajar terbaik.</p>
                      <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                        <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-1 text-center">Tahun Ajaran</p>
                        <p className="text-xl md:text-2xl font-black text-center tracking-widest leading-none">2026 / 2027</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-400/20 blur-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mekanisme Pendaftaran */}
      <div className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 md:mb-16 uppercase tracking-tighter">Mekanisme Pendaftaran</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="group bg-white p-8 md:p-10 rounded-[35px] md:rounded-[50px] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <span className="absolute -top-2 -right-2 text-7xl md:text-8xl font-black text-slate-50 group-hover:text-yellow-400/10 transition-colors pointer-events-none">{step.no}</span>
                <div className="relative z-10 text-left">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-yellow-200 mb-8 font-black text-lg transition-transform group-hover:rotate-12">
                    {step.no}
                  </div>
                  <h4 className="font-black text-slate-900 text-lg md:text-xl mb-4 uppercase tracking-tight leading-tight">{step.title}</h4>
                  <p className="text-slate-500 text-[12px] md:text-[13px] font-semibold leading-relaxed tracking-wide">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Pendaftaran Section */}
      <div id="form-pendaftaran" className="py-20 md:py-32 max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Persyaratan Kiri */}
          <div className="space-y-8">
            <div className="p-8 md:p-12 bg-white rounded-[40px] md:rounded-[60px] border-4 border-dashed border-slate-200 group hover:border-yellow-400 transition-all duration-500 h-fit">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6 md:mb-8 flex items-center gap-3 md:gap-4 leading-none">
                <i className="fas fa-file-invoice text-yellow-500 text-xl md:text-2xl"></i> Persyaratan
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {persyaratan.map((list, idx) => (
                  <li key={idx} className="flex items-start md:items-center gap-3 text-slate-600 font-bold uppercase tracking-widest text-[9px] md:text-[11px] leading-tight">
                    <i className="fas fa-check-circle text-emerald-500 mt-0.5 md:mt-0"></i> {list}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12 bg-slate-900 rounded-[40px] md:rounded-[60px] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-none text-center md:text-left">Butuh Bantuan?</h3>
                <p className="text-slate-400 text-sm md:text-base mb-8 text-center md:text-left">Tim pendaftaran kami siap membantu Anda setiap hari kerja pukul 07.00 - 14.00 WIB.</p>
                <a href="https://wa.me/6289694224226" target="_blank" className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-slate-900 px-6 md:px-8 py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[12px] hover:scale-105 transition-all shadow-xl shadow-yellow-400/20 w-full sm:w-auto">
                  <i className="fab fa-whatsapp text-lg"></i> Chat WhatsApp
                </a>
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-yellow-400/10 blur-3xl rounded-full"></div>
            </div>
          </div>

          {/* Form Kanan */}
          <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12">
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">Formulir Minat</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Lengkapi data untuk proses penjadwalan</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">1) Nama Lengkap Anak</label>
                <input type="text" name="nama_anak" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">2) Nama Panggilan</label>
                <input type="text" name="nama_panggilan" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">3) Tempat/Tanggal Lahir</label>
                <input type="text" name="ttl_anak" required placeholder="Contoh: Pontianak, 01 Jan 2021" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">4) Usia per Juli 2026</label>
                <input type="text" name="usia_juli" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">5) Jenis Kelamin</label>
                  <select name="jk_anak" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700">
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">6) Agama</label>
                  <input type="text" name="agama_anak" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">7) Asal Sekolah</label>
                <input type="text" name="asal_sekolah" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">8a) Nama Ayah</label>
                  <input type="text" name="nama_ayah" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">8b) Nama Ibu</label>
                  <input type="text" name="nama_ibu" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">9) No HP Orangtua</label>
                <input type="tel" name="wa_ortu" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">10a) Pekerjaan Ayah</label>
                  <input type="text" name="kerja_ayah" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">10b) Pekerjaan Ibu</label>
                  <input type="text" name="kerja_ibu" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">11) Alamat di Pontianak</label>
                <textarea name="alamat_ponti" required rows={2} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">12) Anak Berkebutuhan Khusus?</label>
                <select name="is_abk" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700">
                  <option value="Tidak">Tidak</option>
                  <option value="Iya">Iya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">13) Jenis berkebutuhan (Jika Iya)</label>
                <input type="text" name="jenis_abk" placeholder="Isi - jika tidak ada" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition-all font-bold text-slate-700" />
              </div>

              <button type="submit" className="w-full bg-black text-white font-black py-5 md:py-6 rounded-2xl md:rounded-3xl shadow-xl shadow-black/10 hover:bg-slate-800 transition-all uppercase tracking-[0.2em] text-[10px] md:text-[12px] flex items-center justify-center gap-3 mt-4">
                Kirim Data via WhatsApp <i className="fab fa-whatsapp text-lg text-emerald-400"></i>
              </button>
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