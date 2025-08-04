"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [events, setEvents] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Sample events data with full details
  const sampleEvents = [
    {
      id: 'kickoff-2023',
      title: "ByteWar Kickoff",
      date: "2023-10-15",
      description: "The official launch event with keynote speakers",
      image: "/photo1.jpg",
      type: "previous",
      details: {
        location: "Virtual Event",
        duration: "2 hours",
        speakers: ["Dr. Smith", "Prof. Johnson"],
        agenda: [
          "Opening remarks",
          "Keynote speech",
          "Prize announcements",
          "Q&A session"
        ],
        gallery: ["/gallery1.jpg", "/gallery2.jpg"]
      }
    },
    {
      id: 'finals-2023',
      title: "Hackathon Finals",
      date: new Date().toISOString().split('T')[0], // Today's date
      description: "Watch the top teams compete live",
      image: "/event2.jpg",
      type: "current",
      details: {
        location: "Bangalore Convention Center",
        duration: "8 hours",
        teams: ["Team Alpha", "Team Beta", "Team Gamma"],
        judges: ["CEO TechCorp", "CTO InnovateX"],
        prizes: ["₹1,00,000", "₹50,000", "₹25,000"],
        livestream: "https://youtube.com/bytewar"
      }
    },
    {
      id: 'ceremony-2023',
      title: "Prize Ceremony",
      date: "2023-12-20",
      description: "Celebrate the winners and closing remarks",
      image: "/event3.jpg",
      type: "upcoming",
      details: {
        location: "Mumbai Grand Hotel",
        duration: "3 hours",
        specialGuests: ["Minister of Technology", "Tech Celebrities"],
        highlights: [
          "Winner announcements",
          "Prize distribution",
          "Closing speech",
          "Networking cocktail"
        ],
        dressCode: "Semi-formal"
      }
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const today = new Date().toISOString().split('T')[0];
    
    const categorizedEvents = sampleEvents.map(event => {
      if (event.date < today) return { ...event, type: 'previous' };
      if (event.date > today) return { ...event, type: 'upcoming' };
      return { ...event, type: 'current' };
    });

    setEvents(categorizedEvents);
    const hasCurrent = categorizedEvents.some(e => e.type === 'current');
    setActiveTab(hasCurrent ? 'current' : 'upcoming');
  }, [isClient]);

  const filteredEvents = events.filter(event => event.type === activeTab);

  // Animation variants
  const eventVariants = {
    previous: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
      hover: { y: -5 }
    },
    current: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      hover: { y: -5 }
    },
    upcoming: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
      hover: { y: -5 }
    }
  };

  const getPulseAnimation = (type) => {
    if (type === 'current') {
      return {
        scale: [1, 1.03, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      };
    }
    return {};
  };

  const formatDate = (dateString) => {
    if (!isClient) return dateString;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Head>
        <title>ByteWar Events</title>
      </Head>

      {/* Floating binary particles */}
      <div className="fixed inset-0 overflow-hidden z-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-xs font-mono"
            animate={{
              y: [0, -100],
              opacity: [0.1, 0]
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
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              ByteWar Events
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {['previous', 'current', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <motion.div
          key={activeTab}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={eventVariants[event.type]}
              initial="initial"
              animate={["animate", getPulseAnimation(event.type)]}
              whileHover="hover"
              className={`relative rounded-xl overflow-hidden border-2 ${
                event.type === 'previous' ? 'border-gray-700' :
                event.type === 'current' ? 'border-pink-500/50' :
                'border-purple-500/50'
              }`}
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                event.type === 'previous' ? 'bg-gray-700 text-gray-300' :
                event.type === 'current' ? 'bg-pink-600/90 text-white' :
                'bg-purple-600/90 text-white'
              }`}>
                {event.type.toUpperCase()}
              </div>

              {/* Event Image */}
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70 hover:opacity-90 transition-opacity"
                />
                {event.type === 'current' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6 bg-gray-800/70 backdrop-blur-sm">
                <motion.h3 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </motion.h3>
                <div className={`text-sm font-medium mb-4 ${
                  event.type === 'previous' ? 'text-gray-400' :
                  event.type === 'current' ? 'text-pink-300' :
                  'text-purple-300'
                }`}>
                  {formatDate(event.date)}
                </div>
                <p className="text-gray-300 mb-6">{event.description}</p>
                
                <Link href={`/events/${event.id}`} passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 rounded-lg font-medium ${
                      event.type === 'previous' ? 'bg-gray-700 text-gray-300' :
                      event.type === 'current' ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white' :
                      'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    }`}
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;