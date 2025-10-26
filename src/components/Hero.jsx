// export default function Hero() {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B052E]">
//       {/* Animated Arc Background */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         {/* Main Arc */}
//         <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
//           <defs>
//             {/* Gradient for the arc glow */}
//             <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#4B6EF5" stopOpacity="0" />
//               <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
//               <stop offset="100%" stopColor="#4B6EF5" stopOpacity="0" />
//             </linearGradient>
            
//             {/* Animated gradient for flowing light */}
//             <linearGradient id="flowingLight" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#4B6EF5" stopOpacity="0">
//                 <animate attributeName="offset" values="0;1" dur="3s" repeatCount="indefinite" />
//               </stop>
//               <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1">
//                 <animate attributeName="offset" values="0.5;1.5" dur="3s" repeatCount="indefinite" />
//               </stop>
//               <stop offset="100%" stopColor="#4B6EF5" stopOpacity="0">
//                 <animate attributeName="offset" values="1;2" dur="3s" repeatCount="indefinite" />
//               </stop>
//             </linearGradient>
//           </defs>
          
//           {/* Base arc - subtle glow */}
//           <path
//             d="M 200 800 Q 960 200 1720 800"
//             fill="none"
//             stroke="url(#arcGradient)"
//             strokeWidth="2"
//             opacity="0.3"
//           />
          
//           {/* Main glowing arc with flowing light */}
//           <path
//             d="M 200 800 Q 960 200 1720 800"
//             fill="none"
//             stroke="url(#flowingLight)"
//             strokeWidth="4"
//             strokeLinecap="round"
//             filter="url(#glow)"
//           />
          
//           {/* Glow filter */}
//           <defs>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
//               <feMerge>
//                 <feMergeNode in="coloredBlur"/>
//                 <feMergeNode in="SourceGraphic"/>
//               </feMerge>
//             </filter>
//           </defs>
//         </svg>

//         {/* Additional ambient glow */}
//         <div className="absolute w-full h-96 bottom-0 bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 animate-fade-in">
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
//           Hello, I'm Marshal p
//         </h1>
        
//         <p className="text-xl md:text-2xl text-blue-400 font-light tracking-wide animate-slide-up delay-200">
//           UI/UX Designer
//         </p>

//         {/* Scroll Indicator */}
//         {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
//             <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
//           </div>
//         </div> */}
//       </div>

//       {/* Smooth gradient fade to black at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
// src/components/Hero.jsx
import React from "react";
import HalfMoonCanvas from "./HalfMoonCanvas";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B052E]">
      {/* Three.js half-moon canvas (covers background) */}
      <HalfMoonCanvas hue={280} hoverIntensity={0.6} rotateOnHover={true} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
          Hello, I'm Marshal p
        </h1>

        <p className="text-xl md:text-2xl text-blue-400 font-light tracking-wide animate-slide-up delay-200">
          UI/UX Designer
        </p>
      </div>

      {/* Smooth gradient fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}

