"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
const client_1 = require("react-dom/client");
// Type-safe root element selection
const rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error("Root element ('#root') not found");
(0, client_1.createRoot)(rootElement).render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>);
