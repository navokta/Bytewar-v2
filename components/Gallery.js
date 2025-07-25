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
    <section id="gallery" className="w-full py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Photos & Videos of Previous ByteWar Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-lg bg-gray-50 group transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            {item.type === "youtube" ? (
              // YouTube Video
              <div className="relative w-full h-64">
                <iframe
                  src={item.src}
                  title={item.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // Image Item
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="object-fit w-full h-64 transition duration-300 ease-in-out transform group-hover:scale-105"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}