"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function BannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden relative">
      <Head>
        <title>ByteWar - Get Started</title>
        <meta name="description" content="Join ByteWar Hackathon" />
      </Head>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-soft-light filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-600 rounded-full mix-blend-soft-light filter blur-[90px] opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content - 100vh container */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Banner Image Only - Takes most of the space */}
        <div className="flex-grow relative">
          <Image
            src="/photo1.jpg" // Replace with your image path
            alt="ByteWar Hackathon"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
        </div>

        {/* Text and Button Below Banner */}
        <div className="bg-gray-900/70 backdrop-blur-sm p-6 text-center border-t border-white/10">
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              READY TO COMPETE?
            </span>
          </h1>
          <Link href="/enroll">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30">
              Continue to Enrollment
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(50px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 40px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}