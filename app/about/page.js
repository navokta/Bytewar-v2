// app/about/page.js
"use client";
import Link from 'next/link';
import { FaCode, FaUsers, FaTrophy, FaRocket, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroSection from '../../components/about/HeroSection';
import Mission from '../../components/about/Mission';
import Feature from '../../components/about/Feature';
import Team from '../../components/about/Team';
// import TermsSection from '@/components/TermsSection';
// import Enroll from '../../components/about/Enroll';

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
      <HeroSection/>

      {/* Mission Section */}
      <Mission/>

      {/* <TermsSection /> */}

        {/* Team Section */}
      <Team/>

      {/* Features Section */}
      <Feature/>

        {/* Footer Component */}
        <Footer />
    </div>
  );
}