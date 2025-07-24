const galleryItems = [
  { src: "/file.svg", type: "image", alt: "ByteWar Event 1" },
  { src: "/globe.svg", type: "image", alt: "ByteWar Event 2" },
  { src: "/next.svg", type: "image", alt: "ByteWar Event 3" },
  { src: "/vercel.svg", type: "image", alt: "ByteWar Event 4" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Photos & Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-gray-50 flex items-center justify-center h-48">
            <img src={item.src} alt={item.alt} className="object-contain h-32" />
          </div>
        ))}
      </div>
    </section>
  );
}
