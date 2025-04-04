import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
// Moved projects data to a separate constant for better organization
const PROJECTS_DATA = [
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'A responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.',
        longDescription: `This e-commerce website was built from scratch using React, TypeScript, and Node.js. The project features a responsive design that works seamlessly across devices.

Key features:
- Product filtering and search
- Shopping cart with state management
- Secure payment integration
- Admin dashboard
- Performance optimized (Lighthouse score 95+)`,
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2080&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2070&auto=format&fit=crop'
        ],
        tags: ['React', 'TypeScript', 'Node.js', 'Web3'],
        client: 'RetailCo Inc.',
        date: 'June 2023',
        category: 'web-app',
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'Personal Blog',
        description: 'Minimalist blog with dark/light mode and content management',
        longDescription: `A headless CMS blog built with Next.js and Sanity.io focusing on performance and accessibility.

Technical highlights:
- SSG with incremental static regeneration
- Dark/light mode with system preference
- Custom rich text components
- SEO optimized (100/100 Lighthouse)`,
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2073&auto=format&fit=crop'
        ],
        tags: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
        client: 'Self',
        date: 'March 2023',
        category: 'website',
        link: '#',
        github: '#'
    }
];
const ProjectDetail = () => {
    const { id } = useParams();
    const projectId = parseInt(id || '1');
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = project ? `${project.title} | Florence Makaa` : 'Project Not Found';
    }, [id, project]);
    if (!project) {
        return (_jsx(Layout, { children: _jsxs("div", { className: "container mx-auto px-4 py-20 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-6", children: "Project Not Found" }), _jsx("p", { className: "mb-8", children: "The requested project doesn't exist in our portfolio." }), _jsx(Link, { to: "/projects", children: _jsx(Button, { className: "bg-purple hover:bg-purple-dark text-white", children: "Browse All Projects" }) })] }) }));
    }
    return (_jsxs(Layout, { children: [_jsx("section", { className: "relative pt-20", children: _jsxs("div", { className: "h-64 md:h-96 w-full overflow-hidden relative", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover", loading: "lazy" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-end pb-12 md:pb-20 px-4 md:px-8", children: _jsxs("div", { className: "text-white max-w-4xl w-full mx-auto", children: [_jsx("h1", { className: "text-3xl md:text-5xl font-bold mb-4", children: project.title }), _jsx("p", { className: "text-lg md:text-xl mb-6", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map(tag => (_jsx("span", { className: "px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm", children: tag }, tag))) })] }) })] }) }), _jsx("section", { className: "py-16 bg-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: "Project Details" }), _jsx("div", { className: "prose max-w-none", children: project.longDescription.split('\n').map((paragraph, i) => (_jsx("p", { className: "mb-4 text-gray-700", children: paragraph }, i))) }), project.gallery.length > 0 && (_jsxs("div", { className: "mt-16", children: [_jsx("h3", { className: "text-2xl font-bold mb-8", children: "Project Screenshots" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: project.gallery.map((image, index) => (_jsx("div", { className: "rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow", children: _jsx("img", { src: image, alt: `${project.title} screenshot ${index + 1}`, className: "w-full h-auto object-cover", loading: "lazy" }) }, index))) })] }))] }), _jsx("div", { className: "space-y-8", children: _jsxs("div", { className: "bg-gray-50 p-6 rounded-lg sticky top-8", children: [_jsx("h3", { className: "text-xl font-semibold mb-6 border-b pb-2", children: "Project Info" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-gray-500 mb-1", children: "Client" }), _jsx("p", { children: project.client })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-gray-500 mb-1", children: "Date" }), _jsx("p", { children: project.date })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-gray-500 mb-1", children: "Category" }), _jsx("p", { className: "capitalize", children: project.category })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-gray-500 mb-1", children: "Technologies" }), _jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: project.tags.map(tag => (_jsx("span", { className: "px-3 py-1 bg-purple/10 text-purple rounded-full text-sm", children: tag }, tag))) })] }), _jsxs("div", { className: "pt-4 space-y-3", children: [project.link && (_jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "block", children: _jsx(Button, { className: "w-full bg-purple hover:bg-purple-dark text-white", children: "View Live Project" }) })), project.github && (_jsx("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "block", children: _jsx(Button, { variant: "outline", className: "w-full border-purple text-purple hover:bg-purple/10", children: "View Code" }) }))] })] })] }) })] }) }) }), _jsx("section", { className: "py-16 bg-gray-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [_jsx(Link, { to: "/projects", className: "w-full md:w-auto", children: _jsxs(Button, { variant: "outline", className: "w-full border-purple text-purple hover:bg-purple/10 flex items-center", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5 mr-2", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" }) }), "All Projects"] }) }), _jsxs("div", { className: "flex gap-3 w-full md:w-auto", children: [projectId > 1 && (_jsx(Link, { to: `/projects/${projectId - 1}`, className: "flex-1 md:flex-none", children: _jsx(Button, { variant: "outline", className: "w-full border-purple text-purple hover:bg-purple/10", children: "Previous" }) })), projectId < PROJECTS_DATA.length && (_jsx(Link, { to: `/projects/${projectId + 1}`, className: "flex-1 md:flex-none", children: _jsx(Button, { variant: "outline", className: "w-full border-purple text-purple hover:bg-purple/10", children: "Next" }) }))] })] }) }) }), _jsx("section", { className: "py-20 bg-purple text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Have a similar project in mind?" }), _jsx("p", { className: "text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10", children: "Let's discuss how I can help bring your vision to life with custom digital solutions." }), _jsx(Link, { to: "/contact", children: _jsx(Button, { variant: "outline", className: "border-white text-white hover:bg-white hover:text-purple", children: "Get in Touch" }) })] }) })] }));
};
export default ProjectDetail;
