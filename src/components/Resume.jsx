// import { Download } from 'lucide-react';

// export default function Resume() {
//   return (
//     <section id="resume" className="min-h-screen bg-black py-16 md:py-20 px-4 md:px-6 flex items-center justify-center">
//       <div className="max-w-5xl mx-auto w-full">
//         {/* Header */}
//         <div className="mb-12 md:mb-16 text-center animate-fade-in">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//             Resume
//           </h2>
//           <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto mb-6"></div>
//           <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
//             Download my resume to explore the projects and experiences that shaped my design career.
//           </p>
//         </div>

//         {/* Main Resume Card */}
//         <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-12 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:shadow-lg hover:shadow-white/5">
//           <div className="flex flex-col items-center justify-center">
//             <button
//               onClick={() => document.querySelector('a[download]')?.click()}
//               className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-semibold hover:gap-4 hover:shadow-lg hover:shadow-white/20 active:scale-95 transition-all duration-300"
//             >
//               <Download className="w-5 h-5" />
//               Download Resume
//             </button>
//           </div>
//           <a
//             href="/resume.pdf"
//             download
//             className="hidden"
//           ></a>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// }

import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen bg-black py-16 md:py-20 px-4 md:px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8" data-aos="zoom-in" data-aos-delay="200">
            Resume
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
            Download my resume to explore the projects and experiences that shaped my design career.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-semibold hover:gap-4 hover:shadow-lg hover:shadow-white/20 active:scale-95 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}