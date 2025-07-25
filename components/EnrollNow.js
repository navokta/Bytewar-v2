import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // install with: npm install react-icons

export default function EnrollNow() {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-300 flex items-center justify-center">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Start Your Journey?</h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-8">Join us and take the first step toward your goals.</p>

        {/* Enroll Now Button */}
        <Link
          href="/enroll"
          className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Enroll Now
          <FaArrowRight className="mt-[2px]" />
        </Link>
      </div>
    </div>
  );
}