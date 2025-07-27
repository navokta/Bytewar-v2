"use client";
import React, { useEffect, useState } from "react";

export default function YouTubeStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const API_KEY = "AIzaSyDAmA45c0sQEOf5oiXRxk081Jc6LejAVik";
        const VIDEO_ID = "gFM8s2i2emQ";
        const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${VIDEO_ID}&key=${API_KEY}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch YouTube stats");
        const data = await response.json();
        setStats(data.items[0]?.statistics);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <div className="text-center text-gray-500">Loading...</div>;

  // 🔧 Function to render a stat card
  const renderStatItem = (value, label) => (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📊 YouTube Video Stats</h2>
      <div className="grid grid-cols-3 gap-4 mt-8">
              {renderStatItem(stats.viewCount, 'Views')}
              {renderStatItem(stats.likeCount, 'Likes')}
              {renderStatItem(stats.commentCount, 'Comments')}
            </div> 
    </div>
  );
}
