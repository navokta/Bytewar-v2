'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const EventsPreviewSection = () => {
  // Sample upcoming event data with a JavaScript Date object
  const upcomingEvent = {
    title: "ByteWar Hackathon",
    date: new Date('September 1, 2025 00:00:00'), // Use Date object
    description: "Intense coding, innovation, and prizes! Join India's premier student hackathon.",
    image: "/ByteWar_Logo.png"
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

  // Format countdown text
  const countdownText = `${Math.floor(countdown.days)} Days ${Math.floor(countdown.hours)} Hours ${Math.floor(countdown.minutes)} Minutes Left`;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Binary Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(50)].map((_, i) => (
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

      {/* Pulsing Tech Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-64 h-64 rounded-full border-2 border-purple-500/20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute w-80 h-80 rounded-full border-2 border-blue-500/20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Upcoming Event
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
        </motion.div>

        {/* Event Preview Card */}
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-gray-800/30 backdrop-blur-sm border-2 border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
        >
          {/* Glowing Effect */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
          
          <div className="grid md:grid-cols-2">
            {/* Event Image */}
            <div className="relative h-64 md:h-full">
              <Image
                src={upcomingEvent.image}
                alt={upcomingEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Event Content */}
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-pink-400 uppercase tracking-wider">Live Countdown</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{upcomingEvent.title}</h3>
              <p className="text-gray-300 mb-6">{upcomingEvent.description}</p>
              
              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-1">Event Date</div>
                <div className="text-xl font-medium text-white">{formattedDate}</div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-1">Countdown</div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {countdownText}
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/events" className="inline-block">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(219, 39, 119, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    View All Events
                    <svg 
                      className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default EventsPreviewSection;