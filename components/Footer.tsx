import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#151b2d] w-full py-12 border-t border-[#adc6ff]/15 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8 w-full">
        <div className="text-lg font-bold text-[#adc6ff]">J.H. Abbasi</div>
        <p className="font-inter text-[11px] uppercase tracking-[0.1em] text-[#c6c6cd]">
          © 2024 Jawad Hussain Abbasi. Built with precision.
        </p>
        <div className="flex gap-6">
          <Link
            className="font-inter text-[11px] uppercase tracking-[0.1em] text-[#c6c6cd] hover:text-[#adc6ff] transition-colors"
            href="#"
          >
            LinkedIn
          </Link>
          <Link
            className="font-inter text-[11px] uppercase tracking-[0.1em] text-[#c6c6cd] hover:text-[#adc6ff] transition-colors"
            href="#"
          >
            GitHub
          </Link>
          <Link
            className="font-inter text-[11px] uppercase tracking-[0.1em] text-[#c6c6cd] hover:text-[#adc6ff] transition-colors"
            href="#"
          >
            Twitter
          </Link>
          <Link
            className="font-inter text-[11px] uppercase tracking-[0.1em] text-[#c6c6cd] hover:text-[#adc6ff] transition-colors"
            href="mailto:jawad.hussain.abbasi@gmail.com"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
