"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  // Efek ganti warna navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu mobile otomatis setiap pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDesktopDropdownOpen(false);
  }, [pathname]);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Fungsi untuk cek rute aktif
  const isActive = (path: string) => pathname === path;
  const isUnitActive = pathname.startsWith('/unit');

  return (
    <>
      {/* =========================================
          DESKTOP & TABLET NAVBAR
      ========================================= */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-white py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Kiri: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/images/logo-gmk.png" alt="Logo GMK" className="h-10 transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Tengah: Menu Navigasi Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-[13px] font-bold tracking-wide transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
              Beranda
            </Link>
            <Link href="/tentang-kami" className={`text-[13px] font-bold tracking-wide transition-colors ${isActive('/tentang-kami') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
              Tentang Kami
            </Link>

            {/* Dropdown Jenjang Pendidikan */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <button className={`flex items-center gap-2 text-[13px] font-bold tracking-wide transition-colors ${isUnitActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
                Jenjang Pendidikan <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {/* DROPDOWN DESKTOP */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 transition-all duration-300 origin-top ${isDesktopDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                
                {/* Unit TK */}
                <Link href="/unit/tk" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-yellow-50 transition-colors group/item">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center group-hover/item:scale-110 transition-transform"><i className="fas fa-cubes text-xs"></i></div>
                  <div>
                    <p className="text-xs font-black text-slate-800">Unit PAUD</p>
                    <p className={`text-[10px] font-medium ${pathname.startsWith('/unit/tk') ? 'text-yellow-600' : 'text-slate-500'}`}>KB & TK</p>
                  </div>
                </Link>
                
                {/* Unit SD - Arahkan ke rute dasar (Unit SD), React akan mengurus Active State-nya */}
                <Link href="/unit/sd" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-rose-50 transition-colors group/item">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center group-hover/item:scale-110 transition-transform"><i className="fas fa-pencil-alt text-xs"></i></div>
                  <div>
                    <p className="text-xs font-black text-slate-800">Unit SD</p>
                    <p className={`text-[10px] font-medium ${pathname.startsWith('/unit/sd') ? 'text-rose-600' : 'text-slate-500'}`}>Sekolah Dasar</p>
                  </div>
                </Link>
                
                {/* Unit SMP */}
                <Link href="/unit/smp" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/item">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover/item:scale-110 transition-transform"><i className="fas fa-graduation-cap text-xs"></i></div>
                  <div>
                    <p className="text-xs font-black text-slate-800">Unit SMP</p>
                    <p className={`text-[10px] font-medium ${pathname.startsWith('/unit/smp') ? 'text-blue-600' : 'text-slate-500'}`}>Sekolah Menengah</p>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="/berita" className={`text-[13px] font-bold tracking-wide transition-colors ${isActive('/berita') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
              Berita
            </Link>
            <Link href="/hubungi-kami" className={`text-[13px] font-bold tracking-wide transition-colors ${isActive('/hubungi-kami') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
              Hubungi Kami
            </Link>
          </div>

          {/* Kanan: Tombol & Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/spmb-2026" className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all shadow-lg shadow-blue-500/30 active:scale-95">
              SPMB 2026
            </Link>
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>

        </div>
      </nav>

      {/* =========================================
          MOBILE MENU OVERLAY (PIXEL PERFECT)
      ========================================= */}
      <div className={`fixed inset-0 bg-white z-[999] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto flex flex-col lg:hidden`}>
        
        {/* Header Mobile Menu */}
        <div className="flex items-center justify-between p-6 bg-white sticky top-0 z-10 border-b border-slate-100">
          <img src="/images/logo-gmk.png" alt="Logo GMK" className="h-8" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
            <i className="fas fa-chevron-left text-lg"></i>
          </button>
        </div>

        {/* Body Mobile Menu */}
        <div className="p-6 space-y-4 flex-grow">
          
          <Link href="/" className={`flex justify-between items-center px-6 py-4 rounded-2xl font-black text-sm tracking-wide transition-all ${isActive('/') ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}>
            <span>Beranda</span> <i className="fas fa-home opacity-80"></i>
          </Link>
          
          <Link href="/tentang-kami" className={`flex justify-between items-center px-6 py-4 rounded-2xl font-black text-sm tracking-wide transition-all ${isActive('/tentang-kami') ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}>
            <span>Tentang Kami</span> <i className="fas fa-info-circle opacity-80"></i>
          </Link>

          {/* Dropdown Mobile - Menyesuaikan UI Asli */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
            <button onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} className={`w-full flex justify-between items-center px-6 py-4 font-black text-sm tracking-wide transition-all ${isUnitActive ? 'text-blue-600' : 'text-slate-700'}`}>
              <div className="flex items-center gap-3">
                <i className="fas fa-university"></i>
                <span>Jenjang Pendidikan</span>
              </div>
              <i className={`fas fa-chevron-down opacity-80 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {/* Konten Dropdown Mobile */}
            <div className={`transition-all duration-300 ease-in-out ${isMobileDropdownOpen ? 'max-h-[400px] opacity-100 pb-4 px-4' : 'max-h-0 opacity-0 px-4 pb-0'}`}>
              <div className="flex flex-col gap-2 mt-2">
                
                {/* Opsi TK */}
                <Link href="/unit/tk" className={`flex items-center gap-4 p-4 rounded-r-xl border-l-[4px] transition-all ${pathname.includes('/unit/tk') ? 'bg-yellow-100/50 border-yellow-500 shadow-sm' : 'bg-white border-yellow-300 hover:bg-yellow-50'}`}>
                  <i className="fas fa-cubes text-yellow-500 text-sm"></i>
                  <span className={`text-[13px] font-black ${pathname.includes('/unit/tk') ? 'text-slate-900' : 'text-slate-700'}`}>TK Global Maju Khatulistiwa</span>
                </Link>

                {/* Opsi SD */}
                <Link href="/unit/sd" className={`flex items-center gap-4 p-4 rounded-r-xl border-l-[4px] transition-all ${pathname.includes('/unit/sd') ? 'bg-rose-100/50 border-rose-500 shadow-sm' : 'bg-white border-rose-300 hover:bg-rose-50'}`}>
                  <i className="fas fa-pencil-alt text-rose-500 text-sm"></i>
                  <span className={`text-[13px] font-black ${pathname.includes('/unit/sd') ? 'text-slate-900' : 'text-slate-700'}`}>SD Global Maju Khatulistiwa</span>
                </Link>

                {/* Opsi SMP */}
                <Link href="/unit/smp" className={`flex items-center gap-4 p-4 rounded-r-xl border-l-[4px] transition-all ${pathname.includes('/unit/smp') ? 'bg-blue-100/50 border-blue-500 shadow-sm' : 'bg-white border-blue-300 hover:bg-blue-50'}`}>
                  <i className="fas fa-graduation-cap text-blue-500 text-sm"></i>
                  <span className={`text-[13px] font-black ${pathname.includes('/unit/smp') ? 'text-slate-900' : 'text-slate-700'}`}>SMP Global Maju Khatulistiwa</span>
                </Link>

              </div>
            </div>
          </div>

          <Link href="/berita" className={`flex justify-between items-center px-6 py-4 rounded-2xl font-black text-sm tracking-wide transition-all ${isActive('/berita') ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}>
            <span>Berita</span> <i className="fas fa-newspaper opacity-80"></i>
          </Link>
          
          <Link href="/hubungi-kami" className={`flex justify-between items-center px-6 py-4 rounded-2xl font-black text-sm tracking-wide transition-all ${isActive('/hubungi-kami') ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}>
            <span>Hubungi Kami</span> <i className="fas fa-phone-alt opacity-80"></i>
          </Link>

          <div className="pt-6">
            <Link href="/spmb-2026" className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-black tracking-widest uppercase text-[13px] shadow-xl shadow-blue-500/30 transition-colors">
              Daftar Sekarang
            </Link>
          </div>
        </div>

        {/* Footer Mobile Menu */}
        <div className="p-8 bg-white text-center mt-auto border-t border-slate-100">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Hubungi Admin</p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://www.instagram.com/globalmajukhatulistiwa" target="_blank" className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:text-pink-500 hover:bg-pink-50 transition-all shadow-sm">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.facebook.com/p/Sekolah-Global-Maju-Khatulistiwa-GMK-100057668282912/" target="_blank" className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            
            <div className="w-px h-8 bg-slate-200 mx-2"></div>
            
            <a href="https://wa.me/6289694224226" target="_blank" className="relative w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
              <span className="absolute -top-3 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase shadow-sm">TK</span>
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="https://wa.me/6282154199008" target="_blank" className="relative w-12 h-12 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm">
              <span className="absolute -top-3 bg-blue-500 text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase shadow-sm">SD/SMP</span>
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}