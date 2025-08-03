import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-8 text-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-500 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-blue-500 blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              ByteWar
            </h3>
            <p className="text-gray-300 mb-4 max-w-xs">
              Empowering coders through competition, learning, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/navokta" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/navokta/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/navokta" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/navokta/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a 
                  href="mailto:navokta@gmail.com" 
                >
                  navokta@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Hansi, Haryana - 125033</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} ByteWar. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400 mr-2">Made with</p>
            <span className="text-red-500 animate-pulse">❤️</span>
            <p className="text-gray-400 ml-2">for coders by coders.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}