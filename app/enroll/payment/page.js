"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTag } from "react-icons/fa";

export default function PaymentPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");
  const [displayAmount, setDisplayAmount] = useState(150); // Default: ₹150
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('enrollmentData');
    if (!data) {
      window.location.href = '/enroll';
      return;
    }
    const parsedData = JSON.parse(data);
    setUserData(parsedData);

    // Restore previously applied coupon (if any)
    if (parsedData.couponCode) {
      setCouponCode(parsedData.couponCode);
      setDisplayAmount(parsedData.discountedAmount || 150);
      setCouponSuccess(`Coupon ${parsedData.couponCode} already applied!`);
    }

    setLoading(false);
  }, []);

  const validateCoupon = async (code) => {
    if (!code.trim()) {
      setCouponError("Please enter a coupon code.");
      setCouponSuccess("");
      return;
    }

    setIsValidating(true);
    setCouponError("");
    setCouponSuccess("");

    try {
      const response = await fetch('/api/validate-coupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (data.valid) {
        // Success: apply discount
        setCouponSuccess(data.message || `Coupon applied! ${data.discountPercent}% off.`);
        setCouponError("");
        setDisplayAmount(data.discountedAmount);

        // Update userData and localStorage
        const updatedData = {
          ...userData,
          couponCode: code,
          discountApplied: true,
          discountPercent: data.discountPercent,
          discountedAmount: data.discountedAmount,
        };
        localStorage.setItem('enrollmentData', JSON.stringify(updatedData));
        setUserData(updatedData);
      } else {
        // Invalid coupon
        setCouponError(data.message || "Invalid or expired coupon.");
        setCouponSuccess("");
        setDisplayAmount(150); // Reset to full price
      }
    } catch (error) {
      console.error("Coupon validation failed:", error);
      setCouponError("Failed to connect. Please try again.");
      setCouponSuccess("");
      setDisplayAmount(150);
    } finally {
      setIsValidating(false);
    }
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
    // Clear messages when user starts editing
    if (!e.target.value) {
      setCouponError("");
      setCouponSuccess("");
      setDisplayAmount(150);
    }
  };

  const handleApplyCoupon = () => {
    validateCoupon(couponCode);
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay failed to load. Please check your internet connection.');
      return;
    }

    setPaymentStatus('processing');

    const actualAmount = displayAmount; // Use discounted or original

    setTimeout(() => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxxxxxxxx",
        amount: Math.round(actualAmount * 100), // in paise
        currency: "INR",
        name: "ByteWar Hackathon",
        description: "Registration Fee",
        image: "/logo.png",
        handler: async (response) => {
          console.log("Payment Success:", response.razorpay_payment_id);
          try {
            // Send confirmation email
            await fetch('/api/send-registration-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(userData),
            });

            // Submit to Google Form
            const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTj3v7wQSb8HFZPHCLOcsoN_NTNaZMqAZLCY5vBzf9qGSK1w/formResponse";
            const formData = new FormData();

            // Basic Fields
            formData.append("entry.196157114", userData.name);
            formData.append("entry.782849520", userData.email);
            formData.append("entry.662734838", userData.phone);
            formData.append("entry.2033137663", userData.teamName || "");
            formData.append("entry.1655015983", userData.altPhone || "");
            formData.append("entry.1120477465", userData.upiId);
            // formData.append("entry.123456789", couponCode || ""); // Store coupon code

            // Member Names
            formData.append("entry.1882654199", userData.members[0]?.name || "");
            formData.append("entry.478505159", userData.members[1]?.name || "");
            formData.append("entry.2040641448", userData.members[2]?.name || "");
            formData.append("entry.1717696341", userData.members[3]?.name || "");
            formData.append("entry.1992188917", userData.members[4]?.name || "");

            // College Info
            formData.append("entry.187491205", 
              userData.members
                .filter(m => m?.institution)
                .map(m => `${m.name}: ${m.institution}`)
                .join(" | ") || "Not Provided"
            );

            await fetch(formUrl, {
              method: "POST",
              mode: "no-cors",
              body: formData,
            });

            localStorage.removeItem('enrollmentData');
            setPaymentStatus('success');
          } catch (error) {
            console.error("Post-payment error:", error);
            alert("Payment succeeded, but registration confirmation failed. Please contact support.");
            localStorage.removeItem('enrollmentData');
            setPaymentStatus('success');
          }
        },
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.phone,
        },
        theme: { color: "#8B5CF6" },
        modal: { escape: false, backdropclose: false }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (res) => {
        console.error('Payment Failed:', res.error);
        setPaymentStatus('failed');
      });
      rzp.open();
    }, 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (paymentStatus === 'success') {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full border-2 border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-1">Payment Successful!</h2>
          <p className="text-purple-100">Thank you for registering</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <div className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-gray-400">Name</span>
              <span className="text-white font-medium">{userData.name}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-gray-400">Email</span>
              <span className="text-white font-medium">{userData.email}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-gray-400">Team</span>
              <span className="text-white font-medium">{userData.teamName || "Solo Participant"}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-gray-400">Amount Paid</span>
              <span className="text-green-400 font-bold">₹{displayAmount}</span>
            </div>
            {couponCode && (
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Coupon Applied</span>
                <span className="text-purple-400 font-medium">{couponCode}</span>
              </div>
            )}
          </div>

          {/* Email Verification Section */}
          <div className="bg-purple-900/30 rounded-lg p-4 mb-6 border border-purple-500/20">
            <div className="flex items-start mb-3">
              <svg className="h-5 w-5 text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-purple-300">Check Your Email</h3>
                <p className="text-xs text-gray-300 mt-1">
                  We've sent a confirmation email to <span className="text-white">{userData.email}</span>.
                  Please verify your email address to complete registration.
                </p>
              </div>
            </div>
            
            {/* <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-xs text-gray-300">
                  Didn't receive email? 
                  <button 
                    onClick={async () => {
                      try {
                        await fetch('/api/resend-confirmation', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email: userData.email })
                        });
                        alert('Confirmation email resent successfully!');
                      } catch (error) {
                        alert('Failed to resend email. Please try again later.');
                      }
                    }}
                    className="text-purple-400 hover:text-white ml-1 underline"
                  >
                    Resend now
                  </button>
                </p>
              </div>
            </div> */}
          </div>

          <div className="flex flex-col space-y-3">
            <Link href="/" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all text-center">
              Return Home
            </Link>
            {/* <button 
              onClick={() => {
                // Function to open default email client
                window.location.href = `mailto:${userData.email}`;
              }}
              className="px-6 py-2.5 text-purple-400 hover:text-white text-sm font-medium text-center transition-all"
            >
              Open Email App
            </button> */}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900/50 p-4 text-center border-t border-gray-800">
          <p className="text-xs text-gray-500">Need help? <a href="mailto:navokta@gmail.com" className="text-purple-400 hover:underline">Contact support</a></p>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-900 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">Complete Payment</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            {displayAmount < 150 ? `Pay ₹${displayAmount} (Discount Applied)` : "Pay ₹150"}
          </p>
        </div>

        {/* User Info */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Your Info</h3>
          <div className="space-y-2">
            <p className="text-gray-300 text-sm sm:text-base"><strong>Name:</strong> {userData.name}</p>
            <p className="text-gray-300 text-sm sm:text-base"><strong>Email:</strong> {userData.email}</p>
            <p className="text-gray-300 text-sm sm:text-base"><strong>Team:</strong> {userData.teamName || "Solo"}</p>
          </div>
        </div>

        {/* Coupon Code Section */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <FaTag className="text-purple-400 text-sm sm:text-base" /> Coupon Code
          </h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="text"
              value={couponCode}
              onChange={handleCouponChange}
              placeholder="Enter coupon code"
              className="flex-1 px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm sm:text-base"
              disabled={isValidating}
            />
            <button
              onClick={handleApplyCoupon}
              disabled={isValidating || !couponCode.trim()}
              className="px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isValidating ? "Applying..." : "Apply"}
            </button>
          </div>
          {isValidating && (
            <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Checking coupon...</p>
          )}
          {couponError && !isValidating && (
            <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">{couponError}</p>
          )}
          {couponSuccess && !isValidating && (
            <p className="text-green-400 text-xs sm:text-sm mt-1 sm:mt-2">{couponSuccess}</p>
          )}
          <div className="flex justify-end mt-2 sm:mt-3">
            <Link href="/forcouponcode" className="text-xs sm:text-sm text-purple-400 hover:underline">
              Want a coupon code?
            </Link>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Payment Summary</h3>
          <div className="space-y-2 mb-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm sm:text-base">Registration Fee:</span>
              <span className="text-gray-300 text-sm sm:text-base">₹150</span>
            </div>
            {displayAmount < 150 && (
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm sm:text-base">Discount:</span>
                <span className="text-green-400 text-sm sm:text-base">-₹{Math.round((150 - displayAmount) * 100) / 100}</span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-700">
            <span className="text-white font-bold text-sm sm:text-base">Total:</span>
            <span className={`text-lg sm:text-xl font-bold ${displayAmount < 150 ? 'text-green-400' : 'text-white'}`}>
              ₹{displayAmount}
            </span>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={paymentStatus === 'processing'}
          className="w-full py-3 sm:py-4 bg-green-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-green-700 disabled:opacity-70 transition text-sm sm:text-base"
        >
          {paymentStatus === 'processing' ? 'Processing...' : `Pay ₹${displayAmount} Now`}
        </button>
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">Secured by Razorpay</p>
      </div>
    </div>
  );
}