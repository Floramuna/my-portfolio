import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2080&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'website'
  },
  {
    id: 2,
    title: 'Personal Blog',
    description: 'A minimalist blog design with dark/light mode toggle, comment system, and category filtering.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'website'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An interactive weather application that displays current and forecast weather data using an API.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2065&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    category: 'app'
  },
  {
    id: 4,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals with smooth animations and filtering.',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=2032&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'website'
  },
  {
    id: 5,
    title: 'Task Manager',
    description: 'A productivity application with task creation, priority setting, and filtering capabilities.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'app'
  },
  {
    id: 6,
    title: 'Restaurant Website',
    description: 'A responsive restaurant website featuring menu displays, reservations, and location integration.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'website'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore my latest work – a collection of web projects showcasing my skills in HTML, CSS, and JavaScript.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'all'
                  ? 'bg-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('website')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'website'
                  ? 'bg-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setFilter('app')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'app'
                  ? 'bg-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Applications
            </button>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-in"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-purple/10 text-purple rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full border-purple text-purple hover:bg-purple hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Let's discuss how I can help bring your ideas to life with clean, functional, and beautiful web solutions.
          </p>
          <Link to="/contact">
            <Button className="bg-purple hover:bg-purple-dark text-white">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
