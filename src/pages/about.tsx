import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const About = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get to know me better – my journey, skills, and the passion that drives my work.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?q=80&w=2080&auto=format&fit=crop"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-32 h-32 bg-purple rounded-lg absolute -bottom-6 -right-6 z-0"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-gray-700 mb-4">
                Hello! I'm [Your Name], a passionate web developer specializing in creating beautiful, functional websites using HTML, CSS, and JavaScript. I have a strong eye for design and enjoy bringing concepts to life through clean, efficient code.
              </p>
              <p className="text-gray-700 mb-4">
                My journey began in [starting year] when I first discovered my passion for web development. Since then, I've been constantly learning and improving my skills to stay at the forefront of web technologies and design trends.
              </p>
              <p className="text-gray-700 mb-6">
                I believe that great websites are a perfect blend of aesthetics and functionality. My approach is to create solutions that not only look beautiful but also provide an intuitive user experience and meet the specific needs of each project.
              </p>
              <Link to="/contact">
                <Button className="bg-purple hover:bg-purple-dark text-white">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold border-b border-gray-200 pb-3">Professional Experience</h3>
              
              <div className="relative pl-8 border-l-2 border-purple">
                <div className="absolute w-4 h-4 bg-purple rounded-full -left-2.5 top-0"></div>
                <h4 className="text-xl font-semibold">Web Developer</h4>
                <p className="text-gray-500 mb-2">Company Name • 2022 - Present</p>
                <p className="text-gray-700">
                  Developed and maintained client websites, ensuring responsive design and cross-browser compatibility. Collaborated with design team to implement visual elements.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple">
                <div className="absolute w-4 h-4 bg-purple rounded-full -left-2.5 top-0"></div>
                <h4 className="text-xl font-semibold">Frontend Developer</h4>
                <p className="text-gray-500 mb-2">Company Name • 2019 - 2022</p>
                <p className="text-gray-700">
                  Created and optimized interactive web applications. Worked with APIs and implemented responsive design principles across multiple projects.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple">
                <div className="absolute w-4 h-4 bg-purple rounded-full -left-2.5 top-0"></div>
                <h4 className="text-xl font-semibold">Web Design Intern</h4>
                <p className="text-gray-500 mb-2">Company Name • 2018 - 2019</p>
                <p className="text-gray-700">
                  Assisted senior developers in website creation and maintenance. Gained valuable experience in HTML, CSS, and JavaScript implementation.
                </p>
              </div>
            </div>
            
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold border-b border-gray-200 pb-3">Education</h3>
              
              <div className="relative pl-8 border-l-2 border-purple">
                <div className="absolute w-4 h-4 bg-purple rounded-full -left-2.5 top-0"></div>
                <h4 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h4>
                <p className="text-gray-500 mb-2">University Name • 2016 - 2020</p>
                <p className="text-gray-700">
                  Studied algorithms, data structures, and software development principles with a focus on web technologies.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple">
                <div className="absolute w-4 h-4 bg-purple rounded-full -left-2.5 top-0"></div>
                <h4 className="text-xl font-semibold">Web Development Certification</h4>
                <p className="text-gray-500 mb-2">Certification Body • 2018</p>
                <p className="text-gray-700">
                  Specialized training in frontend technologies including HTML5, CSS3, JavaScript, and responsive design principles.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple">
                <div className="absolute w-4 h-4 bg-purple rounded-full -left-2.5 top-0"></div>
                <h4 className="text-xl font-semibold">UX/UI Design Workshop</h4>
                <p className="text-gray-500 mb-2">Design Institute • 2019</p>
                <p className="text-gray-700">
                  Intensive workshop on user experience principles, interface design, and prototyping techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">HTML5</span>
                    <span className="text-purple">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">CSS3</span>
                    <span className="text-purple">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">JavaScript</span>
                    <span className="text-purple">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Responsive Design</span>
                    <span className="text-purple">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">UI/UX Design</span>
                    <span className="text-purple">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg">Communication</h4>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                      <line x1="2" y1="20" x2="2.01" y2="20"></line>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg">Problem-Solving</h4>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg">Creativity</h4>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg">Time Management</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Now that you know a bit more about me, I'd love to hear about your project. Let's discuss how we can work together to achieve your goals.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
