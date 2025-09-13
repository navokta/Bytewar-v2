"use client";
import AdminAuth from "@/components/AdminAuth";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function NewEntryForm() {
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const student = {
      uuid: uuidv4(),
      name: e.target.name.value,
      email: e.target.email.value,
      college: e.target.college.value,
      certificateLink: e.target.certificateLink.value,
    };

    try {
      // Simulate API call with animation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      const data = await res.json();
      if (data.success) {
        setMsg(`✅ Entry Added! Open Certificate: /certificate/${student.uuid}`);
        e.target.reset();
        
        // Success animation
        if (formRef.current) {
          formRef.current.classList.add("animate-success-pulse");
          setTimeout(() => {
            if (formRef.current) formRef.current.classList.remove("animate-success-pulse");
          }, 2000);
        }
      } else {
        setMsg("❌ Error: " + data.error);
        // Error animation
        if (formRef.current) {
          formRef.current.classList.add("animate-error-shake");
          setTimeout(() => {
            if (formRef.current) formRef.current.classList.remove("animate-error-shake");
          }, 1000);
        }
      }
    } catch (error) {
      setMsg("❌ Network Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Particle animation effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-blue-500 rounded-full animate-particles';
      document.getElementById('particle-container').appendChild(particle);
      
      // Random position and animation
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      
      particle.style.left = `${startX}%`;
      particle.style.top = `${startY}%`;
      particle.style.animationDuration = `${duration}s`;
      
      // Remove after animation completes
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };
    
    // Create particles periodically
    const particleInterval = setInterval(createParticle, 300);
    
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div id="particle-container" className="absolute inset-0 overflow-hidden"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-laser-line"></div>
      
      <div className="relative z-10 py-8 px-4 flex items-center justify-center min-h-screen">
        <div ref={formRef} className="w-full max-w-2xl bg-gray-800/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 transform transition-all duration-500 animate-glow-in">
          {/* Header with animated gradient */}
          <div className="relative p-2 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
            <h2 className="text-2xl font-bold text-white text-center py-4 relative z-10 flex items-center justify-center">
              <span className="icon-orb animate-pulse mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                </svg>
              </span>
              ADD NEW STUDENT ENTRY
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6 relative">
            {/* Holographic grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              {/* Name Field */}
              <div className={`form-field-container ${activeInput === 'name' ? 'active' : ''}`}>
                <label htmlFor="name" className="form-field-label">
                  <span className="label-icon">👤</span>
                  FULL NAME
                </label>
                <input 
                  id="name"
                  name="name" 
                  placeholder="Enter student's full name" 
                  required 
                  className="form-field-input"
                  disabled={isSubmitting}
                  onFocus={() => setActiveInput('name')}
                  onBlur={() => setActiveInput(null)}
                />
                <div className="form-field-underline">
                  <div className="form-field-glow"></div>
                </div>
              </div>
              
              {/* Email Field */}
              <div className={`form-field-container ${activeInput === 'email' ? 'active' : ''}`}>
                <label htmlFor="email" className="form-field-label">
                  <span className="label-icon">📧</span>
                  EMAIL ADDRESS
                </label>
                <input 
                  id="email"
                  name="email" 
                  type="email"
                  placeholder="Enter student's email" 
                  required 
                  className="form-field-input"
                  disabled={isSubmitting}
                  onFocus={() => setActiveInput('email')}
                  onBlur={() => setActiveInput(null)}
                />
                <div className="form-field-underline">
                  <div className="form-field-glow"></div>
                </div>
              </div>
              
              {/* College Field */}
              <div className={`form-field-container ${activeInput === 'college' ? 'active' : ''}`}>
                <label htmlFor="college" className="form-field-label">
                  <span className="label-icon">🏫</span>
                  COLLEGE/INSTITUTION
                </label>
                <input 
                  id="college"
                  name="college" 
                  placeholder="Enter college name" 
                  required 
                  className="form-field-input"
                  disabled={isSubmitting}
                  onFocus={() => setActiveInput('college')}
                  onBlur={() => setActiveInput(null)}
                />
                <div className="form-field-underline">
                  <div className="form-field-glow"></div>
                </div>
              </div>
              
              {/* Certificate Link Field */}
              <div className={`form-field-container ${activeInput === 'certificateLink' ? 'active' : ''}`}>
                <label htmlFor="certificateLink" className="form-field-label">
                  <span className="label-icon">📄</span>
                  CERTIFICATE LINK
                </label>
                <input 
                  id="certificateLink"
                  name="certificateLink" 
                  type="url"
                  placeholder="Paste Google Drive certificate link" 
                  required 
                  className="form-field-input"
                  disabled={isSubmitting}
                  onFocus={() => setActiveInput('certificateLink')}
                  onBlur={() => setActiveInput(null)}
                />
                <div className="form-field-underline">
                  <div className="form-field-glow"></div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="pt-4 relative z-10">
              <button 
                type="submit" 
                className="w-full h-14 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      SAVE ENTRY
                    </>
                  )}
                </span>
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="w-full h-full bg-white/10 group-hover:bg-white/5 group-hover:scale-110 transition-transform duration-500 transform origin-center"></div>
                </div>
              </button>
            </div>
          </form>
          
          {/* Message Display */}
          {msg && (
            <div className={`px-8 pb-8 relative z-10 ${msg.includes('✅') ? 'animate-success-pulse' : 'animate-error-shake'}`}>
              <div className={`p-4 rounded-lg border backdrop-blur-md ${msg.includes('✅') ? 'bg-green-900/30 text-green-300 border-green-500/30' : 'bg-red-900/30 text-red-300 border-red-500/30'}`}>
                <div className="flex items-center">
                  <span className="mr-2">{msg.includes('✅') ? '✅' : '❌'}</span>
                  {msg.replace('✅', '').replace('❌', '')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes glow-in {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes laser-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes particles {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0; }
        }
        
        @keyframes success-pulse {
          0% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(72, 187, 120, 0); }
          100% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0); }
        }
        
        @keyframes error-shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes input-glow {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        
        .animate-glow-in {
          animation: glow-in 0.7s ease-out;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-laser-line {
          animation: laser-line 2s linear infinite;
        }
        
        .animate-particles {
          --tx: ${Math.random() * 100 - 50}px;
          --ty: ${Math.random() * 100 - 50}px;
          animation: particles 3s linear infinite;
        }
        
        .animate-success-pulse {
          animation: success-pulse 2s infinite;
        }
        
        .animate-error-shake {
          animation: error-shake 0.5s;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .form-field-container {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .form-field-container.active {
          transform: translateY(-2px);
        }
        
        .form-field-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #9CA3AF;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }
        
        .form-field-container.active .form-field-label {
          color: #60A5FA;
        }
        
        .label-icon {
          margin-right: 0.5rem;
          font-size: 0.875rem;
        }
        
        .form-field-input {
          width: 100%;
          background: rgba(31, 41, 55, 0.6);
          border: 1px solid rgba(75, 85, 99, 0.5);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: white;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .form-field-input:focus {
          outline: none;
          background: rgba(31, 41, 55, 0.8);
          border-color: rgba(96, 165, 250, 0.5);
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
        }
        
        .form-field-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .form-field-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .form-field-container.active .form-field-underline {
          transform: scaleX(1);
        }
        
        .form-field-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .form-field-container.active .form-field-glow {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default function ProtectedNewEntry() {
  return (
    <AdminAuth type="new-entry">
      <NewEntryForm />
    </AdminAuth>
  );
}