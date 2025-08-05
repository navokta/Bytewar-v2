"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [events, setEvents] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Enhanced events data with your requirements
  const timelineEvents = [
    {
      id: 'registration',
      title: "Registration Phase",
      date: "2025-09-01",
      description: "Secure your spot in India's premier hackathon",
      type: "previous",
      highlights: [
        "Early bird benefits",
        "Team formation support",
        "Technical prep resources"
      ],
      icon: "📝"
    },
      {
      id: 'video-submission',
      title: "Video Submission",
      date: "2025-09-16",
      description: "Pitch your innovative solution in 2-4 minutes",
      type: "current",
      highlights: [
        "Team introduction",
        "Problem statement",
        "Solution overview",
        "Expected impact"
      ],
      icon: "🎥",
      note: "Key role in shortlisting. Late submissions may disqualify."
    },
    {
      id: 'ppt-submission',
      title: "PPT Submission",
      date: "2025-09-21",
      description: "Detailed presentation of your technical solution",
      type: "upcoming",
      highlights: [
        "Team & problem intro",
        "Tech stack & workflow",
        "Market analysis",
        "Future scope"
      ],
      icon: "📊"
    },
    {
      id: 'mentorship',
      title: "Mentorship",
      date: "2025-09-27",
      description: "Refine your project with industry experts",
      type: "upcoming",
      highlights: [
        "Technical guidance",
        "Business model review",
        "Presentation coaching",
        "Networking"
      ],
      icon: "🧑‍🏫"
    },
    {
      id: 'coding-round',
      title: "Coding Phase",
      date: "2025-09-29",
      description: "Build your solution in 7 intense days",
      type: "upcoming",
      highlights: [
        "Original implementation",
        "Daily check-ins",
        "Cloud credits provided",
        "24/7 support"
      ],
      icon: "💻"
    },
    {
      id: 'finals',
      title: "Final Showdown",
      date: "2025-10-08",
      description: "Demo your solution to elite judges",
      type: "upcoming",
      highlights: [
        "15-minute presentation",
        "Live Q&A",
        "₹1,00,000 top prize",
        "Incubation offers"
      ],
      icon: "🏆"
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const today = new Date().toISOString().split('T')[0];
    
    const categorizedEvents = timelineEvents.map(event => {
      if (event.date < today) return { ...event, type: 'previous' };
      if (event.date > today) return { ...event, type: 'upcoming' };
      return { ...event, type: 'current' };
    });

    setEvents(categorizedEvents);
    const hasCurrent = categorizedEvents.some(e => e.type === 'current');
    setActiveTab(hasCurrent ? 'current' : 'upcoming');
  }, [isClient]);

  const filteredEvents = events.filter(event => event.type === activeTab);

  // Futuristic animation variants
  const eventVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const getEventColor = (type) => {
    switch(type) {
      case 'previous': return 'from-gray-800 to-gray-900';
      case 'current': return 'from-purple-600 to-indigo-700';
      case 'upcoming': return 'from-blue-600 to-cyan-700';
      default: return 'from-gray-700 to-gray-800';
    }
  };

  const getPulseAnimation = (type) => {
    if (type === 'current') {
      return {
        boxShadow: ["0 0 0 0 rgba(124, 58, 237, 0.7)", "0 0 0 15px rgba(124, 58, 237, 0)"],
        transition: {
          duration: 2,
          repeat: Infinity
        }
      };
    }
    return {};
  };

  const formatDate = (dateString) => {
    if (!isClient) return dateString;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
          <Header />
    
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-10 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-10 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>ByteWar Events</title>
      </Head>

      {/* Futuristic background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            animate={{
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.3, 0]
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
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Holographic header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                BYTEWAR EVENTS
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-white rounded-full blur-sm"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
            Navigate through the phases of India's most prestigious hackathon journey
          </p>
        </motion.div>

        {/* Cyberpunk-style tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-800/80 backdrop-blur-md rounded-lg p-1 border border-gray-600/50 shadow-lg">
            {['previous', 'current', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all relative overflow-hidden ${
                  activeTab === tab
                    ? `text-white ${
                        tab === 'previous' ? 'bg-gray-700/80' :
                        tab === 'current' ? 'bg-purple-600/80' :
                        'bg-blue-600/80'
                      }`
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="tabUnderline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Holographic event cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={eventVariants}
              whileHover="hover"
              animate={getPulseAnimation(event.type)}
              className={`relative rounded-2xl overflow-hidden border ${
                event.type === 'previous' ? 'border-gray-700' :
                event.type === 'current' ? 'border-purple-500/50' :
                'border-blue-500/50'
              } bg-gradient-to-br ${getEventColor(event.type)} backdrop-blur-sm`}
            >
              {/* Glowing corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 opacity-20 ${
                event.type === 'previous' ? 'bg-gray-500' :
                event.type === 'current' ? 'bg-purple-500' :
                'bg-blue-500'
              }`} style={{
                clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'
              }}></div>

              {/* Event content */}
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    event.type === 'previous' ? 'bg-gray-700 text-gray-300' :
                    event.type === 'current' ? 'bg-white text-purple-900' :
                    'bg-white text-blue-900'
                  }`}>
                    {event.type.toUpperCase()}
                  </div>
                  <div className="text-3xl">{event.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className={`text-sm font-medium mb-4 ${
                  event.type === 'previous' ? 'text-gray-300' :
                  event.type === 'current' ? 'text-purple-200' :
                  'text-blue-200'
                }`}>
                  {formatDate(event.date)}
                </div>
                
                <p className="text-gray-100 mb-6">{event.description}</p>
                
                <div className="mb-6">
        <div className="text-xs uppercase text-white/70 mb-2">KEY POINTS</div>
        <ul className="space-y-2">
          {event.highlights.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 mt-1 inline-block w-1 h-1 rounded-full bg-white/80"></span>
              <span className="text-sm text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>

                {event.note && (
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="text-xs uppercase text-white/70 mb-1">NOTE</div>
                    <p className="text-xs text-white/80 italic">{event.note}</p>
                  </div>
                )}

                <Link href={`/events/${event.id}`} passHref className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-lg font-medium ${
                      event.type === 'previous' ? 'bg-gray-700/80 text-gray-300' :
                      event.type === 'current' ? 'bg-white text-purple-900' :
                      'bg-white text-blue-900'
                    } flex items-center justify-center space-x-2`}
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
    <Footer />
    </div>
  );
};

export default EventsPage;