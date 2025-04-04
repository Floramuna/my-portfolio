"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("@/components/ui/button");
const Layout_1 = __importDefault(require("@/components/Layout"));
const About = () => {
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    return (<Layout_1.default>
      {/* Hero Section with improved gradient */}
      <section className="relative bg-gradient-to-b from-slate-50 to-purple-50 pt-24 pb-32">
        <div className="container mx-auto px-4 text-center">
          <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6 inline-block">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Know <span className="gradient-text">Who I Am</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            Get to know the developer behind the code – my journey, expertise, and what drives my passion for technology.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
        }}></div>
      </section>

      {/* Bio Section with improved layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/5 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 opacity-20 blur-lg"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                <img src="/profile-image.jpg" alt="Florence Makaa" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 animate-fade-in">
            <span className="text-purple-600 font-semibold mb-2 block">My Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hello, I'm <span className="gradient-text">Florence Makaa</span>
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              A dedicated and innovative developer based in Nairobi, Kenya, specializing in Web Development, Android Development, Web3 Development, and UI/UX Design.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              I'm passionate about creating user-centered designs and deploying cutting-edge solutions for decentralized applications. 
              My approach bridges technology and design to deliver seamless, impactful user experiences. 
              Currently, I serve as an active ambassador for ICP Hub Kenya, fostering blockchain adoption and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <react_router_dom_1.Link to="/projects">
                <button_1.Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3">
                  View Projects
                </button_1.Button>
              </react_router_dom_1.Link>
              <a href="/florence-makaa-cv.pdf" download className="px-6 py-3 border-2 border-purple-500 text-purple-700 rounded-md hover:bg-purple-50 transition-colors flex items-center font-medium">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with enhanced card styling */}
      <section className="py-24 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
            A showcase of the technologies and tools I specialize in
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
            { name: 'Web Development', icon: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z' },
            { name: 'Android Development', icon: 'M9 19V6l12-3v13M9 19a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2l12-3M9 16h0' },
            { name: 'Web3 Development', icon: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z' },
            { name: 'UI/UX Design', icon: 'M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343' },
            { name: 'React/Next.js', icon: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' },
            { name: 'Blockchain Technology', icon: 'M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5' },
            { name: 'Node.js', icon: 'M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25' },
            { name: 'Motoko', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' }
        ].map((skill, index) => (<div key={index} className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white stagger-item group hover:border-purple-200 border border-transparent">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={skill.icon}></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
              </div>))}
          </div>
        </div>
      </section>

      {/* Timeline Section with enhanced styling - Updated based on CV */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
            The path that led me to where I am today
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 pb-4 border-b border-slate-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path>
                </svg>
                Experience
              </h3>
              
              <div className="space-y-8">
                {[
            {
                title: "Ambassador",
                company: "ICP Hub Kenya",
                location: "Kiriri Women's University",
                period: "Present",
                description: "Spearheading initiatives to promote blockchain technology and decentralized application development. Engaging with communities to raise awareness and inspire participation in Web3 projects."
            },
            {
                title: "UI/UX Designer",
                company: "Mobile Project",
                period: "2023 - 2024",
                description: "Designed user interfaces for mobile applications with a focus on user experience and accessibility. Created prototypes and wireframes for client projects."
            },
            {
                title: "Web3 Developer",
                company: "Argertech Project",
                period: "2023",
                description: "Contributed to blockchain-based applications and created decentralized solutions leveraging Web3 technologies."
            }
        ].map((item, index) => (<div key={index} className="relative pl-10 pb-8 border-l-2 border-purple-300 last:border-0 last:pb-0 stagger-item">
                    <div className="absolute w-5 h-5 bg-purple-600 rounded-full -left-2.5 top-0 border-4 border-white shadow-md"></div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-purple-600 mb-2">{item.company} {item.location ? `• ${item.location}` : ''} • {item.period}</p>
                    <p className="text-slate-600">{item.description}</p>
                  </div>))}
              </div>
            </div>
            
            {/* Education and Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 pb-4 border-b border-slate-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5M2 10v6m0 0l10 5m0 0l10-5m0 0V10m-10 0v6"></path>
                </svg>
                Education & Certifications
              </h3>
              
              <div className="space-y-8">
                {[
            {
                degree: "KCSE Certification",
                institution: "Rusinga Island of Hope Humanist Secondary School",
                period: "2019 - 2022",
                description: "Completed secondary education with a focus on science and technology subjects."
            },
            {
                degree: "KCPE Certification",
                institution: "Kyamboo Primary School",
                period: "2010 - 2018",
                description: "Completed primary education with excellence in mathematics and science."
            },
            {
                degree: "Certificate in Blockchain Technology",
                institution: "Trezor Academy",
                period: "2025",
                description: "Specialized training in blockchain concepts, distributed ledger technology, and smart contract development."
            },
            {
                degree: "Projects",
                institution: "Portfolio Work",
                period: "Ongoing",
                description: "Mobile UI/UX Design: https://hcaqq-diaaa-aaaan-qzo7a-cai.icp0.io/ | Argertech project: https://www.figma.com/proto/ZxvAzoVlNHMoa52WjD5VoX"
            }
        ].map((item, index) => (<div key={index} className="relative pl-10 pb-8 border-l-2 border-purple-300 last:border-0 last:pb-0 stagger-item">
                    <div className="absolute w-5 h-5 bg-purple-600 rounded-full -left-2.5 top-0 border-4 border-white shadow-md"></div>
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                    <p className="text-purple-600 mb-2">{item.institution} • {item.period}</p>
                    <p className="text-slate-600">{item.description}</p>
                  </div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section - Based on CV */}
      <section className="py-24 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
            Areas that inspire my professional growth and creativity
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
                title: "Blockchain Education",
                icon: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
                description: "Championing blockchain education and innovation, particularly in emerging markets and communities."
            },
            {
                title: "Emerging Technologies",
                icon: "M5 3v16h16M5 19l6-6m-6 0l6 6m9-18l-9 9",
                description: "Exploring cutting-edge technologies in Web and Mobile development to create more impactful solutions."
            },
            {
                title: "Inclusive Design",
                icon: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9ZM12 3a9 9 0 0 1 6 2.3l-6 6.7-6-6.7a9 9 0 0 1 6-2.3",
                description: "Advocating for inclusive and sustainable design practices that make technology accessible to all."
            }
        ].map((interest, index) => (<div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all stagger-item">
                <div className="w-14 h-14 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={interest.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{interest.title}</h3>
                <p className="text-slate-600">{interest.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Call to Action with improved gradient background */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Together?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Whether you need a web app, mobile solution, or blockchain integration, I'm here to help bring your vision to life.
          </p>
          <react_router_dom_1.Link to="/contact">
            <button_1.Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 text-lg font-medium">
              Let's Connect
            </button_1.Button>
          </react_router_dom_1.Link>
        </div>
      </section>
    </Layout_1.default>);
};
exports.default = About;
