// app/enroll/payment/page.js
"use client";
import { useEffect, useState } from 'react';

export default function PaymentPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'processing', 'success', 'failed'

  useEffect(() => {
    const data = localStorage.getItem('enrollmentData');
    if (data) {
      setUserData(JSON.parse(data));
    } else {
      window.location.href = '/enroll';
    }
    setLoading(false);
  }, []);

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
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    setPaymentStatus('processing');

    try {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 100 * 100,
        currency: 'INR',
        name: 'ByteWar Hackathon',
        description: 'Registration Fee',
        image: '/logo.png',
        handler: async function (response) {
          console.log('Payment Success:', response);

          try {
            // ✅ 1. Send confirmation email via your API
            const emailRes = await fetch('/api/send-registration-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });

            if (!emailRes.ok) {
              const error = await emailRes.json().catch(() => ({}));
              throw new Error(error.message || 'Email API failed');
            }

            // ✅ 2. Submit to Google Forms
            const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTj3v7wQSb8HFZPHCLOcsoN_NTNaZMqAZLCY5vBzf9qGSK1w/formResponse";

            const formData = new FormData();
            formData.append("entry.196157114", userData.name);
            formData.append("entry.782849520", userData.email);
            formData.append("entry.662734838", userData.phone);
            formData.append("entry.2033137663", userData.teamName);
            formData.append("entry.1655015983", userData.upiId);
            formData.append("entry.1120477465", userData.altPhone || "");

            // Add all 5 members
            formData.append("entry.1882654199", userData.members[0]?.name || "");
            formData.append("entry.478505159", userData.members[1]?.name || "");
            formData.append("entry.2040641448", userData.members[2]?.name || "");
            formData.append("entry.1717696341", userData.members[3]?.name || "");
            formData.append("entry.1992188917", userData.members[4]?.name || "");

            await fetch(formUrl, {
              method: "POST",
              mode: "no-cors",
              body: formData,
            });

            // ✅ 3. Cleanup & success
            localStorage.removeItem('enrollmentData');
            setPaymentStatus('success');
          } catch (error) {
            console.error("Post-payment error:", error);
            alert("Payment succeeded, but we couldn't confirm your registration. Contact support.");
            localStorage.removeItem('enrollmentData');
            setPaymentStatus('success'); // Still allow success
          }
        },
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.phone
        },
        theme: {
          color: '#8B5CF6'
        },
        modal: {
          escape: false,
          backdropclose: false
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response) => {
        console.error('Payment Failed:', response.error);
        setPaymentStatus('failed');
      });
      rzp.open();
    } catch (error) {
      console.error('Error:', error);
      setPaymentStatus('failed');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-black p-4">
        <div className="text-center max-w-md bg-green-800/30 p-8 rounded-2xl border border-green-500">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold text-white mb-4">Enrollment Successful!</h2>
          <p className="text-green-200 mb-6">
            Thank you, <strong>{userData.name}</strong>! You've been enrolled in ByteWar.
          </p>
          <p className="text-green-300 mb-6">
            We've sent a confirmation email to <strong>{userData.email}</strong>.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-black p-4">
        <div className="text-center max-w-md bg-red-800/30 p-8 rounded-2xl border border-red-500">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-3xl font-bold text-white mb-4">Payment Failed</h2>
          <p className="text-red-200 mb-6">
            Your payment could not be processed. Please try again.
          </p>
          <button
            onClick={() => setPaymentStatus(null)}
            className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
          Complete Your Enrollment
        </h1>
        <p className="text-center text-gray-400 mb-8">Pay ₹100 to confirm your registration</p>

        {/* User Summary */}
        <div className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Your Details</h3>
          <div className="space-y-2 text-gray-300">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Team Name:</strong> {userData.teamName}</p>
          </div>
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          disabled={paymentStatus === 'processing'}
          className="w-full py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-70"
        >
          {paymentStatus === 'processing' ? 'Processing...' : 'Pay ₹100 Now'}
        </button>

        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>Secured by Razorpay • All transactions are encrypted</p>
        </div>
      </div>
    </div>
  );
}