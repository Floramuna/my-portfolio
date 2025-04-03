import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Index = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 pt-20 pb-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              A passionate developer crafting beautiful web experiences with HTML, CSS, and JavaScript.
              I build responsive websites that bring ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="bg-purple hover:bg-purple-dark text-white">View My Work</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple to-purple-light opacity-20 absolute -top-6 -left-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1608889175638-9322c4f01194?q=80&w=2080&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
        }}></div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">HTML5</h3>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">CSS3</h3>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">JavaScript</h3>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Responsive Design</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Here are some of my recent projects. Each one was built with attention to detail, 
            focusing on clean code and great user experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(project => (
              <div key={project} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-166${project}324352${project}-${project}e6${project}e76ce?q=80&w=2070&auto=format&fit=crop`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-sm">CSS</span>
                    <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-sm">JavaScript</span>
                  </div>
                  <Link to={`/projects/${project}`}>
                    <Button variant="outline" className="w-full border-purple text-purple hover:bg-purple hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-purple hover:bg-purple-dark text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Ready to start a project? I'm available for freelance work and open to new opportunities.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
