import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/florenceM', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/florenceM', icon: <FaLinkedin /> },
    { name: 'Twitter', url: 'https://twitter.com/florenceM', icon: <FaTwitter /> }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Florence M.
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <button 
              className="md:hidden p-2 -mr-2" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden shadow-md"
            >
              <div className="container mx-auto px-4 py-3">
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      to={link.path}
                      key={link.name}
                      onClick={() => setIsOpen(false)}
                      className={`py-2 px-3 rounded-md transition-colors ${
                        location.pathname === link.path
                          ? 'bg-purple-50 text-purple-600'
                          : 'text-gray-700 hover:bg-purple-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <img 
                  src={`${process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/'}profile-image.jpg`}
                  alt="Florence M. profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-purple-600">Florence M.</h3>
              <p className="text-gray-600 mt-2 text-center md:text-left">
                Web Developer & Designer passionate about creating beautiful and functional experiences.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
                    aria-label={link.name}
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Florence M. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout