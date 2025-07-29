'use client';

import React, { useState } from 'react';
import { Check, Shield, DollarSign, X, Menu } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChoosePlanPage = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'processing', 'success', 'failed'
  const [sponsorDetails, setSponsorDetails] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const sponsorshipTiers = [
    {
      id: 'platinum',
      name: "Platinum Partner",
      price: 5000,
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
      color: "from-gray-300 to-gray-500",
      popular: true
    },
    {
      id: 'gold',
      name: "Gold Sponsor",
      price: 2500,
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
      id: 'silver',
      name: "Silver Sponsor",
      price: 1000,
      benefits: [
        "Logo on website",
        "Social media mentions",
        "Branding on event Posters",
        "Add Links of your Social Media"
      ],
      color: "from-gray-200 to-gray-400"
    },
    {
      id: 'bronze',
      name: "Bronze Sponsor",
      price: 500,
      benefits: [
        "Logo on website",
        "Social media mention"
      ],
      color: "from-amber-700 to-amber-900"
    }
  ];

  const handleTierSelect = (tier) => {
    setSelectedTier(tier);
    setPaymentStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSponsorDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async () => {
    if (!selectedTier) return;

    // Validate form
    if (!sponsorDetails.name || !sponsorDetails.email || !sponsorDetails.company || !sponsorDetails.phone) {
      alert('Please fill all required fields');
      return;
    }

    setPaymentStatus('processing');

    // Simulate payment process for demo
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-4 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-8">
      {/* Simple Header */}
      <Header />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 lg:mb-6 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              CHOOSE YOUR SPONSORSHIP PLAN
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Select a sponsorship tier and complete your payment to become a ByteWar partner
          </p>
        </div>

        {paymentStatus === 'success' ? (
          // ✅ Success State
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 text-center max-w-2xl mx-auto">
            <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
              <Check className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Payment Successful!</h2>
            <p className="text-green-100 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
              Thank you for becoming a {selectedTier?.name} sponsor. We'll contact you shortly with next steps.
            </p>
            <a 
              href="/"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Back to Home
            </a>
          </div>
        ) : paymentStatus === 'failed' ? (
          // ❌ Failure State
          <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 text-center max-w-2xl mx-auto">
            <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
              <X className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Payment Failed</h2>
            <p className="text-red-100 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
              There was an issue processing your payment. Please try again.
            </p>
            <button 
              onClick={() => setPaymentStatus(null)}
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Try Again
            </button>
          </div>
        ) : paymentStatus === 'processing' ? (
          // ⏳ Processing State
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 text-center max-w-2xl mx-auto border border-white/10">
            <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
              <div className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border-3 sm:border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Processing Payment</h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
              Redirecting to secure payment gateway...
            </p>
          </div>
        ) : (
          // 💳 Plan Selection & Payment Form
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {/* Sponsorship Tiers */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {sponsorshipTiers.map((tier) => (
                  <div 
                    key={tier.id}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedTier?.id === tier.id 
                        ? 'ring-2 ring-purple-500 scale-[1.02] sm:scale-[1.02]' 
                        : 'hover:scale-[1.01] sm:hover:scale-[1.02]'
                    }`}
                    onClick={() => handleTierSelect(tier)}
                  >
                    {tier.popular && (
                      <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      </div>
                    )}
                    <div className={`absolute -inset-0.5 sm:-inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r ${tier.color} opacity-0 ${
                      selectedTier?.id === tier.id ? 'opacity-30' : 'group-hover:opacity-20'
                    } blur-md sm:blur-lg transition-opacity duration-300`}></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10 h-full">
                      <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">{tier.name}</h3>
                        {selectedTier?.id === tier.id && (
                          <div className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 rounded-full bg-purple-500 flex items-center justify-center">
                            <Check className="text-white text-xs" />
                          </div>
                        )}
                      </div>
                      <div className="mb-3 sm:mb-4 lg:mb-6">
                        <div className={`text-xl sm:text-2xl lg:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${tier.color} flex items-center`}>
                          <DollarSign className="inline w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-1" />₹{tier.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-3 sm:mb-4 lg:mb-6 flex-grow">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="text-green-500 mr-1.5 sm:mr-2 mt-0.5 sm:mt-1 flex-shrink-0 w-3 sm:w-4 h-3 sm:h-4" />
                            <span className="text-xs sm:text-sm lg:text-base text-gray-300 leading-tight sm:leading-normal">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            <div className="relative order-first lg:order-last">
              <div className="absolute -inset-0.5 sm:-inset-1 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-md sm:blur-lg transition-all duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 p-3 sm:p-4 lg:p-6 top-4">
                <div className="flex items-center gap-2 mb-3 sm:mb-4 lg:mb-6">
                  <Shield className="text-purple-400 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Sponsor Details</h2>
                </div>

                {selectedTier ? (
                  <div className="mb-3 sm:mb-4 lg:mb-6 p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gray-700/30 border border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm lg:text-base text-gray-300">Selected Plan:</span>
                      <span className="font-bold text-white text-xs sm:text-sm lg:text-base">{selectedTier.name}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1 sm:mt-2">
                      <span className="text-xs sm:text-sm lg:text-base text-gray-300">Amount:</span>
                      <span className="font-bold text-white text-xs sm:text-sm lg:text-base flex items-center">
                        <DollarSign className="inline w-3 sm:w-4 h-3 sm:h-4 mr-1" />₹{selectedTier.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-3 sm:mb-4 lg:mb-6 p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gray-700/30 border border-white/5 text-center">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400">Select a sponsorship plan to continue</p>
                  </div>
                )}

                <div className="space-y-2.5 sm:space-y-3 lg:space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={sponsorDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 bg-gray-700/50 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-xs sm:text-sm lg:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={sponsorDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 bg-gray-700/50 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-xs sm:text-sm lg:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={sponsorDetails.company}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 bg-gray-700/50 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-xs sm:text-sm lg:text-base"
                      placeholder="Your Company Pvt. Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={sponsorDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 bg-gray-700/50 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-xs sm:text-sm lg:text-base"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!selectedTier || paymentStatus === 'processing'}
                  className={`w-full mt-4 sm:mt-6 lg:mt-8 py-2.5 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedTier 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/30 transform hover:scale-[1.02]'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <DollarSign className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" /> Proceed to Payment
                </button>

                <div className="mt-3 sm:mt-4 lg:mt-6 text-center text-gray-500 text-xs sm:text-sm">
                  <p>Secured with Razorpay • All transactions are encrypted</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Simple Footer */}
            <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 footer-full-width">
              <Footer />
            </footer>

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
          33% { transform: translate(15px, -25px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @media (min-width: 640px) {
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        }
        
        /* Improved scroll behavior on mobile */
        @media (max-width: 1023px) {
          .sticky {
            position: relative;
          }
        }
        
        /* Enhanced touch targets for mobile */
        @media (max-width: 640px) {
          button, .cursor-pointer {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default ChoosePlanPage;