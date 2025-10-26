import { useState, useEffect, useRef } from 'react';
import { skills, skillsIntro } from '../data/portfolioData';

const IconMap = {
  palette: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  monitor: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  layout: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  settings: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            SKILLS
          </h2>
          <div className="border-l-4 border-gray-900 pl-6">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {skillsIntro.description}
            </p>
          </div>
        </div>

        {/* Top Border */}
        <div className="border-t border-gray-300"></div>

        {/* Skills List */}
        <div>
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`border-b border-gray-300 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-[80px_240px_1fr] gap-4 lg:gap-10 py-8 lg:py-14">
                {/* Icon */}
                <div className="flex items-start justify-start">
                  <div className="w-10 h-10 text-black flex-shrink-0">
                    {IconMap[skill.icon]}
                  </div>
                </div>

                {/* Title */}
                <div className="relative flex items-start">
                  <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-gray-300"></div>
                  <h3 className="text-lg lg:text-xl font-bold text-black leading-tight">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-start">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
