import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Page Not Found | Florence Makaa';
        console.error("404 Error: User attempted to access non-existent route");
    }, []);
    return (_jsx(Layout, { children: _jsx("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20 text-center", children: _jsxs("div", { className: "max-w-md mx-auto", children: [_jsxs("div", { className: "relative mb-8", children: [_jsx("h1", { className: "text-9xl font-bold text-purple opacity-10", children: "404" }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-32 w-32 text-purple", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) })] }), _jsx("h2", { className: "text-3xl font-bold mb-4", children: "Page Not Found" }), _jsx("p", { className: "text-gray-600 mb-8", children: "The page you're looking for doesn't exist or may have been moved. Please check the URL or navigate back to safety." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Link, { to: "/", className: "flex-1 sm:flex-none", children: _jsx(Button, { className: "w-full bg-purple hover:bg-purple-dark text-white", children: "Return Home" }) }), _jsx(Link, { to: "/contact", className: "flex-1 sm:flex-none", children: _jsx(Button, { variant: "outline", className: "w-full border-purple text-purple hover:bg-purple/10", children: "Contact Me" }) })] })] }) }) }));
};
export default NotFound;
