"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RegistrationPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  // Load user data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("enrollmentData");
    if (!data) {
      window.location.href = "/enroll";
      return;
    }
    const parsedData = JSON.parse(data);
    setUserData(parsedData);
    setLoading(false);
  }, []);

  // Handle Free Registration (no payment)
  const handleRegistration = async () => {
    setRegistrationStatus("processing");

    try {
      // Send confirmation email
      await fetch("/api/send-registration-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userData }),
      });

      // Submit to Google Form
      const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSeTj3v7wQSb8HFZPHCLOcsoN_NTNaZMqAZLCY5vBzf9qGSK1w/formResponse";
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

      const collegeInfo =
        userData.members
          .filter((m) => m?.institution)
          .map((m) => `${m.name}: ${m.institution}`)
          .join(" | ") || "Not Provided";
      formData.append("entry.187491205", collegeInfo);

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      localStorage.removeItem("enrollmentData");
      setRegistrationStatus("success");
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong. Please try again.");
      setRegistrationStatus(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (registrationStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full border-2 border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-1">Registration Successful!</h2>
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
          <h1 className="text-3xl font-bold text-purple-400 mb-2">Complete Registration</h1>
          <p className="text-gray-400">Free Registration - No Payment Required</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Your Info</h3>
          <div className="space-y-2 text-gray-300">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Team:</strong> {userData.teamName || "Solo"}</p>
          </div>
        </div>

        <button
          onClick={handleRegistration}
          disabled={registrationStatus === "processing"}
          className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 disabled:opacity-70 transition"
        >
          {registrationStatus === "processing" ? "Processing..." : "Register Now"}
        </button>
      </div>
    </div>
  );
}
