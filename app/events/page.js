'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Memoized events data
  const timelineEvents = useMemo(() => [
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
      tech: ["Guts", "Information", "Team"],
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
      tech: ["Confidence", "Communication"],
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
      tech: ["Design", "Presenting Skills", "Business"],
      glowColor: "rgba(96, 165, 250, 0.4)"
    },
    {
      id: 'mentorship',
      title: "Mentorship",
      date: "2025-09-27",
      description: "Refine your project with industry experts",
      type: "upcoming",
      highlights: [
        "Expert guidance",
        "Advice to enhance the project",
        "Peer to Peer Mentorship",
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
        "Confidence Building",
        "Networking",
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
        "Live Q&A"
      ],
      icon: "🏆",
      tech: ["Demo", "Pitching", "Negotiation"],
      glowColor: "rgba(96, 165, 250, 0.4)"
    }
  ], []);

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
  }, [isClient, timelineEvents]);

  const filteredEvents = useMemo(() => 
    timelineEvents.filter(event => event.type === activeTab),
    [activeTab, timelineEvents]
  );

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      transition: { 
        duration: 0.3
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

      {/* Simplified Background */}
      <div className="fixed inset-0 z-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              BYTEWAR EVENTS 
            </span>
          </h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 sm:w-48 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-4 origin-left"
          />
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Navigate through the phases of India's most prestigious hackathon journey
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex justify-center mb-8 md:mb-12 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex bg-gray-900/80 backdrop-blur-lg rounded-xl p-1 border border-gray-800">
            {['previous', 'current', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase ${
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
              </button>
            ))}
          </div>
        </motion.div>

        {/* Event Cards */}
        {filteredEvents.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`relative rounded-2xl overflow-hidden border-2 ${getBorderColor(event.type)} ${getEventColor(event.type)} backdrop-blur-sm`}
                  style={{
                    boxShadow: hoveredCard === event.id 
                      ? `0 0 20px ${event.glowColor}`
                      : 'none',
                  }}
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        event.type === 'previous' ? 'bg-gray-700 text-gray-300' :
                        event.type === 'current' ? 'bg-white text-purple-900' :
                        'bg-white text-blue-900'
                      }`}>
                        {event.type.toUpperCase()}
                      </div>
                      <div className="text-3xl">
                        {event.icon}
                      </div>
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
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-mono ${
                            event.type === 'previous' ? 'bg-gray-700/50 text-gray-300' :
                            event.type === 'current' ? 'bg-purple-900/50 text-purple-200' :
                            'bg-blue-900/50 text-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6">
                      <div className="text-xs uppercase text-white/70 mb-2">KEY POINTS</div>
                      <ul className="space-y-2">
                        {event.highlights.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`mr-2 mt-1 inline-block w-2 h-2 rounded-full ${
                              event.type === 'previous' ? 'bg-gray-400' :
                              event.type === 'current' ? 'bg-purple-400' :
                              'bg-blue-400'
                            }`}></span>
                            <span className="text-xs sm:text-sm text-white/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                   {event.type === 'upcoming' ? (
  <motion.button
    disabled
    className="w-full py-2 sm:py-3 rounded-lg font-bold bg-gray-700/50 text-gray-500 cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base mt-auto"
    whileHover={{ scale: 1 }}
    title="Details will be available when this event starts"
  >
    <span>View Details</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </motion.button>
) : (
  <motion.a
    href={`/events/${event.id}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full py-2 sm:py-3 rounded-lg font-bold ${
      event.type === 'previous' ? 'bg-gray-700/80 text-gray-300' :
      'bg-white text-purple-900'
    } flex items-center justify-center space-x-2 text-sm sm:text-base mt-auto`}
  >
    <span>View Details</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </motion.a>
)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            <button
              onClick={() => setActiveTab(activeTab === 'previous' ? 'upcoming' : 'previous')}
              className="mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold"
            >
              View {activeTab === 'previous' ? 'Upcoming' : 'Previous'} Events
            </button>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;