import { useState, useEffect, useRef } from 'react';
import { about } from '../data/portfolioData';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Side - Image with UI/UX Text */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Image Container - NO HOVER EFFECTS */}
              <div className="aspect-square rounded-3xl relative">
                <img 
                  src="profile.png" 
                  alt="Marshal" 
                  className="w-full h-full object-cover rounded-3xl"
                />
                
                {/* UI/UX Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h3 className="text-[10rem] md:text-[12rem] lg:text-[14rem] font-bold text-white/10 leading-none select-none">
                    UI/UX
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating decorations */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>

          {/* Vertical Line Separator */}
          <div className="hidden lg:block w-px h-96 bg-gradient-to-b from-transparent via-gray-700 to-transparent mt-12"></div>

          {/* Right Side - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-all duration-500 inline-block cursor-default">
                ABOUT ME
              </h2>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed hover:text-gray-100 transition-colors duration-300">
              {about.description}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes animate-pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: animate-pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}