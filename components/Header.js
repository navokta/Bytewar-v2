// components/WowHeader.jsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Assuming you have these icons available, or replace with alternatives
// import { FaUser, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';

const WowHeader = ({ user, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close profile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Themes', href: '/themes' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 bg-gray-900/90 backdrop-blur-lg border-b border-white/10' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 transform group-hover:rotate-6">
                {/* Replace with your actual logo image */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-full h-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BW</span>
                </div>
                {/* <Image src="/logo.png" alt="ByteWar Logo" fill className="object-cover" /> */}
              </div>
              <span className="ml-3 text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hidden sm:block">
                BYTEWAR
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center">
            {user?.loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
            ) : user?.isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
                      {user.data?.profilePicture ? (
                        <Image 
                          src={user.data.profilePicture} 
                          alt="Profile" 
                          fill 
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {user.data?.name?.charAt(0) || user.data?.username?.charAt(0) || 'U'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 py-2 z-50">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-white font-semibold truncate">{user.data?.name || user.data?.username || 'User'}</p>
                      <p className="text-gray-400 text-sm truncate">{user.data?.email}</p>
                    </div>
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link 
                      href="/dashboard" 
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-red-900/30 hover:text-red-400 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium">
                    Login
                  </button>
                </Link>
                <Link href="/enroll">
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                    Enroll
                  </button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="ml-4 md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default WowHeader;