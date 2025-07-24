export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">ByteWar</div>
      <nav className="space-x-6">
        <a href="#hero" className="hover:text-yellow-400">Home</a>
        <a href="#enroll" className="hover:text-yellow-400">Enroll</a>
        <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
        <a href="#thought" className="hover:text-yellow-400">Thought</a>
      </nav>
    </header>
  );
}
