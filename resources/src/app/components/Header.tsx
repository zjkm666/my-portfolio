import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors text-left">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-center">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}