import Link from 'next/link';
import React from 'react';

const WowSponsorsSection = () => {
  // Sample sponsor data - replace with your actual sponsors
  const sponsors = [
    { id: 1, name: 'TechCorp', logo: '🏢' },
    { id: 2, name: 'InnovateX', logo: '🚀' },
    { id: 3, name: 'FutureLabs', logo: '🔬' },
    { id: 4, name: 'CodeMasters', logo: '💻' },
    { id: 5, name: 'DevSolutions', logo: '⚙️' },
    { id: 6, name: 'CloudNine', logo: '☁️' },
    { id: 7, name: 'DataSystems', logo: '📊' },
    { id: 8, name: 'AI Ventures', logo: '🤖' }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mb-4 sm:mb-6 shadow-lg shadow-purple-500/30">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              OUR SPONSORS
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Industry leaders who make ByteWar possible through their generous support and innovation
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                {/* Logo/Emoji */}
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 transform transition-all duration-500 group-hover:scale-110">
                  {sponsor.logo}
                </div>
                
                {/* Sponsor Name */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                  {sponsor.name}
                </h3>
                
                {/* Recognition Badge */}
                <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 shadow-sm mt-1 sm:mt-2">
                  <span className="text-white">
                    Valued Partner
                  </span>
                </div>
                
                {/* Appreciation Message */}
                <div className="mt-2 sm:mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs sm:text-sm text-gray-400 italic">
                    "Thank you for your support!"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Benefits */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10">
            <div className="text-4xl sm:text-5xl">🤝</div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Become a Sponsor</h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
                Join our network of industry leaders and gain exclusive access to top talent, branding opportunities, and innovation showcases. 
                <span className="text-orange-400 font-bold"> Contact us to discuss partnership opportunities!</span>
              </p>
            </div>
            <Link href={'/sponsor'}>
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-lg sm:hover:shadow-xl hover:shadow-purple-500/30 text-sm sm:text-base">
                Sponsor Us
              </button>
            </Link>
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

export default WowSponsorsSection;