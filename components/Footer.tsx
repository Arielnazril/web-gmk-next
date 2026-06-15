import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-emerald-500 to-yellow-400"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-5">
              <img
                src="/images/logo-gmk.png"
                alt="Logo GMK"
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform hover:scale-105 duration-300"
              />
              <div className="h-12 w-[1.5px] bg-white/20 ml-1"></div>
              <div className="ml-1">
                <h3 className="font-black text-lg md:text-xl tracking-tight leading-none text-white">
                  GLOBAL MAJU
                </h3>
                <p className="text-[8px] md:text-[9px] text-blue-400 font-bold tracking-[0.3em] mt-1.5 uppercase opacity-90">
                  Khatulistiwa
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm font-medium">
              "Peserta didik yang memiliki semangat tinggi belajar dan tumbuh kembang sebagai insan yang cerdas ceria, mandiri, kreatif, berkarakter dan berwawasan global menuju persiapan generasi Indonesia Emas 2045."
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/globalmajukhatulistiwa" target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 border border-white/10 transition-all duration-300 group shadow-lg">
                <i className="fab fa-instagram text-xl group-hover:scale-110"></i>
              </a>
              <a href="https://www.facebook.com/p/Sekolah-Global-Maju-Khatulistiwa-GMK-100057668282912/" target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 border border-white/10 transition-all duration-300 group shadow-lg">
                <i className="fab fa-facebook-f text-xl group-hover:scale-110"></i>
              </a>
              <a href="https://www.youtube.com/@sekolahglobalmajukhatulistiwa" target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-red-600 border border-white/10 transition-all duration-300 group shadow-lg">
                <i className="fab fa-youtube text-xl group-hover:scale-110"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-10 text-sm uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-500 rounded-full"></span> Navigasi
            </h4>
            <ul className="space-y-5 text-slate-400 text-[15px] font-semibold">
              <li><Link href="/" className="hover:text-white hover:translate-x-2 transition-all inline-block">Beranda</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-white hover:translate-x-2 transition-all inline-block">Tentang Kami</Link></li>
              <li><Link href="/berita" className="hover:text-white hover:translate-x-2 transition-all inline-block">Berita & Artikel</Link></li>
              <li><Link href="/hubungi-kami" className="hover:text-white hover:translate-x-2 transition-all inline-block">Hubungi Kami</Link></li>
              <li><Link href="/spmb-2026" className="text-blue-400 font-bold hover:text-blue-300 transition-all inline-block">Pendaftaran 2026</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <h4 className="font-bold text-white mb-10 text-sm uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span> Hubungi Kami
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-[2rem] hover:bg-white/[0.08] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-0.5">Admin PAUD 1</p>
                    <a href="https://wa.me/6289694224226" target="_blank" className="text-white font-bold text-base hover:text-emerald-400 transition-colors">0896 9422 4226</a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-[2rem] hover:bg-white/[0.08] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-0.5">Admin PAUD 2</p>
                    <a href="https://wa.me/6285750304166" target="_blank" className="text-white font-bold text-base hover:text-emerald-400 transition-colors">0857 5030 4166</a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-[2rem] hover:bg-white/[0.08] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-0.5">Pendaftaran SD</p>
                    <a href="https://wa.me/6282154199008" target="_blank" className="text-white font-bold text-base hover:text-blue-400 transition-colors">0821 5419 9008</a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-[2rem] hover:bg-white/[0.08] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 text-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-yellow-500 uppercase tracking-widest mb-0.5">Pendaftaran SMP</p>
                    <a href="https://wa.me/6289694224226" target="_blank" className="text-white font-bold text-base hover:text-yellow-400 transition-colors">0896 9422 4226</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[13px] font-semibold">
            © 2026 <span className="text-slate-400">Global Maju Khatulistiwa</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-[13px] font-bold text-slate-500">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}