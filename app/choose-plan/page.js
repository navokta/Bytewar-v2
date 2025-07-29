// app/choose-plan/page.js
"use client";
import React, { useState } from 'react';
import { FaCheck, FaRupeeSign, FaShieldAlt } from 'react-icons/fa';

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
    color: "from-gray-300 to-gray-500"
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

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!selectedTier) return;

    // Validate form
    if (!sponsorDetails.name || !sponsorDetails.email || !sponsorDetails.company || !sponsorDetails.phone) {
      alert('Please fill all required fields');
      return;
    }

    // Load Razorpay SDK
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Check your internet connection.');
      return;
    }

    setPaymentStatus('processing');

    try {
      // 🚀 Call your backend API to create a real Razorpay order
      const response = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedTier.price, // ₹500 → 500
          currency: 'INR',
          receipt: `sponsor_${selectedTier.id}_${Date.now()}`
        }),
      });

      const orderData = await response.json();

      if (!orderData.success) {
        throw new Error(orderData.error || 'Order creation failed');
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // From .env.local
        amount: orderData.amount, // in paise
        currency: orderData.currency,
        name: 'ByteWar',
        description: `${selectedTier.name} Sponsorship`,
        order_id: orderData.orderId,
        handler: async (response) => {
          console.log("Payment Success:", response);

          // Optional: Send payment verification to backend
          // await fetch('/api/verify-payment', { ... })

          setPaymentStatus('success');
        },
        prefill: {
          name: sponsorDetails.name,
          email: sponsorDetails.email,
          contact: sponsorDetails.phone,
        },
        notes: {
          sponsorTier: selectedTier.name,
          companyName: sponsorDetails.company,
        },
        theme: {
          color: '#8B5CF6'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response) => {
        console.error("Payment Failed:", response.error);
        setPaymentStatus('failed');
      });
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
      alert('Failed to initiate payment. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              CHOOSE YOUR SPONSORSHIP PLAN
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select a sponsorship tier and complete your payment to become a ByteWar partner
          </p>
        </div>

        {paymentStatus === 'success' ? (
          // ✅ Success State
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-4xl text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
            <p className="text-green-100 text-xl mb-6">
              Thank you for becoming a {selectedTier?.name} sponsor. We'll contact you shortly with next steps.
            </p>
            <a 
              href="/"
              className="inline-block px-6 py-3 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </a>
          </div>
        ) : paymentStatus === 'failed' ? (
          // ❌ Failure State
          <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Payment Failed</h2>
            <p className="text-red-100 text-xl mb-6">
              There was an issue processing your payment. Please try again.
            </p>
            <button 
              onClick={() => setPaymentStatus(null)}
              className="inline-block px-6 py-3 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : paymentStatus === 'processing' ? (
          // ⏳ Processing State
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-10 text-center max-w-2xl mx-auto border border-white/10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Processing Payment</h2>
            <p className="text-gray-300 text-xl">
              Redirecting to secure payment gateway...
            </p>
          </div>
        ) : (
          // 💳 Plan Selection & Payment Form
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sponsorship Tiers */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sponsorshipTiers.map((tier) => (
                  <div 
                    key={tier.id}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedTier?.id === tier.id 
                        ? 'ring-4 ring-purple-500 scale-[1.02]' 
                        : 'hover:scale-[1.02]'
                    }`}
                    onClick={() => handleTierSelect(tier)}
                  >
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${tier.color} opacity-0 ${
                      selectedTier?.id === tier.id ? 'opacity-30' : 'group-hover:opacity-20'
                    } blur-lg transition-opacity duration-300`}></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                        {selectedTier?.id === tier.id && (
                          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                            <FaCheck className="text-white text-xs" />
                          </div>
                        )}
                      </div>
                      <div className="mb-6">
                        <div className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>
                          <FaRupeeSign className="inline text-2xl" />{tier.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <ul className="space-y-3 mb-6 flex-grow">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <FaShieldAlt className="text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Sponsor Details</h2>
                </div>

                {selectedTier ? (
                  <div className="mb-6 p-4 rounded-xl bg-gray-700/30 border border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Selected Plan:</span>
                      <span className="font-bold text-white">{selectedTier.name}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-300">Amount:</span>
                      <span className="font-bold text-white">
                        <FaRupeeSign className="inline" />{selectedTier.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 p-4 rounded-xl bg-gray-700/30 border border-white/5 text-center">
                    <p className="text-gray-400">Select a sponsorship plan to continue</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={sponsorDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={sponsorDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={sponsorDetails.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Your Company Pvt. Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={sponsorDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!selectedTier || paymentStatus === 'processing'}
                  className={`w-full mt-8 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedTier 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/30 transform hover:scale-[1.02]'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <FaRupeeSign /> Proceed to Payment
                </button>

                <div className="mt-6 text-center text-gray-500 text-sm">
                  <p>Secured with Razorpay • All transactions are encrypted</p>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default ChoosePlanPage;