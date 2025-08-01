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
      },
      "mobile-banking-visually-impaired": {
        id: "mobile-banking-visually-impaired",
        link: "https://drive.google.com/file/d/1-adzq5NeN25tEdjk8GNzT436fzqPXjbu/view?usp=sharing",
        title: "Mobile Banking for Visually Impaired",
        description: "A mobile banking app built for the visually impaired, enabling independent and secure financial management through voice, touch, and assistive technology.",
        objective: [
          "To develop an accessible and inclusive mobile banking app tailored for visually impaired users.",
          "To support essential banking operations using voice commands, gestures, and audio feedback.",
          "To ensure security with user-friendly biometrics and voice confirmations.",
          "To comply with WCAG, ADA, and other global accessibility standards.",
          "To promote financial autonomy among visually impaired individuals."
        ],
        stakeholders: [
          "Visually Impaired Users (Primary Users)",
          "Banks & Financial Institutions",
          "Accessibility Experts",
          "Developers & Product Designers",
          "Caregivers & Family Members",
          "Regulators & NGOs"
        ],
        functionalRequirements: [
          "User Authentication with biometrics, voice, or secure PIN via haptic keypad",
          "Voice-Enabled Navigation and TTS-powered menu reading",
          "Banking Features like balance inquiry, fund transfer, bill payments, and history reading",
          "Interactive Voice Assistant for natural language banking tasks",
          "Accessibility Enhancements: screen reader compatibility, high-contrast modes, haptics",
          "Security Features: voice-activated 2FA, auto-logout, audio confirmations",
          "Help & Support: 24/7 voice-based support and emergency SOS options"
        ],
        nonFunctionalRequirements: [
          "Must follow inclusive and accessible UI/UX principles",
          "Respond to voice commands within 1 second",
          "End-to-end encrypted voice and transaction data",
          "Support Android & iOS including low-end devices",
          "Maintain >99% uptime with error handling fallback",
          "Multi-language voice interaction (e.g., Hindi, English)",
          "Scalable for thousands of users with varied needs"
        ],
        acceptanceCriteria: [
          "Users can fully onboard using only voice or screen reader tools",
          "All basic banking tasks can be performed with voice only",
          "All UI elements are screen reader compatible (TalkBack, VoiceOver)",
          "Sensitive tasks require dual confirmation via voice/fingerprint",
          "App auto logs out after idle time and handles auth errors gracefully",
          "Voice-accessible help center works with spoken responses",
          "Offline audio access for last 3 transactions is functional"
        ]
      },
      "ai-driven-personal-finance-assistant": {
        id: "ai-driven-personal-finance-assistant",
        link: "https://drive.google.com/file/d/1tCr22W7vWHRCbj_hxxMSu3ja0P4KS6rf/view?usp=sharing", // Replace with actual link
        title: "AI-Driven Personal Finance Assistant",
        description: "A smart digital platform designed to help individuals manage their finances efficiently using AI/ML algorithms to provide personalized advice, budgeting, investment guidance, and financial health monitoring.",
        objective: [
          "To simplify financial management for users using intelligent automation.",
          "To provide real-time, personalized recommendations based on spending patterns and goals.",
          "To encourage savings and reduce unnecessary expenses.",
          "To assist users in achieving financial goals like buying a home, planning a trip, or saving for emergencies.",
          "To track, analyze, and optimize financial behavior using AI."
        ],
        stakeholders: [
          "Young Professionals – Manage salary, track expenses, and receive investment tips.",
          "Students – Learn financial discipline and budget limited income or pocket money.",
          "Middle-Income Families – Track household expenses and save for priorities like education and housing.",
          "Banks & FinTech Firms – Integrate the tool for improved user engagement and financial product recommendations."
        ],
        functionalRequirements: [
          "User Onboarding & Profile Setup: Secure bank account linking, income, and goal preferences.",
          "Smart Expense Categorization: Automatically classify transactions (e.g., food, travel, utilities).",
          "Budget Planner: Recommend optimal budgets based on spending habits.",
          "Savings Tracker & Advisor: Suggest saving targets and track goal progress.",
          "AI Insights & Notifications: Notify users about overspending, risks, and financial opportunities.",
          "Investment Recommendations: Personalized suggestions like mutual funds, FDs, and SIPs.",
          "Bill Reminder & Auto-Pay: Alerts and automation for EMI, rent, subscriptions, and bills.",
          "Report Dashboard: Visuals for trends, goals, net worth, and monthly summaries."
        ],
        nonFunctionalRequirements: [
          "Data Security & Privacy: Compliant with RBI guidelines; financial data encryption.",
          "Performance: Dashboard response times under 2 seconds.",
          "Reliability: 99.9% uptime with daily data backups.",
          "Mobile Responsiveness: Seamless experience across Android, iOS, and web platforms.",
          "Explainable AI: Justification for each recommendation provided to users.",
          "Localization: Supports Indian languages and multiple regional currencies."
        ],
        acceptanceCriteria: [
          "Expense Categorization: At least 90% accuracy in transaction classification.",
          "Goal Achievement Tracker: Users can set, edit, and monitor goal progress.",
          "Personalized Tips: Contextual AI advice based on spending patterns (e.g., overspending alerts).",
          "Security Compliance: Follows India’s DPDP Act and RBI fintech regulations.",
          "Multi-Account Support: Users can monitor balances across banks, wallets, and UPI."
        ]
      },

