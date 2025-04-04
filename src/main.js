import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
// Type-safe root element selection
const rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error("Root element ('#root') not found");
createRoot(rootElement).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
