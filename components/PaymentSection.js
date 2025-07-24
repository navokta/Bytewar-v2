"use client";
import { useState } from "react";

export default function PaymentSection() {
  const [paid, setPaid] = useState(false);

  // Replace with your payment link (e.g., Razorpay, Paytm, UPI, etc.)
  const PAYMENT_LINK = "https://your-payment-link.com";

  return (
    <div className="bg-yellow-50 p-6 rounded shadow-md max-w-xl mx-auto mt-8 text-center">
      <h3 className="text-xl font-bold mb-2">Pay Registration Fee</h3>
      <p className="mb-4">Registration Fee: <span className="font-semibold">₹29</span></p>
      <a
        href={PAYMENT_LINK}
        target="_blank"
        rel="noopener"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-lg mb-4"
        onClick={() => setPaid(true)}
      >
        Pay Now
      </a>
      {paid && (
        <div className="mt-4 text-green-700 font-semibold">Thank you for your payment!</div>
      )}
    </div>
  );
}
