import Link from "next/link";

export default function EnrollSuccess() {
  return (
    <div className="bg-green-100 p-6 rounded text-center mt-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Enrollment Complete!</h2>
      <p className="mb-4">Join our Instagram group for updates and next steps.</p>
      <Link href="https://www.instagram.com/navokta/" target="_blank" rel="noopener" className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-semibold mb-4">Join Instagram Group</Link>
      <br />
      <Link href="/" className="text-blue-600 underline">Go to Home</Link>
    </div>
  );
}
