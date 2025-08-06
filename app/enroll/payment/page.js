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
  const [displayAmount, setDisplayAmount] = useState(150);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('enrollmentData');
    if (!data) {
      window.location.href = '/enroll';
      return;
    }
    
    const parsedData = JSON.parse(data);
    setUserData(parsedData);
    
    // Check if coupon was already entered
    if (parsedData.couponCode) {
      setCouponCode(parsedData.couponCode);
      validateCoupon(parsedData.couponCode);
    }
    
    setLoading(false);
  }, []);

  const validateCoupon = async (code) => {
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
        setCouponSuccess(data.message);
        setDisplayAmount(data.discountedAmount);
        
        // Update local storage with coupon info
        if (userData) {
          const updatedData = {
            ...userData,
            couponCode: code,
            discountApplied: true
          };
          localStorage.setItem('enrollmentData', JSON.stringify(updatedData));
          setUserData(updatedData);
        }
      } else {
        setCouponError(data.message);
        setDisplayAmount(data.discountedAmount);
      }
    } catch (error) {
      console.error("Coupon validation failed:", error);
      setCouponError("Failed to validate coupon. Please try again.");
      setDisplayAmount(150);
    } finally {
      setIsValidating(false);
    }
  };

  const handleCouponChange = (e) => {
    const code = e.target.value;
    setCouponCode(code);
    
    // Validate immediately when user types
    if (code.trim() === "") {
      setCouponError("");
      setCouponSuccess("");
      setDisplayAmount(150);
    } else {
      // Debounce the validation to avoid too many requests
      const timer = setTimeout(() => {
        validateCoupon(code);
      }, 500);
      
      return () => clearTimeout(timer);
    }
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
      alert('Razorpay failed to load. Check internet.');
      return;
    }

    setPaymentStatus('processing');

    // Use the current display amount for payment
    const actualAmount = displayAmount;

    setTimeout(() => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxxxxxxxx",
        amount: actualAmount * 100, // in paise
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
            formData.append("entry.123456789", couponCode || "");

            // Member Names
            formData.append("entry.1882654199", userData.members[0]?.name || "");
            formData.append("entry.478505159", userData.members[1]?.name || "");
            formData.append("entry.2040641448", userData.members[2]?.name || "");
            formData.append("entry.1717696341", userData.members[3]?.name || "");
            formData.append("entry.1992188917", userData.members[4]?.name || "");

            // College Fields
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
            alert("Payment succeeded, but registration confirmation failed. Contact support.");
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

  if (loading) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-900 p-4">
        <div className="text-center bg-green-800/30 p-8 rounded-2xl border border-green-500 max-w-md">
          <h2 className="text-3xl font-bold text-white mb-4">✅ Success!</h2>
          <p className="text-green-200 mb-4">Registration confirmed for <strong>{userData.name}</strong>.</p>
          <p className="text-green-300 mb-6">Check your email for details.</p>
          <Link href="/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Home</Link>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-900 p-4">
        <div className="text-center bg-red-800/30 p-8 rounded-2xl border border-red-500 max-w-md">
          <h2 className="text-3xl font-bold text-white mb-4">❌ Failed</h2>
          <p className="text-red-200 mb-6">Payment failed. Please try again.</p>
          <button onClick={() => setPaymentStatus(null)} className="px-6 py-3 bg-red-600 text-white rounded-lg">Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-400 mb-2">Complete Payment</h1>
        <p className="text-center text-gray-400 mb-8">
          {displayAmount === 100 ? "Pay ₹100 (Coupon Applied)" : "Pay ₹150"}
        </p>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Your Info</h3>
          <p className="text-gray-300"><strong>Name:</strong> {userData.name}</p>
          <p className="text-gray-300"><strong>Email:</strong> {userData.email}</p>
          <p className="text-gray-300"><strong>Team:</strong> {userData.teamName || "Solo"}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaTag className="text-purple-400" /> Coupon Code
          </h3>
          <input
            type="text"
            value={couponCode}
            onChange={handleCouponChange}
            placeholder="Enter coupon code (if any)"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 mb-2"
            disabled={isValidating}
          />
          {isValidating && (
            <p className="text-gray-400 text-sm">Validating coupon...</p>
          )}
          {couponError && !isValidating && (
            <p className="text-red-400 text-sm">{couponError}</p>
          )}
          {couponSuccess && !isValidating && (
            <p className="text-green-400 text-sm">{couponSuccess}</p>
          )}
          <div className="flex justify-end mt-2">
            <Link href="/forcoupancode" className="text-sm text-purple-400 hover:underline">
              Want a coupon code?
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Payment Summary</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Registration Fee:</span>
            <span className="text-gray-300">₹150</span>
          </div>
          {displayAmount === 100 && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Discount:</span>
              <span className="text-green-400">-₹50</span>
            </div>
          )}
          <div className="flex justify-between items-center pt-2 border-t border-gray-700">
            <span className="text-white font-bold">Total:</span>
            <span className={`text-xl font-bold ${displayAmount === 100 ? 'text-green-400' : 'text-white'}`}>
              ₹{displayAmount}
            </span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={paymentStatus === 'processing'}
          className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 disabled:opacity-70"
        >
          {paymentStatus === 'processing' ? 'Processing...' : `Pay ₹${displayAmount} Now`}
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">Secured by Razorpay</p>
      </div>
    </div>
  );
}