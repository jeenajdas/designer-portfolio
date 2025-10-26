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
    <section
      ref={sectionRef}
      id="about"
      className="bg-black pt-32 pb-0 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Remove fixed aspect ratio and show full image */}
              <img
                src="profile.png"
                alt="Marshal"
                className="w-full h-auto max-h-[700px] object-contain rounded-3xl"
              />
            </div>

            {/* Floating decorations */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>

          {/* Vertical Line Separator */}
          <div className="hidden lg:block w-px h-80 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h2 className="text-[3.5rem] md:text-[4rem] font-bold text-white mb-8 leading-none tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-all duration-500 cursor-default">
              ABOUT ME
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed hover:text-gray-100 transition-colors duration-300">
              {about.description}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes animate-pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: animate-pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
