import Link from "next/link";

export default function EnrollNow() {
  return (
    <div className="w-full py-12 flex flex-col items-center bg-red-100">
      <Link href="/enroll" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition">Enroll Now</Link>
    </div>
  );
}
