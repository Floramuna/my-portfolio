import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    // Handle scroll effect for header
    useEffect(() => {
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
        { name: 'Contact', path: '/contact' }
    ];
    // Social media links
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/florenceM', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/florenceM', icon: 'linkedin' },
        { name: 'Twitter', url: 'https://twitter.com/florenceM', icon: 'twitter' }
    ];
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-md'}`, children: [_jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx(Link, { to: "/", className: "flex items-center", children: _jsx("span", { className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600", children: "Florence M." }) }), _jsx("nav", { className: "hidden md:flex items-center space-x-8", children: navLinks.map((link) => (_jsx(Link, { to: link.path, className: `text-sm font-medium transition-colors ${location.pathname === link.path
                                            ? 'text-purple-600'
                                            : 'text-gray-600 hover:text-purple-600'}`, children: link.name }, link.name))) }), _jsx("button", { className: "md:hidden p-2 -mr-2", onClick: () => setIsOpen(!isOpen), "aria-label": "Toggle menu", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, className: "md:hidden bg-white overflow-hidden shadow-md", children: _jsx("div", { className: "container mx-auto px-4 py-3", children: _jsx("nav", { className: "flex flex-col space-y-3", children: navLinks.map((link) => (_jsx(Link, { to: link.path, onClick: () => setIsOpen(false), className: `py-2 px-3 rounded-md transition-colors ${location.pathname === link.path
                                            ? 'bg-purple-50 text-purple-600'
                                            : 'text-gray-700 hover:bg-purple-50'}`, children: link.name }, link.name))) }) }) })) })] }), _jsx("main", { className: "flex-grow pt-16", children: children }), _jsx("footer", { className: "bg-gray-50 py-8 mt-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "flex flex-col items-center md:items-start", children: [_jsx("div", { className: "relative w-24 h-24 rounded-full overflow-hidden mb-4", children: _jsx("img", { src: "/profile-image.jpg", alt: "Florence M. profile", className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "text-lg font-bold text-purple-600", children: "Florence M." }), _jsx("p", { className: "text-gray-600 mt-2 text-center md:text-left", children: "Web Developer & Designer passionate about creating beautiful and functional experiences." })] }), _jsxs("div", { className: "text-center md:text-left", children: [_jsx("h3", { className: "text-lg font-bold text-gray-800 mb-4", children: "Quick Links" }), _jsx("ul", { className: "space-y-2", children: navLinks.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.path, className: "text-gray-600 hover:text-purple-600 transition-colors", children: link.name }) }, link.name))) })] }), _jsxs("div", { className: "text-center md:text-left", children: [_jsx("h3", { className: "text-lg font-bold text-gray-800 mb-4", children: "Connect" }), _jsx("div", { className: "flex justify-center md:justify-start space-x-4", children: socialLinks.map((link) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 hover:text-purple-600 transition-colors", "aria-label": link.name, children: link.name }, link.name))) })] })] }), _jsx("div", { className: "mt-8 pt-8 border-t border-gray-200 text-center", children: _jsx("p", { className: "text-gray-600", children: "\u00A9 2025 Florence M. All rights reserved." }) })] }) })] }));
};
export default Layout;
