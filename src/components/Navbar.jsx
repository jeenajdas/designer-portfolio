// import { useState, useEffect } from 'react';

// const navItems = [
//   { name: 'HOME', href: '#home' },
//   { name: 'ABOUT', href: '#about' },
//   { name: 'SKILLS', href: '#skills' },
//   { name: 'PROJECTS', href: '#projects' },
//   { name: 'RESUME', href: '#resume' }
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (href) => {
//     setIsMobileMenuOpen(false);
//     const element = document.querySelector(href);
//     if (element) element.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

//         .logo-text {
//           font-family: 'Italianno', cursive;
//           font-size: 48px;
//           line-height: 100%;
//           background: linear-gradient(180deg, #FFFFFF 44.23%, #0B052E 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           transition: transform 0.3s ease;
//         }

//         .logo-text:hover {
//           transform: scale(1.05);
//         }

//         .nav-link {
//           position: relative;
//           padding-bottom: 4px;
//         }

//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #4B6EF5 0%, #8B5CF6 100%);
//           transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           border-radius: 2px;
//         }

//         .nav-link:hover::after {
//           width: 100%;
//         }

//         .contact-btn {
//           background: #000;
//           color: #fff;
//           padding: 8px 16px;
//           border-radius: 20px;
//           font-size: 14px;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }

//         .contact-btn:hover {
//           background: #1a1a1a;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//         }

//         /* Hamburger */
//         .hamburger-btn {
//           width: 32px;
//           height: 32px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           gap: 5px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           transition: transform 0.3s ease;
//           z-index: 60;
//         }

//         .hamburger-line {
//           width: 24px;
//           height: 2.5px;
//           background: white;
//           border-radius: 2px;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .hamburger-btn.open .line-1 {
//           transform: translateY(7px) rotate(45deg);
//         }
//         .hamburger-btn.open .line-2 {
//           opacity: 0;
//           transform: scaleX(0);
//         }
//         .hamburger-btn.open .line-3 {
//           transform: translateY(-7px) rotate(-45deg);
//         }

//         /* Mobile Dropdown Menu */
//         .mobile-menu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           width: 100%;
//           background: rgba(26,26,46,0.95);
//           backdrop-filter: blur(12px);
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.4s ease, opacity 0.4s ease;
//           opacity: 0;
//         }

//         .mobile-menu.open {
//           max-height: 500px; /* adjust depending on menu items */
//           opacity: 1;
//         }

//         .mobile-menu-content {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1.5rem;
//           padding: 1.5rem 0;
//         }

//         .mobile-menu-item {
//           color: white;
//           font-size: 1.25rem;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }

//         .mobile-menu-item:hover {
//           color: #8B5CF6;
//           transform: scale(1.05);
//         }

//         /* Overlay */
//         .mobile-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.25);
//           backdrop-filter: blur(2px);
//           z-index: 50;
//           opacity: 0;
//           pointer-events: none;
//           transition: opacity 0.3s ease;
//         }

//         .mobile-overlay.show {
//           opacity: 1;
//           pointer-events: all;
//         }

//         @media (min-width: 1024px) {
//           .hamburger-btn {
//             display: none !important;
//           }
//         }
//       `}</style>

//       <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
//         <div className={`max-w-[1400px] mx-auto transition-all duration-300 ${
//           isScrolled
//             ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-2xl shadow-purple-500/10'
//             : 'bg-[#1a1a2e]/70 backdrop-blur-lg shadow-xl shadow-black/30'
//         } rounded-full border border-gray-700/50`}>
//           <div className="flex items-center justify-between h-[78px] px-6 sm:px-8 lg:px-12">
//             <a
//               href="#home"
//               onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
//               className="logo-text"
//             >
//               Marshal
//             </a>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
//                   className="nav-link text-gray-300 text-sm font-medium tracking-wide transition-colors duration-300"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <button
//                 onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
//                 className="contact-btn"
//               >
//                 Contact
//               </button>
//             </div>

//             {/* Mobile Hamburger */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
//               aria-label="Toggle menu"
//             >
//               <span className="hamburger-line line-1"></span>
//               <span className="hamburger-line line-2"></span>
//               <span className="hamburger-line line-3"></span>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
//             <div className="mobile-menu-content">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
//                   className="mobile-menu-item"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <button
//                 onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
//                 className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-medium mt-4 hover:opacity-90 transition-all"
//               >
//                 Contact
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay */}
//       <div
//         className={`mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       ></div>
//     </>
//   );
// }
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'RESUME', href: '#resume' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

        .logo-text {
          font-family: 'Italianno', cursive;
          font-size: 48px;
          line-height: 100%;
          background: linear-gradient(180deg, #FFFFFF 44.23%, #0B052E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: transform 0.3s ease;
        }
        .logo-text:hover {
          transform: scale(1.05);
        }

        .nav-link {
          position: relative;
          padding-bottom: 4px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4B6EF5 0%, #8B5CF6 100%);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .contact-btn {
          background: #000;
          color: #fff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .contact-btn:hover {
          background: #1a1a1a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        /* Hamburger */
        .hamburger-btn {
          width: 32px;
          height: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
          z-index: 60;
        }
        .hamburger-line {
          width: 24px;
          height: 2.5px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hamburger-btn.open .line-1 {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger-btn.open .line-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger-btn.open .line-3 {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Dropdown Menu */
        .mobile-menu {
          position: fixed;
          top: 78px; /* below navbar */
          left: 0;
          width: 100%;
          background: rgba(26,26,46,0.95);
          backdrop-filter: blur(6px);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
          opacity: 0;
          z-index: 55;
        }
        .mobile-menu.open {
          max-height: 500px; /* adjust for menu items */
          opacity: 1;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 0;
        }

        .mobile-menu-item {
          color: white;
          font-size: 1.25rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .mobile-menu-item:hover {
          color: #8B5CF6;
          transform: scale(1.05);
        }

        /* Overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.15); /* subtle overlay */
          z-index: 50;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-overlay.show {
          opacity: 1;
          pointer-events: all;
        }

        @media (min-width: 1024px) {
          .hamburger-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
        <div className={`max-w-[1400px] mx-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1a1a2e]/80 backdrop-blur-sm shadow-xl shadow-purple-500/10'
            : 'bg-[#1a1a2e] lg:bg-[#1a1a2e]/70 lg:backdrop-blur-sm shadow-md shadow-black/20'
        } rounded-full border border-gray-700/50`}>
          <div className="flex items-center justify-between h-[78px] px-6 sm:px-8 lg:px-12">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="logo-text"
            >
              Marshal
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="nav-link text-gray-300 text-sm font-medium tracking-wide transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="contact-btn"
              >
                Contact
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="mobile-menu-item"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="contact-btn mt-4"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  );
}



