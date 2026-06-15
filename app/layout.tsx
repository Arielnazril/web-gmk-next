import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisiMisiSection from "@/components/VisiMisiSection";
import PreloaderAndScroll from "@/components/PreloaderAndScroll";

export const metadata: Metadata = {
  title: "Sekolah Global Maju Khatulistiwa",
  description: "Sekolah Global Maju Khatulistiwa - TK, SD, SMP",
  icons: {
    icon: "/images/logo-gmk.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Impor Font Awesome via CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        {/* Google Fonts Manual Fallback jika diperlukan */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white antialiased">
        
        {/* Logika Preloader dan Pemicu Scroll */}
        <PreloaderAndScroll />

        {/* Bilah Navigasi Utama */}
        <Navbar />

        {/* Konten Halaman Dinamis (Pengganti @yield('content')) */}
        <main className="min-h-screen pt-24 md:pt-32">
          {children}
          
          {/* Section Informasi Visi Misi yang Selalu Ada di Bagian Bawah Layout */}
          <VisiMisiSection />
        </main>

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}