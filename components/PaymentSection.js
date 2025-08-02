"use client";
import Link from "next/link";
import { useState } from "react";
import { FaQrcode, FaRupeeSign, FaCheckCircle, FaWhatsapp, FaCopy, FaShieldAlt } from "react-icons/fa";

export default function WowPaymentSection() {
  const [paid, setPaid] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  // UPI Payment Details
  const UPI_ID = "bank.bhavy@okhdfcbank";
  const AMOUNT = "100";
  const MERCHANT_NAME = "ByteWar";

  const handlePayment = () => {
    // Create UPI payment link
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${MERCHANT_NAME}&am=${AMOUNT}&cu=INR`;
    
    // Try to open UPI app, fallback to QR code
    window.open(upiLink, '_blank');
    setShowQR(true);
  };

  const copyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (paid) {
    return (
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
        
        <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-3xl shadow-2xl text-center transform transition-all duration-500 group-hover:scale-[1.02] border border-white/10">
          <div className="absolute top-4 right-4 text-white/20">
            <FaShieldAlt className="w-8 h-8" />
          </div>
          
          <div className="mb-6">
            <div className="relative inline-flex items-center justify-center mb-4">
              <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
              <FaCheckCircle className="w-16 h-16 text-white relative" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">Payment Successful!</h3>
            <p className="text-green-100 text-lg mb-6">Thank you for your payment. You&apos;re now enrolled in ByteWar!</p>
          </div>
          
          <div className="mt-6">
            <Link 
              href="/" 
              className="text-white/80 underline hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
      
      <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Registration Fee
            </span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-end justify-center">
            <FaRupeeSign className="text-3xl text-yellow-400 mb-2" />
            <span className="text-5xl font-black text-white">{AMOUNT}</span>
          </div>
          <p className="text-gray-400 mt-2">One-time registration fee</p>
        </div>

        <div className="space-y-6">
          <div className="relative group/button">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover/button:opacity-30 blur-lg transition-all duration-300"></div>
            <button
              onClick={handlePayment}
              className="relative w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaQrcode className="text-2xl" />
              <span className="text-lg">Pay with UPI</span>
            </button>
          </div>

          {showQR && (
            <div className="bg-gray-700/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-gray-300 text-center mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                Scan this QR code
              </p>
              <div className="bg-white p-3 rounded-xl inline-block mx-auto">
                {/* Replace with your actual QR code */}
                <div className="w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-center text-sm">QR Code<br/>(Replace with actual)</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-700/50 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-sm mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              UPI ID:
            </p>
            <div className="flex items-center gap-3">
              <code className="bg-gray-600/50 px-4 py-3 rounded-xl text-yellow-300 flex-1 break-all font-mono text-sm border border-white/10">
                {UPI_ID}
              </code>
              <button 
                onClick={copyUPI}
                className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-xl transition-all duration-300 group/copy"
              >
                <div className={`absolute inset-0 bg-white rounded-xl opacity-0 ${copied ? 'opacity-20' : ''} transition-opacity duration-300`}></div>
                {copied ? (
                  <span className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-400" /> Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <FaCopy /> Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-300 text-sm">
                After completing your payment, click the button below to confirm your enrollment.
              </p>
            </div>
          </div>

          <div className="relative group/button">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover/button:opacity-30 blur-lg transition-all duration-300"></div>
            <button
              onClick={() => setPaid(true)}
              className="relative w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaCheckCircle className="text-xl" />
              <span className="text-lg">I&apos;ve Paid ₹{AMOUNT}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}