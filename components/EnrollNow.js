import Link from "next/link";
import { FaArrowRight, FaRocket, FaStar } from "react-icons/fa";

export default function EnrollNow() {
  return (
    <div className="w-full py-20 bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Stars Decorative Elements */}
        <div className="absolute top-10 left-10 text-purple-400 opacity-20">
          <FaStar className="text-4xl" />
        </div>
        <div className="absolute top-20 right-20 text-blue-400 opacity-20">
          <FaStar className="text-3xl" />
        </div>
        <div className="absolute bottom-20 left-20 text-yellow-400 opacity-20">
          <FaStar className="text-5xl" />
        </div>
        
        {/* Rocket Icon with Glow Effect */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg animate-bounce relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-md opacity-50"></div>
            <FaRocket className="text-white text-3xl relative z-10" />
          </div>
        </div>
        
        {/* Heading with Border Effect */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight relative">
          <span className="relative inline-block">
            Ready to Start Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 block">
              Journey?
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"></span>
          </span>
        </h2>

        {/* Subheading with Highlight Box */}
        <div className="mb-10">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed bg-gray-800 bg-opacity-50 rounded-2xl p-6 border border-gray-700">
            Join us and take the first step toward your goals. 
            <span className="text-purple-300 font-semibold"> Unlock your potential</span> with ByteWar.
          </p>
        </div>

        {/* Enroll Now Button with Pulse Effect */}
        <Link
          href="/enroll"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-full text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out group relative overflow-hidden"
        >
          <span className="relative z-10">Enroll Now</span>
          <FaArrowRight className="mt-[2px] group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
        
        {/* Decorative Elements - Changed to Purple/Blue Theme */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
}