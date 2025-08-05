'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EventsPreviewSection = () => {
  // Sample upcoming event data
  const upcomingEvent = {
    title: "ByteWar Hackathon",
    date: new Date('September 1, 2025 00:00:00'),
    description: "Intense coding, innovation, and prizes! Join India's premier student hackathon.",
    techStack: ["AI/ML", "Web3", "Cloud", "Cybersecurity"]
  };

  // State for countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = upcomingEvent.date.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [upcomingEvent.date]);

  // Format date for display
  const formattedDate = upcomingEvent.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-t border-l border-purple-500/20"
            initial={{ 
              width: '0%', 
              height: '0%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{ 
              width: ['0%', `${Math.random() * 30 + 10}%`, '0%'],
              height: ['0%', `${Math.random() * 30 + 10}%`, '0%'],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Tech Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl"
          initial={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`
          }}
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
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              BYTEWAR EVENT
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4 origin-left"
          />
        </motion.div>

        {/* Event Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl overflow-hidden shadow-2xl relative"
        >
          {/* Glowing Border */}
          <div className="absolute inset-0 border border-transparent rounded-xl pointer-events-none">
            <motion.div
              className="absolute inset-0 border border-blue-500/20 rounded-xl"
              animate={{
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Holographic Effect */}
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full mix-blend-color-dodge filter blur-3xl"></div>

          <div className="p-8 md:p-12">
            {/* Event Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center mb-6"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Live Countdown Active</span>
            </motion.div>

            {/* Event Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {upcomingEvent.title}
              </span>
            </motion.h3>

            {/* Event Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed"
            >
              {upcomingEvent.description}
            </motion.p>

            {/* Tech Stack Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {upcomingEvent.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-mono text-cyan-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Date and Countdown */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Event Date */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
              >
                <div className="text-xs font-mono text-gray-400 mb-2 tracking-widest">EVENT DATE</div>
                <div className="text-2xl font-bold text-white font-mono">{formattedDate}</div>
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
              >
                <div className="text-xs font-mono text-gray-400 mb-2 tracking-widest">COUNTDOWN</div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">{countdown.days}</div>
                    <div className="text-xs text-gray-400 mt-1">DAYS</div>
                  </div>
                  <div className="text-cyan-400">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">{countdown.hours}</div>
                    <div className="text-xs text-gray-400 mt-1">HOURS</div>
                  </div>
                  <div className="text-cyan-400">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">{countdown.minutes}</div>
                    <div className="text-xs text-gray-400 mt-1">MIN</div>
                  </div>
                  <div className="text-cyan-400">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">{countdown.seconds}</div>
                    <div className="text-xs text-gray-400 mt-1">SEC</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center"
            >
              <Link href="/events" className="inline-block">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-3">VIEW ALL EVENTS</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;