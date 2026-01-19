import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6 text-white">
                Let's talk about your project
              </h3>
              
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white text-gray-900 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white mb-1">Email</p>
                    <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white">
                      joshuaklein.malonda@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white text-gray-900 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                      +63 993 663 4496
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white text-gray-900 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white mb-1">Location</p>
                    <p className="text-gray-300">
                      Legazpi City, PH
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-700">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none placeholder-gray-400"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}