"cash-flow-tracker": {
  id: "cash-flow-tracker",
  link: "https://drive.google.com/file/d/1KaEFjTBANX9E4aPtp58-1vNiYxjWoMGe/view?usp=sharing", // Replace with actual PDF link
  title: "Cash Flow Tracker",
  description: "A simple yet powerful digital tool that helps individuals, freelancers, and small businesses track real-time income and expenses, enabling better financial decisions, reducing overspending, and encouraging healthy cash flow habits.",
  objective: [
    "To monitor income and expenses efficiently on a daily, weekly, and monthly basis.",
    "To provide real-time visibility of cash availability and liquidity.",
    "To help users identify patterns, reduce overspending, and plan better.",
    "To offer simple financial summaries without needing accounting knowledge.",
    "To assist small businesses and individuals in maintaining a healthy cash flow."
  ],
  stakeholders: [
    "Individuals – Track personal income/expenses, detect leaks, and improve budgeting.",
    "Freelancers – Manage irregular income and match it with recurring expenses.",
    "Small Business Owners – Monitor cash flow, vendor payments, and customer receivables.",
    "Accountants – Use it to manage multiple clients’ cash flow visually and simply."
  ],
  functionalRequirements: [
    "User Registration & Login: Email/phone-based secure login with optional multi-profile setup.",
    "Add Inflow & Outflow: Manual entry or sync via UPI/SMS/bank feeds; tag entries by category.",
    "Dashboard View: Real-time balance, income, and expense charts.",
    "Cash Flow Reports: Generate daily, weekly, and monthly summaries with insights.",
    "Recurring Transactions: Set up recurring inflow (e.g., salary) or outflow (e.g., rent).",
    "Alerts & Reminders: Notifications for low balance, upcoming payments, and overdue income.",
    "Export Options: Export monthly reports to PDF or Excel format.",
    "Multi-Device Sync: Access data from multiple devices with cloud sync support."
  ],
  nonFunctionalRequirements: [
    "Security: End-to-end encryption and support for PIN/fingerprint authentication.",
    "Availability: 99% uptime with offline support for manual entries.",
    "Performance: All screens must load in under 2 seconds.",
    "Data Backup: Auto-backup to cloud or local storage (based on user choice).",
    "Usability: Simple interface designed for non-tech-savvy users.",
    "Localization: Support for INR and regional Indian languages."
  ],
  acceptanceCriteria: [
    "Entry System: Users can easily add, edit, and delete income or expense entries.",
    "Real-time Balance: Dashboard reflects changes immediately after each transaction.",
    "Reporting: Weekly and monthly reports generate correct totals and visual insights.",
    "Reminders: Timely alerts are triggered for upcoming bills or expected income.",
    "Export: Users can export data in PDF or Excel formats.",
    "Offline Mode: Manual entries are supported offline and sync automatically when reconnected."
  ]
},
"decentralized-p2p-lending-platform": {
  id: "decentralized-p2p-lending-platform",
  link: "https://drive.google.com/file/d/1IPtQydJkoi738uHCmACW4TdPRf-NI1vh/view?usp=sharing", // Replace with actual PDF link
  title: "Decentralized Peer-to-Peer Lending Platform",
  description: "A blockchain-based platform enabling direct loans between individual lenders and borrowers using smart contracts for trustless, transparent, and cost-effective lending without traditional financial intermediaries.",
  objective: [
    "To provide access to credit for individuals and small businesses excluded from traditional banking.",
    "To eliminate intermediaries and reduce loan processing time and costs.",
    "To enable secure, transparent, and automated lending via smart contracts.",
    "To democratize investing by allowing anyone to act as a lender.",
    "To promote financial inclusion in a decentralized manner."
  ],
  stakeholders: [
    "Borrowers – Apply for micro or macro loans without a bank, using profile or crypto collateral.",
    "Lenders – Invest in loans and earn interest with transparent borrower risk ratings.",
    "Platform Admins – Maintain smart contracts, moderate disputes, and upgrade platform features.",
    "Developers – Build, audit, and maintain the platform and smart contracts.",
    "Regulators – Ensure compliance with crypto lending regulations in relevant jurisdictions."
  ],
  functionalRequirements: [
    "User Onboarding: Wallet-based login (e.g., MetaMask, WalletConnect) and optional KYC/AML integration.",
    "Borrower Profile & Loan Request: Submit loan requests with amount, reason, term, and optional collateral or credit scoring.",
    "Lender Dashboard: Browse open loan requests, view borrower profiles, interest rates, and risk assessments.",
    "Smart Contract Execution: Automates loan disbursal, interest tracking, repayment enforcement, and collateral liquidation.",
    "Repayment System: Setup and track repayments with reminders and auto-payment integration.",
    "Credit Scoring: Optional decentralized or third-party scoring based on borrower history or off-chain data.",
    "Dispute Resolution Mechanism: DAO- or voting-based system for fraud claims or missed payments.",
    "Analytics and History: Access loan history, ROI tracking, and borrower credit performance."
  ],
  nonFunctionalRequirements: [
    "Security: Regular smart contract audits and end-to-end wallet encryption.",
    "Transparency: All transactions publicly viewable on the blockchain.",
    "Scalability: Supports large volumes of micro-loans and high throughput.",
    "Interoperability: Works with multiple blockchains, tokens, and wallets (e.g., Ethereum, Polygon).",
    "Low Gas Costs: Optimized using Layer-2 scaling solutions.",
    "Decentralization: Key decisions handled via DAO-based governance."
  ],
  acceptanceCriteria: [
    "Loan Smart Contract: Executes disbursal, enforces repayment, and returns interest to lenders automatically.",
    "Borrower Application: Allows submission and editing of loan requests with full metadata.",
    "Lender Funding Flow: Enables real-time full or partial funding with live progress tracking.",
    "Repayment Process: Tracks due dates, handles partial repayments, and applies penalties.",
    "Collateral Handling: Accepts and liquidates crypto collateral automatically in case of default.",
    "Transparency: All loan actions and transactions are auditable on-chain via a blockchain explorer."
  ]
},
"fraud-detection-upi-ai": {
  id: "fraud-detection-upi-ai",
  link: "https://drive.google.com/file/d/1JhwhrBjTu696iK2NWdmXYQhd4SZR2Bs_/view?usp=sharing", // Replace with actual link
  title: "Fraud Detection using AI for UPI Payments",
  description: "A real-time fraud detection system that leverages AI/ML to monitor UPI transactions, detect anomalies, assign risk scores, and prevent scams such as phishing, identity theft, and transaction manipulation—without disrupting user experience.",
  objective: [
    "To build a real-time AI-powered system that detects and flags fraudulent UPI transactions.",
    "To analyze user behavior and transaction patterns to identify anomalies.",
    "To minimize false positives and ensure genuine transactions go through smoothly.",
    "To alert users and/or block transactions when fraud is suspected.",
    "To help banks, PSPs, and users reduce financial losses due to scams."
  ],
  stakeholders: [
    "UPI Users – Protected from fraudulent activities without impact on usability.",
    "Banks and PSPs (e.g., GPay, Paytm, PhonePe) – Integrate AI layer to improve transaction security.",
    "NPCI – Ensure UPI fraud detection mechanisms are compliant and standardized.",
    "Cybersecurity Analysts / Developers – Design and maintain AI/ML fraud detection engines.",
    "Law Enforcement / Regulatory Bodies – Access data for investigation and preventive actions."
  ],
  functionalRequirements: [
    "User Behavior Profiling: Build baseline behavior including transaction amount, frequency, location, device, and contact list.",
    "Real-Time Transaction Monitoring: Evaluate transactions before they are processed; check sender/receiver history, time, and anomalies.",
    "Anomaly Detection Engine: Detect irregular actions such as large late-night transfers to unknown accounts using historical fraud data.",
    "Risk Scoring System: Assign risk score (0–100) to each transaction; block/delay those above a defined threshold.",
    "User Alert & Verification: Pause suspicious transactions and alert users via app/SMS; confirm via OTP/biometric verification.",
    "Fraud Reporting Module: Users can report scams or requests; create a dynamic blacklist of high-risk accounts.",
    "Admin Dashboard for Banks/PSPs: Dashboard for reviewing fraud cases, transaction trends, and heatmaps.",
    "Machine Learning Model Training: Train AI on anonymized UPI data with both supervised and unsupervised learning."
  ],
  nonFunctionalRequirements: [
    "Real-Time Processing: Risk scoring must be done in under 1 second.",
    "Scalability: Must support millions of UPI transactions simultaneously.",
    "Accuracy: Ensure >90% fraud detection rate with <5% false positives.",
    "Security: All data and models must be encrypted with restricted access.",
    "Privacy Compliance: Adhere to RBI, GDPR, and relevant data privacy laws.",
    "Interoperability: Fully compatible with current UPI APIs and existing PSP ecosystems."
  ],
  acceptanceCriteria: [
    "Transaction Monitoring: All UPI transactions are evaluated by the system in real-time.",
    "Risk Scoring: High-risk transactions (score > 80) are flagged and require additional verification.",
    "User Alerts: Users receive timely alerts for suspicious transactions and can verify using secure methods.",
    "Behavioral Modeling: System adapts to changing user behavior for improved prediction accuracy.",
    "Fraud Reports: Users can report frauds; admins can track and take action on flagged accounts."
  ]
},

