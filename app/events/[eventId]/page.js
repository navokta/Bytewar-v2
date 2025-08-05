'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Enhanced events data with your requirements
const eventsData = {
  'registration': {
    title: "Registration Phase",
    date: "September 1-15, 2025",
    description: "The gateway to India's most prestigious hackathon where innovative minds converge to solve real-world problems.",
    status: "Completed",
    icon: "📝",
    details: {
      overview: "This phase marked the beginning of ByteWar 2025, with teams from across the country registering their interest to participate in this technological showdown.",
      statistics: [
        "150+ applications received",
        "80% from engineering backgrounds",
        "20% first-time hackers",
        "Representation from 15+ states"
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
    description: "Craft your 2-4 minute pitch showcasing your team, problem statement, and innovative solution approach.",
    status: "Active",
    icon: "🎥",
    details: {
      submissionDeadline: "September 18, 2025, 23:59 IST",
      contentRequirements: [
        "Team introduction (members, roles, skills)",
        "Clear problem statement with context",
        "Solution overview and expected impact",
        "Motivation behind choosing this problem"
      ],
      technicalRequirements: [
        "2-4 minutes duration",
        "English or Hindi (or subtitled)",
        "Good audio/video quality",
        "Public/unlisted YouTube or Google Drive link"
      ],
      evaluationCriteria: [
        "Clarity of problem statement (25%)",
        "Innovation in solution (30%)",
        "Team capability (20%)",
        "Presentation quality (15%)",
        "Potential impact (10%)"
      ],
      submissionLink: "https://bytewar.submit/videos",
      note: "This video will play a key role in the shortlisting process. Teams failing to submit on time may be disqualified from further rounds."
    }
  },
  'ppt-submission': {
    title: "PPT Submission Round",
    date: "September 21-24, 2025",
    description: "Detailed presentation of your technical solution with comprehensive analysis and implementation plan.",
    status: "Upcoming",
    icon: "📊",
    details: {
      requirements: [
        "Team introduction with backgrounds",
        "Problem statement with real-world relevance",
        "Target audience and expected impact",
        "Project workflow with diagrams",
        "Market and competitor analysis",
        "Technology stack justification",
        "Future scope and vision"
      ],
      format: "PDF or PowerPoint (15 slides max)",
      evaluationCriteria: [
        "Technical depth (30%)",
        "Innovation (25%)",
        "Feasibility (20%)",
        "Market potential (15%)",
        "Presentation quality (10%)"
      ],
      prizes: "Top 20 teams advance to next round"
    }
  },
  'mentorship': {
    title: "Mentorship Sessions",
    date: "September 27-28, 2025",
    description: "Personalized guidance from industry experts to refine your project before the coding marathon.",
    status: "Upcoming",
    icon: "🧑‍🏫",
    details: {
      schedule: [
        "Day 1: Technical deep dive (architecture review, stack optimization)",
        "Day 2: Business refinement (model validation, pitch coaching)"
      ],
      mentors: [
        "CTO of TechCorp India",
        "Lead Engineer at InnovateX",
        "Product Manager at FutureTech",
        "Design Lead at CreativeMinds"
      ],
      benefits: [
        "One-on-one feedback sessions",
        "Technical roadmap refinement",
        "Investor pitch preparation",
        "Networking opportunities"
      ],
      deliverables: [
        "Revised technical documentation",
        "Business model canvas",
        "Improved presentation materials"
      ]
    }
  },
  'coding-round': {
    title: "Coding Phase",
    date: "September 29 - October 6, 2025",
    description: "7-day intensive development sprint to transform your concept into a working prototype.",
    status: "Upcoming",
    icon: "💻",
    details: {
      rules: [
        "Original code only (strict anti-plagiarism policy)",
        "Daily standup meetings (9:00 AM IST)",
        "Mentor check-ins every 48 hours",
        "Comprehensive documentation required",
        "Final submission includes demo video"
      ],
      resources: [
        "$500 AWS/GCP credits per team",
        "API access to partner platforms",
        "24/7 technical support",
        "Design asset library",
        "Co-working space access"
      ],
      judgingCriteria: [
        "Functionality (40%)",
        "Innovation (25%)",
        "Code quality (20%)",
        "Documentation (15%)"
      ]
    }
  },
  'finals': {
    title: "Final Presentation",
    date: "October 8, 2025",
    description: "Grand finale where top teams present their solutions to a panel of elite judges.",
    status: "Upcoming",
    icon: "🏆",
    details: {
      format: [
        "15-minute live presentation",
        "10-minute Q&A with judges",
        "Working demo required"
      ],
      judgingPanel: [
        "Industry leaders",
        "Venture capitalists",
        "Technical experts",
        "Previous winners"
      ],
      prizes: [
        "1st Prize: ₹1,00,000 + incubation offer",
        "2nd Prize: ₹50,000 + mentorship",
        "3rd Prize: ₹25,000 + swag kits",
        "Special category awards (Best Design, Most Innovative, etc.)"
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="text-white">Loading event details...</div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Event not found</div>
      </div>
    );
  }

  const getStatusColor = () => {
    switch(event.status) {
      case 'Completed': return 'bg-gray-600 text-gray-200';
      case 'Active': return 'bg-purple-600 text-white';
      case 'Upcoming': return 'bg-blue-600 text-white';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const getGradient = () => {
    switch(event.status) {
      case 'Completed': return 'from-gray-800 to-gray-900';
      case 'Active': return 'from-purple-700 to-indigo-800';
      case 'Upcoming': return 'from-blue-700 to-cyan-800';
      default: return 'from-gray-700 to-gray-800';
    }
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
      {/* Cyberpunk-style header */}
      <div className="relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Glowing border */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${
          event.status === 'Completed' ? 'bg-gray-600' :
          event.status === 'Active' ? 'bg-purple-500' :
          'bg-blue-500'
        }`}></div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.button 
            onClick={() => router.back()}
            whileHover={{ x: -5 }}
            className="flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span className="group-hover:text-blue-400 transition-colors">Back to Events</span>
          </motion.button>
        </div>
      </div>

      {/* Holographic event header */}
      <div className={`relative bg-gradient-to-br ${getGradient()} py-12 md:py-16`}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-6 ${getStatusColor()}`}>
                <span className="mr-2">{event.icon}</span>
                {event.status.toUpperCase()}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{event.title}</h1>
              <p className="text-xl text-white/80">{event.date}</p>
            </div>
            
            {event.status === "Active" && event.details.submissionLink && (
              <motion.a
                href={event.details.submissionLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center space-x-2"
              >
                <span>Submit Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Primary content */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Overview
              </h2>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>

            {/* Detailed requirements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Requirements & Guidelines
              </h2>
              
              {event.id === 'video-submission' ? (
    <div className="space-y-6">
      {event.id === 'video-submission' && (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-white">Content Requirements:</h3>
        <ul className="space-y-3">
          {event.details.contentRequirements.map((item, i) => (
            <li key={`content-${i}`} className="flex items-start">
              <span className="inline-block w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="text-purple-400 text-xs">{i+1}</span>
              </span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-white">Technical Specifications:</h3>
        <ul className="space-y-3">
          {event.details.technicalRequirements.map((item, i) => (
            <li key={`tech-${i}`} className="flex items-start">
              <span className="inline-block w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="text-blue-400 text-xs">{i+1}</span>
              </span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}
    </div>
  ) : event.id === 'ppt-submission' ? (
                <div className="space-y-4">
                  {event.details.requirements.map((item, i) => (
                    <div key={i} className="pb-4 border-b border-gray-700/50 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold mb-2 text-white">{item.split(':')[0]}</h3>
                      <p className="text-gray-300">{item.split(':')[1] || item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {Object.entries(event.details).map(([key, value]) => {
                    if (Array.isArray(value)) {
                      return (
                        <li key={key} className="mb-6">
                          <h3 className="text-lg font-semibold mb-2 text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}:</h3>
                          <ul className="space-y-2 pl-5">
                            {value.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70 mt-2 mr-2"></span>
                                <span className="text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                    if (typeof value === 'string' && (value.startsWith('http') || key === 'date')) {
                      return null;
                    }
                    return (
                      <li key={key} className="mb-3">
                        <h3 className="text-lg font-semibold mb-1 text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}:</h3>
                        <p className="text-gray-300">{value}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>

            {/* Note section if exists */}
            {event.details.note && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-yellow-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-700/50"
              >
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-yellow-300">Important Note</h3>
                    <p className="text-yellow-200">{event.details.note}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Event Status
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">Phase</div>
                  <div className="text-lg font-bold">{event.title}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Status</div>
                  <div className={`text-lg font-bold ${
                    event.status === 'Completed' ? 'text-gray-300' :
                    event.status === 'Active' ? 'text-purple-300' :
                    'text-blue-300'
                  }`}>
                    {event.status}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Date</div>
                  <div className="text-lg font-medium">{event.date}</div>
                </div>
                {event.details.submissionDeadline && (
                  <div>
                    <div className="text-sm text-gray-400">Deadline</div>
                    <div className="text-lg font-medium">{event.details.submissionDeadline}</div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Action card */}
            {(event.details.submissionLink || event.details.livestream) && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`rounded-xl p-6 border ${
                  event.details.submissionLink ? 
                    'bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-purple-700/50' :
                    'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-700/50'
                }`}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {event.details.submissionLink ? 'Submission Portal' : 'Live Stream'}
                </h3>
                <a 
                  href={event.details.submissionLink || event.details.livestream} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  {event.details.submissionLink ? 'Submit Now' : 'Watch Live'}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </motion.div>
            )}

            {/* Evaluation criteria */}
            {event.details.evaluationCriteria && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  Evaluation Criteria
                </h3>
                <ul className="space-y-3">
                  {event.details.evaluationCriteria.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-400 mt-2 mr-2"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
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
}