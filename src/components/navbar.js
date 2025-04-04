import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("header", { className: `fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'py-4 bg-transparent'}`, children: [_jsxs("div", { className: "container mx-auto px-4 flex justify-between items-center", children: [_jsxs(Link, { to: "/", className: "text-2xl font-bold gradient-text", onClick: closeMenu, children: ["Port", _jsx("span", { className: "text-purple", children: "folio" })] }), _jsx("nav", { className: "hidden md:flex space-x-8", children: navLinks.map((link) => (_jsx(Link, { to: link.path, className: `font-medium transition-all duration-300 hover:text-purple ${location.pathname === link.path ? 'text-purple' : 'text-gray-700'}`, children: link.title }, link.title))) }), _jsxs("button", { className: "md:hidden flex flex-col justify-center items-center w-10 h-10", onClick: toggleMenu, "aria-label": "Toggle menu", children: [_jsx("span", { className: `block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}` }), _jsx("span", { className: `block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}` }), _jsx("span", { className: `block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}` })] })] }), _jsx("div", { className: `fixed top-16 left-0 right-0 bg-white shadow-lg transition-transform duration-300 transform md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`, children: _jsx("div", { className: "container mx-auto px-4 py-4 flex flex-col space-y-4", children: navLinks.map((link) => (_jsx(Link, { to: link.path, className: `font-medium p-2 transition-colors duration-300 hover:bg-gray-100 rounded ${location.pathname === link.path ? 'text-purple' : 'text-gray-700'}`, onClick: closeMenu, children: link.title }, link.title))) }) })] }));
};
export default Navbar;