"gamified-financial-literacy-platform": {
  id: "gamified-financial-literacy-platform",
  link: "https://drive.google.com/file/d/15ocHhMYvXz7wvcPNMAon_3bAePV830ZA/view?usp=sharing", // Replace with actual link
  title: "Gamified Financial Literacy Platform",
  description: "An interactive digital platform designed to teach financial concepts through engaging gamification elements like quizzes, challenges, simulations, and rewards, targeting youth, students, and underserved communities.",
  objective: [
    "To increase financial literacy among youth and underserved communities.",
    "To make financial education engaging through gamification.",
    "To help users build good financial habits through interactive learning.",
    "To provide practical, real-life simulations of managing money.",
    "To promote long-term behavior change via consistent learning and rewards."
  ],
  stakeholders: [
    "Students (13–25 yrs) – Learn basic to advanced personal finance concepts in a fun, interactive way.",
    "Working Professionals – Improve financial decision-making and money management skills.",
    "Educational Institutions – Integrate the platform into their financial literacy curriculum.",
    "NGOs/CSR Wings – Promote financial literacy in rural and underserved regions.",
    "Banks & Fintechs – Engage future users and promote responsible financial behavior."
  ],
  functionalRequirements: [
    "User Registration and Profile: Sign up/login via email, phone, or social accounts; create avatar and track achievements.",
    "Learning Modules: Bite-sized content on saving, budgeting, UPI, loans, insurance, etc., with multi-language support.",
    "Gamification Features: Points, levels, streaks, badges, leaderboards, quiz battles, and scenario-based challenges.",
    "Progress Tracker: Visual representation of progress, completed modules, and earned rewards.",
    "Real-Life Simulations: Virtual money management tasks including salary planning and emergency response.",
    "Social Learning: Compete with friends, participate in group challenges, and form learning teams.",
    "Rewards & Certifications: Earn certificates, wallet credits, or badges upon completing milestones.",
    "Admin Dashboard: Tools to manage users, track learning metrics, update content, and view feedback."
  ],
  nonFunctionalRequirements: [
    "Accessibility: Mobile-first design with low data usage and offline mode support.",
    "Security: Minimal data storage with safe account management features.",
    "Localization: Content available in major Indian regional languages (Hindi, Tamil, Bengali, etc.).",
    "Performance: Fast load times and smooth transitions across modules.",
    "Scalability: Supports growing user base and content expansion efficiently."
  ],
  acceptanceCriteria: [
    "Gamified Lessons: Users can access financial lessons and earn points after completing quizzes.",
    "Leaderboards: Rankings update in real-time based on performance and progress.",
    "Simulations: Decisions made during simulations impact scores and learning results.",
    "Certificates: Badges and certificates are issued upon successful completion of specific tracks.",
    "Multi-language Support: Lessons and quizzes are fully accessible in regional languages.",
    "Mobile Compatibility: App runs smoothly on entry-level smartphones and different screen sizes."
  ]
},
"micro-saving-platform-daily-earners": {
  id: "micro-saving-platform-daily-earners",
  link: "https://drive.google.com/file/d/1zeDPzYe_XWyKnPl2R2ybn032X2tWpzGo/view?usp=sharing", // Replace with actual PDF link
  title: "Micro Saving Platform for Daily Earners",
  description: "A mobile-first fintech platform designed to help daily earners, gig workers, and freelancers consistently save small amounts through flexible options like auto-deductions, goal-based savings, and emergency fund management. Aimed at improving financial inclusion and security for low-income groups.",
  objective: [
    "To promote daily saving habits among daily wage earners or irregular income groups.",
    "To offer flexible and low-entry savings mechanisms suited to the needs of unbanked or underbanked individuals.",
    "To create a digital platform that builds trust, security, and long-term financial discipline.",
    "To support users in creating emergency funds and meeting short-term financial goals."
  ],
  stakeholders: [
    "Daily Earners – Save small amounts regularly, manage emergency funds, and track goals.",
    "Microfinance Institutions (MFIs) – Integrate the platform with clients and offer extended financial services.",
    "NGOs & Financial Literacy Groups – Use for awareness campaigns, training, and community savings drives.",
    "Governments & Policymakers – Support financial inclusion via digital infrastructure.",
    "Product Owners & Developers – Design, develop, and maintain the platform features.",
    "Banks & Payment Gateways – Provide secure wallet integration and UPI-based savings."
  ],
  functionalRequirements: [
    "User Registration: Sign up using mobile number, Aadhaar (optional), or NGO/MFI referral. Simple KYC flow.",
    "Wallet & Micro-Saving Options: Manual or auto UPI deposits; daily savings of ₹1–₹500; round-up saving feature.",
    "Goal-Based Savings: Create and track custom savings goals like school fees, emergency fund, etc.",
    "Reminders & Auto-Deduction: SMS/app reminders and auto-saving from linked wallets.",
    "Withdrawal System: Secure withdrawals with OTP; optional lock-in periods for goal-specific funds.",
    "Savings History: Timeline view of all deposits, withdrawals, and progress.",
    "Financial Education: Regional content via videos, tips, and infographics to support savings habits.",
    "Language Support: Interface available in multiple Indian languages like Hindi, Bengali, Tamil, etc.",
    "Emergency Alert Feature: Quick-access feature to withdraw saved emergency funds instantly."
  ],
  nonFunctionalRequirements: [
    "Usability: Simple, intuitive design suitable for users with low digital literacy.",
    "Offline Support: Basic functions via SMS or USSD (optional).",
    "Security: OTP login, secure transaction handling, and encrypted data storage.",
    "Scalability: Capable of handling large user volumes from rural and urban regions.",
    "Localization: Interface and content localized to regional languages and cultures.",
    "Performance: Optimized for low-end Android smartphones and poor network conditions.",
    "Reliability: High availability and data backup for financial transaction accuracy."
  ],
  acceptanceCriteria: [
    "Registration: Users can register using only a phone number and OTP; KYC process completes in under 5 minutes.",
    "Saving: Supports saving from ₹1–₹500; round-up and auto-save are operational.",
    "Goal Setting: Users can create/edit/delete savings goals with accurate progress tracking.",
    "Withdrawal: Withdrawals require OTP confirmation; funds disbursed within a 24-hour window.",
    "Reminders: Daily/weekly reminders are triggered; missed savings are logged and suggested.",
    "Reports: Users can view monthly savings summaries in their regional language.",
    "Performance & Accessibility: App loads in <3 seconds on 3G and works on 1GB RAM Android 6.0+ devices."
  ]
},
"personal-finance-tracker-youngsters": {
  id: "personal-finance-tracker-youngsters",
  link: "https://drive.google.com/file/d/1Pa80l5X6Unmyun-c45uSAHItJgGMCuon/view?usp=sharing", // Replace with actual PDF link
  title: "Personal Finance Tracker for Youngsters",
  description: "A mobile/web-based app to help students and young adults manage income, expenses, savings goals, and budgets. With gamified elements and insightful analytics, the platform promotes financial literacy and encourages disciplined financial habits in a fun and intuitive way.",
  objective: [
    "To empower youngsters with tools to manage their finances effectively.",
    "To encourage savings, budgeting, and mindful spending habits.",
    "To provide an easy-to-use interface with financial insights and analytics.",
    "To promote financial education through interactive and informative modules.",
    "To create a habit of recording and analyzing financial transactions."
  ],
  stakeholders: [
    "Students / Young Professionals – Track income, expenses, set budgets, and improve financial habits.",
    "Parents (Optional) – Monitor spending habits and offer financial guidance to dependents.",
    "Educators / Financial Coaches – Use the app as a teaching tool in financial literacy programs.",
    "Developers / Product Owners – Design, develop, and enhance app functionality.",
    "Advertisers / Financial Institutions (Optional) – Offer relevant financial products or services (if monetized)."
  ],
  functionalRequirements: [
    "User Registration and Login: Sign up using email or social login; secure password handling.",
    "Dashboard: Display of total income, expenses, and balance with visual charts (pie, bar).",
    "Add/Edit/Delete Transactions: Categorize and tag transactions like food, rent, travel, etc.",
    "Budget Management: Monthly category-wise budget setup with alerts on nearing/crossing limits.",
    "Savings Goal Tracker: Users can define savings goals (e.g., laptop, trip) and track deposits.",
    "Reports & Insights: Weekly/monthly summaries with insights into spending behavior.",
    "Reminders & Notifications: Payment due alerts, low balance notifications, and reminders.",
    "Educational Content (Optional): Financial literacy tips, quizzes, and learning modules.",
    "Data Export: Ability to export financial data in Excel or PDF format."
  ],
  nonFunctionalRequirements: [
    "Usability: Designed for 15–25 year olds with an intuitive and engaging interface.",
    "Performance: Fast load times and smooth transitions.",
    "Security: Encrypted data storage and secure user authentication.",
    "Scalability: Capable of managing growing user base and data volume.",
    "Reliability: Prevents data loss and ensures consistent tracking.",
    "Compatibility: Works on Android, iOS, and modern web browsers.",
    "Accessibility: Supports assistive technology like screen readers."
  ],
  acceptanceCriteria: [
    "User Registration/Login: User can register and log in; error messages shown for invalid input.",
    "Transaction Entry: Users can add, edit, or delete entries with correct category assignment.",
    "Dashboard: Displays accurate total income, expenses, and balance with real-time charts.",
    "Budgeting: Allows monthly budget setup; sends alerts when 80% of the limit is reached.",
    "Goal Tracker: Users can create savings goals and track progress with each saving.",
    "Reports: Generates accurate weekly/monthly reports; downloadable in Excel or PDF.",
    "Performance: App loads within 2 seconds on common smartphones.",
    "Security: Encrypted user data and functional password reset mechanism."
  ]
},
"smart-bill-splitter-upi": {
  id: "smart-bill-splitter-upi",
  link: "https://drive.google.com/file/d/15llS8tP6NXwj63zuAHbgNAN-QgogLcrh/view?usp=drive_link", // Replace with actual PDF link
  title: "Smart Bill Splitter and UPI Integration",
  description: "A mobile/web application that simplifies splitting group expenses and settling payments through UPI. It handles complex split types (equal, custom, percentage), tracks dues, and sends real-time reminders and payment links for seamless transactions among groups like friends, roommates, or colleagues.",
  objective: [
    "To make bill-splitting fast, transparent, and fair among groups.",
    "To eliminate confusion and manual calculations in shared payments.",
    "To provide real-time UPI integration for instant settlements.",
    "To track dues, settlements, and reminders automatically.",
    "To build a clean and user-friendly interface for all ages."
  ],
  stakeholders: [
    "Users (Friends, Roommates, Teams, Couples) – Split bills, track who paid, send/receive UPI payments.",
    "UPI Payment Gateways (e.g., PhonePe, Google Pay, Paytm) – Process UPI payments securely and instantly.",
    "App Developers / Product Owners – Build, maintain, and expand the app with new features.",
    "Data Analysts / Finance Teams (optional) – Analyze user behavior for improvements and insights."
  ],
  functionalRequirements: [
    "User Registration and Authentication: Sign up via phone, email, or Google. Optional login with UPI-linked mobile number and OTP.",
    "Create and Manage Groups: Create groups for different purposes and invite members via link or QR code.",
    "Bill Creation & Splitting: Add bill with details and split equally, unequally, by percentage, or item. Auto-calculate dues.",
    "UPI Integration: Generate UPI links per user. Support direct payment via GPay, PhonePe, etc., with live status updates.",
    "Settle Up & Reminders: One-tap settle with UPI request, automated reminders, and payment history tracking.",
    "Expense Dashboard: Show balances (you owe / you're owed), and graphs by category (food, rent, travel).",
    "Notifications: Push/SMS notifications for new bills, dues, or reminders.",
    "Export Data: Export group reports as PDF/Excel for transparency."
  ],
  nonFunctionalRequirements: [
    "Scalability: Supports large groups (50+ people per group).",
    "Security: Encrypted user data and secure UPI processing.",
    "Reliability: No data loss during transactions or splits.",
    "Performance: Generate/validate UPI links within 2 seconds.",
    "Compatibility: Cross-platform support (Android, iOS, web).",
    "Accessibility: Works well on low-end phones and slow networks."
  ],
  acceptanceCriteria: [
    "Bill Creation: User can split a bill among multiple people using various options (equal, custom).",
    "UPI Payment: UPI link opens in preferred app and confirms on successful payment.",
    "Group Tracking: Group summary shows who owes whom and payment statuses.",
    "Notifications: Reminders sent automatically to users with pending payments.",
    "Security: No sensitive UPI data (PINs, keys) is stored; only transaction status is handled.",
    "Performance: App responds within 1–2 seconds for key operations."
  ]
},
"smart-credit-scoring-unbanked": {
  id: "smart-credit-scoring-unbanked",
  link: "https://drive.google.com/file/d/1e-SjOgHWiV8yNRMrekId1oVIBrbLy9nX/view?usp=sharing", // Replace with actual PDF link
  title: "Smart Credit Scoring System for Unbanked",
  description: "An AI-powered alternative credit scoring system designed for individuals without formal banking history. It leverages alternative data sources like mobile usage, UPI transactions, utility bills, and social data to compute dynamic credit scores, promoting financial inclusion and enabling access to loans for the unbanked.",
  objective: [
    "To create a reliable credit score for people with no formal credit history or banking background.",
    "To increase access to microloans and formal financial products for the unbanked and underbanked.",
    "To leverage AI/ML models for analyzing alternative data (e.g., mobile usage, payment patterns, etc.).",
    "To minimize lending risks through intelligent behavioral analysis and predictive modeling.",
    "To assist financial institutions in extending credit more confidently and inclusively."
  ],
  stakeholders: [
    "Unbanked Individuals – Receive fair credit evaluation and access to loans without traditional bank history.",
    "Microfinance Institutions (MFIs) – Offer credit safely to a wider customer base using AI-powered insights.",
    "Banks & NBFCs – Expand customer outreach in rural/underserved areas with reduced risk.",
    "Government Bodies – Promote financial inclusion as part of national digital economy goals.",
    "FinTech Companies – Integrate smart scoring models into loan disbursal platforms."
  ],
  functionalRequirements: [
    "User Registration: Mobile number verification, Aadhaar/e-KYC integration.",
    "Data Aggregation Engine: Collect data from alternative sources such as mobile phone usage, UPI transactions, utility bill payments, and spending patterns.",
    "AI-Based Scoring Algorithm: Use machine learning models to analyze behavioral patterns and generate a credit score.",
    "Score Dashboard: Show real-time credit score, confidence level, and recommendations for improvement.",
    "Lender Interface: Dashboard for lenders to view applicant credit scores and risk categories.",
    "Loan Eligibility Checker: Estimate user’s eligible loan range based on AI score.",
    "Alerts & Notifications: Inform users about score changes, payment reminders, or suspicious behavior."
  ],
  nonFunctionalRequirements: [
    "Security: All data must be encrypted (AES-256), and user consent must be obtained for data usage.",
    "Scalability: System should support millions of users and thousands of concurrent evaluations.",
    "Accuracy: ML models should maintain a consistent accuracy of ≥85% in prediction.",
    "Compliance: Must follow India’s DPDP Act and RBI’s norms for digital lending.",
    "Transparency: The scoring logic should be explainable, and users should know how their score is formed.",
    "Responsiveness: UI should respond within 1–2 seconds per interaction."
  ],
  acceptanceCriteria: [
    "Credit Score Generation: Users receive a score after data analysis, with an explanation of influencing factors.",
    "Lender Access: Lenders can view applicant scores and approve/reject based on risk bands.",
    "Score Update Frequency: System updates scores periodically (e.g., weekly or monthly) based on new behavior.",
    "Data Privacy: Users explicitly consent before data is collected or used.",
    "Loan Access: Based on the score, users are offered loan recommendations with terms."
  ]
},
"tax-filing-amplifier-gig-freelancers": {
  id: "tax-filing-amplifier-gig-freelancers",
  link: "https://drive.google.com/file/d/135dsF6ir_HAQ94hijacRXo7jyCRECqUO/view?usp=sharing", // Replace with actual PDF link
  title: "Tax Filing Amplifier for Gig Workers and Freelancers",
  description: "A platform designed to simplify and automate tax filing for gig workers, freelancers, and independent contractors. It connects income sources like UPI, Paytm, Upwork, etc., with tax systems to help users track income, calculate taxes, and file returns easily while maximizing deductions and improving compliance.",
  objective: [
    "To automate income tracking and tax calculation for gig workers and freelancers.",
    "To provide smart tax-saving suggestions based on user income and expenses.",
    "To streamline filing of ITR forms (especially ITR-3 and ITR-4 for Indian users).",
    "To improve financial literacy and compliance in the informal earning segment.",
    "To serve as a compliance and planning tool to avoid penalties or audit risks."
  ],
  stakeholders: [
    "Freelancers/Gig Workers – Track income and expenses, receive tax reports, and file ITR easily.",
    "Chartered Accountants – Offer expert review, consultancy, and manual override if needed.",
    "Platform Admins – Manage user base, tax engine, and integrations.",
    "Government / IT Dept – Receive accurate filings and data reports.",
    "Developers – Build features, maintain security, and update compliance rules."
  ],
  functionalRequirements: [
    "User Onboarding: Register using email or phone number with optional PAN, Aadhaar, and GSTIN linking.",
    "Income Aggregation: Connect with income sources like UPI apps, Razorpay, Payoneer, Paytm Business, Fiverr, Upwork, etc., or add manually.",
    "Expense Tracking: Use OCR scanner for receipts, categorize expenses, and tag business vs personal.",
    "Tax Estimation Engine: Auto-calculate estimated tax, suggest ITR type, and show advance tax alerts.",
    "Deduction Optimizer: Identify eligible deductions under sections like 80C, 80D, 10(14) and notify for missed ones.",
    "Automated ITR Filing: File returns with pre-filled Form 26AS and AIS import; allow optional CA review.",
    "Reports and Compliance: Download tax/GST reports, prep audit documents, and reconcile TDS using Form 16A or AIS."
  ],
  nonFunctionalRequirements: [
    "Security: Bank-grade encryption (AES-256), PAN masking, and OTP verifications.",
    "Scalability: Handle thousands of concurrent filings during tax season.",
    "Compliance: Stay updated with latest Indian Income Tax regulations.",
    "Localization: Hindi and regional language support.",
    "Mobile-first: Seamless experience on both mobile and desktop."
  ],
  acceptanceCriteria: [
    "Income Import: Successfully connects and fetches data from UPI/payment platforms.",
    "Tax Estimation Engine: Accurately computes tax based on income, expenses, and deduction logic.",
    "ITR Filing: Generates correct XML/JSON files for submission to the Income Tax portal.",
    "CA Review System: Users can request a CA for review before final submission.",
    "Deduction Suggestions: System notifies users about potential tax-saving opportunities."
  ]
},
"transparent-investment-education-platform": {
  id: "transparent-investment-education-platform",
  link: "https://drive.google.com/file/d/1yk2s_1AI6q8saoF1cPxRKZA_ElXWusdt/view?usp=sharing", // Replace with actual PDF link
  title: "Transparent Investment Education Platform",
  description: "A web/mobile platform designed to educate beginners about investments in a transparent and unbiased way. It removes jargon, avoids promotional content, and provides data-backed insights. Features include structured courses, virtual simulations, expert content, and interactive financial tools aimed at improving financial literacy.",
  objective: [
    "To educate users about investments (stocks, mutual funds, ETFs, crypto, etc.) with complete transparency.",
    "To demystify financial jargon and build confidence in first-time investors.",
    "To provide data-backed insights instead of promotional content or biased recommendations.",
    "To promote financial literacy and inclusion among students, working professionals, and homemakers.",
    "To offer hands-on learning tools like virtual portfolios and quizzes to reinforce concepts."
  ],
  stakeholders: [
    "Beginner Investors / Students / Working Professionals – Learn about investing in a transparent and risk-free environment.",
    "Financial Educators / Trainers – Contribute knowledge modules, content, or live sessions.",
    "Regulatory Bodies (SEBI, RBI, etc.) – Ensure the platform remains unbiased and compliant.",
    "Content Creators / Analysts – Provide neutral, educational financial content.",
    "Schools / Colleges / NGOs – Use the platform to teach financial literacy.",
    "Developers / Product Team – Build, maintain, and scale the platform."
  ],
  functionalRequirements: [
    "User Registration & Profiles: Sign-up via email or social login, and track learning progress and achievements.",
    "Learning Modules: Structured beginner-to-advanced courses with articles, videos, infographics, and voiceovers.",
    "Transparency & Disclaimers: All content includes clear disclaimers; no paid recommendations or promotions.",
    "Simulated Investment Lab: Practice virtual trading with real market data and track portfolio performance.",
    "Interactive Tools: Investment calculators, SIP estimators, risk profile tests, and 'What-if' simulators.",
    "Assessments & Quizzes: Chapter-wise quizzes with instant feedback and certificates on course completion.",
    "News & Market Analysis: Simplified real-time financial news with charts, video summaries, and glossary tools.",
    "Community Forum / Discussion Board: Users can ask questions, share experiences, and get guidance.",
    "Multi-Language Support: Content available in English, Hindi, and regional languages.",
    "Progress Dashboard: Visual timeline of course completion, quiz scores, and personal learning goals."
  ],
  nonFunctionalRequirements: [
    "Transparency: Clear disclosure of data sources; no affiliate marketing or biased advice.",
    "Scalability: Support thousands of users and allow frequent course updates.",
    "Performance: Optimized for mobile and low-bandwidth users.",
    "Security: Secure login, encrypted data, and content access control.",
    "Accessibility: Compatible with screen readers, voice controls, and keyboard navigation.",
    "Localization: Custom-tailored for Indian audiences and varied education levels.",
    "Responsiveness: Fully functional across mobile, tablet, and desktop devices."
  ],
  acceptanceCriteria: [
    "Learning Modules: Users can follow modules sequentially or jump to topics; each includes a quiz and feedback.",
    "Simulation Lab: Users can buy/sell virtual assets; portfolio reflects real-time market fluctuations.",
    "Transparency Markers: Each course or article clearly indicates if it's opinion, research, or data-driven.",
    "Progress Tracking: Users view dashboard with percent completion, badges, and personalized tips.",
    "Community Support: Users can post, reply, and interact; moderation ensures accuracy and civility."
  ]
}














    },


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