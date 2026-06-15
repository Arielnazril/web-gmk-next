"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BeritaPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const news = [
    {
      title: "Penerimaan Siswa Baru Sekolah Global Maju Khatulistiwa Tahun Ajaran Baru",
      cat: "Pendaftaran",
      img: "/images/berita-penerimaan-siswa.png",
      date: "26 Mei 2026",
      link: "/pdf/brosur.pdf",
    },
    {
      title: "PRIMARY 6 GRADUATION: Merayakan Kelulusan Angkatan Terbaik Sekolah Global Maju Khatulistiwa",
      cat: "Kegiatan Sekolah",
      img: "/images/PRIMARY 6 GRADUATION Sekolah Global Maju Khatulistiwa.png",
      date: "24 Mei 2026",
      link: "https://youtu.be/82LH8qD5UCk?si=Zpm5ri5wc35_iBhG",
    },
    {
      title: "Lomba Dance Kota Pontianak 2024: Penampilan Memukau Tim Zumba Bestie",
      cat: "Prestasi",
      unit: "SMP",
      img: "/images/Lomba Dance Kota Pontianak 2024 Zumba Bestie.png",
      date: "20 Mei 2026",
      link: "https://youtu.be/PegMh9Zb8dk?si=YULF-JF5A8Ltl3GW",
    },
    {
      title: "TALK SHOW GMK WITH AYUMI & AZKA",
      cat: "Prestasi",
      img: "/images/talkshow-gmk.png",
      date: "20 Mei 2026",
      link: "https://youtu.be/fjP2IMMxQp8?si=3kucVdKq3isDl6Go",
    },
    {
      title: "Lomba Dance Kota Pontianak 2024: Prestasi Neotar Kids Pontianak Melejit Tinggi",
      cat: "Prestasi",
      img: "/images/Lomba Dance Kota Pontianak 2024  Neotar Kids Pontianak Melejit.png",
      date: "18 Mei 2026",
      link: "https://youtu.be/xWWJ9MfMutI?si=TIz1nSQDjDL8zrnn",
    },
  ];

  // Logic pemotongan item per halaman persis seperti get paginatedNews() di Alpine.js
  const paginatedNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="relative min-h-screen bg-[#FDFDFD]">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px] -z-10"></div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-[11px] font-black tracking-[0.3em] uppercase rounded-full border border-blue-100 shadow-sm">
            Berita & Pembaruan Terkini
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight">
            Kabar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-emerald-500">Global Maju</span>
          </h1>

          {/* Description */}
          <p className="text-slate-500 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2 bg-slate-50/50 rounded-r-2xl">
            "Jendela informasi resmi mengenai prestasi siswa, inovasi kurikulum, dan geliat aktivitas akademik di seluruh unit Sekolah Global Maju Khatulistiwa."
          </p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-center max-w-5xl mx-auto">
            {paginatedNews.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/40 flex flex-col justify-between"
              >
                <div>
                  {/* LOGIKA KONDISIONAL BERDASARKAN KATEGORI */}
                  <div className={item.cat === "Pendaftaran" ? "relative h-auto bg-slate-100" : "relative h-72 overflow-hidden bg-slate-50"}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={item.cat === "Pendaftaran" ? "w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" : "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}
                    />

                    {/* Badges overlay */}
                    <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                      {item.unit && (
                        <span className="w-fit px-4 py-1.5 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-wider rounded-xl shadow-sm">
                          {item.unit}
                        </span>
                      )}
                      <span className="w-fit px-4 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider rounded-xl shadow-sm">
                        {item.cat}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                      <i className="far fa-calendar-alt text-blue-500"></i>
                      <span>{item.date}</span>
                      <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                      <span className="text-blue-600">Edukasi GMK</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-8 pb-8 pt-0">
                  <span className="text-sm font-black text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>{item.cat === "Pendaftaran" ? "Download Brosur PDF" : "Tonton di YouTube"}</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
          }
        `
      }} />
    </div>
  );
}