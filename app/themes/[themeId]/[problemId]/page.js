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
  'fintech-solutions': {
    name: 'Fintech Solutions',
    icon: '💰',
    color: 'from-teal-500 to-cyan-500',
    glow: 'shadow-teal-500/30',
    problems: {
      "ai-driven-credit-scoring": {
        id: 'ai-driven-credit-scoring',
        link: 'https://drive.google.com/file/d/1p0RM7xNB3wMnIkT9UOK406XtTStIgX_E/view?usp=sharing',
        title: 'AI - Driven Credit Scoring for the Gig Economy',
        description: 'Develop an AI-driven credit scoring system tailored for gig economy workers',
        objective: [
          'To design a reliable credit scoring system for gig workers based on non-traditional data.',
          'To include financially excluded individuals in formal credit systems.',
          'To assist lenders in making informed decisions with reduced risk.',
          'To provide gig workers with access to loans, insurance, and credit lines based on AI-powered scores.',
          'To replace biased or outdated models that overlook gig economy dynamics.'
        ],
        stakeholders: ['Gig Workers (Primary Users)', 'Gig Platforms (e.g., Swiggy, Uber, Upwork)', 'Credit Bureaus', 'Regulators', 'Developers / Data Scientists'],
        functionalRequirements: [
          'User Profile Management',
          'Data Collection Engine',
          'AI-Based Credit Score Engine',
          'Score Visualization Dashboard',
          'Lender Integration'
        ],
        nonFunctionalRequirements: [
          'Should handle large-scale data from thousands of users and platforms.',
          'AI model must maintain high prediction accuracy and low false positives.',
          'Model should be explainable and reduce bias against any demographic.',
          'Show users why their score changed and what factors matter.'
        ],
        acceptanceCriteria: [
          'User can register and link their gig platform account(s).',
          'A credit score is generated using AI with at least 85% model confidence.',
          'User sees why their score is high/low (e.g., low consistency, high ratings).',
          'Lenders can access scores via API after user authorizes.'
        ]
      }
    }, 
    "legal-rights-awareness-tool": {
  id: 'legal-rights-awareness-tool',
  link: 'https://your-link-here.com', // Replace with actual document or project link
  title: 'Legal Rights Awareness Tool',
  description: 'A digital platform to educate and empower users by providing clear, scenario-based legal rights information based on location and situation.',
  objective: [
    'To educate users on their fundamental legal rights based on their location and situation.',
    'To make legal information easily accessible, especially for marginalized or underserved communities.',
    'To provide a mobile and web-based tool that offers actionable steps in real-time situations.',
    'To reduce misinformation and reliance on unofficial or unreliable legal advice sources.'
  ],
  stakeholders: [
    'General Public (Primary Users)',
    'Legal Aid NGOs',
    'Lawyers and Legal Experts',
    'Regulatory Bodies',
    'App Developers and Content Reviewers'
  ],
  functionalRequirements: [
    'Simple, multilingual user interface for web and mobile platforms.',
    'Form input for users to specify their legal issue (e.g., police stop, landlord dispute).',
    'Interactive scenario selection and step-by-step rights explanation.',
    'Geolocation detection for jurisdiction-specific advice.',
    'Search bar to query rights-related topics.',
    'Offline mode for basic legal info access.',
    'Emergency help button linking to legal aid contacts.',
    'Content verification by certified legal professionals.',
    'Accessibility features like text-to-speech, font resizing, high-contrast mode.'
  ],
  nonFunctionalRequirements: [
    'Average query response time should be within 2 seconds.',
    'System must support 10,000+ concurrent users.',
    'End-to-end encryption for any user-entered data.',
    'Minimal data collection to ensure anonymity.',
    '99.5% uptime for hosted versions.',
    'Easy-to-use UI for non-technical users.',
    'Modular code and content for easy maintenance and legal updates.'
  ],
  acceptanceCriteria: [
    'Tool must display legal rights based on user’s geolocation.',
    'Users can choose from at least 3 common legal scenarios.',
    'Each scenario provides step-by-step legal guidance.',
    'Offline access to core legal info must be supported.',
    'Emergency help button must display relevant legal aid contacts.',
    'At least two accessibility features must be available.',
    'Users must be able to search topics using keywords.',
    'System must respond to input within 2 seconds.',
    'All legal content must be reviewed by qualified legal professionals.',
    'Tested by at least 5 non-technical users with positive usability feedback.',
    'No personal data stored without explicit consent.',
    'App must maintain 99.5% uptime if hosted.',
    'Multilingual support for at least English and one local language.'
  ]
}

  },
  // 🔹 NEW: 5 BLACK-THEMED PROBLEMS
  'ai-healthcare': {
    name: 'AI in Healthcare',
    icon: '🧠',
    color: 'from-gray-800 to-black',
    glow: 'shadow-gray-700/30',
    problems: {
      'medical-diagnosis-ai': {
        id: 'medical-diagnosis-ai',
        link: 'https://example.com/medical-ai.pdf',
        title: 'AI-Powered Medical Diagnosis Assistant',
        description: 'Develop an AI system that assists doctors in diagnosing diseases from medical imaging and patient history.',
        objective: [
          'To reduce misdiagnosis rates using AI analysis.',
          'To support doctors in early detection of critical illnesses.',
          'To integrate with hospital EMR systems.',
          'To provide explainable AI insights for clinicians.',
          'To ensure HIPAA and GDPR compliance.'
        ],
        stakeholders: ['Doctors', 'Patients', 'Hospitals', 'Regulatory Bodies', 'AI Developers'],
        functionalRequirements: [
          'Image recognition for X-rays, MRIs, CT scans',
          'Patient history analysis module',
          'Diagnosis confidence scoring',
          'Integration with Electronic Medical Records (EMR)',
          'Alert system for critical findings'
        ],
        nonFunctionalRequirements: [
          '99% uptime in clinical environments',
          'Diagnosis results in under 5 seconds',
          'HIPAA and GDPR compliant data handling',
          'Support for 500+ concurrent hospital users'
        ],
        acceptanceCriteria: [
          'AI detects tumors in scans with >95% accuracy',
          'System integrates with at least 3 major EMR platforms',
          'No unauthorized data access in 1-year audit',
          'Doctors report 40% faster diagnosis time'
        ]
      }
    }
  },
  'climate-tech': {
    name: 'Climate Technology',
    icon: '🌍',
    color: 'from-green-800 to-black',
    glow: 'shadow-green-700/30',
    problems: {
      'carbon-footprint-tracker': {
        id: 'carbon-footprint-tracker',
        link: 'https://example.com/carbon-tracker.pdf',
        title: 'Real-Time Carbon Footprint Tracker',
        description: 'Create a mobile and web app to track personal and organizational carbon emissions.',
        objective: [
          'To raise awareness about carbon emissions.',
          'To help individuals and companies reduce their environmental impact.',
          'To integrate with transportation, energy, and spending data.',
          'To provide actionable insights and reduction tips.',
          'To support carbon offset programs.'
        ],
        stakeholders: ['Individuals', 'Corporations', 'Environmental Agencies', 'NGOs', 'Developers'],
        functionalRequirements: [
          'User activity and spending data import',
          'Carbon emission calculation engine',
          'Visualization dashboard',
          'Offset program integration',
          'Gamification and goal tracking'
        ],
        nonFunctionalRequirements: [
          'Support 10 million users',
          'Data updates within 1 minute',
          'Offline mode for mobile app',
          'Energy-efficient algorithms'
        ],
        acceptanceCriteria: [
          'Users reduce carbon footprint by 15% within 6 months',
          'App processes data from 5+ sources (e.g., bank, GPS)',
          'Dashboard loads in under 1.5 seconds',
          'No data leaks in security audit'
        ]
      }
    }
  },
  'agritech': {
    name: 'AgriTech',
    icon: '🌱',
    color: 'from-emerald-800 to-black',
    glow: 'shadow-emerald-700/30',
    problems: {
      'smart-irrigation': {
        id: 'smart-irrigation',
        link: 'https://example.com/smart-irrigation.pdf',
        title: 'AI-Based Smart Irrigation System',
        description: 'Design an IoT and AI-powered system to optimize water usage in agriculture.',
        objective: [
          'To reduce water waste in farming.',
          'To increase crop yield through precise irrigation.',
          'To monitor soil moisture, weather, and plant health.',
          'To automate irrigation schedules.',
          'To support small and large farms.'
        ],
        stakeholders: ['Farmers', 'Agricultural Scientists', 'Government Agencies', 'Environmental Groups', 'Tech Providers'],
        functionalRequirements: [
          'Soil moisture and weather sensors',
          'AI-based irrigation scheduler',
          'Remote control via mobile app',
          'Alerts for drought or overwatering',
          'Data export for analysis'
        ],
        nonFunctionalRequirements: [
          'Battery life >6 months for sensors',
          'System uptime >99%',
          'Works in remote areas with low connectivity',
          'Scalable to thousands of farms'
        ],
        acceptanceCriteria: [
          'Water usage reduced by 30% in pilot farms',
          'Farmers report 20% higher crop yield',
          'System operates in 10+ climate zones',
          'Mobile app receives 4.5+ star rating'
        ]
      }
    }
  },
  'edtech': {
    name: 'EdTech',
    icon: '📘',
    color: 'from-indigo-900 to-black',
    glow: 'shadow-indigo-700/30',
    problems: {
      'vr-classroom': {
        id: 'vr-classroom',
        link: 'https://example.com/vr-classroom.pdf',
        title: 'Virtual Reality Classroom for Remote Learning',
        description: 'Build an immersive VR platform for interactive and engaging remote education.',
        objective: [
          'To make remote learning more engaging and effective.',
          'To support STEM and vocational training.',
          'To allow real-time collaboration in virtual classrooms.',
          'To be accessible on low-cost VR devices.',
          'To integrate with existing LMS platforms.'
        ],
        stakeholders: ['Students', 'Teachers', 'Schools', 'EdTech Companies', 'VR Hardware Makers'],
        functionalRequirements: [
          'VR classroom environment with avatars',
          'Real-time voice and text chat',
          'Interactive 3D models and simulations',
          'Attendance and performance tracking',
          'LMS integration (e.g., Moodle, Google Classroom)'
        ],
        nonFunctionalRequirements: [
          'Low latency (<100ms) for smooth interaction',
          'Support 50+ users in one session',
          'Compatible with Oculus, Vive, and WebXR',
          'Accessible to users with disabilities'
        ],
        acceptanceCriteria: [
          'Students report 30% higher engagement in VR classes',
          'System supports 50 users in a session without lag',
          'Integrates with at least 2 major LMS platforms',
          'Achieves WCAG 2.1 AA compliance'
        ]
      }
    }
  },
  'renewable-energy': {
    name: 'Renewable Energy',
    icon: '⚡',
    color: 'from-yellow-800 to-black',
    glow: 'shadow-yellow-700/30',
    problems: {
      'solar-grid-optimizer': {
        id: 'solar-grid-optimizer',
        link: 'https://example.com/solar-optimizer.pdf',
        title: 'AI-Powered Solar Grid Optimization',
        description: 'Develop an AI system to optimize energy distribution in solar-powered microgrids.',
        objective: [
          'To maximize solar energy utilization.',
          'To balance supply and demand in real-time.',
          'To reduce energy waste and costs.',
          'To support off-grid and rural communities.',
          'To integrate with battery storage systems.'
        ],
        stakeholders: ['Energy Providers', 'Homeowners', 'Grid Operators', 'Environmental Agencies', 'Tech Developers'],
        functionalRequirements: [
          'Real-time energy production and consumption monitoring',
          'AI-based load balancing engine',
          'Battery storage optimization',
          'Predictive maintenance alerts',
          'User dashboard for energy usage'
        ],
        nonFunctionalRequirements: [
          '99.99% reliability in critical systems',
          'Response time under 50ms',
          'Support for 10,000+ grid nodes',
          'Secure against cyber threats'
        ],
        acceptanceCriteria: [
          'Energy waste reduced by 25% in pilot areas',
          'System responds to load changes in <50ms',
          'Dashboard accessible on mobile and web',
          'No security breaches in 1-year operation'
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
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-6">
              <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${theme.color} text-4xl shadow-lg ${theme.glow}`}>
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
                {Array.isArray(problem.objective) ? (
                  <ul className="space-y-2 text-gray-300">
                    {problem.objective.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{problem.objective}</p>
                )}
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

              {/* Functional & Non-Functional */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                {problem.link && (
                  <Link
                    href={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full shadow-lg transition-colors duration-300 text-sm sm:text-base text-center"
                  >
                    Download Requirements PDF
                  </Link>
                )}
                <Link
                  href={`/themes/${themeId}`}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full shadow-lg transition-colors duration-300 text-sm sm:text-base text-center"
                >
                  Back to {theme.name} Problems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProblemDetailsPage;