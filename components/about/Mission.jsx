import React from 'react';

const WowMissionSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              OUR MISSION
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Element */}
          <div className="lg:w-1/2 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
              <div className="absolute inset-0 bg-grid-white/5"></div>
              
              <div className="relative h-80 md:h-96 flex items-center justify-center">
                <div className="text-8xl md:text-9xl text-purple-500 opacity-80 animate-pulse">
                  ⚔️
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-blue-500/20 blur-xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl animate-float animation-delay-2000"></div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-pink-500/20 blur-xl animate-float animation-delay-3000"></div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_20px_rgba(139,92,246,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="relative">
              <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              
              <div className="pl-8">
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                  Empowering Coders Worldwide
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                    At ByteWar, we believe the best way to grow as a programmer is through
<span className="text-purple-400 font-bold"> consistent practice, healthy competition, and a strong community.</span>

Our platform isn’t just a hackathon — it's a launchpad where coders challenge themselves, level up their skills, and unlock their true potential.
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                   We aim to build an <span className="text-pink-400 font-bold">inclusive space</span> where beginners take their first steps and experts discover bold new challenges — all while being part of a community that celebrates learning, growth, and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-purple-400">🎯</div>
                <h4 className="text-xl font-bold text-white mb-2">Skill Development</h4>
                <p className="text-gray-400">Real-world challenges to enhance your coding abilities</p>
              </div>
              
              <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-pink-400">🤝</div>
                <h4 className="text-xl font-bold text-white mb-2">Community Building</h4>
                <p className="text-gray-400">Connect with like-minded developers globally</p>
              </div>
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
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(10px, -10px); }
          100% { transform: translate(0px, 0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-grid-white {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default WowMissionSection;