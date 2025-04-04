"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toaster_1 = require("@/components/ui/toaster");
const sonner_1 = require("@/components/ui/sonner");
const tooltip_1 = require("@/components/ui/tooltip");
const react_query_1 = require("@tanstack/react-query");
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
const Index_1 = __importDefault(require("./pages/Index"));
const About_1 = __importDefault(require("./pages/About"));
const Projects_1 = __importDefault(require("./pages/Projects"));
const ProjectDetail_1 = __importDefault(require("./pages/ProjectDetail"));
const Contact_1 = __importDefault(require("./pages/Contact"));
const NotFound_1 = __importDefault(require("./pages/NotFound"));
// Configure QueryClient with default options
const queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});
const App = () => {
    return (<react_query_1.QueryClientProvider client={queryClient}>
      <tooltip_1.TooltipProvider delayDuration={300}>
        <react_router_dom_1.BrowserRouter>
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<Index_1.default />}/>
            <react_router_dom_1.Route path="/about" element={<About_1.default />}/>
            <react_router_dom_1.Route path="/projects" element={<Projects_1.default />}/>
            <react_router_dom_1.Route path="/projects/:id" element={<ProjectDetail_1.default />}/>
            <react_router_dom_1.Route path="/contact" element={<Contact_1.default />}/>
            <react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
          </react_router_dom_1.Routes>
          
          {/* Toast Providers */}
          <toaster_1.Toaster />
          <sonner_1.Toaster position="bottom-right" richColors/>
        </react_router_dom_1.BrowserRouter>
      </tooltip_1.TooltipProvider>
    </react_query_1.QueryClientProvider>);
};
exports.default = App;
