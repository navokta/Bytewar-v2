"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PaymentPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('enrollmentData');
    if (!data) {
      window.location.href = '/enroll';
      return;
    }
    setUserData(JSON.parse(data));
    setLoading(false);
  }, []);

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

    // Simulate handler
    setTimeout(() => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxxxxxxxx",
        amount: 10000, // ₹100
        currency: "INR",
        name: "ByteWar Hackathon",
        description: "Registration Fee",
        image: "/logo.png",
        handler: async (response) => {
          console.log("Payment Success:", response.razorpay_payment_id);

          try {
            // ✅ 1. Send confirmation email
            await fetch('/api/send-registration-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(userData),
            });

            // ✅ 2. Submit to Google Form (including colleges)
            const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTj3v7wQSb8HFZPHCLOcsoN_NTNaZMqAZLCY5vBzf9qGSK1w/formResponse";

            const formData = new FormData();

            // Basic Fields
            formData.append("entry.196157114", userData.name);
            formData.append("entry.782849520", userData.email);
            formData.append("entry.662734838", userData.phone);
            formData.append("entry.2033137663", userData.teamName || "");
            formData.append("entry.1655015983", userData.altPhone || "");
            formData.append("entry.1120477465", userData.upiId);

            // Member Names
            formData.append("entry.1882654199", userData.members[0]?.name || "");
            formData.append("entry.478505159", userData.members[1]?.name || "");
            formData.append("entry.2040641448", userData.members[2]?.name || "");
            formData.append("entry.1717696341", userData.members[3]?.name || "");
            formData.append("entry.1992188917", userData.members[4]?.name || "");

            // ✅ COLLEGE FIELDS - All 5 members
            formData.append("entry.187491205", 
              userData.members
                .filter(m => m?.institution)
                .map(m => `${m.name}: ${m.institution}`)
                .join(" | ") || "Not Provided"
            );

            // Submit to Google Form
            await fetch(formUrl, {
              method: "POST",
              mode: "no-cors",
              body: formData,
            });

            // ✅ Final Success
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
        <p className="text-center text-gray-400 mb-8">Pay ₹100 to confirm registration</p>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Your Info</h3>
          <p className="text-gray-300"><strong>Name:</strong> {userData.name}</p>
          <p className="text-gray-300"><strong>Email:</strong> {userData.email}</p>
          <p className="text-gray-300"><strong>Team:</strong> {userData.teamName || "Solo"}</p>
        </div>

        <button
          onClick={handlePayment}
          disabled={paymentStatus === 'processing'}
          className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 disabled:opacity-70"
        >
          {paymentStatus === 'processing' ? 'Processing...' : 'Pay ₹100 Now'}
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">Secured by Razorpay</p>
      </div>
    </div>
  );
}