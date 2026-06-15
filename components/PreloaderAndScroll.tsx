"use client";

import React, { useState, useEffect } from "react";

export default function PreloaderAndScroll() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [progressWidth, setProgressWidth] = useState("w-0");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Jalankan progress bar
    const progressTimeout = setTimeout(() => {
      setProgressWidth("w-full");
    }, 100);

    const handleLoad = () => {
      setTimeout(() => {
        setShowPreloader(false);
        document.body.style.overflow = "auto";
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(progressTimeout);
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* PRELOADER CONTAINER */}
      {showPreloader && (
        <div id="preloader" className="transition-all duration-700">
          <div className="loader-logo text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-600 blur-[60px] opacity-20 rounded-full animate-pulse"></div>
              <img
                src="/images/logo-gmk.png"
                alt="Logo GMK"
                className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
              />
            </div>
            <div className="mt-10">
              <div className="w-48 h-1.5 bg-slate-100 rounded-full mx-auto overflow-hidden">
                <div
                  className={`bg-blue-700 h-full transition-all duration-700 ${progressWidth}`}
                ></div>
              </div>
              <p className="text-blue-900 mt-6 font-bold text-[11px] tracking-[0.5em] uppercase animate-pulse">
                Memuat Masa Depan
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        id="backToTop"
        className={`fixed bottom-8 right-8 z-[90] w-14 h-14 bg-blue-700 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-blue-800 hover:-translate-y-2 transition-all active:scale-90 shadow-blue-900/30 ${
          showBackToTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}