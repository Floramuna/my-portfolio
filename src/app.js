import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/projectDetail";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
// Configure QueryClient with default options
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});
const App = () => {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(TooltipProvider, { delayDuration: 300, children: _jsxs(BrowserRouter, { children: [_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Index, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/projects/:id", element: _jsx(ProjectDetail, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Toaster, {}), _jsx(Sonner, { position: "bottom-right", richColors: true })] }) }) }));
};
export default App;
