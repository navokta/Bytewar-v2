'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Enhanced events data with holographic effects
  const timelineEvents = [
    {
      id: 'registration',
      title: "Registration Phase",
      date: "2025-09-01",
      description: "Secure your spot in India's premier hackathon",
      type: "upcoming",
      highlights: [
        "Early bird benefits",
        "Team formation support",
        "Technical prep resources",
        "Many more"
      ],
      icon: "📝",
      tech: ["Blockchain", "AI", "Cloud"],
      glowColor: "rgba(156, 163, 175, 0.3)"
    },
    {
      id: 'video-submission',
      title: "Video Submission",
      date: "2025-09-16",
      description: "Pitch your innovative solution in 2-4 minutes",
      type: "upcoming",
      highlights: [
        "Team introduction",
        "Problem statement",
        "Solution overview",
        "Expected impact"
      ],
      icon: "🎥",
      // note: "Key role in shortlisting. Late submissions may disqualify.",
      tech: ["Video Editing", "Presentation"],
      glowColor: "rgba(167, 139, 250, 0.4)"
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
      icon: "📊",
      tech: ["Design", "Data Viz", "Business"],
      glowColor: "rgba(96, 165, 250, 0.4)"
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
      icon: "🧑‍🏫",
      tech: ["Mentoring", "Strategy", "Pitching"],
      glowColor: "rgba(96, 165, 250, 0.4)"
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
      icon: "💻",
      tech: ["Development", "Debugging", "DevOps"],
      glowColor: "rgba(96, 165, 250, 0.4)"
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
      icon: "🏆",
      tech: ["Demo", "Pitching", "Negotiation"],
      glowColor: "rgba(96, 165, 250, 0.4)"
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const today = new Date().toISOString().split('T')[0];
    const updatedEvents = timelineEvents.map(event => {
      if (event.date < today) return { ...event, type: 'previous' };
      if (event.date > today) return { ...event, type: 'upcoming' };
      return { ...event, type: 'current' };
    });
    
    const hasCurrent = updatedEvents.some(e => e.type === 'current');
    setActiveTab(hasCurrent ? 'current' : 'upcoming');
  }, [isClient]);

  const filteredEvents = timelineEvents.filter(event => event.type === activeTab);

  // Futuristic animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -15,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    }
  };

  const getEventColor = (type) => {
    switch(type) {
      case 'previous': return 'bg-gray-800/50';
      case 'current': return 'bg-purple-900/40';
      case 'upcoming': return 'bg-blue-900/40';
      default: return 'bg-gray-800/50';
    }
  };

  const getBorderColor = (type) => {
    switch(type) {
      case 'previous': return 'border-gray-700/50';
      case 'current': return 'border-purple-500/50';
      case 'upcoming': return 'border-blue-500/50';
      default: return 'border-gray-700/50';
    }
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">      
      <Header />

      {/* Cyber Grid Background */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]"></div>
      </div>

      {/* Floating Tech Orbs */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full filter blur-3xl opacity-20 ${
            i === 1 ? 'bg-purple-600 w-64 h-64 top-1/4 left-1/4' :
            i === 2 ? 'bg-blue-600 w-96 h-96 bottom-1/4 right-1/4' :
            'bg-cyan-600 w-80 h-80 top-1/3 right-1/4'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated Binary Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Holographic Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              BYTEWAR EVENTS 
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-32 sm:w-48 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-4 origin-left"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            Navigate through the phases of India's most prestigious hackathon journey
          </motion.p>
        </motion.div>

        {/* Cyber Tabs - Made responsive */}
        <motion.div 
          className="flex justify-center mb-12 md:mb-16 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex bg-gray-900/80 backdrop-blur-lg rounded-xl p-1 border border-gray-800 shadow-2xl overflow-x-auto">
            {['previous', 'current', 'upcoming'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider relative overflow-hidden ${
                  activeTab === tab
                    ? `text-white ${
                        tab === 'previous' ? 'bg-gray-800/80' :
                        tab === 'current' ? 'bg-gradient-to-r from-purple-600 to-indigo-700' :
                        'bg-gradient-to-r from-blue-600 to-cyan-700'
                      }`
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
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
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Holographic Event Cards */}
        {filteredEvents.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  onHoverStart={() => setHoveredCard(event.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative rounded-2xl overflow-hidden border-2 ${getBorderColor(event.type)} ${getEventColor(event.type)} backdrop-blur-sm`}
                  style={{
                    boxShadow: hoveredCard === event.id 
                      ? `0 0 40px ${event.glowColor}`
                      : 'none',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  {/* Holographic Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${
                      event.type === 'previous' ? 'bg-gray-600/20' :
                      event.type === 'current' ? 'bg-purple-500/20' :
                      'bg-blue-500/20'
                    }`} style={{
                      clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'
                    }}></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                  </div>

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
                      <motion.div 
                        className="text-3xl"
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
                        {event.icon}
                      </motion.div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <div className={`text-xs sm:text-sm font-mono font-medium mb-4 ${
                      event.type === 'previous' ? 'text-gray-300' :
                      event.type === 'current' ? 'text-purple-300' :
                      'text-blue-300'
                    }`}>
                      {formatDate(event.date)}
                    </div>
                    
                    <p className="text-gray-200 text-sm sm:text-base mb-6">{event.description}</p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-mono ${
                            event.type === 'previous' ? 'bg-gray-700/50 text-gray-300' :
                            event.type === 'current' ? 'bg-purple-900/50 text-purple-200' :
                            'bg-blue-900/50 text-blue-200'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mb-6">
                      <div className="text-xs uppercase text-white/70 mb-2">KEY POINTS</div>
                      <ul className="space-y-2">
                        {event.highlights.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-start"
                          >
                            <span className={`mr-2 mt-1 inline-block w-2 h-2 rounded-full ${
                              event.type === 'previous' ? 'bg-gray-400' :
                              event.type === 'current' ? 'bg-purple-400' :
                              'bg-blue-400'
                            }`}></span>
                            <span className="text-xs sm:text-sm text-white/90">{item}</span>
                          </motion.li>
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
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: `0 0 20px ${event.type === 'current' ? 'rgba(167, 139, 250, 0.5)' : 'rgba(96, 165, 250, 0.5)'}`
                        }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-2 sm:py-3 rounded-lg font-bold ${
                          event.type === 'previous' ? 'bg-gray-700/80 text-gray-300' :
                          event.type === 'current' ? 'bg-white text-purple-900' :
                          'bg-white text-blue-900'
                        } flex items-center justify-center space-x-2 text-sm sm:text-base`}
                      >
                        <span>View Details</span>
                        <motion.svg 
                          className="w-4 h-4"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{
                            x: [0, 5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </motion.svg>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Empty state message when no events are available for the selected tab
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-6">🔍</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              No {activeTab} events available
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              {activeTab === 'previous' 
                ? "Check back soon for upcoming events or view current events."
                : activeTab === 'current'
                ? "Stay tuned! New events will be announced soon."
                : "We're planning exciting events. Check back later!"}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(activeTab === 'previous' ? 'upcoming' : 'previous')}
              className="mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold"
            >
              View {activeTab === 'previous' ? 'Upcoming' : 'Previous'} Events
            </motion.button>
          </motion.div>
        )}
      </div>

      <Footer />

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default EventsPage;