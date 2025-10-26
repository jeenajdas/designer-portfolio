import { projects } from "../data/portfolioData";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.jpg";

export default function Projects() {
  const projectImages = [project1Img, project2Img];

  return (
    <section id="projects" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">UI/UX</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h3>
          <div className="border-t border-white/20 mt-8"></div>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center group ${
                  index % 2 === 0 ? "lg:grid-flow-dense" : ""
                } fade-in-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden rounded-3xl transition-transform duration-700 hover:scale-[1.02] ${
                    index % 2 === 0 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="w-full h-auto max-h-[480px] object-contain rounded-3xl mx-auto"
                  />
                </div>

                {/* Text Section */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 0 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <p className="text-gray-400 text-base leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10 transition-all duration-300 group-hover:bg-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider line after each project */}
              <div className="border-t border-white/20 mt-16"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
      `}</style>
    </section>
  );
}