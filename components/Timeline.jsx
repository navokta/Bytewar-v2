import React, { useState, useEffect } from 'react';

const InteractiveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const timelineEvents = [
    {
      date: "15 Oct 2023",
      title: "Registration Opens",
      description: "Secure your spot in the ultimate coding battle. Early birds get exclusive swag!",
      icon: "🚀",
      color: "from-purple-600 to-blue-500"
    },
    {
      date: "25 Oct 2023",
      title: "Team Formation",
      description: "Find your perfect coding partner and form unstoppable teams of up to 4 members.",
      icon: "👥",
      color: "from-blue-500 to-teal-400"
    },
    {
      date: "01 Nov 2023",
      title: "Hackathon Kickoff",
      description: "Grand opening ceremony with keynote speakers and problem statement reveal.",
      icon: "🎯",
      color: "from-teal-400 to-green-500"
    },
    {
      date: "02-03 Nov 2023",
      title: "Intense Coding",
      description: "48 hours of non-stop coding, innovation, and caffeine-fueled creativity.",
      icon: "💻",
      color: "from-green-500 to-yellow-400"
    },
    {
      date: "04 Nov 2023",
      title: "Project Submission",
      description: "Deadline for all project submissions. Last chance to finalize your masterpiece!",
      icon: "📤",
      color: "from-yellow-400 to-orange-500"
    },
    {
      date: "05 Nov 2023",
      title: "Judging Phase",
      description: "Industry experts evaluate projects based on innovation, impact, and technical excellence.",
      icon: "⚖️",
      color: "from-orange-500 to-red-500"
    },
    {
      date: "07 Nov 2023",
      title: "Results & Awards",
      description: "Winners announced with prizes worth $50,000 and internship opportunities!",
      icon: "🏆",
      color: "from-red-500 to-pink-500"
    }
  ];

  // Auto-advance timeline
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % timelineEvents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, timelineEvents.length]);

  const handleEventClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % timelineEvents.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + timelineEvents.length) % timelineEvents.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 mb-3 md:mb-4">
            BYTEWAR TIMELINE
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Journey through the epic coding adventure. Each phase brings you closer to victory!
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line with Glow Effect - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent z-0">
            <div className="absolute inset-0 bg-orange-500 blur-md opacity-30"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-16 relative z-10">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center transition-all duration-700 ease-in-out ${
                  !isMobile && index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${activeIndex === index ? 'scale-105' : 'opacity-80'}`}
                onClick={() => handleEventClick(index)}
              >
                {/* Mobile Date and Icon Container */}
                <div className="md:hidden w-full mb-4 flex items-center justify-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    activeIndex === index 
                      ? `bg-gradient-to-br ${event.color} scale-110 shadow-lg shadow-${event.color.split(' ')[0].replace('from-', '')}/50 ring-2 ring-white/50` 
                      : 'bg-gray-800 border-2 border-gray-700'
                  }`}>
                    {event.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    activeIndex === index ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {event.date}
                  </div>
                </div>

                {/* Event Content Card */}
                <div className={`w-full md:w-5/12 ${!isMobile && index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`p-5 sm:p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 transform hover:-translate-y-2 ${
                    activeIndex === index 
                      ? `bg-gradient-to-br ${event.color} border-white/30 shadow-lg md:shadow-2xl shadow-${event.color.split(' ')[0].replace('from-', '')}/30` 
                      : 'bg-gray-800/50 border-gray-700/50'
                  }`}>
                    <div className={`hidden md:inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                      activeIndex === index ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {event.date}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{event.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200">{event.description}</p>
                  </div>
                </div>

                {/* Central Dot - Desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                    activeIndex === index 
                      ? `bg-gradient-to-br ${event.color} scale-125 shadow-lg shadow-${event.color.split(' ')[0].replace('from-', '')}/50 ring-4 ring-white/50` 
                      : 'bg-gray-800 border-4 border-gray-700 w-12 h-12'
                  }`}>
                    {event.icon}
                  </div>
                </div>

                {/* Empty Space for desktop */}
                <div className="hidden md:block w-2/12"></div>

                {/* Hidden Date Indicator for Alternating Items */}
                <div className="hidden md:block w-5/12">
                  {!isMobile && index % 2 !== 0 && (
                    <div className="text-right pr-12">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        activeIndex === index ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-300'
                      }`}>
                        {event.date}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 md:mt-16 space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-white hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 text-sm sm:text-base"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full font-bold text-white hover:bg-gray-700 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              ← Previous
            </button>
            
            <button 
              onClick={handleNext}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full font-bold text-white hover:bg-gray-700 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 md:mt-10 space-x-2 md:space-x-3 overflow-x-auto py-2 px-4">
          {timelineEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => handleEventClick(index)}
              className={`min-w-[8px] h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 w-6 md:w-8' 
                  : 'bg-gray-700 hover:bg-gray-600 w-2 md:w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;