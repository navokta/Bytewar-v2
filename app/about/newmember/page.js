// app/about/newmember/page.js
"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function NewMemberForm() {
  const [isClient, setIsClient] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
    motivation: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // --- REPLACE THESE WITH YOUR ACTUAL GOOGLE FORM DETAILS ---
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSep0eLSIoKpQUeofArmVsEWYAHo1j1B2PDrGC79q91lAOi97A/formResponse";

const ENTRY_IDS = {
  name: "entry.876284472",
  email: "entry.1069539123",
  linkedin: "entry.1804940976",
  github: "entry.1688349177",
  portfolio: "entry.1655143648",
  motivation: "entry.1424578550"
};
  // --- END REPLACE SECTION ---

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(ENTRY_IDS[key], form[key]);
      });
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      setSuccess(true);
    } catch (err) {
      setError("Submission failed. Please try again.");
      console.error("Form submission error:", err);
    }
    setLoading(false);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 flex items-center justify-center">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            Loading Application Form...
          </h2>
        </div>
      </div>
    );
  }

  if (success) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Success Card */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full border-2 border-white/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Application Submitted!</h2>
              <p className="text-green-100 text-sm">Thank you for your interest</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="bg-gray-700/30 rounded-lg p-4 mb-6 border border-gray-600">
                <p className="text-gray-300 text-center text-sm">
                  We've received your application. Our team will review it and contact you if we proceed with your candidacy.
                </p>
              </div>

              {/* Next Steps */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Next Steps
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Review within 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Interview if selected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Final decision communication</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <Link 
                href="/about" 
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-all duration-300"
              >
                Back to About Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Join the ByteWar Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals to help us build the ultimate coding warzone.
            Tell us about yourself!
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-6 md:p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <FaUser className="text-purple-400" />
              Your Details
            </h2>

            {/* Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                type="email"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* LinkedIn */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLinkedin className="text-gray-400" />
              </div>
              <input
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn Profile URL (optional)"
                type="url"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* GitHub */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaGithub className="text-gray-400" />
              </div>
              <input
                name="github"
                value={form.github}
                onChange={handleChange}
                placeholder="GitHub Profile URL (optional)"
                type="url"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Portfolio */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaGlobe className="text-gray-400" />
              </div>
              <input
                name="portfolio"
                value={form.portfolio}
                onChange={handleChange}
                placeholder="Portfolio/Personal Website (optional)"
                type="url"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Motivation */}
            <div className="relative">
              <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                <FaInfoCircle className="text-gray-400 mt-1" />
              </div>
              <textarea
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                required
                placeholder="Why do you want to join ByteWar? What skills/expertise can you bring? (200 words max)"
                rows="5"
                maxLength="1000"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
     {/* Custom Styles */}
        <style jsx>{`
          @keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(5px) translateX(-5px);
  }
  75% {
    transform: translateY(-5px) translateX(10px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
        `}</style>
    <Footer />
    </div>
  );
}