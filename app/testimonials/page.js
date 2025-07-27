// app/testimonials/page.js
"use client";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Header from '../../components/Header';



// Updated testimonials data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Computer Science Student",
    institution: "IIT Delhi",
    content: "ByteWar completely transformed my approach to competitive programming. The challenges are well-curated, and the community support is incredible. I went from struggling with basic problems to confidently tackling hard ones in just a few months!",
    rating: 5
  },
  {
    id: 2,
    name: "Rohan Patel",
    role: "Software Engineer",
    institution: "Google",
    content: "As someone who interviews candidates regularly, I appreciate how ByteWar mimics real interview scenarios. The timed challenges and leaderboard foster a healthy competitive environment that pushes you to improve. Highly recommended for interview prep!",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Competitive Programmer",
    institution: "CodeChef 6*",
    content: "ByteWar's unique battle format makes practicing algorithms fun and engaging. The variety of problems keeps things fresh, and I've learned so much from analyzing other participants' solutions. It's become an essential part of my training routine.",
    rating: 4
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Final Year Student",
    institution: "IIIT Hyderabad",
    content: "Before ByteWar, I found competitive programming intimidating. The platform's gradual difficulty progression and detailed explanations helped me build confidence. The 'Warzone' events are particularly motivating - nothing like a good coding battle to get the adrenaline pumping!",
    rating: 5
  },
  {
    id: 5,
    name: "Sneha Gupta",
    role: "Data Analyst",
    institution: "Microsoft",
    content: "I joined ByteWar to improve my problem-solving skills for work. The structured learning paths and peer discussions have been invaluable. My efficiency in tackling complex data problems has significantly improved. The skills I've gained here are directly applicable to my job.",
    rating: 4
  },
  {
    id: 6,
    name: "Karan Mehta",
    role: "Bootcamp Graduate",
    institution: "Self-Taught Developer",
    content: "As a self-taught developer, ByteWar provided the structured practice I needed. The community is welcoming to beginners, and the mentors are always ready to help. It bridged the gap between theoretical knowledge and practical application perfectly.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-400 mb-6">
            Voices from the Warzone
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Hear from our community members about their ByteWar journey and achievements.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
                
                {/* Testimonial Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2">
                  {/* Quote Icon */}
                  <div className="text-purple-500 mb-4">
                    <FaQuoteLeft className="text-3xl" />
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'} mr-1 text-lg`} 
                      />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0 border-2 border-white/20">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-purple-400">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.institution}</p>
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 animate-gradient-x">
                Share Your ByteWar Story
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Have an experience with ByteWar you'd like to share? We'd love to hear from you and feature your story in our community spotlight!
            </p>
          </div>

          {/* CTA Button */}
          <div className="group relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <a 
              href="mailto:navokta@gmail.com" 
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-full text-lg shadow-2xl hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h14V6H5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10l2 2 4-4" />
                </svg>
                Submit Your Testimonial
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />

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