import Link from 'next/link';
import React, { useState } from 'react';

const WowVideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['#8B5CF6', '#3B82F6', '#06B6D4', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)]
                } 0%, transparent 70%)`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Video Section */}
          <div className="relative group">
            <div 
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-105"
              onClick={handlePlayVideo}
            >
              {/* Video Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {[...Array(64)].map((_, i) => (
                      <div 
                        key={i} 
                        className="border border-white/5"
                        style={{animation: `pulse ${1 + Math.random() * 2}s infinite ${Math.random() * 2}s`}}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {!isPlaying ? (
                <>
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-24 h-24 bg-red-600 rounded-full animate-ping opacity-75"></div>
                      <div className="relative w-24 h-24 bg-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-2xl">
                        <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">BYTEWAR 2023</h3>
                    <p className="text-gray-300 text-xl">Official Trailer - The Future of Hackathons</p>
                  </div>
                </>
              ) : (
                /* YouTube Embed */
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="ByteWar Hackathon 2023"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_20px_rgba(139,92,246,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-400">2.1M+</div>
                <div className="text-gray-400">Views</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-400">45K+</div>
                <div className="text-gray-400">Likes</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-400">3.2K</div>
                <div className="text-gray-400">Comments</div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                  BYTEWAR
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">
                India's most <span className="text-orange-400 font-bold">prestigious hackathon</span> redefining innovation
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4 text-3xl">🚀</div>
                <p className="text-xl text-gray-300">48-hour intense coding challenge with industry experts</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4 text-3xl">💰</div>
                <p className="text-xl text-gray-300">$100,000+ in prizes and internship opportunities</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4 text-3xl">🌍</div>
                <p className="text-xl text-gray-300">Participants from 50+ countries worldwide</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={'/enroll'}>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                Register Now
              </button>
              </Link>
              <button className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                View Themes
              </button>
            </div>
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
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </section>
  );
};

export default WowVideoHero;