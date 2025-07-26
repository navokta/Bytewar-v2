import React, { useState, useEffect } from 'react';

const ThemesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const themes = [
    {
      title: 'BLOCKCHAIN & CYBERSECURITY',
      description: 'Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.',
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 22h22L12 2z" />
        </svg>
      ),
    },
    {
      title: 'SMART EDUCATION',
      description: 'Smart education, a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 22h22L12 2z" />
        </svg>
      ),
    },
    {
      title: 'DISASTER MANAGEMENT',
      description: 'Disaster management includes ideas related to risk mitigation, planning and management before, after or during a disaster.',
      icon: (
        <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 22h22L12 2z" />
        </svg>
      ),
    },
    {
      title: 'ENVIRONMENTAL SUSTAINABILITY',
      description: 'Focus on sustainable practices to protect the environment and promote ecological balance.',
      icon: (
        <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 22h22L12 2z" />
        </svg>
      ),
    },
    {
      title: 'HEALTHCARE INNOVATION',
      description: 'Innovative solutions in healthcare to improve patient care, diagnostics, and treatment methods.',
      icon: (
        <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 22h22L12 2z" />
        </svg>
      ),
    },
    {
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Explore cutting-edge AI solutions for real-world problems and future technological advancement.',
      icon: (
        <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 22h22L12 2z" />
        </svg>
      ),
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [themes.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + themes.length) % themes.length);
  };

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">THEMES</h2>
          <p className="text-xl text-gray-300">No problem is too big... No idea is too small</p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Carousel Wrapper */}
          <div className="relative h-96">
            {/* Slides */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {themes.map((theme, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 h-full border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 mx-auto max-w-2xl">
                    <div className="flex flex-col items-center text-center space-y-6">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-20 h-20 bg-orange-500/10 rounded-full">
                        {theme.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-orange-400">{theme.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed">{theme.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 ml-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 mr-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {themes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;