import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
    ];
    return (<header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold gradient-text" onClick={closeMenu}>
          Port<span className="text-purple">folio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (<Link key={link.title} to={link.path} className={`font-medium transition-all duration-300 hover:text-purple ${location.pathname === link.path ? 'text-purple' : 'text-gray-700'}`}>
              {link.title}
            </Link>))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-16 left-0 right-0 bg-white shadow-lg transition-transform duration-300 transform md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (<Link key={link.title} to={link.path} className={`font-medium p-2 transition-colors duration-300 hover:bg-gray-100 rounded ${location.pathname === link.path ? 'text-purple' : 'text-gray-700'}`} onClick={closeMenu}>
              {link.title}
            </Link>))}
        </div>
      </div>
    </header>);
};
export default Navbar;
