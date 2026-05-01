import Link from "next/link";

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c1324]/60 backdrop-blur-xl shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-black text-primary tracking-tighter">
          J.H. Abbasi
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            className="font-manrope tracking-tight text-sm font-bold uppercase text-primary border-b-2 border-primary pb-1"
            href="#about"
          >
            About
          </Link>
          <Link
            className="font-manrope tracking-tight text-sm font-bold uppercase text-on-surface-variant hover:text-primary transition-colors"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="font-manrope tracking-tight text-sm font-bold uppercase text-on-surface-variant hover:text-primary transition-colors"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="font-manrope tracking-tight text-sm font-bold uppercase text-on-surface-variant hover:text-primary transition-colors"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="font-manrope tracking-tight text-sm font-bold uppercase text-on-surface-variant hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all active:scale-95 duration-200">
          Hire Me
        </button>
      </nav>
    </header>
  );
}
