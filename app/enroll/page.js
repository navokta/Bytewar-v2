"use client";
import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaIdCard, FaUserTag,FaArrowRight } from "react-icons/fa";
import {  } from "react-icons/fa";

export default function EnrollForm() {
  const [teamSize, setTeamSize] = useState(3);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    altPhone: "",
    upiId: "",
    members: Array(5).fill({ name: "", role: "" })
  });

  // Initialize form data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('enrollmentData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        // Set team size based on saved data
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
    const size = parseInt(e.target.value);
    setTeamSize(size);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      members: updatedMembers
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in localStorage
    const submissionData = {
      ...formData,
      members: formData.members.slice(0, teamSize)
    };
    localStorage.setItem('enrollmentData', JSON.stringify(submissionData));
    alert("Registration data saved successfully!");
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
        Team Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-purple-400 mb-3">Personal Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <FaUser className="text-purple-500" /> Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <FaEnvelope className="text-purple-500" /> Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <FaPhone className="text-purple-500" /> Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <FaUsers className="text-purple-500" /> Team Name *
              </label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </fieldset>

        {/* Payment & Contact Section */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-purple-400 mb-3">Payment & Contact</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <FaPhone className="text-purple-500" /> Alternative Phone
              </label>
              <input
                type="tel"
                name="altPhone"
                value={formData.altPhone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <FaIdCard className="text-purple-500" /> UPI ID *
              </label>
              <input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleInputChange}
                required
                placeholder="user@bank"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </fieldset>

        {/* Team Configuration */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-purple-400 mb-3">Team Configuration</legend>
          <div>
            <label className=" text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
              <FaUsers className="text-purple-500" /> Team Size *
            </label>
            <select
              value={teamSize}
              onChange={handleTeamSizeChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {[3, 4, 5].map(size => (
                <option key={size} value={size}>{size} Members</option>
              ))}
            </select>
          </div>
        </fieldset>

        {/* Team Members Section */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-purple-400 mb-3">Team Members</legend>
          <div className="space-y-4">
            {[...Array(teamSize)].map((_, index) => (
              <div key={index} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                  <FaUserTag className="text-purple-500" /> Member {index + 1}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Name *</label>
                    <input
                      type="text"
                      value={formData.members[index].name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Role *</label>
                    <input
                      type="text"
                      value={formData.members[index].role}
                      onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                      required
                      placeholder="Developer, Designer, etc."
                      className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Next <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
}