export default function ThoughtSection() {
  return (
    <section
      id="thought"
      className="w-full py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-purple-300 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Quote Icon */}
        <div className="flex justify-center mb-4">
          <svg
            className="w-14 h-14 text-purple-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Main Quote */}
        <blockquote className="text-3xl md:text-4xl font-extrabold italic text-gray-800 leading-tight">
          &ldquo;Built <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>for coders, by coders </span> —  Code your way to change the real-world .&ldquo;
        </blockquote>


        {/* Signature */}
        <div className="flex items-center justify-center mt-10">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <span className="mx-4 text-lg md:text-xl text-gray-600 font-semibold">
            — ByteWar Team
          </span>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>

        {/* Decorative Large Quotes */}
        <div className="absolute top-0 left-0 text-7xl text-purple-200 opacity-20 transform -translate-y-6 -translate-x-4 select-none">
          “
        </div>
        <div className="absolute bottom-0 right-0 text-7xl text-blue-200 opacity-20 transform translate-y-2 translate-x-4 select-none">
          ”
        </div>
      </div>
    </section>
  );
}
