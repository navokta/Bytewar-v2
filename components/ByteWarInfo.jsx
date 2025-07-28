import Link from "next/link";
import React from "react";

const WowByteWarInfo = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              WHAT IS BYTEWAR?
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

            <div className="pl-8 space-y-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                ByteWar is a{" "}
                <span className="text-purple-400 font-bold">
                  one-of-a-kind hackathon held across India
                </span>
                , created to inspire students like you to turn your ideas into
                real solutions for everyday problems. It’s more than just a
                competition — it’s a movement to spark innovation, creativity,
                and the spirit of problem-solving. ByteWar gives you the perfect
                stage to learn, build, and showcase your skills while making a
                real difference in the world. So dream big, code with purpose,
                and be the change. Your ideas can shape the future — and ByteWar
                is where it begins.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-lg">
                Since it began, ByteWar has become a powerful platform to
                inspire{" "}
                <span className="text-pink-400 font-bold">
                  creative and out-of-the-box thinking
                </span>{" "}
                among students — especially those in engineering and tech. With
                each edition, ByteWar has grown stronger, reaching more students
                and creating bigger impact. It’s not just about showing off your
                skills — it’s about learning, growing, and working together with
                industry experts, government bodies, and mentors to solve real
                problems that matter. ByteWar is where bright minds come
                together to innovate, collaborate, and create a better tomorrow.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link href={"/enroll"}>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                Join ByteWar Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
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
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default WowByteWarInfo;
