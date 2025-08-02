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









  'legaltech': {
    name: 'LegalTech',
    icon: '⚖️',
    color: 'from-indigo-600 to-blue-600',
    glow: 'shadow-indigo-500/30',
    problems: {
      'court-case-manager': {
        id: 'court-case-manager',
        link: "https://drive.google.com/file/d/1lRIJ45iLlIbguNsBapg4G2GUuMhFTcW4/view?usp=sharing", 
        title: 'Court Hearing and Case Management Platform',
        description: 'Digitized platform to manage court hearings, legal case filings, document sharing, and real-time notifications for all stakeholders.',
        objective: 'To streamline legal case workflows and improve transparency and accessibility in court operations.',
        stakeholders: ['Judges', 'Lawyers', 'Court Clerks', 'Citizens', 'System Admins', 'Judicial Authorities'],
        functionalRequirements: [
          'Role-based authentication and access',
          'Case filing and document uploads',
          'Hearing scheduling and updates',
          'Case dashboard with timeline view',
          'Real-time notifications and case search'
        ],
        nonFunctionalRequirements: [
          'End-to-end encryption',
          'Support for large concurrent users',
          '<2 second response time',
          '99.9% uptime',
          'WCAG 2.1 & GDPR compliance'
        ],
        acceptanceCriteria: [
          'Role-based login and secure access',
          'Lawyers can file cases with documents',
          'Hearing scheduling with notifications',
          'Search/filter and dashboard status view',
          'Full audit trail for case activities'
        ],
        implementationPlan: [
          'Phase 1: Auth & Case Filing (1.5 months)',
          'Phase 2: Scheduling & Dashboard (1.5 months)',
          'Phase 3: Notifications & Search (1 month)',
          'Phase 4: Testing & Deployment (1 month)'
        ]
      },
      'access-to-justice': {
        id: 'access-to-justice',
        link: "https://drive.google.com/file/d/1Hv3JHejGDYjJdbKKA06doyxtF2jb6XW_/view?usp=sharing", 
        title: 'Access to Justice for Underserved Communities',
        description: 'A mobile-first platform that connects marginalized communities with free or affordable legal help through multilingual support, legal resources, chatbots, and pro bono services.',
        objective: 'To democratize legal access by connecting underserved populations with legal education, aid, and self-help tools.',
        stakeholders: [
          'Community Members / Users',
          'Legal Aid Organizations',
          'Pro Bono Lawyers / Law Students',
          'NGOs / Civil Society Groups',
          'Government / Judiciary',
          'Platform Administrators'
        ],
        functionalRequirements: [
          'Multilingual user interface',
          'AI chatbot for legal issue triage',
          'Self-help legal library with regional content',
          'Legal help request and matching system',
          'Online appointment booking',
          'Anonymous usage mode for sensitive cases',
          'NGO/Lawyer dashboards',
          'Push notifications and SMS alerts'
        ],
        nonFunctionalRequirements: [
          'Encrypted data & privacy law compliance',
          '24/7 high availability',
          'Mobile-first, offline access, WCAG-compliant design',
          'Scalable for high user volume and chatbot sessions',
          'Localized and culturally sensitive content',
          'Fast performance on low-bandwidth devices'
        ],
        acceptanceCriteria: [
          'Available in at least 3 languages',
          'Chatbot triages legal issues with 80%+ accuracy',
          'Library includes 50+ region-specific articles/templates',
          'User requests responded to within 24 hours',
          'NGOs/lawyers manage cases via dashboard',
          'Loads under 3 seconds on 3G Android phones',
          'Anonymity respected by default for sensitive users',
          'Offline access for static legal resources',
          'Consultation scheduling via calendar interface',
          'Admins and NGOs can track usage and engagement'
        ],
        implementationPlan: [
          'Phase 1: Multilingual UI & chatbot prototype (1.5 months)',
          'Phase 2: Legal library, request form, appointment system (2 months)',
          'Phase 3: Dashboards & push/SMS alerts (1 month)',
          'Phase 4: Testing, offline support, and deployment (1.5 months)'
        ]
      },
      'automated-legal-doc-generator': {
          id: 'automated-legal-doc-generator',
          link: "https://drive.google.com/file/d/1PQWOMVB-GznIRxYUOsFem5s26P0Aijt5/view?usp=sharing", 
          title: 'Automated Legal Document Generator',
          description: 'A rule-based and AI-powered system for generating customized legal documents like contracts, NDAs, and wills using smart forms and templates.',
          objective: 'To automate document drafting, ensure legal compliance, and save time for individuals and legal teams.',
          stakeholders: [
            'Legal Professionals / Law Firms',
            'Corporate Legal Departments',
            'Small Businesses / Startups',
            'Individuals / End Users',
            'Product Owner',
            'Software Developers',
            'Compliance Officers'
          ],
          functionalRequirements: [
            'Secure login and dashboard',
            'Form-based input for legal data',
            'Predefined customizable templates',
            'Jurisdiction-based language selection',
            'Preview, edit, and download as PDF/Word',
            'Save/retrieve previous documents',
            'Admin interface for template control',
            'Version control and optional e-signature'
          ],
          nonFunctionalRequirements: [
            '<5 seconds document generation time',
            'AES-256 encryption, HTTPS, role-based access',
            'Simple UI for non-legal users',
            'Supports 10,000+ concurrent users',
            '99.9% uptime and backup',
            'GDPR/CCPA compliance',
            'Supports multiple languages and jurisdictions'
          ],
          acceptanceCriteria: [
            'Users can register, log in, and access templates',
            'Dynamic forms adjust to document type/jurisdiction',
            'Secure, editable PDF/Word download available',
            'Document generation within 5 seconds',
            'Admins can update templates without data loss'
          ],
          implementationPlan: [
            'Phase 1: Auth, dashboard, form input (1 month)',
            'Phase 2: Template engine + jurisdiction logic (1.5 months)',
            'Phase 3: PDF/Word export, storage, admin panel (1 month)',
            'Phase 4: Testing, deployment, usability checks (1 month)'
          ]
        },
      'fake-legal-doc-detector': {
          id: 'fake-legal-doc-detector',
          link: "https://drive.google.com/file/d/1Wq0-9sENR3St7uKRtcOmhN5RvMxqC2Mo/view?usp=sharing", 
          title: 'Fake Legal Document Detector',
          description: 'Detects forged legal documents using AI, OCR, and metadata analysis to prevent fraud.',
          objective: 'To reduce legal fraud by verifying authenticity of documents automatically.',
          stakeholders: ['Law Firms', 'Government Agencies', 'Corporate Legal Teams', 'General Public'],
          functionalRequirements: [
            'Document upload and OCR',
            'Metadata and digital signature verification',
            'AI-based forgery detection',
            'Authenticity scoring and PDF reports',
            'Admin dashboard for flagged documents'
          ],
          nonFunctionalRequirements: [
            'Analysis within 10 seconds',
            'Supports 1000+ checks/day',
            'AES-256 encryption & GDPR compliance',
            '90%+ detection accuracy'
          ],
          acceptanceCriteria: [
            'Secure upload and analysis',
            'Correctly flags forged documents',
            'Provides reasoning and PDF report',
            'Performs within required limits'
          ],
          implementationPlan: [
            'Phase 1: OCR + Upload (1 month)',
            'Phase 2: AI Forgery Detection (2 months)',
            'Phase 3: Dashboard + Integration (2 months)',
            'Phase 4: Testing & Deployment (1 month)'
          ]
        },
        'ai-legal-doc-summarizer': {
          id: 'ai-legal-doc-summarizer',
          link: "https://drive.google.com/file/d/1kfJG76EnNcDwbS-rmKqecvUCH8LViWQQ/view?usp=sharing", 
          title: 'AI Powered Legal Document Summarizer',
          description: 'Tool to summarize legal documents like contracts and judgments using AI/NLP.',
          objective: 'To save time and improve understanding of lengthy legal documents.',
          stakeholders: [
            'Participants',
            'Legal Mentors',
            'Technical Mentors',
            'Judges',
            'End Users'
          ],
          functionalRequirements: [
            'Upload legal documents',
            'Text extraction & OCR',
            'AI-based summarization',
            'Show summary vs original',
            'Download summary'
          ],
          nonFunctionalRequirements: [
            'Fast performance',
            'Accurate legal summaries',
            'Secure & encrypted',
            'Role-based access',
            'Multilingual support'
          ],
          acceptanceCriteria: [
            'Uploads & summarization work fast',
            'Legal meaning preserved',
            'Editable & downloadable summaries',
            'Secure access & storage'
          ],
          implementationPlan: [
            'Phase 1: Upload + basic summary',
            'Phase 2: Side-by-side view',
            'Phase 3: UI + download',
            'Phase 4: Security',
            'Phase 5: Testing & launch'
          ]
        },
        'legal-right-awareness-tool': {
          id: 'legal-right-awareness-tool',
          link: "https://drive.google.com/file/d/18JMAP-eOEtYybIspnt3hBT2tOMoYy_1a/view?usp=sharing", 
          title: 'Legal Right Awareness Tool',
          description: 'Platform to educate users about legal rights using location-based, scenario-driven guidance.',
          objective: 'To provide real-time, accessible legal info in simple language for common situations.',
          stakeholders: [
            'Users',
            'Legal Experts',
            'NGOs',
            'Developers',
            'Judges'
          ],
          functionalRequirements: [
            'Multilingual UI (web & mobile)',
            'Scenario-based guidance',
            'Location-based legal info',
            'Search bar for topics',
            'Offline access',
            'Emergency help button',
            'Verified legal content',
            'Accessibility features'
          ],
          nonFunctionalRequirements: [
            'Fast (≤ 2s response)',
            'Scalable (10K+ users)',
            'Secure & anonymous',
            '99.5% uptime',
            'Easy to use & update'
          ],
          acceptanceCriteria: [
            'Shows legal rights by location',
            'Supports 3+ scenarios',
            'Step-by-step guidance',
            'Offline mode works',
            'Emergency help functional',
            '2+ accessibility options',
            'Search works accurately',
            'Verified content',
            'Usability tested',
            'No data collected without consent',
            'Multilingual support (2+ languages)'
          ],
          implementationPlan: [
            'UI + Languages + Scenarios',
            'Location + Content',
            'Emergency + Accessibility',
            'Offline + Optimization',
            'Testing + Launch'
          ]
        },
        'legal-risk-analyzer': {
            id: 'legal-risk-analyzer',
            link: "https://drive.google.com/file/d/108R-CkMMnmwApWtOKS0rDFXsRR6qMUvQ/view?usp=sharing", 
            title: 'Legal Risk Analyzer for Contracts',
            description: 'AI tool to analyze contracts, detect legal risks, and provide summaries with flagged clauses.',
            objective: 'To automate legal review and highlight contract risks for faster, safer decision-making.',
            stakeholders: [
              'Participants',
              'Legal Mentors',
              'Technical Mentors',
              'Judges',
              'End Users',
              'Sponsors'
            ],
            functionalRequirements: [
              'Upload DOCX, PDF, TXT files',
              'NLP-based contract summarization',
              'Flag risk clauses by category',
              'Assign & display risk levels',
              'Explain risk reasoning',
              'Highlight risky clauses in full text',
              'Download summary and report'
            ],
            nonFunctionalRequirements: [
              'High risk detection accuracy',
              'Fast (≤ 60s analysis)',
              'Secure & encrypted file handling',
              'Scalable for many users',
              'Accessible on all devices (WCAG compliant)',
              'Easy-to-use for non-legal users'
            ],
            acceptanceCriteria: [
              'Handles 25+ docs in parallel',
              '99.9% uptime',
              '≤ 5s analysis for short docs',
              'Retry failed analysis automatically',
              'Only authorized access allowed',
              'Logs for audit trails',
              'Consistent results on repeated analysis',
              'Supports one legal domain',
              'Risk labels (Low, Medium, High) shown',
              'Downloadable risk report',
              'Summary dashboard available'
            ],
            implementationPlan: [
              'Phase 1: Upload + Summarization',
              'Phase 2: Risk tagging + Severity levels',
              'Phase 3: Report generation + Download',
              'Phase 4: UI, Security, Accessibility',
              'Phase 5: Testing + Demo-ready deployment'
            ]
          },
          'legal-risk-scoring-startups': {
            id: 'legal-risk-scoring-startups',
            link: "https://drive.google.com/file/d/1WheolUZpkKTqKPfiCyEiEwVOQ-NTRp9F/view?usp=sharing", 
            title: 'Legal Risk Scoring for Startups',
            description: 'Tool for startups to self-assess legal risk using questionnaires, document uploads, and scoring logic.',
            objective: 'To help startups identify legal risks, improve compliance, and become funding-ready.',
            stakeholders: [
              'Startup Founders',
              'Investors / VCs',
              'Legal Advisors',
              'Compliance Officers'
            ],
            functionalRequirements: [
              'Role-based registration (Startup, Investor, Legal Advisor)',
              'Legal questionnaire by topic (IP, labor, privacy)',
              'Document upload & review',
              'Risk scoring engine (0–100)',
              'Downloadable or in-app risk report',
              'Startup dashboard (scores & trends)',
              'Admin panel for managing rules/questions'
            ],
            nonFunctionalRequirements: [
              'Fast (≤ 10s for scoring)',
              'Secure & encrypted',
              'Scalable for many users',
              'Accurate rule-based logic',
              'Clean UI for non-legal users',
              'Mobile-friendly & WCAG compliant',
              'Compliant with GDPR/CCPA'
            ],
            acceptanceCriteria: [
              'User registration & profile creation',
              'Legal questionnaire completes < 15 min',
              'Generates real-time risk score (0–100)',
              'Secure doc uploads',
              'Risk report with 3+ suggestions',
              'Admin can update logic/questions',
              'Response time ≤ 2s for 90% interactions',
              'Data securely stored',
              'Dashboard shows risk by category'
            ],
            implementationPlan: [
              'Phase 1: Auth + Questionnaire',
              'Phase 2: Scoring Engine + Report',
              'Phase 3: Dashboard + Admin Panel',
              'Phase 4: Security + Compliance',
              'Phase 5: Testing + Optimization'
            ]
          },
          'legislative-bill-tracker': {
            id: 'legislative-bill-tracker',
            link: "https://drive.google.com/file/d/1xUGLr7MYhd7v6AbxuxAixya0jfB6-s3F/view?usp=sharing", 
            title: 'Legislative Bill Tracker with Impact Forecasting',
            description: 'Platform to track legislative bills in real-time and forecast their impact using AI.',
            objective: 'To improve transparency, accessibility, and understanding of legislative processes and impacts.',
            stakeholders: [
              'Citizens / Voters',
              'Policy Analysts',
              'Journalists / Media',
              'NGOs / Advocates',
              'Businesses / Legal Teams',
              'Lawmakers / Government Staff'
            ],
            functionalRequirements: [
              'Track bills by status, category, date',
              'Real-time alerts and subscriptions',
              'AI-based impact forecasting',
              'Summarize legal text into plain language',
              'User dashboard with personalized feed',
              'Search & filter by keywords, bill number',
              'Public voting and feedback system',
              'Support national and state-level bills'
            ],
            nonFunctionalRequirements: [
              'Secure APIs & data encryption',
              'Scalable for high data & traffic',
              'Fast (≤ 3s load time)',
              '99.9% uptime',
              'User-friendly interface with charts',
              'Mobile responsive + WCAG compliant',
              'Multi-language support'
            ],
            acceptanceCriteria: [
              'Real-time updates for 100+ bills',
              'AI forecasts match expert benchmarks',
              'Summaries cut text by 70%+',
              'Email/SMS alerts for tracked bills',
              'Search < 2s response',
              'Moderated voting & comments',
              'Custom user dashboard',
              'Admin control for outdated bills',
              'Works on desktop/mobile',
              'Integrates with gov APIs'
            ],
            implementationPlan: [
              'Phase 1: Bill DB + Tracker + Search',
              'Phase 2: AI Forecasting + Summarizer',
              'Phase 3: Dashboard + Subscriptions',
              'Phase 4: Public Input + Multi-level tracking',
              'Phase 5: Security + Testing + Launch'
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
        'learning-tracker-school-parents': {
          id: 'learning-tracker-school-parents',
          link: "https://drive.google.com/file/d/1hx4mGfNtRr3Zjeke4kAr049_E4F_4pKa/view?usp=sharing", 
          title: 'Learning Tracker for School-Parents',
          description: 'Platform to help parents monitor their child’s academic, behavioral, and attendance records in real-time.',
          objective: 'To improve school-parent communication and enable early interventions for student success.',
          stakeholders: [
            'Parents/Guardians',
            'Students',
            'Teachers',
            'School Administrators'
          ],
          functionalRequirements: [
            'User authentication (parents, teachers, admins)',
            'Student dashboard (grades, attendance, behavior, assignments)',
            'Teacher interface to update student records',
            'Notification system (grades, assignments, events)',
            'Parent-teacher messaging system',
            'Admin panel (user control, reports)'
          ],
          nonFunctionalRequirements: [
            'Scalable for multiple schools',
            'Secure & encrypted student data',
            'Fast performance (< 2s load)',
            'User-friendly UI for all roles',
            '99.5% uptime during school hours',
            'Responsive on mobile & desktop',
            'Localization support'
          ],
          acceptanceCriteria: [
            'Parents can log in and view dashboard',
            'Teachers can update student data',
            'Notifications work for grades & assignments',
            'Messaging between parents and teachers works',
            'Admins manage users and reports',
            'Platform loads < 2s, mobile-friendly',
            'All data protected with encryption & access control'
          ],
          implementationPlan: [
            'Phase 1: Auth + Student Dashboard',
            'Phase 2: Teacher Input + Notifications',
            'Phase 3: Messaging + Admin Panel',
            'Phase 4: Security + Mobile Optimization',
            'Phase 5: Testing + Multi-language Support'
          ]
        },
        'online-note-summarizer': {
          id: 'online-note-summarizer',
          link: "https://drive.google.com/file/d/1I7Fuuqf5NpB04jqmgLN3y370OqF_XbaG/view?usp=sharing", 
          title: 'Online Note Summarizer',
          description: 'A platform that uses AI to generate summaries, highlights, bullet lists, and action items from user-uploaded notes or documents.',
          objective: 'To make note revision faster and more effective by auto-summarizing long text into digestible formats.',
          stakeholders: [
            'Students',
            'Educators & Tutors',
            'Working Professionals',
            'Product Owners / EdTech Companies',
            'Developers / AI Researchers'
          ],
          functionalRequirements: [
            'User authentication (email, Google, password reset)',
            'Input notes via text box or file upload (.txt, .pdf, .docx)',
            'AI-based summarization engine with format/style options',
            'Summary output in paragraph, bullet, or mind map formats',
            'Export/download summary (PDF, DOCX, clipboard)',
            'User dashboard to manage saved notes/summaries',
            'Mobile responsive, light/dark modes, loading indicators'
          ],
          nonFunctionalRequirements: [
            'Summarization within 5 seconds for 1,000 words',
            'Supports multiple simultaneous users',
            '99.5% uptime and fault-tolerant system',
            'Semantic accuracy in generated summaries',
            'Intuitive and accessible UI with tooltips and guidance'
          ],
          acceptanceCriteria: [
            'Users can upload or paste notes (100–10,000 characters)',
            'Summaries retain meaning and context within 10 seconds',
            'Users can choose short or detailed summary formats',
            'Summary is exportable in .txt, .pdf, or .docx',
            'UI is intuitive, responsive, and shows input/output clearly',
            'System handles large inputs without crashing'
          ],
          implementationPlan: [
            'Phase 1: Input mechanisms (text, file upload)',
            'Phase 2: Summarization engine with output controls',
            'Phase 3: UI/UX refinements + export options',
            'Phase 4: Dashboard + note management',
            'Phase 5: Performance testing and deployment'
          ]
        },
        'ai-career-path-advisor': {
          id: 'ai-career-path-advisor',
          link: "https://drive.google.com/file/d/1FE3MPh16PP19eiMUepK4lrIm-AmIjajq/view?usp=sharing", 
          title: 'AI Career Path Advisor',
          description: 'AI tool that helps users explore and plan a personalized career in Artificial Intelligence using skills assessment and trend analysis.',
          objective: 'To guide users on the best AI career path based on current skills, interests, and industry demands.',
          stakeholders: [
            'Students',
            'Working Professionals',
            'Career Counselors',
            'Educators',
            'HR & Recruiters'
          ],
          functionalRequirements: [
            'User sign-up and profile creation',
            'Skill assessment quiz or input',
            'AI-generated career recommendations (e.g., NLP, ML Engineer)',
            'Learning roadmap with suggested courses and certifications',
            'Progress tracking dashboard',
            'Real-time job trend insights and salaries'
          ],
          nonFunctionalRequirements: [
            'Secure user data handling',
            'Fast response time for recommendations',
            'Mobile and desktop responsive design',
            'Scalable to support many users',
            'User-friendly and visually clear interface'
          ],
          acceptanceCriteria: [
            'Users complete a skill/profile setup',
            'System suggests at least 3 AI career paths',
            'Roadmap includes courses, tools, and milestones',
            'Dashboard updates with user progress',
            'Recommendation results delivered within 5 seconds'
          ],
          implementationPlan: [
            'Phase 1: User login + Skill input form',
            'Phase 2: AI recommendation engine',
            'Phase 3: Roadmap generation + Dashboard',
            'Phase 4: Job trends integration',
            'Phase 5: Testing and UX improvements'
          ]
        },
        'inclusive-learning-platform': {
          id: 'inclusive-learning-platform',
          link: "https://drive.google.com/file/d/1U6ZPy0kTl9JCyRd-p9byDyhAvM9O5Xvo/view?usp=sharing", 
          title: 'Inclusive Learning for Students with Disabilities',
          description: 'A platform to make education more accessible for students with disabilities using assistive technology and customized learning experiences.',
          objective: 'To provide equal learning opportunities through accessible content, tools, and support tailored to various disabilities.',
          stakeholders: [
            'Students with Disabilities',
            'Special Educators',
            'Parents/Guardians',
            'School Administrators',
            'Accessibility Experts'
          ],
          functionalRequirements: [
            'User profiles with disability-specific preferences',
            'Text-to-speech, speech-to-text, and sign language support',
            'Customizable font sizes, contrast modes, and layouts',
            'Interactive quizzes and visual learning modules',
            'Progress tracking with educator feedback',
            'Parental/guardian dashboards'
          ],
          nonFunctionalRequirements: [
            'WCAG-compliant design',
            'Mobile-first and responsive UI',
            'Data privacy and secure logins',
            'Multilingual support',
            'Minimal load time (≤ 2 seconds)'
          ],
          acceptanceCriteria: [
            'Platform adapts UI for various impairments (e.g., visual, auditory)',
            'Content is accessible via multiple formats (text, audio, visual)',
            'Users can complete lessons independently',
            'Educators can monitor progress and give feedback',
            'Guardians can access student reports securely'
          ],
          implementationPlan: [
            'Phase 1: Profile setup + Accessibility settings',
            'Phase 2: Assistive tools integration',
            'Phase 3: Interactive content + Dashboards',
            'Phase 4: Testing with special educators and students',
            'Phase 5: Deployment + Feedback loop'
          ]
        },
        'peer-doubt-solving-platform': {
          id: 'peer-doubt-solving-platform',
           link: "https://drive.google.com/file/d/1HMHAJ54zZw0kN_YfvpshDnWENim8h94Q/view?usp=sharing", 
          title: 'Peer-to-Peer Doubt Solving Platform',
          description: 'A digital space for students to ask and resolve academic doubts through peer support, real-time Q&A, and expert validation.',
          objective: 'To create a collaborative and scalable doubt-solving ecosystem driven by students and mentors.',
          stakeholders: [
            'Students',
            'Peer Mentors',
            'Subject Experts',
            'Teachers',
            'Platform Moderators'
          ],
          functionalRequirements: [
            'User signup/login with role selection (student, mentor)',
            'Post academic questions with tags/subjects',
            'Real-time or threaded answers from peers/mentors',
            'Voting/rating system to highlight accurate responses',
            'Mentor verification and reputation scoring',
            'Chat or follow-up feature for discussion',
            'Dashboard to track questions, answers, and ratings'
          ],
          nonFunctionalRequirements: [
            'Scalable backend for large user base',
            'Responsive design for mobile & web',
            'Secure user data handling',
            'Fast query and response rendering',
            'Moderation tools to prevent abuse or spam'
          ],
          acceptanceCriteria: [
            'Students can ask questions and receive verified responses',
            'High-rated answers get promoted or flagged as solved',
            'Mentors have badges based on reputation or activity',
            'Moderators can manage content and users',
            'Platform works smoothly on both mobile and desktop'
          ],
          implementationPlan: [
            'Phase 1: Auth + Role setup + Basic Q&A',
            'Phase 2: Answer rating + Reputation system',
            'Phase 3: Mentor validation + Chat feature',
            'Phase 4: Moderation + Dashboard',
            'Phase 5: UI polishing + Load testing'
          ]
        },
        'real-time-engagement-tracker': {
            id: 'real-time-engagement-tracker',
            link: "https://drive.google.com/file/d/1VJG9gyhrNChYq6ZHTdNaTbsOB1ibnZcI/view?usp=sharing",
            title: 'Real-Time Engagement Tracker for Online Classes',
            description: 'AI system to track student attentiveness in real-time using facial expression, audio, and interaction data.',
            objective: 'To help instructors measure, understand, and improve student engagement during online sessions.',
            stakeholders: [
              'Teachers / Instructors',
              'Students',
              'EdTech Companies / LMS Platforms',
              'Mentors / Academic Advisors'
            ],
            functionalRequirements: [
              'Engagement detection via webcam and microphone',
              'Track chat, polls, and quiz participation',
              'Real-time engagement scoring (0–100 or low/med/high)',
              'Instructor dashboard with live class stats',
              'Highlight disengaged students',
              'Alert system for low engagement',
              'Post-class analytics and downloadable reports'
            ],
            nonFunctionalRequirements: [
              'Latency under 3 seconds',
              'Secure data processing with consent',
              'At least 80% scoring accuracy',
              'Works across major browsers and tools',
              'Simple setup with scalable support (10–50 users)',
              'Minimal UI for ease of use'
            ],
            acceptanceCriteria: [
              'Live engagement scores visible to instructors',
              'Facial/audio activity affects scoring correctly',
              'Alerts trigger during low engagement',
              'Dashboard updates in real-time',
              'Post-class reports generated accurately',
              'No data stored without user opt-in'
            ],
            implementationPlan: [
              'Phase 1: Engagement engine (face/audio tracking)',
              'Phase 2: Instructor dashboard + real-time scores',
              'Phase 3: Alert & nudge system',
              'Phase 4: Post-class reports',
              'Phase 5: Privacy + integration testing'
            ]
          },
          'teacher-productivity-platform': {
            id: 'teacher-productivity-platform',
            link: "https://drive.google.com/file/d/1saOtpHJeZUnz22oFSTbWjyfyAqYNlr2B/view?usp=sharing",
            title: 'Teacher Productivity Platform',
            description: 'A digital workspace to help teachers plan lessons, track student progress, and manage classroom tasks efficiently.',
            objective: 'To boost teacher productivity by automating routine academic and administrative tasks.',
            stakeholders: [
              'Teachers',
              'School Administrators',
              'Students',
              'Parents'
            ],
            functionalRequirements: [
              'Lesson planner with templates and scheduling',
              'Student performance tracking and grading tools',
              'Automated attendance and report generation',
              'Assignment distribution and feedback system',
              'Calendar with reminders for classes and events',
              'Dashboard with teaching insights and productivity metrics'
            ],
            nonFunctionalRequirements: [
              'Responsive and mobile-friendly design',
              'Secure login and data privacy',
              'Fast loading (<2s response time)',
              'Cloud-based storage and sync',
              'Scalable for schools with 50+ teachers',
              'Easy-to-use UI for non-technical users'
            ],
            acceptanceCriteria: [
              'Teachers can create and schedule lesson plans',
              'System tracks and reports student performance',
              'Assignments can be distributed and graded digitally',
              'Attendance can be marked and reports generated',
              'All tools accessible via a single dashboard',
              'Platform works across devices with minimal setup'
            ],
            implementationPlan: [
              'Phase 1: Lesson planning + calendar',
              'Phase 2: Attendance + grading system',
              'Phase 3: Assignment + feedback tools',
              'Phase 4: Dashboard + analytics',
              'Phase 5: Testing, deployment, and training'
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














  'smart-cities': {
    name: 'Smart Cities',
    icon: '🏙️',
    color: 'from-gray-800 to-black',
    glow: 'shadow-gray-700/30',
    problems: {
      "air-quality-noise-monitoring-app": {
        "id": "air-quality-noise-monitoring-app",
        "link": "https://drive.google.com/file/d/1wVvWl71CZKlySrYXR4rw9bjWELKwV2XG/view?usp=sharing", // Replace with actual PDF link
        "title": "Air Quality and Noise Monitoring App",
        "description": "A mobile application that collects, processes, and visualizes real-time and historical data on air quality and noise levels in urban environments. It empowers citizens with localized environmental insights to improve decision-making, raise public awareness, and support urban planning initiatives.",
        "objective": [
          "To collect and display real-time air quality and noise level data.",
          "To provide localized, location-specific environmental information.",
          "To offer historical analysis for trends and behavioral patterns in pollution.",
          "To raise awareness of health risks and environmental concerns among the public.",
          "To support municipalities in identifying environmental hotspots and planning interventions."
        ],
        "stakeholders": [
          "Organizers – Manage the hackathon and ensure smooth execution of the event.",
          "Participants – Develop and present functional versions of the application.",
          "Environmental Agencies/Experts – Ensure accuracy and compliance with pollution standards.",
          "Urban Planning Departments – Use data insights for policy planning and interventions.",
          "Technical Mentors – Guide development on sensors, APIs, UX, and visualization.",
          "Judges – Evaluate based on innovation, data use, and public health impact.",
          "End Users – Residents, commuters, health-conscious individuals, and general citizens.",
          "Sponsors – Fund tools and rewards, and benefit from branding and outreach."
        ],
        "functionalRequirements": [
          "Data Acquisition & Integration: Connect with APIs for air and noise quality from government or third-party sources; store data for historical analysis.",
          "Data Processing & Analysis: Convert raw values into AQI, decibel levels; highlight high-pollution/noise areas and trends.",
          "Visualization & Reporting: Map-based real-time display with overlays; historical trends shown via charts; optional alerts for threshold breaches.",
          "User Interface & Experience: Intuitive mobile interface, location search/GPS-based view, educational popups, and user feedback reporting."
        ],
        "nonFunctionalRequirements": [
          "Performance: Less than 10s latency for live updates; under 5s for historical data charts.",
          "Accuracy: Reflects official data from verified APIs.",
          "Usability: Simple, intuitive, and WCAG-compliant UI.",
          "Security: Encrypted handling of user preferences, locations, and API data.",
          "Scalability: Supports multiple data sources and concurrent users.",
          "Responsiveness: Mobile-first experience, compatible with iOS/Android.",
          "Compliance: Adheres to privacy laws (GDPR/CCPA) and environmental data protocols."
        ],
        "acceptanceCriteria": [
          "Data Integration Verification: Successfully fetches air quality data from at least one live or simulated API.",
          "Real-time Display: Accurate current AQI/noise shown on a dynamic map.",
          "Historical Data Visualization: Generates clear trend charts for time ranges like day/week/month.",
          "Intuitive User Interface: Easy to navigate; displays personalized local info.",
          "Demonstration Readiness: Fully operational prototype with real-time data, working UI, and educational value.",
          "Security Protocol Adherence: Secure handling of sensitive or location data; no breaches in API handling or user storage."
        ]
      },

      "citizen-participation-feedback-platform": {
        "id": "citizen-participation-feedback-platform",
        "link": "https://drive.google.com/file/d/1jORTp_hcf3KK5UlQ9XcZ-iFaX1ybT_5r/view?usp=sharing", // Replace with actual PDF link
        "title": "Citizen Participation and Feedback Platform",
        "description": "A centralized, interactive digital platform that empowers citizens to submit feedback, engage in public consultations, participate in moderated community discussions, and stay informed about local government initiatives. The goal is to enhance civic engagement, transparency, and community governance through digital participation.",
        "objective": [
          "Facilitate Feedback Submission: Provide a simple mechanism for citizens to give feedback on policies and local issues.",
          "Enable Public Consultation: Allow participation in structured public consultations and surveys.",
          "Promote Deliberative Engagement: Offer a space for moderated discussions and diverse citizen perspectives.",
          "Increase Transparency: Ensure public visibility into received feedback, outcomes, and local decisions.",
          "Strengthen Community Governance: Empower citizens to contribute to local area development and improvement."
        ],
        "stakeholders": [
          "Organizers – Manage planning and impartial execution of the hackathon event.",
          "Participants – Teams developing and presenting the platform during the event.",
          "Local Government Departments – Offer insight into policy cycles, feedback needs, and communication strategies.",
          "Community Advocacy Groups – Advise on citizen engagement best practices and participation challenges.",
          "Technical Mentors – Provide guidance on web architecture, UX, data handling, and security.",
          "Judges – Evaluate based on innovation, usability, civic impact, and technical quality.",
          "End Users – Residents, community groups, and local businesses engaging with local governance.",
          "Sponsors – Provide funds, tools, or prizes and benefit from branding or hiring opportunities."
        ],
        "functionalRequirements": [
          "Feedback & Idea Submission: Enable users to submit general or topic-specific feedback, attach media, and categorize inputs.",
          "Public Consultations & Surveys: Host official consultations/surveys with response forms, timelines, and background info.",
          "Discussion & Engagement: Offer a discussion board for moderated topics, with commenting and voting systems.",
          "Transparency & Reporting: Show feedback statuses, publish consultation summaries, and provide official responses.",
          "User Management & Notifications: Handle registration, authentication, user dashboards, and notification subscriptions."
        ],
        "nonFunctionalRequirements": [
          "Performance: Process feedback within 3 seconds; load discussions/consultations in under 5 seconds.",
          "Accuracy: Ensure all displayed information reflects official and verified communications.",
          "Usability: Intuitive interface meeting WCAG 2.1 AA accessibility standards.",
          "Security: Encrypt and securely store all user data and communications with proper moderation tools.",
          "Scalability: Support large user volumes and active participation during demos and beyond.",
          "Responsiveness: Provide full functionality across desktop, tablet, and mobile devices.",
          "Compliance: Adhere to data privacy laws like GDPR/CCPA and government digital standards."
        ],
        "acceptanceCriteria": [
          "Feedback Submission Functionality: Registered users can submit at least one type of feedback with text or attachments.",
          "Consultation Response Capability: Users can respond to a public consultation or survey simulation.",
          "Discussion Forum Basic Functionality: Users can view and post comments in a forum/discussion board.",
          "Transparency Display: Feedback statuses or consultation summaries are visible on the platform.",
          "Intuitive User Interface: Platform is easy to navigate for submitting feedback and engaging with the community.",
          "Demonstration Readiness: Platform is operational and demonstrates feedback, consultation, and discussion features.",
          "Security Protocol Adherence: All data is securely managed, with moderation and privacy protocols in place."
        ]
      },

      "civic-engagement-issue-reporting-app": {
  "id": "civic-engagement-issue-reporting-app",
  "link": "https://drive.google.com/file/d/1IwI_6EQmbezgAgqCtHEghIn4NpWU9Lwo/view?usp=sharing", // Replace with actual PDF link
  "title": "Civic Engagement and Issue Reporting App",
  "description": "A centralized, mobile-first platform enabling citizens to report non-emergency local issues, track their resolution, and engage in community discussions and initiatives. The app aims to strengthen civic participation, improve municipal responsiveness, and increase transparency in local governance.",
  "objective": [
    "Facilitate Issue Reporting: Provide a straightforward mechanism for citizens to report non-emergency local problems.",
    "Enhance Civic Participation: Enable users to engage in community discussions, polls, and volunteer opportunities.",
    "Improve Municipal Responsiveness: Allow local authorities to receive, manage, and respond to issues more effectively.",
    "Increase Transparency: Display the status and resolution progress of reported issues and city-led initiatives.",
    "Foster Community Connection: Open direct and secure communication channels between residents and local government."
  ],
  "stakeholders": [
    "Organizers – Plan and ensure impartial execution of the hackathon.",
    "Participants – Develop and demonstrate functional versions of the application.",
    "Local Government Representatives – Provide workflow insights and departmental feedback needs.",
    "Community Leaders/Activists – Guide on civic engagement practices and community priorities.",
    "Technical Mentors – Support mobile development, geospatial data use, and backend integration.",
    "Judges – Evaluate solutions on innovation, usability, impact, and technical robustness.",
    "End Users – Residents, local businesses, and community groups participating in civic reporting.",
    "Sponsors – Fund development, tools, or prizes and gain exposure or recruitment opportunities."
  ],
  "functionalRequirements": [
    "Issue Reporting & Submission: Allow citizens to report issues with photos/videos, GPS tagging, categorization, and optional anonymity.",
    "Report Tracking & Management: Provide dashboards to track statuses, update progress, notify users, and display reports on a map.",
    "Civic Engagement Features: Include sections for news, announcements, discussions, and optionally polls and volunteer listings.",
    "User Profile & Communication: Support secure registration, profile management, messaging with city departments, and subscription preferences."
  ],
  "nonFunctionalRequirements": [
    "Performance: Process report submissions in ≤3 seconds; load maps and data in ≤5 seconds.",
    "Accuracy: Ensure GPS tagging precision within 5 meters and accurate issue categorization.",
    "Usability: Offer an intuitive, accessible UI compliant with WCAG 2.1 AA.",
    "Security: Secure all user data and communication using encryption and strong authentication protocols.",
    "Scalability: Handle high user traffic and reporting volume for both demos and real-world usage.",
    "Responsiveness: Ensure optimal functionality on iOS, Android, and potentially web browsers.",
    "Compliance: Fully adhere to GDPR, CCPA, and government digital service standards."
  ],
  "acceptanceCriteria": [
    "Issue Reporting Functionality: Users must be able to report at least two types of issues with photos and location data.",
    "Report Tracking Display: System must show real-time statuses and history of user-submitted reports.",
    "Civic Information Access: The app must present a section for city news, events, or announcements.",
    "Intuitive User Interface: Users can easily navigate, report issues, and track updates without assistance.",
    "Demonstration Readiness: A working prototype must be available for judges to test reporting and tracking features.",
    "Security Protocol Adherence: Data handling must be secure, with visible privacy and moderation mechanisms in place."
  ]
},

"energy-consumption-dashboard": {
  "id": "energy-consumption-dashboard",
  "link": "https://drive.google.com/file/d/1I6DTaVd5MRawm-uXaBg93GdwD-0Cc5-U/view?usp=sharing", // Replace with actual PDF link
  "title": "Energy Consumption Dashboard for Smart Homes",
  "description": "An intelligent dashboard that collects, analyzes, and visualizes energy usage from smart home devices. It empowers homeowners with insights to monitor energy consumption, reduce utility costs, and promote sustainability.",
  "objective": [
    "Monitor Energy Consumption: Accurately track and display usage across various smart home devices and the entire household.",
    "Provide Actionable Insights: Analyze consumption data to uncover trends, anomalies, and areas for potential energy savings.",
    "Optimize Energy Usage: Recommend or automate strategies to eliminate unnecessary energy expenditure.",
    "Enhance User Awareness: Educate users about their energy footprint and promote sustainable living habits.",
    "Integrate with Smart Home Ecosystems: Ensure compatibility with common smart devices and platforms for seamless data integration."
  ],
  "stakeholders": [
    "Organizers – Plan, manage, and ensure fair execution of the event.",
    "Participants – Teams building and showcasing the dashboard solution.",
    "Energy Efficiency Mentors – Offer guidance on sustainability and interpreting energy usage data.",
    "Technical Mentors – Provide expertise in IoT connectivity, data integration, and dashboard development.",
    "Judges – Evaluate the solutions based on usability, innovation, and impact on energy savings.",
    "End Users – Homeowners or property managers aiming to monitor and optimize household energy usage.",
    "Sponsors – Support the event financially and may offer branding or recruitment benefits."
  ],
  "functionalRequirements": [
    "Data Collection & Integration: Integrate with smart meters and smart devices to gather real-time and historical energy data.",
    "Data Analysis & Insights: Analyze energy usage to detect peaks, anomalies, and optionally predict future consumption.",
    "Visualization & Reporting: Display energy usage by time period; generate customizable reports and alerts.",
    "User Interface & Experience: Provide an intuitive web/mobile dashboard to categorize devices, set budgets, and receive recommendations."
  ],
  "nonFunctionalRequirements": [
    "Performance: Display real-time data with <5s latency and generate reports within 10s.",
    "Accuracy: Ensure consumption readings reflect >98% fidelity.",
    "Usability: Interface must be simple and navigable by non-technical homeowners.",
    "Security: Encrypt all data and follow best privacy practices.",
    "Scalability: Support multiple smart devices and possibly multiple homes during testing.",
    "Responsiveness: Ensure optimal UX across desktop, tablet, and mobile devices.",
    "Compliance: Adhere to privacy regulations such as GDPR and CCPA."
  ],
  "acceptanceCriteria": [
    "Data Integration Functionality: Successfully collect energy data from at least one simulated smart meter or device.",
    "Dashboard Display: Accurately present real-time and historical energy data on a dynamic interface.",
    "Insight Generation: Identify at least one energy consumption trend or anomaly.",
    "Intuitive User Interface: Users can view data across different time frames and navigate the dashboard easily.",
    "Demonstration Readiness: A fully working demo available for testing, showcasing data collection, analysis, and visualization.",
    "Security Adherence: Handle all user data securely and demonstrate privacy compliance."
  ]
},

"intelligent-parking-finder": {
  "id": "intelligent-parking-finder",
  "link": "https://drive.google.com/file/d/your-pdf-id/view?usp=sharing", // Replace with actual PDF link
  "title": "Intelligent Parking Finder",
  "description": "An AI-powered parking solution that identifies real-time availability of parking spots using computer vision and data integration. It minimizes search time, enhances urban traffic flow, and supports smart city goals with accurate navigation and intelligent parking recommendations.",
  "objective": [
    "Automate Parking Space Identification: Implement AI models for real-time detection of available parking spots.",
    "Minimize Search Effort: Reduce time and fuel spent by users in locating parking.",
    "Ensure Real-time Data Accuracy: Provide up-to-date, precise information on parking availability.",
    "Support Diverse Parking Environments: Adapt to street parking, garages, and open lots.",
    "Advance Smart City Integration: Demonstrate AI’s role in urban mobility and infrastructure efficiency."
  ],
  "stakeholders": [
    "Organizers – Oversee the planning and fair execution of the hackathon.",
    "Participants – Teams building the Intelligent Parking Finder solution.",
    "Urban Planning Mentors – Guide teams to address real urban parking issues aligned with smart city goals.",
    "Technical Mentors – Provide support on AI, data integration, and system architecture.",
    "Judges – Evaluate solutions based on accuracy, usability, innovation, and practical impact.",
    "End Users – Drivers and commuters looking for efficient parking solutions.",
    "Sponsors – Offer tools, prizes, or funding, with optional branding or recruitment benefits."
  ],
  "functionalRequirements": [
    "Data Ingestion & Processing: Integrate with real-time sensors, GPS, historical data, and camera feeds.",
    "Core AI Functionality: Use computer vision and predictive analytics to identify and suggest available parking spots.",
    "Output & User Feedback: Display real-time availability on a map and guide users to optimal parking.",
    "User Interface & Experience: Provide a searchable, intuitive, map-based interface with user feedback options."
  ],
  "nonFunctionalRequirements": [
    "Performance: Deliver updates within 5 seconds of data changes.",
    "Accuracy: Achieve >90% precision in identifying available parking spaces.",
    "Usability: Design a simple, accessible UI for all driver profiles.",
    "Security: Anonymize user data and avoid permanent storage of sensitive information.",
    "Scalability: Handle multiple users and parking zones simultaneously.",
    "Responsiveness: Work seamlessly across mobile, in-car, and desktop interfaces.",
    "Compliance: Adhere to privacy regulations for handling live location data."
  ],
  "acceptanceCriteria": [
    "Data Integration Functionality: Demonstrate integration with at least one real-time data source (e.g., sensor or camera).",
    "AI Model Efficacy: Successfully identify and display available spots on a dynamic map interface.",
    "Navigation Provision: Provide turn-by-turn guidance to selected parking locations.",
    "Intuitive User Interface: Users can easily search destinations, view availability, and get directions.",
    "Demonstration Readiness: A working prototype available for live testing in a simulated or real scenario.",
    "Security Adherence: Prove secure handling of all user and location data in the demo."
  ]
},
"public-transport-optimisation": {
  "id": "public-transport-optimisation",
  "link": "https://drive.google.com/file/d/1G75spAzr-Em82WaE0VZv4Pgvva4J3Ui8/view?usp=drive_link", // Replace with actual PDF link
  "title": "Public Transport Optimisation",
  "description": "An AI-enabled system designed to optimize public transport routes, schedules, and vehicle deployment using real-time data and predictive analytics. It aims to reduce wait times, improve passenger experience, and support urban mobility through smart city integration.",
  "objective": [
    "Optimize Routes & Schedules: Dynamically adjust based on real-time traffic, ridership, and conditions.",
    "Reduce Passenger Wait Times: Improve scheduling and route efficiency to minimize delays.",
    "Improve Resource Utilization: Ensure optimal allocation of vehicles and personnel.",
    "Enhance Passenger Experience: Provide real-time vehicle updates and delay notifications.",
    "Contribute to Urban Mobility: Strengthen smart city infrastructure by improving public transport systems."
  ],
  "stakeholders": [
    "Organizers – Oversee event planning and ensure transparent evaluation.",
    "Participants – Teams building and presenting the optimization solution.",
    "Urban Planning & Transport Mentors – Provide domain knowledge on transit systems and regulations.",
    "Technical Mentors – Support AI, ML, data integration, and system development.",
    "Judges – Evaluate based on innovation, accuracy, usability, and societal impact.",
    "End Users – Public transport operators and commuters benefiting from the optimized system.",
    "Sponsors – Contribute funding, resources, or incentives, with branding and recruitment opportunities."
  ],
  "functionalRequirements": [
    "Data Acquisition & Integration: Connect with GPS trackers, traffic sensors, passenger counters, and weather/event feeds.",
    "Core AI & Optimization Functionality: Predict demand, optimize routes/schedules, and recommend vehicle types.",
    "Output & Information Dissemination: Display optimized schedules, live vehicle tracking, and generate analytics reports.",
    "User Interface & Experience: Offer dashboards for operators and real-time tracking apps for passengers."
  ],
  "nonFunctionalRequirements": [
    "Performance: Complete data processing and optimizations within 15 seconds; updates visible to users within 5 seconds.",
    "Accuracy: Achieve >85% accuracy in demand prediction and measurable efficiency improvements.",
    "Usability: Ensure both operator and passenger interfaces are intuitive and accessible.",
    "Security: Encrypt all operational and passenger data; prevent unauthorized access.",
    "Scalability: Support large-scale operations with multiple vehicles, routes, and user types.",
    "Responsiveness: Deliver smooth experiences on desktop, mobile, and in-vehicle systems.",
    "Compliance: Meet privacy laws and public transport operational standards."
  ],
  "acceptanceCriteria": [
    "Data Integration Verification: Successfully ingest at least one simulated real-time data feed (e.g., GPS or sensors).",
    "Optimization Efficacy: Show route/schedule optimization in response to simulated real-world inputs.",
    "Real-time Information Display: Deliver functional interfaces showing live tracking and arrival predictions.",
    "User Interface Intuition: Allow smooth interaction for operators and passengers accessing key features.",
    "Demonstration Readiness: Present a working prototype ready for live evaluation with mock or real data.",
    "Security Adherence: Ensure secure handling of operational and user data, respecting privacy policies."
  ]
},
"unified-city-service-app": {
  "id": "unified-city-service-app",
  "link": "https://drive.google.com/file/d/1H1INHybk_jImNg_m9MyxFBCMM0_y44Ic/view?usp=drive_link", // Replace with actual PDF link
  "title": "Unified City Service App",
  "description": "A centralized digital platform that consolidates municipal services into one user-friendly application. It streamlines service access, enhances communication between citizens and city departments, and improves the efficiency of urban governance.",
  "objective": [
    "Simplify Service Access: Offer a single platform to access multiple municipal services.",
    "Enhance Citizen Engagement: Improve dialogue and interaction with city departments.",
    "Streamline Request Management: Facilitate the submission and tracking of public service requests.",
    "Increase Operational Efficiency: Digitize workflows to reduce administrative overhead.",
    "Foster Community Connection: Provide relevant local information and civic engagement tools."
  ],
  "stakeholders": [
    "Organizers – Coordinate hackathon logistics and ensure fair competition.",
    "Participants – Build and showcase the Unified City Service App solution.",
    "City Government Representatives – Share insights into workflows and urban policies.",
    "Service Department Heads – Advise on departmental needs and technical integration.",
    "Technical Mentors – Assist with architecture, UX, and security aspects.",
    "Judges – Evaluate submissions for innovation, utility, and governance impact.",
    "End Users – Residents, businesses, and visitors accessing city services.",
    "Sponsors – Support with resources, branding, and potential recruitment."
  ],
  "functionalRequirements": [
    "Service Discovery & Access: Offer a categorized service directory with a search function and request initiation.",
    "Request Management: Allow media-supported request submissions with real-time tracking and staff communication.",
    "Information & Communication: Display city news, alerts, FAQs, and enable secure messaging between users and departments.",
    "Personalization & User Profile: Support user accounts, interaction history, and customizable notification preferences."
  ],
  "nonFunctionalRequirements": [
    "Performance: Submit requests within 3 seconds and retrieve info within 2 seconds.",
    "Accuracy: Ensure up-to-date data and correct request routing to departments.",
    "Usability: Provide a highly intuitive UI compliant with accessibility standards.",
    "Security: Encrypt all data, enforce secure storage and strong user authentication.",
    "Scalability: Accommodate growing users and service categories effectively.",
    "Responsiveness: Optimize for desktop, tablet, and mobile devices.",
    "Compliance: Adhere to data privacy laws and municipal digital standards."
  ],
  "acceptanceCriteria": [
    "Service Submission Functionality: Demonstrate at least two types of service request submissions.",
    "Request Tracking Display: Accurately show the status of submitted requests.",
    "Information Access: Provide functional access to city news or FAQs.",
    "Intuitive User Interface: Ensure seamless navigation and service discovery.",
    "Demonstration Readiness: Present a live-ready prototype covering all core features.",
    "Security Protocol Adherence: Securely handle user and request data with privacy safeguards."
  ]
},
"urban-flood-monitoring": {
  "id": "urban-flood-monitoring",
  "link": "https://drive.google.com/file/d/115sidDwTQoMU5AC0ocvp_HnvGN774J0O/view?usp=sharing", // Replace with actual PDF link
  "title": "Urban Flood Monitoring and Early Warning System",
  "description": "An intelligent system designed to monitor urban flood risks using real-time sensor data and predictive analytics. It aims to provide timely alerts, support disaster management, and protect public safety in flood-prone urban environments.",
  "objective": [
    "Real-time Flood Monitoring: Continuously track environmental conditions including rainfall and water levels.",
    "Accurate Flood Prediction: Use AI/ML models to forecast potential flood scenarios.",
    "Timely Early Warning: Deliver localized alerts to communities and emergency responders.",
    "Enhance Public Safety: Provide actionable information to citizens during flood events.",
    "Support Disaster Management: Enable authorities to proactively plan and coordinate emergency response."
  ],
  "stakeholders": [
    "Organizers – Manage event logistics and ensure fair evaluation processes.",
    "Participants – Develop and present flood monitoring and alert solutions.",
    "Municipal Authorities/Emergency Services – Offer insights into protocols and use of alerts.",
    "Meteorological/Hydrological Experts – Advise on data interpretation and modeling accuracy.",
    "Technical Mentors – Assist with sensor integration, analytics, and geospatial systems.",
    "Judges – Evaluate based on innovation, prediction accuracy, and safety impact.",
    "End Users – Citizens, businesses in flood-prone zones, and emergency responders.",
    "Sponsors – Provide resources, tools, and promotional opportunities."
  ],
  "functionalRequirements": [
    "Data Acquisition & Integration: Integrate real-time sensor inputs (e.g., water levels, rainfall) and geospatial data.",
    "Core AI & Prediction Functionality: Use ML to analyze trends, detect anomalies, and predict flood severity.",
    "Alert Generation & Dissemination: Issue tiered alerts with localized info through mobile, dashboard, and APIs.",
    "Visualization & Reporting: Show real-time and historical data via a map-based dashboard with detailed reports."
  ],
  "nonFunctionalRequirements": [
    "Performance: Assess risk in under 10 seconds; send alerts within 5 seconds of threshold detection.",
    "Accuracy: Maintain >85% accuracy in flood prediction; water level precision within 5 cm.",
    "Reliability: Operate continuously with minimal downtime during weather events.",
    "Usability: Provide clear, intuitive interfaces for both emergency staff and citizens.",
    "Security: Secure sensor data, prediction models, and communication channels.",
    "Scalability: Handle expanding sensor networks and user loads during deployment.",
    "Responsiveness: Ensure smooth operation on desktop and mobile devices.",
    "Compliance: Meet public safety regulations and environmental data standards."
  ],
  "acceptanceCriteria": [
    "Data Integration Verification: Connect to at least one simulated water level sensor and rain gauge.",
    "Prediction Efficacy: Demonstrate forecast capability for a simulated flood based on incoming data.",
    "Alert Generation & Delivery: Trigger and display a flood alert when thresholds are crossed.",
    "Visualization Functionality: Accurately reflect sensor data and risk zones on an interactive map.",
    "Demonstration Readiness: Show a working prototype with data collection, prediction, and alerts.",
    "Security Protocol Adherence: Ensure secure and tamper-proof handling of all system data."
  ]
},
"energy-consumption-dashboard": {
  "id": "energy-consumption-dashboard",
  "link": "https://drive.google.com/file/d/1hQvDcYhdIgWS8Oowd6f6S7bp95WtWUQ6/view?usp=sharing", // Replace with actual PDF link
  "title": "Energy Consumption Dashboard for Smart Homes",
  "description": "An intelligent dashboard that monitors and analyzes energy usage from smart devices within homes. It provides real-time and historical insights, detects inefficiencies, and empowers users to optimize consumption and reduce their environmental impact.",
  "objective": [
    "Precise Energy Monitoring: Accurately track energy usage at device and household levels.",
    "Actionable Insight Generation: Analyze data for trends, anomalies, and conservation opportunities.",
    "Consumption Optimization: Recommend actions or automate controls to reduce excess energy use.",
    "Enhanced User Awareness: Promote sustainable behavior through increased energy transparency.",
    "Seamless Smart Home Integration: Ensure compatibility with common smart home ecosystems."
  ],
  "stakeholders": [
    "Organizers – Plan and manage the hackathon and its evaluation.",
    "Participants – Build and present the energy monitoring dashboard.",
    "Energy Efficiency Mentors – Guide on interpreting energy data and conservation techniques.",
    "Technical Mentors – Assist with IoT integration, data processing, and dashboard development.",
    "Judges – Score solutions based on innovation, accuracy, and practical energy-saving impact.",
    "End Users – Homeowners and property managers who will use the system.",
    "Sponsors – Provide financial and technical resources or rewards."
  ],
  "functionalRequirements": [
    "Data Acquisition & Integration: Connect to smart meters and devices to collect real-time and historical energy data.",
    "Data Analysis & Intelligence: Analyze consumption patterns, detect anomalies, and optionally forecast usage.",
    "Visualization & Reporting: Present energy trends on a responsive dashboard with reports and threshold alerts.",
    "User Interface & Interaction: Provide a user-friendly app for managing budgets, devices, and personalized recommendations."
  ],
  "nonFunctionalRequirements": [
    "Performance: Update live energy data with under 5s latency and load reports in under 10s.",
    "Accuracy: Ensure 98% fidelity in measured consumption and analysis.",
    "Usability: Design an intuitive interface for non-technical homeowners.",
    "Security: Encrypt data and protect all user and device information.",
    "Scalability: Monitor many devices and support multiple household instances.",
    "Responsiveness: Work seamlessly across desktop, tablet, and mobile platforms.",
    "Compliance: Follow GDPR, CCPA, and other applicable privacy laws."
  ],
  "acceptanceCriteria": [
    "Data Integration Verification: Demonstrate integration with at least one simulated smart device or meter.",
    "Dashboard Functionality: Show real-time and historical energy data on a live dashboard.",
    "Insight Generation Capability: Highlight at least one pattern or anomaly in energy usage.",
    "User Interface Intuition: Allow intuitive navigation, filtering, and interaction.",
    "Demonstration Readiness: Provide a working prototype with full data flow and reporting.",
    "Security Protocol Adherence: Securely handle all collected data and enforce privacy protocols."
  ]
},
"waste-segregation-smart-bin": {
  "id": "waste-segregation-smart-bin",
  "link": "https://drive.google.com/file/d/1ItiB_P5Zt8z0xxvQpp8Nk3rJtGldZn-n/view?usp=sharing", // Replace with actual PDF link
  "title": "Waste Segregation and Smart Bin Monitoring",
  "description": "An AI-powered system designed to automate waste segregation and provide real-time monitoring of waste bins using computer vision and sensor data. It aims to optimize collection schedules, improve recycling, and enhance smart city infrastructure.",
  "objective": [
    "Automate Waste Segregation: Implement accurate AI-based waste classification.",
    "Enable Real-time Bin Monitoring: Track bin fill levels and statuses continuously.",
    "Optimize Waste Collection: Create efficient collection routes based on real-time bin data.",
    "Promote Environmental Sustainability: Enhance segregation to reduce landfill use and increase recycling.",
    "Enhance Urban Infrastructure: Support smart city initiatives through intelligent waste management."
  ],
  "stakeholders": [
    "Organizers – Oversee hackathon execution and maintain fairness.",
    "Participants – Build and present the waste monitoring system.",
    "Environmental Mentors – Guide best practices in sustainability and waste management.",
    "Technical Mentors – Assist with AI, computer vision, and sensor technologies.",
    "Judges – Evaluate solutions based on innovation, accuracy, usability, and environmental value.",
    "End Users – Waste departments, collection companies, and potentially citizens.",
    "Sponsors – Provide funding, tools, or recruitment and branding opportunities."
  ],
  "functionalRequirements": [
    "Data Ingestion & Processing: Integrate optical, ultrasonic, and camera data for waste type and fill level detection.",
    "Core AI Functionality: Use computer vision and ML to classify waste types, predict fill levels, and detect anomalies.",
    "Output & User Feedback: Display bin statuses and generate alerts via a real-time dashboard.",
    "User Interface & Experience: Provide an intuitive interface for monitoring, reporting, and optionally for citizen engagement."
  ],
  "nonFunctionalRequirements": [
    "Performance: Deliver status updates within 10s; AI decisions in <2s.",
    "Accuracy: Waste identification >85%, fill level predictions >90%.",
    "Usability: Ensure the dashboard is accessible for operators and optionally citizens.",
    "Security: Secure sensitive data like bin locations and collection patterns; anonymize any user data.",
    "Scalability: Monitor many smart bins and handle concurrent users smoothly.",
    "Responsiveness: Support desktop, tablet, and mobile access.",
    "Compliance: Meet environmental and data privacy regulations."
  ],
  "acceptanceCriteria": [
    "Sensor/Data Integration Functionality: Demonstrate real/simulated sensor input integration.",
    "AI Model Efficacy: Accurately identify at least two types of waste or predict fill levels correctly.",
    "Real-time Monitoring Display: Show working dashboard with live bin updates.",
    "Intuitive User Interface: Allow smooth interaction, alert viewing, and reporting.",
    "Demonstration Readiness: Provide a working prototype in a test/demo environment.",
    "Security Adherence: Demonstrate secure data handling and privacy compliance."
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