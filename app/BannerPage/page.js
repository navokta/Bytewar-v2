"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BannerPage() {
  return (
    <div>
        <Header />
   
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden relative">
      <Head>
        <title>ByteWar - Get Started</title>
        <meta name="description" content="Join ByteWar Hackathon" />
      </Head>

      {/* Background Elements (unchanged) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[60px] md:blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-pink-600 rounded-full mix-blend-soft-light filter blur-[70px] md:blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Image Container (phone view unchanged) */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/photo1.jpg"
              alt="ByteWar Hackathon"
              fill
              priority
              className="object-contain md:object-cover object-center"
              sizes="100vw"
            />
          </div>
          
          {/* Gradient Overlay (phone view unchanged) */}
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        {/* Call-to-Action (phone view unchanged, only desktop adjusted) */}
        <div className="absolute bottom-6 md:bottom-[30%] left-0 right-0 px-4 text-center animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-black mb-4 text-white drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              READY TO COMPETE?
            </span>
          </h1>
          <Link href="/enroll" legacyBehavior>
            <a className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 active:scale-95">
              Continue to Enrollment
              <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(0, 10px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-4000 {
          animation-delay: 2s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        /* Only desktop changes below */
        @media (min-width: 768px) {
          .md\:bottom-\[30\%\] {
            bottom: 30%;
          }
          .md\:h-48 {
            height: 12rem;
          }
        }
      `}</style>
    </div>
    <Footer />
     </div>
  );
}