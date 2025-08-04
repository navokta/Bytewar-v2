import Link from 'next/link';
import React from 'react';

const WowWhyChooseSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Real-World Challenges",
      description: "Solve actual industry problems and make a tangible impact with your code"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Industry Networking",
      description: "Connect with top professionals, mentors, and fellow developers"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Amazing Prizes",
      description: "$100K+ in rewards, internships, and career opportunities await winners"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Skill Validation",
      description: "Showcase your abilities to potential employers and the tech community"
    }
  ];

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
              WHY CHOOSE BYTEWAR?
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full flex flex-col items-center text-center transform transition-all duration-500 group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="mb-6 p-4 bg-gray-700/50 rounded-2xl border border-white/10 group-hover:bg-gray-700/70 transition-all duration-300">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {feature.description}
                </p>
                
                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-3xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10">
            <div className="text-4xl">⚔️</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Join the Battle?</h3>
              <p className="text-gray-400 max-w-xl">
                Become part of India's most prestigious coding competition and elevate your skills
              </p>
            </div>
            <Link href={'/BannerPage'}>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              Register Now
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

export default WowWhyChooseSection;