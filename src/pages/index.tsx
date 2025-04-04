import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "AGRICULTURE MOBILE APP",
      description: "Comprehensive UI/UX design system for agricultural solutions",
      image: "/Screenshot 2025-04-04 162214.png",
      link: "https://www.figma.com/proto/ZxvAzoVlNHMoa52WjD5VoX?node-id=0-1&t=DICaMHI9N2oxd7dq-6",
      tags: ["Figma", "UI/UX", "Mobile Design"]
    },
    {
      id: 2,
      title: "ARGERTECH",
      description: "Decentralized agricultural platform built on Internet Computer blockchain",
      image: "/Screenshot 2025-04-04 162148.png",
      link: "https://hcaqq-diaaa-aaaan-qzo7a-cai.icp0.io/",
      tags: ["ICP", "Blockchain", "Web3"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 via-purple-50 to-violet-50 pt-24 pb-32">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6 inline-block shadow-sm">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Florence Makaa</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8">
              A passionate full-stack developer specializing in web design, mobile development, and blockchain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-md font-medium shadow-md">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 rounded-md font-medium">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 absolute -top-6 -left-6 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                <img
                  src="/profile-image.jpg"
                  alt="Florence Makaa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-300 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Projects</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
            Showcasing my latest work in web development, UI/UX design, and blockchain technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="h-56 overflow-hidden rounded-t-xl mb-6 relative bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4 z-10">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-sm"
                  >
                    Explore Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat opacity-20" style={{ backgroundImage: "url('/grid.svg')" }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Interested in web, mobile, or blockchain solutions? I'm available for projects and collaborations.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg font-medium shadow-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .bg-pattern {
          background-image: radial-gradient(circle at 25px 25px, rgba(128, 90, 213, 0.2) 2%, transparent 0%), 
                            radial-gradient(circle at 75px 75px, rgba(128, 90, 213, 0.2) 2%, transparent 0%);
          background-size: 100px 100px;
        }
      `}</style>
    </Layout>
  );
};

export default Index;