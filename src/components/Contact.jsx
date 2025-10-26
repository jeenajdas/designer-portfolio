import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-12" data-aos="fade-right">
            <div>
              <h2 
                className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight" 
                style={{ 
                  fontFamily: 'Poppins',
                  fontWeight: 900,
                  fontSize: '60px',
                  lineHeight: '70px',
                  backgroundImage: 'linear-gradient(to right, #ADADADDD, #ADADADDD)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Get in Touch<br />with Us
              </h2>
              <p className="text-gray-400 text-lg font-medium">
                Let's Work Together :
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'marshalpod6@gmail.com',
                  link: 'mailto:marshalpod6@gmail.com'
                },
                {
                  icon: Phone,
                  label: '+91 73568 28755',
                  link: 'tel:+917356828755'
                },
                {
                  icon: MapPin,
                  label: 'Kannur, Kerala',
                  link: null
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link || '#'}
                  className="group flex items-center gap-4 text-gray-300 hover:text-white transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-6 h-6 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-6 font-medium">Follow me on</p>
              <div className="flex gap-4">
                {[
                  { name: 'WhatsApp', icon: MessageCircle, url: '#' },
                  { name: 'Behance', icon: 'Be', url: '#' },
                  { name: 'LinkedIn', icon: Linkedin, url: '#' },
                  { name: 'Instagram', icon: Instagram, url: '#' }
                ].map((social, idx) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group relative w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2"
                    style={{
                      background: 'linear-gradient(180deg, #2300EE 0%, #000000 100%)',
                    }}
                    aria-label={social.name}
                  >
                    {/* Hover animation background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {typeof social.icon === 'string' ? (
                        <span>{social.icon}</span>
                      ) : (
                        <social.icon className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <div className="space-y-8">
              <div className="group hover-lift">
                <label className="block text-white font-semibold mb-4 text-sm transition-colors duration-300 group-hover:text-blue-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 px-0 py-3 text-white placeholder-gray-600 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-400 contact-input"
                  placeholder="Your Name"
                />
              </div>

              <div className="group hover-lift">
                <label className="block text-white font-semibold mb-4 text-sm transition-colors duration-300 group-hover:text-blue-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 px-0 py-3 text-white placeholder-gray-600 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-400 contact-input"
                  placeholder="Email Address"
                />
              </div>

              <div className="group hover-lift">
                <label className="block text-white font-semibold mb-4 text-sm transition-colors duration-300 group-hover:text-blue-400">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 px-0 py-3 text-white placeholder-gray-600 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-400 contact-input"
                  placeholder="Subject"
                />
              </div>

              <div className="group hover-lift">
                <label className="block text-white font-semibold mb-4 text-sm transition-colors duration-300 group-hover:text-blue-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-gray-600 px-0 py-3 text-white placeholder-gray-600 focus:border-blue-500 transition-all duration-300 resize-none group-hover:border-gray-400 contact-input"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ backgroundColor: '#2300EE' }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                
                {/* Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 Marshal. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-2px);
        }

        .contact-input {
          outline: none !important;
          box-shadow: none !important;
          background-color: transparent !important;
        }
        
        .contact-input:focus {
          outline: none !important;
          box-shadow: none !important;
          border-color: #2300EE !important;
          background-color: transparent !important;
        }

        .contact-input:active {
          background-color: transparent !important;
        }
        
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px black inset !important;
          -webkit-text-fill-color: white !important;
          box-shadow: none !important;
          background-color: transparent !important;
          transition: background-color 5000s ease-in-out 0s;
        }

        *:focus-visible {
          outline: none !important;
        }

        input:focus-visible,
        textarea:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          background-color: transparent !important;
        }
      `}</style>
    </section>
  );
}