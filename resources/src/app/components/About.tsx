export function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/rsfbmBWD/497638328-23960481013544863-8080119364462833040-n.jpg" 
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a student developer with experience in building web applications and digital experiences. 
                I specialize in creating responsive, user-friendly interfaces that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 mb-6">
                My journey started with a curiosity for how the game Minecraft works, and it has evolved into a career 
                where I get to combine creativity with technical expertise.
              </p>
              
              <p className="text-lg text-gray-300 mb-8">
                When I'm not coding, you can find me playing video games and exploring new hobbies.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700">Problem Solving</span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700">Team Collaboration</span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700">User-Focused Design</span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700">Gamer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}