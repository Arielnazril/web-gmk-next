"use client";

import React from "react";

export default function HubungiKami() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const anak_nama = formData.get("anak_nama");
    const anak_panggilan = formData.get("anak_panggilan");
    const anak_ttl = formData.get("anak_ttl");
    const anak_usia = formData.get("anak_usia");
    const anak_jk = formData.get("anak_jk");
    const anak_agama = formData.get("anak_agama");
    const anak_asal_sekolah = formData.get("anak_asal_sekolah");
    const ortu_hp = formData.get("ortu_hp");
    const ortu_ayah = formData.get("ortu_ayah");
    const ortu_ibu = formData.get("ortu_ibu");
    const kerja_ayah = formData.get("kerja_ayah");
    const kerja_ibu = formData.get("kerja_ibu");
    const alamat_ptk = formData.get("alamat_ptk");
    const is_abk = formData.get("is_abk");
    const jenis_abk = formData.get("jenis_abk") || "-";

    const nomorAdmin = "6282154199008";

    const teksPesan = window.encodeURIComponent(
      `Mohon informasinya mengenai anak untuk jadwal observasi dan wawancara\n\n` +
      `1) Nama Lengkap Anak: ${anak_nama}\n` +
      `2) Nama Panggilan: ${anak_panggilan}\n` +
      `3) Tempat/Tanggal Lahir Anak: ${anak_ttl}\n` +
      `4) Usia anak per Juli 2026: ${anak_usia}\n` +
      `5) Jenis Kelamin: ${anak_jk}\n` +
      `6) Agama: ${anak_agama}\n` +
      `7) Asal Sekolah: ${anak_asal_sekolah}\n` +
      `8) Nama Orangtua:\n` +
      `   Ayah: ${ortu_ayah}\n` +
      `   Ibu: ${ortu_ibu}\n` +
      `9) No HP Orangtua: ${ortu_hp}\n` +
      `10) Pekerjaan:\n` +
      `    a) Ayah: ${kerja_ayah}\n` +
      `    b) Ibu: ${kerja_ibu}\n` +
      `11) Alamat di Pontianak: ${alamat_ptk}\n` +
      `12) Apakah Anak Berkebutuhan Khusus (ABK)?: ${is_abk}\n` +
      `13) Jenis berkebutuhan (ABK): ${jenis_abk}`
    );

    window.open(`https://wa.me/${nomorAdmin}?text=${teksPesan}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden flex items-center justify-center">
        <img
          src="/images/gedung-sekolah.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Gedung Sekolah"
        />

        {/* Overlay Gradient yang lebih kuat */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/60 to-slate-50"></div>

        <div className="relative z-10 text-center px-6 mt-[-100px] md:mt-[-150px]">
          <span className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black tracking-[0.4em] uppercase shadow-lg">
            Contact Information
          </span>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight"
            style={{ textShadow: "0 4px 15px rgba(0,0,0,0.5)" }}
          >
            Hubungi Kami
          </h1>

          <p
            className="text-white text-base md:text-xl max-w-3xl mx-auto font-bold leading-relaxed"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            Punya pertanyaan mengenai pendaftaran atau program pendidikan kami? <br className="hidden md:block" />
            Tim kami siap membantu Anda dengan sepenuh hati.
          </p>
        </div>
      </div>

      {/* Container Utama */}
      <div className="max-w-7xl mx-auto px-6 pb-20 -mt-32 md:-mt-40 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bagian Kiri (Mekanisme & Form) */}
          <div className="lg:col-span-7 w-full space-y-8">
            {/* Mekanisme Pendaftaran Card */}
            <div className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-[2px] bg-emerald-500"></span>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic text-emerald-600">
                    Mekanisme Pendaftaran
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Step 1 */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-tight">Pendaftaran Online</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">
                        Isi data secara on-line untuk jadwal observasi dan wawancara.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-tight">Proses Seleksi</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">
                        Melakukan tahapan observasi dan wawancara calon siswa.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-tight">Pengumuman Hasil</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">
                        Hasil seleksi menentukan status diterima atau tidak diterima.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                      4
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-tight">Daftar Ulang</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">
                        Melengkapi administrasi keuangan dan dokumen pendukung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak (Pendaftaran Anak) */}
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[2px] bg-blue-600"></span>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic">
                    Formulir Observasi
                  </h2>
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  Lengkapi data untuk jadwal observasi & wawancara
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Nama Lengkap Anak
                    </label>
                    <input
                      type="text"
                      name="anak_nama"
                      required
                      placeholder="Nama Lengkap"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Nama Panggilan
                    </label>
                    <input
                      type="text"
                      name="anak_panggilan"
                      required
                      placeholder="Panggilan"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Tempat/Tanggal Lahir
                    </label>
                    <input
                      type="text"
                      name="anak_ttl"
                      required
                      placeholder="Contoh: Pontianak, 01-01-2020"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Usia Per Juli 2026
                    </label>
                    <input
                      type="text"
                      name="anak_usia"
                      required
                      placeholder="Contoh: 6 Tahun"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Jenis Kelamin
                    </label>
                    <select
                      name="anak_jk"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 appearance-none cursor-pointer"
                    >
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Agama</label>
                    <input
                      type="text"
                      name="anak_agama"
                      required
                      placeholder="Agama"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Asal Sekolah
                    </label>
                    <input
                      type="text"
                      name="anak_asal_sekolah"
                      required
                      placeholder="Sekolah Sebelumnya"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      No HP Orangtua
                    </label>
                    <input
                      type="number"
                      name="ortu_hp"
                      required
                      placeholder="08xxxx"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Nama Ayah</label>
                    <input
                      type="text"
                      name="ortu_ayah"
                      required
                      placeholder="Nama Ayah"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Nama Ibu</label>
                    <input
                      type="text"
                      name="ortu_ibu"
                      required
                      placeholder="Nama Ibu"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Pekerjaan Ayah
                    </label>
                    <input
                      type="text"
                      name="kerja_ayah"
                      required
                      placeholder="Pekerjaan Ayah"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Pekerjaan Ibu
                    </label>
                    <input
                      type="text"
                      name="kerja_ibu"
                      required
                      placeholder="Pekerjaan Ibu"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                    Alamat di Pontianak
                  </label>
                  <textarea
                    name="alamat_ptk"
                    rows={2}
                    required
                    placeholder="Alamat Lengkap"
                    className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Anak Berkebutuhan Khusus (ABK)?
                    </label>
                    <select
                      name="is_abk"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 appearance-none cursor-pointer"
                    >
                      <option>Tidak</option>
                      <option>Iya</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Jenis Kebutuhan (Jika Iya)
                    </label>
                    <input
                      type="text"
                      name="jenis_abk"
                      placeholder="Isi jika iya"
                      className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-blue-700 text-white rounded-[2rem] font-black text-[11px] tracking-[0.2em] uppercase shadow-2xl shadow-blue-200 hover:bg-slate-900 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mt-4"
                >
                  Kirim Data via WhatsApp <i className="fab fa-whatsapp text-lg text-emerald-400"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar (Kanan) */}
          <div className="lg:col-span-5 w-full space-y-6">
            {/* WA Admin PAUD */}
            <a
              href="https://wa.me/6289694224226"
              target="_blank"
              className="flex items-center gap-5 bg-[#07332f] p-6 rounded-[2.5rem] text-white shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-white/5"
            >
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl text-emerald-400">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 text-[9px] uppercase tracking-widest">
                  Pendaftaran PAUD (KB & TK)
                </h4>
                <p className="text-xl font-black tracking-tight">+62 896-9422-4226</p>
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-tight">Unit TK & PAUD</p>
              </div>
            </a>

            {/* WA Admin SD */}
            <a
              href="https://wa.me/6282154199008"
              target="_blank"
              className="flex items-center gap-5 bg-[#0d1b33] p-6 rounded-[2.5rem] text-white shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-white/5"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-3xl text-blue-400">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4 className="font-bold text-blue-400 text-[9px] uppercase tracking-widest">Pendaftaran SD</h4>
                <p className="text-xl font-black tracking-tight">+62 821-5419-9008</p>
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-tight">Unit SD</p>
              </div>
            </a>

            {/* WA Admin SMP */}
            <a
              href="https://wa.me/6289694224226"
              target="_blank"
              className="flex items-center gap-5 bg-[#1e1e1e] p-6 rounded-[2.5rem] text-white shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-white/5"
            >
              <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-3xl text-yellow-400">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 text-[9px] uppercase tracking-widest">Pendaftaran SMP</h4>
                <p className="text-xl font-black tracking-tight">+62 896-9422-4226</p>
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-tight">Unit SMP</p>
              </div>
            </a>

            {/* Jam Layanan */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
              <h4 className="text-slate-900 font-black text-lg mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span> Jam Layanan
              </h4>
              <div className="space-y-4 text-sm font-bold">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-slate-400 text-[10px] uppercase tracking-widest">Senin - Kamis</span>
                  <span className="text-slate-700 font-black">06:00 — 13:00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-slate-400 text-[10px] uppercase tracking-widest">Jumat</span>
                  <span className="text-slate-700 font-black">06:00 — 11:00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400 text-[10px] uppercase tracking-widest">Sabtu - Minggu</span>
                  <span className="text-red-500 font-black uppercase italic">OFF / Libur</span>
                </div>
              </div>
            </div>

            {/* Maps */}
            <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.258658848536!2d109.34011249999999!3d-0.0775608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d5b961acbc413%3A0x6187c10dfba1fef2!2sSD%20Global%20Maju%20Khatulistiwa!5e0!3m2!1sid!2sid!4v1780544646377!5m2!1sid!2sid"
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}