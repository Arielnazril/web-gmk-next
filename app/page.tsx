import React from "react";
import Link from "next/link";

export default function Home() {
  // Array untuk foto guru (Pengganti @php $teachers = [...] di Blade)
  const teachers = [
    "tentang-kami-guru1.jpeg",
    "tentang-kami-guru2.jpeg",
    "tentang-kami-guru3.jpeg",
    "tentang-kami-guru4.jpeg",
    "guru - gabungan.jpeg",
    "guru - sd.jpeg",
    "guru - smp.jpeg",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-blue-950 pt-24 pb-32 md:pt-48 md:pb-56 overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/gedung-sekolah.png"
            alt="Gedung Sekolah GMK"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-110 md:scale-100 opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Perbaikan: Memastikan pembungkus utama memaksa seluruh komponen di dalamnya flex-col dan rata tengah */}
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
            
            {/* JUDUL UTAMA - Perbaikan class untuk konsistensi text-center */}
            <h1 className="w-full text-center flex flex-col items-center justify-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-normal mb-6 tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
              <span className="block text-center w-full">
                Sekolah
              </span>
              <span className="inline-block text-center max-w-full bg-gradient-to-r from-blue-400 via-blue-100 to-emerald-400 bg-clip-text text-transparent italic py-2 px-2 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Global Maju Khatulistiwa
              </span>
            </h1>

            {/* YAYASAN */}
            <div className="inline-block mb-6 text-center">
              <span className="px-5 py-2 text-white text-sm md:text-base font-bold bg-black/40 backdrop-blur-md rounded-full border border-white/30 shadow-lg shadow-black/50 inline-block">
                Yayasan Global Cahaya Khatulistiwa
              </span>
            </div>

            {/* TAGLINE */}
            <p className="w-full text-center text-lg md:text-2xl lg:text-4xl font-black leading-relaxed mb-12 tracking-tight bg-gradient-to-r from-white via-blue-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Membangun Generasi <br className="md:hidden" /> Berbasis Entrepreneurship
            </p>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
              <Link
                href="#unit"
                className="group w-full sm:w-auto px-10 py-5 bg-white text-blue-950 rounded-2xl md:rounded-3xl font-black text-base md:text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                Jelajahi Unit
                <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-2"></i>
              </Link>

              <Link
                href="/spmb-2026"
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl md:rounded-3xl font-black text-base md:text-lg border border-blue-500/50 hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/40 flex items-center justify-center"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-24 md:py-48 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full blur-[100px] -mr-32 -mt-32"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-10 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 md:mb-6 block">
                Our Excellence
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-blue-950 leading-tight">
                Membentuk Karakter Entrepreneur Unggul
              </h2>
            </div>
            <p className="text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed">
              "Kami percaya setiap anak unik. Dengan pendekatan personal dan penguatan karakter, kami menyiapkan mereka menjadi pemimpin masa depan yang berintegritas."
            </p>
          </div>

          {/* Grid Baris 1 (Poin 1-3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Tangguh dan Resilien</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Mampu menghadapi tekanan, kegagalan, and ketidakpastian dengan sikap tenang, positif, dan produktif.
              </p>
            </div>

            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Cerdas Melihat Peluang</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Terlatih membaca tren dan melihat peluang menjadi nilai dengan kepekaan pasar yang kuat.
              </p>
            </div>

            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-chess"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Pemikir Strategis</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Menyusun rencana matang dan mengambil keputusan dengan analisis yang tepat.
              </p>
            </div>
          </div>

          {/* Grid Baris 2 (Poin 4-6) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-comments"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Komunikatif dan Persuasif</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Mampu menyampaikan ide dengan jelas, membangun relasi, dan memengaruhi secara positif.
              </p>
            </div>

            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-arrows-rotate"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Adaptif terhadap Perubahan</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Fleksibel dan cepat beradaptasi dengan perubahan zaman.
              </p>
            </div>

            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-scale-balanced"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Bertanggung Jawab dan Berintegritas</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Menjunjung tinggi kejujuran dan tanggung jawab dalam setiap tindakan.
              </p>
            </div>
          </div>

          {/* Grid Baris 3 (Poin 7-8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-heart-pulse"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Sehat Secara Holistik</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Menjaga keseimbangan fisik, mental, dan emosional.
              </p>
            </div>

            <div className="group bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-5">Berdampak bagi Masyarakat</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Berorientasi pada kontribusi sosial dan dampak positif bagi lingkungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tenaga Pendidik */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block text-center md:text-left">
            Our Educators
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 text-center md:text-left">
            Mengenal Tenaga Pendidik Kami
          </h2>
        </div>

        <div className="relative flex overflow-hidden">
          {/* Marquee Pertama */}
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {teachers.map((teacher, index) => (
              <div
                key={`row1-${index}`}
                className="w-[400px] md:w-[700px] aspect-video flex-shrink-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-xl mx-2"
              >
                <img
                  src={`/images/${teacher}`}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  alt="Guru GMK"
                />
              </div>
            ))}
          </div>

          {/* Marquee Kedua (Untuk loop tanpa putus) */}
          <div className="flex animate-marquee gap-8 whitespace-nowrap ml-8">
            {teachers.map((teacher, index) => (
              <div
                key={`row2-${index}`}
                className="w-[400px] md:w-[700px] aspect-video flex-shrink-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-xl mx-2"
              >
                <img
                  src={`/images/${teacher}`}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  alt="Guru GMK"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Section */}
      <section id="unit" className="py-24 md:py-40 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black text-blue-950 mb-6">Unit Pendidikan</h2>
            <div className="w-16 md:w-24 h-2 bg-gradient-to-r from-blue-600 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* TK - BACKGROUND KUNING */}
            <div className="relative group">
              <div className="relative bg-amber-400 border border-amber-300 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3.5rem] shadow-lg hover:shadow-xl transition-all">
                <div className="overflow-hidden rounded-3xl md:rounded-[2.5rem] mb-6 md:mb-8 h-48 md:h-64">
                  <img
                    src="/images/tentangkami-tk.PNG"
                    alt="TK Unit"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <span className="px-4 py-1.5 bg-white text-amber-700 text-[10px] font-black uppercase rounded-full tracking-widest shadow-sm">
                  PAUD & TK
                </span>
                <h3 className="text-xl md:text-2xl font-black text-blue-950 mt-4 mb-2">
                  Early Childhood Education
                </h3>
                <p className="text-blue-950/80 text-xs md:text-sm leading-relaxed mb-6 font-semibold">
                  Pendidikan Anak Usia Dini (KB/TK) dengan metode eksplorasi yang menyenangkan.
                </p>
                <Link
                  href="/unit/tk"
                  className="flex items-center justify-center w-full py-4 bg-white text-amber-600 font-black rounded-2xl hover:bg-amber-500 hover:text-white transition-all shadow-sm"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>

            {/* SD - BACKGROUND MERAH */}
            <div className="relative group">
              <div className="relative bg-rose-600 border border-rose-500 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3.5rem] shadow-lg hover:shadow-xl transition-all">
                <div className="overflow-hidden rounded-3xl md:rounded-[2.5rem] mb-6 md:mb-8 h-48 md:h-64">
                  <img
                    src="/images/kazebo-sd.jpeg"
                    alt="SD Unit"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <span className="px-4 py-1.5 bg-white text-rose-600 text-[10px] font-black uppercase rounded-full tracking-widest shadow-sm">
                  Sekolah Dasar
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mt-4 mb-2">
                  Elementary School
                </h3>
                <p className="text-rose-100 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                  Fokus pada literasi, numerasi, pembentukan karakter dan kemandirian siswa.
                </p>
                <Link
                  href="/unit/sd/kurikulum"
                  className="flex items-center justify-center w-full py-4 bg-white text-rose-600 font-black rounded-2xl hover:bg-rose-700 hover:text-white transition-all shadow-sm"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>

            {/* SMP - BACKGROUND BIRU */}
            <div className="relative group">
              <div className="relative bg-blue-600 border border-blue-500 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3.5rem] shadow-lg hover:shadow-xl transition-all">
                <div className="overflow-hidden rounded-3xl md:rounded-[2.5rem] mb-6 md:mb-8 h-48 md:h-64">
                  <img
                    src="/images/murid - smp.jpeg"
                    alt="SMP Unit"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <span className="px-4 py-1.5 bg-white text-blue-600 text-[10px] font-black uppercase rounded-full tracking-widest shadow-sm">
                  Sekolah Menengah Pertama
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mt-4 mb-2">
                  Junior High School
                </h3>
                <p className="text-blue-100 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                  Mempersiapkan remaja menjadi pemimpin masa depan melalui riset dan inovasi.
                </p>
                <Link
                  href="/unit/smp"
                  className="flex items-center justify-center w-full py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-700 hover:text-white transition-all shadow-sm"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto relative rounded-[2.5rem] md:rounded-[4rem] bg-blue-600 overflow-hidden p-8 md:p-20 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8">
              Siap Bergabung?
            </h2>
            <p className="text-blue-100 text-sm md:text-xl mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
              Pendaftaran Terbatas Tahun Ajaran 2026/2027.
            </p>

            <div className="flex flex-col gap-4 md:gap-8 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                <a
                  href="https://wa.me/6289694224226"
                  target="_blank"
                  relative="noopener noreferrer"
                  className="group px-6 py-4 bg-white text-blue-700 rounded-xl md:rounded-2xl font-black shadow-xl flex items-center justify-between gap-4 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <i className="fab fa-whatsapp text-xl text-emerald-500"></i>
                    <span className="text-sm md:text-base">WhatsApp KB/TK</span>
                  </div>
                  <i className="fas fa-chevron-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                </a>

                <a
                  href="https://wa.me/6282154199008"
                  target="_blank"
                  relative="noopener noreferrer"
                  className="group px-6 py-4 bg-white text-blue-700 rounded-xl md:rounded-2xl font-black shadow-xl flex items-center justify-between gap-4 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <i className="fab fa-whatsapp text-xl text-emerald-500"></i>
                    <span className="text-sm md:text-base">WhatsApp SD/SMP</span>
                  </div>
                  <i className="fas fa-chevron-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CSS Injector untuk Keyframes Spesifik Halaman Ini */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes soft-zoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-soft-zoom {
            animation: soft-zoom 40s infinite ease-in-out;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `
      }} />
    </>
  );
}