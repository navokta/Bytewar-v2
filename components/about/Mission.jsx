import React from 'react';

const WowMissionSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              OUR MISSION
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Visual Element */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
              <div className="absolute inset-0 bg-grid-white/5"></div>
              
              <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-purple-500 opacity-80 animate-pulse">
                  ⚔️
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-blue-500/20 blur-xl animate-float"></div>
                <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-purple-500/20 blur-xl animate-float animation-delay-2000"></div>
                <div className="absolute top-1/3 right-1/4 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-pink-500/20 blur-xl animate-float animation-delay-3000"></div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[0_0_30px_15px_rgba(139,92,246,0.3)] sm:shadow-[0_0_50px_20px_rgba(139,92,246,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden sm:block"></div>
              
              <div className="sm:pl-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 transition-all duration-500">
                  Empowering Coders Worldwide
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                    At ByteWar, we believe the best way to grow as a programmer is through
                    <span className="text-purple-400 font-bold"> consistent practice, healthy competition, and a strong community.</span>
                    <br className="hidden sm:block" />
                    <span className="block sm:inline mt-2 sm:mt-0">
                      Our platform isn't just a hackathon — it's a launchpad where coders challenge themselves, level up their skills, and unlock their true potential.
                    </span>
                  </p>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                    We aim to build an <span className="text-pink-400 font-bold">inclusive space</span> where beginners take their first steps and experts discover bold new challenges — all while being part of a community that celebrates learning, growth, and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-purple-400">🎯</div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Skill Development</h4>
                <p className="text-sm sm:text-base text-gray-400">Real-world challenges to enhance your coding abilities</p>
              </div>
              
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-pink-400">🤝</div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Community Building</h4>
                <p className="text-sm sm:text-base text-gray-400">Connect with like-minded developers globally</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Features Section - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-3 text-indigo-400">🚀</div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Innovation</h4>
              <p className="text-sm sm:text-base text-gray-400">Push boundaries with cutting-edge challenges</p>
            </div>
            
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-3 text-cyan-400">🏆</div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Achievement</h4>
              <p className="text-sm sm:text-base text-gray-400">Celebrate milestones and breakthrough moments</p>
            </div>
            
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 text-emerald-400">🌍</div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Global Impact</h4>
              <p className="text-sm sm:text-base text-gray-400">Code solutions that make a difference worldwide</p>
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
        .animate-blob {
          animation: blob 7s infinite;
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
          33% { transform: translate(15px, -25px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(5px, -5px); }
          100% { transform: translate(0px, 0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-grid-white {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 15px 15px;
        }
        
        @media (min-width: 640px) {
          .bg-grid-white {
            background-size: 20px 20px;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes float {
            0% { transform: translate(0px, 0px); }
            50% { transform: translate(10px, -10px); }
            100% { transform: translate(0px, 0px); }
          }
        }
      `}</style>
    </section>
  );
};

export default WowMissionSection;