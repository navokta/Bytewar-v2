'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle, FaSignOutAlt, FaCamera } from 'react-icons/fa';

export default function Header() {
  const [showStickyTagline, setShowStickyTagline] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  // Simulated user state (Replace with your real auth later)
  const [user, setUser] = useState({
    isLoggedIn: true, // ← change to false to simulate logged-out state
    email: 'sakshi@example.com',
    phone: '+91 9876543210',
    photo: null, // Replace with uploaded photo URL
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyTagline(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-50 relative shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 transform group-hover:rotate-6">
                <Image src="/logo.png" alt="Bytewar Logo" width={56} height={56} className="object-cover" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Bytewar</h1>
              <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Center Tagline */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 animate-pulse"></div>
              <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 px-8 py-3 rounded-full shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <h2 className="text-sm md:text-base font-bold tracking-wide text-center text-white">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Bytewar</span> - The Coding Warzone ⚔️
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Auth/Profile + Mobile Menu */}
          <div className="flex items-center gap-3">

            {!user.isLoggedIn ? (
              <Link href="/login">
                <button className="relative px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                  Login / Signup
                </button>
              </Link>
            ) : (
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full border-2 border-purple-500 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  onClick={() => setShowProfilePopup(!showProfilePopup)}
                >
                  {user.photo ? (
                    <Image src={user.photo} alt="User" width={40} height={40} className="object-cover rounded-full" />
                  ) : (
                    <FaUserCircle className="text-white text-3xl" />
                  )}
                </button>

                {/* Popup */}
                {showProfilePopup && (
                  <div className="absolute right-0 mt-3 w-72 bg-gray-900 border border-gray-700 rounded-xl shadow-xl p-4 z-50 animate-fade-in backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500">
                        {user.photo ? (
                          <Image src={user.photo} alt="User" width={56} height={56} className="object-cover" />
                        ) : (
                          <FaUserCircle className="text-white text-4xl" />
                        )}
                        <label className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer hover:bg-purple-700">
                          <FaCamera className="text-white text-xs" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const url = URL.createObjectURL(file);
                                setUser(prev => ({ ...prev, photo: url }));
                              }
                            }}
                          />
                        </label>
                      </div>
                      <div className="text-white text-sm">
                        <p className="font-semibold">{user.email}</p>
                        <p className="text-gray-400">{user.phone}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setUser({ isLoggedIn: false, email: '', phone: '', photo: null });
                        setShowProfilePopup(false);
                      }}
                      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-pink-600 rounded-lg hover:from-red-700 hover:to-pink-700 transition"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white rounded-sm my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-gray-700 px-4 py-3">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-sm font-semibold text-white text-center">
                Welcome to <span className="text-blue-400 font-bold">Bytewar</span> ⚔️
              </h2>
              {!user.isLoggedIn ? (
                <Link href="/login" className="w-full max-w-xs">
                  <button className="w-full px-4 py-2.5 text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Login / Signup
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setUser({ isLoggedIn: false, email: '', phone: '', photo: null });
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-sm font-bold bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Sticky Tagline on Scroll */}
      {showStickyTagline && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30"></div>
            <div className="relative backdrop-blur-lg bg-gray-900/80 border border-gray-700 px-6 py-2.5 rounded-full shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-sm font-bold tracking-wide text-center text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Bytewar</span> - The Coding Warzone ⚔️
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        header {
          backdrop-filter: blur(12px);
          background-color: rgba(17, 24, 39, 0.85);
        }
      `}</style>
    </>
  );
}
