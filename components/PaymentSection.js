"use client";
import { useState } from "react";
import { FaQrcode, FaRupeeSign, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function PaymentSection() {
  const [paid, setPaid] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // UPI Payment Details
  const UPI_ID = "bank.bhavy@okhdfcbank";
  const AMOUNT = "29";
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
    alert("UPI ID copied to clipboard!");
  };

  if (paid) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-2xl shadow-2xl text-center transform transition-all duration-500 hover:scale-[1.02]">
        <div className="mb-6">
          <FaCheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Payment Successful!</h3>
          <p className="text-green-100 mb-6">Thank you for your payment. You're now enrolled in ByteWar!</p>
        </div>
        
        <a 
          href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
          target="_blank" 
          rel="noopener" 
          className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
        >
          <FaWhatsapp className="text-green-500" />
          Join WhatsApp Group
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-6">
      <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
        <FaRupeeSign className="text-yellow-400" />
        Registration Fee
      </h3>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-yellow-400 mb-2">₹29</div>
        <p className="text-gray-300">One-time registration fee</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FaQrcode className="text-white" />
          Pay with UPI
        </button>

        {showQR && (
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <p className="text-gray-300 text-sm mb-3 text-center">Or scan this QR code:</p>
            <div className="bg-white p-2 rounded inline-block mx-auto">
              {/* Replace with your actual QR code */}
              <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs text-center">QR Code<br/>(Replace with actual)</span>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
          <p className="text-gray-300 text-sm mb-2">UPI ID:</p>
          <div className="flex items-center gap-2">
            <code className="bg-gray-600 px-3 py-2 rounded text-yellow-300 flex-1 break-all">
              {UPI_ID}
            </code>
            <button 
              onClick={copyUPI}
              className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>After payment, please click the button below:</p>
        </div>

        <button
          onClick={() => setPaid(true)}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          I've Paid ₹29
        </button>
      </div>
    </div>
  );
}