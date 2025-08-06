// app/forcoupancode/page.jsx

import Link from "next/link";

export default function CouponPage() {
  // Replace with your actual YouTube video ID or URL
  // const youtubeVideoId = "dQw4w9WgXcQ"; // 🔁 Replace this with your real video ID
  const youtubeEmbedUrl = `https://www.youtube.com/embed/gFM8s2i2emQ?si=1MFomMGlTBFYvejJ`;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-purple-400">Get Your Coupon Code</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-4">
            🎥 Watch & Get Coupon Code
          </h2>
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            Watch the video below to unlock your exclusive discount! 
            <strong className="text-purple-400"> The coupon code will be mentioned in the video description.</strong>
          </p>

          {/* YouTube Video Embed */}
          <div className="flex justify-center mb-8">
            <div className="w-full md:w-[800px] h-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-700">
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
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">📌 How to Get the Coupon?</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Watch the full video above.</li>
              <li>Click on the <strong>"Show More"</strong> section below the video.</li>
              <li>Find the coupon code in the <strong>description</strong>.</li>
              <li>Copy it and apply it on the payment page.</li>
            </ol>
            <p className="text-yellow-400 mt-4 font-medium">
              💡 Pro Tip: The code might be hidden in plain sight — keep an eye out!
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <Link
              href="/enroll/payment"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              ← Back to Payment
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ByteWar Hackathon. All rights reserved.
      </footer>
    </div>
  );
}