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
  const [displayAmount, setDisplayAmount] = useState(150); // Default ₹150
  const [isValidating, setIsValidating] = useState(false);

  // Load user data from localStorage
  useEffect(() => {
    const data = localStorage.getItem('enrollmentData');
    if (!data) {
      window.location.href = '/enroll';
      return;
    }
    const parsedData = JSON.parse(data);
    setUserData(parsedData);

    // Restore coupon if already applied
    if (parsedData.couponCode) {
      setCouponCode(parsedData.couponCode);
      setDisplayAmount(parsedData.discountedAmount || 150);
      setCouponSuccess(`Coupon ${parsedData.couponCode} already applied!`);
    }

    setLoading(false);
  }, []);

  // Validate coupon
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (data.valid) {
        setCouponSuccess(data.message || `Coupon applied! ${data.discountPercent}% off.`);
        setCouponError("");
        setDisplayAmount(data.discountedAmount);

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
        setCouponError(data.message || "Invalid or expired coupon.");
        setCouponSuccess("");
        setDisplayAmount(150);
      }
    } catch (error) {
      console.error("Coupon validation failed:", error);
      setCouponError("Failed to connect. Please try again.");
      setDisplayAmount(150);
    } finally {
      setIsValidating(false);
    }
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
    if (!e.target.value) {
      setCouponError("");
      setCouponSuccess("");
      setDisplayAmount(150);
    }
  };

  const handleApplyCoupon = () => {
    validateCoupon(couponCode);
  };

  // Load Razorpay SDK
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle Payment
  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay failed to load. Check your internet.');
      return;
    }

    setPaymentStatus('processing');

    const actualAmount = displayAmount;

    try {
      // Step 1: Create order on backend
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: actualAmount }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.id) {
        alert(orderData.error || 'Failed to create order.');
        setPaymentStatus(null);
        return;
      }

      const { id: orderId } = orderData;

      // Step 2: Open Razorpay with order_id
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(actualAmount * 100), // paise
        currency: 'INR',
        name: 'ByteWar Hackathon',
        description: 'Registration Fee',
        image: '/logo.png',
        order_id: orderId, // 🔥 Critical: Use server-generated order_id
        handler: async (response) => {
          // Step 3: Verify signature
          const verifyRes = await fetch('/api/razorpay/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (!verifyData.valid) {
            alert('Payment verification failed!');
            setPaymentStatus('failed');
            return;
          }

          // Step 4: Confirm registration
          try {
            await fetch('/api/send-registration-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...userData, paymentId: response.razorpay_payment_id }),
            });

            // Submit to Google Form
            const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTj3v7wQSb8HFZPHCLOcsoN_NTNaZMqAZLCY5vBzf9qGSK1w/formResponse";
            const formData = new FormData();

            formData.append("entry.196157114", userData.name);
            formData.append("entry.782849520", userData.email);
            formData.append("entry.662734838", userData.phone);
            formData.append("entry.2033137663", userData.teamName || "");
            formData.append("entry.1655015983", userData.altPhone || "");
            formData.append("entry.1120477465", userData.upiId);

            formData.append("entry.1882654199", userData.members[0]?.name || "");
            formData.append("entry.478505159", userData.members[1]?.name || "");
            formData.append("entry.2040641448", userData.members[2]?.name || "");
            formData.append("entry.1717696341", userData.members[3]?.name || "");
            formData.append("entry.1992188917", userData.members[4]?.name || "");

            const collegeInfo = userData.members
              .filter(m => m?.institution)
              .map(m => `${m.name}: ${m.institution}`)
              .join(" | ") || "Not Provided";
            formData.append("entry.187491205", collegeInfo);

            await fetch(formUrl, {
              method: "POST",
              mode: "no-cors",
              body: formData,
            });

            localStorage.removeItem('enrollmentData');
            setPaymentStatus('success');
          } catch (err) {
            console.error("Post-payment error:", err);
            alert("Payment succeeded but confirmation failed. Contact support.");
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
        modal: {
          escape: false,
          backdropclose: false,
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (res) => {
        console.error('Payment Failed:', res.error);
        setPaymentStatus('failed');
        alert(`Payment failed: ${res.error.description}`);
      });
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStatus('failed');
      alert("Something went wrong. Please try again.");
    }
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full border-2 border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-1">Payment Successful!</h2>
            <p className="text-purple-100">Thank you for registering</p>
          </div>

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

            <div className="bg-purple-900/30 rounded-lg p-4 mb-6 border border-purple-500/20">
              <div className="flex items-start mb-3">
                <svg className="h-5 w-5 text-purple-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-purple-300">Check Your Email</h3>
                  <p className="text-xs text-gray-300 mt-1">
                    We've sent a confirmation to <span className="text-white">{userData.email}</span>. Please verify.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Link href="/" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all text-center">
                Return Home
              </Link>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 text-center border-t border-gray-800">
            <p className="text-xs text-gray-500">Need help? <a href="mailto:navokta@gmail.com" className="text-purple-400 hover:underline">Contact support</a></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-400 mb-2">Complete Payment</h1>
          <p className="text-gray-400">
            {displayAmount < 150 ? `Pay ₹${displayAmount} (Discount Applied)` : "Pay ₹150"}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Your Info</h3>
          <div className="space-y-2 text-gray-300">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Team:</strong> {userData.teamName || "Solo"}</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaTag className="text-purple-400" /> Coupon Code
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={couponCode}
              onChange={handleCouponChange}
              placeholder="Enter coupon"
              className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isValidating}
            />
            <button
              onClick={handleApplyCoupon}
              disabled={isValidating || !couponCode.trim()}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-70"
            >
              {isValidating ? "..." : "Apply"}
            </button>
          </div>
          {isValidating && <p className="text-gray-400 text-sm mt-2">Checking...</p>}
          {couponError && <p className="text-red-400 text-sm mt-2">{couponError}</p>}
          {couponSuccess && <p className="text-green-400 text-sm mt-2">{couponSuccess}</p>}
          <div className="flex justify-end mt-3">
            <Link href="/forcouponcode" className="text-sm text-purple-400 hover:underline">
              Want a coupon?
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Payment Summary</h3>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Fee:</span>
              <span className="text-gray-300">₹150</span>
            </div>
            {displayAmount < 150 && (
              <div className="flex justify-between">
                <span className="text-gray-300">Discount:</span>
                <span className="text-green-400">-₹{(150 - displayAmount).toFixed(2)}</span>
              </div>
            )}
          </div>
          <div className="flex justify-between pt-3 border-t border-gray-700">
            <span className="text-white font-bold">Total:</span>
            <span className={`text-xl font-bold ${displayAmount < 150 ? 'text-green-400' : 'text-white'}`}>
              ₹{displayAmount}
            </span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={paymentStatus === 'processing'}
          className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 disabled:opacity-70 transition"
        >
          {paymentStatus === 'processing' ? 'Processing...' : `Pay ₹${displayAmount} Now`}
        </button>
        <p className="text-center text-gray-500 text-sm mt-4">Secured by Razorpay</p>
      </div>
    </div>
  );
}