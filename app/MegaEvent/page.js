'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const MegaEventPage = () => {
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
    { title: "Interactive Session", icon: "💬", description: "Engage with experts and peers in live Q&A sessions" },
    { title: "Fun Activities", icon: "🎮", description: "Participate in games and icebreakers" },
    { title: "Poster Making", icon: "🎨", description: "Showcase your creativity in our design competition" },
    { title: "Debate", icon: "🗣️", description: "Argue your perspective on trending tech topics" },
    { title: "Life Experience", icon: "🌟", description: "Share and learn from real-world stories" }
  ];

  const schedule = [
    { day: "Day 1", date: "Sept 12, 2025", events: ["Opening Ceremony", "Poster Making Competition", "Interactive Session"] },
    { day: "Day 2", date: "Sept 13, 2025", events: ["Debate Competition", "Interactive Session", "Result Announcement of Poster Making Competition"] },
    { day: "Day 3", date: "Sept 14, 2025", events: ["Life Experience Sharing", "Interactive Session", "Result Announcement of Debate Competition"] }
  ];

  const handleJoinEvent = () => {
    window.open('https://meet.google.com/zar-hpuu-rys', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>3 Days Mega Event | ByteWar</title>
        <meta name="description" content="Join our 3 days mega event with interactive sessions, fun activities, and competitions" />
      </Head>

      {/* Header */}
     <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
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

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              3 DAYS MEGA EVENT
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            September 12, 13 & 14, 2025 • 8:00 PM IST • Online Event
          </motion.p>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="flex flex-wrap justify-center gap-4 mb-12"
>
  <button 
    onClick={handleJoinEvent}
    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
  >
    Join Event Now
  </button>
</motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Event Starts In</div>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.days}</div>
                <div className="text-xs text-gray-400 mt-1">DAYS</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.hours}</div>
                <div className="text-xs text-gray-400 mt-1">HOURS</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-400 mt-1">MINUTES</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-400 mt-1">SECONDS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Event Activities
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {eventActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                <p className="text-gray-400">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Event Schedule
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedule.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{day.day}</h3>
                <p className="text-gray-400 mb-4">{day.date}</p>
                <ul className="space-y-3">
                  {day.events.map((event, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3"></span>
                      <span className="text-gray-300">{event}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Event?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Participate in our 3-day mega event with exciting activities, competitions, and opportunities to win certificates!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
  <button 
    onClick={handleJoinEvent}
    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
  >
    Join Event Now
  </button>
</div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default MegaEventPage;