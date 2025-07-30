'use client';

import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone, FaShieldAlt, FaCheckCircle, FaTimesCircle, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { signIn } from 'next-auth/react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
    number: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const phoneInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const { password } = formData;
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const number = /[0-9]/.test(password);
    setRequirements({ length, uppercase, lowercase, specialChar, number });
  }, [formData.password]);

  const isPasswordValid = Object.values(requirements).every(Boolean);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phone: value || '' }));
    // Maintain focus during typing
    if (phoneInputRef.current) {
      const input = phoneInputRef.current.querySelector('input');
      if (input) input.focus();
    }
  };

  const handlePhoneContainerClick = () => {
    if (phoneInputRef.current) {
      const input = phoneInputRef.current.querySelector('input');
      if (input) {
        input.focus();
        // Move cursor to end of input
        setTimeout(() => {
          input.selectionStart = input.selectionEnd = input.value.length;
        }, 0);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.phone) {
      setError('Please fill all required fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!isPasswordValid) {
      setError('Please fulfill all password requirements.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // if (response.ok) {
      //   const data = await response.json();
      //   router.push(`/complete-profile?email=${formData.email}`);
      // } else {
      //   alert("Signup failed");
      // }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Signup failed with status ${response.status}`);
      }

      const data = await response.json();
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('authToken', data.token);
        router.push('/');
      } else {
        throw new Error(data.message || 'Signup failed');
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
      console.error('Signup error:', err);
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

  return (
    <div>
      <Header />
      <div className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl overflow-hidden text-gray-100">
            <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 p-6 text-center">
              <h1 className="text-3xl font-bold text-white">Create your account</h1>
              <p className="text-purple-200 mt-2">Welcome! Please fill all required fields</p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                  className="flex items-center justify-center gap-2 bg-white/10 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 font-medium hover:bg-white/20 hover:border-gray-500 transition-all duration-300 cursor-pointer group"
                  aria-label="Sign up with Google"
                >
                  <FaGoogle className="text-red-400 group-hover:text-red-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">Google</span>
                </button>
                <button
                  type="button"
                  onClick={() => signIn('github', { callbackUrl: "/" })}
                  className="flex items-center justify-center gap-2 bg-white/10 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 font-medium hover:bg-white/20 hover:border-gray-500 transition-all duration-300 cursor-pointer group"
                  aria-label="Sign up with GitHub"
                >
                  <FaGithub className="text-gray-200 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">GitHub</span>
                </button>
              </div>

              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-600"></div>
                <span className="px-4 text-gray-400 text-sm">OR</span>
                <div className="flex-1 h-px bg-gray-600"></div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-300 text-sm font-medium mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200 hover:border-gray-500"
                        placeholder="First"
                        required
                        aria-required="true"
                        autoComplete="given-name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200 hover:border-gray-500"
                        placeholder="Last"
                        required
                        aria-required="true"
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200 hover:border-gray-500"
                      placeholder="your@email.com"
                      required
                      aria-required="true"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className={`relative w-full bg-gray-700/50 border ${isPhoneFocused ? 'border-purple-500 ring-2 ring-purple-500/30' : 'border-gray-600'
                    } rounded-lg transition duration-200 hover:border-gray-500`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-500" />
                    </div>
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onFocus={() => setIsPhoneFocused(true)}
                      onBlur={() => setIsPhoneFocused(false)}
                      className="phone-input"
                    />
                  </div>

                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-500" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200 hover:border-gray-500"
                      placeholder="••••••••"
                      required
                      aria-required="true"
                      autoComplete="new-password"
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
                  <div className="mb-4 p-3 bg-red-900/50 border border-red-700 text-red-200 rounded-lg text-sm flex items-start">
                    <FaShieldAlt className="mr-2 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-purple-500/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group"
                  aria-label={loading ? "Creating account" : "Sign up"}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    <span className="group-hover:scale-105 transition-transform">Sign Up</span>
                  )}
                </button>
              </form>
            </div>

            <div className="bg-gray-800/30 px-6 py-4 text-center border-t border-gray-700">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-purple-400 font-medium hover:text-purple-300 transition-colors hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        <style jsx global>{`
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
      <Footer />
    </div>
  );
}