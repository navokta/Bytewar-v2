// app/testimonials/page.js
import { FaQuoteLeft, FaStar, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


export const metadata = {
  title: 'Testimonials | ByteWar',
  description: 'Hear what our community members say about their experience with ByteWar.',
};

// Dummy testimonials data - replace with real testimonials
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Computer Science Student",
    institution: "IIT Delhi",
    content: "ByteWar completely transformed my approach to competitive programming. The challenges are well-curated, and the community support is incredible. I went from struggling with basic problems to confidently tackling hard ones in just a few months!",
    rating: 5,
    avatar: null // We'll use initials if no avatar
  },
  {
    id: 2,
    name: "Rohan Patel",
    role: "Software Engineer",
    institution: "Google",
    content: "As someone who interviews candidates regularly, I appreciate how ByteWar mimics real interview scenarios. The timed challenges and leaderboard foster a healthy competitive environment that pushes you to improve. Highly recommended for interview prep!",
    rating: 5,
    avatar: null
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Competitive Programmer",
    institution: "CodeChef 6*",
    content: "ByteWar's unique battle format makes practicing algorithms fun and engaging. The variety of problems keeps things fresh, and I've learned so much from analyzing other participants' solutions. It's become an essential part of my training routine.",
    rating: 4,
    avatar: null
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Final Year Student",
    institution: "IIIT Hyderabad",
    content: "Before ByteWar, I found competitive programming intimidating. The platform's gradual difficulty progression and detailed explanations helped me build confidence. The 'Warzone' events are particularly motivating - nothing like a good coding battle to get the adrenaline pumping!",
    rating: 5,
    avatar: null
  },
  {
    id: 5,
    name: "Sneha Gupta",
    role: "Data Analyst",
    institution: "Microsoft",
    content: "I joined ByteWar to improve my problem-solving skills for work. The structured learning paths and peer discussions have been invaluable. My efficiency in tackling complex data problems has significantly improved. The skills I've gained here are directly applicable to my job.",
    rating: 4,
    avatar: null
  },
  {
    id: 6,
    name: "Karan Mehta",
    role: "Bootcamp Graduate",
    institution: "Self-Taught Developer",
    content: "As a self-taught developer, ByteWar provided the structured practice I needed. The community is welcoming to beginners, and the mentors are always ready to help. It bridged the gap between theoretical knowledge and practical application perfectly.",
    rating: 5,
    avatar: null
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">

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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg 
                          transition-all duration-300 ease-in-out
                          hover:shadow-2xl hover:scale-[1.02] hover:border-purple-500/50 hover:bg-gray-800/70
                          flex flex-col"
              >
                {/* Quote Icon */}
                <div className="text-purple-500 mb-4">
                  <FaQuoteLeft className="text-2xl" />
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1">
                  <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'} mr-1`} 
                    />
                  ))}
                </div>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-purple-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Share Your ByteWar Story</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Have an experience with ByteWar you'd like to share? We'd love to hear from you!
          </p>
          <a 
            href="mailto:navokta@gmail.com" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
          >
            Submit Your Testimonial
          </a>
        </div>
      </section>

      {/* Stats Section (Optional) */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-400">Active Coders</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50K+</div>
              <div className="text-gray-400">Problems Solved</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}