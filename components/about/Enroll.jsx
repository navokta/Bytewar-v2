import React from 'react';
import Link from 'next/link';

const WowCallToActionSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative px-6 py-2 bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-full">
                <span className="text-green-400 font-bold">JOIN BYTEWAR</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 animate-gradient-x">
              READY TO JOIN THE BATTLE?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Become part of India's most <span className="text-green-400 font-bold">prestigious coding competition</span> and elevate your skills to the next level.
          </p>
        </div>

        {/* CTA Button */}
        <div className="group relative inline-block">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          <Link href="/enroll" className="relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full text-lg shadow-2xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Enroll Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>

        {/* Stats Preview */}
       
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 text-4xl animate-bounce animation-delay-1000">⚔️</div>
      <div className="absolute bottom-1/4 right-10 text-4xl animate-bounce animation-delay-2000">🔥</div>
      <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse animation-delay-3000">💡</div>

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
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
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
    </section>
  );
};

export default WowCallToActionSection;