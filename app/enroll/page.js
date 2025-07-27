// components/WowEnrollForm.jsx
"use client";
import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaIdCard, FaUserTag, FaSave } from "react-icons/fa";

export default function WowEnrollForm() {
  const [teamSize, setTeamSize] = useState(3);
  // Initialize members array with 5 empty objects upfront
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    altPhone: "",
    upiId: "",
    members: [{ name: "", role: "" }, { name: "", role: "" }, { name: "", role: "" }, { name: "", role: "" }, { name: "", role: "" }]
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('enrollmentData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Ensure members array always has 5 slots
        const fullMembersArray = Array(5).fill({ name: "", role: "" }).map((defaultMember, index) => {
          return parsedData.members && parsedData.members[index] ? parsedData.members[index] : defaultMember;
        });
        
        setFormData({
          ...parsedData,
          members: fullMembersArray
        });
        
        if (parsedData.members) {
          const filledMembers = parsedData.members.filter(member => member.name || member.role);
          setTeamSize(Math.max(3, Math.min(5, filledMembers.length)));
        }
      } catch (e) {
        console.warn("Failed to parse saved enrollment data", e);
      }
    }
  }, []);

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value, 10);
    if (size >= 3 && size <= 5) {
      setTeamSize(size);
    }
  };

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

const handleSubmit = async (e) => { // Make function async
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    // Prepare data to send (only the members for the selected team size)
    const submissionData = {
      ...formData,
      members: formData.members.slice(0, teamSize)
    };

    try {
      // 1. Send data to the API route for processing and email sending
      const response = await fetch('/api/send-registration-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        // Handle API errors (e.g., email service issues)
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", errorData.message || response.statusText);
        throw new Error(errorData.message || `Registration failed: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Server response:", result); // Optional: Log server success message

      // 2. If API call is successful, save locally and show success
      localStorage.setItem('enrollmentData', JSON.stringify(submissionData)); // Save locally if needed
      setSaveSuccess(true);

      // Optional: Reset form or redirect on success
      // setFormData({ /* initial state */ });

    } catch (error) {
      // 3. Handle network errors or other unexpected issues
      console.error("Submission error:", error);
      alert(`An error occurred during registration: ${error.message || "Please try again later."}`);
    } finally {
      // 4. Always stop the saving indicator
      setIsSaving(false);
      // Hide success message after 3 seconds (if successful)
      if (saveSuccess) {
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    }
  };

  return (
    <div className="relative group">
      {/* Glow Effect for the entire card - Darker Purple/Blue */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-900 to-blue-900 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
      
      {/* Main Card - Dark Gray/Black with subtle border */}
      <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-6 md:p-8">
        {/* Header with Icon - Darker theme */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-900 to-gray-900 mb-4 shadow-lg border border-white/10">
            <FaUser className="text-2xl text-purple-400" /> {/* Purple icon */}
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Team Registration
          </h2>
          <p className="text-gray-400 mt-2">Join the ultimate coding battle</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section - Dark theme */}
          <div className="relative group/section">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 opacity-0 group-hover/section:opacity-100 blur transition-opacity duration-300"></div>
            <div className="relative bg-gray-900/30 rounded-2xl p-5 border border-white/5"> {/* Darker background */}
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div> {/* Purple dot */}
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Inputs - Dark theme */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-purple-400" /> {/* Purple icon */}
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Alex Johnson"
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-800/70 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-purple-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="alex@example.com"
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-800/70 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-purple-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-800/70 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUsers className="text-purple-400" />
                  </div>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                    placeholder="The Debuggers"
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-800/70 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment & Contact Section - Dark theme */}
          <div className="relative group/section">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-900/40 to-gray-900/40 opacity-0 group-hover/section:opacity-100 blur transition-opacity duration-300"></div>
            <div className="relative bg-gray-900/30 rounded-2xl p-5 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div> {/* Blue dot */}
                Payment & Contact
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-blue-400" /> {/* Blue icon */}
                  </div>
                  <input
                    type="tel"
                    name="altPhone"
                    value={formData.altPhone}
                    onChange={handleInputChange}
                    placeholder="Alternate contact (Optional)"
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-800/70 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaIdCard className="text-blue-400" />
                  </div>
                  <input
                    type="text"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleInputChange}
                    required
                    placeholder="user@bank"
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-800/70 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Configuration & Members - Dark theme */}
          <div className="relative group/section">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-gray-800/40 to-gray-900/40 opacity-0 group-hover/section:opacity-100 blur transition-opacity duration-300"></div>
            <div className="relative bg-gray-900/30 rounded-2xl p-5 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div> {/* Gray dot */}
                Team Configuration
              </h3>
              
              {/* Team Size Selector - Dark theme */}
              <div className="mb-6">
                <label className="text-gray-400 mb-2 flex items-center gap-2">
                  <FaUsers className="text-gray-400" />
                  Select Team Size
                </label>
                <div className="flex gap-2">
                  {[3, 4, 5].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
                        teamSize === size
                          ? 'bg-gradient-to-r from-purple-700 to-blue-700 text-white shadow-lg border border-white/20' // Darker active button
                          : 'bg-gray-800/70 text-gray-400 hover:bg-gray-700/70 border border-white/10' // Darker inactive button
                      }`}
                    >
                      {size} Members
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Members - Dark theme */}
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <FaUserTag className="text-gray-400" />
                  Team Members Details
                </h4>
                <div className="space-y-4">
                  {[...Array(teamSize)].map((_, index) => {
                    const member = formData.members[index] || { name: "", role: "" };
                    return (
                      <div 
                        key={index} 
                        className="p-4 bg-gray-800/50 rounded-xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70" // Darker card
                      >
                        <h5 className="font-medium text-white mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-gray-700 flex items-center justify-center text-xs font-bold border border-white/10"> {/* Darker badge */}
                            {index + 1}
                          </div>
                          Member {index + 1}
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUser className="text-gray-500 text-sm" />
                            </div>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                              required
                              placeholder="Full Name"
                              className="w-full pl-10 pr-4 py-2.5 bg-gray-700/70 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                            />
                          </div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUserTag className="text-gray-500 text-sm" />
                            </div>
                            <input
                              type="text"
                              value={member.role}
                              onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                              required
                              placeholder="Role (Dev, Designer, etc.)"
                              className="w-full pl-10 pr-4 py-2.5 bg-gray-700/70 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button with Status - Dark theme */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-900 to-blue-900 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
            
            <button
              type="submit"
              disabled={isSaving}
              className="relative w-full py-4 px-6 bg-gradient-to-r from-purple-700 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden group/btn border border-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSaving ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <FaSave /> Save Registration
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Success Message - Dark theme */}
            {saveSuccess && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-800/30 rounded-lg text-green-400 text-center animate-fadeIn">
                Registration saved successfully!
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}