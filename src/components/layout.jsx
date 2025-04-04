"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
const framer_motion_1 = require("framer-motion");
const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [isScrolled, setIsScrolled] = (0, react_1.useState)(false);
    const location = (0, react_router_dom_1.useLocation)();
    // Close mobile menu when route changes
    (0, react_1.useEffect)(() => {
        setIsOpen(false);
    }, [location]);
    // Handle scroll effect for header
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Navigation links
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ];
    // Social media links
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/florenceM', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/florenceM', icon: 'linkedin' },
        { name: 'Twitter', url: 'https://twitter.com/florenceM', icon: 'twitter' }
    ];
    return (<div className="min-h-screen flex flex-col">
      {/* Header - Always visible */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <react_router_dom_1.Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Florence M.
              </span>
            </react_router_dom_1.Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (<react_router_dom_1.Link to={link.path} key={link.name} className={`text-sm font-medium transition-colors ${location.pathname === link.path
                ? 'text-purple-600'
                : 'text-gray-600 hover:text-purple-600'}`}>
                  {link.name}
                </react_router_dom_1.Link>))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 -mr-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <lucide_react_1.X size={24}/> : <lucide_react_1.Menu size={24}/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <framer_motion_1.AnimatePresence>
          {isOpen && (<framer_motion_1.motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white overflow-hidden shadow-md">
              <div className="container mx-auto px-4 py-3">
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (<react_router_dom_1.Link to={link.path} key={link.name} onClick={() => setIsOpen(false)} className={`py-2 px-3 rounded-md transition-colors ${location.pathname === link.path
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-700 hover:bg-purple-50'}`}>
                      {link.name}
                    </react_router_dom_1.Link>))}
                </nav>
              </div>
            </framer_motion_1.motion.div>)}
        </framer_motion_1.AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src="/profile-image.jpg" alt="Florence M. profile" className="w-full h-full object-cover"/>
              </div>
              <h3 className="text-lg font-bold text-purple-600">Florence M.</h3>
              <p className="text-gray-600 mt-2 text-center md:text-left">Web Developer & Designer passionate about creating beautiful and functional experiences.</p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (<li key={link.name}>
                    <react_router_dom_1.Link to={link.path} className="text-gray-600 hover:text-purple-600 transition-colors">
                      {link.name}
                    </react_router_dom_1.Link>
                  </li>))}
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((link) => (<a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label={link.name}>
                    {link.name}
                  </a>))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© 2025 Florence M. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);
};
exports.default = Layout;
