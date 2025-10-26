import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,        
      once: true,            
      offset: 100,           
      easing: 'ease-in-out', 
      delay: 100,            
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;