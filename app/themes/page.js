// app/themes/page.js
"use client";
import Link from 'next/link';
import React from 'react';

const AllThemesPage = () => {
  const themes = [
    {
      id: 'blockchain-cybersecurity',
      title: 'BLOCKCHAIN & CYBERSECURITY',
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
      id: 'disaster-management',
      title: 'DISASTER MANAGEMENT',
      description: 'Disaster management includes ideas related to risk mitigation, planning and management before, after or during a disaster.',
      icon: '🌪️',
      color: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/30'
    },
    {
      id: 'environmental-sustainability',
      title: 'ENVIRONMENTAL SUSTAINABILITY',
      description: 'Focus on sustainable practices to protect the environment and promote ecological balance.',
      icon: '🌍',
      color: 'from-yellow-500 to-amber-500',
      glow: 'shadow-yellow-500/30'
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
    }
  ];
//  Here is the code 
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              HACKATHON THEMES
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore the diverse challenges and opportunities across various domains
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${theme.color} text-2xl mb-6 transform transition-all duration-500 group-hover:scale-110`}>
                  {theme.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                  {theme.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 flex-grow">
                  {theme.description}
                </p>
                
                {/* Explore Button */}
                <Link href={`/themes/${theme.id}`} className="mt-6">
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${theme.color} text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2`}>
                    Explore Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-3xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Choose Your Challenge?</h3>
              <p className="text-gray-400 max-w-xl">
                Join ByteWar and bring your innovative solutions to life
              </p>
            </div>
            <Link 
              href="/enroll" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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
      `}</style>
    </div>
  );
};

export default AllThemesPage;