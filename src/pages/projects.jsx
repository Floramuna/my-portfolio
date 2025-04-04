"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const Layout_1 = __importDefault(require("@/components/Layout"));
const Projects = () => {
    const [filter, setFilter] = (0, react_1.useState)('featured');
    // Project data with the provided images
    const projects = [
        {
            id: 'agriculture-mobile-app',
            title: 'Agriculture Mobile App',
            description: 'A UI/UX design project for a mobile application aimed at helping farmers access information, tools, and resources to improve agricultural productivity and sustainability.',
            image: '/Screenshot 2025-04-04 162214.png', // UI/UX project image
            tags: ['UI/UX', 'Figma', 'Mobile Design', 'Agriculture'],
            liveUrl: 'https://www.figma.com/proto/ZxvAzoVlNHMoa52WjD5VoX?node-id=0-1&t=DICaMHI9N2oxd7dq-6',
            featured: true,
            category: 'ui-ux'
        },
        {
            id: 'argertech',
            title: 'ArgerTech',
            description: 'Decentralized agricultural platform built on Internet Computer blockchain that aims to revolutionize agricultural technology with transparent and decentralized solutions.',
            image: '/Screenshot 2025-04-04 162148.png', // Argertech project image
            tags: ['Blockchain', 'ICP', 'Smart Contracts', 'AgTech'],
            liveUrl: 'https://hcaqq-diaaa-aaaan-qzo7a-cai.icp0.io/',
            githubUrl: 'https://github.com/Floramuna/argertech',
            featured: true,
            category: 'blockchain'
        },
        {
            id: 'portfolio',
            title: 'Personal Portfolio',
            description: 'A responsive and interactive personal portfolio website built with modern web technologies to showcase my projects and skills as a developer and designer.',
            image: '/IMG-20241120-WA0273.jpg', // Profile/portfolio image
            tags: ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
            githubUrl: 'https://github.com/Floramuna/portfolio',
            featured: false,
            category: 'portfolio'
        }
    ];
    // Filter projects based on category
    const filteredProjects = filter === 'all'
        ? projects
        : filter === 'featured'
            ? projects.filter(project => project.featured)
            : projects.filter(project => project.category === filter);
    return (<Layout_1.default>
      <framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore a collection of my recent work spanning UI/UX design, blockchain development, and web applications.
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['featured', 'all', 'ui-ux', 'blockchain', 'web-development'].map((tab) => (<button key={tab} onClick={() => setFilter(tab)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === tab
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-purple-50'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (<framer_motion_1.motion.div key={project.id} whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-100">
                <div className="h-64 relative overflow-hidden bg-gray-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4 bg-white"/>
                  {project.featured && (<div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      Featured
                    </div>)}
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (<span key={index} className="text-xs font-medium bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                  
                  <div className="flex space-x-3">
                    {project.liveUrl && (<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                        View Live <lucide_react_1.ArrowUpRight size={16} className="ml-1"/>
                      </a>)}
                    
                    {project.githubUrl && (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        Code <lucide_react_1.Github size={16} className="ml-1"/>
                      </a>)}
                  </div>
                </div>
              </framer_motion_1.motion.div>))}
          </div>
        </div>
      </framer_motion_1.motion.div>
    </Layout_1.default>);
};
exports.default = Projects;
