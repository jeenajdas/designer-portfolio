export default function Resume() {
  return (
    <section id="resume" className="min-h-screen bg-gradient-to-br from-[#0B052E] via-[#1a0f4d] to-[#0B052E] py-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Resume
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">
            Download my resume to learn more about my experience and skills
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="group relative bg-white/5 backdrop-blur-lg border-2 border-white/10 rounded-3xl p-8 md:p-12 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 mb-8">
          {/* Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          {/* Details */}
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl font-bold text-white">Marshal_Resume.pdf</h3>
            <div className="flex items-center justify-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Updated Jan 2025
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                PDF Format
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="group/btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>

            <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview Resume
            </button>
          </div>

          {/* Floating decoration */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "📧", label: "Email Available", value: "In Resume" },
            { icon: "📱", label: "Contact Info", value: "Included" },
            { icon: "🔗", label: "Social Links", value: "Provided" }
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-white font-semibold mb-1">{item.label}</p>
              <p className="text-gray-400 text-sm">{item.value}</p>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}