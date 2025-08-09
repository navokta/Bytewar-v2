"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BannerPage() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/banner.png',
    '/banner2.jpg',
  ];

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      <Header />

      <div className="relative overflow-hidden">
        <Head>
          <title>Bytewar Hackathon | 10,000+ Prizes</title>
          <meta name="description" content="Join the ultimate Bytewar Hackathon with huge cash prizes" />
        </Head>

        {/* Dark Gradient Background */}
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">

          {/* Background Blobs */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-green-600 rounded-full mix-blend-soft-light filter blur-[60px] md:blur-[100px] opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[70px] md:blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Main Content: Stack in Column */}
          <div className="relative z-10 container mx-auto px-4 pt-8 pb-4 flex flex-col min-h-screen">

            {/* 🔝 Text Section (On Top) */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-4 md:p-8 space-y-6">
              <div className="space-y-2 max-w-lg mx-auto">
                <h1 className="text-4xl md:text-6xl font-black text-white">
                  <span className="text-green-500">Bytewar</span> HACKATHON
                </h1>
                <p className="text-2xl md:text-4xl font-bold text-yellow-400 animate-pulse">
                  10,000+ CASH PRIZE
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
                Join the ultimate coding battle at Bytewar. Showcase your coding, communication, and presentation skills — from app and web development to innovative problem-solving — and earn recognition and opportunities!
              </p>

              {/* CTA Button */}
              <Link
                href="/enroll"
                className="mt-0 inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-purple-600 rounded-full text-white font-bold text-lg md:text-xl shadow-lg hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 active:scale-95 group"
              >
                <span className="relative z-10 flex items-center justify-center md:justify-start">
                  Register Now
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {['Coding', 'Communication', 'Problem-Solving', 'Teamwork', 'Innovation'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-black/50 text-green-400 rounded-full text-sm font-mono border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ⬇️ Image Carousel (Moved to Bottom) */}
            <div className="flex-shrink-0 w-full py-6 flex items-center justify-center">
              <div className="relative w-full max-w-xs md:max-w-sm aspect-[3/4] mx-auto">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
                  {images.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Image
                        src={src}
                        alt={`Bytewar Hackathon Slide ${index + 1}`}
                        fill
                        priority={index === 0}
                        className="object-contain bg-gray-900"
                        sizes="(max-width: 768px) 80vw, 30vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Optional Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white hidden md:flex items-center justify-center hover:bg-black/75 z-10"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white hidden md:flex items-center justify-center hover:bg-black/75 z-10"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>

          {/* Animations */}
          <style jsx global>{`
            @keyframes blob {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(0, 10px) scale(1.05); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.05); opacity: 0.9; }
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
            .text-green-500 {
              text-shadow: 0 0 10px rgba(118, 185, 0, 0.5);
            }
          `}</style>
        </div>
      </div>

      <Footer />
    </div>
  );
}