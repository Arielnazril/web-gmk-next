import React from "react";
import Link from "next/link";

export default function TentangKami() {
  const misi = [
    "Mengembangkan peserta didik yang beriman, berakhlak mulia, dan berkarakter tangguh.",
    "Mengembangkan kemampuan berpikir kritis, kreatif, dan inovatif dalam menghadapi tantangan.",
    "Mengembangkan literasi, numerasi, dan keterampilan digital untuk membaca peluang.",
    "Mengembangkan kemandirian, jiwa kewirausahaan, dan semangat berprestasi.",
    "Mengembangkan kepedulian sosial, kolaborasi, dan kontribusi nyata bagi masyarakat.",
    "Mengembangkan nilai kebangsaan dan integritas menuju Indonesia Emas 2045.",
  ];

  const units = [
    {
      number: "01",
      title: "KB & TK",
      sub: "Early Childhood Education",
      img: "tentangkami-tk.PNG",
      accent: "from-yellow-400 to-yellow-500",
      text_accent: "text-yellow-700",
      desc: "Fokus pada pengembangan motorik, sosial, dan kreativitas dini melalui metode pembelajaran berbasis eksplorasi yang menyenangkan.",
      link: "/unit/tk",
    },
    {
      number: "02",
      title: "Sekolah Dasar",
      sub: "Elementary",
      img: "kurikulum-sd2.PNG",
      accent: "from-blue-600 to-indigo-700",
      text_accent: "text-blue-600",
      desc: "Penguatan literasi dan numerasi dasar dengan integrasi kurikulum Nasional untuk mengasah kemandirian serta logika berpikir siswa.",
      link: "/unit/sd/kurikulum",
    },
    {
      number: "03",
      title: "Sekolah Menengah Pertama",
      sub: "Junior High",
      img: "murid - smp.jpeg",
      accent: "from-emerald-500 to-teal-700",
      text_accent: "text-emerald-600",
      desc: "Pengembangan kepemimpinan strategis dan penguasaan teknologi mutakhir untuk mempersiapkan siswa menjadi inovator masa depan.",
      link: "/unit/smp",
    },
  ];

  const gmk_educators = [
    {
      img: "tentang-kami-guru4.jpeg",
      name: "Tim Tenaga Pengajar",
      role: "Guru Akademik - TK",
    },
    {
      img: "guru - sd.jpeg",
      name: "Tim Tenaga Pengajar",
      role: "Guru Akademik - SD",
    },
    {
      img: "guru - smp.jpeg",
      name: "Tim Tenaga Pengajar",
      role: "Guru Akademik - SMP",
    },
    {
      img: "guru - gabungan.jpeg",
      name: "Tim Tenaga Pengajar",
      role: "Guru Akademik - Gabungan",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -right-24 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-md text-blue-700 rounded-full border border-blue-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.2em]">
                  Mengenal Lebih Dekat
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-blue-950 leading-[1.1] tracking-tight">
                Dedikasi Kami untuk <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400">
                  Pendidikan Berbasis Entrepreneurship
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                Sekolah Global Maju Khatulistiwa (GMK) adalah institusi pendidikan terpadu di jantung Kota Pontianak yang berkomitmen mencetak individu berakhlak mulia, cerdas secara intelektual, dan memiliki jiwa kepemimpinan yang tangguh.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
                <div className="p-6 bg-white/70 backdrop-blur-sm rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:bg-white transition-all duration-500 group">
                  <div className="text-4xl font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform duration-500">
                    12
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">
                    Tahun Pengalaman
                  </div>
                </div>
                <div className="p-6 bg-white/70 backdrop-blur-sm rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 hover:bg-white transition-all duration-500 group">
                  <div className="text-4xl font-black text-emerald-500 mb-1 group-hover:scale-110 transition-transform duration-500">
                    100%
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">
                    Kurikulum Nasional
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group animate-float">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-[50px] blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-700"></div>

              <div className="relative rounded-[40px] md:rounded-[55px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(30,58,138,0.25)] border-[10px] md:border-[20px] border-white bg-white transform transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1">
                <div className="aspect-[16/10] md:aspect-video w-full overflow-hidden">
                  <img
                    src="/images/gedung-sekolah.png"
                    alt="Gedung Sekolah Global Maju Khatulistiwa"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-60 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 md:p-12 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-[0.2em]">
                      Our School
                    </span>
                    <h4 className="text-white font-bold text-xl md:text-2xl tracking-wide">
                      Kota Pontianak, Kalimantan Barat
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
          <svg width="400" height="400" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="1" fill="none" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">
              Our Core Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">
              Visi & Misi Utama
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-blue-600 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Visi */}
            <div className="group p-10 md:p-14 bg-blue-950 rounded-[50px] text-white relative overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.3)] hover:shadow-blue-900/40 transition-all duration-500">
              <div className="absolute -top-16 -right-16 p-8 opacity-[0.07] group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                <i className="fas fa-eye text-[240px]"></i>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-5">
                  <span className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-[15deg] transition-transform duration-500">
                    <i className="fas fa-star text-white text-xl"></i>
                  </span>
                  <span className="tracking-tight text-3xl">Visi Kami</span>
                </h3>
                <p className="text-blue-50 text-2xl md:text-3xl leading-relaxed font-light italic">
                  ""Peserta didik yang memiliki semangat tinggi belajar dan tumbuh kembang sebagai insan yang cerdas ceria, mandiri, kreatif, berkarakter dan berwawasan global menuju persiapan generasi Indonesia Emas 2045.""
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="p-10 md:p-14 bg-white rounded-[50px] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-emerald-200 transition-all duration-500">
              <h3 className="text-2xl font-bold text-blue-950 mb-10 flex items-center gap-5">
                <span className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm transform group-hover:-rotate-6 transition-transform">
                  <i className="fas fa-list-check text-xl"></i>
                </span>
                <span className="tracking-tight text-3xl">Misi Kami</span>
              </h3>
              <ul className="space-y-8">
                {misi.map((item, index) => (
                  <li key={index} className="flex gap-6 group">
                    <span className="flex-none w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-sm font-black text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                      0{index + 1}
                    </span>
                    <p className="text-slate-600 font-medium text-lg leading-relaxed group-hover:text-blue-950 transition-colors">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Pendidikan */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-slate-100 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 font-bold uppercase tracking-[0.4em] text-[10px]">
                Educational Excellence
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Jenjang Pendidikan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">
                Sekolah Global Maju Khatulistiwa
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {units.map((u, index) => (
              <div key={index} className="group relative bg-white rounded-[60px] p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_50px_120px_-20px_rgba(30,58,138,0.2)] transition-all duration-700 hover:-translate-y-6 flex flex-col min-h-[650px]">
                <span className="absolute top-10 right-10 text-9xl font-black text-slate-50 group-hover:text-slate-100 transition-colors duration-700 select-none -z-0">
                  {u.number}
                </span>

                <div className="relative z-10 w-full aspect-[4/5] rounded-[45px] overflow-hidden shadow-2xl mb-10">
                  <img
                    src={`/images/${u.img}`}
                    alt={u.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold tracking-widest text-xs uppercase">
                      {u.sub} PROGRAM
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex-grow px-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-1 bg-gradient-to-r ${u.accent} rounded-full`}></div>
                    <span className={`font-bold ${u.text_accent} tracking-[0.2em] text-[11px] uppercase`}>
                      {u.sub}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-6 tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {u.title}
                  </h3>

                  <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
                    {u.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto px-2 pb-2">
                  <Link
                    href={u.link}
                    className="flex items-center justify-between w-full group/btn bg-slate-950 text-white p-2 rounded-[30px] hover:bg-blue-700 transition-all duration-500 shadow-xl"
                  >
                    <span className="ml-6 font-extrabold tracking-wide text-sm">PELAJARI PROGRAM</span>
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-blue-700 transition-all duration-500">
                      <i className="fas fa-arrow-right text-lg"></i>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guru & Staff */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            Guru & Staff Pengajar
          </h2>
          <p className="text-slate-500 italic">
            "Mewujudkan Generasi Berintegritas, Unggul, dan Berjiwa Entrepreneur"
          </p>
          <div className="w-24 h-[3px] bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {gmk_educators.map((educator, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-[40px] shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
                  <img
                    src={`/images/${educator.img}`}
                    alt={educator.name}
                    className="w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.3em] text-blue-600 uppercase block mb-2">
                      Global Maju Khatulistiwa
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                      {educator.name}
                    </h3>
                    <p className="text-slate-500 font-semibold text-sm mt-2 uppercase tracking-widest">
                      {educator.role}
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profil Karakter */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-blue-50 rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-20 relative overflow-hidden border border-blue-100">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200/30 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-6 md:mb-8 tracking-tight leading-tight">
                  Profil karakter <span className="text-blue-600">Lulusan Basis Entrepreneurship</span>
                </h2>

                <div className="space-y-6 md:space-y-8 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar-light">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                      <i className="fas fa-rocket text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">1. Tangguh dan Resilien</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Mampu menghadapi tekanan, kegagalan, dan ketidakpastian dengan sikap tenang, positif, dan produktif.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-500 shrink-0">
                      <i className="fas fa-coins text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">2. Cerdas Melihat Peluang</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Terlatih membaca tren dan melihat peluang menjadi nilai dengan kepekaan pasar yang kuat.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                      <i className="fas fa-chess text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">3. Pemikir Strategis</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Mampu menyusun rencana jangka panjang, menganalisis situasi secara komprehensif, dan mengeksekusi keputusan dengan pertimbangan yang matang dan terukur.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 shrink-0">
                      <i className="fas fa-comments text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">4. Komunikatif dan Persuasif</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Menguasai seni berbicara, mendengar, dan memengaruhi secara positif. Mampu mempresentasikan ide dengan meyakinkan, membangun relasi yang bermakna, dan berkolaborasi lintas budaya.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cyan-500 shrink-0">
                      <i className="fas fa-sync-alt text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">5. Adaptif terhadap Perubahan</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Fleksibel dalam menghadapi perubahan, terampil dalam belajar hal baru, dan tidak terjebak pada zona nyaman. Selalu siap bertransformasi sesuai tuntutan zaman.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-rose-500 shrink-0">
                      <i className="fas fa-shield-alt text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">6. Bertanggung Jawab dan Berintegritas</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Menghargai komitmen, menjunjung tinggi kejujuran, dan berani menanggung konsekuensi dari setiap keputusan. Memahami bahwa kepercayaan adalah aset terbesar seorang entrepreneur.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-500 shrink-0">
                      <i className="fas fa-heartbeat text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">7. Sehat Secara Holistik</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Menjaga keseimbangan fisik, mental, dan emosional sebagai pondasi produktivitas jangka panjang. Memahami bahwa entrepreneur terbaik adalah mereka yang merawat diri sendiri dengan baik.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-500 shrink-0">
                      <i className="fas fa-globe-asia text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg md:text-xl mb-1 md:mb-2">8. Berdampak bagi Masyarakat</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Memiliki kepedulian sosial yang tinggi dan dorongan kuat untuk menciptakan perubahan positif. Menjadikan bisnis sebagai alat untuk memajukan kehidupan orang banyak, bukan sekadar mengejar keuntungan pribadi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-10 rounded-[30px] md:rounded-[45px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blue-100 lg:sticky lg:top-8">
                <i className="fas fa-quote-left text-3xl md:text-4xl text-blue-100 mb-4 md:mb-6"></i>
                <blockquote className="text-lg md:text-2xl font-medium text-blue-900 italic leading-relaxed mb-6 md:mb-8">
                  "Di sebuah sekolah berbasis entrepreneurship, anak-anak tidak hanya duduk mendengar, tetapi bangkit untuk mencoba. Mereka belajar bahwa ide kecil bisa tumbuh menjadi sesuatu yang besar jika berani diwujudkan. Di ruang kelas, kegagalan tidak ditertawakan, melainkan dirayakan sebagai langkah menuju keberhasilan.
                  <br /><br />
                  Di sana, setiap siswa diajak berpikir terbuka, melihat dunia dengan cara yang berbeda, dan menemukan peluang di tengah tantangan. Mereka tidak hanya dipersiapkan untuk masa depan, tetapi dilatih untuk menciptakan masa depan itu sendiri.
                  <br /><br />
                  Kelak, dari sekolah inilah lahir generasi yang tidak takut bermimpi dan tidak ragu bertindak—generasi yang mampu berinovasi, berdiri mandiri, dan memberi dampak nyata bagi kehidupan."
                </blockquote>

                <div className="flex items-center gap-4 md:gap-5 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-user-tie text-xl md:text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-blue-950 text-base md:text-lg leading-tight">Ketua Yayasan</p>
                    <p className="text-[9px] md:text-[11px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                      Global Cahaya Khatulistiwa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gedung-sekolah.png"
            alt="Background Gedung GMK"
            className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-[5000ms] brightness-[0.6] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-emerald-900/20"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-[60px] md:rounded-[100px] border border-white/10 p-8 md:p-20 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 text-center space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full animate-bounce">
                  <span className="text-emerald-300 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                    Join Our Family
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                  Siap Bergabung Bersama <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-emerald-300">
                    Keluarga Besar GMK?
                  </span>
                </h2>
                <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                  Pilih unit pendidikan yang sesuai untuk mendapatkan informasi pendaftaran lebih lanjut melalui admin WhatsApp kami.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-6">
                <a
                  href="https://wa.me/6289694224226"
                  target="_blank"
                  className="group/wa p-6 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-md hover:bg-white/10 hover:border-emerald-400/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center text-2xl group-hover/wa:scale-110 group-hover/wa:bg-emerald-500 group-hover/wa:text-white transition-all duration-500">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">Pendaftaran PAUD</h4>
                    <p className="text-blue-100/50 text-xs">0896-9422-4226</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/6282154199008"
                  target="_blank"
                  className="group/wa p-6 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-md hover:bg-white/10 hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-2xl group-hover/wa:scale-110 group-hover/wa:bg-blue-500 group-hover/wa:text-white transition-all duration-500">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">Pendaftaran SD</h4>
                    <p className="text-blue-100/50 text-xs">0821-5419-9008</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/6289694224226"
                  target="_blank"
                  className="group/wa p-6 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-md hover:bg-white/10 hover:border-yellow-400/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 bg-yellow-500/20 text-yellow-400 rounded-2xl flex items-center justify-center text-2xl group-hover/wa:scale-110 group-hover/wa:bg-yellow-500 group-hover/wa:text-white transition-all duration-500">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">Pendaftaran SMP</h4>
                    <p className="text-blue-100/50 text-xs">0896-9422-4226</p>
                  </div>
                </a>

                <a
                  href="/pdf/brosur.pdf"
                  target="_blank"
                  className="group/doc p-6 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-md hover:bg-white/10 hover:border-white/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center text-2xl group-hover/doc:scale-110 group-hover/doc:bg-white group-hover/doc:text-blue-950 transition-all duration-500">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">E-Brochure</h4>
                    <p className="text-blue-100/50 text-xs">Info Lengkap</p>
                  </div>
                </a>
              </div>

              <div className="pt-8">
                <Link
                  href="/hubungi-kami"
                  className="group/main relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-blue-950 rounded-[30px] font-black text-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden w-full md:w-auto"
                >
                  <span className="relative z-10">DAFTAR SEKARANG</span>
                  <i className="fas fa-paper-plane relative z-10 text-blue-600 group-hover/main:translate-x-2 group-hover/main:-translate-y-2 transition-transform duration-500"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white translate-y-full group-hover/main:translate-y-0 transition-transform duration-500"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      }} />
    </main>
  );
}