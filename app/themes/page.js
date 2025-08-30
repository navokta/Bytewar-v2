// app/themes/page.js
"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link'; 
import React from 'react';

const AllThemesPage = () => {
  const themes = [
  {
    id: 'CYBERSECURITY-PRIVACY',
    title: 'CYBERSECURITY & PRIVACY',
    description: 'Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.',
    icon: '🔐',
    color: 'from-purple-600 to-indigo-600',
    glow: 'shadow-purple-500/30'
  },
  { 
    id: 'smart-education',
    title: 'SMART EDUCATION',
    description: 'Smart education, a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/30'
  },
  {
    id: 'healthcare-innovation',
    title: 'HEALTHCARE INNOVATION',
    description: 'Innovative solutions in healthcare to improve patient care, diagnostics, and treatment methods.',
    icon: '🏥',
    color: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/30'
  },
  {
    id: 'artificial-intelligence',
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Explore cutting-edge AI solutions for real-world problems and future technological advancement.',
    icon: '🤖',
    color: 'from-red-500 to-orange-500',
    glow: 'shadow-red-500/30'
  },
  {
    id: 'fintech-solutions',
    title: 'FINTECH SOLUTIONS',
    description: 'Revolutionary financial technologies to improve and automate the delivery of financial services.',
    icon: '💰',
    color: 'from-teal-500 to-cyan-500',
    glow: 'shadow-teal-500/30'
  },
  {
    id: 'smart-cities',
    title: 'SMART CITIES',
    description: 'Integrated technology solutions to create efficient and sustainable urban environments.',
    icon: '🏙️',
    color: 'from-indigo-500 to-purple-500',
    glow: 'shadow-indigo-500/30'
  },
  {
    id: 'legaltech',
    title: 'LEGAL TECH',
    description: 'Innovative technology solutions transforming legal services, including automation, smart contracts, compliance tools, and access to justice platforms.',
    icon: '⚖️',
    color: 'from-indigo-600 to-blue-600',
    glow: 'shadow-indigo-500/30'
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-x-hidden">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header & Content */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 pb-12 sm:pb-20">
        {/* Header Section - Responsive */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              HACKATHON THEMES
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Explore the diverse challenges and opportunities across various domains
          </p>
        </div>

        {/* Themes Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {themes.map((theme) => (
            <div key={theme.id} className="group relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}></div>
              
              {/* Card - Enhanced Responsive Design */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2 min-h-[280px] sm:min-h-[320px]">
                {/* Icon Container - Responsive */}
                <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${theme.color} text-xl sm:text-2xl mb-4 sm:mb-6 transform transition-all duration-500 group-hover:scale-110 mx-auto sm:mx-0`}>
                  {theme.icon}
                </div>
                
                {/* Title - Responsive */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500 text-center sm:text-left leading-tight">
                  {theme.title}
                </h3>
                
                {/* Description - Responsive */}
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-500 flex-grow text-center sm:text-left leading-relaxed">
                  {theme.description}
                </p>
                
                {/* Button - Enhanced Mobile Design */}
                <Link href={`/themes/${theme.id}`} className="mt-4 sm:mt-6">
                  <button className={`w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r ${theme.color} text-white font-bold text-sm sm:text-base rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}>
                    <span className="hidden sm:inline">Explore Now</span>
                    <span className="sm:hidden">Explore</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </Link>
                
                {/* Animated Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Responsive */}
        <div className="text-center mt-12 sm:mt-20 px-2">
          <div className="inline-flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 max-w-4xl mx-auto">
            <div className="text-3xl sm:text-4xl">🎯</div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 px-2">Ready to Choose Your Challenge?</h3>
              <p className="text-gray-400 max-w-xl text-sm sm:text-base px-4">
                Join ByteWar and bring your innovative solutions to life
              </p>
            </div>
            <Link 
              href="/BannerPage" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-sm sm:text-base transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/30 shadow-lg"
            >
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer - Full Width, No Padding from Container */}
      <footer className="relative z-10 w-full">
        <Footer />
      </footer>

      {/* Custom Styles - Enhanced for Mobile */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .group:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default AllThemesPage;