import { about } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Side - Image with UI/UX Text */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Image Container */}
              <div className="aspect-square rounded-3xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105 relative">
                <img 
                  src="profile.png" 
                  alt="Marshal" 
                  className="w-full h-full object-cover rounded-3xl"
                />
                
                {/* UI/UX Text Overlay - Behind the person */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h3 className="text-[10rem] md:text-[12rem] lg:text-[14rem] font-bold text-white/10 leading-none select-none">
                    UI/UX
                  </h3>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>

          {/* Vertical Line Separator */}
          <div className="hidden lg:block w-px h-96 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

          {/* Right Side - Content */}
          <div className="space-y-6 animate-fade-in-right">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                ABOUT ME
              </h2>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {about.description}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}