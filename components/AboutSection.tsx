import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* ── Left: Text ─────────────────────────────────────────────── */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              Digital Architect
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Mastering the Full App <span className="text-primary">Lifecycle</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              With over three years in the trenches of mobile app development, I
              specialize in crafting real-time tracking systems and enterprise-grade
              solutions. My expertise spans the entire journey—from conceptual
              wireframes and Firebase cloud architecture to the final deployment on App
              Store and Play Store.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 mt-1 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">track_changes</span>
                </div>
                <div>
                  <h4 className="font-bold">Real-time Ecosystems</h4>
                  <p className="text-sm text-on-surface-variant">
                    Expertise in Google Maps API, live geolocation, and real-time socket
                    communication.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 mt-1 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">cloud_done</span>
                </div>
                <div>
                  <h4 className="font-bold">Backend Integration</h4>
                  <p className="text-sm text-on-surface-variant">
                    Seamless Firebase synchronization and secure Node.js REST API
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Profile picture + stat cards ────────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-4 pt-12">
              {/* Profile picture card */}
              <div className="relative bg-surface-container-high h-72 rounded-3xl overflow-hidden">
                <Image
                  src="/mypic.png"
                  alt="Profile picture"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high/60 to-transparent" />
              </div>

              {/* Clean Code card */}
              <div className="bg-surface-container-highest h-48 rounded-3xl p-8">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  terminal
                </span>
                <span className="block text-sm font-bold leading-snug">
                  Clean Code<br />Practices
                </span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {/* App Features stat */}
              <div className="bg-surface-container-high h-48 rounded-3xl p-8 flex flex-col justify-end">
                <span className="text-4xl font-black text-primary mb-2">50+</span>
                <span className="text-sm uppercase tracking-widest font-bold">
                  App Features Built
                </span>
              </div>

              {/* Production Ready card */}
              <div className="bg-surface-container-highest h-48 rounded-3xl p-8">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" data-weight="fill">
                  deployed_code
                </span>
                <span className="block text-sm font-bold leading-snug">
                  Production Ready<br />Apps
                </span>
              </div>

              {/* MERN card */}
              <div className="bg-primary/10 border border-primary/20 h-48 rounded-3xl p-8 flex flex-col justify-end">
                <span className="text-4xl font-black text-primary mb-2">MERN</span>
                <span className="text-sm uppercase tracking-widest font-bold">
                  Stack Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
