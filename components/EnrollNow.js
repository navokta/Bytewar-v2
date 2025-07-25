import Link from "next/link";
import { FaArrowRight, FaRocket } from "react-icons/fa";

export default function EnrollNow() {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-green-100 via-lime-200 to-yellow-200 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-green-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Rocket Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full shadow-lg animate-bounce">
            <FaRocket className="text-white text-3xl" />
          </div>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">Journey?</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join us and take the first step toward your goals. Unlock your potential with ByteWar.
        </p>

        {/* Enroll Now Button */}
        <Link
          href="/enroll"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold px-10 py-5 rounded-full text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out group"
        >
          <span>Enroll Now</span>
          <FaArrowRight className="mt-[2px] group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        
        {/* Decorative Elements */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
}