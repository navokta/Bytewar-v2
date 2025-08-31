'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const eventsData = {
  'registration': {
    title: "Registration Phase",
    date: "September 1-15, 2025",
    description: "Welcome to the gateway of innovation — India's most prestigious hackathon, where the nation brightest minds, visionary coders, and passionate problem-solvers come together to tackle real-world challenges through technology and creativity. This is more than just a competition — it's a celebration of ideas, collaboration, and breakthroughs that can shape the future. If you have the spark to think differently, the courage to build boldly, and the drive to make an impact, this is your moment. Register now and unlock a journey that could change everything — including you.",
    status: "Active",
    icon: "📝",
    tech: ["Guts", "Information", "Team"],
    glowColor: "rgba(156, 163, 175, 0.3)",
    details: {
      overview: "This phase marked the official launch of ByteWar 2025 — a nationwide call that ignited the spirit of innovation, as brilliant minds and passionate teams from every corner of the country registered to be part of this ultimate technological showdown.",
      statistics: [
        "You must be 16 years or older to participate in ByteWar 2025.",
        "Once registered, withdrawal is not allowed. Commit only if you are ready to see it through.",
        "All participants must provide accurate and verifiable personal details during registration.",
        "Participation is open exclusively to Indian citizens."
      ],
      benefits: [
        "Early registrants received cloud credits",
        "Access to preparatory webinars",
        "Team formation assistance",
        "Technical resource kits"
      ]
    }
  },
  'video-submission': {
    title: "Video Submission Round",
    date: "September 16-18, 2025",
    description: "As part of the initial submission round, each team is required to create a 2–4 minute video pitch. This video plays a vital role in helping our jury understand your team, your chosen problem statement, and the innovation you bring to the table. ",
    status: "upcoming",
    icon: "🎥",
    tech: ["Confidence", "Communication"],
    glowColor: "rgba(167, 139, 250, 0.4)",
    details: {
      submissionDeadline: "September 18, 2025, 23:59 IST",
      contentRequirements: [
        "Introduction to Your Team",
        "Chosen Problem Statement",
        "Project Idea and Purpose",
        "Solution Approach (Optional but Recommended)"
      ],
      technicalRequirements: [
        "2-4 minutes duration",
        "English or Hindi (or subtitled)",
        "Good audio/video quality",
        "Public/unlisted YouTube or Google Drive link"
      ],
      submissionLink: "https://bytewar.submit/videos",
      note: "This video will play a key role in the shortlisting process. Teams failing to submit on time may be disqualified from further rounds."
    }
  },
  'ppt-submission': {
    title: "PPT Submission Round",
    date: "September 21-24, 2025",
    description: "As part of the next evaluation phase of ByteWar 2025, all participating teams are required to submit a detailed PowerPoint presentation that clearly communicates their project vision, technical approach, and real-world impact. Your PPT will serve as a key component for judging and shortlisting the most promising ideas. Below is the complete breakdown of what your presentation should include:",
    status: "Upcoming",
    icon: "📊",
    tech: ["Design", "Presenting Skills", "Business"],
    glowColor: "rgba(96, 165, 250, 0.4)",
    details: {
      requirements: [
        "Your PPT must contain 8 to 12 slides.",
        "Use a clean, professional, and visually engaging layout.",
        "Incorporate bullet points, icons, graphics, charts, or mockups where needed to keep it engaging and informative.",
        "Submit your presentation in .PDF or .PPTX format.",
        "Name your file in the following format: TeamName_ProjectTitle_ByteWar2025.pptx",
        "Upload your file to the official submission portal or share a downloadable link (Google Drive, OneDrive, etc.) as per instructions provided."
      ],
      format: "PDF or PowerPoint (15 slides max)",
      prizes: "Top 20 teams advance to next round"
    }
  },
  'mentorship': {
  title: "Coding Phase Mentorship",
  date: "September 27-28, 2025",
  description: "During the coding phase, each shortlisted team will get a focused 10-minute mentorship slot with industry experts to refine their approach, clarify strategies, and boost their overall execution — without diving into technical troubleshooting.",
  status: "Upcoming",
  icon: "🧑‍🏫",
  tech: ["Mentoring", "Strategy", "Execution"],
  glowColor: "rgba(96, 165, 250, 0.4)",
  details: {
    rules: [
      "Only one team member is allowed to attend the mentorship session.",
      "Each session is strictly 10 minutes.",
      "No technical or code-level questions are permitted."
    ],
    schedule: [
      "Day 1: Strategy and workflow alignment",
      "Day 2: Progress review and execution guidance"
    ],
    benefits: [
      "Focused project guidance",
      "Execution and time-management tips",
      "Pitch clarity enhancement",
      "Networking opportunity with mentors"
    ],
    deliverables: [
      "Refined project strategy document",
      "Updated task execution plan",
      "Clear action points for final submission"
    ]
  }
},
  'coding-round': {
    title: "Coding Phase",
    date: "September 29 - October 6, 2025",
    description: "7-day intensive development sprint to transform your concept into a working prototype.",
    status: "Upcoming",
    icon: "💻",
    tech: ["Development", "Debugging", "DevOps"],
    glowColor: "rgba(96, 165, 250, 0.4)",
    details: {
      rules: [
        "Original code only (strict anti-plagiarism policy)",
        "Comprehensive documentation required",
        "Final submission includes demo video"
      ]
    }
  },
  'finals': {
    title: "Final Submission",
    date: "October 8, 2025",
    description: "Grand finale where top teams present their solutions to a panel of elite judges.",
    status: "Upcoming",
    icon: "🏆",
    tech: ["Demo", "Pitching", "Negotiation"],
    glowColor: "rgba(96, 165, 250, 0.4)",
    details: {
      format: [
        "15-minute live presentation",
        "10-minute Q&A with judges",
        "Working demo required"
      ],
      livestream: "https://youtube.com/bytewar"
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

  const getStatusColor = () => {
    switch(event?.status) {
      case 'Completed': return 'bg-gray-600 text-gray-200';
      case 'Active': return 'bg-purple-600 text-white';
      case 'Upcoming': return 'bg-blue-600 text-white';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const getGradient = () => {
    switch(event?.status) {
      case 'Completed': return 'from-gray-800 to-gray-900';
      case 'Active': return 'from-purple-700 to-indigo-800';
      case 'Upcoming': return 'from-blue-700 to-cyan-800';
      default: return 'from-gray-700 to-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
            className="w-5 h-5 rounded-full bg-blue-500"
          ></motion.div>
          <div className="text-white font-mono">Loading event details...</div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white font-mono">Event not found</div>
      </div>
    );
  }

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

      <div className="relative z-10">
        {/* Hero Section */}
        <div className={`relative bg-gradient-to-br ${getGradient()} py-16 md:py-24 overflow-hidden`}>
          {/* Circuit Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-t border-l border-white/10"
                style={{
                  width: `${Math.random() * 30 + 10}%`,
                  height: `${Math.random() * 30 + 10}%`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.button 
              onClick={() => router.back()}
              whileHover={{ x: -5 }}
              className="flex items-center text-gray-400 hover:text-white transition-colors group mb-8"
            >
              <svg className="w-5 h-5 mr-2 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span className="group-hover:text-blue-400 transition-colors font-mono">BACK TO EVENTS</span>
            </motion.button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold mb-6 ${getStatusColor()} font-mono tracking-wider`}>
                  <span className="mr-2">{event.icon}</span>
                  {event.status.toUpperCase()}
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tighter"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    {event.title}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg sm:text-xl text-white/80 font-mono"
                >
                  {event.date}
                </motion.p>
              </div>
              
              {event.status === "Active" && event.details.submissionLink && (
                <motion.a
                  href={event.details.submissionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center space-x-2"
                >
                  <span>SUBMIT NOW</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Tech Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {event.tech.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-mono font-bold ${
                  event.status === 'Completed' ? 'bg-gray-800/50 text-gray-300' :
                  event.status === 'Active' ? 'bg-purple-900/50 text-purple-200' :
                  'bg-blue-900/50 text-blue-200'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-800/50"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  EVENT OVERVIEW
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">{event.description}</p>
                
                {event.details.overview && (
                  <>
                    <h3 className="text-xl font-semibold mb-4 text-white">PHASE SUMMARY</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">{event.details.overview}</p>
                  </>
                )}

                {event.details.statistics && (
                  <>
                    <h3 className="text-xl font-semibold mb-4 text-white">KEY STATISTICS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {event.details.statistics.map((stat, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                          <div className="text-sm text-gray-400 mb-1">STAT {i+1}</div>
                          <div className="text-lg font-medium">{stat}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Show all details that are arrays */}
                {Object.entries(event.details).map(([key, value], index) => {
                  if (Array.isArray(value) && !['statistics', 'benefits'].includes(key)) {
                    return (
                      <div key={key} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-white capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        </h3>
                        <ul className="space-y-3">
                          {value.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="flex items-start"
                            >
                              <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                                event.status === 'Completed' ? 'bg-gray-400' :
                                event.status === 'Active' ? 'bg-purple-400' :
                                'bg-blue-400'
                              }`}></span>
                              <span className="text-gray-300">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800/50"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  EVENT STATUS
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 font-mono tracking-wider">PHASE</div>
                    <div className="text-lg font-bold">{event.title}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono tracking-wider">STATUS</div>
                    <div className={`text-lg font-bold ${
                      event.status === 'Completed' ? 'text-gray-300' :
                      event.status === 'Active' ? 'text-purple-300' :
                      'text-blue-300'
                    }`}>
                      {event.status}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono tracking-wider">DATE</div>
                    <div className="text-lg font-medium">{event.date}</div>
                  </div>
                  {event.details.submissionDeadline && (
                    <div>
                      <div className="text-sm text-gray-400 font-mono tracking-wider">DEADLINE</div>
                      <div className="text-lg font-medium">{event.details.submissionDeadline}</div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Action Card */}
              {(event.details.submissionLink || event.details.livestream) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`rounded-2xl p-6 border ${
                    event.details.submissionLink ? 
                      'bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-purple-700/50' :
                      'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-700/50'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {event.details.submissionLink ? 'SUBMISSION PORTAL' : 'LIVE STREAM'}
                  </h3>
                  <motion.a
                    href={event.details.submissionLink || event.details.livestream} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    {event.details.submissionLink ? 'Submit Now' : 'Watch Live'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.a>
                </motion.div>
              )}

              {/* Evaluation Criteria */}
              {event.details.evaluationCriteria && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800/50"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                    EVALUATION CRITERIA
                  </h3>
                  <ul className="space-y-3">
                    {event.details.evaluationCriteria.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-start bg-gray-800/30 p-3 rounded-lg"
                      >
                        <span className={`inline-block w-3 h-3 rounded-full mt-1 mr-3 ${
                          event.status === 'Completed' ? 'bg-gray-400' :
                          event.status === 'Active' ? 'bg-purple-400' :
                          'bg-blue-400'
                        }`}></span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
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
}