// app/themes/[themeId]/[problemId]/page.js
"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for problems
const problemsData = {
  'cybersecurity': {
    name: 'Cyber Security',
    icon: '🔒',
    color: 'from-purple-600 to-indigo-600',
    glow: 'shadow-purple-500/30',
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
    glow: 'shadow-blue-500/30',
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
  },
  // 🔹 NEW: LEGALTECH
  'legaltech': {
    name: 'LegalTech',
    icon: '⚖️',
    color: 'from-indigo-600 to-blue-600',
    glow: 'shadow-indigo-500/30',
    problems: {
      'ai-legal-assistant': {
        id: 'ai-legal-assistant',
        title: 'AI-Powered Legal Research Assistant',
        description: 'Build a tool that helps lawyers quickly find relevant case laws, statutes, and precedents using NLP',
        objective: 'To reduce legal research time and improve accuracy using artificial intelligence',
        stakeholders: ['Lawyers', 'Judges', 'Legal Researchers', 'Law Firms', 'Courts'],
        functionalRequirements: [
          'Natural language query interface',
          'Database of legal documents and case laws',
          'Relevance ranking of search results',
          'Citation verification system',
          'User account and history management'
        ],
        nonFunctionalRequirements: [
          'Support 10,000+ concurrent legal professionals',
          'Search results returned in under 1 second',
          '95%+ accuracy in relevance matching',
          'Compliance with data privacy laws (e.g., GDPR)'
        ],
        acceptanceCriteria: [
          'Users find relevant case law in <10 seconds',
          'System achieves >95% relevance accuracy in testing',
          'Successfully integrates with major legal databases',
          'No data breaches during 6-month trial'
        ],
        implementationPlan: [
          'Phase 1: Legal corpus collection and cleaning (2 months)',
          'Phase 2: NLP model training and validation (3 months)',
          'Phase 3: Frontend and backend integration (2 months)',
          'Phase 4: Pilot deployment in law firms (1 month)'
        ]
      }
    }
  },
  // 🔹 NEW: SMART EDUCATION
  'smart-education': {
    name: 'Smart Education',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/30',
    problems: {
      'adaptive-learning': {
        id: 'adaptive-learning',
        title: 'Adaptive Learning Platform',
        description: 'Create an AI-powered learning platform that personalizes educational content',
        objective: 'To deliver customized learning paths based on individual student performance and preferences',
        stakeholders: ['Students', 'Teachers', 'School Administrators', 'Parents', 'EdTech Providers'],
        functionalRequirements: [
          'Student progress tracking and assessment',
          'AI-driven content recommendation engine',
          'Interactive learning modules (videos, quizzes, games)',
          'Teacher dashboard for monitoring class performance',
          'Parent portal for progress updates'
        ],
        nonFunctionalRequirements: [
          'Support up to 1 million students simultaneously',
          'Personalization updates in real-time',
          'Accessibility compliant with WCAG 2.1 standards',
          '99.9% uptime during school hours'
        ],
        acceptanceCriteria: [
          'Students show 20% improvement in learning outcomes after 3 months',
          'Platform recommends relevant content 90% of the time',
          'Teachers report 30% reduction in manual grading workload',
          'System supports multiple devices and offline mode'
        ],
        implementationPlan: [
          'Phase 1: Curriculum mapping and data modeling (1 month)',
          'Phase 2: AI engine development (3 months)',
          'Phase 3: Platform UI/UX and integration (2 months)',
          'Phase 4: School pilot and feedback loop (2 months)'
        ]
      }
    }
  },
  // 🔹 NEW: FINTECH SOLUTIONS
  'fintech-solutions': {
    name: 'Fintech Solutions',
    icon: '💰',
    color: 'from-teal-500 to-cyan-500',
    glow: 'shadow-teal-500/30',
    problems: {
      'personal-finance-ai': {
        id: 'personal-finance-ai',
        title: 'AI Personal Finance Manager',
        description: 'Create an intelligent system for automated financial planning',
        objective: 'To help individuals manage budgets, savings, and investments using AI insights',
        stakeholders: ['Individual Users', 'Banks', 'Financial Advisors', 'Regulators'],
        functionalRequirements: [
          'Bank account and transaction integration',
          'Spending categorization and trend analysis',
          'Budget creation and alerts',
          'Investment recommendation engine',
          'Security and privacy controls'
        ],
        nonFunctionalRequirements: [
          'End-to-end encryption for financial data',
          'Real-time sync with banking APIs',
          'Response time under 1 second for all actions',
          '99.99% data integrity and backup reliability'
        ],
        acceptanceCriteria: [
          'Users reduce overspending by 25% within 2 months',
          'Investment suggestions match risk profile 90% of the time',
          'Zero unauthorized access incidents in first year',
          'App rated 4.5+ stars on app stores'
        ],
        implementationPlan: [
          'Phase 1: Financial data API integration research (1 month)',
          'Phase 2: AI budgeting and investment logic (3 months)',
          'Phase 3: Mobile and web app development (3 months)',
          'Phase 4: Beta launch and user feedback (1 month)'
        ]
      }
    }
  }
};





const ProblemDetailsPage = () => {
  const params = useParams();
  const { themeId, problemId } = params;

  const theme = problemsData[themeId] || problemsData['cybersecurity'];
  const problem = theme.problems[problemId] || theme.problems[Object.keys(theme.problems)[0]];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-6">
              <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${theme.color} text-4xl shadow-lg`}>
                {theme.icon}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              {problem.title}
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {problem.description}
            </p>
          </div>

          <div className="group relative">
            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}></div>
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8">
              {/* Objective */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Objective
                </h2>
                <p className="text-gray-300">
                  {problem.objective}
                </p>
              </div>

              {/* Stakeholders */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Stakeholders
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {problem.stakeholders.map((stakeholder, idx) => (
                    <div key={idx} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700/50 rounded-full border border-white/10 text-sm sm:text-base">
                      <span className="text-gray-300">{stakeholder}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional & Non-Functional Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Functional */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Functional Requirements
                  </h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {problem.functionalRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm sm:text-base">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Non-Functional */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    Non-Functional Requirements
                  </h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {problem.nonFunctionalRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm sm:text-base">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Acceptance Criteria */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Acceptance Criteria
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {problem.acceptanceCriteria.map((criteria, idx) => (
                    <div key={idx} className="p-3 sm:p-4 bg-gray-700/30 rounded-xl border border-white/5">
                      <div className="flex items-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                          <span className="text-green-400 text-xs sm:text-sm font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-gray-300 text-sm sm:text-base">{criteria}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full shadow-lg transition-colors duration-300 text-sm sm:text-base">
                  Download Requirements PDF
                </button>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link href={`/themes/${themeId}`} className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full transition-colors duration-300 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to {theme.name} Problems
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProblemDetailsPage;