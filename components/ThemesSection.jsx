import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const WowThemesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const themes = [
    {
      id: "blockchain-cybersecurity",
      title: "BLOCKCHAIN & CYBERSECURITY",
      description:
        "Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.",
      icon: "🔐",
      color: "from-purple-600 to-indigo-600",
      glow: "shadow-purple-500/30",
    },
    {
      id: "smart-education",
      title: "SMART EDUCATION",
      description:
        "Smart education, a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/30",
    },
    {
      id: "disaster-management",
      title: "DISASTER MANAGEMENT",
      icon: "🌪️",
      description:
        "Disaster management includes ideas related to risk mitigation, planning and management before, after or during a disaster.",
      color: "from-green-500 to-emerald-500",
      glow: "shadow-green-500/30",
    },
    {
      id: "environmental-sustainability",
      title: "ENVIRONMENTAL SUSTAINABILITY",
      description:
        "Focus on sustainable practices to protect the environment and promote ecological balance.",
      icon: "🌍",
      color: "from-yellow-500 to-amber-500",
      glow: "shadow-yellow-500/30",
    },
    {
      id: "healthcare-innovation",
      title: "HEALTHCARE INNOVATION",
      description:
        "Innovative solutions in healthcare to improve patient care, diagnostics, and treatment methods.",
      icon: "🏥",
      color: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/30",
    },
    {
      id: "artificial-intelligence",
      title: "ARTIFICIAL INTELLIGENCE",
      description:
        "Explore cutting-edge AI solutions for real-world problems and future technological advancement.",
      icon: "🤖",
      color: "from-red-500 to-orange-500",
      glow: "shadow-red-500/30",
    },
  ];

  // Auto-scroll functionality with dynamic direction
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex =
          direction === 1
            ? (prevIndex + 1) % themes.length
            : (prevIndex - 1 + themes.length) % themes.length;
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [themes.length, direction, isHovered, isDragging]);

  const goToSlide = (index) => {
    if (isDragging) return; // Prevent navigation during drag
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + themes.length) % themes.length
    );
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);
    
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = clientX - dragStart.x;
    
    setDragOffset(deltaX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    const threshold = 20; // Reduced minimum drag distance to trigger navigation
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide(); // Dragged right, go to previous
      } else {
        nextSlide(); // Dragged left, go to next
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  // Mouse event handlers
  const handleMouseDown = (e) => handleDragStart(e);
  const handleMouseMove = (e) => handleDragMove(e);
  const handleMouseUp = (e) => handleDragEnd(e);
  const handleMouseLeave = (e) => handleDragEnd(e);

  // Touch event handlers
  const handleTouchStart = (e) => handleDragStart(e);
  const handleTouchMove = (e) => handleDragMove(e);
  const handleTouchEnd = (e) => handleDragEnd(e);

  // Handle card click - only trigger if not dragging
  const handleCardClick = (index, e) => {
    e.stopPropagation();
    if (!isDragging) {
      goToSlide(index);
    }
  };

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, dragOffset]);

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
          ref={carouselRef}
          className="relative overflow-visible select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={(e) => {
            // Only start drag if not clicking on a button or link
            if (!e.target.closest('button') && !e.target.closest('a')) {
              handleMouseDown(e);
            }
          }}
          onTouchStart={(e) => {
            // Only start drag if not touching a button or link
            if (!e.target.closest('button') && !e.target.closest('a')) {
              handleTouchStart(e);
            }
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Floating Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 opacity-20 blur-3xl animate-pulse animation-delay-3000"></div>

          {/* Carousel Wrapper */}
          <div className="relative h-[500px] perspective-1000">
            {themes.map((theme, index) => {
              const offset =
                (index - currentIndex + themes.length) % themes.length;
              const isCenter = offset === 0;
              const isNext = offset === 1 || offset === 1 - themes.length;
              const isPrev = offset === -1 || offset === themes.length - 1;

              let positionClass = "";
              let zIndex = 1;
              let scale = 0.8;
              let rotate = 0;
              let translateX = 0;

              // Apply drag offset to center card
              if (isCenter && isDragging) {
                translateX = dragOffset * 0.8; // Increased drag sensitivity for more responsive movement
              }

              if (isCenter) {
                positionClass = "z-30 scale-100 rotate-0";
                zIndex = 3;
                scale = 1;
              } else if (isNext) {
                positionClass = "z-20 scale-90 translate-x-1/4 rotate-y-12";
                zIndex = 2;
                scale = 0.9;
                rotate = 12;
              } else if (isPrev) {
                positionClass = "z-20 scale-90 -translate-x-1/4 -rotate-y-12";
                zIndex = 2;
                scale = 0.9;
                rotate = -12;
              } else {
                positionClass = "z-10 scale-75 opacity-50";
                zIndex = 1;
                scale = 0.75;
              }

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform-gpu ${
                    isDragging && isCenter ? '' : positionClass
                  }`}
                  style={{
                    transform: `translateZ(${
                      isCenter ? "50px" : "0"
                    }) scale(${scale}) rotateY(${rotate}deg) translateX(${translateX}px)`,
                    zIndex: zIndex,
                    transition: isDragging && isCenter ? 'none' : 'all 0.7s ease-in-out',
                  }}
                >
                  <div
                    className={`h-full flex items-center justify-center ${
                      isCenter ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                    style={{ cursor: isDragging ? 'grabbing' : 'default' }}
                  >
                    <div
                      className={`relative w-full max-w-lg mx-auto transform transition-all duration-500 ${
                        isCenter ? "scale-105" : "scale-95"
                      }`}
                    >
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                          theme.color
                        } opacity-70 blur-xl ${
                          theme.glow
                        } transition-all duration-700 ${
                          isCenter ? "opacity-100 scale-110" : "opacity-50"
                        }`}
                      ></div>

                      {/* Card */}
                      <div
                        className={`relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                          isCenter ? "shadow-2xl" : "shadow-lg"
                        }`}
                      >
                        {/* Animated Border */}
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.color} opacity-30 animate-pulse`}
                        ></div>

                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                          {/* Clickable area for icon, title, and description */}
                          <div 
                            className="cursor-pointer flex flex-col items-center space-y-6"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(index, e);
                            }}
                          >
                            {/* Icon with Animation */}
                            <div
                              className={`flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${
                                theme.color
                              } text-4xl transform transition-all duration-500 ${
                                isCenter ? "scale-110 rotate-12" : "scale-100"
                              }`}
                            >
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
                          </div>

                          {/* Floating Action Button - Completely separate from clickable area */}
                          {isCenter && !isDragging && (
                            <div 
                              className="relative z-50 pointer-events-auto"
                              onClick={(e) => e.stopPropagation()}
                              onMouseDown={(e) => e.stopPropagation()}
                              onTouchStart={(e) => e.stopPropagation()}
                            >
                              <Link 
                                href={`../themes/${theme.id}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button
                                  className={`px-6 py-3 bg-gradient-to-r ${theme.color} text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${theme.glow} pointer-events-auto`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    // Force navigation using router or window location
                                    window.location.href = `../themes/${theme.id}`;
                                  }}
                                  onMouseDown={(e) => e.stopPropagation()}
                                  onTouchStart={(e) => e.stopPropagation()}
                                >
                                  Explore Theme
                                </button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - Visible only on laptop/desktop */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-gray-900/50 backdrop-blur-lg border border-white/20 items-center justify-center text-white hover:bg-gray-800/70 transition-all duration-300 group"
          >
            <svg
              className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-gray-900/50 backdrop-blur-lg border border-white/20 items-center justify-center text-white hover:bg-gray-800/70 transition-all duration-300 group"
          >
            <svg
              className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Drag Indicator - Visible only on mobile */}
          {isDragging && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {dragOffset > 10 ? '← Swipe to go back' : dragOffset < -10 ? 'Swipe to go next →' : 'Swipe left or right'}
              </div>
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center mt-16 space-x-3 relative z-20">
            {themes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${themes[index].color} w-8 scale-125 shadow-lg`
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/*This is the Button Of all Theme*/}
        <div className="text-center mt-16">
          <Link href={"/themes"}>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              View All Themes
            </button>
          </Link>
        </div>
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