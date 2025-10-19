import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
            <span className="text-white">UI/UX</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h3>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden rounded-3xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative group-hover:scale-105 transition-transform duration-500">
                  {/* Replace with actual project image */}
                  <img 
                    src="/api/placeholder/600/400" 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="bg-white text-black px-8 py-3 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gray-100">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 transform hover:scale-110 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                </div>

                <div className="text-gray-300 text-base leading-relaxed space-y-4">
                  {project.description.split('\n\n').map((paragraph, i) => (
                    <p 
                      key={i}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="group/btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                    View Case Study
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <button className="border-2 border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:border-purple-500 hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-20">
          <button className="group bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            <span>View All Projects</span>
            <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .space-y-20 > div {
          animation: fade-in 0.8s ease-out backwards;
        }
      `}</style>
    </section>
  );
}