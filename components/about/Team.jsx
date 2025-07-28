import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Bhavy from "../../public/bhavy.jpg";
import Sakshi from "../../public/Sakshi.png";
import Bhumi from "../../public/bhumi.png";
import Abhinav from "../../public/Abhinav.jpg";
import Kratakshi from "../../public/kratakshi.png";
import Fazal from "../../public/fazal.png";


const WowTeamSection = () => {
  const teamMembers = [
    {
      name: "Bhavy Sharma",
      role: "Lead Developer",
      bio: "Former Google engineer with a passion for competitive programming and education.",
      image: Bhavy,
      social: {
        linkedin: "https://www.linkedin.com/in/bhavy-sharma/"
      }
    },
    {
      name: "Sakshi Jain",
      role: "UI/ UX Designer",
      bio: "UX expert dedicated to creating the best coding experience for developers.",
      image: Sakshi,
      social: {
        linkedin: "https://www.linkedin.com/in/sakshi-jain-34a7b7355/"
      }
    },
    {
      name: "Bhumi Singhal",
      role: "Manager",
      bio: "Full-stack wizard who builds the infrastructure powering ByteWar.",
      image: Bhumi,
      social: {
        linkedin: "https://www.linkedin.com/in/bhoomi-singhal-103a9b327/"
      }
    },
    {
      name: "Abhinav Kaushik",
      role: "Editor",
      bio: "Competitive programming champion who designs our challenging problems.",
      image: Abhinav,
      social: {
        linkedin: "https://www.linkedin.com/in/abhinav-kaushik-b49a93371/"
      }
    },
    {
      name: "Kratakshi Bhardwaj",
      role: "Researcher",
      bio: "Cloud infrastructure expert ensuring ByteWar runs smoothly at scale.",
      image: Kratakshi,
      social: {
        linkedin: "https://www.linkedin.com/in/kratakshi-bhardwaj-332a7b2a7/"
      }
    },
    {
      name: "Mohd. Fazal Ali",
      role: "Backend Developer",
      bio: "Building and nurturing our global community of passionate programmers.",
      image: Fazal,
      social: {
        linkedin: "https://www.linkedin.com/in/mohd-fazal-ali/"
      }
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              MEET OUR TEAM
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Passionate individuals dedicated to building the best competitive programming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
              
              {/* Team Member Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full flex flex-col items-center text-center transform transition-all duration-500 group-hover:-translate-y-2">
                {/* Profile Image */}
                <div className="mb-6 relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-purple-500/50 transition-all duration-500">
                    {typeof member.image === 'string' ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        width={96}
                        height={96}
                      />
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className="text-md font-semibold text-purple-400 mb-2">
                  {member.role}
                </p>
                
                {/* Bio */}
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 mb-4 flex-grow">
                  {member.bio}
                </p>
                
                {/* Social Icons - Only LinkedIn */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-blue-600/50 hover:scale-110 transition-all duration-300 cursor-pointer group/icon"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover/icon:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* "Become the Next" Card */}
          <Link href="/about/newmember" className="block group relative" passHref>
            {/* Glow Effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
            
            <div className="relative h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20 border-2 border-dashed border-purple-500/50 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-solid group-hover:border-cyan-400 group-hover:from-purple-600/30 group-hover:via-blue-600/30 group-hover:to-cyan-500/30">
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                  Become the Next
                </span>
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                Join our team and make a difference!
              </p>
              <div className="mt-2 inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
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
    </section>
  );
};

export default WowTeamSection;