"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("@/components/ui/button");
const Layout_1 = __importDefault(require("@/components/Layout"));
const NotFound = () => {
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
        document.title = 'Page Not Found | Florence Makaa';
        console.error("404 Error: User attempted to access non-existent route");
    }, []);
    return (<Layout_1.default>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="relative mb-8">
            <h1 className="text-9xl font-bold text-purple opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or may have been moved.
            Please check the URL or navigate back to safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <react_router_dom_1.Link to="/" className="flex-1 sm:flex-none">
              <button_1.Button className="w-full bg-purple hover:bg-purple-dark text-white">
                Return Home
              </button_1.Button>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/contact" className="flex-1 sm:flex-none">
              <button_1.Button variant="outline" className="w-full border-purple text-purple hover:bg-purple/10">
                Contact Me
              </button_1.Button>
            </react_router_dom_1.Link>
          </div>
        </div>
      </div>
    </Layout_1.default>);
};
exports.default = NotFound;
