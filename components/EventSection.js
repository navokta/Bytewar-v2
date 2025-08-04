import Link from 'next/link';
import { motion } from 'framer-motion';

const MysteryEventSection = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 filter blur-3xl"
        />
      </div>

      {/* Floating Binary Code Particles */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/30 font-mono text-xs"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -100,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
              content: Math.random() > 0.5 ? '"1"' : '"0"'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              BYTEWAR HACKATHON EVENTS
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300">
            Access restricted until official launch
          </p>
        </motion.div>

        {/* Single Mystery Box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/20 backdrop-blur-sm border-2 border-dashed border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden relative mb-16"
        >
          {/* Lock Icon */}
          <div className="absolute top-6 right-6 text-white/30">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>

          {/* Animated Question Mark */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex justify-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center border-2 border-dashed border-white/20">
              <span className="text-6xl font-bold text-white/50">?</span>
            </div>
          </motion.div>

          {/* Redacted Text */}
          <div className="text-center">
            <div className="inline-block bg-black/40 px-4 py-2 rounded-lg mb-4">
              <div className="h-6 w-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-full mx-auto"></div>
            </div>
            <p className="text-gray-400 mb-6">███████████████████████████████████</p>
            <div className="h-4 bg-gray-700/50 rounded-full w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-700/50 rounded-full w-1/2 mx-auto"></div>
          </div>
        </motion.div>

        {/* CTA Button */}
           {/* Disabled CTA Button */}
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1 }} // Remove hover effect
          className="px-10 py-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full text-white/50 font-bold text-lg relative cursor-not-allowed"
          disabled
        >
          <span className="flex items-center justify-center">
            Coming Soon
            <svg 
              className="w-5 h-5 ml-3"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
            </svg>
          </span>
        </motion.button>
        <p className="text-gray-500 mt-3 text-sm">Event details will unlock soon</p>
      </div>
      </div>
    </section>
  );
};

export default MysteryEventSection;