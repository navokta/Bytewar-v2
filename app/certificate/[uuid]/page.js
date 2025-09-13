import { connectDB } from "@/utils/db";
import Student from "@/lib/models/Student";

export default async function CertificatePage({ params }) {
  const { uuid } = params;
  await connectDB();

  const student = await Student.findOne({ uuid });

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 80 + 20}px`,
                height: `${Math.random() * 80 + 20}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${Math.random() * 6 + 4}s`
              }}
            ></div>
          ))}
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 text-center transform hover:scale-[1.02] transition-transform duration-500">
            {/* Main icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl mb-6 shadow-lg border border-red-500/30">
              <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Certificate Not Found
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              The certificate with UUID <span className="font-mono text-sm bg-gray-800/50 px-2 py-1 rounded-md">{uuid}</span> 
              could not be found in our system.
            </p>
            
            {/* Error illustration */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-full flex items-center justify-center border-2 border-dashed border-gray-600/50">
                <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            
            {/* Action button */}
            <a
              href="/admin"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25 border border-transparent"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Dashboard
            </a>
            
            {/* Footer note */}
            <p className="text-gray-500 text-xs mt-8">
              This certificate may have been deleted or never created.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 120 + 10}px`,
              height: `${Math.random() * 120 + 10}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${Math.random() * 8 + 6}s`
            }}
          ></div>
        ))}
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Glowing container with subtle border gradient */}
        <div className="relative group">
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
            
            {/* Header section with gradient background and floating elements */}
            <div className="relative bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-8 md:p-12 border-b border-gray-700/30">
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Main content */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6 shadow-lg border-2 border-white/20">
                  <span className="text-4xl">🎓</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  Academic Certificate
                </h1>
                
                <p className="text-cyan-200 text-lg font-medium">
                  Official Verification Document
                </p>
                
                {/* Verification badge */}
                <div className="mt-6 inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">Verified & Authenticated</span>
                </div>
              </div>
            </div>
            
            {/* Content section with modern card design */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left column */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/40 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Name</p>
                      <p className="text-white text-lg font-semibold mt-1">{student.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/40 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Email</p>
                      <p className="text-white text-lg font-semibold mt-1">{student.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/40 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Institution</p>
                      <p className="text-white text-lg font-semibold mt-1">{student.college}</p>
                    </div>
                  </div>
                </div>
                
                {/* Right column */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/40 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Certificate ID</p>
                      <p className="text-white text-lg font-semibold mt-1 font-mono bg-gray-800/50 px-3 py-1 rounded-lg">{student.uuid}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/40 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Verification Status</p>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                        <span className="text-green-300 font-medium">Valid</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/40 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Issued On</p>
                      <p className="text-white text-lg font-semibold mt-1">{new Date(student.createdAt || Date.now()).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Download button with advanced styling */}
              <div className="text-center mt-8">
                <a
                  href={student.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-cyan-500/30 border border-transparent hover:border-cyan-500/50 group"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Digital Certificate
                </a>
                
                {/* Hover tooltip */}
                <div className="mt-4 text-gray-400 text-sm">
                  Click to view/download the official PDF document
                </div>
              </div>
            </div>
            
            {/* Footer with security info */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-950/50 p-6 border-t border-gray-700/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">
                    Blockchain-verified digital signature
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {new Date().toLocaleTimeString()} UTC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}