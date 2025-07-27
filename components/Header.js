'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle, FaSignOutAlt, FaCamera } from 'react-icons/fa';

// Helper function to get the auth token (adjust based on how you store it)
const getToken = () => {
  if (typeof window !== 'undefined') {
    try {
      return localStorage.getItem('authToken');
    } catch (e) {
      console.warn("Could not access token storage", e);
      return null;
    }
  }
  return null;
};

// Helper function to remove the auth token (logout)
const removeToken = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('authToken');
    } catch (e) {
      console.warn("Could not remove token from storage", e);
    }
  }
};

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const popupRef = useRef(null);

  const [user, setUser] = useState({
    isLoggedIn: false,
    data: null,
    loading: true
  });

  const fetchUserData = useCallback(async () => {
    const token = getToken();

    if (!token) {
      setUser({ isLoggedIn: false, data: null, loading: false });
      return;
    }

    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (response.ok) {
        const userData = await response.json();
        setUser({
          isLoggedIn: true,
          data: {
            ...userData.user,
            profilePicture: userData.user.profilePicture 
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${userData.user.profilePicture}`
              : null
          },
          loading: false
        });
      } else {
        console.error("Failed to fetch user data", response.status);
        removeToken();
        setUser({ isLoggedIn: false, data: null, loading: false });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser({ isLoggedIn: false, data: null, loading: false });
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Handle outside click for profile popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowProfilePopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle logout
  const handleLogout = () => {
    removeToken();
    setUser({ isLoggedIn: false, data: null, loading: false });
    setShowProfilePopup(false);
  };

  // const handlePhotoUpload = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   try {
  //     const formData = new FormData();
  //     formData.append('profilePicture', file);

  //     const token = getToken();
  //     if (!token) {
  //       throw new Error('No authentication token found');
  //     }

  //     const response = await fetch('/api/auth/upload-profile', {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to upload profile picture');
  //     }

  //     const data = await response.json();
      
  //     setUser(prev => ({
  //       ...prev,
  //       data: {
  //         ...prev.data,
  //         profilePicture: data.profilePictureUrl
  //       }
  //     }));

  //   } catch (error) {
  //     console.error("Error uploading profile picture:", error);
  //     alert("Failed to upload profile picture. Please try again.");
  //   }
  // };

  // Calculate active tab position
  const getActiveTabPosition = () => {
    const tabs = ['/', '/about', '/timeline', '/themes'];
    const index = tabs.findIndex(tab => pathname.startsWith(tab));
    return index >= 0 ? index : 0;
  };

  return (
    <>
      {/* Main Header - Now sticky on all devices */}
      <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-50 fixed top-0 left-0 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-3 group">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 transform group-hover:rotate-3">
                  <Image
                    src="/logo.png"
                    alt="Bytewar Logo"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-1 -left-1 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-purple-400 rounded-tl-lg"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-purple-400 rounded-tr-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 md:w-3 md:h-3 border-b-2 border-l-2 border-purple-400 rounded-bl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-purple-400 rounded-br-lg"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Bytewar
                </h1>
              </div>
            </Link>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center items-center px-4">
            <nav className="relative flex items-center space-x-1 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-full px-2 py-1 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-sm animate-pulse"></div>
              
              <div className="relative flex space-x-1">
                <Link 
                  href="/" 
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    pathname.startsWith('/about') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About
                </Link>
                <Link 
                  href="/timeline" 
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    pathname.startsWith('/timeline') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Timeline
                </Link>
                <Link 
                  href="/themes" 
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    pathname.startsWith('/themes') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Themes
                </Link>
              </div>
              
              {/* Active indicator */}
              <div 
                className="absolute bottom-0 h-0.5 bg-purple-500 rounded-full transition-all duration-300"
                style={{
                  width: '60px',
                  transform: `translateX(${getActiveTabPosition() * 80}px)`
                }}
              ></div>
            </nav>
          </div>

          {/* Right side - Auth/User Section */}
          <div className="flex items-center gap-3">
            {user.loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
            ) : !user.isLoggedIn ? (
              <Link href="/login">
                <button
                  className="relative px-4 py-2 md:px-5 md:py-2.5 text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 overflow-hidden group"
                >
                  <span className="relative z-10">Login / Signup</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </Link>
            ) : (
              <div className="relative">
                <button
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-purple-500 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:scale-105"
                  onClick={() => setShowProfilePopup(!showProfilePopup)}
                  aria-label="User menu"
                >
                  {user.data?.profilePicture ? (
                    <Image
                      src={user.data.profilePicture}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="text-white text-xl md:text-2xl mx-auto my-auto" />
                  )}
                </button>

                {/* Profile Popup */}
                {showProfilePopup && (
                  <div
                    ref={popupRef}
                    className="absolute right-0 mt-2 w-64 md:w-72 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-4 z-50 animate-fade-in-down backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500 flex-shrink-0">
                        {user.data?.profilePicture ? (
                          <Image
                            src={user.data.profilePicture}
                            alt="Profile"
                            width={70}
                            height={70}
                            className="object-cover"
                          />
                        ) : (
                          <FaUserCircle className="text-white text-4xl m-auto text-center mt-2" />
                        )}
                        {/* <label className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full cursor-pointer hover:bg-purple-700 transition-colors shadow-md">
                          <FaCamera className="text-white text-xs" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePhotoUpload}
                          />
                        </label> */}
                      </div>
                      <div className="text-white text-sm overflow-hidden">
                        <p className="font-semibold truncate">
                          {user.data?.name || user.data?.username || 'You'}
                        </p>
                        <p className="text-gray-400 truncate">{user.data?.email}</p>
                        {user.data?.phone && (
                          <p className="text-gray-500 text-xs truncate">{user.data.phone}</p>
                        )}
                      </div>
                    </div>

                    <nav className="space-y-1">
                      <Link
                        href="/profile"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                        onClick={() => setShowProfilePopup(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/enroll"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                        onClick={() => setShowProfilePopup(false)}
                      >
                        Create Team
                      </Link>
                    </nav>

                    <hr className="my-3 border-gray-700" />

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-pink-600 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
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
            <div className="flex flex-col items-center gap-4">
              {/* Mobile Navigation Links */}
              <div className="w-full max-w-xs space-y-2">
                <Link
                  href="/"
                  className={`block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === '/' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    pathname.startsWith('/about')
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/timeline"
                  className={`block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    pathname.startsWith('/timeline')
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Timeline
                </Link>
                <Link
                  href="/themes"
                  className={`block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    pathname.startsWith('/themes')
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Themes
                </Link>
              </div>

              {user.loading ? (
                <div className="w-full max-w-xs py-2 text-center text-gray-400">Loading...</div>
              ) : !user.isLoggedIn ? (
                <Link href="/login" className="w-full max-w-xs" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-4 py-2.5 text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]">
                    Login / Signup
                  </button>
                </Link>
              ) : (
                <div className="w-full max-w-xs space-y-3">
                  <div className="flex items-center gap-3 bg-gray-700/50 p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 flex-shrink-0">
                      {user.data?.profilePicture ? (
                        <Image src={user.data.profilePicture} alt="Profile" width={40} height={40} className="object-cover" />
                      ) : (
                        <FaUserCircle className="text-white text-2xl m-auto mt-1.5" />
                      )}
                    </div>
                    <div className="text-white text-sm overflow-hidden">
                      <p className="font-semibold truncate">{user.data?.name || user.data?.username || 'User'}</p>
                      <p className="text-gray-400 text-xs truncate">{user.data?.email}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-sm font-bold bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Add padding to the top of the main content to account for the fixed header */}
      <div className="pt-14 md:pt-20"></div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.2s ease-out forwards;
        }
        header {
          backdrop-filter: blur(12px);
          background-color: rgba(17, 24, 39, 0.9);
        }
      `}</style>
    </>
  );
}