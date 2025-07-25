export default function ThoughtSection() {
  return (
    <section id="thought" className="w-full py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-purple-200 opacity-50 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-200 opacity-50 blur-xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Quote Icon */}
        <div className="flex justify-center mb-2">
          <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <blockquote className="text-3xl md:text-4xl font-bold italic text-gray-800 mb-6 leading-tight">
          "Coding is not just a skill, it's a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">superpower </span>. Compete, learn, and grow with ByteWar!"
        </blockquote>
        
        <div className="flex items-center justify-center mt-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <span className="mx-4 text-lg md:text-xl text-gray-600 font-medium">ByteWar Team</span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>
        
        {/* Decorative Quote Marks */}
        <div className="absolute top-0 left-0 text-6xl text-purple-200 opacity-30 transform -translate-y-6 -translate-x-4">"</div>
        <div className="absolute bottom-0 right-0 text-6xl text-blue-200 opacity-30 transform translate-y-2 translate-x-4">"</div>
      </div>
    </section>
  );
}