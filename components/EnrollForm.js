// components/EnrollForm.jsx (or similar)
"use client";

import React, { useState } from 'react';
import { FaUser, FaPhone, FaCity, FaGraduationCap, FaCode, FaEnvelope, FaIdCard } from 'react-icons/fa';

export default function WowEnrollForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    college: '',
    language: '',
    teamName: '',
    participantId: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', form);
  };

  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
      
      <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
            Registration Details
          </h2>
          <p className="text-gray-400">Fill in your information to join ByteWar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-purple-400" />
            </div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-purple-400" />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="text-purple-400" />
            </div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* State Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCity className="text-purple-400" />
            </div>
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              required
              placeholder="State"
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* College Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaGraduationCap className="text-purple-400" />
            </div>
            <input
              name="college"
              value={form.college}
              onChange={handleChange}
              required
              placeholder="College Name"
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Participant ID Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaIdCard className="text-purple-400" />
            </div>
            <input
              name="participantId"
              value={form.participantId}
              onChange={handleChange}
              required
              placeholder="Participant ID"
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Language Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCode className="text-purple-400" />
            </div>
            <select
              name="language"
              value={form.language}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm appearance-none"
            >
              <option value="" disabled>Select Preferred Language</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="csharp">C#</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
            </select>
          </div>

          {/* Team Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-purple-400" />
            </div>
            <input
              name="teamName"
              value={form.teamName}
              onChange={handleChange}
              placeholder="Team Name (Optional)"
              className="w-full pl-10 pr-4 py-4 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}