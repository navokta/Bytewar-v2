// app/complete-profile/page.js
'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaShieldAlt, FaPhone, FaLock, FaUserPlus, FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function CompleteProfile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
    number: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  useEffect(() => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const number = /[0-9]/.test(password);
    setRequirements({ length, uppercase, lowercase, specialChar, number });
  }, [password]);

  const isPasswordValid = Object.values(requirements).every(Boolean);

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setError('');

    if (!phone || !password) {
      setError('Please fill all required fields');
      setLoading(false);
      return;
    }

    if (!isPasswordValid) {
      setError('Please fulfill all password requirements.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/complete-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          phone, 
          password,
          email: session?.user?.email
        }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save profile');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderRequirement = (label, fulfilled) => {
    const color = submitted
      ? fulfilled ? 'text-green-400' : 'text-red-400'
      : 'text-gray-400';

    const Icon = submitted
      ? fulfilled ? FaCheckCircle : FaTimesCircle
      : FaShieldAlt;

    return (
      <li className={`flex items-center text-sm ${color} mb-1 transition-colors duration-200`}>
        <Icon className="mr-2 mt-0.5 flex-shrink-0" />
        {label}
      </li>
    );
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              Complete Profile
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Just a few more details to unlock full access
          </p>
        </div>

        {/* Form Card */}
        <div className="group relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-900/80 to-indigo-900/80 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
          
          {/* Card */}
          <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <FaUserPlus className="text-3xl text-white" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className={`relative w-full bg-gray-700/50 border ${isPhoneFocused ? 'border-purple-500 ring-2 ring-purple-500/30' : 'border-gray-600'} rounded-lg transition duration-200 hover:border-gray-500`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-500" />
                  </div>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={phone}
                    onChange={setPhone}
                    onFocus={() => setIsPhoneFocused(true)}
                    onBlur={() => setIsPhoneFocused(false)}
                    className="phone-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200 hover:border-gray-500"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:text-gray-200 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ?
                      <FaEyeSlash className="text-gray-400 hover:text-gray-200" /> :
                      <FaEye className="text-gray-400 hover:text-gray-200" />}
                  </button>
                </div>
                <ul className="mt-3 space-y-1" aria-live="polite">
                  {renderRequirement("At least 8 characters", requirements.length)}
                  {renderRequirement("One uppercase letter", requirements.uppercase)}
                  {renderRequirement("One lowercase letter", requirements.lowercase)}
                  {renderRequirement("One special character", requirements.specialChar)}
                  {renderRequirement("One number", requirements.number)}
                </ul>
              </div>

              {error && (
                <div className="p-3 bg-red-900/50 border border-red-700 text-red-200 rounded-lg text-sm flex items-start">
                  <FaShieldAlt className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-purple-500/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="relative z-10">
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Complete Profile'
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            By completing your profile, you agree to our <a href="#" className="text-purple-400 hover:underline">Terms</a> and <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
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
        .phone-input {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .phone-input .PhoneInputCountry {
          margin-left: 10px;
          margin-right: 8px;
          position: relative;
          align-self: stretch;
          display: flex;
          align-items: center;
        }
        .phone-input .PhoneInputCountrySelect {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;
          border: 0;
          opacity: 0;
          cursor: pointer;
        }
        .phone-input .PhoneInputCountryIconImg {
          width: 20px;
          height: 15px;
          display: flex;
        }
        .phone-input .PhoneInputInput {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          color: white;
          font-size: 1rem;
          padding: 12px 12px 12px 0;
          outline: none;
        }
        .phone-input .PhoneInputInput::placeholder {
          color: #6B7280;
        }
        .phone-input .PhoneInputCountryIcon--border {
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}