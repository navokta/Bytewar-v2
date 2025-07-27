"use client";
import EnrollForm from "../../components/EnrollForm";
import PaymentSection from "../../components/PaymentSection";

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative px-6 py-2 bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-full">
                <span className="text-purple-400 font-bold">BYTEWAR 2023</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              ENROLL FOR BYTEWAR
            </span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            Join India's most <span className="text-purple-400 font-bold">prestigious coding battle</span> and showcase your skills to industry leaders
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Glow effect for EnrollForm */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
              <EnrollForm />
            </div>
          </div>
          
          {/* Glow effect for PaymentSection */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
              <PaymentSection />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
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
  );
}