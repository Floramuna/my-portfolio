import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs(Layout, { children: [_jsxs("section", { className: "relative bg-gradient-to-b from-slate-50 to-purple-50 pt-24 pb-32", children: [_jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("span", { className: "px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6 inline-block", children: "About Me" }), _jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in", children: ["Know ", _jsx("span", { className: "gradient-text", children: "Who I Am" })] }), _jsx("p", { className: "text-lg md:text-xl text-slate-700 max-w-3xl mx-auto", children: "Get to know the developer behind the code \u2013 my journey, expertise, and what drives my passion for technology." })] }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-16 bg-white", style: {
                            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
                        } })] }), _jsx("section", { className: "py-24 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 flex flex-col md:flex-row items-center gap-16", children: [_jsx("div", { className: "md:w-2/5 flex justify-center animate-fade-in", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 opacity-20 blur-lg" }), _jsx("div", { className: "w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10", children: _jsx("img", { src: "/profile-image.jpg", alt: "Florence Makaa", className: "w-full h-full object-cover" }) })] }) }), _jsxs("div", { className: "md:w-3/5 animate-fade-in", children: [_jsx("span", { className: "text-purple-600 font-semibold mb-2 block", children: "My Story" }), _jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: ["Hello, I'm ", _jsx("span", { className: "gradient-text", children: "Florence Makaa" })] }), _jsx("p", { className: "text-lg text-slate-700 mb-4", children: "A dedicated and innovative developer based in Nairobi, Kenya, specializing in Web Development, Android Development, Web3 Development, and UI/UX Design." }), _jsx("p", { className: "text-lg text-slate-700 mb-6", children: "I'm passionate about creating user-centered designs and deploying cutting-edge solutions for decentralized applications. My approach bridges technology and design to deliver seamless, impactful user experiences. Currently, I serve as an active ambassador for ICP Hub Kenya, fostering blockchain adoption and innovation." }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Link, { to: "/projects", children: _jsx(Button, { className: "bg-purple-700 hover:bg-purple-800 text-white px-6 py-3", children: "View Projects" }) }), _jsxs("a", { href: "/florence-makaa-cv.pdf", download: true, className: "px-6 py-3 border-2 border-purple-500 text-purple-700 rounded-md hover:bg-purple-50 transition-colors flex items-center font-medium", children: ["Download CV", _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 ml-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) })] })] })] })] }) }), _jsx("section", { className: "py-24 bg-purple-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-4", children: ["Technical ", _jsx("span", { className: "gradient-text", children: "Expertise" })] }), _jsx("p", { className: "text-center text-slate-600 max-w-2xl mx-auto mb-16", children: "A showcase of the technologies and tools I specialize in" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
                                { name: 'Web Development', icon: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z' },
                                { name: 'Android Development', icon: 'M9 19V6l12-3v13M9 19a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2l12-3M9 16h0' },
                                { name: 'Web3 Development', icon: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z' },
                                { name: 'UI/UX Design', icon: 'M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343' },
                                { name: 'React/Next.js', icon: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' },
                                { name: 'Blockchain Technology', icon: 'M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5' },
                                { name: 'Node.js', icon: 'M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25' },
                                { name: 'Motoko', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' }
                            ].map((skill, index) => (_jsxs("div", { className: "flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white stagger-item group hover:border-purple-200 border border-transparent", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-8 h-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: skill.icon }) }) }), _jsx("h3", { className: "text-lg font-semibold text-slate-900", children: skill.name })] }, index))) })] }) }), _jsx("section", { className: "py-24 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-4", children: ["My ", _jsx("span", { className: "gradient-text", children: "Journey" })] }), _jsx("p", { className: "text-center text-slate-600 max-w-2xl mx-auto mb-16", children: "The path that led me to where I am today" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16", children: [_jsxs("div", { children: [_jsxs("h3", { className: "text-2xl font-semibold mb-8 pb-4 border-b border-slate-200 flex items-center", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-6 h-6 mr-2 text-purple-600", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" }) }), "Experience"] }), _jsx("div", { className: "space-y-8", children: [
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
                                            ].map((item, index) => (_jsxs("div", { className: "relative pl-10 pb-8 border-l-2 border-purple-300 last:border-0 last:pb-0 stagger-item", children: [_jsx("div", { className: "absolute w-5 h-5 bg-purple-600 rounded-full -left-2.5 top-0 border-4 border-white shadow-md" }), _jsx("h4", { className: "text-xl font-semibold", children: item.title }), _jsxs("p", { className: "text-purple-600 mb-2", children: [item.company, " ", item.location ? `• ${item.location}` : '', " \u2022 ", item.period] }), _jsx("p", { className: "text-slate-600", children: item.description })] }, index))) })] }), _jsxs("div", { children: [_jsxs("h3", { className: "text-2xl font-semibold mb-8 pb-4 border-b border-slate-200 flex items-center", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-6 h-6 mr-2 text-purple-600", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M22 10v6M2 10l10-5 10 5M2 10v6m0 0l10 5m0 0l10-5m0 0V10m-10 0v6" }) }), "Education & Certifications"] }), _jsx("div", { className: "space-y-8", children: [
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
                                            ].map((item, index) => (_jsxs("div", { className: "relative pl-10 pb-8 border-l-2 border-purple-300 last:border-0 last:pb-0 stagger-item", children: [_jsx("div", { className: "absolute w-5 h-5 bg-purple-600 rounded-full -left-2.5 top-0 border-4 border-white shadow-md" }), _jsx("h4", { className: "text-xl font-semibold", children: item.degree }), _jsxs("p", { className: "text-purple-600 mb-2", children: [item.institution, " \u2022 ", item.period] }), _jsx("p", { className: "text-slate-600", children: item.description })] }, index))) })] })] })] }) }), _jsx("section", { className: "py-24 bg-purple-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-4", children: ["My ", _jsx("span", { className: "gradient-text", children: "Interests" })] }), _jsx("p", { className: "text-center text-slate-600 max-w-2xl mx-auto mb-16", children: "Areas that inspire my professional growth and creativity" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
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
                            ].map((interest, index) => (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all stagger-item", children: [_jsx("div", { className: "w-14 h-14 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-8 h-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: interest.icon }) }) }), _jsx("h3", { className: "text-xl font-bold mb-4", children: interest.title }), _jsx("p", { className: "text-slate-600", children: interest.description })] }, index))) })] }) }), _jsx("section", { className: "py-24 bg-gradient-to-r from-purple-800 to-purple-600 text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Ready to Build Something Together?" }), _jsx("p", { className: "text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10", children: "Whether you need a web app, mobile solution, or blockchain integration, I'm here to help bring your vision to life." }), _jsx(Link, { to: "/contact", children: _jsx(Button, { variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 text-lg font-medium", children: "Let's Connect" }) })] }) })] }));
};
export default About;
