"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const WowVideoHero = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  
  // YouTube Stats State
  const [stats, setStats] = useState({
    viewCount: "2.1M+",
    likeCount: "45K+",
    commentCount: "3.2K",
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const [statsError, setStatsError] = useState(null);

  // Load YouTube IFrame API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: 'gFM8s2i2emQ',
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0
        },
        events: {
          'onReady': () => {
            // Player is ready
          },
          'onStateChange': (event) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          }
        }
      });
      setPlayer(newPlayer);
    };

    return () => {
      if (window.YT && player) {
        player.destroy();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!player) return;
    
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  // Fetch YouTube Stats Effect
  useEffect(() => {
    const fetchYouTubeStats = async () => {
      setLoadingStats(true);
      setStatsError(null);

      try {
        const API_KEY = "AIzaSyDAmA45c0sQEOf5oiXRxk081Jc6LejAVik";
        const VIDEO_ID = "gFM8s2i2emQ";
        const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${VIDEO_ID}&key=${API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          let errorMsg = `YouTube API error: ${response.status} ${response.statusText}`;
          try {
            const errorData = await response.json();
            if (errorData.error && errorData.error.message) {
              errorMsg = `YouTube API error: ${errorData.error.message}`;
            }
          } catch (e) {}
          throw new Error(errorMsg);
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
          throw new Error("Video not found or no statistics available.");
        }

        const statistics = data.items[0].statistics;

        const formatCount = (count) => {
          const num = parseInt(count, 10);
          if (num >= 1_000_000) {
            return `${(num / 1_000_000).toFixed(1)}M`;
          }
          if (num >= 1_000) {
            return `${(num / 1_000).toFixed(1)}K`;
          }
          return num.toLocaleString();
        };

        setStats({
          viewCount: formatCount(statistics.viewCount),
          likeCount: formatCount(statistics.likeCount),
          commentCount: formatCount(statistics.commentCount),
        });
      } catch (err) {
        console.error("Error fetching YouTube stats:", err);
        setStatsError(err.message);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchYouTubeStats();
  }, []);

  const renderStatItem = (value, label) => (
    <div className="text-center p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
      <div className="text-3xl font-bold text-orange-400">
        {loadingStats ? (
          <div className="inline-block h-8 w-16 bg-gray-700 rounded animate-pulse"></div>
        ) : (
          value
        )}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ["#8B5CF6", "#3B82F6", "#06B6D4", "#10B981", "#F59E0B"][
                    Math.floor(Math.random() * 5)
                  ]
                } 0%, transparent 70%)`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Video Section */}
          <div className="relative group">
            <div
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-105"
              onClick={togglePlay}
            >
              {/* YouTube Player Container */}
              <div ref={playerRef} className="absolute inset-0 w-full h-full"></div>

              {/* Overlay with play button when paused */}
              {!isPlaying && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
                    <div className="absolute inset-0 opacity-20">
                      <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                        {[...Array(64)].map((_, i) => (
                          <div
                            key={i}
                            className="border border-white/5"
                            style={{
                              animation: `pulse ${1 + Math.random() * 2}s infinite ${Math.random() * 2}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-24 h-24 bg-red-600 rounded-full animate-ping opacity-75"></div>
                      <div className="relative w-24 h-24 bg-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-2xl">
                        <svg
                          className="w-12 h-12 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      BYTEWAR 2025
                    </h3>
                    <p className="text-gray-300 text-xl">
                      Official Trailer - The Future of Hackathons
                    </p>
                  </div>
                </>
              )}

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_20px_rgba(139,92,246,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Video Stats */}
            {statsError && (
              <div className="mt-2 text-center text-sm text-red-400">
                <span className="sr-only">Stats Error: {statsError}</span>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {renderStatItem(stats.viewCount, "Views")}
              {renderStatItem(stats.likeCount, "Likes")}
              {renderStatItem(stats.commentCount, "Comments")}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                  BYTEWAR
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">
                India's most{" "}
                <span className="text-orange-400 font-bold">
                  prestigious hackathon
                </span>{" "}
                redefining innovation
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4 text-3xl">🚀</div>
                <p className="text-xl text-gray-300">
                  Tackle real-world challenges with the guidance of expert
                  mentors.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4 text-3xl">💰</div>
                <p className="text-xl text-gray-300">
                  Win ₹10,000+ in exciting prizes along with exclusive
                  internship offers.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4 text-3xl">🌍</div>
                <p className="text-xl text-gray-300">
                  Join a national stage with participants from over 26 states of
                  India.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={"/BannerPage"}>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                  Register Now
                </button>
              </Link>
              <Link href={"/themes"}>
                <button className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                  View Themes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes pulse {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default WowVideoHero;