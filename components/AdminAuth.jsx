"use client";
import { useState, useEffect } from "react";

export default function AdminAuth({ type, children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem(`isAuth-${type}`);
    if (authStatus === "true") {
      setIsAuth(true);
    }
  }, [type]);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    let envEmail, envPass;

    if (type === "new-entry") {
      envEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      envPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    } else if (type === "all-entry") {
      envEmail = process.env.NEXT_PUBLIC_ALL_ENTRY_EMAIL;
      envPass = process.env.NEXT_PUBLIC_ALL_ENTRY_PASSWORD;
    }

    // Simulate API call with setTimeout
    setTimeout(() => {
      if (email === envEmail && password === envPass) {
        setIsAuth(true);
        localStorage.setItem(`isAuth-${type}`, "true");
      } else {
        setError("❌ Invalid credentials");
        // Shake animation effect
        const form = document.getElementById("login-form");
        form.classList.add("animate-shake");
        setTimeout(() => form.classList.remove("animate-shake"), 500);
      }
      setIsLoading(false);
    }, 1000);
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 animate-fade-in">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Admin Login Required</h2>
              <p className="text-gray-500 mt-2">Please enter your credentials to continue</p>
            </div>
            
            <form id="login-form" onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,13A5,5 0 0,1 7,8A5,5 0 0,1 12,3A5,5 0 0,1 17,8A5,5 0 0,1 12,13M12,5A3,3 0 0,0 9,8A3,3 0 0,0 12,11A3,3 0 0,0 15,8A3,3 0 0,0 12,5M21,20V21H3V20C3,16.69 6.69,14 10,14H14C17.31,14 21,16.69 21,20Z" />
                  </svg>
                </div>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email address" 
                  required 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  disabled={isLoading}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                  </svg>
                </div>
                <input 
                  name="password" 
                  type="password" 
                  placeholder="Password" 
                  required 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  disabled={isLoading}
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            
            {error && (
              <div className="mt-6 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 animate-pulse">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}