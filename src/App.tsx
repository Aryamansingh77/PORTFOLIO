import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  ArrowUp,
  Download,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration. Features include product catalog, shopping cart, and secure payment processing.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code2, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-teal-400 border-b-2 border-teal-400' 
                      : 'text-white hover:text-teal-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-teal-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <img 
              src="https://avatars.githubusercontent.com/u/206552434?v=4" 
              alt="Profile" 
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-teal-400 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            ARYAMAN SINGH
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-delay">
           SDE
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about creating solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Resume
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Hi, I'm Aryaman!</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                With over  years of experience in web development, I specialize in creating 
                intuitive and engaging digital experiences. I'm passionate about clean code, 
                modern design principles, and staying up-to-date with the latest technologies.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing 
                to open-source projects, or enjoying a good cup of coffee while planning my 
                next creative project.
              </p>
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <MapPin size={16} />
                <span>delhi, india</span>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: "Projects Completed", value: "50+" },
                { label: "Years Experience", value: "5+" },
                { label: "Happy Clients", value: "30+" },
                { label: "Technologies Mastered", value: "15+" }
              ].map((stat, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-slate-700/50 rounded-lg">
                  <span className="text-slate-300">{stat.label}</span>
                  <span className="text-2xl font-bold text-teal-400">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                <skill.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
                  <div 
                    className="bg-teal-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-slate-400 text-sm">{skill.level}%</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
                'Docker', 'AWS', 'Tailwind CSS', 'Next.js', 'Vue.js', 'GraphQL'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-600 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-teal-600/20 text-teal-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:alex@example.com"
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <Mail className="w-8 h-8 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-slate-400"></p>
            </a>
            
            <a 
              href="https://linkedin.com/in/alexjohnson"
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <Linkedin className="w-8 h-8 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-400">Connect with me</p>
            </a>
            
            <a 
              href="https://github.com/alexjohnson"
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <Github className="w-8 h-8 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-slate-400">View my code</p>
            </a>
          </div>

          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;