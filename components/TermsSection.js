import Link from "next/link";
import React from "react";

const TermsSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-soft-light filter blur-[120px] opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600 rounded-full mix-blend-soft-light filter blur-[90px] opacity-5 animate-blob animation-delay-2000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px] bg-center"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-gradient-x">
              Terms & Conditions
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ByteWar is built on fairness, innovation, and respect. Review our guidelines to ensure a smooth experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Code of Conduct */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-overlay opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-900/30 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Code of Conduct</h3>
              </div>
             <ul className="space-y-4 text-gray-300">
  <li className="flex items-start">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1"></div>
    <span className="ml-3">Respect all participants, organizers, and staff</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1"></div>
    <span className="ml-3">Zero tolerance for harassment or discrimination</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1"></div>
    <span className="ml-3">Maintain professional behavior at all times</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1"></div>
    <span className="ml-3">Be inclusive and supportive of all backgrounds</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1"></div>
    <span className="ml-3">Collaborate with integrity and honesty</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1"></div>
    <span className="ml-3">Follow all platform and event rules</span>
  </li>
    <li className="flex items-start">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1"></div>
    <span className="ml-3">Registration fees are non-refundable.</span>
  </li>
</ul>

            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden relative">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-overlay opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-900/30 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Intellectual Property</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start"><div className="w-2 h-2 bg-indigo-400 rounded-full mt-1"></div><span className="ml-3">You retain ownership of your work until submission</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-indigo-400 rounded-full mt-1"></div><span className="ml-3">Upon submission, the rights transfer to ByteWar</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-indigo-400 rounded-full mt-1"></div><span className="ml-3">ByteWar can use your project for promotions, research, or commercial use</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-indigo-400 rounded-full mt-1"></div><span className="ml-3">You agree not to take legal action against ByteWar for how your project is used</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-indigo-400 rounded-full mt-1"></div><span className="ml-3">Proper attribution required for any third-party content used</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-indigo-400 rounded-full mt-1"></div><span className="ml-3">Only original work created during ByteWar is permitted</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-indigo-400 rounded-full mt-1"></div><span className="ml-3">Violation of rules may lead to disqualification</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <Link href="/TermsAndCondition">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 flex items-center group">
                <span>View Complete Terms & Conditions</span>
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              By registering for ByteWar, you agree to comply with all competition rules and guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 40px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default TermsSection;
