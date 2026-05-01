import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-8">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-on-primary-container/5 blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-primary tracking-[0.2em] font-label text-[0.6875rem] uppercase font-semibold">
              Available for Freelance & Full-time
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Jawad Hussain <br />{" "}
              <span className="text-primary">Abbasi</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-on-surface-variant max-w-2xl font-headline">
              Senior React Native & Full-Stack Developer
            </p>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            I architect high-performance mobile and web infrastructures that bridge
            the gap between complex backend logic and seamless user experiences.
            Specializing in the MERN stack and cross-platform mobile excellence.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95"
              href="#projects"
            >
              View Projects
            </Link>
            <Link
              className="px-8 py-4 rounded-xl font-bold border border-primary/20 hover:bg-primary/5 transition-all active:scale-95"
              href="#contact"
            >
              Contact Me
            </Link>
            <button className="flex items-center gap-2 text-primary font-bold hover:underline transition-all underline-offset-4 group">
              Download CV
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                download
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative">
            <div className="w-full aspect-square rounded-[3rem] overflow-hidden bg-surface-container-high border-4 border-surface-container-highest">
              <Image
                width={800}
                height={800}
                className="w-full h-full object-cover object-top hover:grayscale-0 transition-all duration-700"
                alt="Jawad Hussain Abbasi - Senior React Native & Full-Stack Developer"
                src="/mypic.png"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl border border-white/5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-primary">3+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">
                  Years of<br />Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
