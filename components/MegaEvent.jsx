'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MegaEvent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until September 12, 2025
  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('September 12, 2025 20:00:00');
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const eventActivities = [
    { title: "Interactive Session", icon: "💬" },
    { title: "Fun Activities", icon: "🎮" },
    { title: "Poster Making", icon: "🎨" },
    { title: "Debate", icon: "🗣️" },
    { title: "Life Experience", icon: "🌟" }
  ];

  const handleJoinEvent = () => {
    window.open('https://meet.google.com/zar-hpuu-rys', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Binary Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 font-mono text-xs"
            animate={{
              y: [0, -100],
              opacity: [0.1, 0],
              x: Math.random() > 0.5 ? [0, 20] : [0, -20]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Orbs - Reduced for mobile */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl ${
            i === 0 ? 'w-20 h-20 md:w-32 md:h-32 top-1/4 left-1/4' :
            i === 1 ? 'w-24 h-24 md:w-48 md:h-48 bottom-1/4 right-1/4' :
            'w-16 h-16 md:w-36 md:h-36 top-1/2 left-1/2'
          }`}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              3 DAYS MEGA EVENT
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-3 md:mb-4 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2"
          >
            September 12, 13 & 14, 2025 • 8:00 PM IST • Online Event
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Event Activities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {eventActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-4 md:p-6 text-center group cursor-pointer"
                >
                  <motion.div 
                    className="text-3xl md:text-4xl mb-3 md:mb-4"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {activity.icon}
                  </motion.div>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                    {activity.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden relative">
              {/* Glowing Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 md:w-64 md:h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                  <span className="text-xs md:text-sm font-bold text-cyan-400 uppercase tracking-wider">Join Now</span>
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                  Welcome to our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">MEGA EVENT</span>
                </h3>
                
                <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                  Join us for 3 days of exciting online sessions with interactive activities, competitions, and opportunities to win certificates!
                </p>

                {/* Countdown Timer */}
                <div className="mb-6 md:mb-8">
                  <div className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 uppercase tracking-wider">Event Starts In</div>
                  <div className="grid grid-cols-4 gap-2 md:gap-4">
                    <div className="text-center bg-gray-800/50 rounded-lg p-2 md:p-4 border border-gray-700/50">
                      <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-cyan-400">{timeLeft.days}</div>
                      <div className="text-xs text-gray-400 mt-1">DAYS</div>
                    </div>
                    <div className="text-center bg-gray-800/50 rounded-lg p-2 md:p-4 border border-gray-700/50">
                      <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-cyan-400">{timeLeft.hours}</div>
                      <div className="text-xs text-gray-400 mt-1">HOURS</div>
                    </div>
                    <div className="text-center bg-gray-800/50 rounded-lg p-2 md:p-4 border border-gray-700/50">
                      <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-cyan-400">{timeLeft.minutes}</div>
                      <div className="text-xs text-gray-400 mt-1">MINUTES</div>
                    </div>
                    <div className="text-center bg-gray-800/50 rounded-lg p-2 md:p-4 border border-gray-700/50">
                      <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-cyan-400">{timeLeft.seconds}</div>
                      <div className="text-xs text-gray-400 mt-1">SECONDS</div>
                    </div>
                  </div>
                </div>

                {/* Event Info */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-sm md:text-base text-gray-300">September 12, 13 & 14, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-sm md:text-base text-gray-300">8:00 PM IST Daily</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    <span className="text-sm md:text-base text-gray-300">Online Event</span>
                  </div>
                </div>

                {/* CTA Button with Google Meet Link */}
                <motion.button
                  onClick={handleJoinEvent}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold text-base md:text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Join 
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 transform group-hover:translate-x-2 transition-transform"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>

                {/* Additional note for winners */}
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <p className="text-xs md:text-sm text-yellow-200">Winners will receive certificates and exciting prizes!</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MegaEvent;