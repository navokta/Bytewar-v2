"use client";

import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaIdCard, FaUserTag, FaSave, FaUniversity } from "react-icons/fa";
// import all from "@/public/All.png";

// Organizer Header Component
const OrganizerHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
          Organised by Navokta Team
        </h1>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video sm:aspect-[3/1] bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
            <img 
              src="/All.jpg" 
              alt="Navokta Team" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center text-gray-300 p-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base font-medium">Group Photo Will Appear Here</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2">Image of the Navokta Team organizing this event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Enrollment Form Component
export default function WowEnrollForm() {
  const [participationType, setParticipationType] = useState("team");
  const [teamSize, setTeamSize] = useState(3);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    altPhone: "",
    upiId: "",
    members: Array(5).fill({ name: "", role: "", institution: "" }),
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Since localStorage is not supported in this environment, we'll skip the useEffect for loading data
  // In your actual Next.js app, you can uncomment and use the localStorage functionality

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMemberChange = (index, field, value) => {
    if (index < 0 || index >= formData.members.length) return;
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData((prev) => ({ ...prev, members: updatedMembers }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    // Prepare final data
    const submissionData = {
      ...formData,
      participationType,
      members: participationType === "solo"
        ? [formData.members[0]]
        : formData.members.slice(0, teamSize).filter(m => m.name),
    };

    try {
      // In a real app, you would save to localStorage or make an API call here
      // localStorage.setItem('enrollmentData', JSON.stringify(submissionData));
      setSaveSuccess(true);

      // Simulate redirect after 1 second
      setTimeout(() => {
        // router.push('/enroll/payment');
        console.log("Would redirect to payment page with data:", submissionData);
      }, 1000);

    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save your data. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <OrganizerHeader />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        {/* Background Blobs */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] max-w-[384px] max-h-[384px] bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 sm:opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] max-w-[384px] max-h-[384px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 sm:opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] max-w-[384px] max-h-[384px] bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 sm:opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8 relative z-10">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-3xl shadow-lg sm:shadow-2xl border border-gray-700 overflow-hidden">
            {/* Decorative Overlays */}
            <div className="absolute inset-0 opacity-5 sm:opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-600 rounded-full filter blur-xl sm:blur-3xl mix-blend-overlay"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-600 rounded-full filter blur-xl sm:blur-3xl mix-blend-overlay"></div>
            </div>

            {/* Form Content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="text-center mb-6 sm:mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 mb-4 sm:mb-6 shadow-md">
                  <FaUser className="text-xl sm:text-2xl text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {participationType === "solo" ? "Solo Registration" : "Team Registration"}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
                  {participationType === "solo"
                    ? "Join the ultimate coding battle on your own"
                    : "Join the ultimate coding battle with your team"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
                {/* Personal Info */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500"></div>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:gap-5">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-purple-400 text-sm sm:text-base" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder={participationType === "solo" ? "Your Name" : "Team Leader Name"}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-purple-400 text-sm sm:text-base" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder={participationType === "solo" ? "Your Email" : "Leader Email"}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-purple-400 text-sm sm:text-base" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder={participationType === "solo" ? "Your Phone" : "Leader Phone"}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                      />
                    </div>
                    {participationType === "team" && (
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUsers className="text-purple-400 text-sm sm:text-base" />
                        </div>
                        <input
                          type="text"
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleInputChange}
                          required
                          placeholder="Team Name"
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment & Contact */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
                    Payment & Contact
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:gap-5">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-blue-400 text-sm sm:text-base" />
                      </div>
                      <input
                        type="tel"
                        name="altPhone"
                        value={formData.altPhone}
                        onChange={handleInputChange}
                        placeholder="Alternate Phone"
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaIdCard className="text-blue-400 text-sm sm:text-base" />
                      </div>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        required
                        placeholder="UPI ID (e.g. user@upi)"
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Participation Type */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-500"></div>
                    Participation Type
                  </h3>

                  <div className="mb-4 sm:mb-6">
                    <label className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                      Select how you want to participate
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setParticipationType("solo")}
                        className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all ${
                          participationType === "solo"
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        Solo Participant
                      </button>
                      <button
                        type="button"
                        onClick={() => setParticipationType("team")}
                        className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all ${
                          participationType === "team"
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        Team Participation
                      </button>
                    </div>
                  </div>

                  {/* Team Section */}
                  {participationType === "team" && (
                    <>
                      <div className="mb-6 sm:mb-8">
                        <label className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                          Team Size
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          {[3, 4, 5].map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => setTeamSize(size)}
                              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all ${
                                teamSize === size
                                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              }`}
                            >
                              {size} Members
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-5">
                          Team Members Details
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                          {[...Array(teamSize)].map((_, index) => {
                            const member = formData.members[index] || { name: "", role: "", institution: "" };
                            return (
                              <div key={index} className="p-3 sm:p-5 bg-gray-700/50 rounded-lg border border-gray-600">
                                <h5 className="font-medium text-white mb-3 flex items-center gap-2">
                                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs font-bold">
                                    {index + 1}
                                  </div>
                                  {index === 0 ? "Team Leader" : `Member ${index + 1}`}
                                </h5>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                  <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                      <FaUser className="text-gray-400 text-xs sm:text-sm" />
                                    </div>
                                    <input
                                      type="text"
                                      value={member.name}
                                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                                      required
                                      placeholder="Full Name"
                                      className="w-full pl-8 sm:pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                    />
                                  </div>
                                  <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                      <FaUserTag className="text-gray-400 text-xs sm:text-sm" />
                                    </div>
                                    <input
                                      type="text"
                                      value={member.role}
                                      onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                                      required
                                      placeholder="Role (Developer, Designer, etc.)"
                                      className="w-full pl-8 sm:pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                    />
                                  </div>
                                  <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                      <FaUniversity className="text-gray-400 text-xs sm:text-sm" />
                                    </div>
                                    <input
                                      type="text"
                                      value={member.institution}
                                      onChange={(e) => handleMemberChange(index, 'institution', e.target.value)}
                                      required
                                      placeholder="College/Institution/Coaching"
                                      className="w-full pl-8 sm:pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Solo Section */}
                  {participationType === "solo" && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 sm:p-5 bg-gray-700/50 rounded-lg border border-gray-600">
                        <h5 className="font-medium text-white mb-3 flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs font-bold">
                            1
                          </div>
                          Your Details
                        </h5>
                        <div className="grid grid-cols-1 gap-3 sm:gap-4">
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUser className="text-gray-400 text-xs sm:text-sm" />
                            </div>
                            <input
                              type="text"
                              value={formData.members[0]?.name || ""}
                              onChange={(e) => handleMemberChange(0, 'name', e.target.value)}
                              required
                              placeholder="Full Name"
                              className="w-full pl-8 sm:pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />
                          </div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUserTag className="text-gray-400 text-xs sm:text-sm" />
                            </div>
                            <input
                              type="text"
                              value={formData.members[0]?.role || ""}
                              onChange={(e) => handleMemberChange(0, 'role', e.target.value)}
                              required
                              placeholder="Your Role"
                              className="w-full pl-8 sm:pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />
                          </div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUniversity className="text-gray-400 text-xs sm:text-sm" />
                            </div>
                            <input
                              type="text"
                              value={formData.members[0]?.institution || ""}
                              onChange={(e) => handleMemberChange(0, 'institution', e.target.value)}
                              required
                              placeholder="Your College/Institution"
                              className="w-full pl-8 sm:pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSaving ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaSave /> Save & Continue
                      </>
                    )}
                  </button>
                  {saveSuccess && (
                    <div className="mt-3 p-2 bg-green-900/30 border border-green-800 rounded-lg text-green-400 text-center text-xs sm:text-sm animate-fadeIn">
                      Saved! Redirecting to Registration...
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
}