export default function ExperienceSection() {
  return (
    <section className="py-32 px-8" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs font-bold">
            Career Milestones
          </p>
        </div>
        <div className="space-y-12">
          {/* Experience Block 1 */}
          <div className="flex flex-col md:flex-row gap-8 relative group">
            <div className="md:w-1/4 pt-2">
              <span className="text-primary font-bold text-sm">2023 — Present</span>
            </div>
            <div className="absolute left-[-2rem] md:left-[24.2%] top-3 w-4 h-4 rounded-full bg-primary ring-8 ring-primary/10 hidden md:block"></div>
            <div className="md:w-3/4 bg-surface-container-low p-8 rounded-3xl group-hover:bg-surface-container-high transition-colors">
              <h3 className="text-xl font-bold mb-1">Senior Mobile Developer</h3>
              <p className="text-primary font-medium mb-4">Evision Techno Services</p>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Leading development of cross-platform applications, optimizing
                performance for legacy devices, and implementing complex real-time
                geolocation features for logistical clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  Leadership
                </span>
                <span className="text-[10px] bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  Architecure
                </span>
              </div>
            </div>
          </div>
          {/* Experience Block 2 */}
          <div className="flex flex-col md:flex-row gap-8 relative group">
            <div className="md:w-1/4 pt-2">
              <span className="text-primary font-bold text-sm">2021 — 2023</span>
            </div>
            <div className="absolute left-[-2rem] md:left-[24.2%] top-3 w-4 h-4 rounded-full bg-surface-container-highest hidden md:block"></div>
            <div className="md:w-3/4 bg-surface-container-low p-8 rounded-3xl group-hover:bg-surface-container-high transition-colors">
              <h3 className="text-xl font-bold mb-1">MERN Stack Developer</h3>
              <p className="text-primary font-medium mb-4">Digi Pro Solutions</p>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Developed responsive web dashboards and RESTful APIs. Focused on
                database optimization and front-end state management using Redux
                Toolkit.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  API Design
                </span>
                <span className="text-[10px] bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  Web Apps
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Education Section (Integrated) */}
        <div className="mt-32 pt-24 border-t border-primary/10">
          <div className="flex items-center gap-6 mb-12">
            <span className="material-symbols-outlined text-4xl text-primary">
              school
            </span>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-low rounded-[2rem]">
              <h4 className="font-bold text-lg">Bachelor of Computer Science</h4>
              <p className="text-on-surface-variant text-sm mb-2">
                Arid Agricaltural University Rawalpindi
              </p>
              <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                2022 - 2026
              </span>
            </div>
            <div className="p-8 bg-surface-container-low rounded-[2rem]">
              <h4 className="font-bold text-lg">Full-Stack Certification</h4>
              <p className="text-on-surface-variant text-sm mb-2">
                FreeCodeCamp / Meta Professional
              </p>
              <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                Professional Track
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
