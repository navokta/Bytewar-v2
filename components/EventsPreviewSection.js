'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const EventsPreviewSection = () => {
  const upcomingEvent = {
    title: "ByteWar Hackathon",
    date: new Date('September 1, 2025 00:00:00'),
    description: "Intense coding, innovation, and prizes! Join India's premier student hackathon.",
    techStack: ["AI/ML", "Web3", "Cloud", "Cybersecurity"]
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  const formattedDate = upcomingEvent.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="relative py-10 md:py-20 px-4 sm:px-6 overflow-hidden bg-black">
      {/* Simplified background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              BYTEWAR EVENTS
            </span>
          </h2>
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-3 md:mb-4" />
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm md:backdrop-blur-lg border border-gray-800 rounded-xl overflow-hidden shadow-lg md:shadow-2xl relative">
          <div className="p-5 sm:p-8 md:p-10 lg:p-12">
            {/* Status indicator */}
            <div className="flex items-center mb-3 md:mb-5">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Live Countdown</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {upcomingEvent.title}
              </span>
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
              {upcomingEvent.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8 justify-center md:justify-start">
              {upcomingEvent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-800/70 border border-gray-700 rounded-full text-xs sm:text-sm font-mono text-cyan-300 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Date and countdown */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-xs font-mono text-gray-400 mb-1 tracking-wider">EVENT DATE</div>
                <div className="text-xl sm:text-2xl font-bold text-white">{formattedDate}</div>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4">
                <div className="text-xs font-mono text-gray-400 mb-2 text-center tracking-wider">COUNTDOWN</div>
                <div className="flex items-center justify-evenly">
                  {Object.entries(countdown).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 mt-1 uppercase">
                        {unit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="flex justify-center">
              <Link href="/events" className="w-full max-w-xs">
                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold text-sm sm:text-base relative overflow-hidden"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">VIEW EVENTS</span>
                    <svg 
                      className="w-4 h-4"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;