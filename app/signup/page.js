"use client";
import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone, FaShieldAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const specialChar = /[^A-Za-z0-9]/.test(password);
    setRequirements({ length, uppercase, lowercase, specialChar });
  }, [password]);

  const isPasswordValid = Object.values(requirements).every(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email || !password || !phone) {
      setError('Please fill all required fields');
      return;
    }

    if (!isPasswordValid) {
      setError('Please fulfill all password requirements.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, phone }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push('/verify');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

 const renderRequirement = (label, fulfilled) => {
  let color = 'text-gray-500';
  let Icon = FaShieldAlt;

  if (submitted) {
    if (fulfilled) {
      color = 'text-green-600';
      Icon = FaCheckCircle;
    } else {
      color = 'text-red-600';
      Icon = FaTimesCircle;
    }
  }

  return (
    <div className={`flex items-center text-sm ${color}`}>
      <Icon className="mr-2" />
      {label}
    </div>
  );
};


  return (
       <div className='w-full bg-gray-900' >
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-200 opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-2xl"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
            <h1 className="text-3xl font-bold text-white">Create your account</h1>
            <p className="text-purple-100 mt-2">Welcome! Please fill all required fields</p>
          </div>
          
          {/* Card Body */}
          <div className="p-6 sm:p-8">
            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Link href="#"
                // onClick={() => handleOAuth('google')}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="text-red-500" />
                Google
              </Link>
              <Link href="#"
                // onClick={() => handleOAuth('github')}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <FaGithub className="text-gray-800" />
                GitHub
              </Link>
            </div>
            
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={phone}
                      onChange={setPhone}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200"
                      inputComponent={({ ...rest }) => (
                        <input 
                          className="w-full pl-10 pr-3 py-3 border-0 focus:ring-0"
                          required
                          {...rest} 
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                      {showPassword ? <FaEyeSlash className="text-gray-400 hover:text-gray-600" /> : <FaEye className="text-gray-400 hover:text-gray-600" />}
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {renderRequirement("At least 8 characters", requirements.length)}
                    {renderRequirement("One uppercase letter", requirements.uppercase)}
                    {renderRequirement("One lowercase letter", requirements.lowercase)}
                    {renderRequirement("One special character", requirements.specialChar)}
                  </div>
                </div>

                {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </>
                  ) : (
                    'Sign Up'
                  )}
                </button>
              </form>
            </div>

            <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-purple-600 font-medium hover:text-purple-800">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
