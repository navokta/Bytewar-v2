'use client';
import React, { useState, useEffect } from 'react';
import { Check, Shield, DollarSign, X, Menu } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const ChoosePlanPage = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null); 
  const [sponsorDetails, setSponsorDetails] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

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
        "Social media mentions"
      ],
      color: "from-amber-700 to-amber-900"
    }
  ];

  // Load Razorpay SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => alert('Failed to load Razorpay SDK. Check your internet connection.');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const handlePayment = () => {
    if (!selectedTier) return;
    if (!sponsorDetails.name || !sponsorDetails.email || !sponsorDetails.company || !sponsorDetails.phone) {
      alert('Please fill all required fields');
      return;
    }

    if (!isScriptLoaded) {
      alert('Payment gateway is still loading. Please wait...');
      return;
    }

    setPaymentStatus('processing');


    // Google Form Action URL
    const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdFE0Zg_SFIHZhQBhGP-Ixv2ecUVuv02BQtX9jXuEBFl1n9nQ/formResponse";

    const ENTRY_IDS = {
      name: "entry.551559455",
      email: "entry.1601604183",
      company: "entry.1073180290",
      phone: "entry.19153286"
    };



    // Create order (In production, this should come from your backend)
    // For now, simulate order creation
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID (from dashboard)
      amount: selectedTier.price * 100, // Amount in paise (5000 INR = 500000 paise)
      currency: "INR",
      name: "ByteWar",
      description: `${selectedTier.name} Sponsorship`,
      image: "/logo.png", // Optional: Add your logo
      handler: function (response) {
        // ✅ Payment successful
        console.log("Payment Success:", response);
        // ✅ Payment successful → Submit to Google Form
        const formData = new FormData();
        formData.append(ENTRY_IDS.name, sponsorDetails.name);
        formData.append(ENTRY_IDS.email, sponsorDetails.email);
        formData.append(ENTRY_IDS.company, sponsorDetails.company);
        formData.append(ENTRY_IDS.phone, sponsorDetails.phone);

        fetch(GOOGLE_FORM_ACTION, {
          method: "POST",
          mode: "no-cors", // Required for cross-origin
          body: formData,
        })
          .then(() => console.log("Form submitted to Google Forms"))
          .catch((err) => console.error("Google Form submission failed:", err));

        // Show success UI
        setPaymentStatus('success');
      },
      prefill: {
        name: sponsorDetails.name,
        email: sponsorDetails.email,
        contact: sponsorDetails.phone.replace(/\D/g, '').slice(-10) // Extract 10-digit number
      },
      notes: {
        sponsor_name: sponsorDetails.name,
        sponsor_email: sponsorDetails.email,
        sponsor_company: sponsorDetails.company,
        tier: selectedTier.name
      },
      theme: {
        color: "#8B5CF6" // Purple theme
      },
      modal: {
        escape: false,
        backdropclose: false
      }
    };

    const rzp = new window.Razorpay(options);

    rzp.on('payment.failed', function (response) {
      console.error("Payment Failed:", response.error);
      setPaymentStatus('failed');
    });

    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <Header />

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              CHOOSE YOUR SPONSORSHIP PLAN
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Select a sponsorship tier and complete your payment to become a ByteWar partner
          </p>
        </div>

        {paymentStatus === 'success' ? (
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 sm:p-8 lg:p-10 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Payment Successful!</h2>
            <p className="text-green-100 text-lg mb-6">
              Thank you for becoming a {selectedTier?.name} sponsor. We&apos;ll contact you shortly with next steps.
            </p>
            <Link href="/" className="inline-block px-6 py-3 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors">
              Back to Home
            </Link>
          </div>
        ) : paymentStatus === 'failed' ? (
          <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-2xl p-6 sm:p-8 lg:p-10 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Payment Failed</h2>
            <p className="text-red-100 text-lg mb-6">
              There was an issue processing your payment. Please try again.
            </p>
            <button
              onClick={() => setPaymentStatus(null)}
              className="inline-block px-6 py-3 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Sponsorship Tiers */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {sponsorshipTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`relative cursor-pointer transition-all duration-300 ${selectedTier?.id === tier.id
                      ? 'ring-2 ring-purple-500 scale-[1.02]'
                      : 'hover:scale-[1.01]'
                      }`}
                    onClick={() => handleTierSelect(tier)}
                  >
                    {tier.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      </div>
                    )}
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${tier.color} opacity-0 ${selectedTier?.id === tier.id ? 'opacity-30' : 'group-hover:opacity-20'
                      } blur-lg transition-opacity duration-300`}></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg lg:text-xl font-bold text-white">{tier.name}</h3>
                        {selectedTier?.id === tier.id && (
                          <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                            <Check className="text-white text-xs" />
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <div className={`text-2xl lg:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>
                          <DollarSign className="inline w-5 h-5 mr-1" />₹{tier.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="text-green-500 mr-2 mt-0.5 w-3 h-3" />
                            <span className="text-xs sm:text-sm text-gray-300">{benefit}</span>
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
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="text-purple-400 w-5 h-5" />
                  <h2 className="text-xl font-bold text-white">Sponsor Details</h2>
                </div>

                {selectedTier ? (
                  <div className="mb-6 p-3 rounded-xl bg-gray-700/30 border border-white/5">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Selected Plan:</span>
                      <span className="font-bold text-white">{selectedTier.name}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300 mt-2">
                      <span>Amount:</span>
                      <span className="font-bold text-white">₹{selectedTier.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 p-3 rounded-xl bg-gray-700/30 border border-white/5 text-center">
                    <p className="text-sm text-gray-400">Select a plan to continue</p>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={sponsorDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={sponsorDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={sponsorDetails.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="Your Company Pvt. Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={sponsorDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!selectedTier || paymentStatus === 'processing'}
                  className={`w-full mt-6 py-3 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${selectedTier
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transform hover:scale-[1.02]'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  <DollarSign className="w-4 h-4" /> Proceed to Payment
                </button>

                <div className="mt-4 text-center text-gray-500 text-xs">
                  <p>Secured by Razorpay • All transactions are encrypted</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />

      {/* Razorpay Script is loaded via useEffect */}
    </div>
  );
};

export default ChoosePlanPage;