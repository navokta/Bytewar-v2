// Updated Terms & Conditions Page with Improved Code of Conduct and Mobile Scroll Support
"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'eligibility',
      title: 'Participation Eligibility',
      content: [
        'ByteWar is open to all working professionals, coders, software engineers, school-going and college-going students across India.',
        'Participants must be at least 16 years old or have parental/guardian consent if younger.',
        'Employees and immediate family members of ByteWar organizers and sponsors are not eligible to participate.',
        'Participants may compete individually or form a team of up to 3 to 5 members.',
      ],
    },
    {
      id: 'registration',
      title: 'Registration and Team Formation',
      content: [
        'All participants must register through the official ByteWar platform before the registration deadline ends.',
        'Teams may consist of 3 to 5 members. Solo participants are allowed.',
        'Teams may be formed from the same or different schools, colleges, or organizations.',
        'Each team must designate a Team Leader during registration who will be the primary point of contact.',
        'No changes to team members or team names will be allowed after registration closes.',
        'Each participant may only be part of one team.',
        'All registrations are subject to review and approval by the ByteWar organizing team.',
        'ByteWar reserves the right to reject any registration that does not meet eligibility or ethical standards.',
        'Team changes after registration deadline will not be permitted.',
        'All team members must meet the eligibility criteria.',
        'False information during registration will lead to immediate disqualification.',
        'Registration fees are non-refundable.',
      ],
    },
    {
      id: 'conduct',
      title: 'Code of Conduct',
      content: [
        'All participants must adhere to the highest standards of professional behavior.',
        'Harassment, discrimination, or any form of inappropriate behavior will not be tolerated.',
        'Participants must respect intellectual property rights and not plagiarize others\' work.',
        'The organizers reserve the right to disqualify any participant violating the code of conduct.',
        'Be inclusive and supportive of all backgrounds.',
        'Collaborate with integrity and honesty.',
        'Follow all platform and event rules.',
      ],
    },
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div>
      <Header />
      
      {/* Main Container with Gradient Background */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <Head>
          <title>ByteWar - Terms and Conditions</title>
          <meta name="description" content="ByteWar Hackathon Terms and Conditions" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* Fixed Background Effects */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-soft-light filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-600 rounded-full mix-blend-soft-light filter blur-[90px] opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 opacity-5 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/binary-pattern.svg')] bg-[length:200px_200px] bg-center animate-pan"></div>
          </div>
        </div>

        {/* Scrollable Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                    Terms & Conditions
                  </span>
                </h1>
                <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  The rules that make ByteWar fair and exciting for everyone
                </p>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-6">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className={`bg-gray-800/50 backdrop-blur-sm border ${
                      activeSection === section.id
                        ? 'border-pink-500/50'
                        : 'border-white/10'
                    } rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                      activeSection === section.id ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                    }`}
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full px-6 py-5 text-left focus:outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center">
                          <span
                            className={`w-3 h-3 rounded-full mr-3 ${
                              activeSection === section.id ? 'bg-pink-500 animate-pulse' : 'bg-gray-500'
                            }`}
                          ></span>
                          {section.title}
                        </h3>
                        <svg
                          className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                            activeSection === section.id ? 'rotate-180 text-pink-400' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                        activeSection === section.id ? 'max-h-[500px] pb-6' : 'max-h-0'
                      }`}
                    >
                      <div className="pt-2 space-y-3">
                        {section.content.map((item, index) => (
                          <p
                            key={index}
                            className="text-gray-300 pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-pink-400 before:rounded-full"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Acceptance Section */}
              <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-white/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  By participating in ByteWar, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/"
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-all"
                  >
                    Back to Home
                  </Link>
                  <Link
                    href="/BannerPage"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-medium shadow-lg hover:shadow-pink-500/30 transition-all"
                  >
                    I Accept - Register Now
                  </Link>
                </div>
                <p className="mt-6 text-sm text-gray-400">
                  Questions? Contact us at{' '}
                  <a href="mailto:navokta@gmail.com" className="text-pink-400 hover:underline">
                    navokta@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(50px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 40px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes pan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
        .animate-pan {
          animation: pan 60s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Improve mobile scroll behavior */
        html,
        body,
        #__next {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y;
        }

        body, #__next {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}