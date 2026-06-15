"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function VisiMisiSection() {
  const pathname = usePathname();

  const isTk = pathname.startsWith("/unit/tk");
  const isSd = pathname.startsWith("/unit/sd") || pathname.startsWith("/sd");
  const isSmp = pathname.startsWith("/unit/smp");

  // 1. Judul dan Deskripsi Atas Dinamis
  let titleNode = (
    <>
      <span className="block text-slate-500 text-xs md:text-sm font-semibold tracking-widest mb-1">Selamat Datang di</span>
      <span>Sekolah <span className="text-blue-600">Global Maju Khatulistiwa</span></span>
    </>
  );
  let descriptionText = "";

  if (isTk) {
    titleNode = (
      <>
        <span className="block text-slate-500 text-xs md:text-sm font-semibold tracking-widest mb-1">Selamat Datang di</span>
        <span style={{ color: "#EAB308" }}>PAUD Global Maju Khatulistiwa</span>
      </>
    );
    descriptionText = "Selamat datang di PAUD Global Maju Khatulistiwa, tempat menanamkan benih kreativitas dan jiwa kewirausahaan sejak dini. Bersama kami, anak-anak tumbuh menjadi pembelajar mandiri yang ceria, inovatif, dan berkarakter kuat melalui metode pembelajaran berbasis entrepreneurship.";
  } else if (isSd) {
    titleNode = (
      <>
        <span className="block text-slate-500 text-xs md:text-sm font-semibold tracking-widest mb-1">Selamat Datang di</span>
        <span className="text-[#7A122E]">SD Global Maju Khatulistiwa</span>
      </>
    );
    descriptionText = "Selamat datang di SD Global Maju Khatulistiwa. Fokus kami adalah membangun fondasi karakter dan akademik yang kuat, serta mengasah bakat minat anak melalui lingkungan belajar yang menyenangkan dan disiplin.";
  } else if (isSmp) {
    titleNode = (
      <>
        <span className="block text-slate-500 text-xs md:text-sm font-semibold tracking-widest mb-1">Selamat Datang di</span>
        <span className="text-blue-600">SMP Global Maju Khatulistiwa</span>
      </>
    );
    descriptionText = "Selamat datang di SMP Global Maju Khatulistiwa. Kami menyiapkan generasi remaja yang kritis, berwawasan global, dan mahir teknologi, dengan tetap menjunjung tinggi nilai-nilai integritas diri dan etika luhur.";
  }

  // 2. Skema Gaya Dinamis Berdasarkan Jalur Rute
  let glowClass = "bg-gradient-to-r from-blue-700 to-cyan-500";
  let visionIconContainer = "bg-blue-50 text-blue-700 border-blue-100";
  let visionTextClass = "text-blue-700";
  let visionIconColor = "text-blue-900";
  let missionIconBox = "bg-blue-600 text-white shadow-blue-600/20";
  let missionListHover = "hover:bg-blue-50/50 hover:border-blue-100";
  let missionIconColor = "text-blue-600";
  let targetCardBg = "bg-slate-900";
  let targetIconColor = "text-blue-500";
  let targetTitleIconBox = "bg-cyan-500 text-slate-900 shadow-cyan-500/20";
  let targetBadgeClass = "bg-cyan-500/20 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-slate-900";
  let motoGlowClass = "bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500";
  let motoCardBg = "bg-slate-900";
  let motoLabelColor = "text-cyan-400";
  let scrollbarThumbColor = "#2563eb";
  let scrollbarLightThumbColor = "#06b6d4";

  if (isTk) {
    glowClass = "bg-gradient-to-r from-amber-500 to-yellow-400";
    visionIconContainer = "bg-amber-50 text-amber-600 border-amber-100";
    visionTextClass = "text-amber-600";
    visionIconColor = "text-amber-900";
    missionIconBox = "bg-amber-500 text-white shadow-amber-500/20";
    missionListHover = "hover:bg-amber-50/50 hover:border-amber-100";
    missionIconColor = "text-amber-500";
    targetCardBg = "bg-amber-950";
    targetIconColor = "text-amber-400";
    targetTitleIconBox = "bg-amber-400 text-amber-950 shadow-amber-400/20";
    targetBadgeClass = "bg-amber-400/20 text-amber-600 group-hover:bg-amber-400 group-hover:text-amber-950";
    motoGlowClass = "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400";
    motoCardBg = "bg-amber-950";
    motoLabelColor = "text-amber-300";
    scrollbarThumbColor = "#F59E0B";
    scrollbarLightThumbColor = "#FBBF24";
  } else if (isSd) {
    glowClass = "bg-gradient-to-r from-rose-700 to-red-500";
    visionIconContainer = "bg-rose-50 text-rose-600 border-rose-100";
    visionTextClass = "text-rose-600";
    visionIconColor = "text-rose-900";
    missionIconBox = "bg-rose-600 text-white shadow-rose-600/20";
    missionListHover = "hover:bg-rose-50/50 hover:border-rose-100";
    missionIconColor = "text-rose-500";
    targetCardBg = "bg-rose-950";
    targetIconColor = "text-rose-400";
    targetTitleIconBox = "bg-rose-500 text-white shadow-rose-500/20";
    targetBadgeClass = "bg-rose-400/20 text-rose-600 group-hover:bg-rose-500 group-hover:text-white";
    motoGlowClass = "bg-gradient-to-r from-rose-700 via-red-600 to-rose-500";
    motoCardBg = "bg-rose-950";
    motoLabelColor = "text-rose-300";
    scrollbarThumbColor = "#F43F5E";
    scrollbarLightThumbColor = "#FB7185";
  }

  const misiData = [
    { text: "Mengembangkan peserta didik yang beriman, berakhlak mulia, dan berkarakter tangguh.", icon: "fa-shield-alt" },
    { text: "Mengembangkan kemampuan berpikir kritis, kreatif, dan inovatif dalam menghadapi tantangan.", icon: "fa-brain" },
    { text: "Mengembangkan literasi, numerasi, dan keterampilan digital untuk membaca peluang.", icon: "fa-book-open" },
    { text: "Mengembangkan kemandirian, jiwa kewirausahaan, dan semangat berprestasi.", icon: "fa-rocket" },
    { text: "Mengembangkan kepedulian sosial, kolaborasi, dan kontribusi nyata bagi masyarakat.", icon: "fa-users" },
    { text: "Mengembangkan nilai kebangsaan dan integritas menuju Indonesia Emas 2045.", icon: "fa-flag" }
  ];

  const tujuanData = [
    "Meningkatnya peserta didik yang menunjukkan perilaku beriman, berakhlak mulia, dan berkarakter tangguh dalam kehidupan sehari-hari.",
    "Meningkatnya kemampuan berpikir kritis, kreatif, dan inovatif yang ditunjukkan melalui hasil karya dan penyelesaian masalah.",
    "Tercapainya peningkatan kemampuan literasi, numerasi, dan keterampilan digital pada peserta didik.",
    "Meningkatnya kemandirian, jiwa kewirausahaan, dan prestasi peserta didik di bidang akademik maupun nonakademik.",
    "Terwujudnya sikap peduli sosial, kemampuan kolaborasi, serta keterlibatan aktif dalam kegiatan masyarakat.",
    "Tertanamnya nilai kebangsaan dan integritas yang tercermin dalam sikap dan perilaku peserta didik."
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100">
        <h1 className="text-xl md:text-3xl font-extrabold text-blue-950 mb-6 uppercase tracking-tight leading-tight">
          {titleNode}
        </h1>

        {descriptionText && (
          <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
            {descriptionText}
          </p>
        )}

        <div className="mt-16 space-y-12">
          {/* VISI CARD */}
          <div className="relative group">
            <div className={`absolute -inset-1 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 ${glowClass}`}></div>
            <div className="relative p-8 md:p-12 bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <i className={`fas fa-lightbulb text-9xl -rotate-12 ${visionIconColor}`}></i>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner border ${visionIconContainer}`}>
                  <i className="fas fa-eye text-3xl"></i>
                </div>
                <div className="text-center md:text-left">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-2 block ${visionTextClass}`}>
                    Our Vision
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter">Visi</h2>
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium italic">
                    "Menjadikan peserta didik yang tangguh dalam menghadapi tantangan, cerdas dalam membaca peluang, dan berdampak nyata bagi kemajuan bangsa menyongsong{" "}
                    <span className={`font-bold ${visionTextClass}`}>Indonesia Emas 2045</span>."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MISI & TUJUAN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* MISI CARD */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${missionIconBox}`}>
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Misi</h3>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                {misiData.map((item, index) => (
                  <div key={index} className={`flex gap-4 p-4 rounded-2xl transition-colors border border-transparent group ${missionListHover}`}>
                    <div className={`font-black text-sm mt-1 group-hover:scale-110 transition-transform ${missionIconColor}`}>
                      <i className={`fas ${item.icon} w-5`}></i>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TUJUAN CARD */}
            <div className={`rounded-[2.5rem] shadow-2xl p-8 md:p-10 relative overflow-hidden text-white ${targetCardBg}`}>
              <div className={`absolute top-0 right-0 p-8 opacity-10 pointer-events-none ${targetIconColor}`}>
                <i className="fas fa-bullseye text-8xl"></i>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${targetTitleIconBox}`}>
                  <i className="fas fa-check-double text-xl"></i>
                </div>
                <h3 className="text-2xl font-light uppercase tracking-tighter text-white">Tujuan</h3>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar-light">
                {tujuanData.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-all group">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${targetBadgeClass}`}>
                      <span className="text-[10px] font-black">{index + 1}</span>
                    </div>
                    <p className="text-slate-800 text-sm leading-relaxed font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOTO SEKOLAH */}
          <div className="relative group mt-12">
            <div className={`absolute -inset-1 rounded-[2.5rem] blur opacity-15 group-hover:opacity-25 transition duration-1000 ${motoGlowClass}`}></div>
            <div className={`relative p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl text-center overflow-hidden ${motoCardBg}`}>
              <div className="absolute -bottom-6 -right-6 p-6 opacity-[0.03] pointer-events-none text-white">
                <i className="fas fa-graduation-cap text-9xl"></i>
              </div>
              <div className="absolute -top-6 -left-6 p-6 opacity-[0.03] pointer-events-none text-white">
                <i className="fas fa-heart text-9xl"></i>
              </div>

              <div className="flex justify-center mb-6">
                <span className={`inline-block text-[20px] font-black uppercase tracking-[0.4em] bg-white/10 px-4 py-1.5 rounded-full border border-white/5 ${motoLabelColor}`}>
                  Moto
                </span>
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white uppercase italic leading-relaxed max-w-5xl mx-auto block text-center whitespace-normal md:whitespace-nowrap">
                {isTk ? (
                  <>
                    <span className="text-yellow-300 transition-colors duration-300 hover:text-yellow-200">Semangat Belajar</span>,{" "}
                    <span className="text-amber-400 transition-colors duration-300 hover:text-amber-300">Rajin Berkarya</span>, <span className="text-white">dan</span>{" "}
                    <span className="text-yellow-400 transition-colors duration-300 hover:text-yellow-200">Senang Berbagi</span>
                  </>
                ) : isSd ? (
                  <>
                    <span className="text-rose-400 transition-colors duration-300 hover:text-rose-300">Semangat Belajar</span>,{" "}
                    <span className="text-red-400 transition-colors duration-300 hover:text-red-300">Rajin Berkarya</span>, <span className="text-white">dan</span>{" "}
                    <span className="text-orange-400 transition-colors duration-300 hover:text-orange-300">Senang Berbagi</span>
                  </>
                ) : (
                  <>
                    <span className="text-blue-400 transition-colors duration-300 hover:text-blue-300">Semangat Belajar</span>,{" "}
                    <span className="text-amber-400 transition-colors duration-300 hover:text-amber-300">Rajin Berkarya</span>, <span className="text-white">dan</span>{" "}
                    <span className="text-emerald-400 transition-colors duration-300 hover:text-emerald-300">Senang Berbagi</span>
                  </>
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: ${scrollbarThumbColor} !important;
        }
        .custom-scrollbar-light::-webkit-scrollbar-thumb {
          background-color: ${scrollbarLightThumbColor} !important;
        }
      `}</style>
    </section>
  );
}