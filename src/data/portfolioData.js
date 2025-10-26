// src/data/portfolioData.js

export const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECT', href: '#projects' },
  { name: 'RESUME', href: '#resume' },
  { name: 'Contact', href: '#contact' }
];

export const hero = {
  greeting: "Hello, I'm Marshal p",
  role: "UI/UX Designer"
};

export const about = {
  title: "ABOUT ME",
  description: `I'm Marshal p, a UI/UX Designer passionate about creating intuitive interfaces and meaningful user journeys. I enjoy turning complex thoughts designs into clean usability with function. My focus is on creating digital products that feel seamless, purposeful, and visually engaging. Whether it's a mobile app, website, or dashboard, I combine research, user empathy, and storytelling creativity for my own projects, set a collaborate and keep iterating your feedback.`
};

export const skills = [
  {
    id: 1,
    icon: "palette",
    title: "UI/UX Design",
    description: "Research & Strategy, Research, wireframing, prototyping, visual design, interaction design, information architecture, usability testing"
  },
  {
    id: 2,
    icon: "monitor",
    title: "UI Design",
    description: "Visual Design, Design Systems, Responsive Web Design, Typography, & Color Theory"
  },
  {
    id: 3,
    icon: "layout",
    title: "UX Design",
    description: "Wireframing & Prototyping, User Flow Design, Interaction Design, Usability Testing"
  },
  {
    id: 4,
    icon: "settings",
    title: "Tools & Technology",
    description: "Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Canva, Framer"
  },
  {
    id: 5,
    icon: "lightbulb",
    title: "Soft Skills",
    description: "Creative Problem Solving, Collaboration & Communication, Design Thinking, Time Management"
  }
];

export const projects = [
  {
    id: 1,
    title: "Travo - Smarter Travel Experience",
    description: `Travo is an AI-powered travel platform built to deliver meaningful experiences in a compact interface. It prioritizes clean design, smart navigation, and seamless user journeys—from booking to itinerary management.

The goal was to build a tool that didn't just show flights and hotels, but helped users make better travel decisions. Features like price trend predictions and contextual filters were added after studying how users research trips.

Most interfaces felt cluttered or overwhelming—Travo took the opposite approach: fewer steps, more clarity. Subtle transitions and micro-interactions help users feel in control without thinking too hard.

It was designed for a real-world scenario, balancing aesthetics with function. Every screen went through multiple iterations, tested against usability heuristics and refined based on feedback.`,
    image: "/images/travo-project.jpg",
    tech: ["Figma", "Prototyping", "User Research"]
  },
  {
    id: 2,
    title: "NovaMed Hospital Website - Modern Healthcare",
    description: `The NovaMed Hospital website was designed to create a seamless and trustworthy digital experience for patients seeking expert medical care. The goal was to design an interface that communicates compassion, professionalism, and reliability while maintaining a clean and modern look.
The design focuses on easy navigation, quick access to doctor profiles, treatment options, and appointment scheduling. I used a clear layout with professional colors, human-centered imagery, and intuitive UI elements to ensure accessibility for users of all ages.
From service listings and testimonials to FAQs and contact sections, every page is structured to build trust and simplify patient interaction. The design reflects the hospital’s values of care, innovation, and expertise, turning a complex healthcare journey into a smooth and reassuring online experience.`,
    image: "/images/novamed-project.jpg",
    tech: ["Figma", "UI Design", "Responsive Design"]
  }
];

export const skillsIntro = {
  title: "SKILLS",
  description: "From research, UI, find interfaces, thing design thinking, visual clarity, and usability together in every project."
};