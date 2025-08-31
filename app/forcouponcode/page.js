import Link from "next/link";

export default function CouponPage() {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/zru3R9dXTbM?si=0XlaC5_E9xWvzi_F`;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header - properly centered */}
      <header className="bg-gray-800 py-3 sm:py-4 px-4 sm:px-6 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-center">
          <h1 className="text-xl sm:text-2xl font-bold text-purple-400 text-center">
            Get Your Coupon Code
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title - properly centered */}
          <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
              🎥 Watch & Get Coupon Code
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
              Watch the video below to unlock your exclusive discount! 
              <strong className="text-purple-400"> The coupon code will be mentioned in the video description.</strong>
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl border border-gray-700">
              <iframe
                src={youtubeEmbedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title="Coupon Code Video"
              ></iframe>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center">
              📌 How to Get the Coupon?
            </h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base pl-4">
              <li>Watch the full video above.</li>
              <li>Click on the <strong>"Show More"</strong> section below the video.</li>
              <li>Find the coupon code in the <strong>description</strong>.</li>
              <li>Copy it and apply it on the payment page.</li>
            </ol>
            <p className="text-yellow-400 mt-3 sm:mt-4 font-medium text-sm sm:text-base text-center">
              💡 Pro Tip: The code might be hidden in plain sight — keep an eye out!
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/enroll/payment"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
            >
              ← Back to Payment
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 sm:py-4 text-center text-gray-500 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} ByteWar Hackathon. All rights reserved.
      </footer>
    </div>
  );
}