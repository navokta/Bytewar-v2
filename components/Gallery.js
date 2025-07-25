import React from "react";
import img3 from "../public/img3.jpg";

const galleryItems = [
  { 
    type: "youtube", 
    src: "https://www.youtube.com/embed/gFM8s2i2emQ?si=-OTFECRLGv-6GBUE", 
    title: "ByteWar Event Highlight 1" 
  },
  { 
    type: "youtube", 
    src: "https://www.youtube.com/embed/tO38tOeE1lU?si=FHu6FPXgCmwNEwqu", 
    title: "ByteWar Event Highlight 2" 
  },
  { 
    type: "youtube", 
    src: "https://www.youtube.com/embed/beIlHoh-0y4?si=92xmSQNhYt8u2gsQ", 
    title: "ByteWar Event Highlight 3" 
  },
  { 
    src: img3.src || img3, 
    type: "image", 
    alt: "ByteWar Event 4" 
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-200 opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-2xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Photos & Videos of 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Previous ByteWar Events
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-xl bg-white group transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl"
            >
              {item.type === "youtube" ? (
                // YouTube Video
                <div className="relative w-full h-72">
                  <iframe
                    src={item.src}
                    title={item.title}
                    className="w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              
                </div>
              ) : (
                // Image Item
                <div className="relative w-full h-72 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-full transition duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{item.alt}</p>
                  </div>
                </div>
              )}
              
              {/* Item Footer */}
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{item.title || item.alt}</h3>
                <p className="text-sm text-gray-500 mt-1 capitalize">{item.type} Content</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}