import { Github, Linkedin, Mail } from 'lucide-react';

import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 mx-auto mb-6 overflow-hidden">
              <ImageWithFallback 
                src="https://raw.githubusercontent.com/zjkm666/steffi-jimei-flower/3cefd08d89f07a0c0f61f481e239004b8abc5882/img/56e8a9ce-1e5e-47d1-94cb-0b72e86f0bd2.jpg"
                alt="Joshua Klein Malonda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"><b>Joshua Klein Malonda</b></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer, DevOps Engineer & Game Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I craft beautiful digital experiences with modern technologies. 
            Passionate about creating intuitive interfaces and solving complex problems.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Work
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}