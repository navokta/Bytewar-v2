export default function EnrollSuccess() {
  return (
    <div className="bg-green-100 p-6 rounded text-center mt-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Enrollment Complete!</h2>
      <p className="mb-4">Join our WhatsApp group for updates and next steps.</p>
      <a href="https://wa.me/YOUR_GROUP_LINK" target="_blank" rel="noopener" className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-semibold mb-4">Join WhatsApp Group</a>
      <br />
      <a href="/" className="text-blue-600 underline">Go to Home</a>
    </div>
  );
}
