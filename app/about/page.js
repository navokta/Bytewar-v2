// app/about/page.js
import Link from 'next/link';
import { FaCode, FaUsers, FaTrophy, FaRocket, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export const metadata = {
  title: 'About ByteWar | Coding Competition Platform',
  description: 'Learn about ByteWar, the ultimate coding warzone for competitive programmers. Discover our mission, features, and community.',
};

export default function AboutPage() {
  const features = [
    {
      icon: <FaCode className="text-2xl text-purple-400" />,
      title: "Competitive Coding",
      description: "Participate in thrilling coding battles and challenges designed to test your algorithmic skills."
    },
    {
      icon: <FaUsers className="text-2xl text-blue-400" />,
      title: "Community Driven",
      description: "Join a vibrant community of coders, share knowledge, and grow together through collaboration."
    },
    {
      icon: <FaTrophy className="text-2xl text-yellow-400" />,
      title: "Earn Recognition",
      description: "Climb the leaderboard, win badges, and showcase your coding prowess to the world."
    },
    {
      icon: <FaRocket className="text-2xl text-green-400" />,
      title: "Skill Development",
      description: "Accelerate your learning with curated problems and real-time feedback on your solutions."
    }
  ];

  const teamMembers = [
    // Replace with actual team member data
    { name: "Bhavy Sharma", role: "Founder & Lead Developer", bio: "Passionate about competitive programming and building developer tools." },
    { name: "Sakshi Jain", role: "UI Developer", bio: "Ensures every coder feels welcome and supported in our community." },
    { name: "Mohd. Fazal Ali", role: "Backend Developer", bio: "Creates challenging and educational problems for our competitions." },
    { name: "Next you", role: "UI/UX Designer", bio: "Crafts intuitive and engaging user experiences for coders." },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        <Header />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-green-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6">
            Welcome to ByteWar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            The ultimate coding warzone where programmers battle to sharpen their skills and rise to the top.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/coding" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300">
              Enter the Warzone
            </Link>
            <Link href="/enroll" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-700 text-white font-bold rounded-full shadow-lg hover:from-blue-700 hover:to-cyan-800 transform hover:scale-105 transition-all duration-300">
              Join ByteWar
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700 rounded-2xl p-1 shadow-xl">
                <div className="bg-gray-900 rounded-2xl h-64 md:h-80 flex items-center justify-center">
                  <div className="text-6xl text-purple-500 opacity-50">⚔️</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">Empowering Coders</h3>
              <p className="text-gray-300 mb-4">
                At ByteWar, we believe that the best way to master programming is through practice, competition, and community.
                Our platform is designed to be the ultimate arena where coders can push their limits.
              </p>
              <p className="text-gray-300">
                We aim to create an inclusive environment where beginners can start their journey and experts can find their next challenge,
                fostering a community that celebrates learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose ByteWar?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:border-purple-500/50 hover:bg-gray-800/70 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 bg-gray-700 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Team Section */}
      <section className="py-16 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Passionate individuals dedicated to building the best competitive programming experience.
            </p>
          </div>
          {/* Updated Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Existing Team Members (3) */}
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 hover:border-blue-500/50 hover:bg-gray-800/70 flex flex-col"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
            {/* "Become the Next" Card */}
            <Link href="/about/newmember" className="block group">
              <div className="h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20 border-2 border-dashed border-purple-500/50 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 hover:border-solid hover:border-cyan-400 hover:from-purple-600/30 hover:via-blue-600/30 hover:to-cyan-500/30">
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-2">
                  Become the Next
                </h3>
                <p className="text-gray-300 text-lg">Join our team and make a difference!</p>
                <div className="mt-4 inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  Apply Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Battle?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Become part of the ByteWar community and take your coding skills to the next level.
          </p>
          <Link href="/enroll" className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full text-lg shadow-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300">
            Enroll Now
          </Link>
        </div>
      </section>
        {/* Footer Component */}
        <Footer />
    </div>
  );
}