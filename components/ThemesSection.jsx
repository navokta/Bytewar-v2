import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const WowThemesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const themes = [
    {
      id: 'blockchain-cybersecurity',
      title: 'BLOCKCHAIN & CYBERSECURITY',
      description: 'Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.',
      icon: '🔐',
      color: 'from-purple-600 to-indigo-600',
      glow: 'shadow-purple-500/30'
    },
    {
      id: 'smart-education',
      title: 'SMART EDUCATION',
      description: 'Smart education, a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/30'
    },
    {
      id: 'disaster-management',
      title: 'DISASTER MANAGEMENT',
      icon: '🌪️',
      description: 'Disaster management includes ideas related to risk mitigation, planning and management before, after or during a disaster.',
      color: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/30'
    },
    {
       id: 'environmental-sustainability',
      title: 'ENVIRONMENTAL SUSTAINABILITY',
      description: 'Focus on sustainable practices to protect the environment and promote ecological balance.',
      icon: '🌍',
      color: 'from-yellow-500 to-amber-500',
      glow: 'shadow-yellow-500/30'
    },
    {
      id: 'healthcare-innovation',
      title: 'HEALTHCARE INNOVATION',
      description: 'Innovative solutions in healthcare to improve patient care, diagnostics, and treatment methods.',
      icon: '🏥',
      color: 'from-pink-500 to-rose-500',
      glow: 'shadow-pink-500/30'
    },
    {
      id: 'artificial-intelligence',
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Explore cutting-edge AI solutions for real-world problems and future technological advancement.',
      icon: '🤖',
      color: 'from-red-500 to-orange-500',
      glow: 'shadow-red-500/30'
    }
  ];

  // Auto-scroll functionality with dynamic direction
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = direction === 1 
          ? (prevIndex + 1) % themes.length 
          : (prevIndex - 1 + themes.length) % themes.length;
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [themes.length, direction, isHovered]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + themes.length) % themes.length);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 mb-4 animate-pulse">
            HACKATHON THEMES
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Unleash your creativity on challenges that matter
          </p>
        </div>

        {/* Main Carousel Container */}
        <div 
          className="relative overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 opacity-20 blur-3xl animate-pulse animation-delay-3000"></div>

          {/* Carousel Wrapper */}
          <div className="relative h-[500px] perspective-1000">
            {themes.map((theme, index) => {
              const offset = (index - currentIndex + themes.length) % themes.length;
              const isCenter = offset === 0;
              const isNext = offset === 1 || offset === 1 - themes.length;
              const isPrev = offset === -1 || offset === themes.length - 1;
              
              let positionClass = '';
              let zIndex = 1;
              let scale = 0.8;
              let rotate = 0;
              
              if (isCenter) {
                positionClass = 'z-30 scale-100 rotate-0';
                zIndex = 3;
                scale = 1;
              } else if (isNext) {
                positionClass = 'z-20 scale-90 translate-x-1/4 rotate-y-12';
                zIndex = 2;
                scale = 0.9;
                rotate = 12;
              } else if (isPrev) {
                positionClass = 'z-20 scale-90 -translate-x-1/4 -rotate-y-12';
                zIndex = 2;
                scale = 0.9;
                rotate = -12;
              } else {
                positionClass = 'z-10 scale-75 opacity-50';
                zIndex = 1;
                scale = 0.75;
              }

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform-gpu ${positionClass}`}
                  style={{
                    transform: `translateZ(${isCenter ? '50px' : '0'}) scale(${scale}) rotateY(${rotate}deg)`,
                    zIndex: zIndex
                  }}
                >
                  <div 
                    className={`h-full flex items-center justify-center cursor-pointer ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    onClick={() => goToSlide(index)}
                  >
                    <div className={`relative w-full max-w-lg mx-auto transform transition-all duration-500 ${
                      isCenter ? 'scale-105' : 'scale-95'
                    }`}>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.color} opacity-70 blur-xl ${theme.glow} transition-all duration-700 ${
                        isCenter ? 'opacity-100 scale-110' : 'opacity-50'
                      }`}></div>
                      
                      {/* Card */}
                      <div className={`relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                        isCenter ? 'shadow-2xl' : 'shadow-lg'
                      }`}>
                        {/* Animated Border */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.color} opacity-30 animate-pulse`}></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                          {/* Icon with Animation */}
                          <div className={`flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${theme.color} text-4xl transform transition-all duration-500 ${
                            isCenter ? 'scale-110 rotate-12' : 'scale-100'
                          }`}>
                            {theme.icon}
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            {theme.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-200 text-lg leading-relaxed">
                            {theme.description}
                          </p>
                          
                          {/* Floating Action Button */}
                          {isCenter && (
                            <Link href={`../themes/${theme.id}`} >
                            <button className={`px-6 py-3 bg-gradient-to-r ${theme.color} text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${theme.glow}`}>
                              Explore Theme
                            </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-gray-900/50 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-gray-800/70 transition-all duration-300 group"
          >
            <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-gray-900/50 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-gray-800/70 transition-all duration-300 group"
          >
            <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-16 space-x-3 relative z-20">
            {themes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${themes[index].color} w-8 scale-125 shadow-lg` 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>



{/*This is the Button Of all Theme*/}
<div className="text-center mt-16">
            <Link href={'/themes'}>
            <button  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              View All Themes
            </button>
            </Link>
          </div>





        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg border border-white/10">
            <div className="text-5xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-xl text-gray-300">Participants</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-lg border border-white/10">
            <div className="text-5xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-xl text-gray-300">Problem Statements</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-red-900/30 backdrop-blur-lg border border-white/10">
            <div className="text-5xl font-bold text-orange-400 mb-2">10,000₹</div>
            <div className="text-xl text-gray-300">In Prizes</div>
          </div>
        </div> */}
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .-rotate-y-12 {
          transform: rotateY(-12deg);
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
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

export default WowThemesSection;