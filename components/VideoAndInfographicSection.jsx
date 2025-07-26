import React from 'react';

const VideoAndInfographicSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: YouTube Video */}
          <div className="relative w-full h-96 bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ByteWar Hackathon</h3>
                <p className="text-gray-400">Official ByteWar 2023 Trailer</p>
              </div>
            </div>
            
            {/* YouTube Embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-white font-semibold">Click to Play Video</p>
              </div>
            </div>
          </div>

          {/* Right Side: Infographic */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Outer Circle */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gray-800 opacity-50"></div>
                
                {/* Center Logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">BW</span>
                  </div>
                </div>

                {/* Top Section - Enabling Students */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-28 h-28 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">Enabling Students</span>
                  </div>
                </div>

                {/* Right Section - Cultural Shift */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-28 h-28 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">Enabling a Cultural Shift</span>
                  </div>
                </div>

                {/* Bottom Section - Open Innovation */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-28 h-28 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">Enabling Open Innovation</span>
                  </div>
                </div>

                {/* Left Section - Anchor for Hackathons */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">Anchor for Hackathons</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-60"></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-yellow-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAndInfographicSection;