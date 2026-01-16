import { Code2, Palette, Database, Smartphone, Cloud, Zap  } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
  },
  {
    id: 2,
    icon: Database,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL']
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['React Native', 'iOS', 'Android', 'Flutter', 'Expo']
  },
  {
    id: 4,
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Vercel']
  },
  {
    id: 5,
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems']
  },
  {
    id: 6,
    icon: Zap,
    title: 'Game Development',
    skills: ['Unity', 'Unreal Engine', 'Construct 3', 'Blender', 'Godot Engine']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A diverse skill set built through years of continuous learning and hands-on experience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.id}
                  className="p-6 rounded-2xl border border-gray-800 hover:border-gray-700 hover:shadow-lg bg-gray-900 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-white text-gray-900 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-xl mb-4 text-white">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-sm border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}