export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#FAFAFA]/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tighter">Clifford.</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#skills" className="hover:text-black transition-colors">Skills</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}