'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Events list (same theme)
const events = [
  {
    title: "Registration Phase",
    startDate: new Date('September 1, 2025 00:00:00'),
    endDate: new Date('September 15, 2025 23:59:59'),
    description: "Register yourself for BYTEWAR Hackathon."
  },
  {
    title: "Video Submission",
    startDate: new Date('September 16, 2025 00:00:00'),
    endDate: new Date('September 18, 2025 23:59:59'),
    description: "Submit your idea video for BYTEWAR Hackathon."
  },
  {
    title: "Presentation Phase",
    startDate: new Date('September 21, 2025 00:00:00'),
    endDate: new Date('September 24, 2025 23:59:59'),
    description: "48 hours of non-stop coding and innovation!"
  }
];

const EventsPreviewSection = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [nextEvent, setNextEvent] = useState(null);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Find current & next event
  useEffect(() => {
    const now = new Date();
    const active = events.find(e => now >= e.startDate && now <= e.endDate);
    const upcoming = events.find(e => e.startDate > now);

    setCurrentEvent(active || null);
    setNextEvent(upcoming || null);
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!nextEvent) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextEvent.startDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent]);

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          BYTEWAR EVENTS
        </h2>

        {/* Current Event */}
        {currentEvent && (
          <div className="mb-8 md:mb-10 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-md shadow-lg animate-fadeIn">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
              {currentEvent.title} <span className="text-cyan-400">(Ongoing)</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300">{currentEvent.description}</p>
          </div>
        )}

        {/* Next Event Countdown */}
        {nextEvent && (
          <div className="p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-md shadow-lg animate-fadeIn">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Next: <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">{nextEvent.title}</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6">{nextEvent.description}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
              {Object.entries(countdown).map(([unit, value]) => (
                <div key={unit} className="bg-black/40 rounded-lg p-3 sm:p-4 shadow-md transform transition hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 font-mono">{value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase mt-1">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <Link href="/events">
            <button className="px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg hover:scale-105 transition-transform active:scale-95">
              VIEW EVENTS
            </button>
          </Link>
        </div>
      </div>

      {/* Subtle background grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;