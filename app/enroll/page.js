"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaIdCard, FaUserTag, FaSave, FaUniversity } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WowEnrollForm() {
  const router = useRouter();
  const [participationType, setParticipationType] = useState("team");
  const [teamSize, setTeamSize] = useState(3);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    altPhone: "",
    upiId: "",
    members: Array(5).fill({ name: "", role: "", institution: "" })
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('enrollmentData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        const fullMembersArray = Array(5).fill({ name: "", role: "", institution: "" }).map((_, index) => {
          return parsedData.members?.[index] ? { 
            ...parsedData.members[index],
            institution: parsedData.members[index].institution || ""
          } : { name: "", role: "", institution: "" };
        });
        
        const savedType = parsedData.members && parsedData.members.length === 1 ? "solo" : "team";
        
        setFormData({
          ...parsedData,
          members: fullMembersArray
        });
        
        setParticipationType(savedType);
        
        if (savedType === "team" && parsedData.members) {
          const filledMembers = parsedData.members.filter(member => member.name || member.role);
          setTeamSize(Math.max(3, Math.min(5, filledMembers.length)));
        }
      } catch (e) {
        console.warn("Failed to parse saved enrollment data", e);
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMemberChange = (index, field, value) => {
    if (index >= 0 && index < formData.members.length) {
      const updatedMembers = [...formData.members];
      updatedMembers[index] = {
        ...updatedMembers[index],
        [field]: value
      };
      setFormData(prev => ({
        ...prev,
        members: updatedMembers
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    const submissionData = {
      ...formData,
      members: participationType === "solo" 
        ? [formData.members[0]]
        : formData.members.slice(0, teamSize)
    };

    try {
      localStorage.setItem('enrollmentData', JSON.stringify(submissionData));
      setSaveSuccess(true);
      router.push('/enroll/payment');
    } catch (error) {
      console.error("Error saving form:", error);
      alert("Failed to save registration. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>    
      <Header /> 
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        {/* Mobile-optimized background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] max-w-[384px] max-h-[384px] bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 sm:opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] max-w-[384px] max-h-[384px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 sm:opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] max-w-[384px] max-h-[384px] bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 sm:opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8 relative z-10">
          {/* Mobile-optimized card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-3xl shadow-lg sm:shadow-2xl border border-gray-700 overflow-hidden">
            {/* Simplified decorative elements for mobile */}
            <div className="absolute inset-0 opacity-5 sm:opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-600 rounded-full filter blur-xl sm:blur-3xl mix-blend-overlay"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-600 rounded-full filter blur-xl sm:blur-3xl mix-blend-overlay"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Mobile-optimized header */}
              <div className="text-center mb-6 sm:mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 mb-4 sm:mb-6 shadow-md sm:shadow-lg">
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
                {/* Personal Information - Mobile optimized */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-sm sm:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500"></div>
                    <span>Personal Information</span>
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
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment & Contact - Mobile optimized */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-sm sm:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
                    <span>Payment & Contact</span>
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
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
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
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Participation Type Selector - Mobile optimized */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-sm sm:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-500"></div>
                    <span>Participation Type</span>
                  </h3>

                  <div className="mb-4 sm:mb-6">
                    <label className="block text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                      Select how you want to participate
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setParticipationType("solo")}
                        className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
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
                        className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                          participationType === "team"
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        Team Participation
                      </button>
                    </div>
                  </div>

                  {/* Team Configuration */}
                  {participationType === "team" && (
                    <>
                      {/* Team Size Selector */}
                      <div className="mb-6 sm:mb-8">
                        <label className="block text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                          Select Team Size
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          {[3, 4, 5].map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => setTeamSize(size)}
                              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
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

                      {/* Team Members */}
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-5">
                          Team Members Details
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                          {[...Array(teamSize)].map((_, index) => {
                            const member = formData.members[index] || { name: "", role: "", institution: "" };
                            return (
                              <div
                                key={index}
                                className="p-3 sm:p-5 bg-gray-700/50 rounded-lg sm:rounded-xl border border-gray-600 transition-all duration-300 hover:bg-gray-700/70"
                              >
                                <h5 className="font-medium text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
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
                                      className="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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
                                      className="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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
                                      className="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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

                  {/* Solo Participant Fields */}
                  {participationType === "solo" && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 sm:p-5 bg-gray-700/50 rounded-lg sm:rounded-xl border border-gray-600 transition-all duration-300 hover:bg-gray-700/70">
                        <h5 className="font-medium text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
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
                              className="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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
                              placeholder="Your Role (Developer, Designer, etc.)"
                              className="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
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
                              placeholder="Your College/Institution/Coaching"
                              className="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button - Mobile optimized */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full py-3 px-4 sm:py-3.5 sm:px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSaving ? (
                      <>
                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaSave className="text-sm sm:text-base" /> Save & Continue to Payment
                      </>
                    )}
                  </button>

                  {saveSuccess && (
                    <div className="mt-3 p-2 sm:p-3 bg-green-900/30 border border-green-800 rounded-lg text-green-400 text-center animate-fadeIn text-xs sm:text-sm">
                      Registration saved successfully! Redirecting...
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}