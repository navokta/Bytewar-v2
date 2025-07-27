// app/themes/[themeId]/page.js (Theme Problems Page)
"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const ThemeProblemsPage = () => {
  const params = useParams();
  const themeId = params.themeId;

  // Mock data for themes and problems
  const themesData = {
    'cybersecurity': {
      name: 'Cyber Security',
      icon: '🔒',
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
    'blockchain': {
      name: 'Blockchain',
      icon: '🔗',
      color: 'from-blue-500 to-cyan-500',
      problems: [
        {
          id: 'supply-chain',
          title: 'Supply Chain Transparency',
          description: 'Create a blockchain solution for tracking products across supply chains',
          difficulty: 'Medium',
          participants: 110
        },
        {
          id: 'smart-contracts',
          title: 'Automated Legal Contracts',
          description: 'Develop a platform for creating and executing smart legal contracts',
          difficulty: 'Hard',
          participants: 75
        }
      ]
    },
    'ai-ml': {
      name: 'AI/ML',
      icon: '🤖',
      color: 'from-pink-500 to-rose-500',
      problems: [
        {
          id: 'healthcare-diagnosis',
          title: 'AI Healthcare Diagnosis',
          description: 'Build an AI system for early disease detection from medical scans',
          difficulty: 'Hard',
          participants: 140
        },
        {
          id: 'traffic-prediction',
          title: 'Smart Traffic Prediction',
          description: 'Create an ML model for predicting traffic patterns in real-time',
          difficulty: 'Medium',
          participants: 90
        }
      ]
    },
    'fintech': {
      name: 'FinTech',
      icon: '💰',
      color: 'from-yellow-500 to-amber-500',
      problems: [
        {
          id: 'fraud-detection',
          title: 'Real-time Fraud Detection',
          description: 'Develop a system for detecting fraudulent financial transactions',
          difficulty: 'Hard',
          participants: 105
        },
        {
          id: 'budgeting-app',
          title: 'AI Personal Budgeting',
          description: 'Create an intelligent budgeting app that learns user spending habits',
          difficulty: 'Medium',
          participants: 130
        }
      ]
    }
  };

  const theme = themesData[themeId] || themesData['cybersecurity'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${theme.color} text-4xl`}>
              {theme.icon}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
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
    </div>
  );
};

export default ThemeProblemsPage;