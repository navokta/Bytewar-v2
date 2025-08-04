'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Sample events data (should match your events list data)
const eventsData = {
  'kickoff-2023': {
    title: "ByteWar Kickoff",
    date: "October 15, 2023",
    description: "The official launch event with keynote speakers",
    image: "/photo1.jpg",
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
  'finals-2023': {
    title: "Hackathon Finals",
    date: "November 20, 2023",
    description: "Watch the top teams compete live",
    image: "/event2.jpg",
    details: {
      location: "Bangalore Convention Center",
      duration: "8 hours",
      teams: ["Team Alpha", "Team Beta", "Team Gamma"],
      judges: ["CEO TechCorp", "CTO InnovateX"],
      prizes: ["₹1,00,000", "₹50,000", "₹25,000"],
      livestream: "https://youtube.com/bytewar"
    }
  },
  'ceremony-2023': {
    title: "Prize Ceremony",
    date: "December 20, 2023",
    description: "Celebrate the winners and closing remarks",
    image: "/event3.jpg",
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
};

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.eventId) {
      setEvent(eventsData[params.eventId]);
      setIsLoading(false);
    }
  }, [params.eventId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-white">Loading event details...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-white">Event not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <motion.button 
          onClick={() => router.back()}
          whileHover={{ x: -5 }}
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Events
        </motion.button>
      </div>

      {/* Event Hero Section */}
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12"
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{event.title}</h1>
            <div className="text-lg text-pink-400">{event.date}</div>
          </div>
        </motion.div>

        {/* Event Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">About This Event</h2>
              <p className="text-gray-300 mb-6">{event.description}</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Event Details</h3>
              <ul className="space-y-2 text-gray-300">
                {Object.entries(event.details).map(([key, value]) => {
                  if (Array.isArray(value)) {
                    return (
                      <li key={key} className="mb-4">
                        <span className="capitalize font-medium text-white">{key}:</span>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          {value.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li key={key} className="mb-2">
                      <span className="capitalize font-medium text-white">{key}:</span> {value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">Date</div>
                  <div className="text-white">{event.date}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white">{event.details.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Duration</div>
                  <div className="text-white">{event.details.duration}</div>
                </div>
              </div>
            </div>

            {event.details.livestream && (
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Live Stream</h3>
                <a 
                  href={event.details.livestream} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-purple-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Watch Now
                </a>
              </div>
            )}

            {event.details.gallery && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Gallery Preview</h3>
                <div className="grid grid-cols-2 gap-2">
                  {event.details.gallery.slice(0,4).map((img, i) => (
                    <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={img}
                        alt={`Event gallery ${i+1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}