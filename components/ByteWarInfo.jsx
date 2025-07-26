import React from 'react';

const WowByteWarInfo = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              WHAT IS BYTEWAR?
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="pl-8 space-y-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                ByteWar is an <span className="text-purple-400 font-bold">innovative nationwide hackathon</span> designed to engage students in solving some of the most pressing challenges faced in everyday life. Launched to foster a culture of innovation and practical problem-solving, ByteWar provides a dynamic platform for participants to develop and showcase their creative solutions to real-world problems.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                Since its inception, ByteWar has garnered significant success in promoting <span className="text-pink-400 font-bold">out-of-the-box thinking</span> among young minds, particularly engineering students from across the country. Each edition has built on the previous one, refining its approach and expanding its impact. The hackathon not only offers participants an opportunity to showcase their skills but also encourages collaboration with industry experts, government agencies, and other stakeholders.
              </p>
            </div>
          </div>



          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              Join ByteWar Now
            </button>
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

export default WowByteWarInfo;