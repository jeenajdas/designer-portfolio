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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          background-clip: text;
          transition: transform 0.3s ease;
        }

        .logo-text:hover {
          transform: scale(1.05);
        }

        /* Nav Link Hover Effect */
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

        .nav-link:hover {
          color: #ffffff;
        }

        /* Contact Button Animation */
        .contact-btn {
          position: relative;
          overflow: hidden;
        }

        .contact-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .contact-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Hamburger */
        .hamburger-btn {
          width: 32px;
          height: 32px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          transition: transform 0.3s ease;
        }

        .hamburger-btn:hover {
          transform: scale(1.1);
        }

        .hamburger-line {
          width: 24px;
          height: 2.5px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hamburger-btn:hover .hamburger-line {
          background: #8B5CF6;
        }

        .hamburger-btn.open .line-1 {
          transform: translateY(7.5px) rotate(45deg);
        }

        .hamburger-btn.open .line-2 {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger-btn.open .line-3 {
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* Mobile Menu Animation */
        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-item {
          animation: fadeInUp 0.4s ease-out backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
        <div className={`max-w-[1400px] mx-auto transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-2xl shadow-purple-500/10' 
            : 'bg-[#1a1a2e]/70 backdrop-blur-lg shadow-xl shadow-black/30'
        } rounded-full border border-gray-700/50`}>
          <div className="flex items-center justify-between h-[78px] px-6 sm:px-8 lg:px-12">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} 
              className="logo-text"
            >
              Marshal
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
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
              
              {/* Contact Button */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="contact-btn relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Contact</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu fixed inset-0 bg-gradient-to-br from-[#0B052E] via-[#1a0f4d] to-[#0B052E] z-40 lg:hidden pt-28">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="mobile-menu-item text-white text-2xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="mobile-menu-item bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-xl font-medium shadow-xl shadow-purple-500/50 hover:scale-110 transition-all duration-300 mt-4"
              style={{ animationDelay: '0.5s' }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}