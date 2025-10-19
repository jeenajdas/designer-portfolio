import { skills, skillsIntro } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 inline-block">
            {skillsIntro.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
            {skillsIntro.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {skill.description}
              </p>

              {/* Hover indicator line */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-600 transition-colors duration-300 cursor-pointer group">
            <span className="text-sm font-medium">And many more skills to explore</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .grid > div {
          animation: fade-in 0.6s ease-out backwards;
        }
      `}</style>
    </section>
  );
}