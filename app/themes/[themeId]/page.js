// app/themes/[themeId]/page.js (Theme Problems Page)
"use client";

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
          id: 'blockchain-payments',
          title: 'Decentralized Payment System',
          description: 'Build a secure, low-cost cross-border payment solution using blockchain',
          difficulty: 'Hard',
          participants: 110
        },
        {
          id: 'personal-finance-ai',
          title: 'AI Personal Finance Manager',
          description: 'Create an intelligent system for automated financial planning',
          difficulty: 'Medium',
          participants: 130
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
    }
  };

  const theme = themesData[themeId] || themesData['blockchain-cybersecurity'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${theme.color} text-4xl`}>
              {theme.icon}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              {theme.name} Challenges
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select a problem statement to explore detailed requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {theme.problems.map((problem) => (
            <Link 
              key={problem.id}
              href={`/themes/${themeId}/${problem.id}`}
              className="group relative"
            >
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full transform transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                    {problem.title}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    problem.difficulty === 'Hard' 
                      ? 'bg-red-500/20 text-red-400' 
                      : problem.difficulty === 'Medium' 
                        ? 'bg-yellow-500/20 text-yellow-400' 
                        : 'bg-green-500/20 text-green-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {problem.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{problem.participants} participants</span>
                  </div>
                  
                  <button className={`px-4 py-2 bg-gradient-to-r ${theme.color} text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-2`}>
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/themes" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Themes
          </Link>
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
    </div>
  );
};

export default ThemeProblemsPage;