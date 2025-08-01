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
          id: 'adaptive-learning',
          title: 'Adaptive Learning Platform',
          description: 'Create an AI-powered learning platform that personalizes educational content',
          difficulty: 'Hard',
          participants: 110
        },
        {
          id: 'virtual-classroom',
          title: 'Immersive Virtual Classroom',
          description: 'Develop a VR/AR solution for interactive remote learning experiences',
          difficulty: 'Medium',
          participants: 75
        }
      ]
    },
    'disaster-management': {
      name: 'DISASTER MANAGEMENT',
      icon: '🌪️',
      color: 'from-green-500 to-emerald-500',
      problems: [
        {
          id: 'early-warning-system',
          title: 'AI-Powered Early Warning System',
          description: 'Build a predictive system for natural disaster detection and alerts',
          difficulty: 'Hard',
          participants: 140
        },
        {
          id: 'resource-allocation',
          title: 'Emergency Resource Allocation',
          description: 'Create a system for efficient distribution of resources during disasters',
          difficulty: 'Medium',
          participants: 90
        }
      ]
    },
    'environmental-sustainability': {
      name: 'ENVIRONMENTAL SUSTAINABILITY',
      icon: '🌍',
      color: 'from-yellow-500 to-amber-500',
      problems: [
        {
          id: 'carbon-footprint-tracker',
          title: 'Smart Carbon Footprint Tracker',
          description: 'Develop an IoT-based system for monitoring and reducing carbon emissions',
          difficulty: 'Hard',
          participants: 105
        },
        {
          id: 'waste-management',
          title: 'Intelligent Waste Management',
          description: 'Create a smart solution for efficient waste collection and recycling',
          difficulty: 'Medium',
          participants: 130
        }
      ]
    },
    'healthcare-innovation': {
      name: 'HEALTHCARE INNOVATION',
      icon: '🏥',
      color: 'from-pink-500 to-rose-500',
      problems: [
        {
          id: 'telemedicine-platform',
          title: 'Advanced Telemedicine Platform',
          description: 'Build a comprehensive remote healthcare consultation system',
          difficulty: 'Hard',
          participants: 140
        },
        {
          id: 'patient-monitoring',
          title: 'IoT Patient Monitoring System',
          description: 'Create real-time health monitoring for chronic disease patients',
          difficulty: 'Medium',
          participants: 95
        }
      ]
    },
    'artificial-intelligence': {
      name: 'ARTIFICIAL INTELLIGENCE',
      icon: '🤖',
      color: 'from-red-500 to-orange-500',
      problems: [
        {
          id: 'predictive-analytics',
          title: 'Business Predictive Analytics',
          description: 'Develop AI models for business trend prediction and decision making',
          difficulty: 'Hard',
          participants: 120
        },
        {
          id: 'natural-language-processing',
          title: 'Multilingual NLP Assistant',
          description: 'Create an AI assistant that understands and responds in multiple languages',
          difficulty: 'Medium',
          participants: 85
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
          id: 'traffic-optimization',
          title: 'Intelligent Traffic Optimization',
          description: 'Develop AI-powered traffic management for reducing congestion',
          difficulty: 'Hard',
          participants: 105
        },
        {
          id: 'energy-management',
          title: 'Smart Energy Grid Management',
          description: 'Create a system for optimizing energy distribution in urban areas',
          difficulty: 'Medium',
          participants: 95
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
          id: 'smart-contracts',
          title: 'Self-Executing Smart Contracts',
          description: 'Develop blockchain-based smart contracts for automated legal agreements in real estate or freelancing',
          difficulty: 'Hard',
          participants: 90
        },
        {
          id: 'ai-legal-assistant',
          title: 'AI-Powered Legal Research Assistant',
          description: 'Build a tool that helps lawyers quickly find relevant case laws, statutes, and precedents using NLP',
          difficulty: 'Medium',
          participants: 100
        },
        {
          id: 'compliance-monitoring',
          title: 'Automated Regulatory Compliance System',
          description: 'Create a platform that continuously monitors business operations for legal and regulatory compliance',
          difficulty: 'Hard',
          participants: 115
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              {theme.name}
            </span>
            <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
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