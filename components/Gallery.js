import React, { useState } from "react";
import img3 from "../public/img3.jpg";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";  

const galleryItems = [
  { 
    type: "youtube", 
    src: "https://www.youtube.com/embed/gFM8s2i2emQ?si=-OTFECRLGv-6GBUE", 
    title: "ByteWar Event Highlight 1",
    thumbnail: "https://img.youtube.com/vi/gFM8s2i2emQ/maxresdefault.jpg"
  },
  { 
    type: "youtube", 
    src: "https://www.youtube.com/embed/tO38tOeE1lU?si=FHu6FPXgCmwNEwqu", 
    title: "ByteWar Event Highlight 2",
    thumbnail: "https://img.youtube.com/vi/tO38tOeE1lU/maxresdefault.jpg"
  },
  { 
    type: "youtube", 
    src: "https://www.youtube.com/embed/beIlHoh-0y4?si=92xmSQNhYt8u2gsQ", 
    title: "ByteWar Event Highlight 3",
    thumbnail: "https://img.youtube.com/vi/beIlHoh-0y4/hqdefault.jpg"
  },
  { 
    src: img3.src || img3, 
    type: "image", 
    alt: "ByteWar Event 4",
    thumbnail: img3.src || img3
  },
];

export default function MediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openMedia = (media) => {
    setSelectedMedia(media);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMedia = () => {
    setIsOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="w-full py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-200 opacity-20 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-2xl animate-float-delay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Photos & Videos of 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Previous ByteWar Events
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Relive the excitement from our past events through these memorable moments
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-white group transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => openMedia(item)}
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden">
                {item.type === "youtube" ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                {/* Play button for videos */}
                {item.type === "youtube" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/90 transition-all">
                      <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Item Footer */}
              <div className="p-4 bg-white border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">{item.title || item.alt}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 capitalize mt-1 inline-block">
                  {item.type} content
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <button 
            onClick={closeMedia}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-4xl mx-auto">
            {selectedMedia?.type === "youtube" ? (
              <div className="aspect-video w-full">
                <iframe
                  src={`${selectedMedia.src}?autoplay=1`}
                  title={selectedMedia.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="max-h-[90vh] flex justify-center">
                <img
                  src={selectedMedia?.src}
                  alt={selectedMedia?.alt}
                  className="object-contain max-w-full max-h-full rounded-lg"
                />
              </div>
            )}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{selectedMedia?.title || selectedMedia?.alt}</h3>
            </div>
            
          </div>

        </div>
      )}

      <div className="text-center mt-12">

       {/* Enroll Now Button with Pulse Effect */}
        <Link
          href="/BannerPage"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-full text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out group relative overflow-hidden"
        >
          <span className="relative z-10">Enroll Now</span>
          <FaArrowRight className="mt-[2px] group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>


      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}