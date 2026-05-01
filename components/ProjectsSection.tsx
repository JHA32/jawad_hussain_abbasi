import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SaaS ERP Mobile App",
      description:
        "Enterprise resource planning solution for large-scale operations with real-time inventory and team management.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkNSZDv55itn92bYT7oFnndErOPZAU9iS0Onzg1KGqfrdGu6mqMXtbCus79b4-SYTBQyiO_PS-Um3QAvuDiPXzW93_1n19ZfzGQamYE7kePI08zAw1e-tJvk6-oJMs2lObsekKTHo8_1wmaRvwR5WJF6er6ABm-Wdl2UYFkt78F1ohdR12ZSqJ60hT3G6q-uVuwDT9649e8NAcnTAKQ_pAeqbEuU38cQO9F1PPz30PXaI0-oQewKcRIiFEZBxV3AdRm4iiDRprb-b2",
      tags: ["React Native", "Node.js", "Redux"],
      colSpan: 1,
    },
    {
      title: "Khaas Gas",
      description:
        "E-commerce delivery platform with live tracking and secure payment gateway integration for gas cylinder services.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIFAzdpcTYL3X7ysuwyIIaTG6sbtXs2ivUCFsetbXqRz-TNxFm-FnCvHxK2alLw3HbfqqOOJcxdzKfXLSacLD-U-bNtr2Sd0YCHDsojvPDk2ByRBToi9zo3peJyEIeaGkn7oWUkVNYvi0eJr9plF-Gc8pLiw3PSvqOjQ2QYyGykbZrFbr37azqQ1HF6oWt-TCwMHLuftsUfhYZgYJHkEAdDiZ0qcQ3rk2qZFnojvAnHDPiN2ozUOuz5jQMUODd_espKDOpX8D8uvXe",
      tags: ["React Native", "Google Maps"],
      colSpan: 1,
    },
    {
      title: "Islamic App",
      description:
        "Feature-rich spiritual companion featuring full Quran, prayer timings based on GPS, and a dynamic Qibla compass.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-MtZpDcaX5uM-9vTsg9G5UlzMR5gM15JP0FmvsJuEIhH44P-XZE0B_H1KzX_hSI6ji-EZFWW0-37p7AK9zcLiYKH83tbDeZAMnF_hrzBT-slo3kTWQDgrI48iUNE0qAvkPGYQStPplX1uS1cBzUYc96e1Wk5vecQ6h9RPWuT2Ysl05qv_98yYcUQy-ctdbTDbqyIDT_pmhLBkVU7bvOzBY67hEqxn6TYHbksjxuQzlB6Ow84e5x2HocyCoNDGBCT39j9Js9k2ZO0m",
      tags: ["Firebase", "Sensor API"],
      colSpan: 1,
    },
    {
      title: "QR Inventory Management",
      description:
        "Real-time inventory tracking utilizing QR scanning for ultra-fast stock updates and logistical management.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP0Moc7Eli_V913orGLzb7tJLQhDLaZaHUQRFSXLBI1chkykHQDcUASRpiRbDX0eZWq33_Fhx0VWXM9Wj5saP8_eye-G5Gvq0I-GvPrZM1LaGMlR61sKZSiXu7aNCkQvvvIRq83Igu2evflKzosdf9tejAGag1uuj0Wkc4m1FwgKihsuSiXMWky2JMUAws5Y1C8sFz3EYVrOTTbK2ORdYbYbBAgUGZ15zaMDG6gO45SdJipsDj2CWwqxfCUkxDQ35xSgAsAvESaiKL",
      tags: ["QR Scanner", "MongoDB"],
      colSpan: 1,
    },
    {
      title: "ShareMyCV App",
      description:
        "A professional digital ecosystem for creating and sharing interactive portfolios. Built with high performance and accessibility in mind.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsPjibbK3FKyEiOmsQvwBHiU2JymTYQUM6BYU6ST8eWFjNfYg_rXZPnzNtDiIoRY_EUXhLBYEejLI03d0CgphYxdlRu1ReKd0gjNblydwLGlGOWsaMC4lhfvvFG4k5S5CqUoOo_IdaNFw-JWFD1TlHRJfruZi4ITcFHr4NyzmcQJHPQ90vNKVtRPO0Ah1RNogMxN9T_JNMzf-8_KzlHThmTXkltnBqU7Xfu6UM_qe6JmU73XjtiDT7qBPbFQgGSNec0U4ReCEssWou",
      tags: ["MERN Stack", "Cloudinary", "PDF Generation"],
      colSpan: 2,
    },
  ];

  return (
    <section className="py-32 px-8 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Developments</span>
          </h2>
          <p className="text-on-surface-variant">
            A collection of robust enterprise solutions and user-centric mobile applications built with precision.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-surface-container-high rounded-[2rem] overflow-hidden flex flex-col ${
              project.colSpan === 2 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden ${
                project.colSpan === 2 ? "aspect-[21/9]" : "aspect-video"
              }`}
            >
              <Image
                width={project.colSpan === 2 ? 1200 : 800}
                height={project.colSpan === 2 ? 500 : 600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={`Screenshot of ${project.title}`}
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent opacity-60"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`${project.colSpan === 2 ? 'text-2xl' : 'text-xl'} font-bold`}>{project.title}</h3>
                <span className="material-symbols-outlined text-primary">
                  open_in_new
                </span>
              </div>
              <p className={`text-on-surface-variant ${project.colSpan === 2 ? 'text-lg' : 'text-sm'} mb-6 flex-grow`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`font-label font-bold tracking-widest uppercase rounded-full ${
                      project.colSpan === 2
                        ? i === 0
                          ? "bg-primary text-on-primary px-4 py-2 text-xs"
                          : "bg-primary/10 text-primary px-4 py-2 text-xs"
                        : "bg-primary/10 text-primary px-3 py-1 text-[10px]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
