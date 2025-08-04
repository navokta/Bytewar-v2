"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function BannerPage() {
  useEffect(() => {
    // Create floating particles
    const particles = [];
    const colors = ['#76b900', '#8B5CF6', '#EC4899', '#3B82F6'];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full particle';
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      document.querySelector('.particle-container')?.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div>
        {/* <Header /> */}
    <div className="relative overflow-hidden">
    
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <Head>
          <title>Bytewar Hackathon | 10,000+ Prizes</title>
          <meta name="description" content="Join the ultimate NVIDIA Hackathon with huge cash prizes" />
        </Head>

        {/* Particle Container */}
        <div className="particle-container absolute inset-0 z-0 overflow-hidden"></div>

        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-green-600 rounded-full mix-blend-soft-light filter blur-[60px] md:blur-[100px] opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[70px] md:blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto h-screen flex flex-col md:flex-row items-center justify-center px-4">
          
          {/* Image Column - Perfectly responsive without cutting */}
          <div className="flex-1 w-full h-1/2 md:h-full flex items-center justify-center relative">
            <div className="relative w-full h-full max-w-2xl max-h-[70vh]">
              <Image
                src="/banner.png"
                alt="NVIDIA Hackathon"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex-1 w-full h-1/2 md:h-full flex flex-col items-center md:items-start justify-center text-center md:text-left p-4 md:p-8 space-y-6">
            {/* NVIDIA Hackathon Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black text-white mt-30">
                <span className="text-green-500">Bytewar</span> HACKATHON
              </h1>
              <p className="text-2xl md:text-4xl font-bold text-yellow-400 animate-pulse">
                10,000+ CASH PRIZE
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-md">
              Join the ultimate coding battle powered by NVIDIA. Showcase your AI and GPU programming skills to win amazing prizes and recognition!
            </p>

            {/* CTA Button */}
            <Link href="/enroll" legacyBehavior>
              <a className="mt-0 inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-purple-600 rounded-full text-white font-bold text-lg md:text-xl shadow-lg hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 active:scale-95 group">
                <span className="relative z-10 flex items-center">
                  Register Now 
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </Link>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              {['CUDA', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-black/50 text-green-400 rounded-full text-sm font-mono border border-green-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, 10px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
        }
        
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .particle {
          animation: particle-float ${Math.random() * 10 + 5}s ease-in-out infinite;
          animation-delay: ${Math.random() * 5}s;
        }

        /* NVIDIA brand glow */
        .text-green-500 {
          text-shadow: 0 0 10px rgba(118, 185, 0, 0.5);
        }
      `}</style>
      
      
    </div>
    {/* <Footer /> */}
    </div>
  );
}