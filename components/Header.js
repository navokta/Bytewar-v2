'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [showStickyTagline, setShowStickyTagline] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyTagline(window.scrollY > 50); // Show after scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className="w-full bg-sky-950 shadow-sm border-b border-sky-900 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-sky-800">
              <Image
                src="/logo.png"
                alt="Bitewar Logo"
                width={48}
                height={48}
              />
            </div>
          </div>

          {/* Tagline */}
          <h1 className="text-lg md:text-xl font-bold text-center text-sky-400 tracking-wider hidden sm:block">
            Bitewar: <span className="text-sky-50">Code. Compete. Conquer.</span>
          </h1>

          {/* Login / Signup */}
          <div>
            <Link href="/login">
              <button className="px-4 py-2 text-sm font-medium bg-sky-600 text-white rounded-md hover:bg-sky-700 transition">
                Login / Signup
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Floating Sticky Tagline (glassmorphic) */}
      {showStickyTagline && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300">
            <h2 className="text-sm md:text-base font-semibold tracking-wide text-center text-sky-200">
              Bitewar: <span className="text-white">Code. Compete. Conquer.</span>
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
