import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.',
    longDescription: `This e-commerce website was built from scratch using HTML, CSS, and JavaScript. The project features a responsive design that works seamlessly across devices of all sizes.

Key features include:
- Responsive product grid with filtering and search
- Shopping cart with localStorage persistence
- User authentication system
- Product detail pages with image galleries
- Checkout process with form validation

The site was designed with a focus on user experience, ensuring that customers can easily browse products, add items to their cart, and complete purchases with minimal friction.`,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2080&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556740714-a8395b3d56e7?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    client: 'RetailCo Inc.',
    date: 'June 2023',
    category: 'website',
    link: '#'
  },
  {
    id: 2,
    title: 'Personal Blog',
    description: 'A minimalist blog design with dark/light mode toggle, comment system, and category filtering.',
    longDescription: `This minimalist blog platform was designed to showcase content in a clean, distraction-free environment. The design focuses on typography and readability, with a dark/light mode toggle to enhance the reading experience.

Key features include:
- Responsive layout optimized for reading
- Dark/light mode theme toggle
- Category filtering system
- Comment section with nested replies
- Related posts recommendations

The blog uses vanilla JavaScript for all interactive elements, demonstrating that complex features can be implemented without heavy frameworks when appropriate.`,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2073&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2074&auto=format&fit=crop'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    client: 'Self',
    date: 'March 2023',
    category: 'website',
    link: '#'
  },
  // Additional projects would follow the same structure
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '1');
  
  // Find the project with the matching ID
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Project not found</h2>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects">
            <Button className="bg-purple hover:bg-purple-dark text-white">Back to Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header with Hero Image */}
      <section className="pt-20 relative">
        <div className="h-64 md:h-96 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <div className="flex justify-center flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Info */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-700 whitespace-pre-line">{project.longDescription}</p>
            </div>

            {/* Project Details */}
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{project.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium capitalize">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tags</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-purple/10 text-purple rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-purple hover:bg-purple-dark text-white">
                      View Live Project
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={image} 
                  alt={`${project.title} - image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/projects">
              <Button variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"></path>
                </svg>
                Back to Projects
              </Button>
            </Link>
            
            <div className="flex gap-4">
              {projectId > 1 && (
                <Link to={`/projects/${projectId - 1}`}>
                  <Button variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white">
                    Previous Project
                  </Button>
                </Link>
              )}
              
              {projectId < projectsData.length && (
                <Link to={`/projects/${projectId + 1}`}>
                  <Button variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white">
                    Next Project
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            I'm always open to discussing new projects or opportunities to be part of your vision.
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

export default ProjectDetail;
