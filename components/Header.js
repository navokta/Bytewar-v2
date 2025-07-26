// components/Header.jsx (or app/components/Header.jsx depending on your structure)
'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle, FaSignOutAlt, FaCamera } from 'react-icons/fa';

// Helper function to get the auth token (adjust based on how you store it)
const getToken = () => {
  if (typeof window !== 'undefined') {
    try {
      // Example: getting token from localStorage
      return localStorage.getItem('authToken');
      // Or if using cookies (requires 'js-cookie' package):
      // import Cookies from 'js-cookie';
      // return Cookies.get('authToken');
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
      // If using cookies:
      // Cookies.remove('authToken');
    } catch (e) {
      console.warn("Could not remove token from storage", e);
    }
  }
};

export default function Header() {
  const [showStickyTagline, setShowStickyTagline] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const popupRef = useRef(null);

  // State for user data and loading state
  const [user, setUser] = useState({
    isLoggedIn: false,
    data: null, // Will hold the fetched user details
    loading: true // To show loading state initially
  });

  // Function to fetch user data
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
          'Authorization': `Bearer ${token}`, // Common pattern for JWT
          'Content-Type': 'application/json',
        },
        credentials: 'include' // Include cookies if needed
      });

      if (response.ok) {
        const userData = await response.json();
        setUser({
          isLoggedIn: true,
          data: userData.user || userData, // Adjust based on your API response structure
          loading: false
        });
      } else {
        // Token might be invalid or expired
        console.error("Failed to fetch user data", response.status);
        removeToken(); // Clear invalid token
        setUser({ isLoggedIn: false, data: null, loading: false });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Assume not logged in on error
      setUser({ isLoggedIn: false, data: null, loading: false });
    }
  }, []);

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Handle scroll for sticky tagline
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyTagline(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    // Optionally redirect to home or login page
    // window.location.href = '/'; // Or use Next.js router.push
  };

  // Handle profile photo upload (placeholder logic)
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you would upload the file to your server
      // and update the user's profile picture URL in the database.
      // For now, we'll just create a local object URL for preview.
      const url = URL.createObjectURL(file);
      setUser(prev => ({
        ...prev,
        data: {
          ...prev.data,
          // Assuming your user object has a 'profilePicture' field
          profilePicture: url
        }
      }));
      // TODO: Implement actual upload API call here
      alert("Photo selected. In a real app, this would be uploaded to the server.");
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-50 relative shadow-2xl">
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
                {/* Corner accents */}
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

          {/* Tagline - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center items-center px-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-20 animate-pulse"></div>
              <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <h2 className="text-xs md:text-sm font-bold tracking-wide text-center text-white whitespace-nowrap">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Bytewar</span> - The Coding Warzone ⚔️
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Auth/User Section */}
          <div className="flex items-center gap-3">
            {user.loading ? (
              // Show a loading spinner or placeholder while checking auth state
              <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
            ) : !user.isLoggedIn ? (
              // Show Login/Signup button if not logged in
              <Link href="/login">
                <button
                  className="relative px-4 py-2 md:px-5 md:py-2.5 text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 overflow-hidden group"
                >
                  <span className="relative z-10">Login / Signup</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </Link>
            ) : (
              // Show User Profile if logged in
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
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        ) : (
                          <FaUserCircle className="text-white text-4xl m-auto" />
                        )}
                        {/* Profile Picture Upload (simplified) */}
                        <label className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full cursor-pointer hover:bg-purple-700 transition-colors shadow-md">
                          <FaCamera className="text-white text-xs" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePhotoUpload}
                          />
                        </label>
                      </div>
                      <div className="text-white text-sm overflow-hidden">
                        {/* Display user name if available, otherwise email */}
                        <p className="font-semibold truncate">
                          {user.data?.name || user.data?.username || 'User'}
                        </p>
                        <p className="text-gray-400 truncate">{user.data?.email}</p>
                        {user.data?.phone && (
                          <p className="text-gray-500 text-xs truncate">{user.data.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Profile Menu Items */}
                    <nav className="space-y-1">
                      <Link
                        href="/profile"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                        onClick={() => setShowProfilePopup(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                        onClick={() => setShowProfilePopup(false)}
                      >
                        Settings
                      </Link>
                      {/* Add more links as needed */}
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
              {/* Mobile Tagline */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full w-full max-w-xs">
                <h2 className="text-sm font-bold tracking-wide text-center text-white">
                  Welcome to <span className="text-blue-400 font-bold">Bytewar</span> ⚔️
                </h2>
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
                  
                  <nav className="space-y-2">
                    <Link
                      href="/profile"
                      className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Settings
                    </Link>
                  </nav>

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

      {/* Floating Sticky Tagline */}
      {showStickyTagline && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in-down">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30"></div>
            <div className="relative backdrop-blur-lg bg-gray-900/80 border border-gray-700 px-5 py-2 rounded-full shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-xs md:text-sm font-bold tracking-wide text-center text-white whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Bytewar</span> - The Coding Warzone ⚔️
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translate(-50%, -10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
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