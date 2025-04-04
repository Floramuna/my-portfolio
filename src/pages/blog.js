"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Layout_1 = __importDefault(require("@/components/Layout"));
const framer_motion_1 = require("framer-motion");
const Blog = () => {
    return (<Layout_1.default>
      <framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Blog</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thoughts on web development, design, and blockchain technology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-50 rounded-xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Coming Soon</h2>
              <p className="text-gray-700 mb-6">
                I'm currently working on some exciting content that I can't wait to share with you.
                Check back soon for articles on web development, UI/UX design, and blockchain technology.
              </p>
              <a href="https://github.com/Floramuna" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </framer_motion_1.motion.div>
    </Layout_1.default>);
};
exports.default = Blog;
