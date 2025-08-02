// app/sponsor/page.js
"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

const BecomeSponsorPage = () => {
  const sponsorshipTiers = [
    {
      name: "Platinum Partner",
      price: "₹5,000",
      benefits: [
        "Logo placement on all marketing materials",
        "Branding on event Posters",
        "2 complimentary Teams",
        "Social media mentions",
        "Recognition in opening/closing ceremony",
        "Giving Reward for top 3 winners for Brands Products if Sponsor provides",
        "Add Links of your Social Media",
        "Video shoutout of 1 Min in Announcement Video",
        "Keynote speaking opportunity",
        "Product demo session slot"
      ],
      color: "from-gray-300 to-gray-500"
    },
    {
      name: "Gold Sponsor",
      price: "₹2,500",
      benefits: [
        "Logo on website",
        "Branding on event Posters",
        "1 complimentary Team",
        "Social media mentions",
        "Recognition in opening/closing ceremony",
        "Giving Reward for top 3 winners for Brands Products if Sponsor provides",
        "Add Links of your Social Media",
        "Video shoutout of 30 Second in Announcement Video"
      ],
      color: "from-yellow-300 to-yellow-500"
    },
    {
      name: "Silver Sponsor",
      price: "₹1,000",
      benefits: [
        "Logo on website",
        "Social media mentions",
        "Branding on event Posters",
        "Add Links of your Social Media"
      ],
      color: "from-gray-200 to-gray-400"
    },
    {
      name: "Bronze Sponsor",
      price: "₹500",
      benefits: [
        "Logo on website",
        "Social media mention"
      ],
      color: "from-amber-700 to-amber-900"
    }
  ];

  return (
    <div>
      
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Header />
{/* Animated Background Elements */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <div className="absolute top-0 left-1/4 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
  <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-0 left-1/2 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              BECOME A SPONSOR
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Partner with India&apos;s premier hackathon and gain access to top tech talent while supporting innovation
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {sponsorshipTiers.map((tier, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${tier.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full flex flex-col">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{tier.name}</h2>
                  <div className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>
                    {tier.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={'/choose-plan'}>
                <button className={`w-full py-3 px-4 bg-gradient-to-r ${tier.color} text-gray-900 font-bold rounded-lg hover:opacity-90 transition-opacity duration-300`}>
                  Choose Plan
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Sponsor Section */}
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl border border-white/10 p-8 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Sponsor ByteWar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-700/30 border border-white/5">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Access Top Talent</h3>
              <p className="text-gray-400">Connect with India&apos;s brightest programming minds and potential future employees</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-700/30 border border-white/5">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Visibility</h3>
              <p className="text-gray-400">Massive exposure through our marketing channels and event presence</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-700/30 border border-white/5">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation Insights</h3>
              <p className="text-gray-400">See cutting-edge solutions and identify emerging technology trends</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Contact our sponsorship team to discuss custom packages and opportunities
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:navokta@gmail.com" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            
            <a 
              href="tel:+918307233996" 
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-full shadow-lg hover:from-gray-800 hover:to-black transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
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
      <Footer/>
    </div>
  );
};

export default BecomeSponsorPage;