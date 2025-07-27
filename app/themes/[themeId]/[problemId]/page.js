// app/themes/[themeId]/[problemId]/page.js (Problem Details Page)
"use client";

import { useParams } from 'next/navigation';
import React from 'react';

const ProblemDetailsPage = () => {
  const params = useParams();
  const { themeId, problemId } = params;

  // Mock data for problems
  const problemsData = {
    'cybersecurity': {
      name: 'Cyber Security',
      icon: '🔒',
      color: 'from-purple-600 to-indigo-600',
      problems: {
        'secure-voting': {
          id: 'secure-voting',
          title: 'Secure Digital Voting System',
          description: 'Create a blockchain-based voting system that ensures transparency and security',
          objective: 'To develop a tamper-proof digital voting system that increases trust in electoral processes',
          stakeholders: ['Election Commission', 'Voters', 'Political Parties', 'Cybersecurity Experts'],
          functionalRequirements: [
            'User registration and authentication',
            'Secure ballot casting mechanism',
            'Immutable vote recording on blockchain',
            'Real-time vote counting',
            'Audit trail generation'
          ],
          nonFunctionalRequirements: [
            'System must handle 1 million concurrent users',
            'Response time under 2 seconds',
            '99.9% uptime during election period',
            'End-to-end encryption for all communications'
          ],
          acceptanceCriteria: [
            'All votes are recorded on blockchain within 5 seconds',
            'Zero vote manipulation detected in security audits',
            'System passes penetration testing by cybersecurity experts'
          ],
          implementationPlan: [
            'Phase 1: Research and prototype development (2 months)',
            'Phase 2: Core system development with smart contracts (3 months)',
            'Phase 3: Security audits and penetration testing (1 month)',
            'Phase 4: Pilot testing with local elections (2 months)'
          ]
        },
        'phishing-detection': {
          id: 'phishing-detection',
          title: 'AI-Powered Phishing Detection',
          description: 'Develop an intelligent system to detect and prevent phishing attacks',
          objective: 'To create an AI system that can identify and block phishing attempts in real-time',
          stakeholders: ['IT Security Teams', 'Email Service Providers', 'End Users', 'Cybersecurity Firms'],
          functionalRequirements: [
            'Email content analysis engine',
            'Real-time threat detection',
            'User alert system',
            'Dashboard for security administrators',
            'Integration with email clients'
          ],
          nonFunctionalRequirements: [
            'Process 100,000 emails per second',
            '99.5% detection accuracy',
            'Less than 0.1% false positive rate',
            'Real-time processing with <100ms latency'
          ],
          acceptanceCriteria: [
            'Detection accuracy >99.5% on test dataset',
            'False positive rate <0.1%',
            'System handles peak loads of 100K emails/second',
            'Integration works with major email providers'
          ],
          implementationPlan: [
            'Phase 1: Data collection and preprocessing (1 month)',
            'Phase 2: AI model development and training (3 months)',
            'Phase 3: System integration and testing (2 months)',
            'Phase 4: Deployment and monitoring (1 month)'
          ]
        }
      }
    },
    'blockchain': {
      name: 'Blockchain',
      icon: '🔗',
      color: 'from-blue-500 to-cyan-500',
      problems: {
        'supply-chain': {
          id: 'supply-chain',
          title: 'Supply Chain Transparency',
          description: 'Create a blockchain solution for tracking products across supply chains',
          objective: 'To provide end-to-end traceability of products from manufacturer to consumer',
          stakeholders: ['Manufacturers', 'Distributors', 'Retailers', 'Consumers', 'Regulatory Bodies'],
          functionalRequirements: [
            'Product registration with unique identifiers',
            'Transaction recording at each supply chain node',
            'Verification system for consumers',
            'Alert system for suspicious activities'
          ],
          nonFunctionalRequirements: [
            'Support for 100,000+ products tracked simultaneously',
            '99.95% data accuracy',
            'Real-time updates across all nodes'
          ],
          acceptanceCriteria: [
            'Product traceability from origin to consumer within 30 seconds',
            'Counterfeit detection accuracy >99%',
            'System handles peak loads of 10,000 requests/second'
          ],
          implementationPlan: [
            'Phase 1: Requirements gathering and system design (1 month)',
            'Phase 2: Blockchain infrastructure setup (1 month)',
            'Phase 3: Core application development (3 months)',
            'Phase 4: Integration with supply chain partners (2 months)'
          ]
        }
      }
    }
  };

  const theme = problemsData[themeId] || problemsData['cybersecurity'];
  const problem = theme.problems[problemId] || theme.problems['secure-voting'];

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
              {problem.title}
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {problem.description}
          </p>
        </div>

        <div className="group relative">
          <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}></div>
          
          <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
            {/* Objective */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Objective
              </h2>
              <p className="text-gray-300 text-lg">
                {problem.objective}
              </p>
            </div>

            {/* Stakeholders */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Stakeholders
              </h2>
              <div className="flex flex-wrap gap-3">
                {problem.stakeholders.map((stakeholder, idx) => (
                  <div key={idx} className="px-4 py-2 bg-gray-700/50 rounded-full border border-white/10">
                    <span className="text-gray-300">{stakeholder}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Functional Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Functional Requirements
                </h2>
                <ul className="space-y-3">
                  {problem.functionalRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Non-Functional Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  Non-Functional Requirements
                </h2>
                <ul className="space-y-3">
                  {problem.nonFunctionalRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Acceptance Criteria */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Acceptance Criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {problem.acceptanceCriteria.map((criteria, idx) => (
                  <div key={idx} className="p-4 bg-gray-700/30 rounded-xl border border-white/5">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                        <span className="text-green-400 text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-300">{criteria}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Plan */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Implementation Plan
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500"></div>
                
                <div className="space-y-6 pl-10">
                  {problem.implementationPlan.map((phase, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <div className="p-4 bg-gray-700/30 rounded-xl border border-white/5">
                        <p className="text-gray-300">{phase}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-4 bg-gradient-to-r ${theme.color} text-white font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105`}>
                Participate in this Challenge
              </button>
              <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full shadow-lg transition-colors duration-300">
                Download Requirements PDF
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href={`/themes/${themeId}`} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to {theme.name} Problems
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailsPage;