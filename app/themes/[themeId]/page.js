// app/themes/[themeId]/page.js (Theme Problems Page)
"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const ThemeProblemsPage = () => {
  const params = useParams();
  const themeId = params.themeId;

  // Mock data for themes and problems - UPDATED IDs to match app/themes/page.js
  const themesData = {
    'blockchain-cybersecurity': {
      name: 'BLOCKCHAIN & CYBERSECURITY',
      icon: '🔐',
      color: 'from-purple-600 to-indigo-600',
      problems: [
        {
          id: 'secure-voting',
          title: 'Secure Digital Voting System',
          description: 'Create a blockchain-based voting system that ensures transparency and security',
          difficulty: 'Hard',
          participants: 120
        },
        {
          id: 'phishing-detection',
          title: 'AI-Powered Phishing Detection',
          description: 'Develop an intelligent system to detect and prevent phishing attacks',
          difficulty: 'Medium',
          participants: 85
        },
        {
          id: 'data-leak-prevention',
          title: 'Automated Data Leak Prevention',
          description: 'Build a system that monitors and prevents sensitive data leaks in real-time',
          difficulty: 'Hard',
          participants: 95
        }
      ]
    },
    'smart-education': {
      name: 'SMART EDUCATION',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
      problems: [
        {
          id: 'learning-tracker-school-parents',
          title: 'Learning Tracker for School-Parents',
          description: 'A real-time digital platform that connects schools and parents by tracking student academic performance, attendance, behavior, and assignments.',
          difficulty: 'Medium',
          participants: 148
        },
       {
          id: 'online-note-summarizer',
          title: 'Online Note Summarizer',
          description: 'AI-powered platform to automatically generate concise summaries, key points, and mind maps from long notes to improve revision and retention.',
          difficulty: 'Medium',
          participants: 135
        },
        {
          id: 'ai-career-path-advisor',
          title: 'AI Career Path Advisor',
          description: 'A personalized AI-driven tool that guides individuals in selecting and advancing their career in AI based on skills, goals, and market trends.',
          difficulty: 'Medium',
          participants: 124
        },
        {
          id: 'inclusive-learning-platform',
          title: 'Inclusive Learning for Students with Disabilities',
          description: 'An assistive digital learning platform designed to support students with physical, cognitive, or learning disabilities using adaptive tools and personalized content.',
          difficulty: 'Medium',
          participants: 118
        },
        {
          id: 'peer-doubt-solving-platform',
          title: 'Peer-to-Peer Doubt Solving Platform',
          description: 'A collaborative platform where students can ask academic questions and get answers from verified peers, mentors, or subject experts in real time.',
          difficulty: 'Medium',
          participants: 141
        },
        {
          id: 'real-time-engagement-tracker',
          title: 'Real-Time Engagement Tracker for Online Classes',
          description: 'An AI-based system that monitors student engagement during live online classes using facial, audio, and activity data to support instructors with live analytics and intervention.',
          difficulty: 'Hard',
          participants: 139
        },
        {
          id: 'teacher-productivity-platform',
          title: 'Teacher Productivity Platform',
          description: 'A centralized digital platform designed to help teachers manage lesson planning, grading, student analytics, and scheduling for increased productivity and better learning outcomes.',
          difficulty: 'Medium',
          participants: 122
        }

      ]
    },
    'healthcare-innovation': {
      name: 'HEALTHCARE INNOVATION',
      icon: '🏥',
      color: 'from-pink-500 to-rose-500',
      problems: [
        {
          id: 'anonymous-venting-platform',
          title: 'Anonymous Venting & Emotional Support Platform',
          description: 'A secure and anonymous space for users to vent emotions, get crowd-sourced support, and receive AI-assisted mental health resources without judgment or identity tracking.',
          difficulty: 'Medium',
          participants: 137
        },
        {
          id: 'mental-health-early-detection',
          title: 'Early Detection of Mental Health Issues',
          description: 'An AI-powered platform using text, voice, and wearable data to detect early signs of mental health conditions and provide personalized, stigma-free support.',
          difficulty: 'Hard',
          participants: 131
        },
        {
          id: 'medicine-reminder-app',
          title: 'Medicine Reminder & Pill Management App',
          description: 'A voice-enabled, AI-powered app for medication tracking, pill identification, pharmacy sync, and caregiver support to reduce missed doses and improve adherence.',
          difficulty: 'Medium',
          participants: 129
        },
        {
          id: 'mindfulness-companion',
          title: 'Personalized Mindfulness Companion',
          description: 'An AI-based app that recommends mood-specific mindfulness practices like breathing, journaling, and meditation to improve mental well-being.',
          difficulty: 'Medium',
          participants: 133
        },
        {
          id: 'smart-queue-scheduler',
          title: 'Smart Appointment Scheduling & Queue Management System',
          description: 'An AI-based platform to optimize appointment booking, automate queue flow, and reduce wait times for clinics, salons, and service centers.',
          difficulty: 'Medium',
          participants: 126
        },
        {
          id: 'voice-mental-health-assistant',
          title: 'Voice-Activated Mental Health Assistant',
          description: 'A conversational AI assistant that provides real-time emotional support, coping exercises, and suicide risk detection through multilingual voice interaction.',
          difficulty: 'Hard',
          participants: 134
        },
        {
          id: 'telemedicine-rural-healthcare',
          title: 'Tele-Medicine Platform for Rural Healthcare Access',
          description: 'A low-bandwidth, multilingual telemedicine system for rural areas, offering AI-assisted triage, doctor consults, offline prescriptions, and local pharmacy coordination.',
          difficulty: 'Hard',
          participants: 145
        },
        {
          id: 'blockchain-health-records',
          title: 'Blockchain-Powered Health Record Management System',
          description: 'A secure, decentralized system for managing and sharing electronic health records using blockchain, giving patients full control and auditability.',
          difficulty: 'Hard',
          participants: 190
        }
      ]
    },
    'artificial-intelligence': {
      name: 'ARTIFICIAL INTELLIGENCE',
      icon: '🤖',
      color: 'from-red-500 to-orange-500',
      problems: [
        {
          id: 'emotion-detector-ai',
          title: 'AI-Based Emotion Detector from Voice and Text',
          description: 'An AI-powered tool that detects emotions like happiness, sadness, and anger from text and voice inputs, offering real-time feedback for integration into apps and services.',
          difficulty: 'Medium',
          participants: 130
        },
        {
          id: 'predictive-maintenance-ai',
          title: 'Predictive Maintenance for Machines or Vehicles',
          description: 'An AI-powered system that forecasts machine or vehicle failures using sensor and log data, helping reduce downtime and optimize maintenance schedules in industrial and fleet settings.',
          difficulty: 'Hard',
          participants: 138
        },
        {
          id: 'sales-inventory-automation',
          title: 'Sales Forecasting and Inventory Automation System',
          description: 'An AI-powered platform to forecast sales, automate inventory decisions, and reduce stock-related inefficiencies using historical data and real-time trends.',
          difficulty: 'Medium',
          participants: 132
        },
        {
          id: 'ai-code-review-system',
          title: 'AI Based Code Quality Review System',
          description: 'An AI-powered tool that reviews code for bugs, optimization, readability, and best practices across multiple programming languages.',
          difficulty: 'Medium',
          participants: 120
        },
        {
          id: 'ai-resume-analyser',
          title: 'AI Powered Resume Analyser for Job Fitment',
          description: 'An AI tool that matches resumes with job descriptions to generate objective fitment scores, highlight skill gaps, and streamline hiring.',
          difficulty: 'Medium',
          participants: 110
        },
        {
          id: 'ai-traffic-violation-detector',
          title: 'AI Powered Traffic Violation Detection System',
          description: 'AI system that analyzes real-time video feeds to detect and report traffic violations, enhancing road safety and reducing manual enforcement.',
          difficulty: 'Hard',
          participants: 95
        },
        {
          id: 'real-time-news-verifier',
          title: 'Real-time AI News Verifier',
          description: 'An AI-powered tool that verifies news credibility in real-time by detecting misinformation, analyzing bias, and evaluating source trustworthiness.',
          difficulty: 'Hard',
          participants: 92
        }
      ]
    },
    'fintech-solutions': {
      name: 'FINTECH SOLUTIONS',
      icon: '💰',
      color: 'from-teal-500 to-cyan-500',
      problems: [
        {
          id: 'transparent-investment-education-platform',
          title: 'Transparent Investment Education Platform',
          description: 'A web/mobile platform designed to educate beginners about investments in a transparent and unbiased way.',
          difficulty: 'Hard',
          participants: 110
        },
        {
          id: 'tax-filing-amplifier-gig-freelancers',
          title: 'Tax Filing Amplifier for Gig Workers and Freelancers',
          description: 'A platform designed to simplify and automate tax filing for gig workers, freelancers, and independent contractors.',
          difficulty: 'Medium',
          participants: 130
        },
        {
          id: 'smart-credit-scoring-unbanked',
          title: 'Smart Credit Scoring System for Unbanked',
          description: 'An AI-powered alternative credit scoring system designed for individuals without formal banking history.',
          difficulty: 'Medium',
          participants: 130
        },
        {
          id: 'smart-bill-splitter-upi',
          title: 'Smart Bill Splitter and UPI Integration',
          description: 'A mobile/web application that simplifies splitting group expenses and settling payments through UPI.',
          difficulty: 'Medium',
          participants: 130
        },
        {
          id: 'personal-finance-tracker-youngsters',
          title: 'Personal Finance Tracker for Youngsters',
          description: 'A mobile/web-based app to help students and young adults manage income, expenses, savings goals, and budgets.',
          difficulty: 'Medium',
          participants: 130
        },
        {
          id: 'micro-saving-platform-daily-earners',
          title: 'Micro Saving Platform for Daily Earners',
          description: 'A platform that helps daily wage earners save small amounts of money easily and access financial services.',
          difficulty: 'Medium',
          participants: 130
        },
        {
          id: 'gamified-financial-literacy-platform',
          title: 'Gamified Financial Literacy Platform',
          description: 'A platform that uses gamification to teach financial literacy concepts to users of all ages.',
          difficulty: 'Medium',
          participants: 130
        },
        {
          id: 'fraud-detection-upi-ai',
          title: 'Fraud Detection System for UPI Transactions',
          description: 'An AI-based system to detect and prevent fraudulent transactions in UPI payments.',
          difficulty: 'Hard',
          participants: 140
        },
        {
          id: 'decentralized-p2p-lending-platform',
          title: 'Decentralized Peer-to-Peer Lending Platform',
          description: 'A blockchain-based platform that connects borrowers and lenders directly, without intermediaries.',
          difficulty: 'Hard',
          participants: 140
        },
        {
          id: 'cash-flow-tracker',
          title: 'Cash Flow Tracker for Small Businesses',
          description: 'A tool to help small businesses monitor and manage their cash flow effectively.',
          difficulty: 'Medium',
          participants: 120
        },
        {
          id: 'ai-driven-personal-finance-assistant',
          title: 'AI-Driven Personal Finance Assistant',
          description: 'An AI-based system to provide personalized financial advice and insights to users.',
          difficulty: 'Hard',
          participants: 140
        },
        {
          id: 'mobile-banking-visually-impaired',
          title: 'Mobile Banking Solution for Visually Impaired',
          description: 'An accessible mobile banking application designed for visually impaired users.',
          difficulty: 'Hard',
          participants: 140
        },
        {
          id: 'ai-driven-credit-scoring',
          title: 'AI-Driven Credit Scoring System',
          description: 'An AI-based system to assess creditworthiness using alternative data sources.',
          difficulty: 'Hard',
          participants: 140
        }
      ]
    },
    'smart-cities': {
      name: 'SMART CITIES',
      icon: '🏙️',
      color: 'from-indigo-500 to-purple-500',
      problems: [
        {
          id: 'air-quality-noise-monitoring-app',
          title: 'Air Quality and Noise Monitoring App',
          description: 'Develop a mobile app for real-time air quality and noise level monitoring in urban areas',
          difficulty: 'Hard',
          participants: 105
        },
        {
          id: 'citizen-participation-feedback-platform',
          title: 'Citizen Participation and Feedback Platform',
          description: 'Create a platform for citizens to provide feedback and participate in urban planning decisions',
          difficulty: 'Medium',
          participants: 95
        },
        {
          id: 'civic-engagement-issue-reporting-app',
          title: 'Civic Engagement Issue Reporting App',
          description: 'Create a platform for citizens to report issues and participate in urban planning decisions',
          difficulty: 'Medium',
          participants: 95
        },
        {
          id: 'energy-consumption-dashboard',
          title: 'Energy Consumption Dashboard',
          description: 'Create a dashboard for monitoring and analyzing energy consumption in real-time',
          difficulty: 'Medium',
          participants: 95
        },
        {
          id: 'intelligent-parking-finder',
          title: 'Intelligent Parking Finder',
          description: 'Develop an AI-powered app to help users find available parking spots in real-time',
          difficulty: 'Medium',
          participants: 95
        },
        {
          id: 'public-transport-optimisation',
          title: 'Public Transport Optimisation',
          description: 'Develop a system to optimize public transport routes and schedules using real-time data',
          difficulty: 'Hard',
          participants: 100
        },
        {
          id: 'unified-city-service-app',
          title: 'Unified City Service App',
          description: 'A centralized digital platform that consolidates municipal services into one user-friendly application. It streamlines service access, enhances communication between citizens and city departments, and improves the efficiency of urban governance.',
          difficulty: 'Hard',
          participants: 100
        },
        {
          id: 'urban-flood-monitoring',
          title: 'Urban Flood Monitoring System',
          description: 'Develop a system to monitor and predict urban flooding using IoT and AI technologies.',
          difficulty: 'Hard',
          participants: 100
        },
        {
          id: 'energy-consumption-dashboard',
          title: 'Energy Consumption Dashboard',
          description: 'Develop a dashboard to monitor and analyze energy consumption in real-time.',
          difficulty: 'Hard',
          participants: 100
        },
        {
          id: 'waste-segregation-smart-bin',
          title: 'Waste Segregation and Smart Bin Monitoring',
          description: 'An AI-powered system designed to automate waste segregation and provide real-time monitoring of waste bins using computer vision and sensor data. It aims to optimize collection schedules, improve recycling, and enhance smart city infrastructure.',
          difficulty: 'Hard',
          participants: 100
        }
      ]
    },
    // 🔹 NEW THEME: LEGALTECH
    'legaltech': {
      name: 'LEGALTECH',
      icon: '⚖️',
      color: 'from-indigo-600 to-blue-600',
      problems: [
        {
          id: 'court-case-manager',
          title: 'Court Hearing and Case Management Platform',
          description: 'A digital platform to manage court cases, schedule hearings, upload documents, and receive real-time updates, enhancing judicial transparency and efficiency.',
          difficulty: 'Medium',
          participants: 140
        },
        {
          id: 'access-to-justice',
          title: 'Access to Justice for Underserved Communities',
          description: 'A multilingual mobile platform that connects underserved users with legal help, chatbots, and self-help tools to ensure access to justice.',
          difficulty: 'Medium',
          participants: 160
        },
        {
          id: 'automated-legal-doc-generator',
          title: 'Automated Legal Document Generator',
          description: 'An AI-assisted platform to generate customized, compliant legal documents like contracts and NDAs using smart forms and templates.',
          difficulty: 'Medium',
          participants: 135
        },
        {
          id: 'fake-legal-doc-detector',
          title: 'Fake Legal Document Detector',
          description: 'An AI-powered system to detect forged or unauthorized legal documents using OCR, metadata     verification, and machine learning to ensure trust and security in legal operations.',
          difficulty: 'Hard',
          participants: 115
        },
        {
          id: 'ai-legal-doc-summarizer',
          title: 'AI Powered Legal Document Summarizer',
          description: 'An NLP-based tool to summarize lengthy legal documents like contracts and case law into concise, accurate, and readable summaries for legal professionals and the public.',
          difficulty: 'Hard',
          participants: 142
        },
        {
          id: 'legal-right-awareness-tool',
          title: 'Legal Right Awareness Tool',
          description: 'A multilingual, mobile-friendly platform to educate users about their legal rights in real-world scenarios like police stops, tenancy issues, or workplace disputes, using plain language and location-based info.',
          difficulty: 'Medium',
          participants: 113
        },
        {
          id: 'legal-risk-analyzer',
          title: 'Legal Risk Analyzer for Contracts',
          description: 'An AI-powered tool to scan contracts, identify legal risks, and generate summaries for fast review and decision-making.',
          difficulty: 'Hard',
          participants: 127
        },
        {
          id: 'legal-risk-scoring-startups',
          title: 'Legal Risk Scoring for Startups',
          description: 'An automated tool that assesses a startup’s legal health via questionnaires and document analysis, providing a risk score and improvement suggestions.',
          difficulty: 'Medium',
          participants: 119
        },
        {
          id: 'legislative-bill-tracker',
          title: 'Legislative Bill Tracker with Impact Forecasting',
          description: 'A real-time bill tracking platform that uses AI to forecast legal, social, and economic impact of proposed legislation, helping citizens and stakeholders stay informed.',
          difficulty: 'Hard',
          participants: 135
        }



      ]
    }
  }; 

  const theme = themesData[themeId] || themesData['blockchain-cybersecurity'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-x-hidden">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-20">
        {/* Header Section - Responsive */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${theme.color} text-3xl sm:text-4xl shadow-lg`}>
              {theme.icon}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 px-2 leading-tight sm:leading-snug">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              {theme.name}
            </span>
            <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x block mt-1 sm:mt-2">
              Challenges
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Select a problem statement to explore detailed requirements
          </p>
        </div>

        {/* Problems Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {theme.problems.map((problem) => (
            <Link
              key={problem.id}
              href={`/themes/${themeId}/${problem.id}`}
              className="group relative block"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}></div>

              {/* Card - Enhanced Responsive Design */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-4 sm:p-6 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-active:scale-95 min-h-[200px] sm:min-h-[220px]">
                {/* Header with Title and Difficulty */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500 leading-tight">
                    {problem.title}
                  </h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap self-start ${problem.difficulty === 'Hard'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : problem.difficulty === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                    {problem.difficulty}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                  {problem.description}
                </p>

                {/* Footer with Participants and Button */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{problem.participants} participants</span>
                  </div>

                  <button className={`px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r ${theme.color} text-white font-bold text-sm sm:text-base rounded-lg hover:opacity-90 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl whitespace-nowrap`}>
                    <span className="hidden sm:inline">View Details</span>
                    <span className="sm:hidden">Details</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Button - Responsive */}
        <div className="text-center">
          <Link
            href="/themes"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline">Back to All Themes</span>
            <span className="sm:hidden">Back to Themes</span>
          </Link>
        </div>
      </main>

      {/* Footer - Full Width */}
      <footer className="relative z-10 w-full">
        <Footer />
      </footer>

      {/* Custom Styles - Enhanced for Mobile */}
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
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .group:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeProblemsPage;