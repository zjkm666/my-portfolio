import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'University Mental Health Support Web Application',
    description: 'A web application for the University of Santo Tomas - Legazpi, designed to provide mental health support to students.',
    image: 'https://i.postimg.cc/HnSwSszF/f661063e-5d62-425b-90c7-53626bb84ed3.jpg',
    tags: ['JavaScript', 'Node.js', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/zjkm666/ust-legazpi-mental-health-support-portal',
    demo: 'https://zjkm666.github.io/ust-legazpi-mental-health-support-portal/'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS, featuring a clean and modern design.',
    image: 'https://i.postimg.cc/C1TmD1rP/6a0d31bb-1fcb-4812-9132-c44636ab9318.jpg',
    tags: ['JavaScript', 'Tailwind CSS', 'HTML', 'React', 'Vite'],
    github: 'https://github.com/zjkm666/my-portfolio',
    demo: 'https://zjkm666.github.io/my-portfolio/'
  },
  {
    id: 3,
    title: 'Nothing to see here.',
    description: 'N/A',
    image: 'https://i.postimg.cc/RF15J2dN/download.webp',
    tags: [],
    github: 'https://github.com',
    demo: 'https://example.com'
  } 
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and passion for creating exceptional digital experiences.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="aspect-video overflow-hidden bg-gray-700">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}