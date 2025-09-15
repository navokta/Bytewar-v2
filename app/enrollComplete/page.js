'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EnrollCompletePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-30 animate-ping-slow"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Animated icon */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-ping-slow"></div>
              <div className="absolute inset-4 border-4 border-cyan-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Registration Phase Complete
          </h1>
          
          {/* Message */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The registration period for BYTEWAR Hackathon has ended. Thank you to everyone who registered!
          </p>
          
          {/* Additional info */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 mb-10 border border-gray-700/50 animate-glow">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-300">What's Next?</h2>
            <p className="text-gray-300 mb-4">
              Stay tuned for the upcoming phases of the hackathon. Selected participants will be notified soon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <div className="flex items-center text-sm sm:text-base">
                <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Video Submission: Sept 16-18</span>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Presentation: Sept 21-24</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </main>
      
      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(6, 182, 212, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.8);
          }
        }
        .animate-float {
          animation: float 10s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
    <Footer />
    </div>
  );
};

export default EnrollCompletePage;